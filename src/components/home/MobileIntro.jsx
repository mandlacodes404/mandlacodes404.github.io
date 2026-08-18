// src/components/home/MobileIntro.jsx
//
// Mobile-only version of the sidebar's identity block, now including
// the dark/light toggle switch (top-left, above the name) — the sidebar
// version is hidden on mobile, so this is the only way mobile visitors
// can switch modes.

function MobileIntro({ isDark, onToggle }) {
  return (
    <div className="md:hidden px-10 pt-16 pb-8">
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
      <p className="text-base text-text-secondary leading-relaxed">
        Currently building iSkool — an education platform that helps
        teachers, learners and schools manage their day-to-day
        activities.
      </p>
    </div>
  );
}

export default MobileIntro;