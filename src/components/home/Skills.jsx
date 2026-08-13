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
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;