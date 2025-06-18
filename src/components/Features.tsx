
import { Smartphone, Lock, Star } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
            Para quem busca{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-100">
              beleza
            </span>{' '}
            fora do comum.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Smartphone className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Conteúdo Exclusivo</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Packs de fotos e vídeos exclusivos para saciar sua curiosidade, com uma variedade de modelos belíssimas!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-100">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Lock className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Privacidade Garantida</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Sua privacidade é nossa prioridade, garantindo discrição e segurança em todas as transações.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 animate-fade-in delay-200">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Star className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Qualidade Superior</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Cada modelo é escolhida para garantir qualidade e beleza no nosso catálogo exclusivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
