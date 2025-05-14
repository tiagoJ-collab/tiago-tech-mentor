
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Precos from '@/components/Precos';
import CTA from '@/components/CTA';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrecosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Banner da página */}
        <div className="bg-mentoria-primary text-white py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Investimento</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Conheça os valores e escolha o plano de mentoria que melhor se adequa às suas necessidades.
            </p>
          </div>
        </div>
        
        {/* Componente de preços */}
        <Precos />
        
        {/* Retorno do investimento */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-mentoria-primary mb-4">Retorno do Investimento</h2>
              <p className="text-lg text-mentoria-dark max-w-2xl mx-auto">
                Entenda como a mentoria pode trazer resultados financeiros concretos para sua carreira.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-mentoria-light p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-mentoria-primary mb-4">O que você pode ganhar:</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-mentoria-accent p-1 rounded-full text-white mt-1">
                        <Check size={16} />
                      </div>
                      <div>
                        <strong className="text-mentoria-primary">Aumento salarial</strong>
                        <p className="text-sm mt-1">Mentorando podem conquistar aumentos de 20% a 40% após implementar as estratégias da mentoria.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="bg-mentoria-accent p-1 rounded-full text-white mt-1">
                        <Check size={16} />
                      </div>
                      <div>
                        <strong className="text-mentoria-primary">Promoções mais rápidas</strong>
                        <p className="text-sm mt-1">Redução média de 6 a 12 meses no tempo para conquistar uma promoção.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="bg-mentoria-accent p-1 rounded-full text-white mt-1">
                        <Check size={16} />
                      </div>
                      <div>
                        <strong className="text-mentoria-primary">Melhores oportunidades</strong>
                        <p className="text-sm mt-1">Acesso a posições mais desafiadoras e bem remuneradas no mercado.</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <div className="bg-mentoria-accent p-1 rounded-full text-white mt-1">
                        <Check size={16} />
                      </div>
                      <div>
                        <strong className="text-mentoria-primary">Economia de tempo</strong>
                        <p className="text-sm mt-1">Evite anos de tentativa e erro seguindo um caminho já validado.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-mentoria-primary mb-4">Calculando o ROI:</h3>
                  
                  <div className="space-y-6">
                    <p>
                      Um profissional de TI com salário de R$6.000 que consegue um aumento de 20% após a mentoria:
                    </p>
                    
                    <div className="bg-mentoria-light p-4 rounded-md">
                      <p className="font-medium text-mentoria-primary">Aumento mensal: R$1.200</p>
                      <p className="font-medium text-mentoria-primary">Aumento anual: R$14.400</p>
                      <p className="font-medium text-mentoria-primary mt-2">Investimento na mentoria (pacote): R$840</p>
                      <p className="font-medium text-mentoria-primary mt-2">ROI do primeiro ano: 1.614%</p>
                    </div>
                    
                    <p className="text-sm italic">
                      *Este é apenas um exemplo ilustrativo. Os resultados variam conforme o engajamento do mentorado e 
                      outros fatores de mercado.
                    </p>
                    
                    <a 
                      href={`https://wa.me/5547992600088?text=${encodeURIComponent('Olá Tiago, gostaria de calcular o ROI potencial da mentoria para minha situação específica!')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-mentoria-primary hover:bg-mentoria-secondary w-full mt-4">
                        Calcule seu ROI personalizado <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </a>
                  </div>
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

export default PrecosPage;
