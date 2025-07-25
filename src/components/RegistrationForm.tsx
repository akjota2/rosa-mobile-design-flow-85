
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { VipPopup } from '@/components/VipPopup';
import { User, Mail, Lock, Calendar, MapPin } from 'lucide-react';

interface Cidade {
  id: number;
  nome: string;
  microrregiao: {
    mesorregiao: {
      UF: {
        sigla: string;
        nome: string;
      };
    };
  };
}

// Função para normalizar texto (remover acentos e converter para minúsculo)
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export const RegistrationForm = () => {
  const [showVipPopup, setShowVipPopup] = useState(false);
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [cidadeSuggestions, setCidadeSuggestions] = useState<Cidade[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    idade: '',
    cidade: '',
    estado: ''
  });

  // Buscar todas as cidades do IBGE ao carregar o componente
  useEffect(() => {
    const fetchCidades = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
        const data = await response.json();
        setCidades(data);
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
      }
    };

    fetchCidades();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Filtrar cidades conforme o usuário digita (com busca sem acentos)
    if (name === 'cidade' && value.length >= 2) {
      const normalizedInput = normalizeText(value);
      const filtered = cidades
        .filter(cidade => 
          normalizeText(cidade.nome).includes(normalizedInput)
        )
        .slice(0, 10); // Limitar a 10 sugestões
      setCidadeSuggestions(filtered);
      setShowSuggestions(true);
    } else if (name === 'cidade') {
      setShowSuggestions(false);
    }
  };

  const handleCidadeSelect = (cidade: Cidade) => {
    setFormData(prev => ({
      ...prev,
      cidade: cidade.nome,
      estado: cidade.microrregiao.mesorregiao.UF.sigla
    }));
    setShowSuggestions(false);
  };

  // Verificar se as senhas são iguais e se a senha tem pelo menos 6 caracteres
  const senhaValida = formData.senha.length >= 6;
  const senhasIguais = formData.senha === formData.confirmarSenha;
  const podeEnviar = formData.nome && formData.email && 
    formData.senha && formData.confirmarSenha && formData.idade && 
    formData.cidade && senhaValida && senhasIguais;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senhaValida || !senhasIguais) {
      return;
    }
    console.log('Form submitted:', formData);
    setShowVipPopup(true);
  };

  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-to-br from-white via-gray-50 to-pink-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-pink-200/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-200/20 to-primary-200/15 rounded-full blur-2xl"></div>
      
      <div className="max-w-md mx-auto relative z-10">
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border border-white/60 rounded-2xl md:rounded-3xl overflow-hidden">
          <CardHeader className="text-center pb-6 md:pb-8 bg-gradient-to-br from-primary-50/50 to-pink-50/30">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
              <User className="text-white" size={20} />
            </div>
            <CardTitle className="text-xl md:text-2xl font-bold text-gray-900">
              Cadastre-se
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Comece a faturar em poucos minutos
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-4 md:p-8">
            {/* Texto discreto sobre privacidade */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Preencha todas as informações para continuar. Seus dados pessoais não serão exibidos publicamente no aplicativo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-gray-700 font-medium">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="pl-10 h-10 md:h-12 rounded-xl border-gray-200 focus:border-primary-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-10 md:h-12 rounded-xl border-gray-200 focus:border-primary-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="idade" className="text-gray-700 font-medium">Idade</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                      <Input
                        id="idade"
                        name="idade"
                        type="number"
                        placeholder="25"
                        value={formData.idade}
                        onChange={handleInputChange}
                        className="pl-10 h-10 md:h-12 rounded-xl border-gray-200 focus:border-primary-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 relative">
                    <Label htmlFor="cidade" className="text-gray-700 font-medium">Cidade</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-gray-400 z-10" size={18} />
                      <Input
                        id="cidade"
                        name="cidade"
                        type="text"
                        placeholder="Digite sua cidade"
                        value={formData.cidade}
                        onChange={handleInputChange}
                        className="pl-10 h-10 md:h-12 rounded-xl border-gray-200 focus:border-primary-400"
                        required
                        autoComplete="off"
                      />
                      {showSuggestions && cidadeSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                          {cidadeSuggestions.map((cidade) => (
                            <button
                              key={cidade.id}
                              type="button"
                              onClick={() => handleCidadeSelect(cidade)}
                              className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                            >
                              <div className="text-gray-900 font-medium">{cidade.nome}</div>
                              <div className="text-gray-500 text-sm">{cidade.microrregiao.mesorregiao.UF.nome} - {cidade.microrregiao.mesorregiao.UF.sigla}</div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {formData.estado && (
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Estado</Label>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 md:py-3 text-gray-700">
                      {formData.estado}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="senha" className="text-gray-700 font-medium">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      id="senha"
                      name="senha"
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      value={formData.senha}
                      onChange={handleInputChange}
                      className={`pl-10 h-10 md:h-12 rounded-xl border-gray-200 focus:border-primary-400 ${
                        formData.senha && !senhaValida ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                      required
                    />
                  </div>
                  {formData.senha && !senhaValida && (
                    <p className="text-red-500 text-sm">A senha deve ter pelo menos 6 caracteres</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmarSenha" className="text-gray-700 font-medium">Confirmar Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      id="confirmarSenha"
                      name="confirmarSenha"
                      type="password"
                      placeholder="Confirme sua senha"
                      value={formData.confirmarSenha}
                      onChange={handleInputChange}
                      className={`pl-10 h-10 md:h-12 rounded-xl border-gray-200 focus:border-primary-400 ${
                        formData.confirmarSenha && (!senhasIguais || !senhaValida) ? 'border-red-400 focus:border-red-400' : ''
                      }`}
                      required
                    />
                  </div>
                  {formData.confirmarSenha && !senhasIguais && (
                    <p className="text-red-500 text-sm">As senhas não coincidem</p>
                  )}
                </div>
              </div>
              
              <Button 
                type="submit"
                disabled={!podeEnviar}
                className={`w-full font-bold py-3 md:py-4 rounded-xl text-base md:text-lg shadow-lg transform transition-all duration-300 ${
                  podeEnviar 
                    ? 'bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white hover:shadow-xl hover:scale-105' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                CADASTRAR
              </Button>
            </form>
            
            <div className="mt-4 md:mt-6 text-center">
              <span className="text-gray-600 font-medium cursor-default">
                Já tem conta? Faça login
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <VipPopup 
        trigger={<></>}
        autoOpen={showVipPopup}
        onClose={() => setShowVipPopup(false)}
      />
    </section>
  );
};
