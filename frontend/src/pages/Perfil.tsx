import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { api } from '../lib/api';

const Perfil: React.FC = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [endereco, setEndereco] = useState('');
  const [metodoPagamentoPreferido, setMetodoPagamentoPreferido] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (!userId) return;

    setLoading(true);
    api
      .getUser(userId)
      .then((user) => {
        setNome(user.nome);
        setWhatsapp(user.whatsapp);
        setEndereco(user.endereco ?? '');
        setMetodoPagamentoPreferido(user.metodo_pagamento_preferido ?? '');
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      setMessage('Usuário não encontrado na sessão.');
      return;
    }

    try {
      setSaving(true);
      setMessage(null);
      const updated = await api.updateUser(userId, {
        nome,
        whatsapp,
        endereco,
        metodo_pagamento_preferido: metodoPagamentoPreferido,
      });
      localStorage.setItem('user_name', updated.nome);
      setMessage('Perfil atualizado com sucesso.');
    } catch (error) {
      console.error(error);
      setMessage('Erro ao atualizar perfil.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#121617] dark:text-white min-h-screen">
      <div className="max-w-[480px] mx-auto p-4 pb-24">
        <div className="flex items-center p-2 justify-between sticky top-0 z-50 bg-white dark:bg-background-dark">
          <button onClick={() => navigate('/home')} className="text-primary-admin flex size-12 shrink-0 items-center justify-center">
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </button>
          <h2 className="text-[#121617] dark:text-white text-lg font-bold flex-1 text-center">Perfil</h2>
          <div className="w-12" />
        </div>

        <Card className="p-4 mt-3 space-y-4">
          {loading ? <p className="text-sm text-gray-500">Carregando perfil...</p> : null}

          <Input label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} icon="person" />
          <Input label="WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} icon="chat" />
          <Input label="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} icon="home" />

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">Pagamento preferido</span>
            <select
              value={metodoPagamentoPreferido}
              onChange={(e) => setMetodoPagamentoPreferido(e.target.value)}
              className="w-full border rounded-lg p-3 bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="">Selecione</option>
              <option value="pix">PIX</option>
              <option value="card_on_delivery">Cartão na entrega</option>
              <option value="cash">Dinheiro</option>
            </select>
          </label>

          {message ? <p className="text-sm text-primary-admin">{message}</p> : null}

          <Button variant="admin" className="w-full" isLoading={saving} onClick={handleSave}>
            Salvar alterações
          </Button>
        </Card>

        <div className="mt-6">
          <Button variant="outline" className="w-full" onClick={() => navigate('/pedidos')}>
            Ver meus pedidos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
