
import { useState } from 'react';

interface UserTypeSelectorProps {
  userType: 'modelo' | 'admirador' | null;
  setUserType: (type: 'modelo' | 'admirador' | null) => void;
}

export const UserTypeSelector = ({ userType, setUserType }: UserTypeSelectorProps) => {
  const [selectedType, setSelectedType] = useState<'modelo' | 'admirador'>('modelo');

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Uma plataforma onde admiradores e modelos se conectam diretamente
        </h2>
        
        <div className="flex rounded-full bg-gray-100 p-1 mb-8 max-w-xs mx-auto">
          <button
            onClick={() => setSelectedType('admirador')}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
              selectedType === 'admirador'
                ? 'bg-primary-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            ADMIRADOR
          </button>
          <button
            onClick={() => setSelectedType('modelo')}
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
              selectedType === 'modelo'
                ? 'bg-primary-500 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            MODELO
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
          <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl">
              {selectedType === 'modelo' ? '👤' : '👁'}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {selectedType === 'modelo' ? 'Seja uma Modelo' : 'Seja um Admirador'}
          </h3>
          
          <p className="text-gray-600 mb-6">
            {selectedType === 'modelo' ? 'Monetize seu conteúdo' : 'Acesse conteúdo exclusivo'}
          </p>
          
          <div className="space-y-4 mb-8">
            {selectedType === 'modelo' ? (
              <>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-500">💰</span>
                  </div>
                  <span className="text-gray-700">Lucro diário com conteúdo especial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-500">📊</span>
                  </div>
                  <span className="text-gray-700">Você escolhe quanto mostrar e quanto cobrar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-500">🔒</span>
                  </div>
                  <span className="text-gray-700">Grupo fechado, seguro e anônimo</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-500">👁</span>
                  </div>
                  <span className="text-gray-700">Perfis femininos reais, sem censura</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-500">🎯</span>
                  </div>
                  <span className="text-gray-700">Preferências atendidas no sigilo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-500">✨</span>
                  </div>
                  <span className="text-gray-700">Novas modelos toda semana</span>
                </div>
              </>
            )}
          </div>
          
          <button className="w-full bg-primary-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl">
            {selectedType === 'modelo' ? '💰 QUERO LUCRAR' : '❤️ QUERO ADMIRAR'}
          </button>
        </div>
      </div>
    </section>
  );
};
