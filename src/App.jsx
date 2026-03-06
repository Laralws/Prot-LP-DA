import React, { useEffect, useState } from 'react';

// Hooks Customizados
import { useScrollThreshold } from './hooks/useScrollThreshold';
import { useTypewriter } from './hooks/useTypewriter';

// Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  // --- DADOS ---
  const textosDinamicos = [
    "Medidas de Liberdade", "Defesas em Processos Criminais", "Audiências de Custódia",
    "Delegacias e Flagrantes", "Recursos em Todas as Instâncias", "Investigação Defensiva",
    "Assistência à Vítima", "Tribunal do Júri", "Execução Penal e Revisão Criminal"
  ];

  const midiasSobre = [
    { tipo: 'image', url: '/sobre-01.jpg', alt: 'Dr. Diego Alves' },
    { tipo: 'image', url: '/sobre-02.jpg', alt: 'Atuação Jurídica' },
    { tipo: 'video', url: '/video-01.mp4', alt: 'Vídeo institucional' },
    { tipo: 'image', url: '/sobre-03.jpg', alt: 'Escritório' },
    { tipo: 'image', url: '/sobre-04.jpg', alt: 'Dr. Diego Alves' },
    { tipo: 'image', url: '/sobre-05.jpg', alt: 'Dr. Diego Alves' },
    { tipo: 'image', url: '/sobre-06.jpg', alt: 'Dr. Diego Alves' },
    { tipo: 'image', url: '/sobre-07.jpg', alt: 'Dr. Diego Alves' },
  ];

  // --- USO DOS HOOKS CUSTOMIZADOS ---
  const scrolled = useScrollThreshold(50);
  const wppAtivado = useScrollThreshold(400);
  const { indexTexto, charIndex } = useTypewriter(textosDinamicos);

  // --- ESTADOS RESTANTES (UI E SLIDER) ---
  const [menuAberto, setMenuAberto] = useState(false);
  const [midiaAtual, setMidiaAtual] = useState(0);
  const [videoTocando, setVideoTocando] = useState(false);

  // --- LÓGICA DO SLIDER ---
  const proximaMidia = () => {
    setMidiaAtual((prev) => (prev + 1) % midiasSobre.length);
    setVideoTocando(false);
  };

  const midiaAnterior = () => {
    setMidiaAtual((prev) => (prev - 1 + midiasSobre.length) % midiasSobre.length);
    setVideoTocando(false);
  };

  useEffect(() => {
    if (!videoTocando) {
      const interval = setInterval(proximaMidia, 5000);
      return () => clearInterval(interval);
    }
  }, [midiaAtual, videoTocando]);

  return (
    <div className="font-sans bg-white text-black selection:bg-gray-200 overflow-x-hidden" id="home">
      <style>{`
        html { scroll-behavior: smooth; }
        .subtle-lines {
          background-image:
            linear-gradient(30deg, rgba(255,255,255,0.02) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.02) 87.5%, rgba(255,255,255,0.02)),
            linear-gradient(150deg, rgba(255,255,255,0.02) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.02) 87.5%, rgba(255,255,255,0.02));
          background-size: 60px 105px;
        }
      `}</style>

      <Navbar scrolled={scrolled} menuAberto={menuAberto} setMenuAberto={setMenuAberto} />

      <Hero textosDinamicos={textosDinamicos} indexTexto={indexTexto} charIndex={charIndex} />

      <About 
        midiaAtual={midiaAtual} 
        midiasSobre={midiasSobre} 
        videoTocando={videoTocando} 
        setVideoTocando={setVideoTocando} 
        proximaMidia={proximaMidia} 
        midiaAnterior={midiaAnterior} 
      />

      <Services />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton wppAtivado={wppAtivado} />
    </div>
  );
};

export default App;