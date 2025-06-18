
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Crown, Star, Zap, Shield, Sparkles, CheckCircle } from 'lucide-react';
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
      <DialogContent className="sm:max-w-md p-0 bg-white rounded-3xl border-0 shadow-2xl overflow-hidden [&>button]:hidden">
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-pink-50/30">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-100/40 to-primary-100/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary-100/30 to-pink-100/20 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="p-8 text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Crown className="text-white" size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Acesso{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600">
                VIP
              </span>
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-8">
              Desbloqueie todo o conteúdo exclusivo
            </h3>

            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-lg border border-white/60">
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-50 to-primary-50 rounded-xl flex items-center justify-center shadow-sm border border-pink-100/50">
                    <Star className="text-primary-500" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-medium">Acesso ilimitado</p>
                    <p className="text-gray-500 text-sm">Todas as modelos disponíveis</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-50 to-primary-50 rounded-xl flex items-center justify-center shadow-sm border border-pink-100/50">
                    <Shield className="text-primary-500" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-medium">Conteúdo exclusivo</p>
                    <p className="text-gray-500 text-sm">Material premium sem restrições</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-50 to-primary-50 rounded-xl flex items-center justify-center shadow-sm border border-pink-100/50">
                    <Sparkles className="text-primary-500" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-medium">Packs personalizados</p>
                    <p className="text-gray-500 text-sm">Conteúdo VIP exclusivo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl p-5 mb-6 shadow-lg border border-orange-200/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="text-white" size={16} />
                <p className="text-sm font-bold">OFERTA LIMITADA</p>
              </div>
              <p className="text-3xl font-black mb-1">70% OFF</p>
              <p className="text-sm opacity-90">Válido apenas nas próximas 24h</p>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 text-white font-bold py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
              onClick={handleClose}
            >
              QUERO O ACESSO VIP
            </Button>

            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <CheckCircle size={14} className="text-green-500" />
              <span>Pagamento 100% seguro • Cancelamento a qualquer momento</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
