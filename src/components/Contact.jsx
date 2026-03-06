import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // Link para abrir no Maps (Botões)
  const mapLink = "https://www.google.com/maps/dir//Rua+Walflan+Galv%C3%A3o+dos+Santos,+1496+-+Candel%C3%A1ria,+Natal+-+RN,+59064-260";
  
  // Link para o Embed (Iframe) - Este é o link que mostra o mapa visualmente
  const mapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.963172822161!2d-35.2280629!3d-5.8609503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2f8aa0339d67d%3A0x6b772c67f81f9a8a!2sRua%20Walflan%20Galv%C3%A3o%20dos%20Santos%2C%201496%20-%20Candel%C3%A1ria%2C%20Natal%20-%20RN%2C%2059064-260!5e0!3m2!1spt-BR!2sbr!4v1700000000000";

  return (
    <section id="contato" className="relative py-16 md:py-24 bg-[#14252F] px-6 md:px-10 scroll-mt-24 overflow-hidden border-t border-white/5">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            className="flex flex-col text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <h4 className="text-[#c19a5b] font-bold text-xs md:text-sm uppercase tracking-widest">NOSSA LOCALIZAÇÃO</h4>
              <h2 className="text-white text-3xl md:text-5xl font-titulo font-black tracking-tighter">Agende sua visita</h2>
            </div>

            <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-4 max-w-lg">
              <p>
                Nosso escritório está estrategicamente localizado em <strong className="text-white">Candelária</strong>, Natal/RN.
              </p>
              <p className="text-xs md:text-sm opacity-90 text-white font-medium border-l-2 border-[#c19a5b] pl-4">
                Rua Walflan Galvão dos Santos, 1496<br/>
                Candelária, Natal - RN, 59064-260
              </p>
            </div>

            <div className="space-y-4 w-full max-w-md">
              <div className="grid grid-cols-2 gap-4">
                <a href="tel:84988160083" className="flex items-center justify-center gap-3 bg-white/90 hover:bg-white text-[#082032] font-bold py-4 rounded-lg transition-all shadow-lg text-sm">Ligue Agora</a>
                <a href={mapLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-white/90 hover:bg-white text-[#082032] font-bold py-4 rounded-lg transition-all shadow-lg text-sm">Traçar Rota</a>
              </div>
              <a href="https://wa.me/5584988160083" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#1E3A8A] bg-[length:200%_auto] text-white font-bold py-5 rounded-lg transition-all shadow-xl w-full text-center">Entre em contato pelo Whatsapp</a>
            </div>
          </motion.div>

          <motion.a 
            href={mapLink} 
            target="_blank" 
            rel="noreferrer"
            className="group relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-white/5 block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe 
              src={mapEmbed}
              className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
            ></iframe>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;