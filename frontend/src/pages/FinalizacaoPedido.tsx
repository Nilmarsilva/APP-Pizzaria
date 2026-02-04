import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Tela de Finalização de Pedido (Checkout)
 * Baseada no arquivo code.html original.
 */
const FinalizacaoPedido: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#181111] dark:text-white min-h-screen flex flex-col font-display">
      {/* Barra de Navegação Superior */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-90"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-tight">Finalização</h2>
        <button
          onClick={() => navigate('/home')}
          className="flex items-center justify-center p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-90"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
      </nav>

      <main className="flex-1 pb-32 max-w-md mx-auto w-full">
        {/* Botões Segmentados: Entrega/Retirada */}
        <div className="px-4 py-4">
          <div className="flex h-11 flex-1 items-center justify-center rounded-xl bg-gray-200/50 dark:bg-white/10 p-1">
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 bg-white dark:bg-primary shadow-sm text-[#181111] dark:text-white text-sm font-semibold transition-all">
              <span>Entrega</span>
              <input checked className="hidden" name="delivery_type" type="radio" value="Entrega" readOnly />
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-gray-600 dark:text-gray-400 text-sm font-semibold transition-all">
              <span>Retirada</span>
              <input className="hidden" name="delivery_type" type="radio" value="Retirada" />
            </label>
          </div>
        </div>

        {/* Seção de Endereço */}
        <section>
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <h3 className="text-lg font-bold">Endereço de Entrega</h3>
          </div>
          <div className="mx-4">
            <Card className="flex items-center gap-4 px-4 py-4 justify-between">
              <div className="flex items-center gap-4">
                <div className="text-primary bg-primary/10 flex items-center justify-center rounded-xl shrink-0 size-12">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-base font-semibold leading-normal line-clamp-1">Rua das Pizzas, 123</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">Apt 402 - Bairro Centro</p>
                </div>
              </div>
              <button className="flex cursor-pointer items-center justify-center rounded-lg h-8 px-4 bg-gray-100 dark:bg-white/10 text-sm font-semibold transition-colors hover:bg-gray-200 dark:hover:bg-white/20">
                <span>Editar</span>
              </button>
            </Card>
          </div>
        </section>

        {/* Resumo do Pedido */}
        <section className="mt-6">
          <h3 className="text-lg font-bold px-4 pb-2">Resumo do Pedido</h3>
          <div className="mx-4 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
            {/* Item 1 */}
            <div className="flex items-center gap-4 px-4 py-4">
              <div className="relative size-14 rounded-lg overflow-hidden shrink-0 border border-gray-100 dark:border-gray-800">
                <img className="w-full h-full object-cover" alt="Pizza" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5mCRYMF0e7aNo6J7NfO0sFJ-y8eoaSxK37IdnhO6p5JXZscyw0NVMHaAmp_sZUpYzMRV45Sno_1Lx9XnHH016LpN6QUs-A9ois9O69vFHjaKNLCHp3ulVyYflYIvDIoMMW8SV2TawZmeavPjrJYNplwWQHH-xR-7hZbXliwrf4_9lVNq9MWuTLLhMSmMHIlp7mzv28J2klnkBLt7zuwtth_J7sQiCMQHvT8rkHFxULCCbD26YiqwmBq_LSf_954ezOIF_Fl9d3BM" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="text-base font-semibold leading-tight">1x Pizza Calabresa</p>
                  <span className="font-bold text-sm">R$ 54,90</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Massa Fina, Borda Recheada</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-center gap-4 px-4 py-4">
              <div className="relative size-14 rounded-lg overflow-hidden shrink-0 border border-gray-100 dark:border-gray-800">
                <img className="w-full h-full object-cover" alt="Bebida" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACOvIRdrdPApV_dKSG_PFSTbfAkDpZwI5ENfH8HqdSbPsGr8_uEURdQjNJaLDhLRybLzFGmDPnNW6f-08TJbKexoGzuTmFApASQ5GG7jrYEuyvKrlBXJjeBFVEmw2uyiGnHYJ4fi1vDFZKVapayQCluOyP2mSA0TF8KBwnIEvQZe72jdkrEzmEr4srW1E62OTmgv1PBPuPi0WP5rGICQ9z2LCMYviz7GPg9g_raZdishrOmtAspHxZ-0ixjSzXj8P6gosdHizScKw" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="text-base font-semibold leading-tight">1x Coca-Cola 350ml</p>
                  <span className="font-bold text-sm">R$ 7,00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seleção de Pagamento */}
        <section className="mt-6">
          <h3 className="text-lg font-bold px-4 pb-2">Forma de Pagamento</h3>
          <div className="px-4 space-y-3">
            {/* Opção PIX */}
            <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer relative transition-all">
              <input checked className="hidden" name="payment" type="radio" readOnly />
              <div className="text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">qr_code_2</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-bold">PIX</p>
                  <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Desconto</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Pague agora e agilize sua entrega</p>
              </div>
              <span className="material-symbols-outlined text-primary">check_circle</span>
            </label>
            {/* Opção Cartão */}
            <label className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-white/5 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/10 transition-all">
              <input className="hidden" name="payment" type="radio" />
              <div className="text-gray-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">credit_card</span>
              </div>
              <div className="flex-1">
                <p className="font-bold">Cartão na Entrega</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Crédito ou Débito</p>
              </div>
            </label>
          </div>
        </section>

        {/* Totais do Pedido */}
        <section className="mt-8 px-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Subtotal</span>
            <span>R$ 61,90</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Taxa de Entrega</span>
            <span className="text-green-500 font-medium">Grátis</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-dashed border-gray-300 dark:border-gray-700">
            <span>Total</span>
            <span className="text-primary">R$ 61,90</span>
          </div>
        </section>
      </main>

      {/* Barra de Ação Inferior Fixa */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 max-w-md mx-auto">
        <Button
          className="w-full py-4 flex items-center justify-center gap-2"
          onClick={() => navigate('/acompanhamento')}
        >
          <span>Finalizar Pedido</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </Button>
      </div>
    </div>
  );
};

export default FinalizacaoPedido;
