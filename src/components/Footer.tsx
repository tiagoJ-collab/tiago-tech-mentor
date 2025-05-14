
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mentoria-primary text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <Link to="/" className="font-heading text-2xl font-bold">
              Tiago Jensen
            </Link>
            <p className="mt-4 opacity-80 max-w-md">
              Mentoria especializada para profissionais de tecnologia que buscam crescimento acelerado e direcionamento estratégico em suas carreiras.
            </p>
          </div>
          
          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="opacity-80 hover:opacity-100 transition-opacity">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="opacity-80 hover:opacity-100 transition-opacity">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/precos" className="opacity-80 hover:opacity-100 transition-opacity">
                  Preços
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="opacity-80">
                <a 
                  href={`https://wa.me/5547992600088`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  WhatsApp: +55 (47) 99260-0088
                </a>
              </li>
              <li className="opacity-80">
                <a 
                  href="https://www.linkedin.com/in/tiagojensen/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  LinkedIn: /tiagojensen
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center opacity-70 text-sm">
          <p>© {currentYear} Tiago Jensen Mentoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
