
import { Users, UserCheck } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 relative overflow-hidden">
      {/* Enhanced decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-white/8 rounded-full blur-2xl animate-pulse delay-300"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-16 right-32 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute top-40 left-16 w-3 h-3 bg-white/25 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-32 right-16 w-5 h-5 bg-white/20 rounded-full animate-bounce delay-1000"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-12 animate-fade-in">
          Conectando{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-100">
            Desejos
          </span>{' '}
          e{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-100">
            Oportunidades
          </span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 animate-slide-up">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                <Users className="text-white" size={28} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mulheres</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              transformam isso em renda extra, sem mostrar o rosto.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 animate-slide-up delay-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                <UserCheck className="text-white" size={28} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Homens</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              com preferências encontram exatamente o que querem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
