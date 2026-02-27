from pydantic import BaseModel, Field


class ProductSummary(BaseModel):
    """Resumo de produto exibido no cardápio."""

    id: str
    categoria_id: str
    nome: str
    preco_base: float
    image_url: str | None
    disponivel: bool
    estoque_disponivel: bool


class ProductVariantCreate(BaseModel):
    """Payload para criação de variação de tamanho."""

    nome_tamanho: str = Field(..., pattern="^(M|G|GG)$")
    preco: float = Field(..., ge=0)
    ordem: int = Field(default=0, ge=0)
    ativo: bool = True
    estoque_quantidade: int = Field(default=0, ge=0)
    estoque_ilimitado: bool = True


class ProductVariantResponse(BaseModel):
    """Resposta de variação de tamanho."""

    id: str
    product_id: str
    nome_tamanho: str
    preco: float
    ordem: int
    ativo: bool
    estoque_quantidade: int
    estoque_ilimitado: bool


class ProductAddonCreate(BaseModel):
    """Payload para criação de adicional/borda."""

    nome: str = Field(..., min_length=2)
    tipo: str = Field(..., pattern="^(addon|borda)$")
    preco: float = Field(..., ge=0)
    maximo_selecoes: int = Field(default=1, ge=1)
    ativo: bool = True


class ProductAddonResponse(BaseModel):
    """Resposta de adicional/borda."""

    id: str
    product_id: str
    nome: str
    tipo: str
    preco: float
    maximo_selecoes: int
    ativo: bool


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
    image_url: str | None = None
    estoque_quantidade: int = Field(default=0, ge=0)
    estoque_ilimitado: bool = True
    disponivel: bool = True


class ProductResponse(BaseModel):
    """Resposta de produto."""

    id: str
    categoria_id: str
    nome: str
    descricao: str
    preco_base: float
    image_url: str | None
    estoque_quantidade: int
    estoque_ilimitado: bool
    disponivel: bool


class ProductStockUpdate(BaseModel):
    """Payload para atualização de estoque do produto principal."""

    estoque_quantidade: int = Field(..., ge=0)
    estoque_ilimitado: bool = False


class ProductMenuResponse(BaseModel):
    """Produto detalhado para listagem pública do cardápio."""

    id: str
    categoria_id: str
    nome: str
    descricao: str
    preco_base: float
    image_url: str | None
    disponivel: bool
    estoque_disponivel: bool
    variacoes: list[ProductVariantResponse]
    adicionais: list[ProductAddonResponse]
