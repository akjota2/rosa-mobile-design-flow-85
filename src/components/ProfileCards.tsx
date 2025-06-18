

import { Heart, TrendingUp, Target } from 'lucide-react';

export const ProfileCards = () => {
  const profiles = [
    { name: 'Lari', age: 22, shoe: 36, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face' },
    { name: 'Ju', age: 24, shoe: 37, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face' },
    { name: 'Gabi', age: 23, shoe: 35, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face' }
  ];

  return (
    <section className="py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            <button className="pb-3 px-2 text-[#ff84a4] border-b-2 border-[#ff84a4] font-semibold">
              Modelo
            </button>
            <button className="pb-3 px-2 text-gray-400 font-semibold">
              Admirador
            </button>
            <button className="pb-3 px-2 text-gray-400 font-semibold">
              Top+
            </button>
          </div>
          
          <div className="space-y-4">
            {profiles.map((profile, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{profile.name}, {profile.age}</h3>
                  <p className="text-sm text-gray-500">Calça: {profile.shoe}</p>
                </div>
                <button className="p-2 hover:bg-pink-50 rounded-full transition-colors group">
                  <Heart className="w-5 h-5 text-gray-400 group-hover:text-[#ff84a4] transition-colors" />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="bg-gradient-to-r from-[#ed7a98] to-[#ff84a4] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
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
          
          <div className="bg-gradient-to-r from-[#ed7a98] to-[#ff84a4] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
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

