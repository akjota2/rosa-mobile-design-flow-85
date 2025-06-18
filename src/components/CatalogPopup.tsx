
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Eye, Lock, Star, Zap, Sparkles, X } from 'lucide-react';
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 bg-white rounded-3xl border-0 shadow-2xl overflow-hidden">
        <div className="relative bg-gradient-to-br from-gray-50 to-white">
          {/* Subtle background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-pink-50/40 rounded-full blur-2xl"></div>
          
          {/* Floating pink accent dots */}
          <div className="absolute top-12 right-20 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-32 left-12 w-1.5 h-1.5 bg-pink-300/50 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-8 w-2.5 h-2.5 bg-pink-500/40 rounded-full animate-pulse delay-300"></div>

          {/* Custom close button positioned lower */}
          <div className="absolute top-12 right-6 z-20">
            <button
              onClick={handleClose}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg border border-gray-200/50 group"
            >
              <X size={18} className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 text-center relative z-10">
            {/* Minimalist header */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center border border-gray-100">
                  <Eye className="text-pink-500" size={28} />
                </div>
              </div>
              
              <h2 className="text-2xl font-light text-gray-800 mb-2">
                Você está pronto para
              </h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-2 tracking-wide">
                espiar
              </h3>
              <h4 className="text-2xl font-light text-gray-700 mb-2">
                o Catálogo
              </h4>
              <h5 className="text-3xl font-bold text-pink-500">
                Secreto?
              </h5>
              
              {/* Minimalist decorative elements */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                <Sparkles className="text-pink-400" size={16} />
                <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
              </div>
            </div>

            {/* Clean access info card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <Zap className="text-pink-500" size={14} />
                </div>
                <p className="text-lg font-bold text-gray-800">
                  Acesso <span className="text-pink-500">7x</span>
                </p>
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <Zap className="text-pink-500" size={14} />
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-8 font-light">
                Explore nossa seleção exclusiva de modelos e personalize seu pack personalizado.
              </p>

              <div className="space-y-4">
                {/* First profile card with clean design */}
                <div className="relative">
                  <div 
                    className="w-full h-36 rounded-xl overflow-hidden relative shadow-md border border-gray-200"
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
                    <div className="bg-pink-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-lg flex items-center space-x-1">
                      <Star size={10} />
                      <span>VIP</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-gray-200">
                      <Lock className="text-pink-500" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-bold text-lg drop-shadow-lg">Lari, 22</p>
                    <p className="text-sm flex items-center drop-shadow-lg">
                      <span className="text-pink-300 mr-1">♥</span> Calça 35
                    </p>
                  </div>
                </div>

                {/* Second profile card with clean design */}
                <div className="relative">
                  <div 
                    className="w-full h-36 rounded-xl overflow-hidden relative shadow-md border border-gray-200"
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
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-gray-200">
                      <Lock className="text-pink-500" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-bold text-lg drop-shadow-lg">Ju, 24</p>
                    <p className="text-sm flex items-center drop-shadow-lg">
                      <span className="text-pink-300 mr-1">♥</span> Calça 37
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean CTA button with pink accent */}
            <Button 
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={handleViewCatalog}
            >
              <Eye className="mr-2" size={20} />
              QUERO VER O CATÁLOGO
            </Button>
            
            {/* Minimalist bottom decoration */}
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
