# Portfolio Project — Progress & Handoff Notes

**Owner:** Mandla Mahlangu (GitHub: mandlacodes404)
**Goal:** A professional developer portfolio, hosted free on GitHub Pages at
`https://mandlacodes404.github.io`, showcasing two real projects (iSkool,
Dig Dug) to support software development job applications.

This file exists so that work can resume cleanly in a new conversation if
needed. Read this first before making any changes.

---

## Full original brief

The original project brief (goals, tone, content rules, "don't fabricate
anything" constraint, desired structure, visual direction, etc.) was provided
in full at the start of this project. If it is not already available in this
conversation, ask Mandla to re-share it — it contains critical constraints
(especially around accuracy of project claims) that must be followed.

Key non-negotiable rules from that brief:
- **Never fabricate** technologies, features, metrics, job experience, or
  contributions. Missing info = placeholder text or ask Mandla, never invent.
- Dig Dug's source repo is a **private university repo** — never create a
  fake public link or imply the code is public.
- Keep the site small and focused, not a "huge corporate website."
- Visual direction: modern, minimal, professional, technical, understated —
  inspired by (not copying) Linear/Vercel/Apple/Palantir-style quality.
- Tech stack: React + Vite + Tailwind CSS, deployed via GitHub Pages.
- Build incrementally, section by section, with Mandla reviewing each step —
  never generate the whole app in one go.

---

## Environment setup (COMPLETE)

- Node v20.19.0, npm 10.8.2, Git 2.50.1 confirmed installed on Mandla's
  Windows machine (PowerShell).
- GitHub repo created: `mandlacodes404/mandlacodes404.github.io` (public,
  no README/gitignore/license added at creation — matches local repo).
- Project scaffolded via `npm create vite@latest` → React + JavaScript
  (not TypeScript) + ESLint (chose ESLint over Oxlint for better docs/
  community support). Declined the "install and start now" auto-prompt to
  walk through steps manually.
- **Local folder is named `portfolio`** (Mandla initially typo'd "porfolio",
  then renamed it correctly — note the npm package name inside package.json
  may still say `porfolio` from the original scaffold; worth checking/fixing
  later, cosmetic only, does not affect functionality).
- Local repo connected to GitHub (`git remote add origin ...`), pushed
  successfully to `main`.
- Tailwind CSS v4 installed using the **current official method**: the
  `@tailwindcss/vite` plugin (not the old PostCSS/config-file approach).
  Verified working with a manual test (dark bg, white bold text via
  Tailwind utility classes) — confirmed visually in browser.
- Removed unused Vite starter files (`App.css`, starter SVGs/images).
- Installed `react-router-dom` for routing.

**Two terminals are used throughout:** one permanently running `npm run dev`
(never close/interrupt this), one free for git and other one-off commands.

---

## Site structure built so far (COMPLETE — full skeleton, unstyled)

No Tailwind styling has been applied to actual content yet — everything
below is plain unstyled HTML on purpose, so structure could be verified
independently of visual design.

### Data layer
- `src/data/projects.js` — single source of truth array of project objects
  (iSkool and Dig Dug), each with: slug, name, category, shortDescription,
  techStack, links (github/live — currently null for both), overview,
  features, architecture, challenges, contribution, screenshots (empty
  array), and `isPrivateRepo: true` on Dig Dug specifically.
  **All content fields are currently placeholder text** — none of it is
  real yet. This is the next major content task.

### Routing
- `src/App.jsx` — sets up `BrowserRouter`, renders `Navbar` persistently
  above `Routes`, defines two routes:
  - `/` → `Home`
  - `/projects/:slug` → `ProjectPage` (reusable template, reads `:slug`
    via `useParams()`, looks up the matching project via
    `projects.find()`)
- Routing confirmed fully working: home → card → project page → back link
  → home, in both directions, for both projects.
- **Not yet implemented:** the GitHub Pages SPA-routing workaround (a
  `404.html` trick) needed so that direct visits/refreshes on
  `/projects/iskool` etc. don't 404 once deployed live. This was discussed
  but deferred — must be done before/at deployment.

### Components built (all in plain unstyled JSX)
- `src/components/layout/Navbar.jsx` — persistent header, name links home.
- `src/components/home/Hero.jsx` — headline + subtext (placeholder wording
  loosely based on brief's suggested direction, not finalized).
- `src/components/home/About.jsx` — placeholder paragraph.
- `src/components/home/ProjectsSection.jsx` — maps over `projects.js`,
  renders one `ProjectCard` per project. This is the key piece that makes
  adding future projects easy (add to data file only, no component changes
  needed for the homepage).
- `src/components/home/ProjectCard.jsx` — displays name, category,
  description, tech stack, and a `<Link>` to `/projects/{slug}` ("View
  Project"). Uses React Router's `Link`, not a plain `<a>`.
- `src/components/home/Skills.jsx` — hardcoded array of skills, rendered as
  a list. Currently a **shorter/conservative list** than everything named
  in the brief — deliberately left for Mandla to edit down to only what he
  can genuinely discuss in an interview.
- `src/components/home/Education.jsx` — placeholder, Wits BSc Electrical
  Engineering.
- `src/components/home/Contact.jsx` — placeholder email text + real GitHub
  profile link (mandlacodes404).
- `src/pages/Home.jsx` — assembles all home sections in order: Hero, About,
  ProjectsSection, Skills, Education, Contact.
- `src/pages/ProjectPage.jsx` — the reusable project page template.
  Renders Overview / Features / Architecture / Technical Challenges / My
  Contribution / Repository sections from whichever project object matches
  the URL slug. Repository section has three-way conditional logic:
  private repo → plain text "Private university repository"; real GitHub
  link present → working link; neither → "Repository link coming soon."
  This directly implements the brief's "never fake a repo link" rule.

**Current state confirmed in browser by Mandla:** entire flow works —
home page shows all sections top to bottom, both project cards link
correctly to `/projects/iskool` and `/projects/dig-dug`, each shows its
own distinct placeholder content, back-navigation works, Navbar link works
from any page.

**Git status:** all of the above has been committed and pushed to
`main` on GitHub (commit message: "Build full site skeleton: routing, all
home sections, reusable ProjectPage template, Navbar").

---

## What's explicitly NOT done yet

1. **No visual design applied yet.** Zero Tailwind classes on real content —
   this was a deliberate sequencing choice (structure before style), agreed
   with Mandla. This is the very next step.
2. **No real content yet.** Every text field in `projects.js` and every
   section component is placeholder wording. Real iSkool/Dig Dug content
   (accurate, non-fabricated) still needs to be written, ideally with
   Mandla's direct input per project.
3. **No screenshots yet.** Mandla plans to take these later. `screenshots`
   arrays in `projects.js` are currently empty.
4. **No GitHub Pages deployment yet.** Not deployed live. Will need: the
   SPA-routing `404.html` workaround for React Router + GitHub Pages, a
   deploy method decision (e.g. `gh-pages` npm package vs. GitHub Actions
   workflow — not yet discussed), and Vite base path config if needed.
5. **Skills list not finalized** — needs Mandla's review/edit.
6. **package.json project name** may still read `porfolio` (typo) instead
   of `portfolio` — cosmetic, low priority, worth a quick fix at some point.

---

## Next step (where to resume)

Mandla asked for the **visual design direction** proposal next — this was
flagged as needing an actual visual mockup/concept to react to, not just a
text description, since terms like "modern, minimal, technical, understated"
are ambiguous without something concrete to look at.

Direction discussed but **not yet approved**: leaning into Mandla's actual
subject matter (Electrical Engineering + software) with subtle
circuit/schematic-inspired visual details (thin connective lines,
terminal/register-style data labels, PCB-trace-style dividers) rather than
a generic dark-SaaS-gradient look — specifically to avoid the site looking
like an unoriginal Linear/Vercel clone, per Mandla's explicit instruction
not to copy those sites.

**Recommended next action for whoever continues this:** build an actual
visual concept (colors, typography, a hero layout) — using the Visualizer/
mockup tool if available — and present it to Mandla for reaction, before
writing any Tailwind classes into the real components.

## Working style notes for whoever continues this

- Mandla is following along command-by-command in a terminal and is
  relatively new to this workflow — explain *why*, not just *what*, and
  keep instructions to one clear step at a time.
- Mandla has explicitly asked for **word-only explanations**, not large
  code-heavy responses, in at least one recent message — check the live
  conversation for whether that preference still stands before dumping
  large code blocks.
- Go step by step; confirm each step worked (via Mandla's own description
  or screenshot) before moving to the next.
- Do not skip ahead or batch multiple structural changes into one message
  without checking in.
