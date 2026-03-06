import React from 'react';
import { motion } from 'framer-motion'; // 1. Importar o motion

const Footer = () => {
  return (
    <footer className="bg-[#082032] text-white py-12 md:py-20 px-6 border-t border-white/10 font-sans relative overflow-hidden">
      {/* 2. Transformar a div principal em motion.div para uma entrada suave */}
      <motion.div 
        className="container mx-auto max-w-6xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* COLUNA 1: LOGO E DESCRIÇÃO */}
          <div className="space-y-6">
            <img src="/logo-DA.png" alt="Logo Diego Alves" className="h-10 md:h-12 w-auto mx-auto md:mx-0" />
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Diego Alves Advocacia — Defesa criminal estratégica, ética e personalizada. Atuação em todo o Brasil, 24 horas por dia.
            </p>
            {/* REDES SOCIAIS */}
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.instagram.com/diego.alvesb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://wa.me/5584988160083" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.616.959 3.193 1.446 4.856 1.447 5.423 0 9.835-4.412 9.838-9.835 0-2.628-1.023-5.1-2.881-6.958s-4.33-2.883-6.958-2.883c-5.424 0-9.836 4.412-9.838 9.835-.001 1.774.475 3.509 1.374 5.017l-.901 3.292 3.366-.883zm11.588-7.391c-.303-.151-1.793-.884-2.071-.985-.278-.101-.48-.151-.681.151-.202.303-.782.985-.959 1.186-.177.201-.353.226-.656.075-.302-.151-1.277-.47-2.433-1.499-.899-.801-1.505-1.791-1.682-2.093-.177-.301-.019-.464.131-.614.135-.134.303-.353.454-.529.151-.177.201-.303.302-.504.102-.201.05-.378-.025-.529-.075-.151-.681-1.641-.933-2.247-.245-.595-.494-.514-.681-.524-.176-.01-.378-.011-.58-.011s-.529.076-.807.378c-.278.303-1.059 1.033-1.059 2.52s1.085 2.923 1.236 3.125c.151.201 2.134 3.259 5.169 4.571.721.312 1.285.498 1.724.637.725.229 1.385.196 1.907.118.581-.087 1.793-.733 2.046-1.441.252-.708.252-1.314.177-1.441-.075-.126-.278-.202-.581-.353z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Navegação</h4>
            <ul className="space-y-3 text-gray-400 text-xs md:text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#depoimentos" className="hover:text-blue-400 transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATO E ENDEREÇO */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Contato</h4>
            <div className="space-y-4 text-gray-400 text-xs md:text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-4 h-4 text-[#c19a5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                <span>Rua Walflan Galvão dos Santos, 1496 - Natal/RN</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-4 h-4 text-[#c19a5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>(84) 98816-0083</span>
              </div>
            </div>
          </div>

          {/* COLUNA 4: LOCALIZAÇÃO (MAPA) */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-2 inline-block">Localização</h4>
            <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 shadow-lg grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.966!2d-35.215!3d-5.842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTAnMzEuMiJTIDM1wrAxMic1NC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* RODAPÉ FINAL */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-center md:text-left">
            © 2026 Diego Alves Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 group">
            <span>Desenvolvido por</span>
            <span className="text-white group-hover:text-blue-400 transition-colors">Include Engenharia</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;