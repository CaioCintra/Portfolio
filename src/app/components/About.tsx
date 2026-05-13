"use client"
import { useState, useEffect } from 'react';

export default function About() {
  const [textSize, setTextSize] = useState("10vw");

  useEffect(() => {
    const calculateTextSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 640) {
        return "7vw";
      } else if (screenWidth <= 768) {
        return "5vw";
      } else if (screenWidth <= 1024) {
        return "4vw";
      } else {
        return "5vw";
      }
    };

    setTextSize(calculateTextSize());
  }, []);

  return (
    <div className="mt-32 flex items-center flex-wrap justify-center px-4 sm:px-6 md:px-8">
      <div className="w-full sm:w-1/2 lg:w-5/12 text-center sm:text-left sm:pr-8 mb-8 sm:mb-0">
        <p className="font-bold leading-tight" style={{fontSize: textSize}}>Olá, eu sou o</p>
        <p className="font-bold text-violet-600 leading-tight" style={{fontSize: textSize}}>Caio Cintra</p>
        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-400 mt-2">
          DESENVOLVEDOR FRONTEND
        </p>
      </div>
      <div className="w-full sm:w-1/2 lg:w-3/12 flex justify-center mb-8 sm:mb-0">
        <img src="/Foto.png" className='w-40 sm:w-56 md:w-72 h-auto rounded-lg shadow-lg'/>
      </div>
      <div className="w-full p-6 sm:p-8 md:p-10 mb-20">
        <p className="text-2xl sm:text-3xl font-bold text-center mb-6">Sobre mim</p>
        <p className="px-4 sm:px-8 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed text-justify">
          Desenvolvedor frontend, com experiência em React.js, Next.js, Angular, Tailwind
          CSS, Bootstrap, JavaScript e TypeScript, bem como em bibliotecas como
          Material UI, estou comprometido em transformar conceitos em
          experiências web cativantes e responsivas. Com um foco em estética,
          desempenho e usabilidade, trago habilidades sólidas na construção de
          interfaces web de alta qualidade. Sou um colaborador ágil e apaixonado
          por aprender e me atualizar constantemente para enfrentar os desafios
          do desenvolvimento frontend, ansioso por contribuir para projetos
          inovadores e inspiradores.
        </p>
      </div>
    </div>
  );
}
