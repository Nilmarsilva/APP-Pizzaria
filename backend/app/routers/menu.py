from fastapi import APIRouter

from app.core.storage import db
from app.schemas.menu import ProductSummary

router = APIRouter()


@router.get("/", response_model=list[ProductSummary])
def list_menu() -> list[ProductSummary]:
    """Retorna o cardápio simplificado para o PWA."""
    return [
        ProductSummary(
            id=produto.id,
            nome=produto.nome,
            preco_base=produto.preco_base,
            disponivel=produto.disponivel,
        )
        for produto in db.products
        if produto.disponivel
    ]
