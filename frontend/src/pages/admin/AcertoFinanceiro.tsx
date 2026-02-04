import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

/**
 * Tela de Acerto Financeiro com Motoboy - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const AcertoFinanceiro: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111617] dark:text-white transition-colors min-h-screen">
      {/* Barra de Navegação Superior */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center px-4 py-3 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors active:scale-90"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="text-lg font-bold leading-tight tracking-tight">Acerto de Contas</h1>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-[#111617] dark:text-white">
            <span className="material-symbols-outlined">calendar_today</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto pb-32">
        {/* Perfil do Motoboy */}
        <section className="p-4 bg-white dark:bg-background-dark/50 mb-2 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 ring-4 ring-primary-blue/10"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7OUp9baHxAOrBnhr1GVEZmcv1v7DCZYi8cWckRI7-DPrDjAxksLYxqK9_D6cN1yNvgzrZfLWLTKq09SqhVrjhVKICqVQbvQx8-XWgT35qyVQM_JdzuZpDZo_cbQGS8UhMs3ptE66eG3yxuK4aHihSka-yY9oeLQJcLP0MIO0Ss-Gskd6pwdjwH5xPUbv5iexFXBSTjFdo1jkFXO-71VFwr4m3iWszbnTgABS8Qj2hub3Oq_i0yQkSqUJy337zekhInzMS0DbXXaQ")' }}
              ></div>
              <div className="absolute bottom-0 right-0 h-5 w-5 bg-green-500 border-2 border-white dark:border-background-dark rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold tracking-tight">João Silva</p>
              <p className="text-primary-blue font-medium text-sm">Motoboy Ativo • Noturno</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">ID: #MT-8842 • 18:00 - 23:30</p>
            </div>
          </div>
        </section>

        {/* Grade de Estatísticas Rápidas */}
        <section className="grid grid-cols-2 gap-3 p-4">
          <Card className="col-span-2 flex flex-col gap-2 p-5 shadow-sm border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Coletado</p>
              <span className="material-symbols-outlined text-green-500">payments</span>
            </div>
            <p className="text-3xl font-bold leading-tight">R$ 450,00</p>
            <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-green-500 h-full w-3/4"></div>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 p-4 border-gray-200">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Entregas</p>
            <div className="flex items-baseline gap-1">
              <p className="text-2xl font-bold">14</p>
              <span className="text-xs text-gray-400">concluídas</span>
            </div>
          </Card>
          <Card className="flex flex-col gap-2 p-4 border-gray-200">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Taxas a Pagar</p>
            <p className="text-2xl font-bold text-primary-blue">R$ 70,00</p>
          </Card>
        </section>

        {/* Detalhamento de Transações */}
        <div className="px-4 py-2 mt-2 flex justify-between items-end">
          <h3 className="text-lg font-bold tracking-tight">Detalhamento</h3>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Hoje, 24 Mai</span>
        </div>

        <section className="px-4 flex flex-col gap-3 mt-2">
          {[
            { id: '4502', type: 'Dinheiro', amount: '85,00', time: '19:20' },
            { id: '4515', type: 'Cartão', amount: '112,50', time: '20:05' }
          ].map((item) => (
            <Card key={item.id} className="flex items-center justify-between p-4 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-primary-blue/10 text-primary-blue h-12 w-12 shrink-0">
                  <span className="material-symbols-outlined">package_2</span>
                </div>
                <div>
                  <p className="font-bold">Pedido #{item.id}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase">{item.type}</span>
                    <p className="text-gray-400 text-xs">Taxa: R$ 5,00</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">R$ {item.amount}</p>
                <p className="text-[10px] text-gray-400">{item.time}</p>
              </div>
            </Card>
          ))}
        </section>

        {/* Resumo Final de Saldo */}
        <section className="mx-4 mt-6 p-5 bg-primary-blue/10 border-2 border-dashed border-primary-blue/30 rounded-2xl flex flex-col items-center justify-center gap-1 text-center">
          <p className="text-xs font-bold text-primary-blue uppercase tracking-widest">Saldo Final para Receber</p>
          <p className="text-4xl font-bold text-primary-blue">R$ 380,00</p>
          <p className="text-[10px] text-gray-400 mt-2 italic px-8">Calculado: Total Coletado em Dinheiro minus Taxas Pendentes</p>
        </section>
      </main>

      {/* Botão de Conclusão Fixo */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-md mx-auto">
          <Button className="w-full h-16 bg-primary-blue flex items-center justify-center gap-3 text-lg" onClick={() => {}}>
            <span className="material-symbols-outlined">check_circle</span>
            Concluir Acerto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AcertoFinanceiro;
