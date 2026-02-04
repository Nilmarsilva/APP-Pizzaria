from pydantic import BaseModel, Field


class ProductSummary(BaseModel):
    """Resumo de produto exibido no cardápio."""

    id: str
    nome: str
    preco_base: float
    disponivel: bool


class CategoryCreate(BaseModel):
    """Payload para criação de categorias."""

    nome: str = Field(..., min_length=2)
    posicao: int = Field(..., ge=0)


class CategoryResponse(BaseModel):
    """Resposta de categoria."""

    id: str
    nome: str
    posicao: int


class ProductCreate(BaseModel):
    """Payload para criação de produtos."""

    categoria_id: str
    nome: str = Field(..., min_length=2)
    descricao: str
    preco_base: float = Field(..., ge=0)
    disponivel: bool = True


class ProductResponse(BaseModel):
    """Resposta de produto."""

    id: str
    categoria_id: str
    nome: str
    descricao: str
    preco_base: float
    disponivel: bool
