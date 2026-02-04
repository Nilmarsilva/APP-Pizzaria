from pydantic import BaseModel, Field


class LoyaltySettingsResponse(BaseModel):
    """Configurações de fidelidade retornadas pelo ADM."""

    regra_valor: float = Field(..., ge=0)
    pontos_por_regra: int = Field(..., ge=1)
    limite_premio: int = Field(..., ge=1)


class LoyaltySettingsUpdate(BaseModel):
    """Payload para atualização das regras de fidelidade."""

    regra_valor: float = Field(..., ge=0)
    pontos_por_regra: int = Field(..., ge=1)
    limite_premio: int = Field(..., ge=1)


class LoyaltyPointsResponse(BaseModel):
    """Saldo de pontos do cliente."""

    usuario_id: str
    pontos: int
