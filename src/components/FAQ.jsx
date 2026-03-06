import React, { useState } from 'react';
import { motion } from 'framer-motion'; // 1. Importar o motion

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const perguntas = [
    {
      q: "Recebi uma intimação da delegacia, o que devo fazer? Preciso de um advogado?",
      a: "Procure um Advogado Criminalista para que ele vá antecipadamente à delegacia tomar conhecimento do inteiro teor das investigações."
    },
    {
      q: "Doutores, o que é audiência de custódia?",
      a: "Toda pessoa presa deve ser apresentada a um juiz em até 24 horas. Nesta fase, a presença de um advogado é obrigatória."
    },
    {
      q: "Recebi uma citação para apresentar um advogado em 10 dias, o que devo fazer?",
      a: "Procure um Advogado Criminalista URGENTE para analisar os fatos e traçar a melhor estratégia de defesa."
    },
    {
      q: "O que é um processo criminal e como ele começa?",
      a: "Um processo criminal se inicia quando há a investigação de um crime, seguida por uma denúncia ou queixa-crime."
    },
    {
      q: "Quando devo procurar um advogado criminalista?",
      a: "Ao ser chamado para prestar depoimento, quando investigado em inquéritos policiais, ou ao ser acusado de um crime."
    },
    {
      q: "O que fazer se eu for intimado pela polícia?",
      a: "Procure um advogado imediatamente antes de prestar qualquer declaração, para garantir a proteção dos seus direitos."
    },
    {
      q: "Quais são os meus direitos em caso de prisão em flagrante?",
      a: "Você tem direito a permanecer em silêncio, a um advogado e a comunicação imediata à família."
    },
    {
      q: "O escritório atua para pessoas que são vítimas de crimes?",
      a: "Sim! Atuamos em casos de violência doméstica, fraudes e crimes dolosos contra vida (júri)."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white px-6 scroll-mt-24">
      {/* 2. Substituir a div por motion.div para animação de subida */}
      <motion.div 
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-titulo font-black mb-4 uppercase text-[#082032]">Perguntas Frequentes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 items-start">
          {/* Coluna 1 (Perguntas 1 a 4) */}
          <div className="space-y-2">
            {perguntas.slice(0, 4).map((item, index) => (
              <motion.div 
                key={index} 
                className="border-b border-gray-200 py-3 md:py-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button 
                  onClick={() => toggleAccordion(index)} 
                  className="w-full flex justify-between items-center text-left transition-all"
                >
                  <span className={`font-bold text-xs md:text-base pr-4 font-raleway ${activeIndex === index ? "text-blue-600" : "text-[#082032]"}`}>
                    {item.q}
                  </span>
                  <span className="text-[#c19a5b] text-lg md:text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? "max-h-96 opacity-100 mt-3 md:mt-4" : "max-h-0 opacity-0"}`}>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-raleway">
                    {item.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coluna 2 (Perguntas 5 a 8) */}
          <div className="space-y-2">
            {perguntas.slice(4, 8).map((item, index) => {
              const globalIndex = index + 4;
              return (
                <motion.div 
                  key={globalIndex} 
                  className="border-b border-gray-200 py-3 md:py-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button 
                    onClick={() => toggleAccordion(globalIndex)} 
                    className="w-full flex justify-between items-center text-left transition-all"
                  >
                    <span className={`font-bold text-xs md:text-base pr-4 font-raleway ${activeIndex === globalIndex ? "text-blue-600" : "text-[#082032]"}`}>
                      {item.q}
                    </span>
                    <span className="text-[#c19a5b] text-lg md:text-xl">
                      {activeIndex === globalIndex ? "−" : "+"}
                    </span>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${activeIndex === globalIndex ? "max-h-96 opacity-100 mt-3 md:mt-4" : "max-h-0 opacity-0"}`}>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-raleway">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;