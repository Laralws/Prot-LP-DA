import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ scrolled, menuAberto, setMenuAberto }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full flex justify-center transition-all duration-500 z-[999] ${
        scrolled || menuAberto ? "bg-[#082032] shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl flex justify-between items-center px-6 py-4">
        <div className="relative z-[1001]">
          <a href="#home" onClick={() => setMenuAberto(false)}>
            <img src="/logo-DA.png" alt="Logo" className="h-9 md:h-12 w-auto" />
          </a>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-[10px] font-titulo tracking-[0.25em] uppercase text-white">
          {['Início', 'Sobre', 'Serviços', 'Contato'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
            >
              {item}
            </motion.a>
          ))}
          
          <a 
            href="https://wa.me/5584988160083" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#1E3A8A] bg-[length:200%_auto] px-6 py-2.5 rounded-full font-bold text-white transition-all border border-white/10 animate-brilho-lento inline-block"
          >
            {/* Efeito de reflexo (Shine) */}
            <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
            
            <span className="relative z-10">Fale com Advogado</span>
          </a>
        </div>

        {/* BOTÃO HAMBÚRGUER */}
        <button 
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden relative z-[1001] text-white p-2"
        >
          <div className="w-8 h-6 flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-white transition-all duration-300 ${menuAberto ? "w-8 translate-y-[11px] -rotate-45" : "w-8"}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${menuAberto ? "opacity-0" : "w-6"}`}></span>
            <span className={`h-0.5 bg-white transition-all duration-300 ${menuAberto ? "w-8 -translate-y-[11px] rotate-45" : "w-4"}`}></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuAberto && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 h-screen w-screen bg-[#082032] flex flex-col items-center justify-center md:hidden z-[1000]"
          >
            <div className="flex flex-col gap-10 text-center uppercase tracking-[0.4em] text-base text-white/80 font-light">
              <a href="#home" onClick={() => setMenuAberto(false)} className="hover:text-blue-400 py-2">Home</a>
              <a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-blue-400">Sobre</a>
              <a href="#servicos" onClick={() => setMenuAberto(false)} className="hover:text-blue-400">Serviços</a>
              <a href="#contato" onClick={() => setMenuAberto(false)} className="hover:text-blue-400">Contato</a>
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="https://wa.me/5584988160083" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuAberto(false)}
                className="group relative overflow-hidden mt-6 bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#1E3A8A] bg-[length:200%_auto] text-white px-10 py-5 rounded-full font-bold text-xs transition-all animate-brilho-lento border border-white/10 inline-block text-center"
              >
                {/* Efeito de reflexo (Shine) no Mobile */}
                <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
                
                <span className="relative z-10">Fale com Advogado</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;