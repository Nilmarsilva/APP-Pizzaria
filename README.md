# Sistema Pizzaria Pro

Plataforma de vendas e operação para pizzaria, com:
- **Backend em FastAPI**
- **Frontend em React + Vite + Tailwind**
- Fluxo de cliente (PWA) e módulo administrativo

---

## Status atual

### ✅ Já implementado
- Backend FastAPI com módulos: autenticação, cardápio, pedidos, fidelidade, notificações e administração.
- Cardápio avançado no backend: variações (M/G/GG), adicionais/bordas, imagem e estoque por produto.
- Endpoints administrativos para configurações, produtos/categorias, variações, adicionais, estoque, cupons (incluindo editar/remover), bairros, motoboys, notificações e pedidos.
- Endpoints de pedido com **simulação** (`POST /orders/quote`) + criação e rastreio.
- Frontend com páginas cliente e admin integradas de forma incremental com API real (menu, checkout, pedidos, perfil, fidelidade, notificações, cupons admin).

### ⚠️ Em andamento / limitações
- Autenticação ainda sem JWT real (fluxo atual simplificado).
- Banco ainda não persistente (sem PostgreSQL).
- Não há tempo real por WebSocket/SSE para acompanhamento de pedidos.
- Parte do módulo admin ainda depende de endpoints analíticos e operacionais avançados.

### 🎯 Próximo foco
1. JWT + permissões de acesso (cliente/admin)
2. Migração para PostgreSQL + SQLAlchemy + Alembic
3. Tracking em tempo real de pedidos (WebSocket/SSE)
4. Reorder, recompensas de fidelidade e perfil completo (endereços/pagamento salvo)
5. Dashboard analítico e campanhas

---

## Estrutura do repositório
- `backend/`: API FastAPI com regras de negócio e schemas.
- `frontend/`: aplicação React + Vite + Tailwind.
- `stitch_home_card_pio_pwa/`: referências visuais das telas.
- `BACKLOG.md`, `ANALISE_GAP.md` e `PLANO_INTEGRACAO_FRONTEND_BACKEND.md`: planejamento e análise de lacunas.

---

## Executando o backend localmente
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API disponível por padrão em `http://127.0.0.1:8000`.

---

## Executando o frontend localmente
```bash
cd frontend
npm install
npm run dev
```

Frontend disponível por padrão em `http://127.0.0.1:5173`.

---

## Próximas entregas (macro)
1. JWT + permissões
2. PostgreSQL + migrações
3. Tempo real com WebSocket/SSE para pedidos
4. Funcionalidades pendentes do plano (reorder, campanhas, analytics, hardware)
5. Consolidação da integração frontend/backend em 100% das telas
