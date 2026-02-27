# Plano de Integração Frontend ↔ Backend

## 0) Progresso incremental (execução em lotes)
- ✅ Lote 1 concluído: cardápio público com categorias e busca, quote e criação de pedido.
- ✅ Lote 2 concluído: variações/adicionais/estoque/imagem no backend + consumo no frontend.
- ✅ Lote 3 concluído: notificações cliente/admin e atualização básica de perfil.
- ✅ Lote 4 concluído: gestão de cupons admin com CRUD completo e integração de tela.

---

## 1) Objetivo
Conectar **100% das interações das telas** do frontend aos endpoints de backend, registrando claramente:
- o que já está pronto,
- o que está parcial,
- e o que ainda precisa ser criado.

---

## 2) Convenções de status
- **OK**: endpoint existe e está integrado no frontend.
- **PARCIAL**: endpoint existe, mas falta parte da regra/UX ou integração.
- **CRIAR**: endpoint/recurso ainda não existe.

---

## 3) Mapeamento por rota de tela

## Módulo Cliente

### 3.1 `/cadastro` (CadastroUsuario)
- Cadastrar usuário por WhatsApp.
  - Status: **OK** → `POST /auth/register`.
- Hidratar sessão com dados do usuário.
  - Status: **OK** → `GET /auth/users/{user_id}`.
- Login social (Google/Facebook).
  - Status: **CRIAR** → OAuth/social login.

### 3.2 `/home` (HomeCardapio)
- Listar produtos no cardápio.
  - Status: **OK** → `GET /menu/`.
- Filtrar por categoria.
  - Status: **OK** → `GET /menu/?categoria_id=...`.
- Busca textual de produtos.
  - Status: **OK** → `GET /menu/?q=...`.
- Exibir variações/adicionais por produto.
  - Status: **OK** → `GET /menu/detailed`.
- Promoções em destaque.
  - Status: **CRIAR** → endpoint de campanhas/promos ativas.

### 3.3 `/personalizar-pizza` (PersonalizacaoPizza)
- Carregar tamanhos/adicionais/bordas por produto.
  - Status: **OK** → `GET /menu/detailed`.
- Calcular valor final em tempo real.
  - Status: **PARCIAL** → cálculo principal no frontend; quote existe no backend.
- Adicionar item personalizado ao carrinho persistido no backend.
  - Status: **CRIAR** → API de carrinho (decidir se manter localStorage-only).

### 3.4 `/finalizar-pedido` (FinalizacaoPedido)
- Simular totais (subtotal/frete/desconto).
  - Status: **OK** → `POST /orders/quote`.
- Confirmar pedido.
  - Status: **OK** → `POST /orders/`.
- Carrinho server-side.
  - Status: **CRIAR** → endpoints de carrinho (opcional estratégico).

### 3.5 `/acompanhamento` (AcompanhamentoPedido)
- Consultar status do pedido.
  - Status: **OK** → `GET /orders/track/{order_id}`.
- Atualização em tempo real sem refresh.
  - Status: **CRIAR** → WebSocket/SSE.
- Dados de ETA/localização do entregador.
  - Status: **CRIAR** → tracking logístico.

### 3.6 `/pedidos` (MeusPedidos)
- Listar histórico.
  - Status: **OK** → `GET /orders/user/{user_id}`.
- Ver detalhes.
  - Status: **OK** → `GET /orders/{order_id}`.
- Pedir novamente (reorder).
  - Status: **CRIAR** → `POST /orders/{id}/reorder`.

### 3.7 `/perfil` (Perfil)
- Ler perfil.
  - Status: **OK** → `GET /auth/users/{user_id}`.
- Atualizar nome/whatsapp.
  - Status: **OK** → `PUT /auth/users/{user_id}`.
- Endereços/métodos salvos.
  - Status: **CRIAR**.

### 3.8 `/fidelidade` (Fidelidade)
- Consultar pontos.
  - Status: **OK** → `GET /loyalty/points/{user_id}`.
- Recompensas e resgate.
  - Status: **CRIAR**.

### 3.9 `/notificacoes` (Notificacoes)
- Listar notificações.
  - Status: **OK** → `GET /notifications/{user_id}`.
- Marcar como lida.
  - Status: **OK** → `PATCH /notifications/{notification_id}`.
- Arquivar e filtros avançados.
  - Status: **CRIAR**.

### 3.10 `/lp` (LandingPage)
- Captura de lead/contato.
  - Status: **CRIAR**.

## Módulo Administrativo

### 3.11 `/admin/lancamento` (LancamentoPedidos)
- Buscar cliente por termo (telefone/nome).
  - Status: **OK** → `GET /admin/users/search?q=...` (frontend integrado).
- Listar produtos/categorias para montar pedido.
  - Status: **OK** → `GET /admin/categories`, `GET /admin/products`.
- Criar pedido no balcão.
  - Status: **OK** → `POST /orders/`.
- Simular cupom/frete antes de fechar.
  - Status: **OK** → `POST /orders/quote` (ajuste de UX/admin ainda pendente).

### 3.12 `/admin/configuracoes` (ConfiguracoesGerais)
- Ver/editar configurações da loja.
  - Status: **OK** → `GET/PUT /admin/settings`.
- Horários detalhados por dia e automações.
  - Status: **CRIAR**.

### 3.13 `/admin/pagamento` (ConfiguracoesPagamento)
- Ver/editar meios de pagamento e chave PIX.
  - Status: **OK** → `GET/PUT /admin/payment-settings`.
- Integração transacional real com gateway/webhook.
  - Status: **CRIAR**.

### 3.14 `/admin/fidelidade` (ConfiguracoesFidelidade)
- Ver/editar regras de pontos.
  - Status: **OK** → `GET/PUT /admin/loyalty-settings`.
- Campanhas/níveis de resgate.
  - Status: **CRIAR**.

### 3.15 `/admin/hardware` (ConfiguracaoHardware)
- Configurar impressora/dispositivo e teste.
  - Status: **CRIAR**.

### 3.16 `/admin/entregadores` (GestaoEntregadores)
- Cadastrar/listar motoboys.
  - Status: **OK** → `POST/GET /admin/couriers`.
- Atribuir motoboy em pedido.
  - Status: **OK** → `PATCH /admin/orders/{order_id}/assign-courier`.
- Status online e geolocalização.
  - Status: **CRIAR**.

### 3.17 `/admin/dashboard` (DashboardDesempenho)
- Fechamento diário.
  - Status: **OK** → `GET /admin/reports/daily-close`.
- Indicadores mensais/analíticos.
  - Status: **CRIAR**.

### 3.18 `/admin/campanhas` (GestaoCampanhas)
- CRUD de campanhas e segmentação.
  - Status: **CRIAR**.

### 3.19 `/admin/cupons` (GestaoCupons)
- Criar/listar cupons.
  - Status: **OK** → `POST/GET /admin/coupons`.
- Editar/ativar/desativar/remover cupom.
  - Status: **OK** → `PATCH/DELETE /admin/coupons/{codigo}`.

### 3.20 `/admin/acerto` (AcertoFinanceiro)
- Fechamento diário resumido.
  - Status: **OK** → `GET /admin/reports/daily-close`.
- Acerto por motoboy/período.
  - Status: **CRIAR**.

---

## 4) Itens backend a criar (lista consolidada)

### Prioridade P0
1. Reorder de pedido
2. Perfil completo (endereços e pagamento salvo)
3. Definição oficial de carrinho (server-side ou localStorage-only)
4. Captura de lead/contato (LP)

### Prioridade P1
1. Tracking em tempo real (WebSocket/SSE)
2. Tracking logístico com ETA/localização
3. Catálogo/resgate de recompensas
4. Dashboard analítico mensal

### Prioridade P2
1. Campanhas (CRUD + envio)
2. Hardware/impressão térmica
3. Acerto financeiro avançado
4. Integração de pagamento transacional real

---

## 5) Plano de execução por sprint

### Sprint 1 — Operação comercial
- Reorder no módulo de pedidos.
- Endereços de usuário (perfil).
- Definição oficial de carrinho (server-side ou localStorage-only).

### Sprint 2 — Experiência e retenção
- Recompensas/resgate de fidelidade.
- Evolução de notificações (arquivar/filtros).
- Decisão e implementação final de carrinho.

### Sprint 3 — Escala operacional
- WebSocket/SSE + tracking logístico.
- Dashboard analítico.
- Campanhas e integrações externas.

---

## 6) Critério de pronto (checklist botão a botão)
Para cada tela:
- elemento de UI,
- evento (`click`, `change`, `submit`),
- payload,
- endpoint alvo,
- status (OK/PARCIAL/CRIAR),
- ticket/backlog vinculado.

Esse checklist deve ser atualizado a cada lote entregue.
