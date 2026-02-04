import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';

/**
 * Tela de Perfil e Dados de Pagamento
 * Baseada no arquivo code.html original.
 */
const Perfil: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#121617] dark:text-white transition-colors duration-300 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto overflow-x-hidden pb-20 bg-white dark:bg-background-dark shadow-xl">

        {/* Barra Superior App */}
        <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-50">
          <button
            onClick={() => navigate('/home')}
            className="text-primary-admin flex size-12 shrink-0 items-center justify-center cursor-pointer active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h2 className="text-[#121617] dark:text-white text-lg font-bold flex-1 text-center">Perfil</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex items-center justify-center rounded-lg h-12 bg-transparent text-primary-admin active:scale-90 transition-transform">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>

        {/* Cabeçalho do Perfil */}
        <div className="flex p-4 bg-white dark:bg-background-dark mb-2">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-28 w-28 ring-4 ring-primary-admin/10"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbQtSz0YhxAcSt2xaXojvODjMKuxW3vv_-47jWFlenCYbGAp8Cq9eAH1H3UJtp1xLL9gSrJkBguEEEjNT_Wa5wfQy76gTKHZ0wCXk2wofBU8CCdorSEaFuXhJpFXhcaJPmbkjRkoRPYrX2mZZcwcJd_sfwhuyC5SFQ6wlyGon_yxW6_LSNthPvJtlhcEM_S9k_menj-cXlyeafhUiIleceeCc2xEvlSy1UYMQEDdkoajm9YtIeW0DEthRWSpWF3iXxntAyFKIM8Xc")' }}
              ></div>
              <div className="absolute bottom-1 right-1 bg-primary-admin text-white rounded-full p-1.5 shadow-lg border-2 border-white dark:border-background-dark cursor-pointer">
                <span className="material-symbols-outlined text-sm">edit</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#121617] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Carlos Oliveira</p>
              <p className="text-[#678183] dark:text-gray-400 text-sm font-normal leading-normal text-center">carlos.oliveira@email.com</p>
              <div className="mt-2 px-3 py-1 bg-primary-admin/10 rounded-full">
                <p className="text-primary-admin text-xs font-bold leading-normal text-center uppercase tracking-wider">Membro Gold • Desde 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção: Endereços */}
        <div className="flex items-center justify-between px-4 pt-6 pb-2">
          <h3 className="text-[#121617] dark:text-white text-lg font-bold leading-tight">Endereços Salvos</h3>
          <button className="text-primary-admin text-sm font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">add_location_alt</span>
            Novo
          </button>
        </div>

        {/* Lista de Endereços */}
        <div className="flex flex-col gap-4 p-4">
          {/* Card Casa */}
          <Card className="flex items-stretch justify-between gap-4 p-4">
            <div className="flex flex-[2_2_0px] flex-col justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-admin text-xl">home</span>
                  <p className="text-[#121617] dark:text-white text-base font-bold leading-tight">Casa</p>
                </div>
                <p className="text-[#678183] dark:text-gray-400 text-sm font-normal leading-normal">Rua das Flores, 123 - Centro, São Paulo</p>
              </div>
              <button className="flex min-w-[84px] items-center justify-center rounded-lg h-9 px-4 bg-background-light dark:bg-slate-700 text-primary-admin gap-1 text-sm font-bold transition-colors">
                <span className="material-symbols-outlined text-lg">edit</span>
                <span>Editar</span>
              </button>
            </div>
            <div
              className="w-32 h-auto bg-center bg-no-repeat bg-cover rounded-lg hidden sm:block"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANdEE79i9OallPomsE834tNGxID6tiqezZm7SAL_NwMrQHwGehxRbBc4T5LFthDNHZ2hSu1EcKTVF8ICiFjY7I7vugUUGahG8s4-eDTx9ZZ_bc-suugqIx1g7HLqbSejqdlXPCNXDna9NB2fxRT6_gCas4cLvYSjNq3-uO5HUi0AhYT0f5i2klmu9xM7Ga0rFJ7RXewyZCtVF9V06LeOm_pZU6OUwvEkHtxvFBgwCzielWsFzjMhnF2x1kAhINRNPZtEIdigCraXQ")' }}
            ></div>
          </Card>
        </div>

        {/* Seção: Pagamento */}
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-[#121617] dark:text-white text-lg font-bold leading-tight">Cartões Salvos</h3>
        </div>

        {/* Carrossel de Cartões */}
        <div className="flex overflow-x-auto gap-4 px-4 pb-4 hide-scrollbar">
          {/* Card 1 - VISA */}
          <div className="min-w-[280px] h-44 rounded-2xl bg-gradient-to-br from-primary-admin to-[#134e54] p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-3xl">contactless</span>
              <div className="flex gap-1 font-bold italic text-lg tracking-tighter">VISA</div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs opacity-70 uppercase tracking-widest">Número do cartão</p>
              <p className="text-xl font-medium tracking-[0.2em]">•••• •••• •••• 4589</p>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <p className="text-[10px] opacity-70 uppercase">Validade</p>
                <p className="text-sm font-bold">12/28</p>
              </div>
              <p className="text-sm font-bold tracking-wider uppercase">Carlos Oliveira</p>
            </div>
          </div>

          {/* Adicionar Novo Cartão */}
          <div className="min-w-[140px] h-44 rounded-2xl border-2 border-dashed border-primary-admin/30 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary-admin/5 transition-colors">
            <div className="bg-primary-admin/10 p-3 rounded-full text-primary-admin">
              <span className="material-symbols-outlined">add</span>
            </div>
            <p className="text-xs font-bold text-primary-admin">Novo Cartão</p>
          </div>
        </div>

        {/* Menu de Opções */}
        <div className="flex flex-col mt-4 border-t border-gray-100 dark:border-slate-800">
          <div onClick={() => navigate('/pedidos')} className="flex items-center justify-between p-4 bg-white dark:bg-background-dark border-b border-gray-50 dark:border-slate-800 cursor-pointer active:bg-gray-50 dark:active:bg-slate-800 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">history</span>
              </div>
              <div>
                <p className="text-base font-bold text-[#121617] dark:text-white leading-tight">Histórico de Pedidos</p>
                <p className="text-xs text-[#678183] dark:text-gray-400">Ver suas 12 pizzas anteriores</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-sm">arrow_forward_ios</span>
          </div>

          <div className="flex items-center justify-center p-6 bg-white dark:bg-background-dark">
            <button className="flex items-center gap-2 text-red-500 font-bold text-sm px-8 py-3 rounded-full border border-red-100 dark:border-red-900/30 w-full justify-center active:scale-95 transition-transform">
              <span className="material-symbols-outlined">logout</span>
              Sair da Conta
            </button>
          </div>
        </div>

        {/* Navegação Inferior (Estilo iOS) */}
        <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-200 dark:border-slate-800 h-20 px-8 flex items-center justify-between z-50">
          <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">local_pizza</span>
            <span className="text-[10px] font-bold">Menu</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary-admin">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            <span className="text-[10px] font-bold">Perfil</span>
          </button>
          <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-gray-400 relative">
            <span className="material-symbols-outlined">shopping_basket</span>
            <span className="text-[10px] font-bold">Carrinho</span>
            <div className="absolute -top-1 -right-1 bg-primary text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white dark:border-background-dark">2</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
