
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VipPopup } from '@/components/VipPopup';
import { Timer, Crown, Heart, Lock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Catalogo = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [showVipPopup, setShowVipPopup] = useState(false);
  const [shuffledProfiles, setShuffledProfiles] = useState<any[]>([]);
  const navigate = useNavigate();

  const profiles = [
    { name: 'Lari', age: 22, size: 35, image: '/lovable-uploads/5d3b86d2-dbd3-42d6-bad3-5fd9529b0a78.png', isVip: true, isBlurred: true },
    { name: 'Ju', age: 24, size: 37, image: '/lovable-uploads/95f639f1-5e1b-460e-872e-133690efaad5.png', isVip: false, isBlurred: false },
    { name: 'Ana', age: 26, size: 36, image: '/lovable-uploads/9d336adb-200c-496a-9ec4-4204bd1d2717.png', isVip: true, isBlurred: true },
    { name: 'Carol', age: 23, size: 38, image: '/lovable-uploads/1882614c-ef48-4d46-85b3-7b76aab277c5.png', isVip: false, isBlurred: false },
    { name: 'Mari', age: 25, size: 35, image: '/lovable-uploads/198e52e0-675a-47be-b5ea-b6b417e15d15.png', isVip: true, isBlurred: true },
    { name: 'Bianca', age: 21, size: 34, image: '/lovable-uploads/241bddb4-54c1-4ba6-bfe3-e1b473c0e22b.png', isVip: false, isBlurred: false },
    { name: 'Gabi', age: 23, size: 36, image: '/lovable-uploads/a17b990f-dd9d-413b-bb48-03cd407fc798.png', isVip: true, isBlurred: true },
    { name: 'Luna', age: 22, size: 37, image: '/lovable-uploads/6b6b547c-060d-40cd-a714-2112922a50a4.png', isVip: false, isBlurred: false },
  ];

  // Shuffle profiles on component mount
  useEffect(() => {
    const shuffled = [...profiles].sort(() => Math.random() - 0.5);
    setShuffledProfiles(shuffled);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowVipPopup(true);
    }
  }, [timeLeft]);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleProfileClick = (profileName: string, isVip: boolean) => {
    if (isVip) {
      setShowVipPopup(true);
    } else {
      navigate(`/modelo/${profileName}`);
    }
  };

  const handleButtonClick = (profileName: string) => {
    navigate(`/modelo/${profileName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <Header />
      
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-40">
        <Button
          onClick={handleGoBack}
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm border-gray-200/50 hover:bg-white shadow-lg"
        >
          <ArrowLeft size={16} className="mr-2" />
          Voltar
        </Button>
      </div>
      
      {/* Timer */}
      <div className="fixed top-20 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/50">
        <div className="flex items-center space-x-2">
          <Timer size={18} className="text-primary-500" />
          <span className="font-bold text-primary-500">{timeLeft}s</span>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-8 pt-20">
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
          {shuffledProfiles.map((profile, index) => (
            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div 
                className="w-full h-48 rounded-2xl overflow-hidden relative shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer mb-3"
                style={{
                  backgroundImage: `url(${profile.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: profile.isBlurred ? 'blur(8px)' : 'none'
                }}
                onClick={() => handleProfileClick(profile.name, profile.isVip)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                
                {/* VIP Badge */}
                {profile.isVip && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-gradient-to-r from-primary-500 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg flex items-center space-x-1">
                      <Crown size={12} />
                      <span>VIP</span>
                    </div>
                  </div>
                )}

                {/* Lock Icon for blurred images */}
                {profile.isBlurred && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Lock className="text-white" size={28} />
                    </div>
                  </div>
                )}

                {/* Profile Info */}
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="font-bold text-lg drop-shadow-lg">{profile.name}, {profile.age}</p>
                  <p className="text-sm flex items-center drop-shadow-lg">
                    <Heart className="text-pink-400 mr-1" size={14} />
                    Calça {profile.size}
                  </p>
                </div>

                {/* Heart Icon */}
                <div className="absolute bottom-3 right-3">
                  <Heart className="text-white" size={20} />
                </div>
              </div>

              {/* Button below each model */}
              <Button
                onClick={() => handleButtonClick(profile.name)}
                className={`w-full ${
                  profile.isVip 
                    ? 'bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                } text-white font-bold py-2 rounded-xl text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                {profile.isVip ? 'Acesso VIP' : 'Ver Packs'}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center animate-fade-in">
          <VipPopup
            trigger={
              <button className="w-full bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 text-white font-bold py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Crown size={20} />
                <span>ACESSO VIP COMPLETO</span>
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
