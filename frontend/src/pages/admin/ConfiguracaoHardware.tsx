import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

/**
 * Tela de Configuração de Impressão e Hardware - Módulo Administrativo
 * Baseada no arquivo code.html original.
 */
const ConfiguracaoHardware: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#181111] dark:text-white font-display">
      <div className="relative flex h-auto min-h-screen w-full max-w-[430px] mx-auto flex-col bg-white dark:bg-background-dark overflow-x-hidden shadow-2xl">

        {/* Barra Superior App */}
        <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10">
          <button
            onClick={() => navigate(-1)}
            className="text-[#181111] dark:text-white flex size-10 shrink-0 items-center justify-center active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h2 className="text-[#181111] dark:text-white text-lg font-bold flex-1 text-center pr-10">Hardware</h2>
        </div>

        <div className="p-4 space-y-6 pb-20">
          {/* Método de Conexão */}
          <section>
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="material-symbols-outlined text-primary text-xl">settings_input_component</span>
              <h3 className="text-lg font-bold">Método de Conexão</h3>
            </div>
            <div className="flex py-3">
              <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-[#f4f0f0] dark:bg-gray-800 p-1">
                <button className="flex-1 h-full rounded-lg bg-white dark:bg-gray-700 shadow-sm text-primary text-sm font-bold flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">bluetooth</span> Bluetooth
                </button>
                <button className="flex-1 h-full text-[#896163] dark:text-gray-400 text-sm font-semibold flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">usb</span> USB
                </button>
              </div>
            </div>
            <Input label="Endereço IP (Se aplicável)" placeholder="192.168.1.100" icon="globe" />
          </section>

          {/* Status do Dispositivo */}
          <section>
            <div className="flex items-center gap-2 mb-4 px-1">
              <span className="material-symbols-outlined text-primary text-xl">print</span>
              <h3 className="text-lg font-bold">Status do Dispositivo</h3>
            </div>
            <Card className="p-4 border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <span className="material-symbols-outlined">print_connect</span>
                  </div>
                  <div>
                    <p className="font-bold">Impressora Cozinha 01</p>
                    <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span> Conectado
                    </p>
                  </div>
                </div>
                <button className="text-primary text-sm font-bold px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/5 active:scale-95 transition-all">
                  Trocar
                </button>
              </div>
              <Button className="w-full py-4 flex items-center justify-center gap-2" onClick={() => {}}>
                <span className="material-symbols-outlined">receipt_long</span>
                Teste de Impressão
              </Button>
            </Card>
          </section>

          {/* Automação */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="material-symbols-outlined text-primary text-xl">robot_2</span>
              <h3 className="text-lg font-bold">Automação</h3>
            </div>
            <div className="space-y-1">
              {[
                { title: 'Impressão Automática', desc: 'Imprimir ao receber pedido', checked: true },
                { title: 'Imprimir 2ª Via', desc: 'Via exclusiva para o entregador', checked: false }
              ].map((opt, i) => (
                <div key={i} className="flex items-center justify-between py-3 px-1 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex flex-col">
                    <span className="text-base font-medium">{opt.title}</span>
                    <span className="text-xs text-[#896163] dark:text-gray-400">{opt.desc}</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input defaultChecked={opt.checked} className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-8 pb-10 text-center">
            <p className="text-[#896163] dark:text-gray-500 text-sm mb-4">Problemas com o hardware?</p>
            <button className="inline-flex items-center gap-2 text-primary font-bold text-sm bg-primary/5 px-6 py-3 rounded-xl active:scale-95 transition-all">
              <span className="material-symbols-outlined text-base">help</span>
              Central de Ajuda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracaoHardware;
