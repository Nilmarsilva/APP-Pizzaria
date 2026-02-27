from pydantic import BaseModel, Field


class RegisterRequest(BaseModel):
    """Dados para cadastro de cliente via WhatsApp."""

    nome: str = Field(..., min_length=2)
    whatsapp: str = Field(..., min_length=8)
    senha: str | None = Field(default=None, min_length=6)


class AuthResponse(BaseModel):
    """Resposta padrão de autenticação."""

    token: str
    usuario_id: str


class UserResponse(BaseModel):
    """Dados do usuário."""

    id: str
    nome: str
    whatsapp: str
    endereco: str = ""
    metodo_pagamento_preferido: str = ""


class UpdateUserRequest(BaseModel):
    """Atualização de dados de perfil do usuário."""

    nome: str = Field(..., min_length=2)
    whatsapp: str = Field(..., min_length=8)
    endereco: str = Field(default="")
    metodo_pagamento_preferido: str = Field(default="")
