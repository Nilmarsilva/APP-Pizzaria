from uuid import uuid4

from fastapi import APIRouter, HTTPException

from app.core.storage import Order, OrderItem, db
from app.schemas.orders import CreateOrderRequest, OrderStatusResponse, OrderSummaryResponse

router = APIRouter()


@router.post("/", response_model=OrderStatusResponse)
def create_order(payload: CreateOrderRequest) -> OrderStatusResponse:
    """Cria um novo pedido e retorna status inicial."""
    itens_pedido: list[OrderItem] = []
    total_produtos = 0.0

    for item in payload.itens:
        produto = next((p for p in db.products if p.id == item.produto_id), None)
        if not produto:
            raise HTTPException(status_code=404, detail="Produto não encontrado.")
        subtotal = produto.preco_base * item.quantidade
        total_produtos += subtotal
        itens_pedido.append(
            OrderItem(
                produto_id=produto.id,
                quantidade=item.quantidade,
                preco_unitario=produto.preco_base,
                observacoes=item.observacoes,
            )
        )

    taxa_entrega = db.settings.taxa_entrega_padrao if payload.tipo_entrega == "delivery" else 0.0
    total_geral = total_produtos + taxa_entrega

    pedido = Order(
        id=str(uuid4()),
        status="pending",
        metodo_pagamento=payload.metodo_pagamento,
        tipo_entrega=payload.tipo_entrega,
        itens=itens_pedido,
        total_produtos=total_produtos,
        taxa_entrega=taxa_entrega,
        total_geral=total_geral,
    )
    db.add_order(pedido)

    return OrderStatusResponse(pedido_id=pedido.id, status=pedido.status)


@router.get("/track/{order_id}", response_model=OrderStatusResponse)
def track_order(order_id: str) -> OrderStatusResponse:
    """Consulta status do pedido em tempo real."""
    pedido = next((o for o in db.orders if o.id == order_id), None)
    if not pedido:
        raise HTTPException(status_code=404, detail="Pedido não encontrado.")
    return OrderStatusResponse(pedido_id=pedido.id, status=pedido.status)


@router.get("/{order_id}", response_model=OrderSummaryResponse)
def get_order_summary(order_id: str) -> OrderSummaryResponse:
    """Retorna o resumo do pedido para o cliente."""
    pedido = next((o for o in db.orders if o.id == order_id), None)
    if not pedido:
        raise HTTPException(status_code=404, detail="Pedido não encontrado.")
    return OrderSummaryResponse(
        pedido_id=pedido.id,
        status=pedido.status,
        total_produtos=pedido.total_produtos,
        taxa_entrega=pedido.taxa_entrega,
        total_geral=pedido.total_geral,
    )
