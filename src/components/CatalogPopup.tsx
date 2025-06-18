
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface CatalogPopupProps {
  trigger: React.ReactNode;
}

export const CatalogPopup = ({ trigger }: CatalogPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleViewCatalog = () => {
    setIsOpen(false);
    navigate('/catalogo');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 bg-white rounded-3xl border-0 shadow-2xl overflow-hidden">
        <div className="relative bg-gradient-to-br from-gray-50 via-white to-pink-50">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary-200/20 to-primary-300/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-pink-200/20 to-purple-200/10 rounded-full blur-xl animate-pulse delay-1000"></div>

          {/* Header with close button */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <X size={18} className="text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 text-center relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-in">
              Você está pronto para
            </h2>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600 mb-4 animate-scale-in">
              espiar
            </h3>
            <h4 className="text-xl font-bold text-gray-900 mb-6 animate-fade-in delay-100">
              o Catálogo Secreto?
            </h4>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-white/50 animate-fade-in delay-200">
              <p className="text-sm text-gray-600 mb-2 font-semibold">
                Acesso <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600">7x</span>
              </p>
              <p className="text-xs text-gray-500 mb-6">
                Explore nossa seleção exclusiva de modelos e personalize seu pack personalizado.
              </p>

              {/* First profile card */}
              <div className="relative mb-4">
                <div 
                  className="w-full h-32 rounded-xl overflow-hidden relative shadow-lg"
                  style={{
                    backgroundImage: 'url(/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                    VIP
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Lock className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-bold text-lg drop-shadow-lg">Lari, 22</p>
                  <p className="text-sm flex items-center drop-shadow-lg">
                    <span className="text-red-400 mr-1">❤️</span> Calça 35
                  </p>
                </div>
              </div>

              {/* Second profile card */}
              <div className="relative">
                <div 
                  className="w-full h-32 rounded-xl overflow-hidden relative shadow-lg"
                  style={{
                    backgroundImage: 'url(/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Lock className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-bold text-lg drop-shadow-lg">Ju, 24</p>
                  <p className="text-sm flex items-center drop-shadow-lg">
                    <span className="text-red-400 mr-1">❤️</span> Calça 37
                  </p>
                </div>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white font-bold py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleViewCatalog}
            >
              QUERO VER O CATÁLOGO
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
