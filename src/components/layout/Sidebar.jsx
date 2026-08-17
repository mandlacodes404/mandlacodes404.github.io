// src/components/layout/Sidebar.jsx

import { useState, useEffect } from "react";

const navItems = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "SELECTED PROJECTS" },
  { id: "other-work", label: "OTHER WORK" },
];

function Sidebar({ isDark, onToggle }) {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden md:flex md:flex-col md:justify-between md:h-screen md:sticky md:top-0 md:w-full px-10 pt-32 pb-16">
      <div>
        <button
          type="button"
          onClick={onToggle}
          aria-label="Toggle light and dark mode"
          className="relative w-11 h-6 rounded-full border border-border-strong bg-surface mb-8 transition-colors"
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4.5 h-4.5 rounded-full bg-accent transition-transform ${
              isDark ? "translate-x-0" : "translate-x-5"
            }`}
          ></span>
        </button>

        <h1 className="text-4xl font-bold text-text-primary mb-3">
          Mandla Mahlangu
        </h1>

        <p className="font-mono text-xs tracking-wide text-accent mb-6">
          EE STUDENT — WITS UNIVERSITY / SOFTWARE DEVELOPER
        </p>
        <h2 className="text-2xl font-medium leading-tight text-text-primary mb-4">
          I build software that solves real problems.
        </h2>
        <p className="text-base text-text-secondary leading-relaxed mb-12 max-w-xs">
          Currently building iSkool — an education platform that helps
          teachers, learners and schools manage their day-to-day
          activities.
        </p>

        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-3 group"
            >
              <span
                className={`h-px transition-all ${
                  activeId === item.id
                    ? "w-8 bg-text-primary"
                    : "w-4 bg-border-strong group-hover:w-8 group-hover:bg-text-secondary"
                }`}
              ></span>
              <span
                className={`text-xs font-mono tracking-wide transition-colors ${
                  activeId === item.id
                    ? "text-text-primary"
                    : "text-text-muted group-hover:text-text-secondary"
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;