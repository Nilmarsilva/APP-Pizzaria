# Backlog detalhado - Sistema Pizzaria Pro (White-Label)

Este backlog foi elaborado a partir das especificações do projeto e da referência visual das telas na pasta `stitch_home_card_pio_pwa`.  
Objetivo: transformar o planejamento em um roteiro executável, com itens priorizados, critérios de aceite e pontos de integração.

## Premissas e boas práticas
- Código modular (backend e frontend em módulos/feature folders).
- Comentários sempre em pt-br para facilitar manutenção.
- Padrão de commits em pt-br (ver seção “Convenções” ao final).
- Telas devem seguir as referências visuais presentes na pasta de screenshots.

## Fontes de referência (design)
As telas devem ser implementadas com base nas imagens em:
`/workspace/APP-Pizzaria/stitch_home_card_pio_pwa`

### Agrupamento recomendado (por módulo)
**Cliente (PWA)**
- home_cardápio_pwa_1..6
- cadastro_de_usuário_pwa
- perfil_e_dados_de_pagamento
- personalização_de_pizza
- finalização_de_pedido
- acompanhamento_de_pedido_em_tempo_real
- meus_pedidos_e_recompra_rápida
- minha_fidelidade_(cliente)
- centro_de_promoções_e_notificações

**Administrativo (ADM)**
- dashboard_de_desempenho_mensal
- gestão_de_entregadores_e_logística
- acerto_financeiro_com_motoboy
- configurações_gerais_da_loja
- configurações_de_pagamento_e_api
- configurações_de_fidelidade_(adm)
- configuração_de_impressão_e_hardware
- gestão_de_campanhas_push
- gestão_de_cupons_de_desconto
- lançamento_de_pedidos_(balcão)

**Comercial**
- landing_page_de_vendas_do_sistema
- landing_page_desktop

## Backlog por fases (com épicos, histórias e critérios de aceite)

### Fase 0 - Preparação e infraestrutura
**Épico 0.1: Base do projeto**
- Story 0.1.1: Estruturar repositório com `backend/` e `frontend/`.
  - Critérios de aceite:
    - Backend em FastAPI com estrutura inicial de pastas.
    - Frontend em React + Vite com Tailwind e PWA configurado.
    - README com instruções de execução local.
- Story 0.1.2: Configurar ambiente de desenvolvimento e linting.
  - Critérios de aceite:
    - Lint e formatação automatizados (ex.: ruff/black no backend, eslint/prettier no frontend).
    - Pre-commit configurado (opcional, mas recomendado).
- Story 0.1.3: Estruturar base de dados.
  - Critérios de aceite:
    - Modelos principais definidos (users, products, orders etc.).
    - Migrações iniciais preparadas.

**Épico 0.2: Autenticação e segurança**
- Story 0.2.1: Autenticação por WhatsApp (cliente).
  - Critérios de aceite:
    - Registro e login com número WhatsApp.
    - Tokens de autenticação funcionando.
- Story 0.2.2: Proteção de rotas ADM.
  - Critérios de aceite:
    - Usuário `is_admin` obrigatório para acessar rotas administrativas.

---

### Fase 1 - Backoffice administrativo (cérebro do sistema)
**Épico 1.1: Configurações da loja**
- Story 1.1.1: Tela de Configurações Gerais.
  - Referência: `configurações_gerais_da_loja/screen.png`
  - Critérios de aceite:
    - Cadastro de nome, endereço, horários e taxa por bairro.
    - Persistência no backend.
- Story 1.1.2: Configurações de pagamento e API.
  - Referência: `configurações_de_pagamento_e_api/screen.png`
  - Critérios de aceite:
    - Configuração de PIX, cartão e integrações externas.

**Épico 1.2: Cardápio e estoque**
- Story 1.2.1: Cadastro de categorias.
  - Critérios de aceite:
    - CRUD de categorias com ordenação.
- Story 1.2.2: Cadastro de produtos e variações.
  - Critérios de aceite:
    - CRUD de produtos com variações M/G/GG.
    - Habilitar/desabilitar item.
- Story 1.2.3: Adicionais e bordas.
  - Critérios de aceite:
    - CRUD de adicionais (ex.: borda recheada).

**Épico 1.3: Impressão e hardware**
- Story 1.3.1: Configuração de impressora térmica.
  - Referência: `configuração_de_impressão_e_hardware/screen.png`
  - Critérios de aceite:
    - Configurar modelo de impressora e testar impressão.

---

### Fase 2 - Funil de vendas (PWA cliente)
**Épico 2.1: Home e navegação**
- Story 2.1.1: Home cardápio com categorias.
  - Referência: `home_cardápio_pwa_1..6`
  - Critérios de aceite:
    - Listagem dinâmica de categorias e produtos.
    - Destaques e promoções visíveis.

**Épico 2.2: Personalização de pizza**
- Story 2.2.1: Tela de personalização.
  - Referência: `personalização_de_pizza/screen.png`
  - Critérios de aceite:
    - Escolha de tamanho, borda e adicionais.
    - Cálculo do preço final em tempo real.

**Épico 2.3: Carrinho e checkout**
- Story 2.3.1: Carrinho e revisão de pedido.
  - Referência: `finalização_de_pedido/screen.png`
  - Critérios de aceite:
    - Exibir itens, quantidades e total.
    - Aplicar cupons e frete por bairro.
- Story 2.3.2: Checkout e pagamento.
  - Critérios de aceite:
    - Seleção de endereço e método de pagamento.
    - Confirmação do pedido com fluxo de PIX quando aplicável.

---

### Fase 3 - Operação e logística em tempo real
**Épico 3.1: Gestão de pedidos**
- Story 3.1.1: Dashboard de pedidos em tempo real.
  - Referências: `lançamento_de_pedidos_(balcão)/screen.png`
  - Critérios de aceite:
    - Receber pedidos via WebSocket.
    - Alterar status e disparar impressão.

**Épico 3.2: Logística**
- Story 3.2.1: Gestão de entregadores.
  - Referência: `gestão_de_entregadores_e_logística/screen.png`
  - Critérios de aceite:
    - Atribuição de pedidos a motoboys.
    - Atualizar status “em rota”.

---

### Fase 4 - Fidelização e marketing
**Épico 4.1: Fidelidade**
- Story 4.1.1: Configuração de regras de pontos (ADM).
  - Referência: `configurações_de_fidelidade_(adm)/screen.png`
  - Critérios de aceite:
    - Definir regra e contabilizar pontos por pedido.
- Story 4.1.2: Minha fidelidade (cliente).
  - Referência: `minha_fidelidade_(cliente)/screen.png`
  - Critérios de aceite:
    - Exibir saldo e recompensas.

**Épico 4.2: Push e promoções**
- Story 4.2.1: Gestão de campanhas push.
  - Referência: `gestão_de_campanhas_push/screen.png`
  - Critérios de aceite:
    - Criar campanhas e disparar notificações.
- Story 4.2.2: Centro de promoções (cliente).
  - Referência: `centro_de_promoções_e_notificações/screen.png`
  - Critérios de aceite:
    - Exibir histórico de promoções recebidas.

---

### Fase 5 - Fechamento e resultados
**Épico 5.1: Acerto e relatórios**
- Story 5.1.1: Acerto financeiro com motoboy.
  - Referência: `acerto_financeiro_com_motoboy/screen.png`
  - Critérios de aceite:
    - Listar entregas e valores recebidos.
- Story 5.1.2: Relatórios e dashboard mensal.
  - Referência: `dashboard_de_desempenho_mensal/screen.png`
  - Critérios de aceite:
    - Gráficos com vendas e produtos mais vendidos.

---

## Itens adicionais sugeridos (incrementos futuros)
- Integração com gateways de pagamento (ex.: Mercado Pago, Pagar.me).
- Módulo de estoque automatizado (alerta de baixo estoque).
- Módulo de fidelidade com níveis (bronze/prata/ouro).
- Multilojas no mesmo painel (para redes de pizzarias).

## Convenções de commits (pt-br)
- Use mensagens descritivas e objetivas.
  - Exemplos:
    - `docs: adicionar backlog detalhado`
    - `feat: criar módulo de cardápio`
    - `fix: corrigir cálculo do frete`

