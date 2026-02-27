import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { api } from '../lib/api';
import type { OrderItemPayload, OrderQuote } from '../lib/api';
import { clearCart, getCart } from '../lib/cart';

const FinalizacaoPedido: React.FC = () => {
  const navigate = useNavigate();
  const [cupom, setCupom] = useState('');
  const [bairro, setBairro] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState<'delivery' | 'pickup'>('delivery');
  const [metodoPagamento, setMetodoPagamento] = useState<'pix' | 'card_on_delivery'>('pix');
  const [quote, setQuote] = useState<OrderQuote | null>(null);
  const [loading, setLoading] = useState(false);

  const cart = useMemo(() => getCart(), []);

  const itensPayload = useMemo<OrderItemPayload[]>(
    () =>
      cart.map((item) => ({
        produto_id: item.produto_id,
        quantidade: item.quantidade,
        observacoes: item.observacoes,
      })),
    [cart],
  );

  useEffect(() => {
    if (!itensPayload.length) return;

    api
      .quoteOrder({
        itens: itensPayload,
        tipo_entrega: tipoEntrega,
        cupom_codigo: cupom || undefined,
        bairro_entrega: bairro || undefined,
      })
      .then(setQuote)
      .catch(console.error);
  }, [itensPayload, tipoEntrega, cupom, bairro]);

  const handleCreateOrder = async () => {
    if (!itensPayload.length) return;

    try {
      setLoading(true);
      const userId = localStorage.getItem('user_id') ?? undefined;
      const order = await api.createOrder({
        itens: itensPayload,
        metodo_pagamento: metodoPagamento,
        tipo_entrega: tipoEntrega,
        cupom_codigo: cupom || undefined,
        bairro_entrega: bairro || undefined,
        usuario_id: userId,
      });
      clearCart();
      navigate(`/acompanhamento?order=${order.pedido_id}`);
    } catch (error) {
      console.error(error);
      alert('Não foi possível finalizar o pedido.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 pb-28">
      <h1 className="text-2xl font-bold mb-4">Finalizar Pedido</h1>

      {cart.length === 0 ? <p>Carrinho vazio. Volte ao cardápio.</p> : null}

      <div className="space-y-2 mb-4">
        {cart.map((item, index) => (
          <div key={`${item.produto_id}-${index}`} className="border rounded-lg p-3 flex justify-between">
            <div>
              <p className="font-semibold">{item.quantidade}x {item.nome}</p>
              {item.variacao ? <p className="text-xs text-gray-500">Tamanho: {item.variacao}</p> : null}
              {item.adicionais?.length ? <p className="text-xs text-gray-500">Add: {item.adicionais.join(', ')}</p> : null}
            </div>
            <p>R$ {(item.preco_unitario * item.quantidade).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3 mb-4">
        <input className="w-full border rounded-lg p-3" placeholder="Cupom" value={cupom} onChange={(e) => setCupom(e.target.value.toUpperCase())} />
        <input className="w-full border rounded-lg p-3" placeholder="Bairro de entrega" value={bairro} onChange={(e) => setBairro(e.target.value)} />

        <select className="w-full border rounded-lg p-3" value={tipoEntrega} onChange={(e) => setTipoEntrega(e.target.value as 'delivery' | 'pickup')}>
          <option value="delivery">Delivery</option>
          <option value="pickup">Retirada</option>
        </select>

        <select className="w-full border rounded-lg p-3" value={metodoPagamento} onChange={(e) => setMetodoPagamento(e.target.value as 'pix' | 'card_on_delivery')}>
          <option value="pix">PIX</option>
          <option value="card_on_delivery">Cartão na entrega</option>
        </select>
      </div>

      <div className="border rounded-lg p-3 space-y-1">
        <p>Subtotal: R$ {quote?.total_produtos.toFixed(2) ?? '0.00'}</p>
        <p>Taxa: R$ {quote?.taxa_entrega.toFixed(2) ?? '0.00'}</p>
        <p>Desconto: R$ {quote?.desconto_aplicado.toFixed(2) ?? '0.00'}</p>
        <p className="font-bold">Total: R$ {quote?.total_geral.toFixed(2) ?? '0.00'}</p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t max-w-md mx-auto">
        <Button className="w-full" onClick={handleCreateOrder} isLoading={loading}>
          Confirmar Pedido
        </Button>
      </div>
    </div>
  );
};

export default FinalizacaoPedido;
