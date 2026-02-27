import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { api } from '../lib/api';
import type { UserNotification } from '../lib/api';

const Notificacoes: React.FC = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<UserNotification[]>([]);
  const [loading, setLoading] = useState(true);

  const unreadCount = useMemo(
    () => notifications.filter((item) => !item.lida).length,
    [notifications],
  );

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      setLoading(false);
      return;
    }

    api
      .listNotifications(userId)
      .then((response) => setNotifications(response))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const markRead = async (notificationId: string) => {
    try {
      const updated = await api.markNotificationRead(notificationId, true);
      setNotifications((prev) =>
        prev.map((item) => (item.id === updated.id ? updated : item)),
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-[#171311] dark:text-white font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white dark:bg-zinc-900 shadow-2xl">
        <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-800">
          <div className="flex items-center p-4 pb-2 justify-between">
            <button onClick={() => navigate(-1)} className="text-primary flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 transition-colors active:scale-90">
              <span className="material-symbols-outlined">arrow_back_ios_new</span>
            </button>
            <h2 className="text-[#171311] dark:text-white text-lg font-bold flex-1 text-center">Centro de Promoções</h2>
            <div className="flex w-12 items-center justify-end text-primary">
              <span className="material-symbols-outlined">notifications_active</span>
            </div>
          </div>
        </div>

        <main className="flex-1 pb-24">
          <div className="px-4 pt-6 flex items-center justify-between">
            <h3 className="text-[#171311] dark:text-white text-xl font-extrabold tracking-tight">Notificações</h3>
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase">{unreadCount} Novas</span>
          </div>

          <div className="flex flex-col gap-4 p-4">
            {loading ? <p className="text-sm text-gray-500">Carregando notificações...</p> : null}
            {!loading && notifications.length === 0 ? (
              <Card className="p-4">
                <p className="text-sm text-gray-500">Você não possui notificações no momento.</p>
              </Card>
            ) : null}

            {notifications.map((notification) => (
              <Card key={notification.id} className={`p-4 ${notification.lida ? 'opacity-75' : ''}`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">{notification.tipo}</p>
                    <h4 className="text-base font-bold mt-1">{notification.titulo}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{notification.mensagem}</p>
                    <p className="text-xs text-zinc-400 mt-2">{new Date(notification.criado_em).toLocaleString('pt-BR')}</p>
                  </div>
                  {!notification.lida ? (
                    <Button className="h-10 px-3 text-sm" onClick={() => markRead(notification.id)}>
                      Marcar lida
                    </Button>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>
        </main>

        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-around h-16 max-w-md mx-auto">
            <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-zinc-400">
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Início</span>
            </button>
            <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-zinc-400">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Cardápio</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-primary relative">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Ofertas</span>
              {unreadCount > 0 ? <div className="absolute top-2 right-2 size-2 bg-primary rounded-full ring-2 ring-white dark:ring-zinc-900" /> : null}
            </button>
            <button onClick={() => navigate('/perfil')} className="flex flex-col items-center gap-1 text-zinc-400">
              <span className="material-symbols-outlined">person</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Perfil</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Notificacoes;
