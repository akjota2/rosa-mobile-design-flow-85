
export const Hero = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary-200/40 to-pink-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-tl from-purple-200/30 to-primary-200/40 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-pink-300/20 to-primary-300/20 rounded-full blur-lg animate-pulse delay-500"></div>
      
      <div className="relative max-w-md mx-auto text-center z-10">
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
