# Portfolio Project — Progress & Handoff Notes

**Owner:** Mandla Mahlangu (GitHub: mandlacodes404)
**Live site:** https://mandlacodes404.github.io — **LIVE as of this update.**
**Goal:** A professional developer portfolio to support software
development job applications, showcasing iSkool (primary project) and
Dig Dug, plus lighter "Other Work" entries (Enthropy, iSkool marketing
site).

This file exists so that work can resume cleanly in a new conversation if
needed. Read this first before making any changes.

---

## IMPORTANT — current intended architecture

**The site is intentionally a single page.** Earlier versions of this
project had separate `/projects/iskool` and `/projects/dig-dug` case-study
pages with their own routes. That system still exists in the code
(`ProjectPage.jsx`, the `/projects/:slug` route) but is **deliberately not
linked from anywhere on the live site right now**, per Mandla's explicit
decision. Do not re-link it or treat its absence as incomplete work unless
Mandla asks for it. Mandla's reasoning: recruiters get more value from
clicking straight through to a live, working demo than reading a written
case study first.

Instead, clicking a project on the homepage does one of:
- Opens a **demo-credentials modal** first, then the live external site
  (currently only iSkool — see "Demo login modal" section below), or
- Opens the **live external site directly** in a new tab (Other Work
  items), or
- **Is not clickable at all** (Dig Dug — no live link, no case-study link,
  purely informational on the homepage).

Because of this, the GitHub Pages SPA-routing `404.html` workaround
(previously flagged as required before deploy) was correctly judged
low-priority and **skipped for the initial deploy** — nothing on the live
site currently links to `/projects/:slug`, so the only way to hit that
route is typing it manually. Revisit this fix only if/when those pages
get relinked.

---

## Full original brief

The original project brief (goals, tone, content rules, "don't fabricate
anything" constraint, desired structure, visual direction, etc.) was
provided in full at the start of this project. If it is not already
available in this conversation, ask Mandla to re-share it.

Key non-negotiable rules from that brief, still in force:
- **Never fabricate** technologies, features, metrics, job experience, or
  contributions. Missing info = placeholder text or ask Mandla, never
  invent.
- Dig Dug's source repo is a **private university repo** — never create a
  fake public link or imply the code is public.
- Keep the site small and focused, not a "huge corporate website."
- Visual direction: modern, minimal, professional, technical, understated.
  Take inspiration from reference sites but never literally clone one —
  this became directly relevant when Mandla asked for a Brittany-Chiang-
  style sticky sidebar layout; the structure was recreated but the color
  system, type choices, and component patterns stayed Mandla's own.
- Build incrementally, one change at a time, with Mandla reviewing each
  step.

---

## Environment & deployment (COMPLETE — site is LIVE)

- Node v20.19.0, npm 10.8.2, Git 2.50.1, Windows/PowerShell.
- GitHub repo: `mandlacodes404/mandlacodes404.github.io` (public, root
  user-page repo — served at the domain root, no `base` path config
  needed in `vite.config.js`, unlike project-page repos).
- Vite + React + JavaScript + ESLint, Tailwind CSS v4 via `@tailwindcss/vite`
  plugin, `react-router-dom` installed.
- Local project folder is named `portfolio` (early "porfolio" typo was
  fixed early on). `package.json`'s internal name may still read
  `porfolio` — cosmetic only, never fixed, still low priority.
- Tabler icon webfont loaded via CDN in `index.html` `<head>`.
- **Deployment: manual, via the `gh-pages` npm package** (Mandla explicitly
  chose this over a GitHub Actions auto-deploy workflow, to keep things
  simple while still actively iterating). Setup:
  - `gh-pages` installed as a dev dependency.
  - `package.json` scripts include:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
  - GitHub repo Settings → Pages → Source set to **"Deploy from a
    branch"**, branch **`gh-pages`**, folder `/ (root)`.
- **Deploy workflow going forward (important, two separate steps):**
  1. `git add . && git commit -m "..." && git push` — saves source code
     to `main`. Does **not** update the live site.
  2. `npm run deploy` — builds fresh and pushes the built output to the
     `gh-pages` branch, which is what's actually live. Must be run after
     every change that should appear on the live site.
- **Two terminals used throughout:** one permanently running `npm run dev`
  (never interrupt), one free for git/npm commands. Tell: the dev-server
  terminal shows a green "VITE ready" message and a `localhost` link.

---

## Current site structure (single page, sticky sidebar layout)

This replaced an earlier top-navbar + full-width-sections layout entirely,
per Mandla's request to mirror the structural pattern of
brittanychiang.com (sticky left sidebar, scrolling right column,
scroll-spy nav) while keeping Mandla's own dark color system, type, and
component style — not a visual clone.

### Layout (`src/App.jsx`)
- `BrowserRouter` wraps everything.
- `/` route renders a two-column flex layout: `Sidebar` in a `md:w-1/2`
  wrapper on the left, `Home` in a `md:w-1/2` wrapper on the right —
  genuinely equal-width columns on desktop.
- `/projects/:slug` route still exists (renders `ProjectPage`), outside
  the two-column wrapper, full-width — see "current intended
  architecture" note above re: not currently linked.
- Dark/light mode state (`isDark`) lives here, persisted via
  `localStorage` (key: `"theme"`), defaults to dark for first-time
  visitors. Applied by toggling a `dark` class on `document.documentElement`.

### Sidebar (`src/components/layout/Sidebar.jsx`) — desktop only
`hidden md:flex ... md:sticky md:top-0 md:h-screen` — fully hidden on
mobile, sticky/pinned on desktop while the right column scrolls past.
Top to bottom, contains:
1. **Dark/light toggle switch** (top-left, above the name) — small pill
   switch, slides a dot left/right, calls `onToggle` passed down from
   `App.jsx`.
2. **Name** (`text-4xl font-bold`) and **tagline** ("EE Student — Software
   Developer", `text-lg font-medium`).
3. Green mono eyebrow line ("EE STUDENT — WITS UNIVERSITY / SOFTWARE
   DEVELOPER"), a headline ("I build software that solves real
   problems."), and a short paragraph ("Currently building iSkool...").
4. **Scroll-spy nav**: ABOUT / SELECTED PROJECTS / OTHER WORK. Uses
   `IntersectionObserver` (`rootMargin: "-40% 0px -50% 0px"`) to detect
   which section is in view and highlight the matching line-marker (short
   horizontal line that grows/brightens when active or hovered).
- GitHub icon that was briefly here was removed per Mandla's request — the
  only GitHub link on the site now lives in the Contact section at the
  bottom of the right column.

### Right column (`src/pages/Home.jsx`), in order:
1. **About** (`src/components/home/About.jsx`) — real first-person
   content (see "Content" section below), single column, no heading
   ("ABOUT" label lives in the sidebar nav, not repeated here).
2. **ProjectsSection** (`src/components/home/ProjectsSection.jsx`) — maps
   over `src/data/projects.js`, renders `ProjectCard` per project in a
   `divide-y` stacked-row list (not a card grid — this was intentionally
   changed from an earlier grid layout to match the reference site's row
   pattern).
3. **OtherWork** (`src/components/home/OtherWork.jsx`) — same row/
   thumbnail pattern as ProjectCard, but simpler: a local hardcoded array
   (not in `projects.js`, since these aren't full case-study projects),
   currently Enthropy and iSkool Marketing Website, both with real
   thumbnails and real external links (see "Content" below).
4. **Skills** (`src/components/home/Skills.jsx`) — pill list, still the
   original conservative array, **not yet reviewed/finalized by Mandla**.
5. **Education** (`src/components/home/Education.jsx`) — still
   placeholder text, not yet updated with final wording.
6. **Contact** (`src/components/home/Contact.jsx`) — **real content**:
   `mailto:` link to mandlasimphiwe99@gmail.com, plus the GitHub link
   (https://github.com/mandlacodes404).

### Note: `Hero.jsx` and `Navbar.jsx` are DEPRECATED / no longer used
Both files may still physically exist from earlier in the build but are
not imported or rendered anywhere anymore. Hero's content was folded into
the sidebar's headline/paragraph; Navbar was fully replaced by Sidebar.
Safe to delete these files, just hasn't been done yet — flagging so a
future assistant doesn't get confused seeing them still present.

---

## Content: what's real vs. placeholder right now

### Real / finalized
- **About section** — full real first-person introduction written by
  Mandla (his engineering background, how he got into programming,
  building iSkool, "still learning" framing). Do not reword or rewrite
  this without being asked — Mandla was explicit about preserving his own
  voice and simple, non-corporate language here.
- **Contact** — real email (mandlasimphiwe99@gmail.com) as a `mailto:`
  link, real GitHub link.
- **iSkool** in `projects.js`:
  - Real thumbnail: `/images/iskool/thumbnail.png`
  - Real live link: `https://sandbox.iskool.xyz`
  - Real demo credentials (see "Demo login modal" below)
  - `overview`, `features`, `architecture`, `challenges`, `contribution`,
    `screenshots` fields are **still placeholder text** — only used by
    the currently-unlinked `/projects/iskool` case-study page.
- **Dig Dug** in `projects.js`:
  - Real thumbnail: `/images/dig-dug/thumbnail.png`
  - `links.live` correctly stays `null` (no live version exists)
  - `isPrivateRepo: true` correctly set
  - Same case-study text fields (`overview`, `features`, etc.) still
    placeholder, same reasoning as iSkool.
- **Other Work** — real thumbnails and real links for both entries:
  - Enthropy → `https://iskool.xyz/ENTHROPY_website.html`
  - iSkool Marketing Website → `https://iskool.xyz`
  - Both entries' `description` text is still placeholder — needs real
    copy from Mandla.

### Still placeholder / not yet done
1. `projects.js` case-study fields (overview/features/architecture/
   challenges/contribution/screenshots) for both projects — low priority
   given these pages aren't currently linked, but should eventually be
   filled if the case-study pages get relinked later.
2. Other Work item descriptions (Enthropy, iSkool Marketing Website).
3. Skills list — needs Mandla's review to trim to what he can genuinely
   discuss in an interview.
4. Education section wording — still generic placeholder.
5. `package.json` internal name still possibly reads `porfolio`.

---

## Demo login modal (iSkool only)

New feature: clicking the iSkool row does **not** immediately open the
live link. Instead:

- `src/components/home/DemoLoginModal.jsx` — new component. Dark overlay,
  centered card, shows `project.demoCredentials.email` and `.password`
  each with a "Copy" button (`navigator.clipboard.writeText`, flips to
  "Copied" for 1.5s). "Cancel" closes without navigating. "Continue to
  demo" opens `project.links.live` in a new tab via `window.open(...)`
  then closes the modal. Click-outside-the-card also closes it.
- `projects.js` — iSkool has a new field:
  ```js
  demoCredentials: {
    email: "sibusiso.mokoena@iskool.demo",
    password: "Password123",
  },
  ```
- `ProjectCard.jsx` logic is now three-way, checked in this order:
  1. `if (project.demoCredentials)` → renders as a `<button>`, opens
     `DemoLoginModal` on click.
  2. `else if (project.links.live)` → renders as a real `<a target="_blank">`
     straight to the live link (this path exists for future projects that
     have a live link but no login requirement).
  3. `else` → renders as a plain non-clickable `<div>` (Dig Dug's current
     state).
- This same "no fabrication" principle applies here: only iSkool has
  `demoCredentials` because only iSkool actually has a real demo login.
  Do not add fake credentials to any other project.

---

## Design system (unchanged from earlier, still in force)

Defined in `src/index.css` via Tailwind v4's `@theme` (default = light)
and `.dark { ... }` (dark override, toggled via the sidebar switch):

```css
@theme {
  --color-bg: #f6f1e7;
  --color-surface: #fbf8f2;
  --color-border: #e2ddd0;
  --color-border-soft: #ecd9c3;
  --color-border-strong: #d8cfba;
  --color-text-primary: #211f1c;
  --color-text-secondary: #6b6960;
  --color-text-muted: #8a8880;
  --color-accent: #c9843c;
}

.dark {
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

Note the light mode here is the nudged-warm off-white/clay palette (not a
literal Anthropic-site color match — deliberately adjusted per an earlier
instruction to avoid that specific resemblance), and dark mode is the
original circuit-inspired palette Mandla chose from the very first mockup
round. Both fully wired and working via the sidebar toggle switch.

Recurring patterns (unchanged): mono accent-colored eyebrow labels,
thin borders as dividers, tech-stack/skills "pill" tags, subtle hover
color transitions, thumbnail boxes (`w-40 h-24`, bumped up twice from an
original smaller size at Mandla's request) with a placeholder photo icon
fallback when no real image is set yet.

(VS Code's CSS linter shows a harmless "Unknown at rule @theme" warning —
not a real error, confirmed safe to ignore, noted repeatedly throughout
this build.)

---

## Known recurring issue during this build (still worth knowing about)

Multiple times during this build, multi-line JSX tags — especially
`<a ...>` with several attributes spread across lines — got their opening
`<a` accidentally dropped or garbled during copy/paste, breaking the file
(VS Code Problems panel lighting up with cascading syntax errors). This
happened enough times that the reliable fix became: **ask Mandla to paste
back the file's actual current contents before making further edits**,
rather than assuming prior instructions were applied correctly, then
provide one complete corrected file to fully replace it. This pattern
worked well and should be repeated if similar breakage occurs again.

---

## Next steps (where to resume)

In rough priority order:
1. Write real `description` text for both Other Work entries.
2. Review and finalize the Skills list with Mandla (trim to genuinely
   interview-ready technologies).
3. Write real Education section content.
4. Decide whether the `/projects/:slug` case-study pages are ever getting
   relinked — if yes, fill in their placeholder content fields and add the
   GitHub Pages SPA-routing `404.html` fix at that time; if no, consider
   removing the dead code (`ProjectPage.jsx`, the route, `Hero.jsx`,
   `Navbar.jsx`) for cleanliness.
5. Remember: after any future change, run `npm run deploy` (not just
   `git push`) to actually update the live site.

## Working style notes for whoever continues this

- Mandla is following along command-by-command in a terminal, learning as
  he goes — explain *why*, not just *what*, one clear step at a time.
- Always confirm each step worked before moving to the next.
- Before editing a file that's been touched multiple times or where recent
  edits might not have landed cleanly, **ask Mandla to paste the file's
  actual current contents** rather than assuming — this has repeatedly
  saved time versus guessing at drift.
- Mandla makes deliberate, sometimes significant structural calls (e.g.
  the sidebar restructure, skipping internal case-study pages in favor of
  direct live-demo links) — these are real product decisions, not
  mistakes to correct back toward the "original" plan. Follow his current
  direction, and use `PROGRESS.md`'s "current intended architecture"
  section as the source of truth over older assumptions.
- Don't reintroduce the SPA-routing fix, Navbar, or Hero unless Mandla
  specifically asks — they were deliberately set aside, not forgotten.