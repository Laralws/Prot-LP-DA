import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ textosDinamicos, indexTexto, charIndex }) => {
  return (
    <header className="relative w-full overflow-hidden bg-[#0a1d26] text-white flex items-end md:items-center min-h-[100svh] pb-10 md:pb-0">
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/background-hero02.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-[80%_top] md:object-top opacity-100"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-6 md:px-16">
        <motion.div 
          /* Adicionado mt-20 para descer o bloco de conteúdo */
          className="max-w-2xl flex flex-col items-start text-left mb-8 md:mb-0 mt-20 md:mt-32"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          {/* Adicionado drop-shadow para destacar o título da imagem clara */}
          <h2 className="font-titulo text-3xl sm:text-3xl md:text-5xl font-black leading-tight mb-3 text-white md:pl-12 lg:pl-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Advogado Criminalista
          </h2>
          
          <div className="h-12 md:h-8 mb-6 flex items-center min-h-[1.2em] md:pl-12 lg:pl-20">
            {/* Sombra suave no texto dinâmico */}
            <p className="text-[#c19a5b] text-[13px] md:text-[14px] font-titulo uppercase tracking-[0.3em] border-r-2 border-[#c19a5b] pr-1 animate-cursor drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              {textosDinamicos[indexTexto]?.substring(0, charIndex) || ""}
            </p>
          </div>

          {/* Sombra suave nos itens da grid (ícones e textos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 md:pl-12 lg:pl-20 drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#c19a5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              <span className="text-gray-200 text-[11px] md:text-xs font-medium uppercase tracking-widest">Atendimento 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#c19a5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
              <span className="text-gray-200 text-[11px] md:text-xs font-medium uppercase tracking-widest">Defesa Estratégica</span>
            </div>
          </div>

          <div className="md:pl-20 lg:pl-32 w-full md:w-auto">
            <a 
              href="#contato" 
              className="inline-block w-auto bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#1E3A8A] bg-[length:200%_auto] text-white px-8 py-3.5 rounded-full font-titulo text-[10px] tracking-[0.25em] uppercase transition-all shadow-2xl active:scale-95 border border-white/10 text-center relative overflow-hidden group"
              style={{ 
                animation: 'brilhoIntercalado 4s infinite ease-in-out',
                WebkitAnimation: 'brilhoIntercalado 4s infinite ease-in-out' 
              }}
            >
              <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
              <span className="relative z-10">Falar com o Advogado</span>
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;