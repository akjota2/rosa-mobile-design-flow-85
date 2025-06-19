
export const Hero = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary-200/40 to-pink-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-tl from-purple-200/30 to-primary-200/40 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-300/20 to-primary-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="relative max-w-md mx-auto text-center z-10">
        {/* Copy agressiva inspirada na imagem */}
        <div className="mb-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-white/50">
          {/* Ícone de coração como na imagem */}
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
            Descubra o <span className="text-pink-500 font-extrabold">Dinheiro</span> que
            <br />você procura
          </h1>
          
          <p className="text-gray-600 text-sm mb-4">
            ou <span className="text-pink-500 font-semibold">Ganhe</span> com o interesse que eles têm.
          </p>
          
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-4 mb-4">
            <p className="font-bold text-lg mb-2">💰 PARE DE DESPERDIÇAR SEU POTENCIAL!</p>
            <p className="text-sm font-medium">
              Milhares de mulheres já estão faturando R$ 3.000+ por mês vendendo fotos dos pés!
            </p>
          </div>
          
          <div className="space-y-2 text-left">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <p className="text-sm font-medium text-gray-700">✨ Sem mostrar o rosto</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <p className="text-sm font-medium text-gray-700">🏠 Trabalhe de casa</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <p className="text-sm font-medium text-gray-700">💸 Ganhe até R$ 500 por foto</p>
            </div>
          </div>
        </div>

        {/* Vídeo */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 animate-fade-in delay-200 border border-white/50">
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl mb-6 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-3 text-white text-sm border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-medium">0:00 / 0:30</span>
                  <div className="flex space-x-3">
                    <button className="hover:text-primary-300 transition-colors transform hover:scale-110">🔊</button>
                    <button className="hover:text-primary-300 transition-colors transform hover:scale-110">⛶</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
