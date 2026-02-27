import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { api, type UserProfile } from '../../lib/api';

const LancamentoPedidos: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [clientes, setClientes] = useState<UserProfile[]>([]);
  const [loadingClientes, setLoadingClientes] = useState(false);
  const [erroClientes, setErroClientes] = useState<string | null>(null);
  const [clienteSelecionado, setClienteSelecionado] = useState<UserProfile | null>(null);

  useEffect(() => {
    const term = query.trim();
    if (term.length < 2) {
      setClientes([]);
      setErroClientes(null);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setLoadingClientes(true);
        setErroClientes(null);
        const resultado = await api.searchAdminUsers(term);
        setClientes(resultado);
      } catch (error) {
        setErroClientes(error instanceof Error ? error.message : 'Falha ao buscar clientes');
      } finally {
        setLoadingClientes(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#181111] dark:text-white min-h-screen flex flex-col font-display">
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
          <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-primary">person_add</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 border-r border-gray-200 dark:border-gray-800">
            <div className="w-full space-y-2">
              <div className="flex w-full h-12 items-stretch rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="text-gray-400 flex bg-white dark:bg-gray-800 items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="flex w-full min-w-0 flex-1 border-none bg-white dark:bg-gray-800 text-[#181111] dark:text-white focus:outline-0 focus:ring-0 h-full placeholder:text-gray-400 px-4 pl-2 text-base"
                  placeholder="Buscar cliente por telefone ou nome"
                />
              </div>

              {loadingClientes && <p className="text-xs text-gray-500">Buscando clientes...</p>}
              {erroClientes && <p className="text-xs text-red-600">{erroClientes}</p>}

              {clientes.length > 0 && (
                <Card className="p-2 border-gray-100 space-y-1">
                  {clientes.map((cliente) => (
                    <button
                      key={cliente.id}
                      onClick={() => setClienteSelecionado(cliente)}
                      className="w-full text-left rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <p className="text-sm font-semibold">{cliente.nome}</p>
                      <p className="text-xs text-gray-500">{cliente.whatsapp}</p>
                    </button>
                  ))}
                </Card>
              )}

              {clienteSelecionado && (
                <Card className="p-3 border-primary/30 bg-primary/5">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Cliente selecionado</p>
                  <p className="text-sm font-bold">{clienteSelecionado.nome}</p>
                  <p className="text-xs text-gray-600">{clienteSelecionado.whatsapp}</p>
                </Card>
              )}
            </div>

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

            <Card className="p-4 border-gray-100">
              <h3 className="text-sm font-bold mb-2">Observações</h3>
              <textarea
                className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-sm focus:ring-primary focus:border-primary h-20 outline-none"
                placeholder="Ex: Pizza de Calabresa sem cebola..."
              />
            </Card>
          </div>

          <div className="w-full md:w-80 bg-white dark:bg-gray-900 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 flex flex-col">
            <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">shopping_basket</span>
                Carrinho
              </h3>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full uppercase tracking-tighter">0 Itens</span>
            </div>

            <div className="flex-1 p-4">
              <p className="text-sm text-gray-500">Selecione produtos para montar o pedido de balcão.</p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 space-y-2">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Subtotal</span>
                <span className="text-[#181111] dark:text-white">R$ 0,00</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                <span className="font-bold">Total</span>
                <span className="text-xl font-bold text-primary">R$ 0,00</span>
              </div>
            </div>

            <div className="p-4">
              <Button className="w-full py-4 flex items-center justify-center gap-2 text-lg" onClick={() => {}}>
                <span className="material-symbols-outlined">check_circle</span>
                Finalizar Pedido
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LancamentoPedidos;
