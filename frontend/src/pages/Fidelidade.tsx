import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import { api } from '../lib/api';

const Fidelidade: React.FC = () => {
  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      setLoading(false);
      return;
    }

    api
      .getLoyaltyPoints(userId)
      .then((response) => setPoints(response.pontos))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const progress = useMemo(() => Math.min((points % 10) * 10, 100), [points]);
  const faltam = useMemo(() => 10 - (points % 10), [points]);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#181113] dark:text-white font-display">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Minha Fidelidade</h1>
        <div className="w-10" />
      </header>

      <main className="p-4 pb-24 space-y-6 max-w-md mx-auto">
        <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-xl shadow-primary/5 border border-primary/10">
          <h2 className="text-2xl font-extrabold">Programa de Fidelidade</h2>
          <p className="text-zinc-500 mt-1">Acompanhe seus pontos acumulados.</p>

          <div className="mt-6">
            {loading ? <p className="text-sm text-gray-500">Carregando pontos...</p> : null}
            <p className="text-primary font-black text-4xl">{points}</p>
            <p className="text-sm text-zinc-500">pontos acumulados</p>
          </div>

          <div className="space-y-3 mt-6">
            <div className="flex justify-between items-end">
              <p className="text-sm font-semibold opacity-70">Progresso do Prêmio</p>
              <p className="text-xl font-black text-primary">{points % 10}/10</p>
            </div>
            <div className="w-full h-4 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-center font-bold text-lg mt-4">
              Faltam <span className="text-primary text-2xl">{faltam}</span> pedidos para completar a meta.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4 px-1">Prêmio atual</h3>
          <Card className="p-4">
            <p className="font-bold">Pizza promocional</p>
            <p className="text-sm text-gray-500">Disponível ao atingir 10 pontos no ciclo.</p>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Fidelidade;
