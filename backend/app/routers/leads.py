from datetime import datetime, timezone
from uuid import uuid4

from fastapi import APIRouter

from app.core.storage import Lead, db
from app.schemas.leads import LeadCreateRequest, LeadResponse

router = APIRouter()


@router.post('/', response_model=LeadResponse)
def create_lead(payload: LeadCreateRequest) -> LeadResponse:
    """Captura lead comercial vindo da landing page."""
    lead = db.add_lead(
        Lead(
            id=str(uuid4()),
            nome=payload.nome,
            whatsapp=payload.whatsapp,
            mensagem=payload.mensagem,
            origem=payload.origem,
            criado_em=datetime.now(timezone.utc).isoformat(),
        )
    )

    return LeadResponse(
        id=lead.id,
        nome=lead.nome,
        whatsapp=lead.whatsapp,
        mensagem=lead.mensagem,
        origem=lead.origem,
        criado_em=lead.criado_em,
    )
