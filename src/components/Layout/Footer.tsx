import { Mail, MapPin } from "lucide-react";

import { Link } from "react-router-dom";

import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-background backdrop-blur-md  relative z-10  shadow-[var(--shadow-soft)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
                 <Link to="/" className="flex items-center space-x-3 group">
             <img src={logo} alt="logo-empresa" className=" md:h-24 w-34" />
          </Link>
            </div>
            <p className="text-sm text-gray-300">
              Protegendo o futuro da sua nuvem com soluções de segurança, automação e governança.
            </p>

            
          </div>

        
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                 Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold mb-4">Principais Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Segurança Cloud</li>
              <li>Zero Trust</li>
              <li>Compliance & Governança</li>
              <li>SOC 24/7</li>
            </ul>
          </div>

       
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>comercial@vaultcloudexperts.cloud</span>
              </li>
             
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} VaultCloud Experts. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
