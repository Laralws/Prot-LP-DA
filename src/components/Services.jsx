import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const especialidades = [
    { titulo: "Acompanhamento em Delegacias", desc: "Assistência jurídica imediata em prisões em flagrante e procedimentos investigativos.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
    { titulo: "Direito Penal Econômico", desc: "Defesa estratégica para empresas e gestores em crimes financeiros e tributários.", icon: "M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-6l-2-2H5c-1.1 0-2 .9-2 2zm10 4.5c0 .83-.67 1.5-1.5 1.5H10v1h1v1h-1v1H9v-1h-1v-1h2.5c.83 0 1.5-.67 1.5-1.5S10.33 10 9.5 10H8V9h1V8h1v1h1v1h-2.5C8.67 9 8 9.67 8 10.5S8.67 12 9.5 12z" },
    { titulo: "Audiências de Custódia", desc: "Defesa técnica rigorosa para garantir a análise da legalidade da prisão.", icon: "M21 12h-4l-3 9L9 3l-3 9H2" },
    { titulo: "Medidas de Liberdade", desc: "Atuação técnica para revogação de prisões, pedidos de liberdade provisória e impetração de Habeas Corpus.", icon: "M7 11a5 5 0 0 1 5-5m0 0a5 5 0 0 1 5 5v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2m5-5V4m0 16v-2m8-4h-2M4 14H2m16.035-7.035l-1.414 1.414M7.379 16.621l-1.414 1.414m10.65 0l1.414 1.414m-12.064-12.064l1.414-1.414" },
    { titulo: "Defesas em Processos Criminais", desc: "Defesa técnica estratégica em todas as fases do processo penal, com foco na produção de provas e na garantia da ampla defesa.", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0l-3-9m-3 0h18m-6 0l-3 1m3-1l3 9a5.002 5.002 0 006.001 0l-3-9m-3 0h-3m3 0V20m0 0h-3m3 0h3" },
    { titulo: "Recursos Superiores", desc: "Atuação estratégica perante o STJ e STF com sustentações orais.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { titulo: "Investigação Defensiva", desc: "Diligências e coleta de provas técnicas para fortalecer a tese defensiva.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
    { titulo: "Assistência à Vítima", desc: "Proteção jurídica integral para vítimas, desde a notícia-crime até a reparação.", icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0112 3m0 18a9.96 9.96 0 005.474-1.631l.045-.03m-10.993 0L6.5 21M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { titulo: "Tribunal do Júri", desc: "Defesa especializada em crimes dolosos contra a vida, com foco em oratória.", isJuri: true }
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#0a1d26] px-6 md:px-10 scroll-mt-24 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10 text-left">
        
        <motion.div 
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-[#c19a5b] font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-3">Especialidades</h4>
          <h2 className="font-titulo text-3xl md:text-4xl text-white leading-tight">
            Áreas de Atuação Estratégica
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {especialidades.map((area, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 shadow-2xl transition-all duration-700 hover:translate-y-[-12px] hover:border-blue-500/30 overflow-hidden flex flex-col"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-500 relative z-10 text-blue-400 group-hover:text-white">
                {area.isJuri ? (
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 512 512">
                    <path d="M149.333 56c0 31.333 25.334 56.667 56.667 56.667s56.667-25.334 56.667-56.667-25.334-56.667-56.667-56.667-56.667 25.334-56.667 56.667zm-21.333 142.222c-23.555 0-42.667 19.111-42.667 42.667v7.111h128v-7.111c0-23.556-19.112-42.667-42.667-42.667h-42.666zm-106.667-28.444c0 27.467 22.311 49.778 49.778 49.778s49.778-22.311 49.778-49.778-22.311-49.778-49.778-49.778-49.778 22.311-49.778 49.778zm284.444 0c0 27.467 22.311 49.778 49.778 49.778s49.778-22.311 49.778-49.778-22.311-49.778-49.778-49.778-49.778 22.311-49.778 49.778zM28.444 270.222c-15.733 0-28.444 12.711-28.444 28.444v14.223h99.556v-14.223c0-15.733-12.711-28.444-28.444-28.444H28.444zm398.223 0c-15.733 0-28.444 12.711-28.444 28.444v14.223h99.556v-14.223c0-15.733-12.711-28.444-28.444-28.444h-42.668zm-291.556 156.445v-35.556c0-11.822 9.511-21.333 21.333-21.333h142.223c11.822 0 21.333 9.511 21.333 21.333v35.556c0 15.733-12.711 28.444-28.444 28.444h-128c-15.733 0-28.444-12.711-28.444-28.444zm28.444-120.889c-19.644 0-35.556 15.911-35.556 35.556v7.111h213.333v-7.111c0-19.645-15.912-35.556-35.556-35.556H163.555z" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={area.icon}></path>
                  </svg>
                )}
              </div>

              <h4 className="font-serif-lux text-lg md:text-xl mb-4 text-white leading-tight">{area.titulo}</h4>
              
              <p className="text-[12px] md:text-[14px] text-gray-400 leading-relaxed group-hover:text-gray-200 flex-grow">
                {area.desc}
              </p>

              {/* Saiba Mais com Ícone WhatsApp e Mensagem Personalizada */}
              <a 
                href={`https://wa.me/5584988160083?text=${encodeURIComponent(`Olá, Dr. Ângelo. Gostaria de marcar uma consultoria sobre: ${area.titulo}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center text-blue-400 font-bold uppercase text-[11px] tracking-[0.2em] group/btn transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.9)] w-fit"
              >
                <span className="relative flex items-center">
                  {/* Ícone Minimalista do WhatsApp */}
                  <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Saiba Mais
                  <span className="absolute -bottom-1 left-6 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover/btn:w-[calc(100%-1.5rem)]"></span>
                </span>
                
                <svg 
                  className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;