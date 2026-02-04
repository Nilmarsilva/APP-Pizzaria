# Sistema Pizzaria Pro

Este repositório contém a base inicial do backend do Sistema Pizzaria Pro.

## Estrutura atual
- `backend/`: API FastAPI com rotas iniciais e schemas.
- `stitch_home_card_pio_pwa/`: referências visuais das telas (screenshots).

## Executando o backend localmente
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Próximos passos
- Implementar persistência no banco.
- Conectar o frontend seguindo as telas em `stitch_home_card_pio_pwa`.
