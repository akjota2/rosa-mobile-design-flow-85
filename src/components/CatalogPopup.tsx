
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, Heart, Lock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CatalogPopupProps {
  trigger: React.ReactNode;
}

export const CatalogPopup = ({ trigger }: CatalogPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 bg-white rounded-3xl border-0 shadow-2xl overflow-hidden">
        <div className="relative">
          {/* Header with close button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Você está pronto para
            </h2>
            <h3 className="text-2xl font-bold text-primary-500 mb-4">
              espiar
            </h3>
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              o Catálogo Secreto?
            </h4>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 mb-6">
              <p className="text-sm text-gray-600 mb-4">
                Acesso <span className="font-semibold text-primary-500">7x</span>
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Explore nossa seleção exclusiva de modelos e personalize seu pack personalizado.
              </p>

              {/* First profile card */}
              <div className="relative mb-4">
                <div 
                  className="w-full h-32 rounded-xl overflow-hidden relative"
                  style={{
                    backgroundImage: 'url(/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="absolute top-2 right-2">
                  <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    VIP
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock className="text-white" size={24} />
                </div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="font-semibold">Lari, 22</p>
                  <p className="text-xs flex items-center">
                    <span className="text-red-400 mr-1">❤️</span> Calça 35
                  </p>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Heart className="text-white" size={20} />
                </div>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl mb-4">
                ACESSO VIP
              </Button>

              {/* Second profile card */}
              <div className="relative">
                <div 
                  className="w-full h-32 rounded-xl overflow-hidden relative"
                  style={{
                    backgroundImage: 'url(/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock className="text-white" size={24} />
                </div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="font-semibold">Ju, 24</p>
                  <p className="text-xs flex items-center">
                    <span className="text-red-400 mr-1">❤️</span> Calça 37
                  </p>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Heart className="text-white" size={20} />
                </div>
              </div>

              <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-xl mt-4">
                VER DETALHES
              </Button>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl text-lg shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              QUERO VER O CATÁLOGO
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
