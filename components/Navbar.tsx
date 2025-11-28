import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
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
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-lg shadow-blue-900/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-1.5 rounded-lg mr-2 shadow-lg shadow-blue-500/30">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-widest uppercase text-white">
              金成航空 <span className="text-blue-400 text-sm font-semibold ml-1 hidden sm:inline-block">JINCHENG AVIATION</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold tracking-wide text-gray-300 hover:text-white uppercase transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-blue-400">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute w-full border-t border-gray-800 bg-[#020617]/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-4 text-base font-bold text-white hover:text-blue-400 hover:bg-white/5 rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;