import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { api } from '../lib/api';

const CadastroUsuario: React.FC = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const handleSubmit = async () => {
    setErro(null);
    if (!nome.trim() || !whatsapp.trim()) {
      setErro('Informe nome e WhatsApp para continuar.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.register(nome.trim(), whatsapp.trim());
      localStorage.setItem('auth_token', response.token);
      localStorage.setItem('user_id', response.usuario_id);
      localStorage.setItem('user_name', nome.trim());
      navigate('/home');
    } catch (error) {
      setErro('Não foi possível criar sua conta. Verifique os dados e tente novamente.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-white active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-[#111618] dark:text-white text-lg font-bold">Registro</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 px-6 pb-12 pt-4 max-w-md mx-auto w-full">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-[#111618] dark:text-white text-3xl font-bold text-center tracking-tight">Criar Conta</h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mt-2 text-base">Rápido, fácil e cheio de sabor.</p>
        </div>

        <div className="space-y-4">
          <Input label="Nome Completo" placeholder="Digite seu nome" icon="person" value={nome} onChange={(e) => setNome(e.target.value)} />
          <Input label="WhatsApp" placeholder="(00) 00000-0000" icon="chat" type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
        </div>

        {erro ? <p className="text-red-500 text-sm mt-4">{erro}</p> : null}

        <Button variant="secondary" className="w-full mt-8 h-14" onClick={handleSubmit} isLoading={loading}>
          Criar Minha Conta
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </Button>
      </main>
    </div>
  );
};

export default CadastroUsuario;
