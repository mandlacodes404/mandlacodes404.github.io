// src/components/home/ProjectCard.jsx

import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="border border-border rounded-lg p-5 bg-surface hover:border-border-strong transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-base font-medium text-text-primary">
          {project.name}
        </h3>
        {project.isPrivateRepo ? (
          <i className="ti ti-lock text-sm text-text-muted" aria-hidden="true"></i>
        ) : (
          <i className="ti ti-arrow-up-right text-sm text-text-muted" aria-hidden="true"></i>
        )}
      </div>
      <p className="text-xs text-text-muted mb-4">{project.category}</p>
      <div className="flex gap-2 flex-wrap mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono text-accent border border-border-soft rounded px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        to={`/projects/${project.slug}`}
        className="text-sm text-accent hover:underline"
      >
        View project →
      </Link>
    </div>
  );
}

export default ProjectCard;