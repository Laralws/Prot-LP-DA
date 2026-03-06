import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const depoimentosReais = [
    { nome: "Rosa Silva", tempo: "2 meses atrás", texto: "Drº Diego foi extremamente dedicado e profissional, elucidou minha situação com muita responsabilidade..." },
    { nome: "Raimunda Cobe", tempo: "2 meses atrás", texto: "Um excelente advogado, só tenho a agradecer, que Deus abençoe grandemente esse profissional maravilhoso." },
    { nome: "Lucileide Melo", tempo: "2 meses atrás", texto: "Foi oferecido um atendimento responsável, humano e comprometido dentro da lei. Eu absorvi com clareza, respeito e confiança." },
    { nome: "Luana Bezerra", tempo: "um ano atrás", texto: "Excelente Profissional! Tive o privilégio de avaliar o competente Dr Diego." },
    { nome: "Lucélia Capraro", tempo: "2 meses atrás", texto: "O melhor advogado com experiência e sensibilidade. Nos trás segurança." },
    { nome: "Cleyton Matheus", tempo: "11 meses atrás", texto: "O escritório do Dr. Diego Alves se destaca pela excelência e comprometimento." }
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#0a2836] text-white overflow-hidden relative">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BF953F" />
            <stop offset="25%" stopColor="#FCF6BA" />
            <stop offset="50%" stopColor="#B38728" />
            <stop offset="75%" stopColor="#FBF5B7" />
            <stop offset="100%" stopColor="#AA771C" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div 
        className="container mx-auto px-6 text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h5 className="text-xl md:text-4xl font-titulo mb-4 uppercase tracking-tighter text-white">
          O Sucesso dos nossos clientes
        </h5>
        
        <div className="flex justify-center gap-1.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className="w-5 h-5 md:w-7 md:h-7 drop-shadow-[0_0_5px_rgba(191,149,63,0.3)]" 
              style={{ fill: 'url(#goldGradient)' }} 
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ))}
        </div>
        <p className="text-blue-200/80 text-[10px] font-bold uppercase tracking-[0.2em] italic mb-1">avaliação 5 estrelas no Google</p>
      </motion.div>

      <motion.div 
        className="max-w-5xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* SETA ESQUERDA - POSIÇÃO CORRIGIDA */}
        <div className="swiper-prev-da absolute left-[-15px] md:left-[-60px] top-1/2 -translate-y-1/2 z-[100] cursor-pointer text-[#BF953F] hover:text-[#FCF6BA] transition-all active:scale-90">
           <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
           </svg>
        </div>

        {/* SETA DIREITA - POSIÇÃO CORRIGIDA (md:right em vez de md:left) */}
        <div className="swiper-next-da absolute right-[-15px] md:right-[-60px] top-1/2 -translate-y-1/2 z-[100] cursor-pointer text-[#BF953F] hover:text-[#FCF6BA] transition-all active:scale-90">
           <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
           </svg>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
          navigation={{ nextEl: '.swiper-next-da', prevEl: '.swiper-prev-da' }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper !pb-20 md:!pb-24"
        >
          {depoimentosReais.map((item, index) => (
            <SwiperSlide key={index} style={{ width: 'min(320px, 85vw)' }}>
              <div className="bg-white text-black p-8 rounded-[2.5rem] shadow-2xl h-full flex flex-col items-center text-center min-h-[300px] transition-all duration-500 mx-auto">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-12 h-12 bg-[#082032] rounded-full flex items-center justify-center font-bold text-white text-lg uppercase mb-3">
                    {item.nome[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-[#082032] leading-tight">{item.nome}</h4>
                    <p className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase mt-1">{item.tempo}</p>
                  </div>
                </div>
                <div className="flex justify-center text-[11px] mb-4" style={{ color: '#B38728' }}>★★★★★</div>
                <p className="text-gray-600 text-[13px] leading-relaxed italic font-medium max-w-[250px]">"{item.texto}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;