import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';

/**
 * Tela de Dashboard de Desempenho Mensal - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const DashboardDesempenho: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-white dark:bg-background-dark overflow-x-hidden pb-20 shadow-2xl">

        {/* Barra Superior App */}
        <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50">
          <button
            onClick={() => navigate(-1)}
            className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold flex-1 text-center">Desempenho Mensal</h2>
          <div className="flex w-12 items-center justify-end">
            <span className="material-symbols-outlined text-[#111418] dark:text-white">account_circle</span>
          </div>
        </div>

        {/* Filtros de Período (Segmented Buttons) */}
        <div className="flex px-4 py-3">
          <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-gray-800 p-1">
            <button className="flex-1 h-full rounded-lg text-[#617589] dark:text-gray-400 text-sm font-medium">7 dias</button>
            <button className="flex-1 h-full rounded-lg bg-white dark:bg-gray-700 shadow-sm text-primary-blue text-sm font-bold">Este Mês</button>
            <button className="flex-1 h-full rounded-lg text-[#617589] dark:text-gray-400 text-sm font-medium">Anterior</button>
          </div>
        </div>

        {/* Grade de KPIs */}
        <div className="flex flex-wrap gap-3 p-4">
          {[
            { label: 'Faturamento', value: 'R$ 45.280', change: '+12.5%', icon: 'payments', up: true },
            { label: 'Pedidos', value: '1.240', change: '+5.2%', icon: 'shopping_cart', up: true },
            { label: 'Ticket Médio', value: 'R$ 36,50', change: '-2.1%', icon: 'confirmation_number', up: false },
            { label: 'Novos Clientes', value: '145', change: '+8.4%', icon: 'person_add', up: true }
          ].map((kpi, i) => (
            <Card key={i} className="flex min-w-[160px] flex-1 flex-col gap-2 p-4 border-[#dbe0e6]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-blue text-xl">{kpi.icon}</span>
                <p className="text-[#617589] dark:text-gray-400 text-xs font-medium">{kpi.label}</p>
              </div>
              <p className="text-[#111418] dark:text-white text-xl font-bold">{kpi.value}</p>
              <p className={`${kpi.up ? 'text-green-600' : 'text-red-500'} text-xs font-semibold flex items-center gap-1`}>
                <span className="material-symbols-outlined text-sm">{kpi.up ? 'trending_up' : 'trending_down'}</span>
                {kpi.change}
              </p>
            </Card>
          ))}
        </div>

        {/* Gráfico de Evolução (Simulado com SVG) */}
        <h3 className="text-[#111418] dark:text-white text-lg font-bold px-4 pb-2 pt-4">Evolução de Vendas</h3>
        <div className="px-4 py-2">
          <Card className="flex flex-col gap-4 p-4 border-[#dbe0e6] bg-white dark:bg-gray-900/50">
            <div className="flex flex-col gap-1">
              <p className="text-[#617589] dark:text-gray-400 text-sm">Total acumulado</p>
              <p className="text-[#111418] dark:text-white text-2xl font-bold">R$ 45.280,00</p>
            </div>
            <div className="h-40 w-full">
              <svg className="overflow-visible" fill="none" height="120" preserveAspectRatio="none" viewBox="0 0 400 120" width="100%">
                <path d="M0 100 Q 20 80, 40 90 T 80 40 T 120 70 T 160 30 T 200 60 T 240 20 T 280 80 T 320 10 T 360 50 T 400 30" fill="none" stroke="#137fec" strokeWidth="3" strokeLinecap="round" />
                <path d="M0 100 Q 20 80, 40 90 T 80 40 T 120 70 T 160 30 T 200 60 T 240 20 T 280 80 T 320 10 T 360 50 T 400 30 V 120 H 0 Z" fill="url(#salesGradient)" />
                <defs>
                  <linearGradient id="salesGradient" x1="0" x2="0" y1="0" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#137fec" stopOpacity="0.2" />
                    <stop offset="1" stopColor="#137fec" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-between text-[#617589] dark:text-gray-400 text-[11px] font-bold mt-2">
                <span>1</span><span>7</span><span>14</span><span>21</span><span>28</span><span>31</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Sabores Mais Vendidos */}
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-[#111418] dark:text-white text-lg font-bold">Sabores Mais Vendidos</h3>
          <Card className="flex items-center gap-6 p-4 border-[#dbe0e6]">
            <div className="relative size-24 shrink-0">
              <svg className="size-full transform -rotate-90" viewBox="0 0 36 36">
                <circle className="stroke-gray-100 dark:stroke-gray-800" cx="18" cy="18" fill="none" r="16" strokeWidth="4" />
                <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="45, 100" strokeWidth="4" />
                <circle className="stroke-blue-300" cx="18" cy="18" fill="none" r="16" strokeDasharray="25, 100" strokeDashoffset="-45" strokeWidth="4" />
                <circle className="stroke-blue-200" cx="18" cy="18" fill="none" r="16" strokeDasharray="30, 100" strokeDashoffset="-70" strokeWidth="4" />
              </svg>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              {[
                { label: 'Calabresa', pct: '45%', color: 'bg-primary' },
                { label: 'Margherita', pct: '25%', color: 'bg-blue-300' },
                { label: 'Portuguesa', pct: '30%', color: 'bg-blue-200' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className={`size-2 rounded-full ${item.color}`}></span>
                    <span className="text-[#617589] dark:text-gray-400 font-medium">{item.label}</span>
                  </div>
                  <span className="font-bold text-[#111418] dark:text-white">{item.pct}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Navegação Inferior Administrativa */}
        <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 flex justify-around p-3 z-50">
          <button className="flex flex-col items-center gap-1 text-primary-blue">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span className="text-[10px] font-bold">Dashboard</span>
          </button>
          <button onClick={() => navigate('/admin/lancamento')} className="flex flex-col items-center gap-1 text-[#617589]">
            <span className="material-symbols-outlined">restaurant_menu</span>
            <span className="text-[10px] font-medium">Pedidos</span>
          </button>
          <button onClick={() => navigate('/admin/configuracoes')} className="flex flex-col items-center gap-1 text-[#617589]">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-medium">Ajustes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardDesempenho;
