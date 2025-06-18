import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProfileCards } from '@/components/ProfileCards';
import { UserTypeSelector } from '@/components/UserTypeSelector';
import { Features } from '@/components/Features';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { BackRedirectPopup } from '@/components/BackRedirectPopup';
import { IPhoneMockup } from '@/components/IPhoneMockup';

const Index = () => {
  const [userType, setUserType] = useState<'modelo' | 'admirador' | null>(null);
  const [showBackRedirectPopup, setShowBackRedirectPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('showBackRedirect') === 'true') {
      setShowBackRedirectPopup(true);
      // Clean up the URL parameter
      window.history.replaceState({}, '', '/');
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <Hero />
      <UserTypeSelector userType={userType} setUserType={setUserType} />
      <IPhoneMockup />
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
