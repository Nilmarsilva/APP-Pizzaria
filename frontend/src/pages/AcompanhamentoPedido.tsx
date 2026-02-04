import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

/**
 * Tela de Acompanhamento de Pedido em Tempo Real
 * Baseada no arquivo code.html original.
 */
const AcompanhamentoPedido: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171311] dark:text-white min-h-screen font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto overflow-x-hidden shadow-2xl bg-white dark:bg-background-dark">

        {/* Barra Superior App */}
        <div className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-4 justify-between border-b border-[#e5dedc]/50 dark:border-white/10">
          <button
            onClick={() => navigate('/home')}
            className="text-[#171311] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#171311] dark:text-white text-lg font-bold flex-1 text-center">Pedido #4092</h2>
          <div className="size-10 flex items-center justify-center text-primary cursor-pointer">
            <span className="material-symbols-outlined">help</span>
          </div>
        </div>

        {/* Mensagem de Status */}
        <div className="p-6 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-[#171311] dark:text-white">A caminho!</h1>
          <p className="text-[#876b64] dark:text-stone-400 text-base">O Ricardo está trazendo sua pizza quentinha.</p>
        </div>

        {/* Mapa Simulado */}
        <div className="px-4 py-2">
          <div className="relative w-full aspect-[16/10] bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden shadow-sm border border-[#e5dedc] dark:border-white/5">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANdEE79i9OallPomsE834tNGxID6tiqezZm7SAL_NwMrQHwGehxRbBc4T5LFthDNHZ2hSu1EcKTVF8ICiFjY7I7vugUUGahG8s4-eDTx9ZZ_bc-suugqIx1g7HLqbSejqdlXPCNXDna9NB2fxRT6_gCas4cLvYSjNq3-uO5HUi0AhYT0f5i2klmu9xM7Ga0rFJ7RXewyZCtVF9V06LeOm_pZU6OUwvEkHtxvFBgwCzielWsFzjMhnF2x1kAhINRNPZtEIdigCraXQ')" }}
            ></div>
            {/* Marcador de Entrega Animado */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-8 h-8 bg-primary/30 rounded-full animate-ping"></div>
                <div className="z-10 bg-primary p-2 rounded-full shadow-lg text-white">
                  <span className="material-symbols-outlined text-sm">delivery_dining</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perfil do Entregador */}
        <div className="px-4 py-4">
          <div className="flex p-4 rounded-xl border border-[#e5dedc] dark:border-white/10 bg-white dark:bg-[#2a1d19] shadow-sm items-center gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-16 w-16 border-2 border-primary/20"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBilIi5xTJMQUu5C_mACjaW48gLhvshHBIkEL7MgjrqxtKt0U7eI0GGR7Vxgh46qoP41605H9xvM808HSBFv22KcCr0wBIwd7XFJCa3Mm1A8qBiLjGYzPq4VEtLg4L-JXEsEptDIbAU8EC2xy-eOkJ3ZIIdrpBi90FpqQgQdHFy5DERON8tz9lAh4aKSuXZnPB1nV8oKya4PXUE--c8hByBTnL3GetWdhwio41VMlDe3_o64zyEH5bOKvljDa7JgBZcyNBJ1cs0BCE')" }}
            ></div>
            <div className="flex flex-col flex-1">
              <p className="text-[#171311] dark:text-white text-lg font-bold leading-tight">Ricardo Silva</p>
              <div className="flex items-center gap-1 text-[#876b64] dark:text-stone-400 text-sm">
                <span className="material-symbols-outlined text-[16px] text-yellow-500 fill-current">star</span>
                <span>4.9 • Entregador parceiro</span>
              </div>
            </div>
            <button className="flex items-center justify-center rounded-full h-12 w-12 bg-green-500 text-white shadow-lg hover:bg-green-600 active:scale-90 transition-all">
              <span className="material-symbols-outlined">chat</span>
            </button>
          </div>
        </div>

        {/* Timeline do Pedido */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#876b64] mb-6">Etapas do Pedido</h3>
          <div className="grid grid-cols-[40px_1fr] gap-x-3">
            {/* Passo 1 - Concluído */}
            <div className="flex flex-col items-center">
              <div className="z-10 bg-primary text-white p-1 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">check</span>
              </div>
              <div className="w-[2px] bg-primary h-12"></div>
            </div>
            <div className="flex flex-col pb-6">
              <p className="text-[#171311] dark:text-white text-base font-bold">Pedido Recebido</p>
              <p className="text-[#876b64] dark:text-stone-400 text-sm">Confirmado às 19:00</p>
            </div>

            {/* Passo 2 - Concluído */}
            <div className="flex flex-col items-center">
              <div className="z-10 bg-primary text-white p-1 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">check</span>
              </div>
              <div className="w-[2px] bg-primary h-12"></div>
            </div>
            <div className="flex flex-col pb-6">
              <p className="text-[#171311] dark:text-white text-base font-bold">Em Preparo</p>
              <p className="text-[#876b64] dark:text-stone-400 text-sm">Iniciado às 19:15</p>
            </div>

            {/* Passo 3 - Ativo */}
            <div className="flex flex-col items-center">
              <div className="z-10 border-2 border-primary bg-background-light dark:bg-background-dark text-primary p-1 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(215,70,29,0.3)]">
                <span className="material-symbols-outlined text-[20px] animate-pulse">delivery_dining</span>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-primary text-base font-bold">Saiu para Entrega</p>
              <p className="text-[#876b64] dark:text-stone-400 text-sm font-medium">Previsão: 10-15 min</p>
            </div>
          </div>
        </div>

        {/* Painel de Ação de Rodapé */}
        <div className="p-4 mt-auto">
          <div className="flex flex-col gap-3 rounded-xl border border-[#e5dedc] dark:border-white/10 bg-white dark:bg-[#2a1d19] p-5 shadow-sm">
            <div className="flex flex-col gap-1">
              <p className="text-[#171311] dark:text-white text-base font-bold leading-tight">Cupom Fiscal</p>
              <p className="text-[#876b64] dark:text-stone-400 text-sm font-normal">Sua nota fiscal já está disponível para visualização.</p>
            </div>
            <Button
              className="h-10 text-sm py-0"
              onClick={() => {}}
            >
              Ver Cupom
            </Button>
          </div>
        </div>
        <div className="h-10"></div>
      </div>
    </div>
  );
};

export default AcompanhamentoPedido;
