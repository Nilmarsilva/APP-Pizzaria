from pydantic import BaseModel


class OrderStatusUpdate(BaseModel):
    """Atualização de status do pedido pelo painel ADM."""

    status: str


class DailyCloseReport(BaseModel):
    """Resumo financeiro diário para o ADM."""

    total_pedidos: int
    total_vendas: float
    total_pix: float
    total_cartao: float
    total_dinheiro: float
