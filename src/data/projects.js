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
      "Education Technology Platform.",
    techStack: ["LIVE"],
    thumbnail: "/images/iskool/thumbnail.png",
    links: {
      github: null,
      live: "https://sandbox.iskool.xyz",
    },
    demoCredentials: {
      email: "sibusiso.mokoena@iskool.demo",
      password: "Password123",
    },
    overview: "Placeholder overview paragraph.",
    features: [
      "Placeholder feature one",
      "Placeholder feature two",
    ],
    architecture: "Placeholder architecture description.",
    challenges: "Placeholder technical challenges description.",
    contribution: "Placeholder description of your personal contribution.",
    screenshots: [],
  },
  {
    slug: "dig-dug",
    name: "Dig Dug",
    category: "C++ Arcade Game — University Software Engineering Project",
    shortDescription:
      "C++ Arcade Game — University Software Engineering Project.",
    techStack: ["University Project"],
    thumbnail: "/images/dig-dug/thumbnail.png",
    links: {
      github: null,                 // stays null — private university repo
      live: null,
    },
    noDemoExplanation: {
      heading: "Why there's no live demo",
      body: "Dig Dug was a UNIVERSITY project built for a software development course at Wits University.\n\nThe original source code lives in a private university repository and isn't publicly available.",
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
    isPrivateRepo: true,
  },
];