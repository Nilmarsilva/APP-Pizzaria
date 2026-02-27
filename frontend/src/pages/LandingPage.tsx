import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { api } from '../lib/api';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loadingLead, setLoadingLead] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleLead = async () => {
    if (!nome.trim() || !whatsapp.trim()) {
      setFeedback('Preencha nome e WhatsApp.');
      return;
    }

    try {
      setLoadingLead(true);
      setFeedback(null);
      await api.submitLead({
        nome: nome.trim(),
        whatsapp: whatsapp.trim(),
        mensagem: mensagem.trim(),
      });
      setFeedback('Recebemos seu contato! Em breve falaremos com você.');
      setNome('');
      setWhatsapp('');
      setMensagem('');
    } catch (error) {
      console.error(error);
      setFeedback('Não foi possível enviar agora. Tente novamente.');
    } finally {
      setLoadingLead(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#131615] dark:text-white min-h-screen font-display">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#dee3e2] dark:border-white/10">
        <div className="flex items-center p-4 justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-primary size-10 flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-2xl">local_pizza</span>
            </div>
            <h2 className="text-lg font-bold">Sabor & Gestão</h2>
          </div>
          <button className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold" onClick={() => navigate('/cadastro')}>
            Demo
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="relative px-4 py-10 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span className="text-xs font-bold uppercase tracking-wider">White-label 2024</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                Transforme sua Pizzaria em uma <span className="text-primary italic">Máquina de Vendas</span>
              </h1>
              <p className="text-[#6d7e7b] dark:text-gray-400 text-lg max-w-xl">
                Sem mensalidades abusivas. Tenha seu próprio sistema com PWA, Fidelidade e Gestão de Entregas.
              </p>
              <Button className="h-14 px-8 text-lg" onClick={() => navigate('/cadastro')}>
                Ver demonstração do app
              </Button>
            </div>
          </div>
        </section>

        <section className="p-4 py-10">
          <div className="text-center mb-8">
            <p className="text-primary font-bold text-sm uppercase tracking-widest italic">O que entregamos</p>
            <h2 className="text-3xl font-bold mt-2">Funcionalidades Premium</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Impressão Automática', desc: 'Sincronia total entre pedidos e a cozinha.', icon: 'print' },
              { title: 'Notificações Push', desc: 'Engaje clientes com promoções no celular.', icon: 'notifications_active' },
              { title: 'Fidelidade Própria', desc: 'Cupons e pontos para reter clientes.', icon: 'card_membership' },
              { title: 'Gestão Financeira', desc: 'Relatórios diários e fechamento de caixa.', icon: 'account_balance_wallet' },
            ].map((feat) => (
              <Card key={feat.title} className="p-6 flex flex-col gap-4 border-gray-100">
                <div className="bg-primary/10 text-primary size-12 flex items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined">{feat.icon}</span>
                </div>
                <h3 className="text-lg font-bold">{feat.title}</h3>
                <p className="text-[#6d7e7b] dark:text-gray-400 text-sm">{feat.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="px-4 py-12 mb-10">
          <Card className="p-6 md:p-10 border-gray-100 space-y-4">
            <h2 className="text-2xl md:text-3xl font-black">Falar com consultor</h2>
            <p className="text-sm text-gray-500">Deixe seus dados e nossa equipe retorna com proposta.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                className="w-full border rounded-lg p-3 bg-white dark:bg-gray-800 dark:border-gray-700"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                className="w-full border rounded-lg p-3 bg-white dark:bg-gray-800 dark:border-gray-700"
                placeholder="WhatsApp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>

            <textarea
              className="w-full border rounded-lg p-3 bg-white dark:bg-gray-800 dark:border-gray-700 min-h-24"
              placeholder="Mensagem (opcional)"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />

            {feedback ? <p className="text-sm text-primary-admin">{feedback}</p> : null}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="sm:w-auto" onClick={() => void handleLead()} isLoading={loadingLead}>
                Enviar contato
              </Button>
              <Button variant="outline" className="sm:w-auto" onClick={() => navigate('/cadastro')}>
                Ver demonstração
              </Button>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
