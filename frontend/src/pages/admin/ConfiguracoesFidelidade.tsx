import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

/**
 * Tela de Configurações de Fidelidade - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const ConfiguracoesFidelidade: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#121717] dark:text-white min-h-screen pb-24 font-display">
      {/* Barra de Navegação Superior */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#dce5e5] dark:border-gray-700">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="text-[#121717] dark:text-white flex size-10 shrink-0 items-center justify-start active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h2 className="text-[#121717] dark:text-white text-lg font-extrabold leading-tight tracking-tight flex-1 text-center">Configurações</h2>
          <div className="flex size-10 items-center justify-end text-primary-admin">
            <span className="material-symbols-outlined">help</span>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-2">
        {/* Toggle Principal */}
        <div className="p-4">
          <Card className="flex flex-col items-start justify-between gap-4 p-5 shadow-sm border-[#dce5e5]">
            <div className="flex flex-col gap-1">
              <p className="text-[#121717] dark:text-white text-base font-extrabold leading-tight">Programa de Fidelidade</p>
              <p className="text-[#658686] dark:text-gray-400 text-sm font-normal">Ative para permitir que clientes acumulem pontos</p>
            </div>
            <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full bg-[#f0f4f4] dark:bg-gray-700 p-0.5 transition-all">
              <input checked className="invisible absolute peer" type="checkbox" readOnly />
              <div className="h-full w-[27px] rounded-full bg-white shadow-md peer-checked:translate-x-[20px] transition-transform"></div>
              <div className="absolute inset-0 rounded-full peer-checked:bg-primary-admin -z-10 transition-colors"></div>
            </label>
          </Card>
        </div>

        {/* Cabeçalho da Seção de Regras */}
        <div className="px-4 pt-2">
          <h3 className="text-[#121717] dark:text-white text-lg font-bold">Regra de Pontuação</h3>
          <p className="text-[#658686] dark:text-gray-400 text-sm">Escolha como seus clientes serão recompensados</p>
        </div>

        {/* Seleção de Regras */}
        <div className="flex flex-col gap-3 p-4">
          <label className="flex items-center gap-4 rounded-xl border border-[#dce5e5] dark:border-gray-700 bg-white dark:bg-gray-800 p-[15px] cursor-pointer hover:border-primary-admin transition-colors">
            <div className="flex grow flex-col">
              <p className="text-[#121717] dark:text-white text-sm font-bold">Valor Gasto (R$)</p>
              <p className="text-[#658686] dark:text-gray-400 text-xs font-normal">Clientes ganham pontos a cada real gasto</p>
            </div>
            <input defaultChecked name="score_rule" type="radio" className="h-5 w-5 text-primary-admin focus:ring-primary-admin" />
          </label>
          <label className="flex items-center gap-4 rounded-xl border border-[#dce5e5] dark:border-gray-700 bg-white dark:bg-gray-800 p-[15px] cursor-pointer hover:border-primary-admin transition-colors">
            <div className="flex grow flex-col">
              <p className="text-[#121717] dark:text-white text-sm font-bold">Quantidade de Pedidos</p>
              <p className="text-[#658686] dark:text-gray-400 text-xs font-normal">Clientes ganham 1 ponto por pedido finalizado</p>
            </div>
            <input name="score_rule" type="radio" className="h-5 w-5 text-primary-admin focus:ring-primary-admin" />
          </label>
        </div>

        {/* Input de Lógica da Regra */}
        <div className="px-4">
          <div className="bg-primary-admin/5 dark:bg-primary-admin/10 rounded-xl p-4 border border-primary-admin/20">
            <Input
              label="Valor para 1 ponto"
              defaultValue="10.00"
              icon="payments"
              className="font-bold text-lg h-12"
            />
            <p className="text-xs text-primary-admin font-medium mt-3 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">info</span>
              Ex: R$ 50,00 gastos = 5 pontos acumulados.
            </p>
          </div>
        </div>

        {/* Catálogo de Prêmios */}
        <div className="px-4 pt-6 flex items-center justify-between">
          <h3 className="text-[#121717] dark:text-white text-lg font-bold">Catálogo de Prêmios</h3>
          <button className="text-sm font-bold text-primary-admin flex items-center gap-1">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Novo Prêmio
          </button>
        </div>

        <div className="px-4 space-y-3 pb-4">
          {[
            { name: 'Pizza Brotinho', points: 10, icon: 'local_pizza' },
            { name: 'Pizza Grande (Qualquer Sabor)', points: 20, icon: 'restaurant' }
          ].map((reward, i) => (
            <Card key={i} className="flex items-center gap-4 p-4 shadow-sm border-[#dce5e5]">
              <div className="size-12 rounded-lg bg-primary-admin/10 text-primary-admin flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">{reward.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-[#121717] dark:text-white font-bold text-sm">{reward.name}</p>
                <p className="text-[#658686] dark:text-gray-400 text-xs">{reward.points} pontos necessários</p>
              </div>
              <button className="text-[#658686] hover:text-primary-admin active:scale-90 transition-transform">
                <span className="material-symbols-outlined">edit</span>
              </button>
            </Card>
          ))}
        </div>

        {/* Validade */}
        <div className="px-4 pt-2 pb-8">
          <h3 className="text-[#121717] dark:text-white text-lg font-bold mb-3">Validade dos Pontos</h3>
          <Card className="flex items-center justify-between p-4 cursor-pointer hover:border-primary-admin">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-admin">calendar_today</span>
              <span className="text-sm font-medium">Os pontos expiram em...</span>
            </div>
            <div className="flex items-center gap-1 font-bold text-primary-admin">
              <span>6 meses</span>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Botão de Salvar Fixo */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-[#dce5e5] dark:border-gray-700 z-50">
        <div className="max-w-md mx-auto">
          <Button className="w-full h-14 bg-primary-admin flex items-center justify-center gap-2" onClick={() => {}}>
            <span className="material-symbols-outlined">save</span>
            Salvar Configurações
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracoesFidelidade;
