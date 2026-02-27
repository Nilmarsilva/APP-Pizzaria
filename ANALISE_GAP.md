# Análise de Gap - Sistema Pizzaria Pro
**Data:** 27/02/2026  
**Status:** Backend em memória funcional + Frontend React/Vite iniciado

---

## 📊 Status Atual do Projeto

## ✅ O QUE JÁ ESTÁ IMPLEMENTADO

### Backend (FastAPI)

#### Infraestrutura base
- ✅ Estrutura FastAPI organizada por módulos (`auth`, `menu`, `orders`, `loyalty`, `admin`)
- ✅ Schemas Pydantic para validação
- ✅ Armazenamento em memória com `InMemoryDB`
- ✅ Endpoint de health check (`GET /health`)

#### Autenticação e usuários
- ✅ Cadastro de usuário via WhatsApp (`POST /auth/register`)
- ✅ Consulta de usuário (`GET /auth/users/{user_id}`)
- ⚠️ Token de autenticação ainda é fake (sem JWT real)

#### Gestão administrativa (API)
- ✅ Proteção administrativa por header `X-Admin-Token`
- ✅ Configurações gerais da loja (`GET/PUT /admin/settings`)
- ✅ Configurações de fidelidade (`GET/PUT /admin/loyalty-settings`)
- ✅ Configurações de pagamento (`GET/PUT /admin/payment-settings`)
- ✅ CRUD básico de categorias (`POST/GET /admin/categories`)
- ✅ CRUD básico de produtos (`POST/GET /admin/products`)
- ✅ Gestão de pedidos no painel (`GET /admin/orders`, `PATCH /admin/orders/{order_id}/status`)
- ✅ Atribuição de motoboy (`PATCH /admin/orders/{order_id}/assign-courier`)
- ✅ Relatório de fechamento diário (`GET /admin/reports/daily-close`)
- ✅ CRUD de bairros e taxa de entrega (`POST/GET /admin/neighborhoods`)
- ✅ CRUD de cupons (`POST/GET /admin/coupons`)
- ✅ CRUD de motoboys (`POST/GET /admin/couriers`)

#### Pedidos
- ✅ Criação de pedido (`POST /orders/`)
- ✅ Rastreamento de pedido (`GET /orders/track/{id}`)
- ✅ Resumo de pedido (`GET /orders/{id}`)
- ✅ Listagem de pedidos por usuário (`GET /orders/user/{user_id}`)
- ✅ Cálculo de taxa por bairro
- ✅ Aplicação de cupom no cálculo
- ✅ Acúmulo de pontos ao marcar pedido como entregue

#### Fidelidade
- ✅ Consulta de pontos (`GET /loyalty/points/{user_id}`)
- ✅ Regras de fidelidade configuráveis no admin

### Frontend (React + Vite + Tailwind)
- ✅ Projeto frontend inicializado com React + Vite + TypeScript
- ✅ Tailwind configurado
- ✅ ESLint configurado
- ✅ Estrutura de páginas do módulo cliente implementada
- ✅ Estrutura de páginas do módulo administrativo implementada
- ⚠️ Grande parte das telas ainda está estática (sem integração plena com API)

---

## ❌ O QUE FALTA IMPLEMENTAR (priorizado)

### Fase 0 — Fundação técnica
1. ❌ Autenticação real com JWT (access/refresh) e middleware de proteção
2. ❌ Modelo de permissões (ex.: `is_admin`) em autenticação real
3. ❌ Migração de InMemoryDB para PostgreSQL + SQLAlchemy + Alembic

### Fase 1 — Cardápio avançado (PRÓXIMO FOCO)
1. ❌ **Variações de produto** (M, G, GG)
2. ❌ **Adicionais e bordas** (com regras de seleção)
3. ❌ **Imagens dos produtos** (upload e URL)
4. ❌ **Estoque** (controle de disponibilidade/quantidade)
5. ❌ Filtros por categoria no cardápio público

### Fase 2 — Checkout e operação
1. ❌ Integração real frontend ↔ backend (carrinho, checkout, perfil, pedidos)
2. ❌ WebSocket para atualização de pedidos em tempo real
3. ❌ Dashboard operacional de pedidos com atualização ao vivo

### Fase 3 — Integrações e crescimento
1. ❌ Push notifications e campanhas
2. ❌ Impressão térmica (ESC/POS)
3. ❌ Relatórios analíticos avançados

---

## 🎯 Próximo passo acordado
Vamos seguir para a implementação de **recursos avançados de produto**:
- variações M/G/GG
- adicionais/bordas
- imagens
- estoque

Esse bloco será implementado primeiro no backend (modelagem + rotas + regras), e depois conectado ao frontend.
