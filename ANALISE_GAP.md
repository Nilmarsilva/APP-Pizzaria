# Análise de Gap - Sistema Pizzaria Pro
**Data:** 04/02/2026  
**Status:** Backend em memória funcional, Frontend não iniciado

---

## 📊 Status Atual do Projeto

### ✅ O QUE JÁ ESTÁ IMPLEMENTADO (Backend)

#### **Infraestrutura Base**
- ✅ Estrutura FastAPI configurada
- ✅ Armazenamento em memória (InMemoryDB)
- ✅ Schemas Pydantic para validação
- ✅ Rotas organizadas por módulo

#### **Autenticação e Usuários**
- ✅ Cadastro de usuário via WhatsApp (`POST /auth/register`)
- ✅ Consulta de usuário (`GET /auth/users/{user_id}`)
- ⚠️ **LIMITAÇÃO:** Token fake (não há autenticação real com JWT)
- ❌ Sem proteção de rotas por token
- ❌ Sem distinção is_admin implementada

#### **Gestão Administrativa**
- ✅ Autenticação admin via header `X-Admin-Token`
- ✅ CRUD de configurações da loja (nome, endereço, horários)
- ✅ CRUD de configurações de fidelidade
- ✅ CRUD de configurações de pagamento
- ✅ CRUD de categorias do cardápio
- ✅ CRUD de produtos
- ✅ CRUD de cupons de desconto
- ✅ CRUD de motoboys (couriers)
- ✅ CRUD de taxas por bairro (neighborhoods)
- ✅ Listagem de pedidos
- ✅ Atualização de status de pedidos
- ✅ Atribuição de motoboy a pedidos
- ✅ Relatório de fechamento diário (daily-close)

#### **Cardápio (Menu)**
- ✅ Listagem de produtos disponíveis (`GET /menu/`)
- ❌ Sem filtro por categoria
- ❌ Sem imagens dos produtos
- ❌ Sem variações de tamanho (M, G, GG)
- ❌ Sem adicionais/bordas

#### **Pedidos**
- ✅ Criação de pedido (`POST /orders/`)
- ✅ Rastreamento de pedido (`GET /orders/track/{id}`)
- ✅ Listagem de pedidos por usuário (`GET /orders/user/{user_id}`)
- ✅ Cálculo de taxa de entrega por bairro
- ✅ Aplicação de cupons de desconto
- ✅ Contabilização de pontos de fidelidade ao entregar pedido
- ❌ Sem WebSocket para tempo real
- ❌ Sem notificações push
- ❌ Sem integração com impressora térmica

#### **Fidelidade**
- ✅ Consulta de pontos (`GET /loyalty/points/{user_id}`)
- ✅ Configuração de regras (admin)
- ✅ Acúmulo automático de pontos na entrega
- ❌ Sem resgate de prêmios/recompensas
- ❌ Sem cupons automáticos ao atingir meta

---

## ❌ O QUE FALTA IMPLEMENTAR

### **FASE 0 - Preparação e Infraestrutura**

#### Épico 0.1: Base do Projeto
- ❌ **Frontend React + Vite não iniciado**
- ❌ Configuração de PWA
- ❌ Tailwind CSS + shadcn/ui
- ❌ Linting e formatação (eslint/prettier frontend, ruff/black backend)
- ❌ Pre-commit hooks

#### Épico 0.2: Autenticação e Segurança
- ❌ **CRÍTICO:** Autenticação real com JWT
- ❌ Login via WhatsApp (envio de código)
- ❌ Middleware de proteção de rotas
- ❌ Sistema de permissões (is_admin)
- ❌ Refresh tokens

#### Épico 0.3: Base de Dados Real
- ❌ **CRÍTICO:** Migração de InMemoryDB para PostgreSQL
- ❌ Modelos SQLAlchemy
- ❌ Alembic para migrações
- ❌ Tabelas: users, addresses, categories, products, product_variants, product_addons, orders, order_items, order_addons, couriers, neighborhood_fees, coupons, settings, user_devices, loyalty_transactions

---

### **FASE 1 - Backoffice Administrativo**

#### Épico 1.1: Configurações da Loja
- ⚠️ **PARCIAL:** Configurações gerais existem, mas faltam:
  - ❌ Upload de logo da loja
  - ❌ Configuração de horário de funcionamento por dia da semana
  - ❌ Status "Loja aberta/fechada" dinâmico

#### Épico 1.2: Cardápio e Estoque
- ❌ **Variações de produtos** (M, G, GG) - tabela `product_variants`
- ❌ **Adicionais e bordas** - tabela `product_addons`
- ❌ Upload de imagens dos produtos
- ❌ Ordenação/posicionamento de produtos
- ❌ Controle de estoque (quantidade disponível)
- ❌ Alertas de baixo estoque

#### Épico 1.3: Impressão e Hardware
- ❌ **CRÍTICO:** Integração com impressora térmica (ESC/POS)
- ❌ Script cliente Python para receber comandos via WebSocket
- ❌ Formatação de cupom de pedido
- ❌ Configuração de modelo de impressora
- ❌ Teste de impressão

---

### **FASE 2 - Funil de Vendas (PWA Cliente)**

#### Épico 2.1: Home e Navegação
- ❌ **TODO O FRONTEND PWA**
- ❌ Tela Home com categorias e produtos
- ❌ Destaques e promoções
- ❌ Busca de produtos
- ❌ Navegação por categorias
- ❌ Dark mode

#### Épico 2.2: Personalização de Pizza
- ❌ Tela de personalização completa
- ❌ Seleção de tamanho (M, G, GG)
- ❌ Escolha de borda recheada
- ❌ Adicionais múltiplos
- ❌ Cálculo de preço em tempo real
- ❌ Campo de observações

#### Épico 2.3: Carrinho e Checkout
- ❌ Carrinho de compras (frontend)
- ❌ Persistência do carrinho no localStorage
- ❌ Edição/remoção de itens
- ❌ Formulário de endereço
- ❌ Seleção de bairro (autocomplete)
- ❌ Cálculo de frete em tempo real
- ❌ Campo de cupom com validação
- ❌ Seleção de método de pagamento
- ❌ Geração de QR Code PIX
- ❌ Confirmação de pedido

#### Épico 2.4: Perfil do Cliente
- ❌ Tela de perfil
- ❌ Gerenciamento de endereços salvos
- ❌ Dados de pagamento salvos
- ❌ Histórico de pedidos
- ❌ Botão "Pedir Novamente"

---

### **FASE 3 - Operação e Logística em Tempo Real**

#### Épico 3.1: Gestão de Pedidos
- ❌ **CRÍTICO:** WebSocket para pedidos em tempo real
- ❌ Dashboard administrativo (frontend)
- ❌ Alerta sonoro para novos pedidos
- ❌ Painel Kanban (Pendente -> Preparando -> Em Rota -> Entregue)
- ❌ Botão de aceitar/rejeitar pedido
- ❌ Botão de impressão manual
- ❌ Visualização detalhada do pedido
- ❌ Timer de tempo de preparo

#### Épico 3.2: Logística
- ❌ Tela de gestão de motoboys (frontend)
- ❌ Dashboard de entregas em andamento
- ❌ Mapa com rotas (opcional)
- ❌ Notificação para motoboy via WhatsApp
- ❌ App mobile para motoboy (opcional)

#### Épico 3.3: Acompanhamento do Cliente
- ❌ Tela de acompanhamento em tempo real (frontend)
- ❌ Linha do tempo visual (Recebido -> Preparando -> Saiu para entrega -> Entregue)
- ❌ Atualização via WebSocket
- ❌ Estimativa de tempo de entrega

---

### **FASE 4 - Fidelização e Marketing**

#### Épico 4.1: Fidelidade
- ❌ Tela "Minha Fidelidade" (frontend cliente)
- ❌ Visualização de saldo de pontos
- ❌ Cartela de selos/progresso visual
- ❌ Histórico de acúmulo de pontos
- ❌ Resgate de recompensas
- ❌ Geração automática de cupom ao atingir meta
- ❌ Níveis de fidelidade (bronze/prata/ouro)

#### Épico 4.2: Push e Promoções
- ❌ **CRÍTICO:** Sistema de notificações push (Web Push API ou OneSignal)
- ❌ Registro de tokens de dispositivo (user_devices)
- ❌ Tela de gestão de campanhas (admin frontend)
- ❌ Segmentação de público (todos, inativos, VIP)
- ❌ Agendamento de envio
- ❌ Centro de notificações (frontend cliente)
- ❌ Histórico de promoções recebidas

#### Épico 4.3: Cupons de Desconto
- ❌ Tela de gestão de cupons (admin frontend)
- ❌ Cupons com data de expiração
- ❌ Cupons de uso único
- ❌ Cupons para primeira compra
- ❌ Cupons por categoria

---

### **FASE 5 - Fechamento e Resultados**

#### Épico 5.1: Acerto Financeiro
- ❌ Tela de acerto com motoboy (frontend)
- ❌ Listagem de entregas por motoboy
- ❌ Valores recebidos (dinheiro/cartão na entrega)
- ❌ Comparação com valor esperado
- ❌ Histórico de acertos

#### Épico 5.2: Relatórios e Dashboard
- ❌ Dashboard mensal (frontend)
- ❌ Gráficos de vendas (Chart.js ou Recharts)
- ❌ Top produtos mais vendidos
- ❌ Análise de horários de pico
- ❌ Taxa de conversão
- ❌ Ticket médio
- ❌ Análise de cupons utilizados
- ❌ Exportação de relatórios (PDF/Excel)

---

## 🔧 ITENS TÉCNICOS CRÍTICOS

### Backend
1. **Banco de Dados PostgreSQL**
   - Migrar de InMemoryDB para PostgreSQL
   - Criar todos os modelos SQLAlchemy
   - Configurar Alembic
   - Criar migrações iniciais

2. **Autenticação Real**
   - Implementar JWT (access + refresh tokens)
   - Integração com API de WhatsApp (Twilio/Evolution API)
   - Middleware de autenticação
   - Sistema de permissões

3. **WebSocket**
   - Endpoint para pedidos em tempo real
   - Gerenciador de conexões
   - Notificação de mudança de status

4. **Integrações**
   - Gateway de pagamento PIX (Mercado Pago/Asaas)
   - Impressora térmica (python-escpos)
   - Web Push API ou OneSignal
   - WhatsApp Business API

5. **Upload de Arquivos**
   - Sistema de upload de imagens
   - Storage (local ou S3)
   - Redimensionamento/otimização

### Frontend
1. **Setup Inicial**
   - Criar projeto React + Vite
   - Configurar Tailwind CSS
   - Instalar shadcn/ui
   - Configurar PWA (vite-plugin-pwa)
   - Service Worker

2. **Estado Global**
   - Context API ou Zustand
   - Gerenciamento de carrinho
   - Autenticação
   - WebSocket connection

3. **Roteamento**
   - React Router v6
   - Rotas públicas vs protegidas
   - Lazy loading

4. **Componentes**
   - Sistema de design consistente
   - Componentes reutilizáveis
   - Responsividade mobile-first

### DevOps
1. **Docker**
   - Dockerfile para backend
   - Dockerfile para frontend
   - docker-compose.yml (backend + postgres + redis)

2. **Deploy**
   - Estratégia multi-tenant (um container por pizzaria)
   - CI/CD pipeline
   - Monitoramento (logs, métricas)

---

## 📋 PRIORIZAÇÃO SUGERIDA

### **Sprint 1 - Base Sólida (2-3 semanas)**
1. Migrar para PostgreSQL + SQLAlchemy + Alembic
2. Implementar autenticação JWT real
3. Criar modelos de variações de produtos e adicionais
4. Setup inicial do frontend (React + Vite + Tailwind)

### **Sprint 2 - MVP Cliente (2-3 semanas)**
1. Frontend: Home + Cardápio
2. Frontend: Personalização de pizza
3. Frontend: Carrinho + Checkout
4. Integração com gateway de pagamento PIX

### **Sprint 3 - Painel Admin (2 semanas)**
1. Dashboard de pedidos em tempo real (WebSocket)
2. Gestão de cardápio (frontend)
3. Impressão térmica
4. Gestão de motoboys

### **Sprint 4 - Fidelidade e Marketing (1-2 semanas)**
1. Sistema de notificações push
2. Tela de fidelidade (cliente)
3. Gestão de campanhas (admin)
4. Dashboard de relatórios

### **Sprint 5 - Polimento (1 semana)**
1. Testes automatizados
2. Otimizações de performance
3. Documentação
4. Deploy e multi-tenant

---

## 📊 MÉTRICAS

- **Backend Implementado:** ~40% das funcionalidades
- **Frontend Implementado:** 0%
- **Integrações Críticas:** 0%
- **Banco de Dados Real:** 0%
- **Deploy:** 0%

**Estimativa Total:** ~8-12 semanas para MVP completo funcionando em produção

---

## 🎯 PRÓXIMOS PASSOS IMEDIATOS

1. **Decidir stack de banco:** PostgreSQL local ou cloud (Supabase/Neon)?
2. **Criar estrutura de modelos SQLAlchemy**
3. **Implementar autenticação JWT**
4. **Iniciar projeto frontend React**
5. **Configurar ambiente Docker**
