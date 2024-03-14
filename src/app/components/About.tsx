"use client"
import { useState, useEffect } from 'react';

export default function About() {
  const [textSize, setTextSize] = useState("10vw");

  useEffect(() => {
    const calculateTextSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
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
    <div className="mt-32 flex items-center flex-wrap justify-center">
      <div className="px-5 w-[45%]">
        <p className="font-bold" style={{fontSize: textSize}}>Olá, eu sou o</p>
        <p className="font-bold text-violet-600" style={{fontSize: textSize}}>Caio Cintra</p>
        <p className="text-lg font-bold text-gray-500">
          DESENVOLVEDOR FRONTEND
        </p>
      </div>
      <div className="w-2/6"><img src="/Foto.png" className='w-fit'/></div>
      <div className="w-full p-10 mb-20">
        <p className="text-3xl font-bold text-center m-5">Sobre mim</p>
        <p className="mx-10 text-lg text-gray-500">
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
