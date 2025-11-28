import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import AirframeSection from './components/AirframeSection';
import LeasingSection from './components/LeasingSection';
import Footer from './components/Footer';

function App() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleEnterSite = (targetId: string) => {
    setIsContentVisible(true);
    // Allow time for React to render the new sections before calculating scroll position
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // height of nav
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <Navbar onNavClick={handleEnterSite} />
      
      <main>
        <Hero 
          onEnterSite={() => handleEnterSite('drones')} 
          onContactClick={() => handleEnterSite('contact')} 
        />
        
        {isContentVisible && (
          <div className="animate-fade-in-up">
            <ProductCatalog />
            <AirframeSection />
            <LeasingSection />
            <Footer />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;