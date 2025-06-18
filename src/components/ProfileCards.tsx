
import { TrendingUp, Target } from 'lucide-react';

export const ProfileCards = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-[#e879a6] to-[#ec4899] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-8 translate-y-8"></div>
            
            <div className="relative z-10 flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Mulheres</h3>
                <p className="text-pink-50 text-sm leading-relaxed">
                  transformam isso em <span className="font-bold text-white">renda extra</span>, sem mostrar o rosto.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#e879a6] to-[#ec4899] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full transform translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full transform -translate-x-6 translate-y-6"></div>
            
            <div className="relative z-10 flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-2">Homens</h3>
                <p className="text-pink-50 text-sm leading-relaxed">
                  com preferências <span className="font-bold text-white">encontram exatamente</span> o que querem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
