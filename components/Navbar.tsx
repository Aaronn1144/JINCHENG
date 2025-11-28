import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../constants';

interface NavbarProps {
  onNavClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      onNavClick(id);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-1.5 rounded-lg mr-2 shadow-lg shadow-blue-500/20">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-widest uppercase transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              金成航空 <span className="text-blue-600 text-sm font-semibold ml-1 hidden sm:inline-block">JINCHENG AVIATION</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors relative group ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 hover:text-blue-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute w-full border-t border-slate-100 bg-white/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-4 text-base font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
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