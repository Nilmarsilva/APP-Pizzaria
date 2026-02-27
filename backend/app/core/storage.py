from __future__ import annotations

from dataclasses import dataclass, field
from uuid import uuid4


@dataclass
class StoreSettings:
    """Configurações gerais da loja (armazenamento em memória)."""

    nome: str = "Pizzaria Demo"
    endereco: str = "Rua Principal, 123"
    horario_abertura: str = "18:00"
    horario_fechamento: str = "23:30"
    taxa_entrega_padrao: float = 5.0


@dataclass
class LoyaltySettings:
    """Configurações do programa de fidelidade."""

    regra_valor: float = 50.0
    pontos_por_regra: int = 1
    limite_premio: int = 10


@dataclass
class PaymentSettings:
    """Configurações de pagamento e integrações."""

    pix_chave: str = ""
    habilitar_cartao: bool = True
    habilitar_dinheiro: bool = True
    url_webhook_pagamento: str = ""


@dataclass
class Category:
    """Categoria do cardápio."""

    id: str
    nome: str
    posicao: int


@dataclass
class Product:
    """Produto do cardápio."""

    id: str
    categoria_id: str
    nome: str
    descricao: str
    preco_base: float
    image_url: str | None = None
    estoque_quantidade: int = 0
    estoque_ilimitado: bool = True
    disponivel: bool = True


@dataclass
class ProductVariant:
    """Variações de tamanho do produto (M/G/GG)."""

    id: str
    product_id: str
    nome_tamanho: str
    preco: float
    ordem: int = 0
    ativo: bool = True
    estoque_quantidade: int = 0
    estoque_ilimitado: bool = True


@dataclass
class ProductAddon:
    """Adicionais e bordas disponíveis para o produto."""

    id: str
    product_id: str
    nome: str
    tipo: str
    preco: float
    maximo_selecoes: int = 1
    ativo: bool = True




@dataclass
class UserNotification:
    """Notificação direcionada ao cliente."""

    id: str
    user_id: str
    titulo: str
    mensagem: str
    tipo: str = "promo"
    lida: bool = False
    criado_em: str = ""


@dataclass
class InMemoryDB:
    """Banco de dados simples em memória para apoiar o protótipo."""

    settings: StoreSettings = field(default_factory=StoreSettings)
    loyalty_settings: LoyaltySettings = field(default_factory=LoyaltySettings)
    payment_settings: PaymentSettings = field(default_factory=PaymentSettings)
    categories: list[Category] = field(default_factory=list)
    products: list[Product] = field(default_factory=list)
    product_variants: list[ProductVariant] = field(default_factory=list)
    product_addons: list[ProductAddon] = field(default_factory=list)
    orders: list["Order"] = field(default_factory=list)
    neighborhoods: list["NeighborhoodFee"] = field(default_factory=list)
    coupons: list["Coupon"] = field(default_factory=list)
    couriers: list["Courier"] = field(default_factory=list)
    users: list["User"] = field(default_factory=list)
    notifications: list[UserNotification] = field(default_factory=list)

    def add_category(self, nome: str, posicao: int) -> Category:
        categoria = Category(id=str(uuid4()), nome=nome, posicao=posicao)
        self.categories.append(categoria)
        return categoria

    def add_product(
        self,
        categoria_id: str,
        nome: str,
        descricao: str,
        preco_base: float,
        image_url: str | None = None,
        estoque_quantidade: int = 0,
        estoque_ilimitado: bool = True,
        disponivel: bool = True,
    ) -> Product:
        produto = Product(
            id=str(uuid4()),
            categoria_id=categoria_id,
            nome=nome,
            descricao=descricao,
            preco_base=preco_base,
            image_url=image_url,
            estoque_quantidade=estoque_quantidade,
            estoque_ilimitado=estoque_ilimitado,
            disponivel=disponivel,
        )
        self.products.append(produto)
        return produto

    def add_product_variant(
        self,
        product_id: str,
        nome_tamanho: str,
        preco: float,
        ordem: int = 0,
        ativo: bool = True,
        estoque_quantidade: int = 0,
        estoque_ilimitado: bool = True,
    ) -> ProductVariant:
        variante = ProductVariant(
            id=str(uuid4()),
            product_id=product_id,
            nome_tamanho=nome_tamanho,
            preco=preco,
            ordem=ordem,
            ativo=ativo,
            estoque_quantidade=estoque_quantidade,
            estoque_ilimitado=estoque_ilimitado,
        )
        self.product_variants.append(variante)
        return variante

    def add_product_addon(
        self,
        product_id: str,
        nome: str,
        tipo: str,
        preco: float,
        maximo_selecoes: int = 1,
        ativo: bool = True,
    ) -> ProductAddon:
        adicional = ProductAddon(
            id=str(uuid4()),
            product_id=product_id,
            nome=nome,
            tipo=tipo,
            preco=preco,
            maximo_selecoes=maximo_selecoes,
            ativo=ativo,
        )
        self.product_addons.append(adicional)
        return adicional

    def add_order(self, order: "Order") -> "Order":
        """Registra um novo pedido na memória."""
        self.orders.append(order)
        return order

    def add_neighborhood(self, neighborhood: "NeighborhoodFee") -> "NeighborhoodFee":
        """Registra taxa de entrega por bairro."""
        self.neighborhoods.append(neighborhood)
        return neighborhood

    def add_coupon(self, coupon: "Coupon") -> "Coupon":
        """Registra cupom de desconto."""
        self.coupons.append(coupon)
        return coupon

    def add_courier(self, courier: "Courier") -> "Courier":
        """Cadastra um novo motoboy."""
        self.couriers.append(courier)
        return courier

    def add_user(self, user: "User") -> "User":
        """Registra um novo usuário."""
        self.users.append(user)
        return user


    def add_notification(self, notification: "UserNotification") -> "UserNotification":
        """Registra uma notificação para cliente."""
        self.notifications.append(notification)
        return notification



@dataclass
class OrderItem:
    """Item do pedido persistido."""

    produto_id: str
    quantidade: int
    preco_unitario: float
    observacoes: str | None = None


@dataclass
class Order:
    """Pedido do cliente."""

    id: str
    status: str
    metodo_pagamento: str
    tipo_entrega: str
    usuario_id: str
    itens: list[OrderItem]
    total_produtos: float
    taxa_entrega: float
    total_geral: float
    courier_id: str | None = None
    cupom_codigo: str | None = None
    desconto_aplicado: float = 0.0


@dataclass
class NeighborhoodFee:
    """Taxa de entrega por bairro."""

    id: str
    nome: str
    taxa: float


@dataclass
class Coupon:
    """Cupom de desconto."""

    codigo: str
    tipo: str
    valor: float
    minimo_pedido: float = 0.0
    ativo: bool = True


@dataclass
class Courier:
    """Cadastro de motoboys."""

    id: str
    nome: str
    whatsapp: str
    placa_veiculo: str
    ativo: bool = True


@dataclass
class User:
    """Usuário do sistema."""

    id: str
    nome: str
    whatsapp: str
    pontos_fidelidade: int = 0


db = InMemoryDB()
