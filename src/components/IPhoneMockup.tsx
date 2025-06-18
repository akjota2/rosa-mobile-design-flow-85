
import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Star, Zap, Eye, Gift, Users, Crown, TrendingUp } from 'lucide-react';
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
      earnings: 'R$ 12.5k',
      rating: 4.9,
      location: 'São Paulo',
      bio: 'Modelo fitness 💪'
    },
    { 
      name: 'Ju', 
      age: 24, 
      size: 37, 
      image: '/lovable-uploads/95f639f1-5e1b-460e-872e-133690efaad5.png',
      isOnline: true,
      earnings: 'R$ 8.2k',
      rating: 4.8,
      location: 'Rio de Janeiro',
      bio: 'Creator lifestyle ✨'
    },
    { 
      name: 'Gabi', 
      age: 23, 
      size: 35, 
      image: '/lovable-uploads/a17b990f-dd9d-413b-bb48-03cd407fc798.png',
      isOnline: true,
      earnings: 'R$ 15.8k',
      rating: 5.0,
      location: 'Belo Horizonte',
      bio: 'Fashion model 👗'
    },
    { 
      name: 'Carol', 
      age: 26, 
      size: 38, 
      image: '/lovable-uploads/9d336adb-200c-496a-9ec4-4204bd1d2717.png',
      isOnline: false,
      earnings: 'R$ 9.6k',
      rating: 4.7,
      location: 'Porto Alegre',
      bio: 'Artista digital 🎨'
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
      bio: 'Empresário 💼'
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
      bio: 'Advogado ⚖️'
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
      bio: 'Médico 👨‍⚕️'
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
      bio: 'Engenheiro 🔧'
    }
  ];

  const topProfiles = [
    { 
      name: 'Ana', 
      age: 25, 
      size: 37, 
      image: '/lovable-uploads/9d336adb-200c-496a-9ec4-4204bd1d2717.png',
      isOnline: true,
      earnings: 'R$ 25k',
      rating: 5.0,
      location: 'São Paulo',
      bio: '⭐ Top Creator'
    },
    { 
      name: 'Maria', 
      age: 27, 
      size: 36, 
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      isOnline: true,
      earnings: 'R$ 18.5k',
      rating: 4.9,
      location: 'Rio de Janeiro',
      bio: '🏆 Influencer premium'
    },
    { 
      name: 'Sofia', 
      age: 24, 
      size: 35, 
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      isOnline: true,
      earnings: 'R$ 22.3k',
      rating: 4.8,
      location: 'Miami',
      bio: '🌟 International'
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
    <div className="flex justify-center items-center py-6 px-4">
      <div className="relative w-full max-w-[320px] animate-bounce-gentle">
        {/* iPhone Frame */}
        <div className="w-full aspect-[9/16] bg-black rounded-[2.5rem] p-1.5 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-b-3xl z-10"></div>
            
            {/* Status Bar */}
            <div className="absolute top-2 left-0 right-0 flex justify-between items-center px-6 pt-1 text-sm font-medium text-gray-900 z-10">
              <span>{formatTime(currentTime)}</span>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-8 h-4 border border-gray-900 rounded-sm">
                  <div className="w-6 h-2 bg-green-500 rounded-xs m-0.5"></div>
                </div>
              </div>
            </div>
            
            {/* Screen Content */}
            <div className="h-full bg-gradient-to-br from-pink-50 via-white to-purple-50 pt-10 px-4">
              {/* Header */}
              <div className="text-center mb-6 pt-2">
                <h2 className="text-lg font-bold text-gray-900 mb-2 flex items-center justify-center">
                  <Crown className="w-5 h-5 text-yellow-500 mr-2" />
                  Connect Rosa
                </h2>
                <p className="text-sm text-gray-600">Descubra pessoas incríveis</p>
              </div>

              {/* Stats Bar */}
              <div className="flex justify-around mb-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 border border-gray-100 shadow-sm">
                <div className="text-center flex items-center space-x-2">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-pink-600">{likedProfiles.size}</div>
                    <div className="text-xs text-gray-500">Likes</div>
                  </div>
                </div>
                <div className="text-center flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-blue-600">{viewedProfiles.size}</div>
                    <div className="text-xs text-gray-500">Vistas</div>
                  </div>
                </div>
                <div className="text-center flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-green-600">Online</div>
                    <div className="text-xs text-gray-500">Agora</div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4 bg-gradient-to-r from-pink-100 to-purple-100 p-1 rounded-2xl h-10 border border-pink-200 shadow-sm">
                  <TabsTrigger 
                    value="modelo" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-pink-600 data-[state=active]:text-white text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center data-[state=active]:shadow-md"
                  >
                    <Star className="w-4 h-4 mr-1" />
                    Modelo
                  </TabsTrigger>
                  <TabsTrigger 
                    value="admirador" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center data-[state=active]:shadow-md"
                  >
                    <Heart className="w-4 h-4 mr-1" />
                    Fan
                  </TabsTrigger>
                  <TabsTrigger 
                    value="top" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center data-[state=active]:shadow-md"
                  >
                    <Crown className="w-4 h-4 mr-1" />
                    Top+
                  </TabsTrigger>
                </TabsList>
                
                {/* Profile List */}
                <div className="space-y-3 max-h-[340px] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-transparent pr-1">
                  {getCurrentProfiles().map((profile, index) => {
                    const profileId = `${selectedTab}-${profile.name}`;
                    const isLiked = likedProfiles.has(profileId);
                    const isViewed = viewedProfiles.has(profileId);
                    
                    return (
                      <div 
                        key={index} 
                        className={`relative p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] border ${isViewed ? 'border-pink-200 bg-pink-50/50' : 'border-gray-100'}`}
                        onClick={() => handleProfileClick(profile.name)}
                      >
                        {/* Profile Header */}
                        <div className="flex items-start space-x-3 mb-3">
                          <div className="relative flex-shrink-0">
                            <img
                              src={profile.image}
                              alt={profile.name}
                              className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white shadow-lg"
                            />
                            {profile.isOnline && (
                              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                              </div>
                            )}
                            {profile.rating >= 4.8 && (
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                                <Star className="w-2.5 h-2.5 text-white fill-white" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-bold text-gray-900 text-sm flex items-center">
                                {profile.name}, {profile.age}
                                {selectedTab === 'top' && <Crown className="w-3 h-3 text-yellow-500 ml-1" />}
                              </h3>
                              <div className="flex items-center space-x-1">
                                <button 
                                  className="p-1.5 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                                  onClick={(e) => handleMessageClick(profile.name, e)}
                                >
                                  <MessageCircle className="w-4 h-4 text-blue-500" />
                                </button>
                                <button 
                                  className="p-1.5 hover:bg-pink-100 rounded-full transition-all duration-300 hover:scale-110"
                                  onClick={(e) => handleHeartClick(profileId, e)}
                                >
                                  <Heart 
                                    className={`w-4 h-4 transition-all duration-300 ${
                                      isLiked 
                                        ? 'text-pink-500 fill-pink-500 scale-110' 
                                        : 'text-pink-400 hover:text-pink-500'
                                    }`} 
                                  />
                                </button>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-gray-500 flex items-center">
                                <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                                {profile.location}
                              </span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                <span className="text-xs font-semibold text-gray-700">{profile.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Profile Details */}
                        <div className="space-y-2">
                          <p className="text-xs text-gray-600 font-medium">{profile.bio}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {selectedTab === 'modelo' && (
                                <span className="text-xs font-bold text-green-600 bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1 rounded-full border border-green-200 flex items-center">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  {profile.earnings}
                                </span>
                              )}
                              {selectedTab === 'admirador' && (
                                <span className="text-xs font-bold text-blue-600 bg-gradient-to-r from-blue-100 to-cyan-100 px-3 py-1 rounded-full border border-blue-200 flex items-center">
                                  <Gift className="w-3 h-3 mr-1" />
                                  {profile.earnings}
                                </span>
                              )}
                              {selectedTab === 'top' && (
                                <span className="text-xs font-bold text-purple-600 bg-gradient-to-r from-purple-100 to-pink-100 px-3 py-1 rounded-full border border-purple-200 flex items-center">
                                  <Crown className="w-3 h-3 mr-1" />
                                  {profile.earnings}
                                </span>
                              )}
                            </div>
                            
                            <div className="flex items-center space-x-1 text-xs text-gray-500">
                              <Eye className="w-3 h-3" />
                              <span>{Math.floor(Math.random() * 100) + 20}</span>
                            </div>
                          </div>
                        </div>

                        {/* Interaction Indicators */}
                        {isLiked && (
                          <div className="absolute top-2 right-2">
                            <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-pulse drop-shadow-sm" />
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
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded-full opacity-70"></div>
      </div>
    </div>
  );
};
