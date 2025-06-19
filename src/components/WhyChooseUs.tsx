
import { Clock, Shield, DollarSign, Lock, Users, Headphones, Star, TrendingUp, Zap } from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Ganhos Imediatos",
      description: "Comece a faturar nas primeiras 48h após aprovação. Sem enrolação, sem promessas vazias.",
      highlight: "R$ 500+ na primeira semana",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: Shield,
      title: "Você Controla Tudo",
      description: "Escolha o que mostrar, quanto cobrar e quando trabalhar. Total autonomia sobre seu conteúdo.",
      highlight: "100% no seu ritmo",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: DollarSign,
      title: "Pagamentos Garantidos",
      description: "Receba semanalmente via PIX. Sistema automatizado, sem atrasos ou burocracias.",
      highlight: "PIX toda sexta-feira",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Lock,
      title: "Máxima Privacidade",
      description: "Proteção total dos seus dados. Ambiente fechado e seguro, longe de curiosos.",
      highlight: "Discrição garantida",
      color: "from-rose-500 to-pink-600",
      bgColor: "from-rose-50 to-pink-50",
      borderColor: "border-rose-200"
    },
    {
      icon: Users,
      title: "Clientes Premium",
      description: "Admiradores verificados e dispostos a pagar bem. Público selecionado e respeitoso.",
      highlight: "Pagam R$ 50-200 por foto",
      color: "from-orange-500 to-amber-600",
      bgColor: "from-orange-50 to-amber-50",
      borderColor: "border-orange-200"
    },
    {
      icon: Headphones,
      title: "Suporte VIP",
      description: "Mentoria exclusiva para maximizar seus ganhos. Time especializado te guiando 24/7.",
      highlight: "Aumento de 300% nos ganhos",
      color: "from-indigo-500 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-rose-200/20 to-pink-200/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-200/20 to-blue-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-200/15 to-emerald-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-full px-6 py-3 mb-6 animate-fade-in">
            <Star className="w-5 h-5 text-rose-600" />
            <span className="text-rose-700 font-bold text-sm">POR QUE SOMOS A #1</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Por que escolher nossa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600">
              plataforma?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Transforme sua beleza em renda real. Junte-se a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-bold">
              centenas de modelos
            </span>{' '}
            que já faturam alto.
          </p>
        </div>

        {/* Enhanced grid with better spacing and animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/60 group animate-fade-in hover:-translate-y-2`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className={`bg-gradient-to-r ${benefit.bgColor} ${benefit.borderColor} border rounded-2xl p-4 text-center group-hover:scale-105 transition-transform duration-300`}>
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <p className="font-bold text-gray-800">
                      {benefit.highlight}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pronta para começar?
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Junte-se às milhares de mulheres que já transformaram suas vidas
            </p>
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200 rounded-full px-8 py-3 animate-bounce-gentle">
                <span className="text-rose-700 font-bold">👇 Continue lendo para saber como</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
