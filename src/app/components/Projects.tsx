import Project from "./Project";

export default function Projects() {
  return (
    <>
      <p className="text-2xl sm:text-3xl font-bold text-center m-6 sm:m-11">Projetos</p>

      <div className="overflow-y-auto align-middle flex items-center flex-wrap justify-center px-2 sm:px-4 pb-10">
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
          img="/Chamados.png"
          link="https://github.com/CaioCintra/Lista-De-Chamados"
          site="https://lista-de-chamados.vercel.app"
          nome="Lista de Chamados"
          desc="Sistema para gerenciar chamados, feito com Next.js. Permite criar e visualizar chamados. Populado com um gerador de dados para facilitar os testes e demonstração do projeto. Inclui uma aba de gráficos para verificar um resumo dos dados dos chamados e testes em Jest para garantir a qualidade do código."
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
