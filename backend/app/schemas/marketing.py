from pydantic import BaseModel, Field


class NeighborhoodCreate(BaseModel):
    """Payload para cadastro de taxa de entrega por bairro."""

    nome: str = Field(..., min_length=2)
    taxa: float = Field(..., ge=0)


class NeighborhoodResponse(BaseModel):
    """Resposta de taxa de entrega por bairro."""

    id: str
    nome: str
    taxa: float


class CouponCreate(BaseModel):
    """Payload para criação de cupom de desconto."""

    codigo: str = Field(..., min_length=3)
    tipo: str = Field(..., pattern="^(percentage|fixed)$")
    valor: float = Field(..., ge=0)
    minimo_pedido: float = Field(default=0.0, ge=0)
    ativo: bool = True


class CouponUpdate(BaseModel):
    """Payload para atualização de cupom."""

    tipo: str = Field(..., pattern="^(percentage|fixed)$")
    valor: float = Field(..., ge=0)
    minimo_pedido: float = Field(default=0.0, ge=0)
    ativo: bool = True


class CouponResponse(BaseModel):
    """Resposta de cupom de desconto."""

    codigo: str
    tipo: str
    valor: float
    minimo_pedido: float
    ativo: bool
