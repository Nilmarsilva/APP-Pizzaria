from uuid import uuid4

from fastapi import APIRouter, HTTPException

from app.core.storage import User, db
from app.schemas.auth import AuthResponse, RegisterRequest, UserResponse

router = APIRouter()


@router.post("/register", response_model=AuthResponse)
def register_user(payload: RegisterRequest) -> AuthResponse:
    """Cadastro simplificado via WhatsApp."""
    if any(user.whatsapp == payload.whatsapp for user in db.users):
        raise HTTPException(status_code=409, detail="WhatsApp já cadastrado.")
    usuario = db.add_user(
        User(
            id=str(uuid4()),
            nome=payload.nome,
            whatsapp=payload.whatsapp,
        )
    )
    # TODO: substituir por geração real de token.
    return AuthResponse(token="token-fake", usuario_id=usuario.id)


@router.get("/users/{user_id}", response_model=UserResponse)
def get_user(user_id: str) -> UserResponse:
    """Retorna dados básicos do usuário."""
    usuario = next((user for user in db.users if user.id == user_id), None)
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuário não encontrado.")
    return UserResponse(id=usuario.id, nome=usuario.nome, whatsapp=usuario.whatsapp)
