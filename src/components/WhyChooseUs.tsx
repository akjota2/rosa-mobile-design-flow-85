
import { Check, DollarSign, Shield, Clock, Users, TrendingUp } from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <DollarSign className="text-primary-500" size={24} />,
      title: "Ganhos Imediatos",
      description: "Comece a faturar nas primeiras 48h após aprovação. Sem enrolação, sem promessas vazias.",
      highlight: "R$ 500+ na primeira semana"
    },
    {
      icon: <Clock className="text-primary-500" size={24} />,
      title: "Você Controla Tudo",
      description: "Escolha o que mostrar, quanto cobrar e quando trabalhar. Total autonomia sobre seu conteúdo.",
      highlight: "100% no seu ritmo"
    },
    {
      icon: <Check className="text-primary-500" size={24} />,
      title: "Pagamentos Garantidos",
      description: "Receba semanalmente via PIX. Sistema automatizado, sem atrasos ou burocracias.",
      highlight: "PIX toda sexta-feira"
    },
    {
      icon: <Shield className="text-primary-500" size={24} />,
      title: "Máxima Privacidade",
      description: "Proteção total dos seus dados. Ambiente fechado e seguro, longe de curiosos.",
      highlight: "Discrição garantida"
    },
    {
      icon: <Users className="text-primary-500" size={24} />,
      title: "Clientes Premium",
      description: "Admiradores verificados e dispostos a pagar bem. Público selecionado e respeitoso.",
      highlight: "Pagam R$ 50-200 por foto"
    },
    {
      icon: <TrendingUp className="text-primary-500" size={24} />,
      title: "Suporte VIP",
      description: "Mentoria exclusiva para maximizar seus ganhos. Time especializado te guiando 24/7.",
      highlight: "Aumento de 300% nos ganhos"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-pink-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tl from-pink-200/30 to-primary-200/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-md mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
          Por Que Escolher Nossa{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-pink-600">
            Plataforma?
          </span>
        </h2>
        
        <div className="bg-gradient-to-r from-primary-500 to-pink-600 text-white rounded-2xl p-6 mb-8 shadow-xl animate-fade-in delay-100">
          <p className="text-lg font-bold mb-2">Mais de 15.000 modelos já faturaram</p>
          <p className="text-2xl font-black">mais de R$ 2.3 milhões</p>
          <p className="text-sm opacity-90 mt-1">com a gente</p>
        </div>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 text-left animate-fade-in"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-pink-50 rounded-xl flex items-center justify-center shadow-sm border border-primary-100/50 mt-1">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                  <div className="flex items-center space-x-2">
                    <Check className="text-green-500" size={16} />
                    <span className="text-green-600 font-semibold text-sm">{benefit.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
