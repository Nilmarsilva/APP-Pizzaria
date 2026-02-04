import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

/**
 * Tela de Lançamento de Pedidos (Balcão) - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const LancamentoPedidos: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#181111] dark:text-white min-h-screen flex flex-col font-display">
      {/* Cabeçalho Superior */}
      <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-outlined text-[#181111] dark:text-white">arrow_back</span>
            </button>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Novo Pedido</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-primary">person_add</span>
            </button>
            <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 active:scale-95 transition-transform">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">

          {/* Lado Esquerdo: Menu e Seleção */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 border-r border-gray-200 dark:border-gray-800">
            {/* Barra de Busca de Cliente */}
            <div className="w-full">
              <div className="flex w-full h-12 items-stretch rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="text-gray-400 flex bg-white dark:bg-gray-800 items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="flex w-full min-w-0 flex-1 border-none bg-white dark:bg-gray-800 text-[#181111] dark:text-white focus:outline-0 focus:ring-0 h-full placeholder:text-gray-400 px-4 pl-2 text-base"
                  placeholder="Buscar cliente por telefone ou nome"
                />
              </div>
            </div>

            {/* Tipos de Serviço (Segmented Buttons) */}
            <div className="flex w-full">
              <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 p-1">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 bg-white dark:bg-primary shadow-sm text-primary dark:text-white text-sm font-semibold transition-all">
                  <span>Local</span>
                  <input checked className="hidden" name="service-type" type="radio" value="Local" readOnly />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-gray-600 dark:text-gray-400 text-sm font-semibold transition-all">
                  <span>Retirada</span>
                  <input className="hidden" name="service-type" type="radio" value="Retirada" />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-gray-600 dark:text-gray-400 text-sm font-semibold transition-all">
                  <span>Entrega</span>
                  <input className="hidden" name="service-type" type="radio" value="Entrega" />
                </label>
              </div>
            </div>

            {/* Categorias */}
            <div className="flex items-center justify-between pt-2">
              <h3 className="text-lg font-bold">Categorias</h3>
              <button className="text-primary text-sm font-medium">Ver todas</button>
            </div>

            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 text-white shadow-md shadow-primary/20 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">star</span>
                <p className="text-sm font-semibold">Mais Vendidas</p>
              </div>
              {['Salgadas', 'Doces', 'Bebidas'].map((cat) => (
                <div key={cat} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 text-gray-700 dark:text-gray-300 cursor-pointer hover:border-primary transition-colors">
                  <p className="text-sm font-medium">{cat}</p>
                </div>
              ))}
            </div>

            {/* Grade de Produtos Rápidos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <Card className="p-4 flex flex-col gap-2 hover:border-primary border-transparent">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">Popular</span>
                  <span className="material-symbols-outlined text-gray-300">add_circle</span>
                </div>
                <p className="font-bold text-sm">Calabresa G</p>
                <p className="text-primary font-bold">R$ 45,90</p>
              </Card>
              <Card className="p-4 flex flex-col gap-2 hover:border-primary border-transparent">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-tighter">Top 1</span>
                  <span className="material-symbols-outlined text-gray-300">add_circle</span>
                </div>
                <p className="font-bold text-sm">Frango c/ Catupiry</p>
                <p className="text-primary font-bold">R$ 48,90</p>
              </Card>
              <Card className="p-4 flex flex-col gap-2 hover:border-primary border-transparent">
                <div className="flex justify-between items-start">
                  <span></span>
                  <span className="material-symbols-outlined text-gray-300">add_circle</span>
                </div>
                <p className="font-bold text-sm">Margherita G</p>
                <p className="text-primary font-bold">R$ 42,90</p>
              </Card>
            </div>

            {/* Observações da Cozinha */}
            <div className="pt-4">
              <h3 className="text-sm font-bold mb-2">Observações da Cozinha</h3>
              <textarea
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-sm focus:ring-primary focus:border-primary h-20 outline-none"
                placeholder="Ex: Pizza de Calabresa sem cebola..."
              ></textarea>
            </div>
          </div>

          {/* Lado Direito: Resumo do Carrinho */}
          <div className="w-full md:w-80 bg-white dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 flex flex-col max-h-[500px] md:max-h-full">
            <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">shopping_basket</span>
                Carrinho
              </h3>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full uppercase tracking-tighter">2 Itens</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Item no Carrinho 1 */}
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-sm">1x</div>
                  <div>
                    <p className="text-sm font-bold">Calabresa Grande</p>
                    <p className="text-xs text-gray-500">Sem cebola, borda recheada</p>
                    <p className="text-sm font-bold text-primary mt-1">R$ 45,90</p>
                  </div>
                </div>
                <button className="text-gray-400 active:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>
              {/* Item no Carrinho 2 */}
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-sm">1x</div>
                  <div>
                    <p className="text-sm font-bold">Coca-Cola 2L</p>
                    <p className="text-xs text-gray-500">Gelada</p>
                    <p className="text-sm font-bold text-primary mt-1">R$ 14,00</p>
                  </div>
                </div>
                <button className="text-gray-400 active:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </div>
            </div>

            {/* Totais do Lançamento */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 space-y-2">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Subtotal</span>
                <span className="text-[#181111] dark:text-white">R$ 59,90</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Taxa de Serviço</span>
                <span className="text-green-600 font-bold uppercase tracking-tighter text-xs">Isento</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                <span className="font-bold">Total</span>
                <span className="text-xl font-bold text-primary">R$ 59,90</span>
              </div>
            </div>

            <div className="p-4">
              <Button
                className="w-full py-4 flex items-center justify-center gap-2 text-lg"
                onClick={() => {}}
              >
                <span className="material-symbols-outlined">check_circle</span>
                Finalizar Pedido
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Navegação de Mobile (Administrativa) */}
      <nav className="md:hidden bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 p-2 flex justify-around items-center">
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">restaurant_menu</span>
          <span className="text-[10px] font-bold">Cardápio</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[10px] font-medium">Pedidos</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-medium">Clientes</span>
        </button>
        <button onClick={() => navigate('/perfil')} className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Ajustes</span>
        </button>
      </nav>
    </div>
  );
};

export default LancamentoPedidos;
