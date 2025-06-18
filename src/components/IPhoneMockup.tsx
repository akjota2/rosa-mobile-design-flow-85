
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export const IPhoneMockup = () => {
  const [selectedTab, setSelectedTab] = useState('modelo');
  const [likedProfiles, setLikedProfiles] = useState<Set<string>>(new Set());

  const modelProfiles = [
    { 
      name: 'Lari', 
      age: 22, 
      size: 36, 
      image: '/lovable-uploads/5d3b86d2-dbd3-42d6-bad3-5fd9529b0a78.png',
      isOnline: true
    },
    { 
      name: 'Ju', 
      age: 24, 
      size: 37, 
      image: '/lovable-uploads/95f639f1-5e1b-460e-872e-133690efaad5.png',
      isOnline: true
    },
    { 
      name: 'Gabi', 
      age: 23, 
      size: 35, 
      image: '/lovable-uploads/a17b990f-dd9d-413b-bb48-03cd407fc798.png',
      isOnline: true
    },
    { 
      name: 'Carol', 
      age: 26, 
      size: 38, 
      image: '/lovable-uploads/9d336adb-200c-496a-9ec4-4204bd1d2717.png',
      isOnline: false
    }
  ];

  const admirerProfiles = [
    { 
      name: 'João', 
      age: 28, 
      size: 42, 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      isOnline: true
    },
    { 
      name: 'Pedro', 
      age: 32, 
      size: 40, 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      isOnline: false
    },
    { 
      name: 'Lucas', 
      age: 26, 
      size: 41, 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      isOnline: true
    },
    { 
      name: 'Rafael', 
      age: 29, 
      size: 43, 
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face',
      isOnline: true
    },
    { 
      name: 'Diego', 
      age: 31, 
      size: 41, 
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      isOnline: false
    }
  ];

  const topProfiles = [
    { 
      name: 'Ana', 
      age: 25, 
      size: 37, 
      image: '/lovable-uploads/9d336adb-200c-496a-9ec4-4204bd1d2717.png',
      isOnline: true
    },
    { 
      name: 'Maria', 
      age: 27, 
      size: 36, 
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      isOnline: true
    },
    { 
      name: 'Sofia', 
      age: 24, 
      size: 35, 
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      isOnline: true
    },
    { 
      name: 'Bianca', 
      age: 28, 
      size: 38, 
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face',
      isOnline: false
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
    console.log(`Clicou no perfil de ${profileName}`);
  };

  const handleHeartClick = (profileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLikedProfiles = new Set(likedProfiles);
    if (likedProfiles.has(profileName)) {
      newLikedProfiles.delete(profileName);
    } else {
      newLikedProfiles.add(profileName);
    }
    setLikedProfiles(newLikedProfiles);
  };

  return (
    <div className="flex justify-center items-center py-6 px-2 sm:py-12 sm:px-4">
      <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
        {/* iPhone Frame */}
        <div className="w-full aspect-[9/19.5] bg-black rounded-[8%] p-1 sm:p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[7%] overflow-hidden relative">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-5 sm:h-6 bg-black rounded-b-2xl z-10"></div>
            
            {/* Screen Content */}
            <div className="h-full bg-gradient-to-br from-pink-50 to-white pt-6 sm:pt-8 px-3 sm:px-4">
              {/* Header */}
              <div className="text-center mb-4 sm:mb-6 pt-1 sm:pt-2">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Conecte-se</h2>
                <p className="text-xs sm:text-sm text-gray-600">Escolha seu perfil</p>
              </div>

              {/* Tabs */}
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-3 sm:mb-4 bg-gray-100 p-0.5 sm:p-1 rounded-xl h-8 sm:h-10">
                  <TabsTrigger 
                    value="modelo" 
                    className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white text-xs font-semibold rounded-lg transition-all duration-300"
                  >
                    Modelo
                  </TabsTrigger>
                  <TabsTrigger 
                    value="admirador" 
                    className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white text-xs font-semibold rounded-lg transition-all duration-300"
                  >
                    Admirador
                  </TabsTrigger>
                  <TabsTrigger 
                    value="top" 
                    className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white text-xs font-semibold rounded-lg transition-all duration-300"
                  >
                    Top+
                  </TabsTrigger>
                </TabsList>
                
                {/* Profile List */}
                <div className="space-y-2 sm:space-y-3 max-h-[350px] sm:max-h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  {getCurrentProfiles().map((profile, index) => {
                    const profileId = `${selectedTab}-${profile.name}`;
                    const isLiked = likedProfiles.has(profileId);
                    
                    return (
                      <div 
                        key={index} 
                        className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] border border-gray-100"
                        onClick={() => handleProfileClick(profile.name)}
                      >
                        <div className="relative flex-shrink-0">
                          <img
                            src={profile.image}
                            alt={profile.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                          />
                          {profile.isOnline && (
                            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">
                            {profile.name}, {profile.age}
                          </h3>
                          <p className="text-xs text-gray-500">
                            Calça: {profile.size}
                          </p>
                        </div>
                        <button 
                          className="p-1.5 sm:p-2 hover:bg-pink-50 rounded-full transition-all duration-300 flex-shrink-0"
                          onClick={(e) => handleHeartClick(profileId, e)}
                        >
                          <Heart 
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 ${
                              isLiked 
                                ? 'text-pink-500 fill-pink-500 scale-110' 
                                : 'text-pink-400 hover:text-pink-500'
                            }`} 
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-0.5 sm:bottom-1 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
};
