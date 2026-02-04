from pydantic import BaseModel


class OrderStatusUpdate(BaseModel):
    """Atualização de status do pedido pelo painel ADM."""

    status: str
