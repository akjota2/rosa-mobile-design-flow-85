
import { Heart, Shield, Star, Award } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-16 px-4 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-rose-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/10 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-pink-500/5 to-rose-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo and main title */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-black text-white animate-fade-in">Foot Love</h3>
              <p className="text-rose-300 font-semibold">Premium Platform</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-lg mb-8 animate-fade-in delay-100 max-w-2xl mx-auto leading-relaxed">
            A plataforma que conecta admiradores e modelos de forma segura e exclusiva. 
            Transformando sonhos em realidade desde 2024.
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in delay-200">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">12k+</div>
            <div className="text-gray-400 text-sm">Modelos Ativas</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in delay-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-gray-400 text-sm">Seguro</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in delay-400">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">4.9</div>
            <div className="text-gray-400 text-sm">Avaliação</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in delay-500">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">50k+</div>
            <div className="text-gray-400 text-sm">Admiradores</div>
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-8 text-base mb-12 animate-fade-in delay-600">
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform relative group"
          >
            Termos de Uso
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform relative group"
          >
            Política de Privacidade
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform relative group"
          >
            Suporte 24/7
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a 
            href="#" 
            className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform relative group"
          >
            Contato VIP
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-700/50 animate-fade-in delay-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Foot Love. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Sistema Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
