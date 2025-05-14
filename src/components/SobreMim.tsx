
import React from 'react';
import { Briefcase, GraduationCap, Users } from 'lucide-react';

const SobreMim = () => {
  return (
    <section className="section bg-mentoria-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-mentoria-primary mb-4">Quem Sou Eu</h2>
          <p className="text-lg text-mentoria-dark max-w-2xl mx-auto">
            Olá, sou Tiago Jensen, um especialista em tecnologia comprometido em ajudar profissionais a alcançarem seu potencial máximo na área de TI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Com uma sólida experiência no mercado de tecnologia, tenho ajudado profissionais a superarem desafios, 
              definirem metas claras e alcançarem crescimento exponencial em suas carreiras.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-mentoria-primary p-3 rounded-full text-white mt-1">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mentoria-primary">Experiência Profissional</h3>
                  <p>Anos de experiência em projetos de tecnologia e liderança de equipes, conhecendo de perto os desafios do setor.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-mentoria-primary p-3 rounded-full text-white mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mentoria-primary">Formação Acadêmica</h3>
                  <p>Formação sólida e constante atualização para acompanhar as tendências em tecnologia e desenvolvimento profissional.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-mentoria-primary p-3 rounded-full text-white mt-1">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mentoria-primary">Mentoria Personalizada</h3>
                  <p>Abordagem individual que respeita seu momento de carreira e objetivos, com estratégias práticas para resultados reais.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-mentoria-primary mb-4">Conecte-se comigo</h3>
            <p className="mb-4">
              Para conhecer mais sobre minha trajetória profissional, visite meu perfil no LinkedIn:
            </p>
            <a 
              href="https://www.linkedin.com/in/tiagojensen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-md hover:bg-[#0077B5]/90 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn de Tiago Jensen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
