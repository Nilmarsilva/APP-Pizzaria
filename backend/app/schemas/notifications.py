from pydantic import BaseModel, Field


class NotificationResponse(BaseModel):
    """Notificação exibida ao cliente."""

    id: str
    user_id: str
    titulo: str
    mensagem: str
    tipo: str
    lida: bool
    criado_em: str


class NotificationMarkReadRequest(BaseModel):
    """Atualização de leitura da notificação."""

    lida: bool = True


class AdminNotificationCreate(BaseModel):
    """Criação de notificação para um usuário (uso admin)."""

    user_id: str
    titulo: str = Field(..., min_length=2)
    mensagem: str = Field(..., min_length=2)
    tipo: str = Field(default='promo')
