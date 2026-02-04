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
    disponivel: bool = True


@dataclass
class InMemoryDB:
    """Banco de dados simples em memória para apoiar o protótipo."""

    settings: StoreSettings = field(default_factory=StoreSettings)
    categories: list[Category] = field(default_factory=list)
    products: list[Product] = field(default_factory=list)
    orders: list["Order"] = field(default_factory=list)

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
        disponivel: bool = True,
    ) -> Product:
        produto = Product(
            id=str(uuid4()),
            categoria_id=categoria_id,
            nome=nome,
            descricao=descricao,
            preco_base=preco_base,
            disponivel=disponivel,
        )
        self.products.append(produto)
        return produto

    def add_order(self, order: "Order") -> "Order":
        """Registra um novo pedido na memória."""
        self.orders.append(order)
        return order


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
    itens: list[OrderItem]
    total_produtos: float
    taxa_entrega: float
    total_geral: float


db = InMemoryDB()
