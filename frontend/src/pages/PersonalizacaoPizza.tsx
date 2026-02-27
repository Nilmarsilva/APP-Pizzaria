import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import { api } from '../lib/api';
import type { ProductDetailed } from '../lib/api';
import { addToCart } from '../lib/cart';

const PersonalizacaoPizza: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product');

  const [product, setProduct] = useState<ProductDetailed | null>(null);
  const [variantId, setVariantId] = useState<string>('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [obs, setObs] = useState('');

  useEffect(() => {
    const load = async () => {
      const detailed = await api.listMenuDetailed();
      const found = detailed.find((item) => item.id === productId) ?? detailed[0] ?? null;
      setProduct(found);
      if (found?.variacoes.length) {
        setVariantId(found.variacoes[0].id);
      }
    };

    load().catch(console.error);
  }, [productId]);

  const selectedVariant = useMemo(
    () => product?.variacoes.find((item) => item.id === variantId),
    [product, variantId],
  );

  const total = useMemo(() => {
    if (!product) return 0;
    const base = selectedVariant?.preco ?? product.preco_base;
    const addonTotal = product.adicionais
      .filter((item) => selectedAddons.includes(item.id))
      .reduce((acc, item) => acc + item.preco, 0);
    return (base + addonTotal) * quantity;
  }, [product, selectedVariant, selectedAddons, quantity]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((value) => value !== addonId) : [...prev, addonId],
    );
  };

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      produto_id: product.id,
      nome: product.nome,
      preco_unitario: total / quantity,
      quantidade: quantity,
      image_url: product.image_url,
      observacoes: obs,
      variacao: selectedVariant?.nome_tamanho,
      adicionais: product.adicionais
        .filter((item) => selectedAddons.includes(item.id))
        .map((item) => item.nome),
    });

    navigate('/finalizar-pedido');
  };

  if (!product) {
    return <div className="p-6">Carregando produto...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 pb-24">
      <button onClick={() => navigate(-1)} className="mb-4">Voltar</button>
      <h1 className="text-2xl font-bold">{product.nome}</h1>
      <p className="text-gray-500 mb-4">{product.descricao}</p>

      <h2 className="font-bold mb-2">Tamanho</h2>
      <div className="space-y-2 mb-4">
        {product.variacoes.length ? (
          product.variacoes.map((variant) => (
            <label key={variant.id} className="flex justify-between border rounded-lg p-3">
              <span>{variant.nome_tamanho}</span>
              <div className="flex items-center gap-3">
                <span>R$ {variant.preco.toFixed(2)}</span>
                <input
                  type="radio"
                  name="variant"
                  checked={variantId === variant.id}
                  onChange={() => setVariantId(variant.id)}
                />
              </div>
            </label>
          ))
        ) : (
          <p className="text-sm text-gray-500">Sem variações cadastradas.</p>
        )}
      </div>

      <h2 className="font-bold mb-2">Adicionais</h2>
      <div className="space-y-2 mb-4">
        {product.adicionais.map((addon) => (
          <label key={addon.id} className="flex justify-between border rounded-lg p-3">
            <span>{addon.nome}</span>
            <div className="flex items-center gap-3">
              <span>+ R$ {addon.preco.toFixed(2)}</span>
              <input
                type="checkbox"
                checked={selectedAddons.includes(addon.id)}
                onChange={() => toggleAddon(addon.id)}
              />
            </div>
          </label>
        ))}
      </div>

      <textarea
        className="w-full border rounded-lg p-3 mb-4"
        placeholder="Observações"
        value={obs}
        onChange={(e) => setObs(e.target.value)}
      />

      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-2 border rounded">-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2 border rounded">+</button>
      </div>

      <Button className="w-full" onClick={handleAddToCart}>
        Adicionar ao carrinho • R$ {total.toFixed(2)}
      </Button>
    </div>
  );
};

export default PersonalizacaoPizza;
