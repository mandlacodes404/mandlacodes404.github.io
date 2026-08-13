// src/components/home/ProjectCard.jsx

import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.category}</p>
      <p>{project.shortDescription}</p>
      <p>{project.techStack.join(" · ")}</p>
      <Link to={`/projects/${project.slug}`}>View Project</Link>
    </div>
  );
}

export default ProjectCard;