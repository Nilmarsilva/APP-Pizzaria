from fastapi import APIRouter, HTTPException

from app.core.storage import db
from app.schemas.notifications import NotificationMarkReadRequest, NotificationResponse

router = APIRouter()


@router.get('/{user_id}', response_model=list[NotificationResponse])
def list_notifications(user_id: str) -> list[NotificationResponse]:
    """Lista notificações do cliente ordenadas da mais recente para a mais antiga."""
    items = [item for item in db.notifications if item.user_id == user_id]
    items.sort(key=lambda value: value.criado_em, reverse=True)
    return [
        NotificationResponse(
            id=item.id,
            user_id=item.user_id,
            titulo=item.titulo,
            mensagem=item.mensagem,
            tipo=item.tipo,
            lida=item.lida,
            criado_em=item.criado_em,
        )
        for item in items
    ]


@router.patch('/{notification_id}', response_model=NotificationResponse)
def mark_notification_read(
    notification_id: str,
    payload: NotificationMarkReadRequest,
) -> NotificationResponse:
    """Marca/desmarca notificação como lida."""
    notification = next((item for item in db.notifications if item.id == notification_id), None)
    if not notification:
        raise HTTPException(status_code=404, detail='Notificação não encontrada.')

    notification.lida = payload.lida

    return NotificationResponse(
        id=notification.id,
        user_id=notification.user_id,
        titulo=notification.titulo,
        mensagem=notification.mensagem,
        tipo=notification.tipo,
        lida=notification.lida,
        criado_em=notification.criado_em,
    )
