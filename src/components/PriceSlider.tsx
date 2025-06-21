
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

const priceRanges = [
  {
    min: 15,
    max: 25,
    title: "Iniciante",
    description: "Perfeito para começar",
    examples: ["Foto básica dos pés", "Pose simples", "Lighting natural"],
    tips: "Foque na qualidade da imagem e higiene impecável dos pés.",
    color: "from-green-400 to-green-600"
  },
  {
    min: 26,
    max: 50,
    title: "Intermediária",
    description: "Já tem experiência",
    examples: ["Poses elaboradas", "Acessórios simples", "Diferentes ângulos"],
    tips: "Use acessórios como anéis, pulseiras ou esmaltes especiais.",
    color: "from-blue-400 to-blue-600"
  },
  {
    min: 51,
    max: 80,
    title: "Experiente",
    description: "Portfolio estabelecido",
    examples: ["Temas específicos", "Cenários elaborados", "Props criativos"],
    tips: "Crie temas únicos e desenvolva seu estilo próprio.",
    color: "from-purple-400 to-purple-600"
  },
  {
    min: 81,
    max: 150,
    title: "Premium",
    description: "Conteúdo exclusivo",
    examples: ["Fotos artísticas", "Edição profissional", "Requests personalizados"],
    tips: "Invista em fotografia profissional e atendimento VIP.",
    color: "from-pink-400 to-pink-600"
  },
  {
    min: 151,
    max: 300,
    title: "Luxo",
    description: "Top tier",
    examples: ["Sessões temáticas", "Vídeos curtos", "Interação personalizada"],
    tips: "Ofereça experiências únicas e atendimento exclusivo.",
    color: "from-rose-400 to-rose-600"
  }
];

export const PriceSlider = () => {
  const [sliderValue, setSliderValue] = useState([50]);
  
  const getCurrentRange = () => {
    const value = sliderValue[0];
    return priceRanges.find(range => value >= range.min && value <= range.max) || priceRanges[0];
  };

  const currentRange = getCurrentRange();

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          💰 Descubra Seu Potencial de Ganhos
        </h3>
        <p className="text-gray-600 text-sm">
          Mova o slider para ver diferentes faixas de preço
        </p>
      </div>

      {/* Price Display */}
      <div className="text-center mb-6">
        <div className={`inline-block px-6 py-3 rounded-2xl bg-gradient-to-r ${currentRange.color} text-white shadow-lg`}>
          <div className="text-2xl font-bold">R$ {sliderValue[0]}</div>
          <div className="text-sm opacity-90">por foto</div>
        </div>
      </div>

      {/* Slider */}
      <div className="mb-8 px-4">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={300}
          min={15}
          step={5}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>R$ 15</span>
          <span>R$ 300</span>
        </div>
      </div>

      {/* Current Range Info */}
      <div className="bg-gray-50 rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="font-bold text-gray-900">{currentRange.title}</h4>
            <p className="text-sm text-gray-600">{currentRange.description}</p>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-700">
              R$ {currentRange.min} - R$ {currentRange.max}
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="mb-4">
        <h5 className="font-semibold text-gray-900 mb-2 text-sm">O que incluir nesta faixa:</h5>
        <div className="grid grid-cols-1 gap-2">
          {currentRange.examples.map((example, index) => (
            <div key={index} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 flex-shrink-0"></div>
              {example}
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-pink-50 rounded-xl p-4 border-l-4 border-pink-500">
        <h5 className="font-semibold text-pink-900 mb-2 text-sm flex items-center">
          💡 Dica para esta faixa:
        </h5>
        <p className="text-pink-800 text-sm leading-relaxed">
          {currentRange.tips}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div className="bg-green-50 rounded-xl p-3">
          <div className="text-lg font-bold text-green-700">
            R$ {(sliderValue[0] * 20).toLocaleString()}
          </div>
          <div className="text-xs text-green-600">Potencial mensal*</div>
        </div>
        <div className="bg-blue-50 rounded-xl p-3">
          <div className="text-lg font-bold text-blue-700">
            {Math.round(sliderValue[0] / 2.5)} min
          </div>
          <div className="text-xs text-blue-600">Tempo por foto</div>
        </div>
      </div>
      
      <div className="text-center mt-3">
        <p className="text-xs text-gray-500">
          *Baseado em 20 fotos vendidas por mês
        </p>
      </div>
    </div>
  );
};
