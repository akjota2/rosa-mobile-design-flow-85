
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VipPopup } from '@/components/VipPopup';
import { ArrowLeft, Heart, Lock, Image, Video, Send, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModelProfile = () => {
  const { modelName } = useParams();
  const navigate = useNavigate();
  const [showVipPopup, setShowVipPopup] = useState(false);

  const profiles = [
    { name: 'Lari', age: 22, size: 35, image: '/lovable-uploads/5d3b86d2-dbd3-42d6-bad3-5fd9529b0a78.png', isVip: true },
    { name: 'Ju', age: 24, size: 37, image: '/lovable-uploads/95f639f1-5e1b-460e-872e-133690efaad5.png', isVip: false },
    { name: 'Ana', age: 26, size: 36, image: '/lovable-uploads/9d336adb-200c-496a-9ec4-4204bd1d2717.png', isVip: true },
    { name: 'Carol', age: 23, size: 38, image: '/lovable-uploads/1882614c-ef48-4d46-85b3-7b76aab277c5.png', isVip: false },
    { name: 'Mari', age: 25, size: 35, image: '/lovable-uploads/198e52e0-675a-47be-b5ea-b6b417e15d15.png', isVip: true },
    { name: 'Bianca', age: 21, size: 34, image: '/lovable-uploads/241bddb4-54c1-4ba6-bfe3-e1b473c0e22b.png', isVip: false },
    { name: 'Gabi', age: 23, size: 36, image: '/lovable-uploads/a17b990f-dd9d-413b-bb48-03cd407fc798.png', isVip: true },
    { name: 'Luna', age: 22, size: 37, image: '/lovable-uploads/6b6b547c-060d-40cd-a714-2112922a50a4.png', isVip: false },
  ];

  const model = profiles.find(p => p.name.toLowerCase() === modelName?.toLowerCase()) || profiles[0];

  const handleGoBack = () => {
    navigate('/catalogo');
  };

  const handleVipAction = () => {
    setShowVipPopup(true);
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

      <div className="max-w-md mx-auto px-4 py-8 pt-20">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          <div className="relative">
            <div 
              className="w-full h-80 bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${model.image})`,
                filter: model.isVip ? 'blur(8px)' : 'none'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
              {model.isVip && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Lock className="text-white" size={32} />
                  </div>
                </div>
              )}
            </div>
            
            {/* VIP Badge */}
            {model.isVip && (
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg flex items-center space-x-1">
                  <Crown size={12} />
                  <span>LIVE</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">{model.age} anos</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">Calça {model.size}</span>
            </div>
            
            <p className="text-gray-600 text-center mb-6">
              Sobre mim<br />
              Meus pics são meu vício! Sempre com várias fotos e histórias.
            </p>

            <div className="flex space-x-3 mb-6">
              <button 
                onClick={handleVipAction}
                className="flex-1 bg-primary-500 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-primary-600 transition-colors"
              >
                <Image size={16} />
                <span>90+ Fotos</span>
              </button>
              <button 
                onClick={handleVipAction}
                className="flex-1 bg-primary-500 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-primary-600 transition-colors"
              >
                <Video size={16} />
                <span>3 Vídeos</span>
              </button>
            </div>

            <button 
              onClick={handleVipAction}
              className="w-full bg-primary-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-primary-600 transition-colors"
            >
              Chat Privado
            </button>
          </div>
        </div>

        {/* Exclusive Content Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="text-primary-500" size={20} />
              <h2 className="text-lg font-bold text-gray-900">Conteúdo Exclusivo</h2>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                LIVE
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <button 
                  key={item}
                  onClick={handleVipAction}
                  className="aspect-square bg-gray-200 rounded-xl relative overflow-hidden hover:scale-105 transition-transform"
                >
                  <div className="absolute inset-0 bg-primary-500/20 flex items-center justify-center">
                    <Lock className="text-primary-500" size={16} />
                  </div>
                </button>
              ))}
            </div>

            <button 
              onClick={handleVipAction}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Crown size={16} />
              <span>Ver Todo o Conteúdo VIP</span>
            </button>
          </div>
        </div>

        {/* Chat Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{model.name[0]}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{model.name}</h3>
                <span className="text-green-500 text-sm">Online</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <input 
                type="text" 
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button 
                onClick={handleVipAction}
                className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Send className="text-white" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* VIP Popup */}
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

export default ModelProfile;
