
import { Clock, Shield, DollarSign, Lock, Users, Headphones } from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ganhos Imediatos",
      description: "Comece a faturar nas primeiras 48h após aprovação. Sem enrolação, sem promessas vazias.",
      highlight: "R$ 500+ na primeira semana"
    },
    {
      icon: Shield,
      title: "Você Controla Tudo",
      description: "Escolha o que mostrar, quanto cobrar e quando trabalhar. Total autonomia sobre seu conteúdo.",
      highlight: "100% no seu ritmo"
    },
    {
      icon: DollarSign,
      title: "Pagamentos Garantidos",
      description: "Receba semanalmente via PIX. Sistema automatizado, sem atrasos ou burocracias.",
      highlight: "PIX toda sexta-feira"
    },
    {
      icon: Lock,
      title: "Máxima Privacidade",
      description: "Proteção total dos seus dados. Ambiente fechado e seguro, longe de curiosos.",
      highlight: "Discrição garantida"
    },
    {
      icon: Users,
      title: "Clientes Premium",
      description: "Admiradores verificados e dispostos a pagar bem. Público selecionado e respeitoso.",
      highlight: "Pagam R$ 50-200 por foto"
    },
    {
      icon: Headphones,
      title: "Suporte VIP",
      description: "Mentoria exclusiva para maximizar seus ganhos. Time especializado te guiando 24/7.",
      highlight: "Aumento de 300% nos ganhos"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher nossa plataforma?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforme sua beleza em renda real. Junte-se a centenas de modelos que já faturam alto.
          </p>
        </div>

        {/* Mobile: 2 columns, 3 rows */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <IconComponent className="text-white" size={20} />
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-2 text-center">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 text-center leading-relaxed">
                  {benefit.description}
                </p>
                <div className="bg-gradient-to-r from-primary-50 to-pink-50 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                  <p className="text-xs sm:text-sm font-bold text-primary-600">
                    {benefit.highlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
