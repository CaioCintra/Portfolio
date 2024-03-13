
export default function About() {
  return (
    <div className="mt-24 flex items-center flex-wrap justify-center">
      <div className="p-8">
        <p className="text-8xl font-bold">Olá, eu sou o</p>
        <p className="text-8xl font-bold text-violet-600">Caio Cintra</p>
        <p className="pl-2 text-xl font-bold text-gray-500">
          DESENVOLVEDOR FRONTEND
        </p>
      </div>
      <div className="p-36 w-2/5"><img src="/Foto.png"/></div>
      <div className="w-2/3 mb-20">
        <p className="text-3xl font-bold text-center m-5">Sobre mim</p>
        <p className="text-lg text-gray-500">
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
