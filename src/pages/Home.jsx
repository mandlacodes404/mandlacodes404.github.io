// src/pages/Home.jsx

import About from "../components/home/About";
import ProjectsSection from "../components/home/ProjectsSection";
import OtherWork from "../components/home/OtherWork";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import Contact from "../components/home/Contact";

function Home() {
  return (
    <main>
      <About />
      <ProjectsSection />
      <OtherWork />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

export default Home;