# Análise de Gap - Sistema Pizzaria Pro
**Data:** 27/02/2026  
**Status:** Backend e frontend com integração parcial funcional

---

## 📊 Status Atual do Projeto

## ✅ O QUE JÁ ESTÁ IMPLEMENTADO

### Backend (FastAPI)

#### Infraestrutura base
- ✅ Estrutura modular (`auth`, `menu`, `orders`, `loyalty`, `notifications`, `admin`)
- ✅ Schemas Pydantic para validação
- ✅ Armazenamento em memória com `InMemoryDB`
- ✅ Endpoint de health check (`GET /health`)

#### Autenticação e usuários
- ✅ Cadastro de usuário (`POST /auth/register`)
- ✅ Consulta de usuário (`GET /auth/users/{user_id}`)
- ✅ Atualização de perfil com endereço e pagamento preferido (`PUT /auth/users/{user_id}`)
- ⚠️ Token ainda simplificado (sem JWT real)

#### Cardápio e produtos
- ✅ Cardápio público (`GET /menu/`) com filtro por categoria e busca textual (`q`)
- ✅ Cardápio detalhado (`GET /menu/detailed`) com variações e adicionais
- ✅ Categorias públicas (`GET /menu/categories`)
- ✅ Gestão de produto com imagem e estoque no admin (`POST/GET /admin/products`, `PATCH /admin/products/{product_id}/stock`)
- ✅ Gestão de variações (`POST/GET /admin/products/{product_id}/variants`)
- ✅ Gestão de adicionais/bordas (`POST/GET /admin/products/{product_id}/addons`)

#### Pedidos
- ✅ Simulação de pedido (`POST /orders/quote`)
- ✅ Criação de pedido (`POST /orders/`)
- ✅ Rastreamento (`GET /orders/track/{id}`)
- ✅ Resumo (`GET /orders/{id}`)
- ✅ Listagem por usuário (`GET /orders/user/{user_id}`)
- ✅ Reorder (`POST /orders/{id}/reorder`)
- ✅ Validação e decremento de estoque no fluxo de pedido
- ✅ Cálculo de taxa por bairro e aplicação de cupom

#### Gestão administrativa
- ✅ Configurações gerais (`GET/PUT /admin/settings`)
- ✅ Configurações de fidelidade (`GET/PUT /admin/loyalty-settings`)
- ✅ Configurações de pagamento (`GET/PUT /admin/payment-settings`)
- ✅ Categorias e produtos (`POST/GET /admin/categories`, `POST/GET /admin/products`)
- ✅ Pedidos no painel (`GET /admin/orders`, `PATCH /admin/orders/{order_id}/status`)
- ✅ Atribuição de motoboy (`PATCH /admin/orders/{order_id}/assign-courier`)
- ✅ Fechamento diário (`GET /admin/reports/daily-close`)
- ✅ Bairros/taxas (`POST/GET /admin/neighborhoods`)
- ✅ Cupons completo (`POST/GET/PATCH/DELETE /admin/coupons`)
- ✅ Motoboys (`POST/GET /admin/couriers`)
- ✅ Notificações administrativas (`POST /admin/notifications`)
- ✅ Busca de cliente para lançamento manual (`GET /admin/users/search?q=...`)

#### Fidelidade e notificações
- ✅ Pontos de fidelidade (`GET /loyalty/points/{user_id}`)
- ✅ Notificações do cliente (`GET /notifications/{user_id}`, `PATCH /notifications/{notification_id}`)

### Frontend (React + Vite + Tailwind)
- ✅ Telas cliente e admin implementadas
- ✅ Integração parcial com API real em fluxos principais
- ✅ API client e carrinho local (`localStorage`) implementados
- ⚠️ Ainda há telas e ações dependentes de endpoints não existentes

---

## ❌ O QUE FALTA IMPLEMENTAR (priorizado)

### Fase 0 — Fundação técnica
1. ❌ JWT real (access/refresh) e middleware robusto
2. ❌ Permissões formais (ex.: `is_admin`) com autenticação real
3. ❌ Migração de `InMemoryDB` para PostgreSQL + SQLAlchemy + Alembic

### Fase 1 — Operação e experiência de compra
1. ❌ Perfil avançado: múltiplos endereços e cartões salvos
2. ❌ Catálogo e resgate de recompensas de fidelidade
3. ❌ Captura de lead/contato (LP)

### Fase 2 — Tempo real e inteligência operacional
1. ❌ WebSocket/SSE para status de pedido em tempo real
2. ❌ Tracking logístico (posição/ETA do entregador)
3. ❌ Dashboard analítico por período/produto/canal
4. ❌ Acerto financeiro avançado por motoboy/período

### Fase 3 — Crescimento e integrações
1. ❌ Campanhas (CRUD + segmentação + disparo)
2. ❌ Integração transacional real de pagamentos/webhooks
3. ❌ Hardware/impressão térmica (ESC/POS)

---

## 🎯 Próximo passo sugerido
Executar o próximo lote focado em **destravar operação diária**:
1. decisão de carrinho server-side vs localStorage-only
2. captura de lead/contato (LP)
3. catálogo/resgate de fidelidade

Depois disso, partir para tempo real (WebSocket/SSE) e analytics.
