
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que exatamente eu recebo depois de pagar a plataforma?",
      answer: "Você terá acesso completo ao catálogo de modelos, fotos exclusivas, vídeos e conteúdos premium."
    },
    {
      question: "É assinatura mensal ou pagamento único?",
      answer: "Oferecemos ambas as opções: planos mensais com benefícios contínuos e pacotes únicos para conteúdos específicos."
    },
    {
      question: "Tem nudez ou conteúdo explícito?",
      answer: "Sim, nossa plataforma oferece conteúdo adulto exclusivo e explícito para maiores de 18 anos."
    },
    {
      question: "Posso acessar pelo celular?",
      answer: "Sim! Nossa plataforma é totalmente otimizada para dispositivos móveis com app exclusivo."
    },
    {
      question: "Sou mulher. Posso participar também?",
      answer: "Claro! Mulheres podem se cadastrar tanto como modelos para monetizar quanto como admiradoras."
    },
    {
      question: "Posso me cadastrar como modelo e ganhar com isso?",
      answer: "Sim! Oferecemos excelentes oportunidades de monetização para modelos com pagamentos justos e seguros."
    },
    {
      question: "Posso divulgar e ganhar dinheiro com isso?",
      answer: "Temos um programa de afiliados muito atrativo com comissões generosas para divulgadores."
    },
    {
      question: "Esse conteúdo é legalizado?",
      answer: "Sim, todo nosso conteúdo segue as leis brasileiras e internacionais, com modelos maiores de idade."
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-900">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-500 mb-2">FAQ</h2>
          <p className="text-white text-lg">Perguntas Frequentes</p>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full p-4 text-left flex items-center justify-between text-white hover:bg-gray-700 transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary-500 transition-transform ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openQuestion === index && (
                <div className="px-4 pb-4 text-gray-300 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
