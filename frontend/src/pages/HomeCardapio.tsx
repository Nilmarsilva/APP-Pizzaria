import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import { api } from '../lib/api';
import type { Category, ProductSummary } from '../lib/api';
import { addToCart } from '../lib/cart';

const HomeCardapio: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.listCategories().then(setCategories).catch(console.error);
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await api.listMenu({
          categoria_id: selectedCategory || undefined,
          q: search || undefined,
        });
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [selectedCategory, search]);

  const handleQuickAdd = (product: ProductSummary) => {
    addToCart({
      produto_id: product.id,
      nome: product.nome,
      preco_unitario: product.preco_base,
      quantidade: 1,
      image_url: product.image_url,
    });
    navigate('/finalizar-pedido');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#181111] dark:text-white min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <h1 className="text-[#181111] dark:text-white text-xl font-bold leading-tight tracking-tight flex-1 text-center">Bella Pizza</h1>
        </div>
      </nav>

      <main className="max-w-md mx-auto pb-24 px-4">
        <div className="py-3">
          <input
            className="w-full rounded-xl h-12 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-4"
            placeholder="Buscar produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3">
          <button
            className={`px-4 py-2 rounded-full border ${selectedCategory === '' ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => setSelectedCategory('')}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full border ${selectedCategory === category.id ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-gray-800'}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.nome}
            </button>
          ))}
        </div>

        {loading ? <p className="text-sm text-gray-500">Carregando cardápio...</p> : null}

        <div className="grid grid-cols-2 gap-3 pb-8">
          {products.map((product) => (
            <Card key={product.id} className="p-3 flex flex-col gap-2">
              <div className="h-24 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden">
                {product.image_url ? <img src={product.image_url} alt={product.nome} className="w-full h-full object-cover" /> : null}
              </div>
              <p className="font-bold text-sm">{product.nome}</p>
              <p className="text-primary font-bold">R$ {product.preco_base.toFixed(2)}</p>
              <button
                className="text-xs bg-primary text-white rounded-lg py-2"
                onClick={() => navigate(`/personalizar-pizza?product=${product.id}`)}
              >
                Personalizar
              </button>
              <button className="text-xs border border-primary text-primary rounded-lg py-2" onClick={() => handleQuickAdd(product)}>
                Adicionar rápido
              </button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomeCardapio;
