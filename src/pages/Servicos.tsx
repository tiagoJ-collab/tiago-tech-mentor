
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Servicos from '@/components/Servicos';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Check } from 'lucide-react';

const ServicosPage = () => {
  const beneficios = [
    "Orientação personalizada para sua situação específica",
    "Feedback honesto sobre seus pontos fortes e de melhoria",
    "Estratégias comprovadas para crescimento em tecnologia",
    "Ajuda para superar barreiras e bloqueios de carreira",
    "Acesso a recursos exclusivos e materiais de apoio",
    "Networking estratégico na área de tecnologia"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Banner da página */}
        <div className="bg-mentoria-primary text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Serviços</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Conheça em detalhes os serviços de mentoria para impulsionar sua carreira em tecnologia.
            </p>
          </div>
        </div>
        
        {/* Componente de serviços */}
        <Servicos />
        
        {/* Benefícios */}
        <section className="py-16 bg-mentoria-light">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-mentoria-primary mb-4">Benefícios da Mentoria</h2>
              <p className="text-lg text-mentoria-dark max-w-2xl mx-auto">
                Ao investir no processo de mentoria, você terá acesso a diversos benefícios que farão diferença real em sua carreira.
              </p>
            </div>
            
            <Card className="bg-white p-8 shadow-lg max-w-3xl mx-auto">
              <ul className="grid md:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="text-mentoria-accent mt-1 h-5 w-5 flex-shrink-0" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-mentoria-primary mb-4">Perguntas Frequentes</h2>
              <p className="text-lg text-mentoria-dark max-w-2xl mx-auto">
                Tire suas dúvidas sobre o processo de mentoria.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <h3 className="text-xl font-bold text-mentoria-primary mb-2">Como são realizadas as sessões de mentoria?</h3>
                <p className="text-mentoria-dark">
                  As sessões são realizadas online, via plataforma de videoconferência, com duração de 1 hora cada. 
                  Agendamos em horários flexíveis que se adequem à sua rotina.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-bold text-mentoria-primary mb-2">Qual a frequência ideal das sessões?</h3>
                <p className="text-mentoria-dark">
                  Para melhores resultados, recomendo sessões quinzenais ou mensais, permitindo tempo para implementação 
                  das estratégias discutidas e acompanhamento contínuo do progresso.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-bold text-mentoria-primary mb-2">Preciso ter experiência em tecnologia?</h3>
                <p className="text-mentoria-dark">
                  Não necessariamente. Atendo desde iniciantes que desejam migrar para a área de tecnologia até 
                  profissionais experientes buscando avançar para posições de liderança.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-bold text-mentoria-primary mb-2">Como faço para agendar uma mentoria?</h3>
                <p className="text-mentoria-dark">
                  Entre em contato via WhatsApp no número +55 (47) 99260-0088, e combinaremos o melhor dia e horário para sua primeira sessão.
                </p>
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

export default ServicosPage;
