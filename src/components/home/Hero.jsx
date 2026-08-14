// src/components/home/Hero.jsx

function Hero() {
  return (
    <section className="bg-bg px-10 py-24 border-l border-border-soft ml-10">
      <div className="pl-5">
        <p className="font-mono text-xs tracking-wide text-accent mb-4">
          EEE STUDENT — WITS UNIVERSITY / SOFTWARE DEVELOPER
        </p>
        <h1 className="text-4xl font-medium leading-tight text-text-primary mb-4 max-w-xl">
          I build software that solves real problems.
        </h1>
        <p className="text-base text-text-secondary leading-relaxed max-w-md">
          Electrical Engineering student and independent developer. I
          design and ship complete systems, not just code snippets.
        </p>
      </div>
    </section>
  );
}

export default Hero;