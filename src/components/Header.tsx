import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center"> 
              <img src="https://iili.io/KNgfZyx.png" alt="Siber Shop Store" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Siber Shop Store</span>
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><a href="#pricing" onClick={() => scrollToSection('pricing')} className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#faq" onClick={() => scrollToSection('faq')} className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden pt-2 pb-4">
            <ul className="space-y-2">
              <li><Link to="/" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><a href="#pricing" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => { scrollToSection('pricing'); setIsOpen(false); }}>Pricing</a></li>
              <li><a href="#faq" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => { scrollToSection('faq'); setIsOpen(false); }}>FAQ</a></li>
              <li><Link to="/about" className="block py-2 hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>About Us</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
