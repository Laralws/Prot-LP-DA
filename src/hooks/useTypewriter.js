import { useState, useEffect } from 'react';

export const useTypewriter = (textos, velocidadeEscrita = 20, velocidadeApagar = 10, pausa = 800) => {
  const [indexTexto, setIndexTexto] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const atual = textos[indexTexto] || "";
    const delay = isDeleting ? velocidadeApagar : velocidadeEscrita;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < atual.length) {
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === atual.length) {
        setTimeout(() => setIsDeleting(true), pausa);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndexTexto((prev) => (prev + 1) % textos.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, indexTexto, textos, velocidadeEscrita, velocidadeApagar, pausa]);

  return { indexTexto, charIndex };
};