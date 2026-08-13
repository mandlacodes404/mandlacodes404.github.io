// src/pages/ProjectPage.jsx
//
// One reusable template for every project page. It reads the "slug"
// from the URL (e.g. "iskool" from /projects/iskool), finds the matching
// project in projects.js, and renders its details. Adding a new project
// later does NOT require a new page file — just a new entry in projects.js.

import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main>
        <p>Project not found.</p>
        <Link to="/">Back to home</Link>
      </main>
    );
  }

  return (
    <main>
      <Link to="/">← Back to home</Link>

      <h1>{project.name}</h1>
      <p>{project.category}</p>
      <p>{project.techStack.join(" · ")}</p>

      <h2>Overview</h2>
      <p>{project.overview}</p>

      <h2>Features</h2>
      <ul>
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <h2>Architecture</h2>
      <p>{project.architecture}</p>

      <h2>Technical Challenges</h2>
      <p>{project.challenges}</p>

      <h2>My Contribution</h2>
      <p>{project.contribution}</p>

      <h2>Repository</h2>
      {project.isPrivateRepo ? (
        <p>Private university repository.</p>
      ) : project.links.github ? (
        <a href={project.links.github} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      ) : (
        <p>Repository link coming soon.</p>
      )}
    </main>
  );
}

export default ProjectPage;