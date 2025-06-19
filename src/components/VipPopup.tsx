
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Crown, Zap, CheckCircle, X, DollarSign, Users, Camera, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VipPopupProps {
  trigger: React.ReactNode;
  autoOpen?: boolean;
  onClose?: () => void;
}

export const VipPopup = ({ trigger, autoOpen = false, onClose }: VipPopupProps) => {
  const [isOpen, setIsOpen] = useState(autoOpen);

  useEffect(() => {
    if (autoOpen) {
      setIsOpen(true);
    }
  }, [autoOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open && onClose) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {!autoOpen && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-md max-w-[95vw] max-h-[95vh] p-0 bg-white rounded-2xl sm:rounded-3xl border-0 shadow-2xl overflow-hidden [&>button]:hidden">
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-pink-50/30 max-h-[95vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <X size={16} className="text-gray-600 sm:w-5 sm:h-5" />
          </button>

          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-100/40 to-primary-100/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tl from-primary-100/30 to-pink-100/20 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="p-4 sm:p-8 text-center relative z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6 shadow-xl">
              <Crown className="text-white" size={24} />
            </div>

            <h2 className="text-sm sm:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">
              Para finalizar o cadastro, adquira:
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
              Acesso{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600">
                VIP
              </span>
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-8">
              Desbloqueie todo o conteúdo exclusivo
            </h4>

            <div className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 mb-4 sm:mb-6 shadow-lg border border-white/60">
              <div className="space-y-3 sm:space-y-5">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-50 to-primary-50 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm border border-pink-100/50 flex-shrink-0">
                    <DollarSign className="text-primary-500" size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Acesso Ilimitado ao Seu Lucro</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Você decide quanto cobrar, quando postar e o que mostrar. Liberdade total</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-50 to-primary-50 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm border border-pink-100/50 flex-shrink-0">
                    <Users className="text-primary-500" size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Área VIP com Ganhos Maiores</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Desbloqueie um grupo fechado de clientes premium que pagam mais por acesso exclusivo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-50 to-primary-50 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm border border-pink-100/50 flex-shrink-0">
                    <Camera className="text-primary-500" size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Venda de Conteúdo Exclusivo</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Transforme cada foto ou vídeo em renda. Crie e ganhe com o que é só seu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-50 to-primary-50 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm border border-pink-100/50 flex-shrink-0">
                    <Settings className="text-primary-500" size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-medium text-sm sm:text-base">Material Premium, Você no Controle</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Ofereça fotos e vídeos diferenciados — com preços que você mesma define</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-pink-600 text-white rounded-xl sm:rounded-2xl p-3 sm:p-5 mb-3 sm:mb-4 shadow-lg border border-primary-200/20">
              <div className="flex items-center justify-center space-x-2 mb-1 sm:mb-2">
                <Zap className="text-white" size={14} />
                <p className="text-xs sm:text-sm font-bold">OFERTA LIMITADA</p>
              </div>
              <p className="text-2xl sm:text-3xl font-black mb-1">70% OFF</p>
              <p className="text-xs sm:text-sm opacity-90">Válido apenas nas próximas 24h</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center space-x-2 mb-1 sm:mb-2">
                <Crown className="text-primary-500" size={14} />
                <p className="text-base sm:text-lg font-bold text-gray-800">Acesso VIP</p>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-primary-600 mb-1">R$ 24,90</p>
              <p className="text-xs sm:text-sm text-gray-600">Valor promocional</p>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 text-white font-bold py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-3 sm:mb-4"
              onClick={handleClose}
            >
              QUERO O ACESSO VIP
            </Button>

            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <CheckCircle size={12} className="text-green-500" />
              <span>Pagamento 100% seguro • Cancelamento a qualquer momento</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
