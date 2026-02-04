from fastapi import APIRouter

from app.schemas.admin import OrderStatusUpdate

router = APIRouter()


@router.patch("/orders/{order_id}/status")
def update_order_status(order_id: str, payload: OrderStatusUpdate) -> dict:
    """Atualiza status do pedido e dispara notificações."""
    # TODO: validar usuário admin e persistir status.
    return {"pedido_id": order_id, "status": payload.status}
