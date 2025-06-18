
export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-500 via-primary-600 to-pink-600 text-white py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-md mx-auto text-center relative z-10">
        <h3 className="text-3xl font-bold mb-6 animate-fade-in">Foot Love</h3>
        <p className="text-primary-100 text-base mb-8 animate-fade-in delay-100">
          A plataforma que conecta admiradores e modelos de forma segura e exclusiva.
        </p>
        <div className="flex justify-center space-x-8 text-sm mb-8 animate-fade-in delay-200">
          <a 
            href="#" 
            className="text-primary-100 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform"
          >
            Termos
          </a>
          <a 
            href="#" 
            className="text-primary-100 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform"
          >
            Privacidade
          </a>
          <a 
            href="#" 
            className="text-primary-100 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform"
          >
            Contato
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-400/30 animate-fade-in delay-300">
          <p className="text-primary-200 text-sm">
            © 2024 Foot Love. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
