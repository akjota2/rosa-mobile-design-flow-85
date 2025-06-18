
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export const IPhoneMockup = () => {
  const [selectedTab, setSelectedTab] = useState('modelo');

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
    // Aqui você pode adicionar navegação ou ações específicas
  };

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="relative">
        {/* iPhone Frame */}
        <div className="w-[300px] h-[600px] bg-black rounded-[40px] p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
            
            {/* Screen Content */}
            <div className="h-full bg-gradient-to-br from-pink-50 to-white pt-8 px-4">
              {/* Header */}
              <div className="text-center mb-6 pt-2">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Conecte-se</h2>
                <p className="text-sm text-gray-600">Escolha seu perfil</p>
              </div>

              {/* Tabs */}
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4 bg-gray-100 p-1 rounded-xl h-10">
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
                <div className="space-y-3 max-h-[420px] overflow-y-auto">
                  {getCurrentProfiles().map((profile, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                      onClick={() => handleProfileClick(profile.name)}
                    >
                      <div className="relative">
                        <img
                          src={profile.image}
                          alt={profile.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {profile.isOnline && (
                          <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {profile.name}, {profile.age}
                        </h3>
                        <p className="text-xs text-gray-500">
                          Calça: {profile.size}
                        </p>
                      </div>
                      <button className="p-2 hover:bg-pink-50 rounded-full transition-all duration-300">
                        <Heart className="w-4 h-4 text-pink-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
};
