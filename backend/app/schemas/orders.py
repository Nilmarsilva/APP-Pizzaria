from pydantic import BaseModel, Field


class OrderItem(BaseModel):
    """Item de pedido com referência ao produto e quantidade."""

    produto_id: str
    quantidade: int = Field(..., ge=1)
    observacoes: str | None = None


class CreateOrderRequest(BaseModel):
    """Dados mínimos para criar um pedido."""

    itens: list[OrderItem]
    metodo_pagamento: str
    tipo_entrega: str
    cupom_codigo: str | None = None
    bairro_entrega: str | None = None
    usuario_id: str | None = None


class OrderStatusResponse(BaseModel):
    """Resposta de status de pedido para o cliente."""

    pedido_id: str
    status: str


class OrderSummaryResponse(BaseModel):
    """Resumo completo do pedido."""

    pedido_id: str
    status: str
    usuario_id: str
    courier_id: str | None
    total_produtos: float
    taxa_entrega: float
    total_geral: float
    desconto_aplicado: float
    cupom_codigo: str | None
