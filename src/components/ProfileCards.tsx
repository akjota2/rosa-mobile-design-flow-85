
import { Heart } from 'lucide-react';

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
            <button className="pb-3 px-2 text-primary-500 border-b-2 border-primary-500 font-semibold">
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
                <button className="p-2 hover:bg-primary-50 rounded-full transition-colors group">
                  <Heart className="w-5 h-5 text-gray-400 group-hover:text-primary-500 transition-colors" />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="bg-primary-500 text-white p-4 rounded-xl flex items-start space-x-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm">⚠</span>
            </div>
            <div>
              <p className="font-semibold">Mulheres</p>
              <p className="text-sm text-primary-100">transformam isso em <strong>renda extra</strong>, sem mostrar o rosto.</p>
            </div>
          </div>
          
          <div className="bg-primary-500 text-white p-4 rounded-xl flex items-start space-x-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-sm">♂</span>
            </div>
            <div>
              <p className="font-semibold">Homens</p>
              <p className="text-sm text-primary-100">com preferências <strong>encontram exatamente</strong> o que querem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
