export interface CartItem {
  produto_id: string;
  nome: string;
  preco_unitario: number;
  quantidade: number;
  observacoes?: string;
  image_url?: string | null;
  variacao?: string;
  adicionais?: string[];
}

const CART_KEY = 'pizzaria_cart_v1';

export function getCart(): CartItem[] {
  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function addToCart(item: CartItem): void {
  const current = getCart();
  const existingIndex = current.findIndex(
    (value) =>
      value.produto_id === item.produto_id &&
      value.variacao === item.variacao &&
      JSON.stringify(value.adicionais ?? []) === JSON.stringify(item.adicionais ?? []),
  );

  if (existingIndex >= 0) {
    current[existingIndex].quantidade += item.quantidade;
  } else {
    current.push(item);
  }

  saveCart(current);
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
}
