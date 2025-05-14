
import React from 'react';
import { Card } from './ui/card';

const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Felipe Santos",
      cargo: "Desenvolvedor Front-end",
      texto: "As mentorias com o Tiago foram transformadoras para minha carreira. Em apenas 3 sessões, consegui traçar um caminho claro para me tornar um desenvolvedor senior.",
    },
    {
      nome: "Ana Carolina",
      cargo: "Tech Lead",
      texto: "Estava em dúvida entre seguir carreira técnica ou de gestão. O Tiago me ajudou a entender meus pontos fortes e hoje lidero uma equipe com confiança.",
    },
    {
      nome: "Marcelo Lima",
      cargo: "Desenvolvedor Full Stack",
      texto: "Graças às orientações do Tiago, consegui transicionar de uma área não-técnica para desenvolvimento em menos de um ano. Investimento que valeu cada centavo.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-mentoria-primary mb-4">Depoimentos</h2>
          <p className="text-lg text-mentoria-dark max-w-2xl mx-auto">
            Veja o que dizem profissionais que já passaram pelo processo de mentoria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((depoimento, index) => (
            <Card key={index} className="p-6 shadow-md card-hover">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-mentoria-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-mentoria-dark flex-grow mb-4">
                  {depoimento.texto}
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-mentoria-primary">{depoimento.nome}</p>
                  <p className="text-sm text-mentoria-dark opacity-75">{depoimento.cargo}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
