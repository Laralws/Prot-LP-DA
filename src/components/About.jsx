import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const About = ({ 
  midiaAtual, 
  midiasSobre, 
  videoTocando, 
  setVideoTocando, 
  proximaMidia, 
  midiaAnterior 
}) => {
  const containerRef = useRef(null);

  // Efeito crucial: Para todos os vídeos quando a mídia atual muda
  useEffect(() => {
    if (containerRef.current) {
      const videos = containerRef.current.querySelectorAll('video');
      videos.forEach((video) => {
        video.pause();
        video.currentTime = 0; // Reinicia o vídeo para o começo
      });
      setVideoTocando(false);
    }
  }, [midiaAtual, setVideoTocando]);

  return (
    <section id="sobre" className="relative py-16 md:py-24 px-6 md:px-10 bg-[#1a2b33] subtle-lines scroll-mt-24 text-left border-b border-white/5 overflow-hidden">
      <motion.div 
        className="container mx-auto max-w-5xl relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Slider de Mídia */}
          <motion.div 
            className="flex flex-col items-center order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group aspect-[4/5] w-full max-w-[320px] md:max-w-[380px] rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-black transition-all duration-500 hover:scale-[1.02] touch-pan-y">
              
              <div 
                ref={containerRef}
                className="flex h-full w-full" 
                style={{ 
                  transform: `translateX(-${midiaAtual * 100}%)`,
                  WebkitTransform: `translateX(-${midiaAtual * 100}%)`,
                  transition: 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
                  WebkitTransition: '-webkit-transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
                  willChange: 'transform'
                }}
              >
                {midiasSobre.map((midia, index) => (
                  <div 
                    key={index} 
                    className="min-w-full h-full relative cursor-pointer overflow-hidden"
                    onClick={(e) => {
                      const video = e.currentTarget.querySelector('video');
                      if (video) {
                        if (video.paused) {
                          video.play().catch(() => {});
                          setVideoTocando(true);
                        } else {
                          video.pause();
                          setVideoTocando(false);
                        }
                      }
                    }}
                  >
                    {midia.tipo === 'image' ? (
                      <img 
                        src={midia.url} 
                        alt={midia.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    ) : (
                      <div className="w-full h-full bg-black relative">
                        <video 
                          src={midia.url} 
                          className="w-full h-full object-cover" 
                          playsInline 
                          muted={false}
                          onEnded={() => setVideoTocando(false)} 
                        />
                        {(!videoTocando || midiaAtual !== index) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 pointer-events-none">
                            <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Setas (Z-index alto e pointer-events para iPhone) */}
              <button 
                onClick={(e) => { e.stopPropagation(); midiaAnterior(); }} 
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center z-50 transition-all opacity-100 md:opacity-0 group-hover:opacity-100 backdrop-blur-sm pointer-events-auto active:scale-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); proximaMidia(); }} 
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center z-50 transition-all opacity-100 md:opacity-0 group-hover:opacity-100 backdrop-blur-sm pointer-events-auto active:scale-90"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </motion.div>

          {/* Conteúdo de Texto (Mantive seus gradientes e nomes) */}
          <motion.div 
            className="space-y-5 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative mb-8 md:mb-10">
              <span className="absolute -top-4 md:-top-6 left-0 text-[#1e3a5a]/[0.12] text-5xl md:text-8xl font-black uppercase tracking-tighter select-none pointer-events-none whitespace-nowrap">Quem é</span>
              <h4 className="relative text-[#c19a5b] font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-1 z-10">Quem é</h4>
              <h2 className="relative text-2xl md:text-5xl font-black z-10 whitespace-nowrap bg-gradient-to-r from-[#1e3a5a] via-[#4682b4] to-[#add8e6] bg-clip-text text-transparent pb-1 leading-tight">Dr. Diego Alves</h2>
            </div>
            
            <div className="text-gray-300 text-sm md:text-[15px] leading-relaxed space-y-4 max-w-md">
              <p>O <strong className="text-white font-semibold">Dr. Diego Alves</strong> Profissional com sólida formação acadêmica e ampla experiência prática no meio jurídico, é mestre em Direito pela Universidade Federal do Rio Grande do Norte (UFRN).</p>
              <p className="opacity-90">Sua atuação é pautada pelo compromisso com a ética, rigor técnico e abordagem estratégica em causas complexas.</p>
            </div>
            
            <div className="pt-2 text-left">
              <a 
                href="#contato" 
                className="group relative overflow-hidden inline-block bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#1E3A8A] bg-[length:200%_auto] text-white px-8 py-3 rounded-full font-bold uppercase text-[9px] tracking-widest shadow-lg transition-all border border-white/10"
                style={{ animation: 'brilhoIntercalado 4s infinite ease-in-out' }}
              >
                <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                <span className="relative z-10">Solicitar atendimento</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;