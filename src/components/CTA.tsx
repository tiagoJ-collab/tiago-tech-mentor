
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-mentoria-accent text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua carreira em tecnologia?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Dê o primeiro passo para o crescimento profissional que você merece. Agende sua mentoria agora mesmo.
          </p>
          <a 
            href={`https://wa.me/5547992600088?text=${encodeURIComponent('Olá Tiago, quero transformar minha carreira em tecnologia com sua mentoria!')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="bg-white text-mentoria-accent hover:bg-white/90 text-lg px-8">
              Quero Agendar Minha Mentoria <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
