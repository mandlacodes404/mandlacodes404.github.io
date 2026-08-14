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
- GitHub repo created: `mandlacodes404/mandlacodes404.github.io` (public).
- Project scaffolded via `npm create vite@latest` → React + JavaScript
  (not TypeScript) + ESLint.
- **Local folder is named `portfolio`** (Mandla initially typo'd "porfolio",
  then renamed it correctly — the npm package name inside package.json may
  still read `porfolio` from the original scaffold; cosmetic only, worth a
  quick fix at some point, does not affect functionality).
- Local repo connected to GitHub, pushed successfully to `main`.
- Tailwind CSS v4 installed using the **current official method**: the
  `@tailwindcss/vite` plugin registered inside `vite.config.js`, with
  `@import "tailwindcss";` at the top of `src/index.css`.
- Removed unused Vite starter files (`App.css`, starter SVGs/images).
- Installed `react-router-dom` for routing.
- Tabler icon webfont loaded via CDN link in `index.html` `<head>`:
  `https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css`
  — used for lock/external-link icons on project cards and pages.

**Two terminals are used throughout:** one permanently running `npm run dev`
(never close/interrupt this), one free for git and other one-off commands.
Mandla has occasionally lost track of which terminal is which after
reopening VS Code — the tell is that the dev-server terminal shows a green
"VITE ready" message and a `localhost` link; the other is always safe for
commands.

---

## Site structure (COMPLETE)

### Data layer
- `src/data/projects.js` — single source of truth array of project objects
  (iSkool and Dig Dug), each with: slug, name, category, shortDescription,
  techStack, links (github/live — currently null for both), overview,
  features, architecture, challenges, contribution, screenshots (empty
  array), and `isPrivateRepo: true` on Dig Dug specifically.
  **All content fields are still placeholder text** — this is the next
  major task.

### Routing
- `src/App.jsx` — sets up `BrowserRouter`, wraps everything in a single
  `<div className="bg-bg min-h-screen">` for consistent full-page dark
  background, renders `Navbar` persistently above `Routes`, defines:
  - `/` → `Home`
  - `/projects/:slug` → `ProjectPage` (reusable template, reads `:slug`
    via `useParams()`, looks up the matching project via
    `projects.find()`)
- Routing confirmed fully working in both directions, for both projects.
- **Not yet implemented:** the GitHub Pages SPA-routing workaround (a
  `404.html` trick) needed so that direct visits/refreshes on
  `/projects/iskool` etc. don't 404 once deployed live. Must be done
  before/at deployment.

### Components (all built AND fully styled — see Visual design section)
- `src/components/layout/Navbar.jsx`
- `src/components/home/Hero.jsx`
- `src/components/home/About.jsx`
- `src/components/home/ProjectsSection.jsx` (maps over `projects.js`)
- `src/components/home/ProjectCard.jsx`
- `src/components/home/Skills.jsx` (hardcoded conservative skills array —
  **not yet finalized**, needs Mandla's review to only include what he can
  genuinely discuss in an interview)
- `src/components/home/Education.jsx`
- `src/components/home/Contact.jsx` (real GitHub link to mandlacodes404;
  email still placeholder)
- `src/pages/Home.jsx` (assembles all home sections in order)
- `src/pages/ProjectPage.jsx` (reusable template: Overview / Features /
  Architecture / Technical Challenges / My Contribution / Repository.
  Repository section has three-way conditional: private repo → lock icon +
  "Private university repository" text; real GitHub link → working link;
  neither → "Repository link coming soon." Never fakes a link.)

---

## Visual design (COMPLETE)

Two mockup directions were presented (using the Visualizer/mockup tool):
**A** — dark, circuit/schematic-inspired, monospace technical labels;
**B** — off-white/warm, Anthropic-adjacent palette, serif headline touch.

**Mandla chose Option A.** This is now fully implemented across the entire
site — every page, every component.

### Design system implemented
Defined in `src/index.css` inside a Tailwind v4 `@theme` block (registers
custom color tokens as usable Tailwind classes):

```css
@theme {
  --color-bg: #0a0a0a;
  --color-surface: #111110;
  --color-border: #262622;
  --color-border-soft: #24352e;
  --color-border-strong: #3a3a34;
  --color-text-primary: #f2f2ee;
  --color-text-secondary: #9a9a94;
  --color-text-muted: #7a7a74;
  --color-accent: #5da88e;
}
```

(VS Code's built-in CSS linter shows a harmless "Unknown at rule @theme"
warning on this file — this is just the linter not recognizing Tailwind
v4 syntax yet. Not a real error, confirmed safe to ignore.)

### Recurring visual patterns (applied consistently across all sections)
- Small monospace "eyebrow" label in accent green above each section
  (e.g. `ABOUT`, `SELECTED PROJECTS`, `SKILLS`), using `font-mono text-xs
  tracking-wide text-accent`.
- Thin top border (`border-t border-border`) separating each home-page
  section — a quiet divider rather than large gaps.
- Hero uses a distinct thin left-side vertical rule (`border-l
  border-border-soft`) instead of a top border, as its opening visual
  signature.
- Tech-stack / skills "pills": `font-mono text-xs`, accent-colored text,
  thin `border-border-soft`, small rounded corners — same pattern reused
  for project card tags, skills list, and project-page tech tags.
- Project cards: bordered, `bg-surface`, hover brightens border
  (`hover:border-border-strong`), lock icon for private repos vs.
  external-link arrow icon otherwise (Tabler icons).
- Subtle hover transitions on links/nav items (`transition-colors`) — no
  large or flashy animation, matching the brief's "understated" request.

### Confirmed working in browser (by Mandla)
- Full home page: Navbar, Hero, About, Projects (2-column grid on desktop,
  stacks to 1 column on mobile via `md:grid-cols-2`), Skills, Education,
  Contact — all styled, consistent, dark background throughout.
- Navbar anchor links (`Work` → `#projects`, `About` → `#about`, `Contact`
  → `#contact`) all smooth-scroll correctly.
- Both individual project pages (`/projects/iskool`, `/projects/dig-dug`)
  fully styled, matching the same visual language, confirmed correct by
  Mandla directly in-browser.
- Zero errors in VS Code's Problems panel (aside from the harmless
  `@theme` linter warning noted above).

### Known recurring issue during this build (worth knowing about)
While copy/pasting multi-line JSX (specifically `<a>` tags with several
attributes), the opening `<a` tag was twice accidentally dropped/garbled
during paste, breaking the file (VS Code Problems panel lit up red,
multiple cascading syntax errors). Both times fixed by replacing the whole
file cleanly rather than patching in place. If this happens again: check
any multi-line tag (especially `<a ...>` with several attributes) for a
missing opening `<tagname` on its own first line.

**Git status:** all of the above has been committed and pushed to `main`
across three commits: initial skeleton, home page styling, and
ProjectPage styling.

---

## What's explicitly NOT done yet

1. **No real content yet.** Every text field in `projects.js` and several
   components (About, Education, Contact email) is still placeholder
   wording. Real iSkool/Dig Dug content — accurate, non-fabricated — still
   needs to be written, ideally with Mandla's direct input per project
   (overview, features, architecture, challenges, contribution).
2. **No screenshots yet.** Mandla plans to take these later. `screenshots`
   arrays in `projects.js` are currently empty; `ProjectGallery`-type
   rendering for them has not been built into `ProjectPage.jsx` yet either
   — will need a small addition once images exist.
3. **No GitHub Pages deployment yet.** Not deployed live. Will need:
   - The SPA-routing `404.html` workaround for React Router + GitHub Pages
     (direct visits/refreshes on `/projects/iskool` currently would 404 on
     GitHub Pages without this).
   - A deploy method decision (e.g. `gh-pages` npm package vs. a GitHub
     Actions workflow) — not yet discussed with Mandla.
   - Vite base path config check (may not be needed since this repo is a
     `username.github.io` root-level repo, not a project-page subpath, but
     worth confirming at deploy time).
4. **Skills list not finalized** — needs Mandla's review/edit to only
   include what he can genuinely discuss in an interview.
5. **package.json project name** may still read `porfolio` (typo) instead
   of `portfolio` — cosmetic, low priority.
6. **Contact email is still a placeholder** — needs Mandla's real email.

---

## Next step (where to resume)

The entire structural build AND visual design are now complete and
confirmed working end-to-end by Mandla. The natural next step is moving to
**real content** — replacing placeholder text throughout `projects.js`
(and About/Education/Contact) with accurate, non-fabricated details about
iSkool and Dig Dug, likely gathered by asking Mandla directly rather than
inventing anything, per the brief's strict accuracy requirement.

After content, remaining work is: screenshots integration, Skills list
review, and GitHub Pages deployment (including the SPA-routing fix).

## Working style notes for whoever continues this

- Mandla is following along command-by-command in a terminal, learning as
  he goes — explain *why*, not just *what*, and keep instructions to one
  clear step at a time.
- Mandla has asked for **word-only explanations** (no large code blocks)
  in at least one message earlier in the build — check the live
  conversation for whether that preference still stands before dumping
  large code blocks. Recent messages suggest he's comfortable receiving
  full code blocks again for actual file content, but always confirm.
- Go step by step; confirm each step worked (via Mandla's own description
  or a screenshot) before moving to the next.
- Do not skip ahead or batch multiple structural or styling changes into
  one message without checking in.
- When giving multi-line JSX with tags like `<a>` that have several
  attributes, double-check the opening tag isn't accidentally dropped —
  this has caused real breakage twice already in this build.