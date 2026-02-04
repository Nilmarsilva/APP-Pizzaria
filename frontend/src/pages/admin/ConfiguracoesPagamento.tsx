import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

/**
 * Tela de Configurações de Pagamento e API - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const ConfiguracoesPagamento: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white transition-colors min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col max-w-[430px] mx-auto bg-white dark:bg-background-dark shadow-xl overflow-x-hidden">

        {/* Barra Superior App */}
        <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
          <button
            onClick={() => navigate(-1)}
            className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold flex-1 text-center pr-12">Configurações de Pagamento</h2>
        </div>

        <div className="flex-1 pb-24">
          {/* Seção: Métodos de Pagamento */}
          <div className="pt-2">
            <h3 className="text-lg font-bold px-4 pb-2 pt-4">Métodos de Pagamento</h3>
            <p className="px-4 text-sm text-gray-500 dark:text-gray-400 pb-2">Ative ou desative as opções que seus clientes verão no checkout.</p>

            {/* Lista de Métodos */}
            {[
              { id: 'pix', name: 'PIX', icon: 'qr_code_2', checked: true },
              { id: 'card', name: 'Cartão Online', icon: 'credit_card', checked: true },
              { id: 'delivery', name: 'Pagamento na Entrega', icon: 'local_shipping', checked: false }
            ].map((method) => (
              <div key={method.id} className="flex items-center gap-4 bg-white dark:bg-background-dark px-4 min-h-14 justify-between border-b border-gray-50 dark:border-gray-800/50">
                <div className="flex items-center gap-4">
                  <div className="text-[#111418] dark:text-white flex items-center justify-center rounded-lg bg-[#f0f2f4] dark:bg-gray-800 shrink-0 size-10">
                    <span className="material-symbols-outlined">{method.icon}</span>
                  </div>
                  <p className="text-base font-normal">{method.name}</p>
                </div>
                <label className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full bg-[#f0f2f4] dark:bg-gray-700 p-0.5 transition-all">
                  <input defaultChecked={method.checked} className="invisible absolute peer" type="checkbox" />
                  <div className="h-full w-[27px] rounded-full bg-white shadow-md peer-checked:translate-x-[20px] transition-transform"></div>
                  <div className="absolute inset-0 rounded-full peer-checked:bg-primary-blue -z-10 transition-colors"></div>
                </label>
              </div>
            ))}
          </div>

          {/* Seção: Integração Gateway */}
          <div className="mt-4 border-t border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-bold px-4 pb-2 pt-6">Integração Gateway</h3>
            <div className="px-4 mt-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Selecione o Provedor</label>
              <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg mb-6">
                <button className="flex-1 py-2 text-sm font-semibold rounded-md bg-white dark:bg-gray-700 shadow-sm text-primary-blue">Mercado Pago</button>
                <button className="flex-1 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">Asaas</button>
              </div>

              <div className="space-y-4">
                <Input label="Public Key" placeholder="APP_USR-..." />
                <div className="relative">
                  <Input label="Access Token" type="password" placeholder="TEST-..." />
                  <button className="absolute right-3 top-[44px] text-gray-400">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-primary-blue text-primary-blue font-bold hover:bg-primary-blue/5 transition-colors mt-2 active:scale-95">
                  <span className="material-symbols-outlined text-[20px]">sync</span>
                  Testar Conexão
                </button>
              </div>
            </div>
          </div>

          {/* Instruções */}
          <div className="mx-4 mt-8 p-4 rounded-xl bg-primary-blue/5 dark:bg-primary-blue/10 border border-primary-blue/10">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary-blue">info</span>
              <div>
                <h4 className="text-sm font-bold mb-1">Onde encontrar minhas chaves?</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Acesse o seu Dashboard do Mercado Pago em <strong>Suas integrações &gt; Credenciais</strong>. Certifique-se de estar usando as credenciais de <strong>Produção</strong>.
                </p>
                <a className="text-xs font-bold text-primary-blue mt-2 inline-block" href="#">Ir para painel do desenvolvedor →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé de Ação */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800">
          <Button className="w-full py-4 bg-primary-blue" onClick={() => {}}>
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracoesPagamento;
