# Sistema Pizzaria Pro

Plataforma de vendas e operação para pizzaria, com:
- **Backend em FastAPI**
- **Frontend em React + Vite + Tailwind**
- Fluxo de cliente (PWA) e módulo administrativo

---

## Status atual

### ✅ Já implementado
- Backend FastAPI com módulos: autenticação, cardápio, pedidos, fidelidade e administração.
- Armazenamento em memória (`InMemoryDB`) para prototipação.
- Endpoints administrativos para configurações, produtos/categorias, cupons, bairros, motoboys e pedidos.
- Frontend iniciado com múltiplas telas (cliente e admin) e roteamento configurado.

### ⚠️ Em andamento / limitações
- Autenticação ainda sem JWT real (token fake no fluxo atual).
- Banco ainda não persistente (sem PostgreSQL).
- Frontend ainda com foco visual, com integrações parciais com a API.

### 🎯 Próximo foco
Implementar **recursos avançados de produto**:
1. variações M/G/GG
2. adicionais/bordas
3. imagens de produto
4. controle de estoque

---

## Estrutura do repositório
- `backend/`: API FastAPI com regras de negócio e schemas.
- `frontend/`: aplicação React + Vite + Tailwind.
- `stitch_home_card_pio_pwa/`: referências visuais das telas.
- `BACKLOG.md` e `ANALISE_GAP.md`: planejamento e análise de lacunas.

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
1. Recursos avançados de produto (variações, adicionais, imagens, estoque)
2. Migração para PostgreSQL
3. JWT + permissões
4. Integração completa frontend/backend
5. Tempo real com WebSocket para pedidos
