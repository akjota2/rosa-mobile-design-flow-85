
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { User, Lock, EyeOff, DollarSign, Heart, Star, Shield, CheckCircle, Package, Clock, Camera, FileText, MessageCircle } from 'lucide-react';

interface ModelOnboardingFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModelOnboardingFlow = ({ isOpen, onClose }: ModelOnboardingFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step - handle payment/conversion
      console.log('Redirecting to payment...');
      onClose();
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    onClose();
  };

  const popups = [
    // Popup 1 - Crie seu Espaço Exclusivo
    {
      icon: <User className="text-white" size={32} />,
      iconBg: "from-primary-500 to-pink-500",
      title: "Crie seu Espaço Exclusivo",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Monte seu perfil como quiser. Nome fictício, descrição sensual e suas fotos.</span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Você escolhe tudo. Aqui, você comanda.</span>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
            <CheckCircle className="text-green-500" size={24} />
            <span className="text-green-700 font-semibold">Perfil validado com segurança</span>
          </div>
        </div>
      ),
      buttonText: "Entendi"
    },
    
    // Popup 2 - Rede Privada
    {
      icon: <Lock className="text-white" size={32} />,
      iconBg: "from-primary-500 to-pink-500",
      title: "Rede Privada. Só Entra Quem Paga.",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Sua vitrine é fechada. Só entra quem paga.</span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Um único investimento de <span className="font-bold text-primary-600 text-lg">R$ 31,90</span> desbloqueia tudo.</span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Depois disso, <span className="font-bold text-green-600">100% do lucro é seu.</span></span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary-50 to-pink-50 p-5 rounded-xl border border-primary-200">
            <p className="text-primary-700 font-bold text-center text-lg">Sem mensalidade. Sem comissão. Sem censura.</p>
          </div>
        </div>
      ),
      buttonText: "Quero acesso"
    },

    // Popup 3 - Ganhe Sem Mostrar o Rosto
    {
      icon: <EyeOff className="text-white" size={32} />,
      iconBg: "from-primary-500 to-pink-500",
      title: "Ganhe Sem Mostrar o Rosto",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-bold text-lg">Suas fotos, suas regras.</span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Aqui você pode lucrar sem mostrar o rosto e com total privacidade.</span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Seu conteúdo só aparece para quem pagar.</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border">
            <Camera className="text-gray-400" size={40} />
            <div className="text-center">
              <p className="text-gray-600 text-sm">100% Anônimo</p>
              <p className="text-primary-600 font-bold text-lg">Sua Identidade Protegida</p>
            </div>
          </div>
        </div>
      ),
      buttonText: "Perfeito"
    },

    // Popup 4 - Você Decide Quanto Cobrar
    {
      icon: <DollarSign className="text-white" size={32} />,
      iconBg: "from-green-500 to-emerald-500",
      title: "Você Decide Quanto Cobrar",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Você escolhe o valor das fotos e pacotes.</span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-medium">Packs personalizados, mimos e até pedidos únicos.</span>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <span className="text-gray-700 font-bold">Liberdade total de preço. Aqui, você lucra do seu jeito.</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center border border-green-200 transform hover:scale-105 transition-transform">
              <p className="text-green-600 font-bold text-xl">R$ 15</p>
              <p className="text-green-700 text-sm font-medium">Pack Básico</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center border border-blue-200 transform hover:scale-105 transition-transform">
              <p className="text-blue-600 font-bold text-xl">R$ 45</p>
              <p className="text-blue-700 text-sm font-medium">Pack Premium</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center border border-purple-200 transform hover:scale-105 transition-transform">
              <p className="text-purple-600 font-bold text-xl">R$ 80</p>
              <p className="text-purple-700 text-sm font-medium">Pack VIP</p>
            </div>
          </div>
        </div>
      ),
      buttonText: "Entendi"
    },

    // Popup 5 - Ganhos Reais (Chat simulado)
    {
      icon: <Heart className="text-white" size={32} />,
      iconBg: "from-pink-500 to-red-500",
      title: "Ganhos Reais",
      content: (
        <div className="space-y-4">
          <p className="text-center text-gray-600 text-sm mb-4">
            Exemplo de resultado de uma modelo <span className="font-semibold text-primary-600">@alessandravid_</span>
          </p>
          
          {/* Chat simulado */}
          <div className="bg-gray-900 rounded-2xl p-4 space-y-3 max-h-80 overflow-y-auto">
            {/* Comprovante PDF */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 bg-gray-800 p-3 rounded-lg">
                  <FileText className="text-red-400" size={20} />
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">Comprovante_12-06-2025_19</p>
                    <p className="text-gray-400 text-xs">1 página • 38 KB • pdf</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1">19:54</p>
              </div>
            </div>

            {/* Mensagem 1 */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
              <div className="flex-1">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-white text-sm">Desculpa a demora meu anjo💖</p>
                </div>
                <p className="text-xs text-gray-400 mt-1">19:54</p>
              </div>
            </div>

            {/* Mensagem 2 */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
              <div className="flex-1">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <p className="text-white text-sm">Cheguei em casa agora, vou já olhar todas suas fotos 👣 😘</p>
                </div>
                <p className="text-xs text-gray-400 mt-1">19:55</p>
              </div>
            </div>

            {/* Mensagem de ganho destacada */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-xl text-center animate-pulse">
              <p className="text-white font-bold text-lg">R$ 280 em 3 dias!</p>
              <p className="text-green-100 text-sm">Apenas com conteúdo dos pés</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Star className="text-yellow-400 fill-current" size={18} />
              <Star className="text-yellow-400 fill-current" size={18} />
              <Star className="text-yellow-400 fill-current" size={18} />
              <Star className="text-yellow-400 fill-current" size={18} />
              <Star className="text-yellow-400 fill-current" size={18} />
            </div>
            <p className="text-gray-600 text-sm font-medium">Resultado real verificado</p>
          </div>
        </div>
      ),
      buttonText: "Quero também"
    },

    // Popup Final - Oferta Irresistível
    {
      icon: <Shield className="text-white" size={32} />,
      iconBg: "from-green-500 to-emerald-500",
      title: "Agora é com você.",
      content: (
        <div className="space-y-6">
          <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
            <div className="text-5xl font-bold text-green-600 mb-2">R$ 31,90</div>
            <p className="text-green-700 font-semibold text-lg">Pagamento único</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
              <span className="text-gray-700 font-medium">Acesso vitalício</span>
            </div>
            <div className="flex items-center space-x-4">
              <Lock className="text-green-500 flex-shrink-0" size={24} />
              <span className="text-gray-700 font-medium">0% de comissão</span>
            </div>
            <div className="flex items-center space-x-4">
              <Package className="text-green-500 flex-shrink-0" size={24} />
              <span className="text-gray-700 font-medium">Liberdade total de vendas</span>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="text-green-500 flex-shrink-0" size={24} />
              <span className="text-gray-700 font-medium">Suporte 24/7</span>
            </div>
            <div className="flex items-center space-x-4">
              <EyeOff className="text-green-500 flex-shrink-0" size={24} />
              <span className="text-gray-700 font-medium">Conteúdo anônimo e seguro</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl text-center border-2 border-green-200">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Shield className="text-green-600" size={24} />
              <span className="text-green-700 font-bold text-lg">Ambiente 100% Seguro e Verificado</span>
            </div>
          </div>
        </div>
      ),
      buttonText: "LUCRAR AGORA",
      isFinal: true
    }
  ];

  const currentPopup = popups[currentStep];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-3xl p-0 overflow-hidden border-0 shadow-2xl">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className={`w-24 h-24 bg-gradient-to-br ${currentPopup.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in shadow-lg`}>
              {currentPopup.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {currentPopup.title}
            </h2>
          </div>

          {/* Content */}
          <div className="mb-8 animate-fade-in">
            {currentPopup.content}
          </div>

          {/* Button */}
          <Button
            onClick={nextStep}
            className={`w-full py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 ${
              currentPopup.isFinal 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white animate-pulse' 
                : 'bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white'
            }`}
          >
            {currentPopup.buttonText}
          </Button>

          {/* Progress dots */}
          {!currentPopup.isFinal && (
            <div className="flex justify-center mt-6 space-x-3">
              {popups.slice(0, 5).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index <= currentStep 
                      ? 'bg-gradient-to-r from-primary-500 to-pink-500 scale-110' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
