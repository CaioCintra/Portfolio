import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Tech />
      <Projects/>
      <Contact/>
    </>
  );
}
