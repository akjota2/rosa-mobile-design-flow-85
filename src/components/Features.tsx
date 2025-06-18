
export const Features = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Para quem busca
        </h2>
        <h3 className="text-2xl font-bold text-primary-500 mb-2">
          beleza
        </h3>
        <h4 className="text-xl font-bold text-gray-900 mb-12">
          fora do comum.
        </h4>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">📱</span>
            </div>
            <div className="text-left">
              <h5 className="font-bold text-gray-900 mb-2">Conteúdo Exclusivo</h5>
              <p className="text-gray-600 text-sm">
                Packs de fotos e vídeos exclusivos para saciar sua curiosidade, com uma variedade de modelos belíssimas!
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">🔒</span>
            </div>
            <div className="text-left">
              <h5 className="font-bold text-gray-900 mb-2">Privacidade Garantida</h5>
              <p className="text-gray-600 text-sm">
                Sua privacidade é nossa prioridade, garantindo discrição e segurança em todas as transações.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl">⭐</span>
            </div>
            <div className="text-left">
              <h5 className="font-bold text-gray-900 mb-2">Qualidade Superior</h5>
              <p className="text-gray-600 text-sm">
                Cada modelo é escolhida para garantir qualidade e beleza no nosso catálogo exclusivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
