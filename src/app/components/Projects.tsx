import Project from "./Project";

export default function Projects() {
  return (
    <>
      <p className="text-3xl font-bold text-center m-11">Projetos</p>

      <div className="overflow-y-auto align-middle flex items-center flex-wrap justify-center">
        <Project img="/SistemaTCC.png" link="https://github.com/CaioCintra/Sistema_TCC" nome="Sistema Gerenciador de TCC" site="asd" desc="Sistema para simplificar o trabalho do professor responsável pelas atividades de trabalho de conclusão de curso da UTFPR."/>
      </div>
    </>
  );
}
