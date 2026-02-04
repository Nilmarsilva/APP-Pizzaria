from fastapi import APIRouter

from app.schemas.menu import ProductSummary

router = APIRouter()


@router.get("/", response_model=list[ProductSummary])
def list_menu() -> list[ProductSummary]:
    """Retorna o cardápio simplificado para o PWA."""
    # TODO: substituir por consulta real ao banco.
    return [
        ProductSummary(id="pizza-01", nome="Pizza Margherita", preco_base=45.0, disponivel=True)
    ]
