import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string, category?: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (category && window.setActiveCategory) {
        window.setActiveCategory(category);
      }
    }
  };

  return (
    <footer id="about" className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src="https://iili.io/KNgfZyx.png" alt="Siber Shop Store" className="h-6 w-6 mr-2" />
              <h3 className="font-bold text-xl">Siber Shop Store</h3>
            </div>
            <p className="text-gray-400 mb-4">
              PT. Siber Shop Teknologi Indonesia
            </p>
            <p className="text-gray-400 mb-4">
              Siber Shop Store adalah sebuah startup yang bergerak di bidang jasa dan layanan digital IT. 
              Kami sudah resmi terdaftar di AHU dan berkomitmen memberikan layanan berkualitas tinggi untuk 
              memenuhi kebutuhan digital Anda.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/sibershopstore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/sibershopstore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/company/sibershopstore" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Layanan Kami</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#pricing" onClick={() => scrollToSection('pricing', 'social')} className="hover:text-blue-400 transition-colors">Sosial Media</a></li>
              <li><a href="#pricing" onClick={() => scrollToSection('pricing', 'web')} className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#pricing" onClick={() => scrollToSection('pricing', 'seo')} className="hover:text-blue-400 transition-colors">SEO</a></li>
              <li><a href="#pricing" onClick={() => scrollToSection('pricing', 'support')} className="hover:text-blue-400 transition-colors">IT Support</a></li>
              <li><a href="#pricing" onClick={() => scrollToSection('pricing', 'marketing')} className="hover:text-blue-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#pricing" onClick={() => scrollToSection('pricing', 'ai')} className="hover:text-blue-400 transition-colors">AI Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Informasi</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Kebijakan Privasi</Link></li>
              <li><a href="#faq" onClick={() => scrollToSection('faq')} className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
  <Phone className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
  <a
    href="https://wa.me/6285174155134?text=Halo%20Siber%20Shop%20Store%2C%20saya%20ingin%20konsultasi%20layanan."
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    WhatsApp: +62 851-7415-5134
  </a>
</li>

<li className="flex items-start">
  <Mail className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
  <a
    href="mailto:support@sibershopstore.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    support@sibershopstore.com
  </a>
</li>

              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Bekasi, Jawa Barat, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Siber Shop Store. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
