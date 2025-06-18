
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, Crown, Star, Zap } from 'lucide-react';
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {!autoOpen && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-md p-0 bg-white rounded-3xl border-0 shadow-2xl overflow-hidden">
        <div className="relative bg-gradient-to-br from-orange-50 via-white to-yellow-50">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-200/30 to-yellow-200/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-orange-300/20 to-red-200/10 rounded-full blur-xl animate-pulse delay-1000"></div>

          {/* Header with close button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleClose}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <X size={18} className="text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-scale-in">
              <Crown className="text-white" size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in">
              Acesso{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                VIP
              </span>
            </h2>
            <h3 className="text-xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
              Desbloqueie todo o conteúdo!
            </h3>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-white/50 animate-fade-in delay-200">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center shadow-md">
                    <Star className="text-orange-500" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium text-left">Acesso ilimitado a todas as modelos</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center shadow-md">
                    <Zap className="text-orange-500" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium text-left">Conteúdo exclusivo sem censura</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center shadow-md">
                    <Crown className="text-orange-500" size={20} />
                  </div>
                  <span className="text-gray-700 font-medium text-left">Packs personalizados VIP</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-4 mb-6 shadow-lg">
              <p className="text-sm font-bold mb-1">🔥 OFERTA LIMITADA</p>
              <p className="text-2xl font-black">70% OFF</p>
              <p className="text-xs opacity-90">Apenas nas próximas 24h</p>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
              onClick={handleClose}
            >
              💎 QUERO O ACESSO VIP
            </Button>

            <p className="text-xs text-gray-500">
              Pagamento 100% seguro • Cancelamento a qualquer momento
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
