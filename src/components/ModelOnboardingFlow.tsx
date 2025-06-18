
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { User, Lock, EyeOff, DollarSign, Heart, Star, Shield, CheckCircle, Package, Clock, Camera } from 'lucide-react';

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
      icon: <User className="text-primary-500" size={48} />,
      title: "Crie seu Espaço Exclusivo",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Monte seu perfil como quiser. Nome fictício, descrição sensual e suas fotos.</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Você escolhe tudo. Aqui, você comanda.</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-green-700 font-medium">Perfil validado com segurança</span>
          </div>
        </div>
      ),
      buttonText: "Entendi"
    },
    
    // Popup 2 - Rede Privada
    {
      icon: <Lock className="text-primary-500" size={48} />,
      title: "Rede Privada. Só Entra Quem Paga.",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Sua vitrine é fechada. Só entra quem paga.</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Um único investimento de <span className="font-bold text-primary-600">R$ 31,90</span> desbloqueia tudo.</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Depois disso, <span className="font-bold">100% do lucro é seu.</span></span>
          </div>
          <div className="bg-gradient-to-r from-primary-50 to-pink-50 p-4 rounded-lg">
            <p className="text-primary-700 font-medium text-center">Sem mensalidade. Sem comissão. Sem censura.</p>
          </div>
        </div>
      ),
      buttonText: "Quero acesso"
    },

    // Popup 3 - Ganhe Sem Mostrar o Rosto
    {
      icon: <EyeOff className="text-primary-500" size={48} />,
      title: "Ganhe Sem Mostrar o Rosto",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 font-medium">Suas fotos, suas regras.</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Aqui você pode lucrar sem mostrar o rosto e com total privacidade.</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Seu conteúdo só aparece para quem pagar.</span>
          </div>
          <div className="flex items-center justify-center space-x-4 bg-gray-50 p-4 rounded-lg">
            <Camera className="text-gray-400" size={32} />
            <div className="text-center">
              <p className="text-gray-600 text-sm">100% Anônimo</p>
              <p className="text-primary-600 font-semibold">Sua Identidade Protegida</p>
            </div>
          </div>
        </div>
      ),
      buttonText: "Perfeito"
    },

    // Popup 4 - Você Decide Quanto Cobrar
    {
      icon: <DollarSign className="text-primary-500" size={48} />,
      title: "Você Decide Quanto Cobrar",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Você escolhe o valor das fotos e pacotes.</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">Packs personalizados, mimos e até pedidos únicos.</span>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 font-medium">Liberdade total de preço. Aqui, você lucra do seu jeito.</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <p className="text-green-600 font-bold text-lg">R$ 15</p>
              <p className="text-green-700 text-xs">Pack Básico</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <p className="text-blue-600 font-bold text-lg">R$ 45</p>
              <p className="text-blue-700 text-xs">Pack Premium</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg text-center">
              <p className="text-purple-600 font-bold text-lg">R$ 80</p>
              <p className="text-purple-700 text-xs">Pack VIP</p>
            </div>
          </div>
        </div>
      ),
      buttonText: "Entendi"
    },

    // Popup 5 - Depoimentos Reais
    {
      icon: <Heart className="text-primary-500" size={48} />,
      title: "Depoimentos Reais",
      content: (
        <div className="space-y-4">
          <div 
            className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg blur-[1px] relative"
            style={{ filter: 'blur(1px) brightness(0.9)' }}
          >
            <div className="space-y-3">
              <p className="text-green-700 font-medium">"Fiz R$ 280 em 3 dias só com 5 fotos."</p>
              <p className="text-green-600 text-sm">— Lara, 22</p>
            </div>
          </div>
          
          <div 
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg blur-[1px] relative"
            style={{ filter: 'blur(1px) brightness(0.9)' }}
          >
            <div className="space-y-3">
              <p className="text-blue-700 font-medium">"Nunca pensei que venderia sem mostrar o rosto."</p>
              <p className="text-blue-600 text-sm">— Bruna, 30</p>
            </div>
          </div>
          
          <div 
            className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg blur-[1px] relative"
            style={{ filter: 'blur(1px) brightness(0.9)' }}
          >
            <div className="space-y-3">
              <p className="text-purple-700 font-medium">"Liberdade, grana e zero julgamento."</p>
              <p className="text-purple-600 text-sm">— Naty, 25</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1">
              <Star className="text-yellow-400 fill-current" size={16} />
              <Star className="text-yellow-400 fill-current" size={16} />
              <Star className="text-yellow-400 fill-current" size={16} />
              <Star className="text-yellow-400 fill-current" size={16} />
              <Star className="text-yellow-400 fill-current" size={16} />
            </div>
            <p className="text-gray-600 text-sm mt-1">Depoimentos verificados</p>
          </div>
        </div>
      ),
      buttonText: "Quero também"
    },

    // Popup Final - Oferta Irresistível
    {
      icon: <Shield className="text-green-500" size={48} />,
      title: "Agora é com você.",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">R$ 31,90</div>
            <p className="text-gray-600">Pagamento único</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-gray-700">Acesso vitalício</span>
            </div>
            <div className="flex items-center space-x-3">
              <Lock className="text-green-500" size={20} />
              <span className="text-gray-700">0% de comissão</span>
            </div>
            <div className="flex items-center space-x-3">
              <Package className="text-green-500" size={20} />
              <span className="text-gray-700">Liberdade total de vendas</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-green-500" size={20} />
              <span className="text-gray-700">Suporte 24/7</span>
            </div>
            <div className="flex items-center space-x-3">
              <EyeOff className="text-green-500" size={20} />
              <span className="text-gray-700">Conteúdo anônimo e seguro</span>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Shield className="text-green-600" size={20} />
              <span className="text-green-700 font-semibold">Ambiente 100% Seguro e Verificado</span>
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
      <DialogContent className="max-w-md mx-auto bg-white rounded-3xl p-0 overflow-hidden border-0">
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
              {currentPopup.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
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
            className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 ${
              currentPopup.isFinal 
                ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white animate-pulse' 
                : 'bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white'
            }`}
          >
            {currentPopup.buttonText}
          </Button>

          {/* Progress dots */}
          {!currentPopup.isFinal && (
            <div className="flex justify-center mt-6 space-x-2">
              {popups.slice(0, 5).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= currentStep ? 'bg-primary-500' : 'bg-gray-300'
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
