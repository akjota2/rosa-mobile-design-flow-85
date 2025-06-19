
import { useState } from 'react';
import { CatalogPopup } from './CatalogPopup';
import { ModelOnboardingFlow } from './ModelOnboardingFlow';
import { PersonStanding, Eye, Target, Sparkles, DollarSign, User, Shield, Star, Crown, Zap } from 'lucide-react';

interface UserTypeSelectorProps {
  userType: 'modelo' | 'admirador' | null;
  setUserType: (type: 'modelo' | 'admirador' | null) => void;
}

export const UserTypeSelector = ({ userType, setUserType }: UserTypeSelectorProps) => {
  const [selectedType, setSelectedType] = useState<'modelo' | 'admirador'>('admirador');
  const [showModelOnboarding, setShowModelOnboarding] = useState(false);

  const handleModelClick = () => {
    setShowModelOnboarding(false);
    setTimeout(() => {
      setShowModelOnboarding(true);
    }, 200);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-rose-300/20 to-pink-300/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-300/20 to-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-300/15 to-rose-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Enhanced header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-6 py-3 mb-6 animate-fade-in">
            <Crown className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-bold text-sm">PLATAFORMA PREMIUM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 animate-fade-in leading-tight">
            Uma plataforma onde{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600">
              admiradores
            </span>{' '}
            e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600">
              modelos
            </span>{' '}
            se conectam diretamente
          </h2>
        </div>
        
        {/* Enhanced type selector */}
        <div className="flex rounded-3xl bg-gradient-to-r from-white to-gray-50 p-2 mb-12 max-w-md mx-auto shadow-2xl animate-scale-in border border-gray-200">
          <button
            onClick={() => setSelectedType('admirador')}
            className={`flex-1 py-4 px-8 rounded-2xl text-base font-bold transition-all duration-500 transform ${
              selectedType === 'admirador'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:scale-105 hover:bg-white/80'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Eye size={20} />
              <span>ADMIRADOR</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedType('modelo')}
            className={`flex-1 py-4 px-8 rounded-2xl text-base font-bold transition-all duration-500 transform ${
              selectedType === 'modelo'
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:scale-105 hover:bg-white/80'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Star size={20} />
              <span>MODELO</span>
            </div>
          </button>
        </div>

        {/* Enhanced content card */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 md:p-12 animate-fade-in border border-white/60 hover:shadow-3xl transition-all duration-500">
          <div className={`w-24 h-24 bg-gradient-to-br ${selectedType === 'modelo' ? 'from-rose-500 to-pink-600' : 'from-blue-500 to-cyan-600'} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl animate-scale-in hover:scale-110 transition-transform duration-300`}>
            {selectedType === 'modelo' ? (
              <Star className="text-white" size={40} />
            ) : (
              <Eye className="text-white" size={40} />
            )}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {selectedType === 'modelo' ? 'Seja uma Modelo' : 'Seja um Admirador'}
          </h3>
          
          <p className="text-gray-600 mb-10 text-xl font-medium">
            {selectedType === 'modelo' ? 'Monetize seu conteúdo exclusivo' : 'Acesse conteúdo premium exclusivo'}
          </p>
          
          <div className="space-y-6 mb-12">
            {selectedType === 'modelo' ? (
              <>
                <div className="flex items-start space-x-4 text-left bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg mt-1 flex-shrink-0">
                    <DollarSign className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Lucro diário garantido</h4>
                    <p className="text-gray-700 text-sm">Ganhe R$ 200-500+ por dia com conteúdo especial</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 text-left bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-2xl border border-purple-200 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg mt-1 flex-shrink-0">
                    <User className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Controle total</h4>
                    <p className="text-gray-700 text-sm">Você escolhe quanto mostrar e quanto cobrar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 text-left bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-200 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg mt-1 flex-shrink-0">
                    <Shield className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Máxima segurança</h4>
                    <p className="text-gray-700 text-sm">Grupo fechado, seguro e 100% anônimo</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start space-x-4 text-left bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-2xl border border-rose-200 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg mt-1 flex-shrink-0">
                    <Eye className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Perfis reais verificados</h4>
                    <p className="text-gray-700 text-sm">Acesso a modelos autênticas, sem censura</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 text-left bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-2xl border border-purple-200 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg mt-1 flex-shrink-0">
                    <Target className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Preferências personalizadas</h4>
                    <p className="text-gray-700 text-sm">Conteúdo sob medida para seus gostos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 text-left bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-2xl border border-orange-200 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg mt-1 flex-shrink-0">
                    <Sparkles className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Novidades constantes</h4>
                    <p className="text-gray-700 text-sm">Novas modelos e conteúdos toda semana</p>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {selectedType === 'modelo' ? (
            <button 
              onClick={handleModelClick}
              className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white py-6 px-8 rounded-3xl font-black text-xl hover:from-rose-600 hover:via-pink-600 hover:to-rose-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center space-x-3 group"
            >
              <DollarSign size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>QUERO LUCRAR AGORA</span>
              <Zap size={20} className="animate-pulse" />
            </button>
          ) : (
            <CatalogPopup
              trigger={
                <button className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white py-6 px-8 rounded-3xl font-black text-xl hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center space-x-3 group">
                  <Eye size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>QUERO ADMIRAR AGORA</span>
                  <Star size={20} className="animate-pulse" />
                </button>
              }
            />
          )}
        </div>
      </div>

      <ModelOnboardingFlow 
        key={showModelOnboarding ? 'open' : 'closed'}
        isOpen={showModelOnboarding}
        onClose={() => setShowModelOnboarding(false)}
      />
    </section>
  );
};
