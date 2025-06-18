
import { Smartphone, Lock, Star } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-12 px-4" style={{ backgroundColor: '#FF69B4' }}>
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Para quem busca
        </h2>
        <h3 className="text-2xl font-bold text-white mb-2">
          beleza
        </h3>
        <h4 className="text-xl font-bold text-white mb-12">
          fora do comum.
        </h4>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/30">
              <Smartphone className="text-white" size={24} />
            </div>
            <div className="text-left">
              <h5 className="font-bold text-white mb-2">Conteúdo Exclusivo</h5>
              <p className="text-white/90 text-sm">
                Packs de fotos e vídeos exclusivos para saciar sua curiosidade, com uma variedade de modelos belíssimas!
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/30">
              <Lock className="text-white" size={24} />
            </div>
            <div className="text-left">
              <h5 className="font-bold text-white mb-2">Privacidade Garantida</h5>
              <p className="text-white/90 text-sm">
                Sua privacidade é nossa prioridade, garantindo discrição e segurança em todas as transações.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/30">
              <Star className="text-white" size={24} />
            </div>
            <div className="text-left">
              <h5 className="font-bold text-white mb-2">Qualidade Superior</h5>
              <p className="text-white/90 text-sm">
                Cada modelo é escolhida para garantir qualidade e beleza no nosso catálogo exclusivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
