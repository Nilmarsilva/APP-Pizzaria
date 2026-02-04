from fastapi import APIRouter

from app.schemas.orders import CreateOrderRequest, OrderStatusResponse

router = APIRouter()


@router.post("/", response_model=OrderStatusResponse)
def create_order(payload: CreateOrderRequest) -> OrderStatusResponse:
    """Cria um novo pedido e retorna status inicial."""
    # TODO: persistir pedido e disparar WebSocket para o ADM.
    return OrderStatusResponse(pedido_id="pedido-demo", status="pending")


@router.get("/track/{order_id}", response_model=OrderStatusResponse)
def track_order(order_id: str) -> OrderStatusResponse:
    """Consulta status do pedido em tempo real."""
    # TODO: buscar status atualizado no banco/redis.
    return OrderStatusResponse(pedido_id=order_id, status="preparing")
