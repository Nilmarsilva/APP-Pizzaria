from pydantic import BaseModel, Field


class StoreSettingsResponse(BaseModel):
    """Resposta das configurações gerais da loja."""

    nome: str
    endereco: str
    horario_abertura: str
    horario_fechamento: str
    taxa_entrega_padrao: float = Field(..., ge=0)


class StoreSettingsUpdate(BaseModel):
    """Payload para atualização das configurações."""

    nome: str
    endereco: str
    horario_abertura: str
    horario_fechamento: str
    taxa_entrega_padrao: float = Field(..., ge=0)
