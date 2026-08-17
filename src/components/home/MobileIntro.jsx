// src/components/home/MobileIntro.jsx
//
// Mobile-only version of the sidebar's identity block (name, tagline,
// headline, intro paragraph) — everything except the theme toggle and
// nav links, which don't apply on mobile. Hidden on desktop (md:hidden)
// since Sidebar already shows this content there.

function MobileIntro() {
  return (
    <div className="md:hidden px-10 pt-16 pb-8">
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