import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';

/**
 * Tela de Configurações Gerais da Loja - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const ConfiguracoesGerais: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">

        {/* Barra Superior App */}
        <div className="flex items-center bg-white dark:bg-[#25282c] p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
          <button
            onClick={() => navigate(-1)}
            className="text-[#121717] dark:text-white flex size-12 shrink-0 items-center justify-center active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <h2 className="text-[#121717] dark:text-white text-lg font-bold leading-tight flex-1">Configurações da Loja</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="text-primary-admin text-base font-bold leading-normal active:scale-95 transition-transform">Salvar</button>
          </div>
        </div>

        {/* Painel de Status em Tempo Real */}
        <div className="p-4">
          <Card className="flex flex-col items-start justify-between gap-4 p-5 shadow-sm border-[#dce4e4]">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-admin">store</span>
                <p className="text-[#121717] dark:text-white text-base font-bold leading-tight">Status da Loja</p>
              </div>
              <p className="text-[#668285] dark:text-gray-400 text-sm font-normal leading-normal">Controle o funcionamento em tempo real para pedidos online.</p>
            </div>
            <div className="flex items-center gap-3 w-full justify-between mt-2 pt-2 border-t border-gray-50 dark:border-gray-800">
              <span className="text-sm font-semibold text-primary-admin">Aberta Agora</span>
              <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#f1f4f4] dark:bg-gray-800 p-0.5 transition-all">
                <input checked className="invisible absolute peer" type="checkbox" readOnly />
                <div className="h-full w-[27px] rounded-full bg-white shadow-md peer-checked:translate-x-[20px] transition-transform"></div>
                <div className="absolute inset-0 rounded-full peer-checked:bg-primary-admin -z-10 transition-colors"></div>
              </label>
            </div>
          </Card>
        </div>

        {/* Botões Segmentados */}
        <div className="flex px-4 py-2">
          <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#f1f4f4] dark:bg-gray-800 p-1">
            <button className="flex-1 h-full rounded-lg bg-white dark:bg-gray-700 shadow-sm text-[#121717] dark:text-white text-sm font-semibold">
              Horários
            </button>
            <button className="flex-1 h-full rounded-lg text-[#668285] text-sm font-semibold">
              Logística
            </button>
          </div>
        </div>

        {/* Seção: Horários de Funcionamento */}
        <div className="px-4 pt-6 pb-2 flex items-center justify-between">
          <h3 className="text-[#121717] dark:text-white text-lg font-bold">Horários da Semana</h3>
          <span className="material-symbols-outlined text-primary-admin text-xl">calendar_month</span>
        </div>

        <div className="bg-white dark:bg-[#25282c] border-y border-[#dce4e4] dark:border-gray-800">
          {/* Item Segunda */}
          <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between border-b border-gray-50 dark:border-gray-800">
            <div className="flex items-center gap-4">
              <input checked type="checkbox" className="h-5 w-5 rounded border-[#dce4e4] dark:border-gray-600 text-primary-admin focus:ring-0" readOnly />
              <div>
                <p className="text-[#121717] dark:text-white text-base font-semibold">Segunda-feira</p>
                <p className="text-primary-admin text-sm font-medium">18:00 - 23:30</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-lg cursor-pointer">edit</span>
          </div>
          {/* Item Terça */}
          <div className="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between border-b border-gray-50 dark:border-gray-800">
            <div className="flex items-center gap-4">
              <input checked type="checkbox" className="h-5 w-5 rounded border-[#dce4e4] dark:border-gray-600 text-primary-admin focus:ring-0" readOnly />
              <div>
                <p className="text-[#121717] dark:text-white text-base font-semibold">Terça-feira</p>
                <p className="text-primary-admin text-sm font-medium">18:00 - 23:30</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-lg cursor-pointer">edit</span>
          </div>
        </div>

        {/* Seção: Logística */}
        <div className="p-4 grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-[#25282c] p-4 rounded-xl border border-[#dce4e4] dark:border-gray-700 shadow-sm">
            <p className="text-[#668285] dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Pedido Mínimo</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[#121717] dark:text-white text-lg font-bold">R$ 35,00</span>
              <span className="material-symbols-outlined text-primary-admin text-sm cursor-pointer">edit</span>
            </div>
          </div>
          <div className="bg-white dark:bg-[#25282c] p-4 rounded-xl border border-[#dce4e4] dark:border-gray-700 shadow-sm">
            <p className="text-[#668285] dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Tempo Médio</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[#121717] dark:text-white text-lg font-bold">45 min</span>
              <span className="material-symbols-outlined text-primary-admin text-sm cursor-pointer">edit</span>
            </div>
          </div>
        </div>

        {/* Footer Padding e Nav */}
        <div className="h-24"></div>

        {/* Barra de Navegação Flutuante Administrativa */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white/80 dark:bg-[#1c1e22]/80 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 px-6 py-4 flex justify-around items-center z-50">
          <button onClick={() => navigate('/admin/lancamento')} className="flex flex-col items-center gap-1 text-[#668285]">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-[10px] font-bold uppercase">Painel</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary-admin">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-bold uppercase">Config</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#668285]">
            <span className="material-symbols-outlined">restaurant_menu</span>
            <span className="text-[10px] font-bold uppercase">Cardápio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracoesGerais;
