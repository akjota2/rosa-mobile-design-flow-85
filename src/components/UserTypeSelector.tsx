import { useState } from 'react';
import { CatalogPopup } from './CatalogPopup';
import { ModelOnboardingFlow } from './ModelOnboardingFlow';
import { PersonStanding, Eye, Target, Sparkles, DollarSign, User, Shield } from 'lucide-react';

interface UserTypeSelectorProps {
  userType: 'modelo' | 'admirador' | null;
  setUserType: (type: 'modelo' | 'admirador' | null) => void;
}

export const UserTypeSelector = ({ userType, setUserType }: UserTypeSelectorProps) => {
  const [selectedType, setSelectedType] = useState<'modelo' | 'admirador'>('admirador');
  const [showModelOnboarding, setShowModelOnboarding] = useState(false);

  const handleModelClick = () => {
    // Fecha completamente e força reset do estado
    setShowModelOnboarding(false);
    // Delay maior para garantir que o componente seja completamente desmontado
    setTimeout(() => {
      setShowModelOnboarding(true);
    }, 200);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-primary-300/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-200/30 to-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-md mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 animate-fade-in">
          Uma plataforma onde{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600">
            admiradores
          </span>{' '}
          e{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600">
            modelos
          </span>{' '}
          se conectam diretamente
        </h2>
        
        <div className="flex rounded-full bg-gradient-to-r from-gray-100 to-gray-50 p-1 mb-10 max-w-xs mx-auto shadow-lg animate-scale-in">
          <button
            onClick={() => setSelectedType('admirador')}
            className={`flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all duration-300 transform ${
              selectedType === 'admirador'
                ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-xl scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:scale-105'
            }`}
          >
            ADMIRADOR
          </button>
          <button
            onClick={() => setSelectedType('modelo')}
            className={`flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all duration-300 transform ${
              selectedType === 'modelo'
                ? 'bg-gradient-to-r from-primary-500 to-pink-500 text-white shadow-xl scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:scale-105'
            }`}
          >
            MODELO
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 animate-fade-in border border-white/50">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-scale-in">
            <PersonStanding className="text-white" size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {selectedType === 'modelo' ? 'Seja uma Modelo' : 'Seja um Admirador'}
          </h3>
          
          <p className="text-gray-600 mb-8 text-lg">
            {selectedType === 'modelo' ? 'Monetize seu conteúdo' : 'Acesse conteúdo exclusivo'}
          </p>
          
          <div className="space-y-4 mb-10">
            {selectedType === 'modelo' ? (
              <>
                <div className="flex items-start space-x-3 text-left">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full flex items-center justify-center shadow-md mt-0.5 flex-shrink-0">
                    <DollarSign className="text-white" size={14} />
                  </div>
                  <span className="text-gray-700 text-sm">Lucro diário com conteúdo especial</span>
                </div>
                <div className="flex items-start space-x-3 text-left">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full flex items-center justify-center shadow-md mt-0.5 flex-shrink-0">
                    <User className="text-white" size={14} />
                  </div>
                  <span className="text-gray-700 text-sm">Você escolhe quanto mostrar e quanto cobrar</span>
                </div>
                <div className="flex items-start space-x-3 text-left">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full flex items-center justify-center shadow-md mt-0.5 flex-shrink-0">
                    <Shield className="text-white" size={14} />
                  </div>
                  <span className="text-gray-700 text-sm">Grupo fechado, seguro e anônimo</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start space-x-4 animate-fade-in text-left">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full flex items-center justify-center shadow-md mt-1 flex-shrink-0">
                    <Eye className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">Perfis femininos reais, sem censura</span>
                </div>
                <div className="flex items-start space-x-4 animate-fade-in delay-100 text-left">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full flex items-center justify-center shadow-md mt-1 flex-shrink-0">
                    <Target className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">Preferências atendidas no sigilo</span>
                </div>
                <div className="flex items-start space-x-4 animate-fade-in delay-200 text-left">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-pink-500 rounded-full flex items-center justify-center shadow-md mt-1 flex-shrink-0">
                    <Sparkles className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">Novas modelos toda semana</span>
                </div>
              </>
            )}
          </div>
          
          {selectedType === 'modelo' ? (
            <button 
              onClick={handleModelClick}
              className="w-full bg-gradient-to-r from-primary-500 to-pink-500 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-primary-600 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <DollarSign size={20} />
              <span>QUERO LUCRAR</span>
            </button>
          ) : (
            <CatalogPopup
              trigger={
                <button className="w-full bg-gradient-to-r from-primary-500 to-pink-500 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-primary-600 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Eye size={20} />
                  <span>QUERO ADMIRAR</span>
                </button>
              }
            />
          )}
        </div>
      </div>

      {/* Model Onboarding Flow com key para forçar remount */}
      <ModelOnboardingFlow 
        key={showModelOnboarding ? 'open' : 'closed'}
        isOpen={showModelOnboarding}
        onClose={() => setShowModelOnboarding(false)}
      />
    </section>
  );
};
