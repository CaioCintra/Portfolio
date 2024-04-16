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
          desc="Sistema para simplificar o trabalho do professor responsável pelas atividades de trabalho de conclusão de curso da UTFPR."
        />
        <Project
          img="/Pokedex.png"
          link="https://github.com/CaioCintra/Pokedex"
          site="https://pokedex-caiocintra.vercel.app"
          nome="Pokédex"
          desc="Pokédex interativa, feita para treinar em Next.js"
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
