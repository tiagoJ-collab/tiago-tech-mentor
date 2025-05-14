
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-mentoria-light py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-mentoria-primary mb-4">404</h1>
          <p className="text-xl md:text-2xl text-mentoria-dark mb-8">Oops! Página não encontrada</p>
          <p className="text-mentoria-dark mb-8 max-w-md mx-auto">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link to="/">
            <Button className="btn-primary">Voltar para o Início</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
