import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import AirframeSection from './components/AirframeSection';
import LeasingSection from './components/LeasingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <ProductCatalog />
        <AirframeSection />
        <LeasingSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
