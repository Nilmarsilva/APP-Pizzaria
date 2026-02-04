import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

/**
 * Tela de Personalização de Pizza
 * Baseada na variação _1 do Google Stitch.
 */
const PersonalizacaoPizza: React.FC = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#181111] dark:text-white antialiased min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-xl">

        {/* Barra Superior App (Sobreposta na Imagem) */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/40 to-transparent">
          <button
            onClick={() => navigate(-1)}
            className="flex size-10 items-center justify-center rounded-full bg-white/90 text-[#181111] backdrop-blur-sm active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <div className="flex gap-2">
            <button className="flex size-10 items-center justify-center rounded-full bg-white/90 text-[#181111] backdrop-blur-sm active:scale-90 transition-transform">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="flex size-10 items-center justify-center rounded-full bg-white/90 text-[#181111] backdrop-blur-sm active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-red-500">favorite</span>
            </button>
          </div>
        </div>

        {/* Imagem de Cabeçalho */}
        <div
          className="w-full h-80 bg-center bg-no-repeat bg-cover flex flex-col justify-end"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0_3jtg7Yknd7zvCJ-k2U7wuLT4tNHt-51wt9zS_OF8P1uIMibwMjSIBo5sM1RYNfJnzFLxyh1VIqJoJsvwsddxLrJwksNJY_91SFTPX-p35b87NGoRHdyggAL9Z7oYPgpOdVLokDNuXhnq11RLaBx5B6Uzutu3lgtcRlyBPD-YFPPEVy9-xD363cwuiQoUNb08RZgA0LUgOnRY52dtesRZWZ9GXjZDyOwaT2RNEaruK-8gpjs1k2eIsDkSBrBgFLpADLhHKpb4pg")' }}
        >
        </div>

        {/* Seção de Conteúdo */}
        <div className="flex flex-col gap-1 px-4 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-[#181111] dark:text-white tracking-tight text-3xl font-bold leading-tight">Calabresa Especial</h1>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Mais Vendida</span>
          </div>
          <p className="text-[#181111] dark:text-gray-300 text-base font-normal leading-relaxed pt-2">
            Molho de tomate artesanal, muçarela, calabresa fatiada, cebola roxa, azeitonas pretas e orégano fresco. Massa de fermentação lenta.
          </p>
        </div>

        {/* Divisor */}
        <div className="h-2 bg-background-light dark:bg-black/20"></div>

        {/* Seção: Tamanho */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-[#181111] dark:text-white text-lg font-bold leading-tight tracking-tight">Escolha o tamanho</h3>
            <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded uppercase">Obrigatório</span>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <label className="relative flex cursor-pointer items-center justify-between rounded-xl border-2 border-primary bg-primary/5 p-4 transition-all">
              <div className="flex items-center gap-3">
                <div className="flex size-5 items-center justify-center rounded-full border-2 border-primary">
                  <div className="size-2.5 rounded-full bg-primary"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#181111] dark:text-white">Gigante (40cm)</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">12 fatias - Serve 4 pessoas</span>
                </div>
              </div>
              <span className="font-bold text-primary">R$ 84,90</span>
              <input checked readOnly className="hidden" name="size" type="radio" />
            </label>
            <label className="relative flex cursor-pointer items-center justify-between rounded-xl border-2 border-gray-100 dark:border-gray-800 p-4 transition-all hover:border-primary/50">
              <div className="flex items-center gap-3">
                <div className="flex size-5 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#181111] dark:text-white">Grande (35cm)</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">8 fatias - Serve 3 pessoas</span>
                </div>
              </div>
              <span className="font-bold text-[#181111] dark:text-white">R$ 72,90</span>
              <input className="hidden" name="size" type="radio" />
            </label>
          </div>
        </div>

        {/* Seção: Bordas Recheadas */}
        <div className="px-4 py-4">
          <h3 className="text-[#181111] dark:text-white text-lg font-bold leading-tight tracking-tight pb-4">Borda recheada</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 cursor-pointer active:bg-gray-50 dark:active:bg-gray-800/50 transition-colors">
              <span className="text-base text-[#181111] dark:text-gray-300">Catupiry Original</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-primary">+ R$ 12,00</span>
                <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              </div>
            </label>
            <label className="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 cursor-pointer active:bg-gray-50 dark:active:bg-gray-800/50 transition-colors">
              <span className="text-base text-[#181111] dark:text-gray-300">Cheddar Cremoso</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-primary">+ R$ 12,00</span>
                <input className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox" />
              </div>
            </label>
          </div>
        </div>

        {/* Seção: Observações */}
        <div className="px-4 py-4 pb-32">
          <h3 className="text-[#181111] dark:text-white text-lg font-bold leading-tight tracking-tight pb-3">Observações</h3>
          <div className="relative">
            <textarea
              className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-gray-900/50 focus:border-primary focus:ring-0 text-base min-h-[100px] outline-none"
              placeholder="Ex: Tirar a cebola, bem passada, etc..."
              maxLength={140}
            ></textarea>
            <div className="absolute bottom-3 right-3 text-xs text-gray-400">0 / 140</div>
          </div>
        </div>

        {/* Footer de Ação Fixo */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 max-w-[480px] mx-auto">
          <div className="flex items-center gap-4">
            {/* Seletor de Quantidade */}
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg p-1 h-12 w-32 shrink-0">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex size-10 items-center justify-center text-primary active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined font-bold">remove</span>
              </button>
              <span className="font-bold text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex size-10 items-center justify-center text-primary active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined font-bold">add</span>
              </button>
            </div>
            {/* Botão Adicionar ao Carrinho */}
            <Button
              className="flex-1 flex items-center justify-between h-12 px-5"
              onClick={() => navigate('/home')}
            >
              <span>Adicionar</span>
              <span className="text-sm opacity-90">R$ {(84.90 * quantity).toFixed(2).replace('.', ',')}</span>
            </Button>
          </div>
          {/* Indicador Home (estilo iOS) */}
          <div className="w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mt-6 mb-1"></div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizacaoPizza;
