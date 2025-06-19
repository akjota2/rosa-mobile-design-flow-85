
export const Hero = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-rose-50">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-rose-300/30 to-pink-300/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-tl from-purple-300/25 to-rose-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-300/20 to-rose-400/25 rounded-full blur-lg animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-bl from-rose-200/30 to-pink-200/20 rounded-full blur-xl animate-pulse delay-700"></div>
      
      <div className="relative max-w-lg mx-auto text-center z-10">
        {/* Enhanced main content card */}
        <div className="mb-8 md:mb-10 bg-white/95 backdrop-blur-lg rounded-3xl md:rounded-[2rem] shadow-2xl p-6 md:p-8 border border-white/60 transform hover:scale-[1.02] transition-all duration-500">
          {/* Enhanced heart icon */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce-gentle">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4 leading-tight tracking-tight">
            Já são <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 font-extrabold animate-pulse">+12 mil mulheres</span> lucrando
            <br />com fotos simples e anônimas.
          </h1>
          
          <p className="text-gray-700 text-base md:text-lg mb-4 font-medium">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 font-bold">Você posta. Eles pagam. O dinheiro cai.</span>
          </p>

          {/* Stats badges */}
          <div className="flex justify-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full px-4 py-2 animate-fade-in">
              <span className="text-green-700 font-bold text-sm">+R$ 50k/mês</span>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-full px-4 py-2 animate-fade-in delay-200">
              <span className="text-blue-700 font-bold text-sm">100% Seguro</span>
            </div>
          </div>
        </div>

        {/* Enhanced video section */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl md:rounded-[2rem] shadow-2xl p-6 md:p-10 animate-fade-in delay-300 border border-white/60 hover:shadow-3xl transition-all duration-500">
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl mb-6 md:mb-8 relative overflow-hidden shadow-2xl group">
            <video 
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl group-hover:scale-105 transition-transform duration-700"
              controls
              preload="metadata"
              poster=""
            >
              <source src="https://itslovefoot.space/wp-content/uploads/2025/06/VSLFOOT.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
            
            {/* Video overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl md:rounded-3xl pointer-events-none"></div>
          </div>

          {/* Call to action hint */}
          <div className="text-center">
            <p className="text-gray-600 text-sm md:text-base font-medium mb-4">
              Assista e descubra como começar hoje mesmo
            </p>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-full px-6 py-2 animate-bounce-gentle">
                <span className="text-rose-700 font-bold text-sm">👇 Continue rolando</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
