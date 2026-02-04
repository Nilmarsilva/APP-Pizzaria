import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

/**
 * Tela de Gestão de Entregadores e Logística - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const GestaoEntregadores: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111718] dark:text-white min-h-screen pb-20 font-display">
      {/* Barra de Navegação Superior */}
      <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-[#dce4e5] dark:border-gray-700">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-primary-admin flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-admin/10 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Logística & Entregas</h2>
          <div className="size-10 flex items-center justify-center text-primary-admin">
            <span className="material-symbols-outlined">local_pizza</span>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-8">
        {/* Seção: Cadastro de Novo Entregador */}
        <section>
          <Card className="p-4 shadow-sm border-[#dce4e5]">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary-admin">person_add</span>
              <h3 className="text-lg font-bold tracking-tight">Novo Entregador</h3>
            </div>
            <div className="space-y-4">
              <Input label="Nome Completo" placeholder="Ex: João Silva" />
              <div className="flex gap-4">
                <Input label="Placa" placeholder="ABC-1234" className="uppercase" />
                <Input label="Telefone" placeholder="(11) 99999-9999" />
              </div>
              <Button
                variant="admin"
                className="w-full py-3.5 flex items-center justify-center gap-2"
                onClick={() => {}}
              >
                <span className="material-symbols-outlined text-sm">save</span>
                Cadastrar Entregador
              </Button>
            </div>
          </Card>
        </section>

        {/* Seção: Status da Frota */}
        <section>
          <div className="flex justify-between items-end mb-3">
            <h3 className="text-lg font-bold tracking-tight">Status da Frota</h3>
            <span className="text-xs font-semibold text-primary-admin uppercase">8 Ativos</span>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
            {/* Exemplo: Entregador Livre */}
            <div className="flex-none w-40 bg-white dark:bg-gray-800 rounded-xl p-3 border-l-4 border-green-500 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-lg">check_circle</span>
                </div>
                <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Livre</span>
              </div>
              <p className="font-bold text-sm truncate">Carlos Alberto</p>
              <p className="text-[11px] opacity-60">BRA-2J44</p>
            </div>

            {/* Exemplo: Entregador em Entrega */}
            <div className="flex-none w-40 bg-white dark:bg-gray-800 rounded-xl p-3 border-l-4 border-amber-400 shadow-sm opacity-80">
              <div className="flex justify-between items-start mb-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-amber-600 text-lg">moped</span>
                </div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Rua</span>
              </div>
              <p className="font-bold text-sm truncate">Felipe Mota</p>
              <p className="text-[11px] opacity-60">ABC-1234</p>
            </div>
          </div>
        </section>

        {/* Seção: Pedidos Prontos para Despacho */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold tracking-tight">Prontos para Entrega</h3>
            <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse uppercase">3 urgentes</div>
          </div>
          <div className="space-y-3">
            {[
              { id: '4829', name: 'Ana Paula', info: 'PIZZA G + REFRI', time: '12 min', dist: '2.4 km' },
              { id: '4830', name: 'Roberto M.', info: 'COMBO FAMÍLIA', time: '5 min', dist: '0.8 km' }
            ].map((order) => (
              <Card key={order.id} className="flex items-center gap-3 p-4 border-[#dce4e5]">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-base">#{order.id} - {order.name}</span>
                    <span className="text-[10px] font-bold bg-primary-admin/10 text-primary-admin px-2 rounded-full uppercase">{order.info}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs opacity-60">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {order.time}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> {order.dist}</span>
                  </div>
                </div>
                <button className="bg-primary-admin/10 text-primary-admin p-2 rounded-lg hover:bg-primary-admin/20 active:scale-90 transition-transform">
                  <span className="material-symbols-outlined">add_task</span>
                </button>
              </Card>
            ))}
          </div>
        </section>

        {/* Ação de Chamar Motoboy Externo */}
        <section className="pt-4">
          <button className="w-full bg-white dark:bg-gray-800 border-2 border-dashed border-[#dce4e5] dark:border-gray-700 text-[#111718] dark:text-gray-300 font-bold py-6 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary-admin/50 transition-colors active:scale-95">
            <span className="material-symbols-outlined text-primary-admin text-3xl">electric_moped</span>
            <div className="text-center">
              <p className="text-base">Chamar Motoboy Externo</p>
              <p className="text-[10px] opacity-60 font-medium uppercase tracking-wider">Integração iFood / Loggi</p>
            </div>
          </button>
        </section>
      </main>

      {/* Navegação Inferior (Estilo Administrativo) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-[#dce4e5] dark:border-gray-700 pb-5 pt-2 z-50">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <button onClick={() => navigate('/admin/lancamento')} className="flex flex-col items-center gap-1 opacity-40">
            <span className="material-symbols-outlined">restaurant_menu</span>
            <span className="text-[10px] font-bold">Menu</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary-admin">
            <div className="relative">
              <span className="material-symbols-outlined">local_shipping</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-admin opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-admin"></span>
              </span>
            </div>
            <span className="text-[10px] font-bold">Logística</span>
          </button>
          <button onClick={() => navigate('/admin/configuracoes')} className="flex flex-col items-center gap-1 opacity-40">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold">Ajustes</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default GestaoEntregadores;
