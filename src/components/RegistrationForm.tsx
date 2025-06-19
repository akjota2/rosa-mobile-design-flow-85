
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { VipPopup } from '@/components/VipPopup';
import { User, Mail, Phone, Lock, Calendar, MapPin } from 'lucide-react';

export const RegistrationForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showVipPopup, setShowVipPopup] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: '',
    idade: '',
    cidade: '',
    estado: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowVipPopup(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted');
    // Handle login logic here
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-gray-50 to-pink-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-pink-200/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-200/20 to-primary-200/15 rounded-full blur-2xl"></div>
      
      <div className="max-w-md mx-auto relative z-10">
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border border-white/60 rounded-3xl overflow-hidden">
          <CardHeader className="text-center pb-8 bg-gradient-to-br from-primary-50/50 to-pink-50/30">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <User className="text-white" size={24} />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {isLogin ? 'Entrar na Plataforma' : 'Cadastre-se Gratuitamente'}
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              {isLogin ? 'Acesse sua conta para continuar' : 'Comece a faturar em poucos minutos'}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            {isLogin ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail" className="text-gray-700 font-medium">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      id="loginEmail"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="loginPassword" className="text-gray-700 font-medium">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input
                      id="loginPassword"
                      type="password"
                      placeholder="Sua senha"
                      className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-400"
                      required
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  ENTRAR
                </Button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-400"
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
                        className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-gray-700 font-medium">WhatsApp</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-400"
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
                          className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-400"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cidade" className="text-gray-700 font-medium">Cidade</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                        <Input
                          id="cidade"
                          name="cidade"
                          type="text"
                          placeholder="São Paulo"
                          value={formData.cidade}
                          onChange={handleInputChange}
                          className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-400"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
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
                        className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-400"
                        required
                      />
                    </div>
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
                        className="pl-10 h-12 rounded-xl border-gray-200 focus:border-primary-400"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  CADASTRAR GRATUITAMENTE
                </Button>
              </form>
            )}
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                {isLogin ? 'Não tem conta? Cadastre-se aqui' : 'Já tem conta? Faça login'}
              </button>
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
