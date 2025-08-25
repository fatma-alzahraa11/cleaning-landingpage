import React from 'react';
import { Phone } from 'lucide-react'; 

const Footer = ({ onCTA }) => {
  // Funktion für sanftes Scrollen zu den Abschnitten ohne URL-Änderung
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
        
        {/* Logo und rechtliche Informationen */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/our-logo.png" 
            alt="GEBÄUDEREINIGUNG Logo" 
            className="h-24 w-auto"
          />
          <div>
            <span className="text-sm text-slate-600 font-oswald">
              © {new Date().getFullYear()} GEBÄUDEREINIGUNG. Alle Rechte vorbehalten.
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <button 
            onClick={() => scrollToSection("about")} 
            className="hover:text-blue-700 font-oswald hover:underline"
          >
            Über uns
          </button>
          <button 
            onClick={() => scrollToSection("why")} 
            className="hover:text-blue-700 font-oswald hover:underline"
          >
            Warum wir?
          </button>
          <button onClick={onCTA} className="text-blue-700 hover:text-blue-800 font-oswald">
            Holen Sie ein Angebot ein
          </button>
        </div>

        {/* Telefonnummer */}
        <div className="text-center mt-4 md:mt-0">
          <span className="text-sm text-slate-600 font-oswald  flex items-center">
            <Phone className="text-blue-800 mr-2" size={18} /> 
             +49 82150824751
          </span>
          <a 
            href="tel:+49017672595018"
            className="text-sm text-blue-700 hover:text-blue-800 font-oswald  hover:underline cursor-pointer flex items-center"
          >
            <Phone className="text-blue-800 mr-2" size={18} /> 
            +49 017672595018
          </a>
          <span className="text-sm text-slate-600 font-oswald block">
            Adresse: Drentwrttstr. 12, 86154 Augsburg
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
