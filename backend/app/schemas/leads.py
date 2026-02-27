from pydantic import BaseModel, Field


class LeadCreateRequest(BaseModel):
    """Payload para captura de lead da landing page."""

    nome: str = Field(..., min_length=2)
    whatsapp: str = Field(..., min_length=8)
    mensagem: str = Field(default="", max_length=500)
    origem: str = Field(default="lp")


class LeadResponse(BaseModel):
    """Resposta com dados do lead capturado."""

    id: str
    nome: str
    whatsapp: str
    mensagem: str
    origem: str
    criado_em: str
