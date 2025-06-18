
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, Lock, Eye, Star, Zap, Sparkles } from 'lucide-react';
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
        <div className="relative" style={{ backgroundColor: '#FF69B4' }}>
          {/* Sophisticated background decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-0 left-1/3 w-28 h-28 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-12 right-20 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 left-12 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-8 w-3 h-3 bg-white/25 rounded-full animate-bounce delay-300"></div>

          {/* Header with elegant close button */}
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={() => setIsOpen(false)}
              className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 border border-white/20 group"
            >
              <X size={20} className="text-white group-hover:text-white/80 transition-colors duration-300" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 text-center relative z-10">
            {/* Elegant header with sophisticated typography */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl animate-scale-in border border-white/30">
                  <Eye className="text-white" size={28} />
                </div>
              </div>
              
              <h2 className="text-2xl font-light text-white mb-2 animate-fade-in">
                Você está pronto para
              </h2>
              <h3 className="text-4xl font-bold text-white mb-2 animate-scale-in tracking-wide">
                espiar
              </h3>
              <h4 className="text-2xl font-light text-white/90 mb-2 animate-fade-in delay-100">
                o Catálogo
              </h4>
              <h5 className="text-3xl font-bold text-white animate-scale-in delay-200">
                Secreto?
              </h5>
              
              {/* Decorative elements around title */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <Star className="text-white/60" size={16} />
                <Sparkles className="text-white/60" size={20} />
                <Star className="text-white/60" size={16} />
              </div>
            </div>

            {/* Enhanced access info card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 mb-6 shadow-2xl border border-white/20 animate-fade-in delay-200">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Zap className="text-white" size={18} />
                <p className="text-lg font-bold text-white">
                  Acesso <span className="text-white/90">7x</span>
                </p>
                <Zap className="text-white" size={18} />
              </div>
              <p className="text-sm text-white/80 mb-8 font-light">
                Explore nossa seleção exclusiva de modelos e personalize seu pack personalizado.
              </p>

              <div className="space-y-4">
                {/* First profile card with enhanced design */}
                <div className="relative">
                  <div 
                    className="w-full h-36 rounded-2xl overflow-hidden relative shadow-2xl border border-white/10"
                    style={{
                      backgroundImage: 'url(/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(8px)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-xl flex items-center space-x-1 border border-white/30">
                      <Star size={12} />
                      <span>VIP</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/15 backdrop-blur-sm rounded-full p-4 border border-white/20">
                      <Lock className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg drop-shadow-2xl">Lari, 22</p>
                    <p className="text-sm flex items-center drop-shadow-2xl">
                      <span className="text-white/80 mr-1">♥</span> Calça 35
                    </p>
                  </div>
                </div>

                {/* Second profile card with enhanced design */}
                <div className="relative">
                  <div 
                    className="w-full h-36 rounded-2xl overflow-hidden relative shadow-2xl border border-white/10"
                    style={{
                      backgroundImage: 'url(/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'blur(8px)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/15 backdrop-blur-sm rounded-full p-4 border border-white/20">
                      <Lock className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg drop-shadow-2xl">Ju, 24</p>
                    <p className="text-sm flex items-center drop-shadow-2xl">
                      <span className="text-white/80 mr-1">♥</span> Calça 37
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA button */}
            <Button 
              className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 rounded-2xl text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-white/30"
              onClick={handleViewCatalog}
            >
              <Eye className="mr-2" size={20} />
              QUERO VER O CATÁLOGO
            </Button>
            
            {/* Decorative bottom elements */}
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
