
import { PriceSlider } from './PriceSlider';

export const Hero = () => {
  return (
    <section className="relative py-8 md:py-16 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary-200/40 to-pink-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-tl from-purple-200/30 to-primary-200/40 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-300/20 to-primary-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="relative max-w-sm mx-auto text-center z-10">
        {/* Main content card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6 border border-gray-100">
          {/* Heart icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          
          {/* Main headline */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
            Já são <span className="text-pink-500 font-extrabold">+12 mil mulheres</span>
          </h1>
          <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
            lucrando<br />
            com fotos simples e<br />
            anônimas.
          </h2>
          
          {/* Subtitle */}
          <p className="text-pink-500 font-semibold text-base mb-8">
            Você posta. Eles pagam. O dinheiro cai.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-gray-900">12k+</div>
              <div className="text-sm text-gray-600">Modelos</div>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-xl font-bold text-gray-900">R$ 2M+</div>
              <div className="text-sm text-gray-600">Pagos</div>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Seguro</div>
            </div>
          </div>
        </div>

        {/* Enhanced Video section */}
        <div className="relative bg-gradient-to-br from-white via-pink-50/30 to-primary-50/20 rounded-3xl shadow-2xl p-8 border border-gradient-to-r from-pink-100 to-primary-100 mb-6 backdrop-blur-sm">
          {/* Premium badge */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-pink-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg border-2 border-white">
              ✨ EXCLUSIVO
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-300/40 to-primary-300/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-tl from-primary-300/40 to-pink-300/30 rounded-full blur-sm"></div>

          <div className="relative z-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              🎥 Como Começar Hoje Mesmo
            </h3>
            
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl mb-6 relative overflow-hidden shadow-2xl border-4 border-white">
              {/* Video overlay with play button */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              <video 
                className="w-full h-full object-cover rounded-2xl"
                controls
                preload="metadata"
                poster=""
              >
                <source src="https://itslovefoot.space/wp-content/uploads/2025/06/VSLFOOT.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
            
            {/* Enhanced call to action */}
            <div className="bg-gradient-to-r from-pink-500/10 via-primary-500/10 to-pink-500/10 rounded-xl p-4 border border-pink-200/50 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 text-gray-700 text-sm mb-2">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="font-semibold">Descubra o segredo das +12 mil mulheres</span>
                <svg className="w-5 h-5 text-pink-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <p className="text-xs text-gray-600 text-center">
                ⚡ <strong>Método exclusivo</strong> • 💰 <strong>Primeiros ganhos em até 24h</strong> • 🔒 <strong>100% Anônimo</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Price Slider */}
        <PriceSlider />
      </div>
    </section>
  );
};
