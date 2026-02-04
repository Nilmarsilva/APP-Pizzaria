from pydantic import BaseModel, Field


class CourierCreate(BaseModel):
    """Payload para cadastro de motoboy."""

    nome: str = Field(..., min_length=2)
    whatsapp: str = Field(..., min_length=8)
    placa_veiculo: str = Field(..., min_length=4)
    ativo: bool = True


class CourierResponse(BaseModel):
    """Resposta de motoboy."""

    id: str
    nome: str
    whatsapp: str
    placa_veiculo: str
    ativo: bool
