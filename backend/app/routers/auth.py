from fastapi import APIRouter

from app.schemas.auth import AuthResponse, RegisterRequest

router = APIRouter()


@router.post("/register", response_model=AuthResponse)
def register_user(payload: RegisterRequest) -> AuthResponse:
    """Cadastro simplificado via WhatsApp."""
    # TODO: implementar persistência no banco e geração de token.
    return AuthResponse(token="token-fake", usuario_id="usuario-demo")
