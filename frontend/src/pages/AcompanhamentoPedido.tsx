import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import { api } from '../lib/api';

const statusSteps = [
  { key: 'pending', label: 'Pedido Recebido' },
  { key: 'preparing', label: 'Preparando' },
  { key: 'on_route', label: 'Saiu para entrega' },
  { key: 'delivered', label: 'Entregue' },
];

const AcompanhamentoPedido: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<string>('pending');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const orderId = searchParams.get('order') || localStorage.getItem('last_order_id') || '';

  useEffect(() => {
    if (!orderId) {
      setError('Nenhum pedido informado para acompanhamento.');
      setLoading(false);
      return;
    }

    let active = true;

    const load = async () => {
      try {
        const tracking = await api.getOrderStatus(orderId);
        if (active) {
          setStatus(tracking.status);
          setError(null);
        }
      } catch (err) {
        if (active) {
          console.error(err);
          setError('Não foi possível buscar o status deste pedido.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    load();
    const timer = window.setInterval(load, 10000);

    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [orderId]);

  const currentStepIndex = useMemo(() => {
    const index = statusSteps.findIndex((step) => step.key === status);
    return index >= 0 ? index : 0;
  }, [status]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#171311] dark:text-white min-h-screen font-display">
      <div className="max-w-[480px] mx-auto p-4">
        <div className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4 justify-between">
          <button
            onClick={() => navigate('/home')}
            className="text-[#171311] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#171311] dark:text-white text-lg font-bold flex-1 text-center">Pedido #{orderId.slice(0, 8)}</h2>
          <div className="size-10" />
        </div>

        <div className="p-2 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-[#171311] dark:text-white">Acompanhe seu pedido</h1>
          <p className="text-[#876b64] dark:text-stone-400 text-base">Atualização automática a cada 10 segundos.</p>
        </div>

        {loading ? <p className="text-sm text-gray-500 px-2">Carregando status...</p> : null}
        {error ? <p className="text-sm text-red-500 px-2">{error}</p> : null}

        <div className="px-2 py-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#876b64] mb-6">Etapas do Pedido</h3>
          <div className="space-y-3">
            {statusSteps.map((step, index) => {
              const done = index <= currentStepIndex;
              return (
                <div key={step.key} className="flex items-center gap-3">
                  <div className={`size-7 rounded-full flex items-center justify-center ${done ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                    <span className="material-symbols-outlined text-[18px]">{done ? 'check' : 'radio_button_unchecked'}</span>
                  </div>
                  <p className={`${done ? 'text-[#171311] dark:text-white font-bold' : 'text-gray-500'}`}>{step.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-6 px-2">
          <Button className="w-full" onClick={() => navigate('/pedidos')}>
            Ver meus pedidos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AcompanhamentoPedido;
