// src/components/home/ProjectsSection.jsx
//
// Loops over every project in projects.js and renders a ProjectCard
// for each one. To add a new project to the homepage later, you only
// need to add an entry to projects.js — this file never changes.

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section>
      <h2>Selected Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}

export default ProjectsSection;