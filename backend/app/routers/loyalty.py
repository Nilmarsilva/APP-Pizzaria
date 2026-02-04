from fastapi import APIRouter, HTTPException

from app.core.storage import db
from app.schemas.loyalty import LoyaltyPointsResponse

router = APIRouter()


@router.get("/points/{user_id}", response_model=LoyaltyPointsResponse)
def get_loyalty_points(user_id: str) -> LoyaltyPointsResponse:
    """Retorna o saldo de pontos do cliente."""
    usuario = next((user for user in db.users if user.id == user_id), None)
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado.")
    return LoyaltyPointsResponse(usuario_id=usuario.id, pontos=usuario.pontos_fidelidade)
