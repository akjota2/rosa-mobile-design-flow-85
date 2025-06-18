
export const Hero = () => {
  return (
    <section className="relative py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/20"></div>
      <div className="relative max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-4 animate-scale-in">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Descubra o <span className="text-primary-500">Prazer</span> que você procura
          </h1>
          <p className="text-lg text-gray-600">
            ou <span className="text-primary-500 font-semibold">Ganhe</span> com o interesse que eles têm.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 animate-fade-in">
          <div className="aspect-video bg-gray-900 rounded-xl mb-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/70 rounded-lg p-2 text-white text-sm">
                <div className="flex items-center justify-between">
                  <span>0:00 / 0:30</span>
                  <div className="flex space-x-2">
                    <button className="hover:text-primary-300 transition-colors">🔊</button>
                    <button className="hover:text-primary-300 transition-colors">⛶</button>
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
