import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Importar ferramentas do motion

const WhatsAppButton = ({ wppAtivado }) => {
  return (
    <AnimatePresence>
      {wppAtivado && (
        <motion.div 
          // Animação de entrada e saída
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[60]"
        >
          <a 
            href="https://wa.me/5584988160083?text=Olá,%20Dr.%20Diego!%20Gostaria%20de%20uma%20consultoria%20jurídica%20criminal." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative block group"
          >
            {/* ÍCONE DE NOTIFICAÇÃO PENDENTE */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600 border-2 border-[#14252F] items-center justify-center text-[10px] text-white font-bold shadow-lg">
                1
              </span>
            </span>

            {/* CÍRCULO PRINCIPAL COM EFEITO DE BRILHO */}
            <motion.div 
              className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#1E3A8A] bg-[length:200%_auto] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(30,58,138,0.3)] transition-all duration-300 group-hover:scale-110 border border-white/20"
              style={{ 
                animation: 'brilhoIntercalado 3s infinite ease-in-out',
              }}
              whileHover={{ rotate: 10 }} // Pequena rotação no hover para charme extra
            >
              <svg className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.556 4.188 1.613 6.008L0 24l6.135-1.61a11.83 11.83 0 005.912 1.584h.005c6.635 0 12.032-5.392 12.035-12.03a11.79 11.79 0 00-3.526-8.51z"/>
              </svg>
            </motion.div>

            {/* TOOLTIP NO HOVER */}
            <span className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 bg-[#082032] text-white text-[11px] font-bold uppercase px-5 py-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-2xl border border-white/10">
              Consultoria Criminal
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;