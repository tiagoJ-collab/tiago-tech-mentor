
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-mentoria-primary to-mentoria-secondary text-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Acelere sua carreira em Tecnologia
            </h1>
            <p className="text-xl opacity-90 max-w-lg">
              Mentorias personalizadas para profissionais de tecnologia que buscam crescimento, direcionamento e resultados práticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={`https://wa.me/5547992600088?text=${encodeURIComponent('Olá Tiago, tenho interesse em sua mentoria!')}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-accent">
                  Agende sua mentoria <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <Link to="/servicos">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Conheça os serviços
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-lg rotate-3 shadow-xl">
              <img 
                src="/lovable-uploads/7c43c58b-322e-4214-a9ae-2a7294323dd0.png" 
                alt="Tiago Jensen - Mentor de Tecnologia" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
