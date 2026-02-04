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


class OrderStatusResponse(BaseModel):
    """Resposta de status de pedido para o cliente."""

    pedido_id: str
    status: str
