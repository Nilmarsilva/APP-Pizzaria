import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';

/**
 * Tela de Gestão de Cupons de Desconto - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const GestaoCupons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#121717] dark:text-white font-display">
      {/* Cabeçalho de Navegação Superior */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-admin flex items-center justify-center text-white">
            <span className="material-symbols-outlined">local_pizza</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight">Gestão de Cupons</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Pizzaria Admin</p>
          </div>
        </div>
        <button onClick={() => navigate('/admin/configuracoes')} className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">settings</span>
        </button>
      </header>

      <main className="pb-24">
        {/* Sumário de Estatísticas */}
        <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar">
          {[
            { label: 'Ativos', value: '12', trend: '+2', up: true },
            { label: 'Usos Hoje', value: '45', trend: '-5%', up: false },
            { label: 'Economia', value: 'R$ 850', trend: '+12%', up: true }
          ].map((stat, i) => (
            <Card key={i} className="min-w-[140px] flex-1 p-4 border-gray-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">{stat.label}</p>
              <p className={`text-2xl font-extrabold ${i === 0 ? 'text-primary-admin' : ''}`}>{stat.value}</p>
              <div className={`flex items-center gap-1 mt-1 ${stat.up ? 'text-green-600' : 'text-red-500'} text-xs font-bold`}>
                <span className="material-symbols-outlined text-sm">{stat.up ? 'trending_up' : 'trending_down'}</span>
                <span>{stat.trend}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Busca e Filtros */}
        <div className="px-4 space-y-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input className="w-full bg-white dark:bg-gray-800 border-none rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary-admin shadow-sm placeholder:text-gray-400 outline-none" placeholder="Buscar por código..." />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <button className="px-4 py-2 rounded-full bg-primary-admin text-white text-xs font-bold">Todos</button>
            <button className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 text-xs font-bold">Ativos</button>
          </div>
        </div>

        {/* Lista de Cupons */}
        <div className="p-4 space-y-4">
          {/* Cupom 1 */}
          <Card className="p-4 flex flex-col gap-4 border-gray-100">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black tracking-tighter text-primary-admin">PIZZA20</span>
                  <span className="material-symbols-outlined text-gray-400 text-sm cursor-pointer">content_copy</span>
                </div>
                <p className="text-xs font-medium text-gray-500">20% OFF em Pizzas</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input checked className="sr-only peer" type="checkbox" readOnly />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-admin"></div>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-background-light dark:bg-gray-900/50 p-3 rounded-lg flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter text-xs">Mínimo</span>
                <span className="text-sm font-bold">R$ 50,00</span>
              </div>
              <div className="bg-background-light dark:bg-gray-900/50 p-3 rounded-lg flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter text-xs">Validade</span>
                <span className="text-sm font-bold">30/11</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end text-xs">
                <span className="font-bold text-gray-500 uppercase tracking-tighter">Uso</span>
                <span className="font-extrabold text-primary-admin">85 / 100</span>
              </div>
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary-admin rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      {/* Botão Flutuante para Novo Cupom */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-primary-admin rounded-full shadow-lg shadow-primary-admin/40 flex items-center justify-center text-white z-50 transition-transform hover:scale-105 active:scale-95">
        <span className="material-symbols-outlined text-4xl">add</span>
      </button>

      {/* Navegação Inferior (Estilo Administrativo) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-700 px-8 py-3 flex justify-between items-center z-40">
        <button onClick={() => navigate('/admin/dashboard')} className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-bold">Início</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary-admin">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
          <span className="text-[10px] font-bold">Cupons</span>
        </button>
        <button onClick={() => navigate('/admin/lancamento')} className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">orders</span>
          <span className="text-[10px] font-bold">Pedidos</span>
        </button>
      </nav>
    </div>
  );
};

export default GestaoCupons;
