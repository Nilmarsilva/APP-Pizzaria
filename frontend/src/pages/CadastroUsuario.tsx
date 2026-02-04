import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

/**
 * Tela de Cadastro de Usuário (PWA)
 * Seguindo as especificações do arquivo code.html original.
 */
const CadastroUsuario: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      {/* Cabeçalho de Navegação */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-900 dark:text-white active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-[#111618] dark:text-white text-lg font-bold">Registro</h1>
        <div className="w-10"></div> {/* Espaçador para simetria */}
      </header>

      <main className="flex-1 px-6 pb-12 pt-4 max-w-md mx-auto w-full">
        {/* Seção Hero / Branding */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 mb-6 rounded-2xl bg-primary-blue flex items-center justify-center shadow-lg shadow-primary-blue/30">
            <span className="material-symbols-outlined text-white text-4xl">local_pizza</span>
          </div>
          <h2 className="text-[#111618] dark:text-white text-3xl font-bold text-center tracking-tight">Criar Conta</h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mt-2 text-base">Rápido, fácil e cheio de sabor.</p>
        </div>

        {/* Formulário de Registro */}
        <div className="space-y-4">
          <Input
            label="Nome Completo"
            placeholder="Digite seu nome"
            icon="person"
            type="text"
          />
          <Input
            label="WhatsApp"
            placeholder="(00) 00000-0000"
            icon="chat"
            type="tel"
          />
          <Input
            label="E-mail"
            placeholder="exemplo@email.com"
            icon="mail"
            type="email"
          />
          <div className="relative">
            <Input
              label="Senha"
              placeholder="••••••••"
              icon="lock"
              type="password"
            />
            <button className="absolute right-4 top-[44px] text-gray-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </div>

        {/* Botão de Envio */}
        <Button
          variant="secondary"
          className="w-full mt-8 h-14"
          onClick={() => navigate('/home')}
        >
          Criar Minha Conta
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </Button>

        {/* Divisor */}
        <div className="flex items-center my-10">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          <span className="px-4 text-gray-400 text-sm font-medium uppercase tracking-wider">ou entre com</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Grade de Login Social */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 h-14 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl font-semibold dark:text-white hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors shadow-sm active:scale-95">
            <img
              alt="Google"
              className="w-5 h-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0d7sj-KyYFVMz8mSYWUQWdAXg8o_9DFEolWjiehkdq4koi9oBe8lZUK39G4lHay6aQh7njO9RMRoM-Q8YxJV3ywhUXkPUUE7JzEFpPNXnV-eJ1oSNFhS4NbQcbUpZL2N6XjtF0v-fd9hkolf_4TA3YCU6Hk1hjimoRXWCN_AsqCilZ5N19DgYQV2sVzxKdHGumn91CkIyabWEwvti_ArFokt5K_iYEcMCsi-lPVswoxjvJzhfUAyIhdLDsLZimFkKTq78IUDQF3g"
            />
            Google
          </button>
          <button className="flex items-center justify-center gap-3 h-14 bg-[#1877F2] text-white rounded-xl font-semibold hover:bg-opacity-90 transition-colors shadow-sm active:scale-95">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
            Facebook
          </button>
        </div>

        {/* Termos e Redirecionamento de Login */}
        <div className="mt-10 text-center space-y-4">
          <p className="text-gray-500 text-sm px-4">
            Ao se registrar, você concorda com nossos
            <a className="text-primary-blue font-semibold ml-1" href="#">Termos de Uso</a> e
            <a className="text-primary-blue font-semibold ml-1" href="#">Privacidade</a>.
          </p>
          <div className="h-px w-8 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Já tem uma conta?
            <a className="text-primary-blue font-bold ml-1" href="#">Entre aqui</a>
          </p>
        </div>
      </main>

      {/* Decoração de fundo sutil */}
      <div className="fixed top-0 right-0 -z-10 opacity-10 dark:opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <span className="material-symbols-outlined text-[300px] text-primary-blue">local_pizza</span>
      </div>
    </div>
  );
};

export default CadastroUsuario;
