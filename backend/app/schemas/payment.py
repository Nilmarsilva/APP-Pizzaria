from pydantic import BaseModel


class PaymentSettingsResponse(BaseModel):
    """Resposta das configurações de pagamento."""

    pix_chave: str
    habilitar_cartao: bool
    habilitar_dinheiro: bool
    url_webhook_pagamento: str


class PaymentSettingsUpdate(BaseModel):
    """Payload para atualizar configurações de pagamento."""

    pix_chave: str
    habilitar_cartao: bool
    habilitar_dinheiro: bool
    url_webhook_pagamento: str
