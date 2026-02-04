import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';

/**
 * Tela de Histórico de Pedidos (Meus Pedidos)
 * Baseada no arquivo code.html original.
 */
const MeusPedidos: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#101816] dark:text-[#fbfaf9] min-h-screen">
      {/* Cabeçalho de Navegação */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button
            onClick={() => navigate('/home')}
            className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-90"
          >
            <span className="material-symbols-outlined text-[#101816] dark:text-white">arrow_back_ios_new</span>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Meus Pedidos</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-24">
        {/* Abas */}
        <div className="px-4 mt-2">
          <div className="flex border-b border-gray-200 dark:border-gray-800 gap-8">
            <button className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-4 transition-all">
              <p className="text-sm font-bold tracking-wide">Histórico</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-400 dark:text-gray-500 pb-3 pt-4 hover:text-gray-600 transition-all">
              <p className="text-sm font-bold tracking-wide">Em andamento</p>
            </button>
          </div>
        </div>

        {/* Lista de Pedidos */}
        <div className="flex flex-col gap-4 p-4 mt-2">
          {/* Card de Pedido 1 */}
          <Card className="flex flex-col gap-4 p-5">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary"></span>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider">Entregue</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Hoje, 19:30 • #8842</p>
              </div>
              <p className="text-lg font-bold text-[#101816] dark:text-white">R$ 84,90</p>
            </div>
            <div className="flex gap-4 items-center">
              <div
                className="size-16 shrink-0 bg-center bg-no-repeat bg-cover rounded-lg"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC83U1XbuNCBbMxayT8hVXwLQBzyHrgWIzM79ymsY9JVoes0hHXgyd4w5gqbbFqmPGApuYpbMFl7-0kZjH9LjVAdivsDlXt0M6hjZlkayP9VhNsqQ0jxsAOV_DKZ4wOegkjUqZ_qWp8zAuw5UVNSYtqsCcAhtgYka9hLUCm5z_-M6K1lxbF9Xgz41zdzuqAA25QC1mtJNYHIvqJEbT8_lmvHea0Xq4W8pTujlK90MPIPPHefePZWTUQhtEZoSds-iwTvr1-26iavgc")' }}
              ></div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <p className="text-sm font-medium text-[#101816] dark:text-gray-200 truncate">1x Pizza Calabresa G, 1x Coca-Cola 2L</p>
                <button className="text-xs font-semibold text-primary mt-1 text-left">Ver detalhes do pedido</button>
              </div>
            </div>
            <div className="flex gap-2 pt-2 border-t border-gray-50 dark:border-gray-700/50">
              <button className="flex-1 flex h-11 items-center justify-center rounded-lg bg-primary text-white gap-2 text-sm font-bold active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[20px]">reorder</span>
                Pedir Novamente
              </button>
            </div>
          </Card>

          {/* Card de Pedido 2 */}
          <Card className="flex flex-col gap-4 p-5">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-primary"></span>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider">Entregue</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">12 Out 2023 • #8721</p>
              </div>
              <p className="text-lg font-bold text-[#101816] dark:text-white">R$ 112,00</p>
            </div>
            <div className="flex gap-4 items-center">
              <div
                className="size-16 shrink-0 bg-center bg-no-repeat bg-cover rounded-lg"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCs-WIlSOeWCcDuKWIlJ2DzzFPIKpG8q1DvYFmVcU_gQw8Uwf5sKwA_O825uCuah1w4t0BPjqIVQgO5-QctsImoaF0X_meLfZ3F3jMu9IzkA4Z8lghBCMKfWLmAx4wekmYeN4nyFsOGF2SG_Nn9G-IVj4IhaDRkd2CEnMt-_smh67Wy_vKRkwo55GOV6UgH8UScMrsrdI3D5DisBljKUt_lxFMBUaxu-jmmfpqiAT3QKfY080XJOr0bapM8Xiz584Hgmdd65olqMow")' }}
              ></div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <p className="text-sm font-medium text-[#101816] dark:text-gray-200 truncate">2x Pizza Margherita, 1x Guaraná 1.5L</p>
                <button className="text-xs font-semibold text-primary mt-1 text-left">Ver detalhes do pedido</button>
              </div>
            </div>
            <div className="flex gap-2 pt-2 border-t border-gray-50 dark:border-gray-700/50">
              <button className="flex-1 flex h-11 items-center justify-center rounded-lg bg-primary/10 text-primary gap-2 text-sm font-bold active:scale-95 transition-transform dark:bg-primary/20">
                <span className="material-symbols-outlined text-[20px]">reorder</span>
                Pedir Novamente
              </button>
            </div>
          </Card>
        </div>

        {/* Incentivo Fidelidade */}
        <div className="px-4 mt-4">
          <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center gap-4">
            <div className="bg-primary text-white size-12 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">card_giftcard</span>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-[#101816] dark:text-white">Falta pouco!</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Peça mais 2 vezes para ganhar um cupom de 20% OFF.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Navegação Inferior (Estilo iOS) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#1a1c22]/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 pb-6 pt-2">
        <div className="max-w-md mx-auto flex justify-around items-center px-4">
          <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium">Início</span>
          </button>
          <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">search</span>
            <span className="text-[10px] font-medium">Cardápio</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="text-[10px] font-bold">Pedidos</span>
          </button>
          <button onClick={() => navigate('/perfil')} className="flex flex-col items-center gap-1 text-gray-400">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-medium">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MeusPedidos;
