import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';

/**
 * Tela de Fidelidade do Cliente (PWA)
 * Baseada no arquivo code.html original.
 */
const Fidelidade: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#181113] dark:text-white font-display">
      {/* Barra de Navegação Superior */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Minha Fidelidade</h1>
        <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-sm cursor-pointer">
          <span className="material-symbols-outlined text-[#181113] dark:text-white">notifications</span>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white dark:border-zinc-800"></span>
        </div>
      </header>

      <main className="p-4 pb-24 space-y-6 max-w-md mx-auto">
        {/* Card de Perfil e Status */}
        <section className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-xl shadow-primary/5 border border-primary/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div
                className="w-20 h-20 rounded-full border-4 border-primary/20 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCavq2nPxTRabXgJW8K9aqsYmVq03A87gjO1GvIKDh2G4J-IEX9UwRAV5PQb5eG8dJskGDdMSqeZVJtGk9AlUSslBoAQ86NVo9WJY-MJOVMIDJ2a_8q5Zfz2mu9OFFYJ3prV1u4lRXI-ajXrAS2YD8yY6o2Du39RAouxnef3oEryM8JlSabSSprCy69a4xqixsq3Qeb9HVSbYhgiQkN6ndbB89zgEdM82aqBfXPIpMweBXSQr1hrWjEmKotnlhNWS9OwDoolzecIMY')" }}
              ></div>
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-[#181113] p-1 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-sm font-bold">star</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#181113] dark:text-white">Olá, João!</h2>
              <p className="text-primary font-bold text-sm tracking-wide uppercase">Pizzaiolo Prateado</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm text-zinc-400">local_fire_department</span>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">700 pontos acumulados</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <p className="text-sm font-semibold opacity-70">Progresso do Prêmio</p>
              <p className="text-xl font-black text-primary">7/10</p>
            </div>
            <div className="w-full h-4 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '70%' }}></div>
            </div>
            <p className="text-center font-bold text-lg mt-4 text-[#181113] dark:text-white">
              Faltam <span className="text-primary text-2xl">3</span> pizzas para sua Margherita grátis!
            </p>
          </div>
        </section>

        {/* Cartela de Selos */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xl font-bold">Cartela de Selos</h3>
            <span className="text-xs font-bold bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded uppercase tracking-widest text-zinc-500">Cartão #04</span>
          </div>
          <div className="bg-primary/5 dark:bg-primary/10 border-2 border-dashed border-primary/30 rounded-xl p-5">
            <div className="grid grid-cols-5 gap-3">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="aspect-square rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 border-2 border-white/20">
                  <span className="material-symbols-outlined text-white text-xl">local_pizza</span>
                </div>
              ))}
              {[8, 9].map((n) => (
                <div key={n} className="aspect-square rounded-full border-2 border-primary/20 bg-white/50 dark:bg-zinc-900/50 flex items-center justify-center">
                  <span className="text-primary/20 font-bold text-lg">{n}</span>
                </div>
              ))}
              <div className="aspect-square rounded-full border-2 border-amber-400 bg-amber-400/10 flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-amber-500">card_giftcard</span>
              </div>
            </div>
          </div>
        </section>

        {/* Prêmios Disponíveis */}
        <section>
          <h3 className="text-xl font-bold mb-4 px-1">Prêmios Disponíveis</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card className="col-span-2 relative min-h-[160px] flex flex-col justify-end p-4 border-none">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8X2n6MqAFp-6AoRI_gaxMyv1nhrKxR34XPreWFk-WLxME85kElgcBhjdusKsD2o_3T2N5pA7ngWGFfpMjREeXmmiVhiQ_n6wTyPEt4U-SEsiP7XIu2vGwxeLIa14z79K94d_2oDzuI--3Fafmo8bbLdqzEwvExIGHxj-QWHENSdfJwU2ztSWoHqgWqMqOb8gfRy5_cZS_xJbRfwSj11HzfEK1PvYns2sxgFoX3ey1d2Fn9zdq0DMn1TwMllL60P71UQuhD_FvueM')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <h4 className="text-white text-lg font-bold">Margherita Grátis</h4>
                  <p className="text-zinc-300 text-sm">Faltam 300 pontos</p>
                </div>
                <button className="bg-zinc-700/50 backdrop-blur-md text-white px-4 py-2 rounded-lg font-bold text-sm border border-white/20 opacity-50 cursor-not-allowed">
                  Resgatar
                </button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Navegação Inferior (Estilo Flutuante) */}
      <nav className="fixed bottom-0 left-0 right-0 p-4 z-50">
        <div className="max-w-md mx-auto bg-[#181113]/90 dark:bg-white/95 backdrop-blur-xl rounded-full px-8 py-3 flex items-center justify-between shadow-2xl">
          <button onClick={() => navigate('/home')} className="text-zinc-500 hover:text-white dark:hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">restaurant</span>
          </button>
          <button className="text-primary flex flex-col items-center">
            <span className="material-symbols-outlined text-3xl font-bold">loyalty</span>
            <span className="w-1 h-1 bg-primary rounded-full mt-1"></span>
          </button>
          <button onClick={() => navigate('/pedidos')} className="text-zinc-500 hover:text-white dark:hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">history</span>
          </button>
          <button onClick={() => navigate('/perfil')} className="text-zinc-500 hover:text-white dark:hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">person</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Fidelidade;
