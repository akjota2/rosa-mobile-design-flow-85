
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Crown, Zap, CheckCircle, X, Users, Camera } from 'lucide-react';
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

  const handleFinalizeCadastro = () => {
    window.open('https://go.tribopay.com.br/cqfzf?affh=bxz41om8lj', '_blank');
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {!autoOpen && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-md max-w-[90vw] max-h-[90vh] p-0 bg-white rounded-2xl border-0 shadow-2xl overflow-hidden [&>button]:hidden">
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-pink-50/30 max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <X size={14} className="text-gray-600" />
          </button>

          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-100/40 to-primary-100/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-tl from-primary-100/30 to-pink-100/20 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="p-4 sm:p-6 text-center relative z-10">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl">
              <Crown className="text-white" size={20} />
            </div>

            <h2 className="text-sm sm:text-base font-semibold text-gray-700 mb-1">
              Para finalizar o cadastro, adquira:
            </h2>

            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              Acesso{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600">
                VIP
              </span>
            </h3>
            <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-4 sm:mb-6">
              Desbloqueie todo o conteúdo exclusivo
            </h4>

            <div className="bg-white/80 backdrop-blur-md rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 shadow-lg border border-white/60">
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-50 to-primary-50 rounded-lg flex items-center justify-center shadow-sm border border-pink-100/50 flex-shrink-0">
                    <Users className="text-primary-500" size={14} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-medium text-xs sm:text-sm">Área VIP com Ganhos Maiores</p>
                    <p className="text-gray-500 text-xs">Grupo fechado de clientes premium</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-50 to-primary-50 rounded-lg flex items-center justify-center shadow-sm border border-pink-100/50 flex-shrink-0">
                    <Camera className="text-primary-500" size={14} />
                  </div>
                  <div className="text-left">
                    <p className="text-gray-800 font-medium text-xs sm:text-sm">Venda de Conteúdo Exclusivo</p>
                    <p className="text-gray-500 text-xs">Transforme cada foto em renda</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-500 to-pink-600 text-white rounded-xl p-3 mb-3 shadow-lg border border-primary-200/20">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Zap className="text-white" size={12} />
                <p className="text-xs font-bold">OFERTA LIMITADA</p>
              </div>
              <p className="text-xl sm:text-2xl font-black mb-1">70% OFF</p>
              <p className="text-xs opacity-90">Válido apenas nas próximas 24h</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 mb-4 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Crown className="text-primary-500" size={12} />
                <p className="text-sm sm:text-base font-bold text-gray-800">Acesso VIP</p>
              </div>
              <p className="text-xl sm:text-2xl font-black text-primary-600 mb-1">R$ 24,90</p>
              <p className="text-xs text-gray-600">Valor promocional</p>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 text-white font-bold py-3 rounded-xl text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-3"
              onClick={handleFinalizeCadastro}
            >
              FINALIZAR CADASTRO
            </Button>

            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <CheckCircle size={10} className="text-green-500" />
              <span>Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
