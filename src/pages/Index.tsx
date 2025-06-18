
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProfileCards } from '@/components/ProfileCards';
import { UserTypeSelector } from '@/components/UserTypeSelector';
import { Features } from '@/components/Features';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { BackRedirectPopup } from '@/components/BackRedirectPopup';

const Index = () => {
  const [userType, setUserType] = useState<'modelo' | 'admirador' | null>(null);
  const [showBackRedirectPopup, setShowBackRedirectPopup] = useState(false);

  useEffect(() => {
    // Check if we should show the back redirect popup
    const shouldShowPopup = sessionStorage.getItem('showBackRedirectPopup');
    if (shouldShowPopup === 'true') {
      sessionStorage.removeItem('showBackRedirectPopup');
      setTimeout(() => {
        setShowBackRedirectPopup(true);
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <Hero />
      <UserTypeSelector userType={userType} setUserType={setUserType} />
      <ProfileCards />
      <Features />
      <FAQ />
      <Footer />
      
      {/* Back Redirect Popup */}
      <BackRedirectPopup 
        isOpen={showBackRedirectPopup}
        onClose={() => setShowBackRedirectPopup(false)}
      />
    </div>
  );
};

export default Index;
