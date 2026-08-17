// src/data/projects.js
//
// Single source of truth for all project content on the site.
// To add a new project later: add one new object to this array.
// The ProjectCard and ProjectPage components read from this file —
// you should not need to touch their code to add a project.

export const projects = [
  {
    slug: "iskool",                 // used in the URL: /projects/iskool
    name: "iSkool",
    category: "Education Technology Platform",
    shortDescription:
      "Placeholder short description of iSkool for the project card.",
    techStack: ["PHP", "JavaScript", "MySQL", "PWA"],
    thumbnail: "/images/iskool/thumbnail.png",
    links: {
      github: null,
      live: "https://sandbox.iskool.xyz",
    },
    overview: "Placeholder overview paragraph.",
    features: [
      "Placeholder feature one",
      "Placeholder feature two",
    ],
    architecture: "Placeholder architecture description.",
    challenges: "Placeholder technical challenges description.",
    contribution: "Placeholder description of your personal contribution.",
    screenshots: [],                // { src: "", caption: "" } objects go here later
  },
  {
    slug: "dig-dug",
    name: "Dig Dug",
    category: "C++ Arcade Game — University Software Engineering Project",
    shortDescription:
      "Placeholder short description of Dig Dug for the project card.",
    techStack: ["C++", "CMake", "Git"],
    thumbnail: "/images/dig-dug/thumbnail.png",
    links: {
      github: null,                 // stays null — private university repo
      live: null,
    },
    overview: "Placeholder overview paragraph.",
    features: [
      "Placeholder feature one",
      "Placeholder feature two",
    ],
    architecture: "Placeholder architecture / technical concepts description.",
    challenges: "Placeholder technical challenges description.",
    contribution: "Placeholder description of your personal contribution.",
    screenshots: [],
    isPrivateRepo: true,            // tells ProjectPage to show "Private repository" text
  },
];