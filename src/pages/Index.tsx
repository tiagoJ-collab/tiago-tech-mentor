
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SobreMim from '@/components/SobreMim';
import Servicos from '@/components/Servicos';
import Precos from '@/components/Precos';
import Depoimentos from '@/components/Depoimentos';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SobreMim />
        <Servicos />
        <Precos />
        <Depoimentos />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
