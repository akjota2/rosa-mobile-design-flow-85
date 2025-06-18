
export const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white py-8 px-4">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Foot Love</h3>
        <p className="text-primary-100 text-sm mb-6">
          A plataforma que conecta admiradores e modelos de forma segura e exclusiva.
        </p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="text-primary-100 hover:text-white transition-colors">Termos</a>
          <a href="#" className="text-primary-100 hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="text-primary-100 hover:text-white transition-colors">Contato</a>
        </div>
        <div className="mt-6 pt-6 border-t border-primary-400">
          <p className="text-primary-200 text-xs">
            © 2024 Foot Love. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
