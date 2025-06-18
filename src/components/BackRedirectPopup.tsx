
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Eye, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackRedirectPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BackRedirectPopup = ({ isOpen, onClose }: BackRedirectPopupProps) => {
  const handleAdmirarClick = () => {
    window.open('https://go.tribopay.com.br/bzchf?affh=8df2kbrof0', '_blank');
    onClose();
  };

  const handleModeloClick = () => {
    window.open('https://go.tribopay.com.br/cqfzf?affh=bxz41om8lj', '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 bg-white rounded-3xl border-0 shadow-2xl overflow-hidden [&>button]:hidden">
        <div className="relative bg-gradient-to-br from-slate-50 via-white to-pink-50/30">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <X size={20} className="text-gray-600" />
          </button>

          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-100/40 to-primary-100/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary-100/30 to-pink-100/20 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="p-8 text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Eye className="text-white" size={32} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Escolha sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600">
                experiência
              </span>
            </h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-8">
              O que você gostaria de fazer?
            </h3>

            <div className="space-y-4">
              <Button 
                onClick={handleAdmirarClick}
                className="w-full bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 text-white font-bold py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Eye size={20} />
                <span>QUERO ADMIRAR</span>
              </Button>

              <Button 
                onClick={handleModeloClick}
                variant="outline"
                className="w-full border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <User size={20} />
                <span>QUERO SER MODELO</span>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mt-6">
              <span>Escolha a opção que melhor se adapta ao seu perfil</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
