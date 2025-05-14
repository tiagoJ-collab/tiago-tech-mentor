
import React from 'react';
import { Card } from './ui/card';
import { BookOpen, Code, Laptop } from 'lucide-react';

const Servicos = () => {
  const servicos = [
    {
      icon: <BookOpen className="h-12 w-12 text-mentoria-primary" />,
      title: "Definição de Carreira",
      description: "Ajudo você a entender qual caminho seguir na tecnologia, identificando suas habilidades e interesses para traçar uma rota clara de evolução profissional."
    },
    {
      icon: <Code className="h-12 w-12 text-mentoria-primary" />,
      title: "Desenvolvimento Técnico",
      description: "Orientação sobre quais habilidades técnicas desenvolver de acordo com seus objetivos, incluindo roadmaps personalizados e recursos de aprendizado."
    },
    {
      icon: <Laptop className="h-12 w-12 text-mentoria-primary" />,
      title: "Liderança em Tecnologia",
      description: "Prepare-se para posições de liderança na área de TI, desenvolvendo competências essenciais para gerenciar projetos e equipes técnicas."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-mentoria-primary mb-4">Serviços de Mentoria</h2>
          <p className="text-lg text-mentoria-dark max-w-2xl mx-auto">
            Ofereço mentorias especializadas para ajudar você a superar desafios e alcançar seus objetivos profissionais na área de tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <Card key={index} className="p-6 text-center card-hover">
              <div className="flex justify-center mb-4">
                {servico.icon}
              </div>
              <h3 className="text-xl font-bold text-mentoria-primary mb-3">{servico.title}</h3>
              <p className="text-mentoria-dark">{servico.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-mentoria-light p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-mentoria-primary mb-4 text-center">Como funciona a mentoria?</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-mentoria-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h4 className="text-lg font-bold text-mentoria-primary mb-2">Agendamento</h4>
              <p>Entre em contato via WhatsApp e agende sua primeira sessão de mentoria.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-mentoria-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h4 className="text-lg font-bold text-mentoria-primary mb-2">Diagnóstico</h4>
              <p>Na primeira sessão, identificamos seus objetivos e criamos um plano personalizado.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-mentoria-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h4 className="text-lg font-bold text-mentoria-primary mb-2">Mentoria</h4>
              <p>Sessões regulares para acompanhamento, orientação e desenvolvimento contínuo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
