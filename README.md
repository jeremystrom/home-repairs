# Inspection findings — static site

Astro + Tailwind site rendering the inspection findings as cards with detail pages.

## Develop

```bash
npm install
npm run dev
# open http://localhost:4321/home-repairs/
```

## Deploy

Push to `main`. GitHub Actions builds and deploys to Pages automatically.

## Structure

- `src/content/findings/*.md` — one markdown file per finding (frontmatter + body)
- `src/content.config.ts` — Zod schema for findings collection
- `src/assets/findings/*.jpg` — inspector photos (Astro image pipeline optimizes them)
- `src/components/` — UI (`FindingCard`, `SeverityBadge`, `CategoryBadge`, `PhotoGallery`)
- `src/layouts/Layout.astro` — shared chrome
- `src/pages/` — routes: `index`, `self`, `handyman`, `dismissed`, `findings/[id]`
