import Loader from "./components/Loader/Loader";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Loader />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
