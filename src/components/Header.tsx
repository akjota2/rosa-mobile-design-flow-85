
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/89afa40b-8faa-4377-af1f-3020ca533d2f.png" 
              alt="FootLove" 
              className="h-10 w-auto animate-scale-in"
            />
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-pink-50 transition-all duration-300 transform hover:scale-105"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="mt-6 pb-6 border-t border-gray-200/50 pt-6 animate-fade-in">
            <nav className="space-y-4">
              <a 
                href="#" 
                className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gradient-to-r hover:from-primary-50 hover:to-pink-50 rounded-xl transition-all duration-300 font-medium"
              >
                Início
              </a>
              <a 
                href="#" 
                className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gradient-to-r hover:from-primary-50 hover:to-pink-50 rounded-xl transition-all duration-300 font-medium"
              >
                Modelos
              </a>
              <a 
                href="#" 
                className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gradient-to-r hover:from-primary-50 hover:to-pink-50 rounded-xl transition-all duration-300 font-medium"
              >
                Admiradores
              </a>
              <a 
                href="#" 
                className="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-gradient-to-r hover:from-primary-50 hover:to-pink-50 rounded-xl transition-all duration-300 font-medium"
              >
                FAQ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
