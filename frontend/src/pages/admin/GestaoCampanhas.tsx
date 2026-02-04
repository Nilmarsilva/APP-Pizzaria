import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

/**
 * Tela de Gestão de Campanhas Push - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const GestaoCampanhas: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#121717] dark:text-white min-h-screen font-display">
      <div className="max-w-[480px] mx-auto bg-white dark:bg-gray-900 min-h-screen flex flex-col relative shadow-xl overflow-x-hidden">

        {/* Barra Superior App */}
        <div className="flex items-center bg-white dark:bg-gray-900 p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
          <button
            onClick={() => navigate(-1)}
            className="text-[#121717] dark:text-white flex size-12 shrink-0 items-center justify-start active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-[#121717] dark:text-white text-lg font-bold flex-1 text-center">Gestão de Campanhas</h2>
          <div className="flex w-12 items-center justify-end text-primary-admin">
            <span className="material-symbols-outlined">history</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-32">
          {/* Conteúdo da Notificação */}
          <div className="px-4 pt-6">
            <h3 className="text-lg font-bold">Conteúdo da Notificação</h3>
          </div>

          <div className="p-4 space-y-4">
            <Input
              label="Título"
              placeholder="Ex: 🍕 Pizza em Dobro hoje!"
              defaultValue="🍕 Pizza em Dobro hoje!"
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-[#121717] dark:text-gray-300 text-sm font-medium ml-1">Corpo da Mensagem</label>
              <textarea
                className="w-full rounded-xl border border-[#dce5e5] dark:border-gray-700 bg-white dark:bg-gray-800 p-4 min-h-24 outline-none focus:ring-2 focus:ring-primary-admin transition-all"
                placeholder="Aproveite nossa promoção..."
                defaultValue="Aproveite nossa promoção especial de quarta-feira. Compre uma grande e ganhe uma brotinho doce!"
              ></textarea>
            </div>
          </div>

          {/* Público-alvo */}
          <div className="px-4 pt-4">
            <h3 className="text-lg font-bold">Público-alvo</h3>
          </div>
          <div className="flex flex-wrap gap-2 px-4 py-3">
            <button className="px-4 py-2 rounded-full bg-primary-admin text-white text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">group</span>
              Todos
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">person_off</span>
              Inativos (15 dias)
            </button>
          </div>

          {/* Preview da Notificação (Estilo iOS) */}
          <div className="px-4 py-6">
            <p className="text-sm font-medium pb-3 opacity-80">Preview no Celular</p>
            <div className="bg-gray-200 dark:bg-black p-6 rounded-3xl relative overflow-hidden aspect-[4/3] flex flex-col items-center">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-60"></div>
              <div className="relative z-10 w-full max-w-[280px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-3 shadow-lg flex flex-col gap-1 mt-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-primary-admin rounded flex items-center justify-center text-white text-[10px] font-bold">Pz</div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Pizzaria App</span>
                  </div>
                  <span className="text-[10px] text-gray-500">agora</span>
                </div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">🍕 Pizza em Dobro hoje!</p>
                <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2 leading-snug">Aproveite nossa promoção especial de quarta-feira. Compre uma grande e ganhe uma brotinho doce!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Disparo Fixo */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-50">
          <Button variant="admin" className="w-full py-4 flex items-center justify-center gap-2 shadow-lg" onClick={() => {}}>
            <span className="material-symbols-outlined">send</span>
            Disparar Campanha
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GestaoCampanhas;
