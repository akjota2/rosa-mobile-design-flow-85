
import { useState, useEffect } from 'react';
import { Users, TrendingUp, DollarSign, Star } from 'lucide-react';

interface Notification {
  id: string;
  message: string;
  icon: React.ReactNode;
  timestamp: number;
}

const modelNames = [
  "Ana", "Beatriz", "Carla", "Diana", "Elena", "Fernanda", "Gabriela", 
  "Helena", "Isabela", "Julia", "Larissa", "Marina", "Nicole", "Paula"
];

const earnings = ["R$ 45", "R$ 78", "R$ 62", "R$ 89", "R$ 156", "R$ 234", "R$ 123"];

export const OnlineModelsCounter = () => {
  const [onlineCount, setOnlineCount] = useState(127);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Atualiza contador de modelos online
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + change;
        return Math.max(120, Math.min(150, newCount)); // Mantém entre 120-150
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Gera notificações periódicas
  useEffect(() => {
    const createNotification = () => {
      const randomName = modelNames[Math.floor(Math.random() * modelNames.length)];
      const randomEarning = earnings[Math.floor(Math.random() * earnings.length)];
      
      const notificationTypes = [
        {
          message: `${randomName} acabou de faturar ${randomEarning}`,
          icon: <DollarSign className="w-4 h-4 text-green-500" />
        },
        {
          message: `${randomName} vendeu uma foto premium`,
          icon: <Star className="w-4 h-4 text-yellow-500" />
        },
        {
          message: `${randomName} recebeu um novo pedido`,
          icon: <TrendingUp className="w-4 h-4 text-blue-500" />
        }
      ];

      const randomType = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
      
      const newNotification: Notification = {
        id: Date.now().toString(),
        message: randomType.message,
        icon: randomType.icon,
        timestamp: Date.now()
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 2)]); // Mantém máximo 3

      // Remove notificação após 4 segundos
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 4000);
    };

    // Primeira notificação após 2 segundos
    const initialTimeout = setTimeout(createNotification, 2000);
    
    // Notificações periódicas a cada 6-12 segundos
    const interval = setInterval(() => {
      createNotification();
    }, Math.random() * 6000 + 6000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Contador Principal */}
      <div className="fixed top-20 right-4 z-40">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Users className="w-5 h-5 text-pink-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900 transition-all duration-500">
                {onlineCount}
              </div>
              <div className="text-xs text-gray-600 leading-tight">
                modelos ativas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notificações */}
      <div className="fixed bottom-6 left-4 right-4 z-50 pointer-events-none">
        <div className="max-w-sm mx-auto space-y-2">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`
                bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 
                px-4 py-3 transform transition-all duration-500 ease-out
                animate-slide-up
                ${index > 0 ? 'opacity-70 scale-95' : ''}
              `}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {notification.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500">
                    agora mesmo
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
