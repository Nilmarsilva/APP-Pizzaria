import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { api, type Coupon } from '../../lib/api';

const currency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const GestaoCupons: React.FC = () => {
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [onlyActive, setOnlyActive] = useState(false);

  const loadCoupons = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.listAdminCoupons();
      setCoupons(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao carregar cupons');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadCoupons();
  }, []);

  const filteredCoupons = useMemo(() => {
    return coupons.filter((coupon) => {
      const bySearch = coupon.codigo.toLowerCase().includes(search.toLowerCase());
      const byActive = !onlyActive || coupon.ativo;
      return bySearch && byActive;
    });
  }, [coupons, search, onlyActive]);

  const ativos = coupons.filter((c) => c.ativo).length;

  const handleToggle = async (coupon: Coupon) => {
    try {
      const updated = await api.updateAdminCoupon(coupon.codigo, {
        tipo: coupon.tipo === 'fixed' ? 'fixed' : 'percentage',
        valor: coupon.valor,
        minimo_pedido: coupon.minimo_pedido,
        ativo: !coupon.ativo,
      });
      setCoupons((prev) => prev.map((item) => (item.codigo === coupon.codigo ? updated : item)));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao atualizar cupom');
    }
  };

  const handleDelete = async (codigo: string) => {
    try {
      await api.deleteAdminCoupon(codigo);
      setCoupons((prev) => prev.filter((item) => item.codigo !== codigo));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao remover cupom');
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#121717] dark:text-white font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-admin flex items-center justify-center text-white">
            <span className="material-symbols-outlined">local_pizza</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight">Gestão de Cupons</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Pizzaria Admin</p>
          </div>
        </div>
        <button onClick={() => navigate('/admin/configuracoes')} className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">settings</span>
        </button>
      </header>

      <main className="pb-24">
        <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar">
          <Card className="min-w-[140px] flex-1 p-4 border-gray-100">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Ativos</p>
            <p className="text-2xl font-extrabold text-primary-admin">{ativos}</p>
          </Card>
          <Card className="min-w-[140px] flex-1 p-4 border-gray-100">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Total</p>
            <p className="text-2xl font-extrabold">{coupons.length}</p>
          </Card>
        </div>

        <div className="px-4 space-y-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full bg-white dark:bg-gray-800 border-none rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary-admin shadow-sm placeholder:text-gray-400 outline-none"
              placeholder="Buscar por código..."
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <button onClick={() => setOnlyActive(false)} className={`px-4 py-2 rounded-full text-xs font-bold ${!onlyActive ? 'bg-primary-admin text-white' : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700'}`}>Todos</button>
            <button onClick={() => setOnlyActive(true)} className={`px-4 py-2 rounded-full text-xs font-bold ${onlyActive ? 'bg-primary-admin text-white' : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700'}`}>Ativos</button>
            <button onClick={() => void loadCoupons()} className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 text-xs font-bold">Atualizar</button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {loading && <p className="text-sm text-gray-500">Carregando cupons...</p>}
          {error && <p className="text-sm text-red-600">{error}</p>}
          {!loading && filteredCoupons.length === 0 && (
            <Card className="p-4 border-gray-100">
              <p className="text-sm text-gray-500">Nenhum cupom encontrado.</p>
            </Card>
          )}

          {filteredCoupons.map((coupon) => (
            <Card key={coupon.codigo} className="p-4 flex flex-col gap-4 border-gray-100">
              <div className="flex justify-between items-start gap-2">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black tracking-tighter text-primary-admin">{coupon.codigo}</span>
                    <span className="text-xs font-semibold text-gray-500">{coupon.tipo === 'percentage' ? `${coupon.valor}%` : currency(coupon.valor)}</span>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    checked={coupon.ativo}
                    className="sr-only peer"
                    type="checkbox"
                    onChange={() => void handleToggle(coupon)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-admin" />
                </label>
              </div>
              <div className="bg-background-light dark:bg-gray-900/50 p-3 rounded-lg flex flex-col gap-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter text-xs">Mínimo do pedido</span>
                <span className="text-sm font-bold">{currency(coupon.minimo_pedido)}</span>
              </div>
              <button onClick={() => void handleDelete(coupon.codigo)} className="self-end text-xs font-bold text-red-600">Remover</button>
            </Card>
          ))}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-700 px-8 py-3 flex justify-between items-center z-40">
        <button onClick={() => navigate('/admin/dashboard')} className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-bold">Início</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary-admin">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
          <span className="text-[10px] font-bold">Cupons</span>
        </button>
        <button onClick={() => navigate('/admin/lancamento')} className="flex flex-col items-center gap-1 text-gray-400">
          <span className="material-symbols-outlined">orders</span>
          <span className="text-[10px] font-bold">Pedidos</span>
        </button>
      </nav>
    </div>
  );
};

export default GestaoCupons;
