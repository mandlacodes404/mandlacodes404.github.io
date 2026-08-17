// src/components/home/About.jsx

import MobileIntro from "./MobileIntro";

function About() {
  return (
    <>
      <MobileIntro />
      <section id="about" className="px-10 py-16">
        <p className="md:hidden font-mono text-xs tracking-wide text-accent mb-6">
          ABOUT
        </p>
        <div className="text-base text-text-secondary leading-loose space-y-6 max-w-md">
          <p>
            Hi there! my name is Mandla Mahlangu. I'm an Electrical
            Engineering student at Wits University, but a lot of my time
            outside the classroom is spent building software. I enjoy
            taking an idea and figuring out how to turn it into something
            that actually works.
          </p>
          <p>
            I was introduced to programming and software development
            through my engineering studies, and I've continued developing
            those skills through my own projects. Over time, I've become
            particularly interested in building complete systems — not
            just writing code, but thinking about how the different parts
            of a product fit together.
          </p>
          <p>
            That interest led me to build iSkool, an education platform
            that I've been developing from the ground up. It has given me
            the opportunity to work across the frontend, backend,
            databases, APIs and the different experiences needed for
            teachers, learners and schools.
          </p>
          <p>
            I'm still learning, and that's one of the things I enjoy most
            about building software. There's always something I don't
            know yet, and another problem to figure out.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;