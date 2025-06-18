
import { Heart, TrendingUp, Target } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export const ProfileCards = () => {
  const modelProfiles = [
    { name: 'Lari', age: 22, shoe: 36, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face' },
    { name: 'Ju', age: 24, shoe: 37, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face' },
    { name: 'Gabi', age: 23, shoe: 35, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face' }
  ];

  const admirerProfiles = [
    { name: 'João', age: 28, shoe: 42, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { name: 'Pedro', age: 32, shoe: 40, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
    { name: 'Lucas', age: 26, shoe: 41, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' }
  ];

  const topProfiles = [
    { name: 'Ana', age: 25, shoe: 37, image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face' },
    { name: 'Maria', age: 27, shoe: 36, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face' }
  ];

  const renderProfileList = (profiles: typeof modelProfiles) => (
    <div className="space-y-4">
      {profiles.map((profile, index) => (
        <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
          <div className="relative">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-[#ec4899] transition-colors">{profile.name}, {profile.age}</h3>
            <p className="text-sm text-gray-500">Calça: {profile.shoe}</p>
          </div>
          <button className="p-2 hover:bg-pink-50 rounded-full transition-all duration-300 group opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
            <Heart className="w-5 h-5 text-gray-400 group-hover:text-[#ec4899] transition-colors" />
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <Tabs defaultValue="modelo" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-50 p-1 rounded-xl">
              <TabsTrigger 
                value="modelo" 
                className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 font-semibold rounded-lg"
              >
                Modelo
              </TabsTrigger>
              <TabsTrigger 
                value="admirador" 
                className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 font-semibold rounded-lg"
              >
                Admirador
              </TabsTrigger>
              <TabsTrigger 
                value="top" 
                className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 font-semibold rounded-lg"
              >
                Top+
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="modelo" className="mt-0">
              {renderProfileList(modelProfiles)}
            </TabsContent>
            
            <TabsContent value="admirador" className="mt-0">
              {renderProfileList(admirerProfiles)}
            </TabsContent>
            
            <TabsContent value="top" className="mt-0">
              {renderProfileList(topProfiles)}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="bg-gradient-to-r from-[#e879a6] to-[#ec4899] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
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
          
          <div className="bg-gradient-to-r from-[#e879a6] to-[#ec4899] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
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
