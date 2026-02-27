from fastapi import APIRouter

from app.core.storage import db
from app.schemas.menu import (
    CategoryResponse,
    ProductAddonResponse,
    ProductMenuResponse,
    ProductSummary,
    ProductVariantResponse,
)

router = APIRouter()


def _has_stock(estoque_ilimitado: bool, estoque_quantidade: int) -> bool:
    return estoque_ilimitado or estoque_quantidade > 0


@router.get("/categories", response_model=list[CategoryResponse])
def list_public_categories() -> list[CategoryResponse]:
    """Lista categorias públicas para filtros do cardápio."""
    return [
        CategoryResponse(id=categoria.id, nome=categoria.nome, posicao=categoria.posicao)
        for categoria in sorted(db.categories, key=lambda value: value.posicao)
    ]


@router.get("/", response_model=list[ProductSummary])
def list_menu(categoria_id: str | None = None, q: str | None = None) -> list[ProductSummary]:
    """Retorna o cardápio simplificado para o PWA com filtros opcionais."""
    query = q.lower().strip() if q else None

    return [
        ProductSummary(
            id=produto.id,
            categoria_id=produto.categoria_id,
            nome=produto.nome,
            preco_base=produto.preco_base,
            image_url=produto.image_url,
            disponivel=produto.disponivel,
            estoque_disponivel=_has_stock(
                estoque_ilimitado=produto.estoque_ilimitado,
                estoque_quantidade=produto.estoque_quantidade,
            ),
        )
        for produto in db.products
        if produto.disponivel
        and _has_stock(
            estoque_ilimitado=produto.estoque_ilimitado,
            estoque_quantidade=produto.estoque_quantidade,
        )
        and (categoria_id is None or produto.categoria_id == categoria_id)
        and (
            query is None
            or query in produto.nome.lower()
            or query in produto.descricao.lower()
        )
    ]


@router.get("/detailed", response_model=list[ProductMenuResponse])
def list_menu_detailed(categoria_id: str | None = None) -> list[ProductMenuResponse]:
    """Retorna o cardápio detalhado com variações, adicionais e bordas."""
    result: list[ProductMenuResponse] = []

    for produto in sorted(db.products, key=lambda value: value.nome.lower()):
        if not produto.disponivel:
            continue

        if categoria_id is not None and produto.categoria_id != categoria_id:
            continue

        estoque_disponivel = _has_stock(
            estoque_ilimitado=produto.estoque_ilimitado,
            estoque_quantidade=produto.estoque_quantidade,
        )
        if not estoque_disponivel:
            continue

        variacoes = [
            ProductVariantResponse(
                id=variante.id,
                product_id=variante.product_id,
                nome_tamanho=variante.nome_tamanho,
                preco=variante.preco,
                ordem=variante.ordem,
                ativo=variante.ativo,
                estoque_quantidade=variante.estoque_quantidade,
                estoque_ilimitado=variante.estoque_ilimitado,
            )
            for variante in sorted(
                db.product_variants,
                key=lambda value: (value.product_id, value.ordem, value.nome_tamanho),
            )
            if variante.product_id == produto.id
            and variante.ativo
            and _has_stock(
                estoque_ilimitado=variante.estoque_ilimitado,
                estoque_quantidade=variante.estoque_quantidade,
            )
        ]

        adicionais = [
            ProductAddonResponse(
                id=adicional.id,
                product_id=adicional.product_id,
                nome=adicional.nome,
                tipo=adicional.tipo,
                preco=adicional.preco,
                maximo_selecoes=adicional.maximo_selecoes,
                ativo=adicional.ativo,
            )
            for adicional in sorted(db.product_addons, key=lambda value: value.nome.lower())
            if adicional.product_id == produto.id and adicional.ativo
        ]

        result.append(
            ProductMenuResponse(
                id=produto.id,
                categoria_id=produto.categoria_id,
                nome=produto.nome,
                descricao=produto.descricao,
                preco_base=produto.preco_base,
                image_url=produto.image_url,
                disponivel=produto.disponivel,
                estoque_disponivel=estoque_disponivel,
                variacoes=variacoes,
                adicionais=adicionais,
            )
        )

    return result
