from pydantic import BaseModel


class ProductSummary(BaseModel):
    """Resumo de produto exibido no cardápio."""

    id: str
    nome: str
    preco_base: float
    disponivel: bool
