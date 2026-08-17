// src/components/home/ProjectCard.jsx
//
// Row-style project entry. If the project has demoCredentials, clicking
// opens a modal showing them before redirecting to the live site.
// Otherwise, links straight to project.links.live if it exists.
// Renders as a non-clickable row if there's no live link at all.

import { useState } from "react";
import DemoLoginModal from "./DemoLoginModal";

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  const content = (
    <>
      <div className="w-40 h-24 shrink-0 rounded-md border border-border bg-surface overflow-hidden flex items-center justify-center">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <i
            className="ti ti-photo text-lg text-text-muted"
            aria-hidden="true"
          ></i>
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          {project.isPrivateRepo ? (
            <i
              className="ti ti-lock text-xs text-text-muted"
              aria-hidden="true"
            ></i>
          ) : project.links.live ? (
            <i
              className="ti ti-arrow-up-right text-xs text-text-muted"
              aria-hidden="true"
            ></i>
          ) : null}
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-2">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-accent border border-border-soft rounded px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (project.demoCredentials) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="flex gap-5 group py-4 text-left w-full"
        >
          {content}
        </button>
        {showModal && (
          <DemoLoginModal
            project={project}
            onClose={() => setShowModal(false)}
          />
        )}
      </>
    );
  }

  if (project.links.live) {
    return (
      <a
        href={project.links.live}
        target="_blank"
        rel="noreferrer"
        className="flex gap-5 group py-4"
      >
        {content}
      </a>
    );
  }

  return <div className="flex gap-5 py-4">{content}</div>;
}

export default ProjectCard;