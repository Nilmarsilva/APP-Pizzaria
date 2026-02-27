const API_BASE = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000';
const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN ?? 'admin-token';

export interface AuthResponse {
  token: string;
  usuario_id: string;
}

export interface UserProfile {
  id: string;
  nome: string;
  whatsapp: string;
}

export interface LoyaltyPointsResponse {
  usuario_id: string;
  pontos: number;
}

export interface UserNotification {
  id: string;
  user_id: string;
  titulo: string;
  mensagem: string;
  tipo: string;
  lida: boolean;
  criado_em: string;
}

export interface Category {
  id: string;
  nome: string;
  posicao: number;
}

export interface ProductSummary {
  id: string;
  categoria_id: string;
  nome: string;
  preco_base: number;
  image_url?: string | null;
  disponivel: boolean;
  estoque_disponivel: boolean;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  nome_tamanho: 'M' | 'G' | 'GG' | string;
  preco: number;
  ordem: number;
}

export interface ProductAddon {
  id: string;
  product_id: string;
  nome: string;
  tipo: 'addon' | 'borda' | string;
  preco: number;
  maximo_selecoes: number;
}

export interface ProductDetailed {
  id: string;
  categoria_id: string;
  nome: string;
  descricao: string;
  preco_base: number;
  image_url?: string | null;
  disponivel: boolean;
  estoque_disponivel: boolean;
  variacoes: ProductVariant[];
  adicionais: ProductAddon[];
}

export interface OrderItemPayload {
  produto_id: string;
  quantidade: number;
  observacoes?: string;
}

export interface OrderQuote {
  total_produtos: number;
  taxa_entrega: number;
  desconto_aplicado: number;
  total_geral: number;
  cupom_codigo?: string | null;
}

export interface OrderStatus {
  pedido_id: string;
  status: string;
}

export interface Coupon {
  codigo: string;
  tipo: "percentage" | "fixed" | string;
  valor: number;
  minimo_pedido: number;
  ativo: boolean;
}

export interface OrderSummary {
  pedido_id: string;
  status: string;
  usuario_id: string;
  courier_id?: string | null;
  total_produtos: number;
  taxa_entrega: number;
  total_geral: number;
  desconto_aplicado: number;
  cupom_codigo?: string | null;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Erro ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  register: (nome: string, whatsapp: string, senha: string = '123456') =>
    request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ nome, whatsapp, senha }),
    }),

  getUser: (userId: string) => request<UserProfile>(`/auth/users/${userId}`),

  updateUser: (userId: string, payload: { nome: string; whatsapp: string }) =>
    request<UserProfile>(`/auth/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),

  getLoyaltyPoints: (userId: string) =>
    request<LoyaltyPointsResponse>(`/loyalty/points/${userId}`),

  listNotifications: (userId: string) => request<UserNotification[]>(`/notifications/${userId}`),

  markNotificationRead: (notificationId: string, lida: boolean = true) =>
    request<UserNotification>(`/notifications/${notificationId}`, {
      method: "PATCH",
      body: JSON.stringify({ lida }),
    }),

  listCategories: () => request<Category[]>('/menu/categories'),

  listMenu: (params?: { categoria_id?: string; q?: string }) => {
    const query = new URLSearchParams();
    if (params?.categoria_id) query.set('categoria_id', params.categoria_id);
    if (params?.q) query.set('q', params.q);
    const suffix = query.toString() ? `?${query.toString()}` : '';
    return request<ProductSummary[]>(`/menu/${suffix}`);
  },

  listMenuDetailed: (categoriaId?: string) => {
    const suffix = categoriaId ? `?categoria_id=${categoriaId}` : '';
    return request<ProductDetailed[]>(`/menu/detailed${suffix}`);
  },

  quoteOrder: (payload: {
    itens: OrderItemPayload[];
    tipo_entrega: string;
    cupom_codigo?: string;
    bairro_entrega?: string;
  }) =>
    request<OrderQuote>('/orders/quote', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  createOrder: (payload: {
    itens: OrderItemPayload[];
    metodo_pagamento: string;
    tipo_entrega: string;
    cupom_codigo?: string;
    bairro_entrega?: string;
    usuario_id?: string;
  }) =>
    request<OrderStatus>('/orders/', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  getOrderStatus: (orderId: string) => request<OrderStatus>(`/orders/track/${orderId}`),

  getOrderSummary: (orderId: string) => request<OrderSummary>(`/orders/${orderId}`),

  listUserOrders: (userId: string) => request<OrderSummary[]>(`/orders/user/${userId}`),

  listAdminCoupons: () =>
    request<Coupon[]>('/admin/coupons', {
      headers: { 'X-Admin-Token': ADMIN_TOKEN },
    }),

  createAdminCoupon: (payload: {
    codigo: string;
    tipo: 'percentage' | 'fixed';
    valor: number;
    minimo_pedido: number;
    ativo: boolean;
  }) =>
    request<Coupon>('/admin/coupons', {
      method: 'POST',
      headers: { 'X-Admin-Token': ADMIN_TOKEN },
      body: JSON.stringify(payload),
    }),

  updateAdminCoupon: (
    codigo: string,
    payload: {
      tipo: 'percentage' | 'fixed';
      valor: number;
      minimo_pedido: number;
      ativo: boolean;
    },
  ) =>
    request<Coupon>(`/admin/coupons/${encodeURIComponent(codigo)}`, {
      method: 'PATCH',
      headers: { 'X-Admin-Token': ADMIN_TOKEN },
      body: JSON.stringify(payload),
    }),

  deleteAdminCoupon: (codigo: string) =>
    request<{ detail: string }>(`/admin/coupons/${encodeURIComponent(codigo)}`, {
      method: 'DELETE',
      headers: { 'X-Admin-Token': ADMIN_TOKEN },
    }),

};
