import Project from "./Project";

export default function Projects() {
  return (
    <>
      <p className="text-3xl font-bold text-center m-11">Projetos</p>

      <div className="overflow-y-auto align-middle flex items-center flex-wrap justify-center">
        <Project
          img="/SistemaTCC.png"
          link="https://github.com/CaioCintra/Sistema_TCC"
          nome="Sistema Gerenciador de TCC"
          desc="Sistema para simplificar o trabalho do professor responsável pelas atividades de trabalho de conclusão de curso da UTFPR. Feito com Next.js no front-end e Node.js no back-end."
        />
        <Project
          img="/Pokedex.png"
          link="https://github.com/CaioCintra/Pokedex"
          site="https://pokedex-caiocintra.vercel.app"
          nome="Pokédex"
          desc="Pokédex interativa, feita em Next.js. Permite buscar por pokémon, visualizar detalhes e navegar entre eles."
        />
        <Project
          img="/Scrng.png"
          link="https://github.com/CaioCintra/CapsulaDoTempo"
          site="https://scrng.vercel.app"
          nome="Scrng"
          desc="Gerenciador de pontuação para jogos ou brincadeiras, feito com Next.js. Com ele é possível criar salas e adicionar jogadores para acompanhar a pontuação de cada um."
        />
        <Project
          img="/Capsula.png"
          link="https://github.com/CaioCintra/CapsulaDoTempo"
          nome="Cápsula Do Tempo"
          desc="Armazém de lembranças com datas, autenticado pelo github, feito com ajuda do curso da Rocketseat"
        />
      </div>
    </>
  );
}
