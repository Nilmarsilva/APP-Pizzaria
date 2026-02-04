import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Tela de Promoções e Notificações (Módulo Cliente)
 * Baseada no arquivo code.html original.
 */
const Notificacoes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#171311] dark:text-white font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white dark:bg-zinc-900 shadow-2xl">

        {/* Barra Superior App */}
        <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800">
          <div className="flex items-center p-4 pb-2 justify-between">
            <button
              onClick={() => navigate(-1)}
              className="text-primary flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors active:scale-90"
            >
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <h2 className="text-[#171311] dark:text-white text-lg font-bold flex-1 text-center">Centro de Promoções</h2>
            <div className="flex w-12 items-center justify-end text-primary">
              <span className="material-symbols-outlined">notifications_active</span>
            </div>
          </div>
        </div>

        <main className="flex-1 pb-24">
          {/* Cabeçalho da Seção */}
          <div className="px-4 pt-6 flex items-center justify-between">
            <h3 className="text-[#171311] dark:text-white text-xl font-extrabold tracking-tight">Ofertas Especiais</h3>
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase">3 Novas</span>
          </div>

          <div className="flex flex-col gap-4 p-4">
            {/* Promoção 1 - Relâmpago */}
            <Card className="flex flex-col overflow-hidden border-none shadow-xl shadow-black/5 bg-white dark:bg-zinc-800">
              <div
                className="relative w-full aspect-[16/9] bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAr5sq8DtFp0mBLUkyxxT71erckLeKKFy3ZmYU6tZlmlpOXhCSfpMNZ6FRiMCmRCHLLXXMXG6toUVVKiZlpG_uUhq1GOquxahQXRkNYJD8TYkvwRN88TL4iNdp9IZBWxhrjWqJIkQ48Yh-uRA_bnrm0awsYTiLKY7DMFC8Z3aaomU7Ej46wNeYLoJ-PyZiP0Xxmt-t6EmnCfHkrxvCnOBOVS4CH1WJsHSZ5sm06sdin5HhFrv4bYbCEPLZPwvDLToU5vQRvTyYdGsM")' }}
              >
                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg uppercase">Relâmpago</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest">Expira em 01:54:22</p>
                </div>
                <h4 className="text-xl font-extrabold leading-tight">30% OFF na Calabresa Artística</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mt-2 leading-relaxed">
                  Só por 2 horas! Peça agora e receba quentinha na sua casa com nossa massa de fermentação lenta.
                </p>
                <Button className="w-full mt-4 h-12 flex items-center justify-center gap-2" onClick={() => navigate('/home')}>
                  Aproveitar Agora
                  <span className="material-symbols-outlined">shopping_cart_checkout</span>
                </Button>
              </div>
            </Card>

            {/* Promoção 2 - Combo */}
            <Card className="flex flex-col overflow-hidden border-none shadow-lg bg-white dark:bg-zinc-800">
              <div
                className="w-full aspect-[16/9] bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-yDv44zuMRqM9MlNnibuTXCv0-9yLAl9DDejWiSeLwEGArcZN1pnVwPXtyo26B6hJ8wyvY2lX-9v2_8Ek0a9BUjeZNVCz1PHsUa3lyXT3duBwAHCDoyGUFy07HwcUtzE9bYa0lzvxZFHX0BjKol4iqdHP0VFWo9bw4iJqHwrq1Mkrj5G3SOP3tsXnnpGpHOQTvuSq9k2bOwV2iaeIYWDLy0IjFrol4RDObnTlliFkWQywlBnYroenLTs_W-qu5xgvgtlMQLnc8ZI")' }}
              ></div>
              <div className="p-5">
                <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Destaque da Semana</p>
                <h4 className="text-lg font-bold leading-tight">Combo Casal Irresistível</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Pizza Grande + Refrigerante 2L com preço especial de Terça.</p>
                <button className="w-full mt-4 bg-primary/10 text-primary font-bold py-2 rounded-xl text-sm hover:bg-primary/20 transition-colors active:scale-95">
                  Ver Detalhes
                </button>
              </div>
            </Card>
          </div>
        </main>

        {/* Navegação Inferior (Estilo Cliente) */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-around h-16 max-w-md mx-auto">
            <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-zinc-400">
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Início</span>
            </button>
            <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-zinc-400">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Cardápio</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-primary relative">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Ofertas</span>
              <div className="absolute top-2 right-2 size-2 bg-primary rounded-full ring-2 ring-white dark:ring-zinc-900"></div>
            </button>
            <button onClick={() => navigate('/perfil')} className="flex flex-col items-center gap-1 text-zinc-400">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Perfil</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Notificacoes;
