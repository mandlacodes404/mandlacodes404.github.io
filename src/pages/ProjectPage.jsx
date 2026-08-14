// src/pages/ProjectPage.jsx

import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="px-10 py-16">
        <p className="text-text-secondary">Project not found.</p>
        <Link to="/" className="text-accent hover:underline">
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="px-10 py-16 max-w-3xl">
      <Link
        to="/"
        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        ← Back to home
      </Link>

      <div className="mt-8 mb-12">
        <h1 className="text-3xl font-medium text-text-primary mb-2">
          {project.name}
        </h1>
        <p className="text-sm text-text-muted mb-4">{project.category}</p>
        <div className="flex gap-2 flex-wrap">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-accent border border-border-soft rounded px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <section className="py-8 border-t border-border">
        <p className="font-mono text-xs tracking-wide text-accent mb-4">
          OVERVIEW
        </p>
        <p className="text-base text-text-secondary leading-relaxed">
          {project.overview}
        </p>
      </section>

      <section className="py-8 border-t border-border">
        <p className="font-mono text-xs tracking-wide text-accent mb-4">
          FEATURES
        </p>
        <ul className="space-y-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="text-base text-text-secondary leading-relaxed"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-8 border-t border-border">
        <p className="font-mono text-xs tracking-wide text-accent mb-4">
          ARCHITECTURE
        </p>
        <p className="text-base text-text-secondary leading-relaxed">
          {project.architecture}
        </p>
      </section>

      <section className="py-8 border-t border-border">
        <p className="font-mono text-xs tracking-wide text-accent mb-4">
          TECHNICAL CHALLENGES
        </p>
        <p className="text-base text-text-secondary leading-relaxed">
          {project.challenges}
        </p>
      </section>

      <section className="py-8 border-t border-border">
        <p className="font-mono text-xs tracking-wide text-accent mb-4">
          MY CONTRIBUTION
        </p>
        <p className="text-base text-text-secondary leading-relaxed">
          {project.contribution}
        </p>
      </section>

      <section className="py-8 border-t border-border">
        <p className="font-mono text-xs tracking-wide text-accent mb-4">
          REPOSITORY
        </p>
        {project.isPrivateRepo ? (
          <p className="text-base text-text-secondary flex items-center gap-2">
            <i className="ti ti-lock text-sm" aria-hidden="true"></i>
            Private university repository.
          </p>
        ) : project.links.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-accent hover:underline"
          >
            View on GitHub →
          </a>
        ) : (
          <p className="text-base text-text-muted">
            Repository link coming soon.
          </p>
        )}
      </section>
    </main>
  );
}

export default ProjectPage;