import os
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException, Security, status
from fastapi.security import APIKeyHeader

from app.core.storage import Coupon, Courier, NeighborhoodFee, db
from app.schemas.admin import DailyCloseReport, OrderStatusUpdate
from app.schemas.admin_settings import StoreSettingsResponse, StoreSettingsUpdate
from app.schemas.marketing import (
    CouponCreate,
    CouponResponse,
    NeighborhoodCreate,
    NeighborhoodResponse,
)
from app.schemas.menu import CategoryCreate, CategoryResponse, ProductCreate, ProductResponse
from app.schemas.loyalty import LoyaltySettingsResponse, LoyaltySettingsUpdate
from app.schemas.payment import PaymentSettingsResponse, PaymentSettingsUpdate
from app.schemas.orders import OrderSummaryResponse
from app.schemas.couriers import CourierCreate, CourierResponse

admin_token_header = APIKeyHeader(name="X-Admin-Token", auto_error=False)


def require_admin(admin_token: str | None = Security(admin_token_header)) -> None:
    """Valida acesso administrativo via token simples."""
    expected_token = os.getenv("ADMIN_TOKEN", "admin-token")
    if not admin_token or admin_token != expected_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token administrativo inválido.",
        )


router = APIRouter(dependencies=[Depends(require_admin)])


@router.get("/settings", response_model=StoreSettingsResponse)
def get_settings() -> StoreSettingsResponse:
    """Retorna as configurações gerais da loja."""
    settings = db.settings
    return StoreSettingsResponse(
        nome=settings.nome,
        endereco=settings.endereco,
        horario_abertura=settings.horario_abertura,
        horario_fechamento=settings.horario_fechamento,
        taxa_entrega_padrao=settings.taxa_entrega_padrao,
    )


@router.put("/settings", response_model=StoreSettingsResponse)
def update_settings(payload: StoreSettingsUpdate) -> StoreSettingsResponse:
    """Atualiza as configurações gerais da loja."""
    db.settings.nome = payload.nome
    db.settings.endereco = payload.endereco
    db.settings.horario_abertura = payload.horario_abertura
    db.settings.horario_fechamento = payload.horario_fechamento
    db.settings.taxa_entrega_padrao = payload.taxa_entrega_padrao
    return StoreSettingsResponse(**payload.model_dump())


@router.get("/loyalty-settings", response_model=LoyaltySettingsResponse)
def get_loyalty_settings() -> LoyaltySettingsResponse:
    """Retorna as configurações do programa de fidelidade."""
    settings = db.loyalty_settings
    return LoyaltySettingsResponse(
        regra_valor=settings.regra_valor,
        pontos_por_regra=settings.pontos_por_regra,
        limite_premio=settings.limite_premio,
    )


@router.put("/loyalty-settings", response_model=LoyaltySettingsResponse)
def update_loyalty_settings(payload: LoyaltySettingsUpdate) -> LoyaltySettingsResponse:
    """Atualiza as configurações do programa de fidelidade."""
    db.loyalty_settings.regra_valor = payload.regra_valor
    db.loyalty_settings.pontos_por_regra = payload.pontos_por_regra
    db.loyalty_settings.limite_premio = payload.limite_premio
    return LoyaltySettingsResponse(**payload.model_dump())


@router.get("/payment-settings", response_model=PaymentSettingsResponse)
def get_payment_settings() -> PaymentSettingsResponse:
    """Retorna as configurações de pagamento."""
    settings = db.payment_settings
    return PaymentSettingsResponse(
        pix_chave=settings.pix_chave,
        habilitar_cartao=settings.habilitar_cartao,
        habilitar_dinheiro=settings.habilitar_dinheiro,
        url_webhook_pagamento=settings.url_webhook_pagamento,
    )


@router.put("/payment-settings", response_model=PaymentSettingsResponse)
def update_payment_settings(payload: PaymentSettingsUpdate) -> PaymentSettingsResponse:
    """Atualiza as configurações de pagamento."""
    db.payment_settings.pix_chave = payload.pix_chave
    db.payment_settings.habilitar_cartao = payload.habilitar_cartao
    db.payment_settings.habilitar_dinheiro = payload.habilitar_dinheiro
    db.payment_settings.url_webhook_pagamento = payload.url_webhook_pagamento
    return PaymentSettingsResponse(**payload.model_dump())


@router.post("/categories", response_model=CategoryResponse)
def create_category(payload: CategoryCreate) -> CategoryResponse:
    """Cria uma nova categoria do cardápio."""
    categoria = db.add_category(nome=payload.nome, posicao=payload.posicao)
    return CategoryResponse(id=categoria.id, nome=categoria.nome, posicao=categoria.posicao)


@router.get("/categories", response_model=list[CategoryResponse])
def list_categories() -> list[CategoryResponse]:
    """Lista as categorias cadastradas."""
    return [
        CategoryResponse(id=c.id, nome=c.nome, posicao=c.posicao) for c in db.categories
    ]


@router.post("/products", response_model=ProductResponse)
def create_product(payload: ProductCreate) -> ProductResponse:
    """Cria um produto associado a uma categoria."""
    categoria_existe = any(c.id == payload.categoria_id for c in db.categories)
    if not categoria_existe:
        raise HTTPException(status_code=404, detail="Categoria não encontrada.")
    produto = db.add_product(
        categoria_id=payload.categoria_id,
        nome=payload.nome,
        descricao=payload.descricao,
        preco_base=payload.preco_base,
        disponivel=payload.disponivel,
    )
    return ProductResponse(
        id=produto.id,
        categoria_id=produto.categoria_id,
        nome=produto.nome,
        descricao=produto.descricao,
        preco_base=produto.preco_base,
        disponivel=produto.disponivel,
    )


@router.get("/products", response_model=list[ProductResponse])
def list_products() -> list[ProductResponse]:
    """Lista os produtos cadastrados."""
    return [
        ProductResponse(
            id=p.id,
            categoria_id=p.categoria_id,
            nome=p.nome,
            descricao=p.descricao,
            preco_base=p.preco_base,
            disponivel=p.disponivel,
        )
        for p in db.products
    ]


@router.patch("/orders/{order_id}/status")
def update_order_status(order_id: str, payload: OrderStatusUpdate) -> dict:
    """Atualiza status do pedido e dispara notificações."""
    pedido = next((o for o in db.orders if o.id == order_id), None)
    if not pedido:
        raise HTTPException(status_code=404, detail="Pedido não encontrado.")
    pedido.status = payload.status
    if payload.status == "delivered":
        usuario = next((user for user in db.users if user.id == pedido.usuario_id), None)
        if usuario:
            settings = db.loyalty_settings
            pontos = int(pedido.total_geral // settings.regra_valor) * settings.pontos_por_regra
            usuario.pontos_fidelidade += pontos
    return {"pedido_id": order_id, "status": payload.status}


@router.get("/orders", response_model=list[OrderSummaryResponse])
def list_orders() -> list[OrderSummaryResponse]:
    """Lista os pedidos cadastrados para o painel ADM."""
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
        for pedido in db.orders
    ]


@router.get("/reports/daily-close", response_model=DailyCloseReport)
def daily_close_report() -> DailyCloseReport:
    """Gera um resumo financeiro simples dos pedidos entregues."""
    pedidos_entregues = [pedido for pedido in db.orders if pedido.status == "delivered"]
    total_vendas = sum(pedido.total_geral for pedido in pedidos_entregues)
    total_pix = sum(
        pedido.total_geral for pedido in pedidos_entregues if pedido.metodo_pagamento == "pix"
    )
    total_cartao = sum(
        pedido.total_geral
        for pedido in pedidos_entregues
        if pedido.metodo_pagamento == "card_on_delivery"
    )
    total_dinheiro = sum(
        pedido.total_geral for pedido in pedidos_entregues if pedido.metodo_pagamento == "cash"
    )
    return DailyCloseReport(
        total_pedidos=len(pedidos_entregues),
        total_vendas=total_vendas,
        total_pix=total_pix,
        total_cartao=total_cartao,
        total_dinheiro=total_dinheiro,
    )


@router.post("/neighborhoods", response_model=NeighborhoodResponse)
def create_neighborhood(payload: NeighborhoodCreate) -> NeighborhoodResponse:
    """Cria taxa de entrega por bairro."""
    bairro = db.add_neighborhood(
        neighborhood=NeighborhoodFee(
            id=str(uuid4()),
            nome=payload.nome,
            taxa=payload.taxa,
        )
    )
    return NeighborhoodResponse(id=bairro.id, nome=bairro.nome, taxa=bairro.taxa)


@router.get("/neighborhoods", response_model=list[NeighborhoodResponse])
def list_neighborhoods() -> list[NeighborhoodResponse]:
    """Lista taxas de entrega por bairro."""
    return [
        NeighborhoodResponse(id=b.id, nome=b.nome, taxa=b.taxa) for b in db.neighborhoods
    ]


@router.post("/coupons", response_model=CouponResponse)
def create_coupon(payload: CouponCreate) -> CouponResponse:
    """Cria um cupom de desconto."""
    codigo = payload.codigo.upper()
    if any(c.codigo == codigo for c in db.coupons):
        raise HTTPException(status_code=409, detail="Cupom já existente.")
    cupom = db.add_coupon(
        coupon=Coupon(
            codigo=codigo,
            tipo=payload.tipo,
            valor=payload.valor,
            minimo_pedido=payload.minimo_pedido,
            ativo=payload.ativo,
        )
    )
    return CouponResponse(
        codigo=cupom.codigo,
        tipo=cupom.tipo,
        valor=cupom.valor,
        minimo_pedido=cupom.minimo_pedido,
        ativo=cupom.ativo,
    )


@router.get("/coupons", response_model=list[CouponResponse])
def list_coupons() -> list[CouponResponse]:
    """Lista os cupons cadastrados."""
    return [
        CouponResponse(
            codigo=c.codigo,
            tipo=c.tipo,
            valor=c.valor,
            minimo_pedido=c.minimo_pedido,
            ativo=c.ativo,
        )
        for c in db.coupons
    ]


@router.post("/couriers", response_model=CourierResponse)
def create_courier(payload: CourierCreate) -> CourierResponse:
    """Cadastra um novo motoboy."""
    courier = db.add_courier(
        Courier(
            id=str(uuid4()),
            nome=payload.nome,
            whatsapp=payload.whatsapp,
            placa_veiculo=payload.placa_veiculo,
            ativo=payload.ativo,
        )
    )
    return CourierResponse(
        id=courier.id,
        nome=courier.nome,
        whatsapp=courier.whatsapp,
        placa_veiculo=courier.placa_veiculo,
        ativo=courier.ativo,
    )


@router.get("/couriers", response_model=list[CourierResponse])
def list_couriers() -> list[CourierResponse]:
    """Lista os motoboys cadastrados."""
    return [
        CourierResponse(
            id=courier.id,
            nome=courier.nome,
            whatsapp=courier.whatsapp,
            placa_veiculo=courier.placa_veiculo,
            ativo=courier.ativo,
        )
        for courier in db.couriers
    ]


@router.patch("/orders/{order_id}/assign-courier")
def assign_courier(order_id: str, courier_id: str) -> dict:
    """Atribui um motoboy ao pedido."""
    pedido = next((o for o in db.orders if o.id == order_id), None)
    if not pedido:
        raise HTTPException(status_code=404, detail="Pedido não encontrado.")
    courier = next((c for c in db.couriers if c.id == courier_id), None)
    if not courier:
        raise HTTPException(status_code=404, detail="Motoboy não encontrado.")
    pedido.courier_id = courier.id
    return {"pedido_id": order_id, "courier_id": courier.id}
