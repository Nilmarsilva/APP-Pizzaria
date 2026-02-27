import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import { api } from '../lib/api';
import type { OrderSummary } from '../lib/api';

const statusLabel: Record<string, string> = {
  pending: 'Pendente',
  preparing: 'Preparando',
  on_route: 'Em rota',
  delivered: 'Entregue',
  cancelled: 'Cancelado',
};

const MeusPedidos: React.FC = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<OrderSummary[]>([]);
  const [tab, setTab] = useState<'historico' | 'andamento'>('historico');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (!userId) return;

    setLoading(true);
    api
      .listUserOrders(userId)
      .then((response) => setOrders(response.reverse()))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredOrders = useMemo(() => {
    if (tab === 'historico') {
      return orders.filter((order) => ['delivered', 'cancelled'].includes(order.status));
    }
    return orders.filter((order) => !['delivered', 'cancelled'].includes(order.status));
  }, [orders, tab]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#101816] dark:text-[#fbfaf9] min-h-screen">
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
        <div className="px-4 mt-2">
          <div className="flex border-b border-gray-200 dark:border-gray-800 gap-8">
            <button
              className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-4 transition-all ${tab === 'historico' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}
              onClick={() => setTab('historico')}
            >
              <p className="text-sm font-bold tracking-wide">Histórico</p>
            </button>
            <button
              className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-4 transition-all ${tab === 'andamento' ? 'border-primary text-primary' : 'border-transparent text-gray-400'}`}
              onClick={() => setTab('andamento')}
            >
              <p className="text-sm font-bold tracking-wide">Em andamento</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 mt-2">
          {loading ? <p className="text-sm text-gray-500">Carregando pedidos...</p> : null}
          {!loading && filteredOrders.length === 0 ? (
            <Card className="p-4">
              <p className="text-sm text-gray-500">Nenhum pedido nesta aba.</p>
            </Card>
          ) : null}

          {filteredOrders.map((order) => (
            <Card key={order.pedido_id} className="flex flex-col gap-4 p-5">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary"></span>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wider">{statusLabel[order.status] ?? order.status}</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Pedido #{order.pedido_id.slice(0, 8)}</p>
                </div>
                <p className="text-lg font-bold text-[#101816] dark:text-white">R$ {order.total_geral.toFixed(2)}</p>
              </div>

              <div className="flex gap-2 pt-2 border-t border-gray-50 dark:border-gray-700/50">
                <button
                  className="flex-1 flex h-11 items-center justify-center rounded-lg bg-primary/10 text-primary gap-2 text-sm font-bold active:scale-95 transition-transform"
                  onClick={() => navigate(`/acompanhamento?order=${order.pedido_id}`)}
                >
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                  Ver andamento
                </button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MeusPedidos;
