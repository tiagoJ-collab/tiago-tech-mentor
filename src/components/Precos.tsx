
import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const Precos = () => {
  return (
    <section className="section bg-mentoria-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Investimento</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Invista no seu crescimento profissional com mentorias personalizadas que trarão resultados duradouros para sua carreira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano individual */}
          <Card className="bg-white text-mentoria-dark p-8 rounded-lg shadow-lg card-hover">
            <h3 className="text-xl font-bold text-mentoria-primary mb-2">Sessão Individual</h3>
            <p className="text-sm mb-4">Ideal para resolver questões pontuais</p>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-bold text-mentoria-primary">R$ 350</span>
              <span className="text-sm opacity-70 mb-1">/sessão</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                <span>Sessão de 1 hora</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                <span>Diagnóstico da situação atual</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                <span>Plano de ação personalizado</span>
              </li>
            </ul>
            
            <a 
              href={`https://wa.me/5547992600088?text=${encodeURIComponent('Olá Tiago, tenho interesse em agendar uma sessão individual de mentoria!')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-mentoria-primary hover:bg-mentoria-secondary">
                Agendar Sessão
              </Button>
            </a>
          </Card>
          
          {/* Pacote com desconto */}
          <Card className="bg-mentoria-accent text-white p-8 rounded-lg shadow-lg relative overflow-hidden card-hover">
            <div className="absolute top-0 right-0 bg-mentoria-primary text-white text-xs px-3 py-1 rounded-bl-md font-medium">
              Mais Popular
            </div>
            
            <h3 className="text-xl font-bold mb-2">Pacote de 3 Sessões</h3>
            <p className="text-sm mb-4 opacity-90">Para quem busca desenvolvimento contínuo</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-bold">R$ 840</span>
              <span className="text-sm opacity-70 mb-1">/pacote</span>
            </div>
            <p className="text-sm mb-6">
              <span className="line-through opacity-70">R$ 1.050</span>
              <span className="ml-2 font-bold bg-white text-mentoria-accent px-2 py-0.5 rounded-md">20% OFF</span>
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span>3 sessões de 1 hora</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span>Diagnóstico e plano de carreira</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span>Acesso por WhatsApp entre as sessões</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span>Materiais de apoio exclusivos</span>
              </li>
            </ul>
            
            <a 
              href={`https://wa.me/5547992600088?text=${encodeURIComponent('Olá Tiago, tenho interesse no pacote com 3 sessões de mentoria!')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-white text-mentoria-accent hover:bg-white/90">
                Garantir Pacote com Desconto
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Precos;
