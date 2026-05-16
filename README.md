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

## Updating remediation status

Each finding has a `status:` field in its frontmatter — `todo`, `in-progress`, or `done`.

Two ways to update:

**From the GitHub web UI** (easiest, works from a phone):
1. Open the file at `https://github.com/jeremystrom/home-repairs/tree/main/src/content/findings`
2. Click the finding's `.md` file, then the pencil icon to edit
3. Change `status: todo` → `status: done` (or `in-progress`)
4. Scroll down, "Commit changes" → site rebuilds in ~30s

**From the command line:**
```bash
# Edit src/content/findings/<finding>.md, change the status line
git add -A && git commit -m "S1 done" && git push
```

For partial work, set `status: in-progress` and add a `## Progress notes` section at the top of the body explaining what's done vs pending.

## Structure

- `src/content/findings/*.md` — one markdown file per finding (frontmatter + body)
- `src/content.config.ts` — Zod schema for findings collection
- `src/assets/findings/*.jpg` — inspector photos (Astro image pipeline optimizes them)
- `src/components/` — UI (`FindingCard`, `SeverityBadge`, `CategoryBadge`, `PhotoGallery`)
- `src/layouts/Layout.astro` — shared chrome
- `src/pages/` — routes: `index`, `self`, `handyman`, `dismissed`, `findings/[id]`
