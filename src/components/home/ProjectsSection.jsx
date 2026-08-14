// src/components/home/ProjectsSection.jsx

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="px-10 py-16 border-t border-border">
      <p className="font-mono text-xs tracking-wide text-accent mb-8">
        SELECTED PROJECTS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;