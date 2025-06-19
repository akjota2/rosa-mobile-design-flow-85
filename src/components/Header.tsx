
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 backdrop-blur-lg border-b border-rose-300/30 sticky top-0 z-50 shadow-xl">
      <div className="max-w-lg mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/89afa40b-8faa-4377-af1f-3020ca533d2f.png" 
                  alt="FootLove" 
                  className="h-12 w-auto animate-scale-in group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-bold text-lg tracking-wide">FootLove</h1>
                <p className="text-rose-100 text-xs">Premium Platform</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-110 text-white shadow-lg hover:shadow-xl"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="mt-6 pb-6 border-t border-white/30 pt-6 animate-fade-in">
            <nav className="space-y-3">
              <a 
                href="#" 
                className="block px-6 py-4 text-white hover:text-white hover:bg-white/20 rounded-2xl transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
              >
                🏠 Início
              </a>
              <a 
                href="#" 
                className="block px-6 py-4 text-white hover:text-white hover:bg-white/20 rounded-2xl transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
              >
                👑 Modelos VIP
              </a>
              <a 
                href="#" 
                className="block px-6 py-4 text-white hover:text-white hover:bg-white/20 rounded-2xl transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
              >
                💝 Admiradores
              </a>
              <a 
                href="#" 
                className="block px-6 py-4 text-white hover:text-white hover:bg-white/20 rounded-2xl transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
              >
                ❓ FAQ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
