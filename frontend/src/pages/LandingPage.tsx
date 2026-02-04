import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Landing Page de Vendas do Sistema - Módulo Comercial
 * Baseada no arquivo code.html original.
 */
const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#131615] dark:text-white transition-colors duration-300 min-h-screen font-display">
      {/* Barra de Navegação Superior */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#dee3e2] dark:border-white/10">
        <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-primary size-10 flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-2xl">local_pizza</span>
            </div>
            <h2 className="text-[#131615] dark:text-white text-lg font-bold">Sabor & Gestão</h2>
          </div>
          <button className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold transition-all active:scale-95">
            Demo
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* Seção Hero */}
        <section className="relative px-4 py-10 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span className="text-xs font-bold uppercase tracking-wider">White-label 2024</span>
              </div>
              <h1 className="text-[#131615] dark:text-white text-4xl md:text-6xl font-black leading-tight">
                Transforme sua Pizzaria em uma <span className="text-primary italic">Máquina de Vendas</span>
              </h1>
              <p className="text-[#6d7e7b] dark:text-gray-400 text-lg max-w-xl">
                Sem mensalidades abusivas. Tenha seu próprio sistema com PWA, Fidelidade e Gestão de Entregas.
              </p>
              <div className="pt-4">
                <Button
                  className="h-14 px-8 text-lg flex items-center gap-2"
                  onClick={() => navigate('/cadastro')}
                >
                  Começar Agora
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div
                className="relative w-full aspect-video rounded-2xl bg-cover bg-center shadow-2xl border-4 border-white dark:border-zinc-800"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhXHIUVhdR6AmwtXATDadZJbK35yeox0Fu8cqz_zorgiZcMmFUDNFOzT1pCfFZJGPjgWm3xIKnzeheOw6_esWo62ld1s83jnPVfsIgl6zGsl4QdERAY_TFuG2uX3wl_Z2pzu3Clsi6Eed5FhGXzU6PBhOrDGy57zEfzQlOdUeubls4qNSmKpApFEsHnQV6XzX4C-VKFYJQrPZ-a0UbAsaakDWG1SVWMwiJlRPSKeC24qQWQ1G6J1Sg-rwlyqD6kRtOAYeoNZa8bX8")' }}
              ></div>
            </div>
          </div>
        </section>

        {/* Seção de Funcionalidades */}
        <section className="p-4 py-16">
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-sm uppercase tracking-widest italic">O que entregamos</p>
            <h2 className="text-3xl font-bold mt-2">Funcionalidades Premium</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Impressão Automática', desc: 'Sincronia total entre pedidos e a cozinha.', icon: 'print' },
              { title: 'Notificações Push', desc: 'Engaje clientes com promoções no celular.', icon: 'notifications_active' },
              { title: 'Fidelidade Própria', desc: 'Cupons e pontos para reter clientes.', icon: 'card_membership' },
              { title: 'Gestão Financeira', desc: 'Relatórios diários e fechamento de caixa.', icon: 'account_balance_wallet' }
            ].map((feat, i) => (
              <Card key={i} className="p-6 flex flex-col gap-4 border-gray-100 hover:shadow-xl transition-all">
                <div className="bg-primary/10 text-primary size-12 flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined">{feat.icon}</span>
                </div>
                <h3 className="text-lg font-bold">{feat.title}</h3>
                <p className="text-[#6d7e7b] dark:text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="px-4 py-16 mb-10">
          <div className="bg-[#131615] text-white rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-20"></div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Pronto para digitalizar?</h2>
            <p className="text-zinc-400 text-lg mb-10 relative z-10">Junte-se a mais de 200 pizzarias que reduziram custos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button className="bg-white text-black hover:bg-gray-200">Ver Demonstração</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Falar com Consultor</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 px-4 border-t border-[#dee3e2] dark:border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center opacity-60">
          <p className="font-bold">Sabor & Gestão © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
