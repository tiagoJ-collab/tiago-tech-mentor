
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 md:py-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-heading text-xl md:text-2xl font-bold text-mentoria-primary">
            Tiago Jensen
          </span>
          <span className="hidden md:inline ml-2 text-mentoria-dark font-medium text-sm">
            | Mentor de Tecnologia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium text-mentoria-dark hover:text-mentoria-secondary transition-colors">
            Início
          </Link>
          <Link to="/sobre" className="font-medium text-mentoria-dark hover:text-mentoria-secondary transition-colors">
            Sobre
          </Link>
          <Link to="/servicos" className="font-medium text-mentoria-dark hover:text-mentoria-secondary transition-colors">
            Serviços
          </Link>
          <Link to="/precos" className="font-medium text-mentoria-dark hover:text-mentoria-secondary transition-colors">
            Preços
          </Link>
          <a 
            href={`https://wa.me/5547992600088?text=${encodeURIComponent('Olá Tiago, tenho interesse em sua mentoria!')}`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="btn-accent">Agendar Mentoria</Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 w-full bg-white shadow-lg md:hidden z-50 animate-fade-in">
            <nav className="flex flex-col py-4">
              <Link 
                to="/" 
                className="px-4 py-3 hover:bg-mentoria-light font-medium"
                onClick={toggleMenu}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className="px-4 py-3 hover:bg-mentoria-light font-medium"
                onClick={toggleMenu}
              >
                Sobre
              </Link>
              <Link 
                to="/servicos" 
                className="px-4 py-3 hover:bg-mentoria-light font-medium"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
              <Link 
                to="/precos" 
                className="px-4 py-3 hover:bg-mentoria-light font-medium"
                onClick={toggleMenu}
              >
                Preços
              </Link>
              <div className="px-4 py-3">
                <a 
                  href={`https://wa.me/5547992600088?text=${encodeURIComponent('Olá Tiago, tenho interesse em sua mentoria!')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="btn-accent w-full">Agendar Mentoria</Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
