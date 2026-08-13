import Hero from "../components/home/Hero";
import About from "../components/home/About";
import ProjectsSection from "../components/home/ProjectsSection";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import Contact from "../components/home/Contact";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

export default Home;