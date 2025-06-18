
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/89afa40b-8faa-4377-af1f-3020ca533d2f.png" alt="FootLove" className="h-8 w-auto" />
          </div>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <nav className="space-y-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors">Início</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors">Modelos</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors">Admiradores</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary-500 transition-colors">FAQ</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
