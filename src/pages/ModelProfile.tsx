
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VipPopup } from '@/components/VipPopup';
import { ArrowLeft, Heart, MessageCircle, Lock, Crown, Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModelProfile = () => {
  const { name } = useParams();
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

  const profile = profiles.find(p => p.name === name);

  if (!profile) {
    return <div>Perfil não encontrado</div>;
  }

  const handleVipAction = () => {
    setShowVipPopup(true);
  };

  const handleGoBack = () => {
    navigate('/catalogo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <Header />
      
      <div className="max-w-md mx-auto px-4 py-8 pt-20">
        {/* Back Button */}
        <div className="mb-6">
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

        {/* Profile Header */}
        <div className="text-center mb-6">
          <div className="relative inline-block mb-4">
            <div 
              className="w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white"
              style={{
                backgroundImage: `url(${profile.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
              LIVE
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h1>
          
          <div className="flex justify-center space-x-4 mb-4">
            <div className="bg-gradient-to-r from-primary-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
              <Heart size={14} className="mr-1" />
              {profile.age} anos
            </div>
            <div className="bg-gradient-to-r from-primary-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              ♥ {profile.size}
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Sobre mim:<br />
            Meus pics são meu world! Sempre com umas<br />
            fotos e histórinhas.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-6">
            <Button 
              className="flex-1 bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 text-white font-bold py-3 rounded-xl"
              onClick={handleVipAction}
            >
              <Star size={16} className="mr-2" />
              70+ Fotos
            </Button>
            <Button 
              className="flex-1 bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 text-white font-bold py-3 rounded-xl"
              onClick={handleVipAction}
            >
              <Crown size={16} className="mr-2" />
              4 Vídeos
            </Button>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 text-white font-bold py-3 rounded-xl mb-6"
            onClick={handleVipAction}
          >
            Chat Privado
          </Button>
        </div>

        {/* Exclusive Content Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center">
              <Crown className="text-gradient bg-gradient-to-r from-primary-500 to-pink-600 mr-2" size={20} />
              Conteúdo Exclusivo
            </h3>
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
              LIVE
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div 
                key={item}
                className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                onClick={handleVipAction}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${profile.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)'
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Lock className="text-white" size={16} />
                </div>
              </div>
            ))}
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 text-white font-bold py-3 rounded-xl"
            onClick={handleVipAction}
          >
            <Crown size={16} className="mr-2" />
            Ver Todo o Conteúdo VIP
          </Button>
        </div>

        {/* Chat Section */}
        <div className="bg-gradient-to-r from-primary-500 to-pink-600 rounded-t-2xl p-4 mb-0">
          <div className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"
              style={{
                backgroundImage: `url(${profile.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div>
              <p className="text-white font-bold text-lg">{profile.name}</p>
              <p className="text-white/90 text-sm">Online</p>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="bg-white min-h-[200px] px-4 py-4 border-l border-r border-gray-200">
          <div className="space-y-4">
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-[80%]">
                <p className="text-gray-800 text-sm">Oi! Como você está? 😊</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-gradient-to-r from-primary-500 to-pink-600 text-white rounded-2xl px-4 py-2 max-w-[80%]">
                <p className="text-sm">Olá! Tudo bem e você?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white rounded-b-2xl border border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <input 
              type="text" 
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-3 bg-gray-100 rounded-full border-none outline-none text-gray-700 placeholder-gray-500"
              onClick={handleVipAction}
            />
            <Button 
              size="icon"
              className="bg-gradient-to-r from-primary-500 to-pink-600 hover:from-primary-600 hover:to-pink-700 rounded-full w-12 h-12"
              onClick={handleVipAction}
            >
              <Send size={20} />
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 bg-gradient-to-r from-primary-500 to-pink-600 text-white text-center py-4 rounded-2xl">
          <p className="font-bold text-lg">ADQUIRA O APP E TENHA ACESSO A TODO CONTEÚDO</p>
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
