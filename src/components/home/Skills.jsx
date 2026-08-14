// src/components/home/Skills.jsx

const skills = [
  "C++",
  "PHP",
  "JavaScript",
  "React",
  "MySQL",
  "Git",
  "CMake",
  "HTML/CSS",
];

function Skills() {
  return (
    <section id="skills" className="px-10 py-16 border-t border-border">
      <p className="font-mono text-xs tracking-wide text-accent mb-8">
        SKILLS
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm font-mono text-text-secondary border border-border-soft rounded px-3 py-1.5"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;