
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { ArrowRight } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Banner da página */}
        <div className="bg-mentoria-primary text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Conheça minha trajetória e como posso ajudar você a crescer na carreira de tecnologia.
            </p>
          </div>
        </div>
        
        {/* Conteúdo principal */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/7c43c58b-322e-4214-a9ae-2a7294323dd0.png" 
                  alt="Tiago Jensen" 
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-mentoria-primary">Tiago Jensen</h2>
                <p className="text-lg">
                  Sou um profissional apaixonado por tecnologia e desenvolvimento de pessoas. Com mais de uma década 
                  de experiência no mercado de TI, trabalhei em diversas posições técnicas e de liderança.
                </p>
                <p>
                  Minha missão é ajudar profissionais a navegarem pelo complexo mercado de tecnologia, definindo 
                  estratégias claras para crescimento de carreira e desenvolvimento técnico.
                </p>
                <p>
                  Ao longo dos anos, tenho orientado dezenas de profissionais que conseguiram transições de carreira 
                  bem-sucedidas, promoções e aumento significativo em seus rendimentos após as mentorias.
                </p>
                <a 
                  href="https://www.linkedin.com/in/tiagojensen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-mentoria-secondary hover:text-mentoria-primary font-medium"
                >
                  Ver perfil completo no LinkedIn <ArrowRight className="ml-1" size={16} />
                </a>
              </div>
            </div>
            
            <div className="mt-16 bg-mentoria-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-mentoria-primary mb-6 text-center">
                Minha Abordagem de Mentoria
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-mentoria-primary mb-3">Diagnóstico Preciso</h4>
                  <p>
                    Entendo profundamente seu momento atual, pontos fortes e fracos, para criar um plano 
                    de desenvolvimento personalizado.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-mentoria-primary mb-3">Orientação Estratégica</h4>
                  <p>
                    Defino com você objetivos claros e acionáveis, com um plano passo a passo para alcançá-los
                    no menor tempo possível.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-mentoria-primary mb-3">Acompanhamento Contínuo</h4>
                  <p>
                    Mais que sessões isoladas, ofereço um processo de desenvolvimento contínuo com suporte 
                    entre as sessões de mentoria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
