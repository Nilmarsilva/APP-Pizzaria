# Plano de Integração Frontend ↔ Backend

## 0) Progresso incremental (execução em lotes)
- ✅ Lote 1 concluído:
  - Backend: `POST /orders/quote` (simulação de pedido sem efetivar).
  - Backend: `GET /menu/` com busca textual (`q`) e `GET /menu/categories` público.
  - Frontend: integração inicial de `/cadastro`, `/home`, `/personalizar-pizza` e `/finalizar-pedido` com API real.
  - Frontend: carrinho local com `localStorage` para desacoplar da API de carrinho até decisão arquitetural.

- ✅ Lote 2 (parcial) concluído:
  - Frontend: `/pedidos` integrado com `GET /orders/user/{user_id}`.
  - Frontend: `/acompanhamento` integrado com `GET /orders/track/{order_id}` com auto refresh.
  - Frontend: checkout persiste `last_order_id` para facilitar continuidade do acompanhamento.

- ✅ Lote 2 (complemento) concluído:
  - Frontend: `/perfil` integrado com `GET /auth/users/{user_id}` e atualização via `PUT /auth/users/{user_id}`.
  - Backend: novo endpoint `PUT /auth/users/{user_id}` para atualização de dados básicos.
  - Frontend: `/fidelidade` integrado com `GET /loyalty/points/{user_id}`.

- ✅ Lote 3 (parcial) concluído:
  - Backend: módulo de notificações do cliente (`GET /notifications/{user_id}`, `PATCH /notifications/{notification_id}`).
  - Backend/Admin: criação de notificação por usuário (`POST /admin/notifications`).
  - Frontend: `/notificacoes` integrado com listagem real e ação "marcar como lida".

---

## 1) Objetivo
Conectar todas as telas do frontend com funcionalidades reais do backend, mapeando:
1. cada ação de UI (botão, filtro, formulário, aba, toggle);
2. endpoint já existente que cobre a ação;
3. endpoint ausente que precisa ser criado.

---

## 2) Inventário base do sistema

### 2.1 Rotas do frontend (escopo completo)
Rotas cliente e admin atualmente registradas em `App.tsx`:
- Cliente: `/cadastro`, `/home`, `/personalizar-pizza`, `/finalizar-pedido`, `/acompanhamento`, `/pedidos`, `/perfil`, `/fidelidade`, `/notificacoes`, `/lp`.
- Admin: `/admin/lancamento`, `/admin/configuracoes`, `/admin/pagamento`, `/admin/fidelidade`, `/admin/hardware`, `/admin/entregadores`, `/admin/dashboard`, `/admin/campanhas`, `/admin/cupons`, `/admin/acerto`.

### 2.2 Endpoints backend hoje disponíveis
- Auth: registro e leitura de usuário.
- Menu: listagem simples e detalhada (`/menu/` e `/menu/detailed`), já com filtro opcional por categoria.
- Orders: criação e consulta de pedidos.
- Loyalty: saldo de pontos.
- Admin: settings, payment, loyalty settings, categorias, produtos, variações, adicionais, estoque, pedidos, bairros, cupons, couriers e relatório diário.

---

## 3) Mapeamento inicial por página (frontend todo)

> Status usado:
> - **OK**: endpoint já existe e pode ser integrado agora.
> - **PARCIAL**: existe endpoint, mas faltam campos/regras para fechar UX.
> - **CRIAR**: backend ainda não possui endpoint/recurso.

## Módulo Cliente

### 3.1 `/cadastro` (CadastroUsuario)
- Ação: cadastrar usuário por WhatsApp.
  - Status: **OK** → `POST /auth/register`.
- Ação: login social (Google/Facebook) exibido na tela.
  - Status: **CRIAR** → endpoints OAuth/social login.
- Ação: consultar usuário já cadastrado para hidratar sessão.
  - Status: **OK** → `GET /auth/users/{user_id}`.

### 3.2 `/home` (HomeCardapio)
- Ação: listar produtos no cardápio.
  - Status: **OK** → `GET /menu/`.
- Ação: filtrar por categoria (tabs/botões).
  - Status: **OK** → `GET /menu/?categoria_id=...`.
- Ação: exibir variações/adicionais por produto.
  - Status: **OK** → `GET /menu/detailed`.
- Ação: busca textual de produtos.
  - Status: **CRIAR** → busca por `nome`/`descricao` com query param.
- Ação: promoções em destaque (cards/banner).
  - Status: **CRIAR** → endpoint de campanhas/promos ativas para vitrine.

### 3.3 `/personalizar-pizza` (PersonalizacaoPizza)
- Ação: carregar opções de tamanho/adicionais/bordas por produto.
  - Status: **OK** → `GET /menu/detailed`.
- Ação: calcular preço dinâmico com seleção de variações + adicionais.
  - Status: **PARCIAL** → frontend pode calcular localmente; ideal criar endpoint de simulação.
- Ação: adicionar item personalizado ao carrinho.
  - Status: **CRIAR** → API de carrinho (ou persistência em sessão no backend).

### 3.4 `/finalizar-pedido` (FinalizacaoPedido)
- Ação: listar itens de carrinho para checkout.
  - Status: **CRIAR** → endpoint de carrinho (se não for localStorage-only).
- Ação: aplicar cupom.
  - Status: **PARCIAL** → validação hoje ocorre apenas em `POST /orders/`; ideal endpoint de validação prévia.
- Ação: calcular frete por bairro em tempo real.
  - Status: **PARCIAL** → hoje cálculo acontece no `POST /orders/`; ideal endpoint de simulação (`/orders/quote`).
- Ação: confirmar pedido.
  - Status: **OK** → `POST /orders/`.

### 3.5 `/acompanhamento` (AcompanhamentoPedido)
- Ação: consultar status do pedido.
  - Status: **OK** → `GET /orders/track/{order_id}`.
- Ação: timeline/status em tempo real (sem refresh manual).
  - Status: **CRIAR** → WebSocket/SSE de status por pedido.
- Ação: dados do entregador e mapa/ETA.
  - Status: **CRIAR** → endpoint de tracking logístico (posição/ETA).

### 3.6 `/pedidos` (MeusPedidos)
- Ação: listar histórico de pedidos do usuário.
  - Status: **OK** → `GET /orders/user/{user_id}`.
- Ação: abrir detalhes de pedido.
  - Status: **OK** → `GET /orders/{order_id}`.
- Ação: pedir novamente (reorder).
  - Status: **CRIAR** → endpoint de reorder (`POST /orders/{id}/reorder`).

### 3.7 `/perfil` (Perfil)
- Ação: ler dados do perfil do usuário.
  - Status: **OK** (básico) → `GET /auth/users/{user_id}`.
- Ação: atualizar perfil/endereço/formas de pagamento.
  - Status: **PARCIAL** → update básico de usuário disponível; endereços e métodos salvos ainda pendentes.

### 3.8 `/fidelidade` (Fidelidade)
- Ação: consultar pontos.
  - Status: **OK** → `GET /loyalty/points/{user_id}` (integrado no frontend).
- Ação: listar recompensas e resgatar prêmio.
  - Status: **CRIAR** → catálogo e resgate de recompensas.

### 3.9 `/notificacoes` (Notificacoes)
- Ação: listar notificações/promos recebidas.
  - Status: **OK** → `GET /notifications/{user_id}` (integrado no frontend).
- Ação: marcar como lida/arquivar.
  - Status: **PARCIAL** → `PATCH /notifications/{notification_id}` disponível (arquivar ainda pendente).

### 3.10 `/lp` (LandingPage)
- Ação: formulário de lead/contato (se ativado).
  - Status: **CRIAR** → endpoint de captura de lead.

## Módulo Administrativo

### 3.11 `/admin/lancamento` (LancamentoPedidos)
- Ação: buscar cliente por telefone/nome.
  - Status: **CRIAR** → busca de usuários por termo.
- Ação: listar categorias/produtos para montagem do pedido.
  - Status: **OK** → `GET /admin/categories`, `GET /admin/products`.
- Ação: criar pedido manual no balcão.
  - Status: **OK** → `POST /orders/` (adaptar payload).
- Ação: aplicar cupom/frete antes de finalizar.
  - Status: **PARCIAL** → ideal endpoint de quote.

### 3.12 `/admin/configuracoes` (ConfiguracoesGerais)
- Ação: visualizar/editar configurações da loja.
  - Status: **OK** → `GET/PUT /admin/settings`.
- Ação: horários detalhados por dia e status aberto/fechado automático.
  - Status: **CRIAR** → expandir modelo/settings.

### 3.13 `/admin/pagamento` (ConfiguracoesPagamento)
- Ação: visualizar/editar métodos/chaves de pagamento.
  - Status: **OK** → `GET/PUT /admin/payment-settings`.
- Ação: integrações com gateway (PIX confirmado, webhook real).
  - Status: **CRIAR** → integração transacional real.

### 3.14 `/admin/fidelidade` (ConfiguracoesFidelidade)
- Ação: visualizar/editar regras de pontuação.
  - Status: **OK** → `GET/PUT /admin/loyalty-settings`.
- Ação: campanhas de resgate/níveis.
  - Status: **CRIAR**.

### 3.15 `/admin/hardware` (ConfiguracaoHardware)
- Ação: salvar configuração de impressora/dispositivo e testar impressão.
  - Status: **CRIAR** → módulo de hardware/impressão.

### 3.16 `/admin/entregadores` (GestaoEntregadores)
- Ação: cadastrar/listar motoboys.
  - Status: **OK** → `POST/GET /admin/couriers`.
- Ação: atribuir motoboy em pedido.
  - Status: **OK** → `PATCH /admin/orders/{order_id}/assign-courier`.
- Ação: status online/offline e geolocalização de entregador.
  - Status: **CRIAR**.

### 3.17 `/admin/dashboard` (DashboardDesempenho)
- Ação: indicadores e gráficos mensais.
  - Status: **PARCIAL** → existe `GET /admin/reports/daily-close`; faltam endpoints analíticos por período/produto/canal.

### 3.18 `/admin/campanhas` (GestaoCampanhas)
- Ação: criar campanhas e segmentar público.
  - Status: **CRIAR** → CRUD de campanhas + motor de envio.

### 3.19 `/admin/cupons` (GestaoCupons)
- Ação: criar/listar cupons.
  - Status: **OK** → `POST/GET /admin/coupons` (frontend integrado).
- Ação: editar/ativar/desativar/remover cupom.
  - Status: **OK** → `PATCH/DELETE /admin/coupons/{codigo}` (frontend integrado).

### 3.20 `/admin/acerto` (AcertoFinanceiro)
- Ação: ver resumo financeiro de fechamento diário.
  - Status: **OK** → `GET /admin/reports/daily-close`.
- Ação: acerto por motoboy/período com detalhes de corridas.
  - Status: **CRIAR**.

---

## 4) Itens backend a criar (lista consolidada)

### Prioridade P0 (destrava integração principal)
1. Endpoint de **quote de pedido** (subtotal + frete + cupom sem criar pedido).
2. Endpoints de **carrinho** (ou decisão oficial: carrinho 100% local).
3. Busca de produtos por texto e/ou endpoint com filtros combinados.
4. Busca de clientes por telefone/nome para lançamento manual.

### Prioridade P1 (experiência completa)
1. Tracking em tempo real (WebSocket/SSE) para `/acompanhamento` e painel admin.
3. Endpoints de perfil: update usuário + endereços + pagamento salvo.
4. Analytics para dashboard mensal (vendas por período, top produtos, ticket médio).

### Prioridade P2 (escala/operação)
1. Campanhas/notificações (admin + central do cliente).
2. Hardware/impressão térmica.
3. Acerto financeiro avançado por motoboy.
4. Recompensas/fidelidade com resgate.

---

## 5) Plano de execução por sprint

### Sprint 1 — Integração core de compra
- Integrar `/cadastro` com `POST /auth/register`.
- Integrar `/home` com `GET /menu/` e filtro de categoria.
- Integrar `/personalizar-pizza` com `GET /menu/detailed`.
- Integrar `/finalizar-pedido` com `POST /orders/`.
- Entregar endpoint `POST /orders/quote`.

### Sprint 2 — Pós-compra e operação básica
- Integrar `/pedidos` e `/acompanhamento` via `GET /orders/...`.
- Integrar admin `/lancamento`, `/entregadores`, `/cupons`, `/configuracoes`, `/pagamento`, `/fidelidade` com endpoints já existentes.
- Entregar busca de clientes e busca textual de produtos.

### Sprint 3 — Tempo real e analytics
- WebSocket/SSE para pedido em tempo real.
- Endpoints de dashboard mensal e relatórios operacionais.
- Melhorias de estoque/alertas e analytics operacional.

---

## 6) Critério de pronto para o mapeamento definitivo (detalhe botão a botão)
Para cada página, registrar em checklist técnico:
- elemento de UI (id/nome visual),
- evento (`click`, `change`, `submit`),
- payload esperado,
- endpoint alvo,
- status (OK/PARCIAL/CRIAR),
- ticket vinculado no backlog.

Esse checklist deve ser mantido como artefato vivo em paralelo ao desenvolvimento.
