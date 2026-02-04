from uuid import uuid4

from fastapi import APIRouter, HTTPException

from app.core.storage import Coupon, NeighborhoodFee, db
from app.schemas.admin import OrderStatusUpdate
from app.schemas.admin_settings import StoreSettingsResponse, StoreSettingsUpdate
from app.schemas.marketing import (
    CouponCreate,
    CouponResponse,
    NeighborhoodCreate,
    NeighborhoodResponse,
)
from app.schemas.menu import CategoryCreate, CategoryResponse, ProductCreate, ProductResponse
from app.schemas.loyalty import LoyaltySettingsResponse, LoyaltySettingsUpdate
from app.schemas.orders import OrderSummaryResponse

router = APIRouter()


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
            total_produtos=pedido.total_produtos,
            taxa_entrega=pedido.taxa_entrega,
            total_geral=pedido.total_geral,
            desconto_aplicado=pedido.desconto_aplicado,
            cupom_codigo=pedido.cupom_codigo,
        )
        for pedido in db.orders
    ]


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
