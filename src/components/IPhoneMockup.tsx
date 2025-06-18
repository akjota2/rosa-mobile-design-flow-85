
import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Star, Zap, Eye, Gift } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export const IPhoneMockup = () => {
  const [selectedTab, setSelectedTab] = useState('modelo');
  const [likedProfiles, setLikedProfiles] = useState<Set<string>>(new Set());
  const [viewedProfiles, setViewedProfiles] = useState<Set<string>>(new Set());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const modelProfiles = [
    { 
      name: 'Lari', 
      age: 22, 
      size: 36, 
      image: '/lovable-uploads/5d3b86d2-dbd3-42d6-bad3-5fd9529b0a78.png',
      isOnline: true,
      earnings: 'R$ 12.500/mês',
      rating: 4.9,
      location: 'São Paulo',
      bio: 'Modelo fitness 💪 Conteúdo exclusivo'
    },
    { 
      name: 'Ju', 
      age: 24, 
      size: 37, 
      image: '/lovable-uploads/95f639f1-5e1b-460e-872e-133690efaad5.png',
      isOnline: true,
      earnings: 'R$ 8.200/mês',
      rating: 4.8,
      location: 'Rio de Janeiro',
      bio: 'Lifestyle content creator ✨'
    },
    { 
      name: 'Gabi', 
      age: 23, 
      size: 35, 
      image: '/lovable-uploads/a17b990f-dd9d-413b-bb48-03cd407fc798.png',
      isOnline: true,
      earnings: 'R$ 15.800/mês',
      rating: 5.0,
      location: 'Belo Horizonte',
      bio: 'Fashion model 👗 Premium content'
    },
    { 
      name: 'Carol', 
      age: 26, 
      size: 38, 
      image: '/lovable-uploads/9d336adb-200c-496a-9ec4-4204bd1d2717.png',
      isOnline: false,
      earnings: 'R$ 9.600/mês',
      rating: 4.7,
      location: 'Porto Alegre',
      bio: 'Artista digital 🎨 Conteúdo criativo'
    }
  ];

  const admirerProfiles = [
    { 
      name: 'João', 
      age: 28, 
      size: 42, 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      isOnline: true,
      earnings: 'Premium',
      rating: 4.2,
      location: 'São Paulo',
      bio: 'Empresário 💼 Busco conexões reais'
    },
    { 
      name: 'Pedro', 
      age: 32, 
      size: 40, 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      isOnline: false,
      earnings: 'VIP',
      rating: 4.5,
      location: 'Rio de Janeiro',
      bio: 'Advogado ⚖️ Respeitoso sempre'
    },
    { 
      name: 'Lucas', 
      age: 26, 
      size: 41, 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      isOnline: true,
      earnings: 'Premium',
      rating: 4.8,
      location: 'Brasília',
      bio: 'Médico 👨‍⚕️ Valorizo qualidade'
    },
    { 
      name: 'Rafael', 
      age: 29, 
      size: 43, 
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face',
      isOnline: true,
      earnings: 'Gold',
      rating: 4.3,
      location: 'Curitiba',
      bio: 'Engenheiro 🔧 Discreto e educado'
    },
    { 
      name: 'Diego', 
      age: 31, 
      size: 41, 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      isOnline: false,
      earnings: 'Premium',
      rating: 4.6,
      location: 'Salvador',
      bio: 'Arquiteto 🏗️ Aprecio arte e beleza'
    },
    { 
      name: 'Thiago', 
      age: 35, 
      size: 42, 
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face',
      isOnline: true,
      earnings: 'VIP',
      rating: 4.7,
      location: 'Fortaleza',
      bio: 'CEO 👔 Generoso com quem merece'
    }
  ];

  const topProfiles = [
    { 
      name: 'Ana', 
      age: 25, 
      size: 37, 
      image: '/lovable-uploads/9d336adb-200c-496a-9ec4-4204bd1d2717.png',
      isOnline: true,
      earnings: 'R$ 25.000/mês',
      rating: 5.0,
      location: 'São Paulo',
      bio: '⭐ Top Creator - Conteúdo exclusivo'
    },
    { 
      name: 'Maria', 
      age: 27, 
      size: 36, 
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      isOnline: true,
      earnings: 'R$ 18.500/mês',
      rating: 4.9,
      location: 'Rio de Janeiro',
      bio: '🏆 Influencer digital premium'
    },
    { 
      name: 'Sofia', 
      age: 24, 
      size: 35, 
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      isOnline: true,
      earnings: 'R$ 22.300/mês',
      rating: 4.8,
      location: 'Miami',
      bio: '🌟 International model'
    },
    { 
      name: 'Bianca', 
      age: 28, 
      size: 38, 
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face',
      isOnline: false,
      earnings: 'R$ 19.800/mês',
      rating: 4.7,
      location: 'Barcelona',
      bio: '💎 Elite content creator'
    },
    { 
      name: 'Fernanda', 
      age: 26, 
      size: 36, 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      isOnline: true,
      earnings: 'R$ 28.700/mês',
      rating: 5.0,
      location: 'Dubai',
      bio: '👑 Luxury lifestyle model'
    }
  ];

  const getCurrentProfiles = () => {
    switch (selectedTab) {
      case 'modelo':
        return modelProfiles;
      case 'admirador':
        return admirerProfiles;
      case 'top':
        return topProfiles;
      default:
        return modelProfiles;
    }
  };

  const handleProfileClick = (profileName: string) => {
    const profileId = `${selectedTab}-${profileName}`;
    const newViewedProfiles = new Set(viewedProfiles);
    newViewedProfiles.add(profileId);
    setViewedProfiles(newViewedProfiles);
    console.log(`Visualizou perfil de ${profileName}`);
  };

  const handleHeartClick = (profileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const profileId = `${selectedTab}-${profileName}`;
    const newLikedProfiles = new Set(likedProfiles);
    if (likedProfiles.has(profileId)) {
      newLikedProfiles.delete(profileId);
    } else {
      newLikedProfiles.add(profileId);
    }
    setLikedProfiles(newLikedProfiles);
  };

  const handleMessageClick = (profileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Iniciou conversa com ${profileName}`);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex justify-center items-center py-4 px-2">
      <div className="relative w-full max-w-[280px] animate-bounce-gentle">
        {/* iPhone Frame */}
        <div className="w-full aspect-[9/19.5] bg-black rounded-[8%] p-1 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[7%] overflow-hidden relative">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-2xl z-10"></div>
            
            {/* Status Bar */}
            <div className="absolute top-1 left-0 right-0 flex justify-between items-center px-6 pt-1 text-xs font-medium text-gray-900 z-10">
              <span>{formatTime(currentTime)}</span>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-6 h-3 border border-gray-900 rounded-sm">
                  <div className="w-4 h-1.5 bg-green-500 rounded-xs m-0.5"></div>
                </div>
              </div>
            </div>
            
            {/* Screen Content */}
            <div className="h-full bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-8 px-3">
              {/* Header */}
              <div className="text-center mb-4 pt-2">
                <h2 className="text-sm font-bold text-gray-900 mb-1 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-yellow-500 mr-1" />
                  Conecte-se
                </h2>
                <p className="text-xs text-gray-600">Descubra pessoas incríveis</p>
              </div>

              {/* Stats Bar */}
              <div className="flex justify-around mb-3 bg-white/80 backdrop-blur-sm rounded-xl p-2 border border-gray-100">
                <div className="text-center">
                  <div className="text-xs font-bold text-pink-600">{likedProfiles.size}</div>
                  <div className="text-xs text-gray-500">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-blue-600">{viewedProfiles.size}</div>
                  <div className="text-xs text-gray-500">Vistas</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-green-600">Online</div>
                  <div className="text-xs text-gray-500">Agora</div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-3 bg-gradient-to-r from-pink-100 to-purple-100 p-0.5 rounded-xl h-8 border border-pink-200">
                  <TabsTrigger 
                    value="modelo" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-pink-600 data-[state=active]:text-white text-xs font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Star className="w-3 h-3 mr-1" />
                    Modelo
                  </TabsTrigger>
                  <TabsTrigger 
                    value="admirador" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white text-xs font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Heart className="w-3 h-3 mr-1" />
                    Fan
                  </TabsTrigger>
                  <TabsTrigger 
                    value="top" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white text-xs font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    Top+
                  </TabsTrigger>
                </TabsList>
                
                {/* Profile List */}
                <div className="space-y-2 max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent">
                  {getCurrentProfiles().map((profile, index) => {
                    const profileId = `${selectedTab}-${profile.name}`;
                    const isLiked = likedProfiles.has(profileId);
                    const isViewed = viewedProfiles.has(profileId);
                    
                    return (
                      <div 
                        key={index} 
                        className={`relative p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] border ${isViewed ? 'border-pink-200 bg-pink-50/50' : 'border-gray-100'}`}
                        onClick={() => handleProfileClick(profile.name)}
                      >
                        {/* Profile Header */}
                        <div className="flex items-start space-x-2 mb-2">
                          <div className="relative flex-shrink-0">
                            <img
                              src={profile.image}
                              alt={profile.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                            />
                            {profile.isOnline && (
                              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              </div>
                            )}
                            {profile.rating >= 4.8 && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                                <Star className="w-2 h-2 text-white fill-white" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-gray-900 text-xs flex items-center">
                                {profile.name}, {profile.age}
                                {selectedTab === 'top' && <Zap className="w-3 h-3 text-yellow-500 ml-1" />}
                              </h3>
                              <div className="flex items-center space-x-1">
                                <button 
                                  className="p-1 hover:bg-pink-100 rounded-full transition-all duration-300"
                                  onClick={(e) => handleMessageClick(profile.name, e)}
                                >
                                  <MessageCircle className="w-3 h-3 text-blue-500" />
                                </button>
                                <button 
                                  className="p-1 hover:bg-pink-100 rounded-full transition-all duration-300"
                                  onClick={(e) => handleHeartClick(profileId, e)}
                                >
                                  <Heart 
                                    className={`w-3 h-3 transition-all duration-300 ${
                                      isLiked 
                                        ? 'text-pink-500 fill-pink-500 scale-110' 
                                        : 'text-pink-400 hover:text-pink-500'
                                    }`} 
                                  />
                                </button>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs text-gray-500">{profile.location}</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                <span className="text-xs font-medium text-gray-700">{profile.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Profile Details */}
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 line-clamp-1">{profile.bio}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {selectedTab !== 'admirador' && (
                                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                  {profile.earnings}
                                </span>
                              )}
                              {selectedTab === 'admirador' && (
                                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full flex items-center">
                                  <Gift className="w-3 h-3 mr-1" />
                                  {profile.earnings}
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center space-x-1">
                              <Eye className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-500">{Math.floor(Math.random() * 50) + 10}</span>
                            </div>
                          </div>
                        </div>

                        {/* Interaction Indicators */}
                        {isLiked && (
                          <div className="absolute top-1 right-1">
                            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
};
