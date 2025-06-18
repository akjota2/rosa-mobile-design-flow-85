
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VipPopup } from '@/components/VipPopup';
import { Timer, Crown, Heart, Lock } from 'lucide-react';

const Catalogo = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [showVipPopup, setShowVipPopup] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowVipPopup(true);
    }
  }, [timeLeft]);

  const profiles = [
    { name: 'Lari', age: 22, size: 35, image: '/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png', isVip: true },
    { name: 'Ju', age: 24, size: 37, image: '/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png', isVip: false },
    { name: 'Ana', age: 26, size: 36, image: '/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png', isVip: true },
    { name: 'Carol', age: 23, size: 38, image: '/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png', isVip: false },
    { name: 'Mari', age: 25, size: 35, image: '/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png', isVip: true },
    { name: 'Bianca', age: 21, size: 34, image: '/lovable-uploads/84dfb7ce-4f10-445c-a733-e7d5f2ae6033.png', isVip: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <Header />
      
      {/* Timer */}
      <div className="fixed top-20 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50">
        <div className="flex items-center space-x-2">
          <Timer size={18} className="text-red-500" />
          <span className="font-bold text-red-500">{timeLeft}s</span>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Catálogo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600">
              Secreto
            </span>
          </h1>
          <p className="text-gray-600">Explore nossa seleção exclusiva de modelos</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {profiles.map((profile, index) => (
            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div 
                className="w-full h-48 rounded-2xl overflow-hidden relative shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundImage: `url(${profile.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(8px)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
              </div>
              
              {/* VIP Badge */}
              {profile.isVip && (
                <div className="absolute top-3 right-3">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg flex items-center space-x-1">
                    <Crown size={12} />
                    <span>VIP</span>
                  </div>
                </div>
              )}

              {/* Lock Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Lock className="text-white" size={28} />
                </div>
              </div>

              {/* Profile Info */}
              <div className="absolute bottom-3 left-3 text-white">
                <p className="font-bold text-lg drop-shadow-lg">{profile.name}, {profile.age}</p>
                <p className="text-sm flex items-center drop-shadow-lg">
                  <span className="text-red-400 mr-1">❤️</span> Calça {profile.size}
                </p>
              </div>

              {/* Heart Icon */}
              <div className="absolute bottom-3 right-3">
                <Heart className="text-white" size={20} />
              </div>

              {/* VIP Access Button */}
              {profile.isVip && (
                <VipPopup
                  trigger={
                    <button className="absolute inset-0 w-full h-full bg-transparent" />
                  }
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center animate-fade-in">
          <VipPopup
            trigger={
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                🔥 ACESSO VIP COMPLETO
              </button>
            }
          />
        </div>
      </div>

      <Footer />

      {/* Auto VIP Popup */}
      {showVipPopup && (
        <VipPopup
          trigger={<div />}
          autoOpen={true}
          onClose={() => setShowVipPopup(false)}
        />
      )}
    </div>
  );
};

export default Catalogo;
