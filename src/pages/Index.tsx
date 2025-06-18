
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProfileCards } from '@/components/ProfileCards';
import { UserTypeSelector } from '@/components/UserTypeSelector';
import { Features } from '@/components/Features';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [userType, setUserType] = useState<'modelo' | 'admirador' | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <Hero />
      <UserTypeSelector userType={userType} setUserType={setUserType} />
      <ProfileCards />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
