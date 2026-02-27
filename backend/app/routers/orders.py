from uuid import uuid4

from fastapi import APIRouter, HTTPException

from app.core.storage import Order, OrderItem, db
from app.schemas.orders import CreateOrderRequest, OrderStatusResponse, OrderSummaryResponse

router = APIRouter()


def _has_stock(estoque_ilimitado: bool, estoque_quantidade: int) -> bool:
    return estoque_ilimitado or estoque_quantidade > 0


@router.post("/", response_model=OrderStatusResponse)
def create_order(payload: CreateOrderRequest) -> OrderStatusResponse:
    """Cria um novo pedido e retorna status inicial."""
    itens_pedido: list[OrderItem] = []
    total_produtos = 0.0

    for item in payload.itens:
        produto = next((p for p in db.products if p.id == item.produto_id), None)
        if not produto:
            raise HTTPException(status_code=404, detail="Produto não encontrado.")
        if not produto.disponivel:
            raise HTTPException(status_code=400, detail=f"Produto {produto.nome} indisponível.")
        if not _has_stock(produto.estoque_ilimitado, produto.estoque_quantidade):
            raise HTTPException(status_code=400, detail=f"Produto {produto.nome} sem estoque.")

        if not produto.estoque_ilimitado and item.quantidade > produto.estoque_quantidade:
            raise HTTPException(
                status_code=400,
                detail=f"Estoque insuficiente para {produto.nome}. Disponível: {produto.estoque_quantidade}.",
            )

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

    taxa_entrega = 0.0
    if payload.tipo_entrega == "delivery":
        taxa_entrega = db.settings.taxa_entrega_padrao
        if payload.bairro_entrega:
            bairro = next(
                (b for b in db.neighborhoods if b.nome.lower() == payload.bairro_entrega.lower()),
                None,
            )
            if bairro:
                taxa_entrega = bairro.taxa

    desconto_aplicado = 0.0
    cupom_codigo = payload.cupom_codigo.upper() if payload.cupom_codigo else None
    if cupom_codigo:
        cupom = next((c for c in db.coupons if c.codigo == cupom_codigo and c.ativo), None)
        if cupom and total_produtos >= cupom.minimo_pedido:
            if cupom.tipo == "percentage":
                desconto_aplicado = total_produtos * (cupom.valor / 100)
            elif cupom.tipo == "fixed":
                desconto_aplicado = cupom.valor

    total_geral = max(total_produtos + taxa_entrega - desconto_aplicado, 0.0)

    usuario_id = payload.usuario_id or "anonimo"
    pedido = Order(
        id=str(uuid4()),
        status="pending",
        metodo_pagamento=payload.metodo_pagamento,
        tipo_entrega=payload.tipo_entrega,
        usuario_id=usuario_id,
        itens=itens_pedido,
        total_produtos=total_produtos,
        taxa_entrega=taxa_entrega,
        total_geral=total_geral,
        cupom_codigo=cupom_codigo,
        desconto_aplicado=desconto_aplicado,
    )
    db.add_order(pedido)

    for item in payload.itens:
        produto = next((p for p in db.products if p.id == item.produto_id), None)
        if produto and not produto.estoque_ilimitado:
            produto.estoque_quantidade = max(produto.estoque_quantidade - item.quantidade, 0)
            if produto.estoque_quantidade == 0:
                produto.disponivel = False

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
        usuario_id=pedido.usuario_id,
        courier_id=pedido.courier_id,
        total_produtos=pedido.total_produtos,
        taxa_entrega=pedido.taxa_entrega,
        total_geral=pedido.total_geral,
        desconto_aplicado=pedido.desconto_aplicado,
        cupom_codigo=pedido.cupom_codigo,
    )


@router.get("/user/{user_id}", response_model=list[OrderSummaryResponse])
def list_user_orders(user_id: str) -> list[OrderSummaryResponse]:
    """Lista pedidos de um usuário específico."""
    pedidos = [pedido for pedido in db.orders if pedido.usuario_id == user_id]
    return [
        OrderSummaryResponse(
            pedido_id=pedido.id,
            status=pedido.status,
            usuario_id=pedido.usuario_id,
            courier_id=pedido.courier_id,
            total_produtos=pedido.total_produtos,
            taxa_entrega=pedido.taxa_entrega,
            total_geral=pedido.total_geral,
            desconto_aplicado=pedido.desconto_aplicado,
            cupom_codigo=pedido.cupom_codigo,
        )
        for pedido in pedidos
    ]
