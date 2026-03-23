# Case Studies Page Redesign — Design Doc
**Date:** 2026-02-23

## Goal
Replace placeholder case study data with real portfolio projects. Add a filter bar and company logos. Link from relevant solution pages back to matching case studies.

## Approach
Enhance the existing single-page `/case-studies` design (dark glass cards, animated metrics, tabs) with real data. No sub-pages.

## Real Case Studies (5 cards)

| # | Company | Service | URL | Key stat |
|---|---|---|---|---|
| 1 | Rideon | AI Chatbot | rideon.lt | 454 tickets / 6 weeks |
| 2 | Lentvario Mediena — Chatbot | AI Chatbot | lentvariomediena.lt | Live inventory + quote calculator |
| 3 | Lentvario Mediena — Website | Website | lentvariomediena.lt | Product-led site, SEO, AI visuals |
| 4 | Cheats-pro | Website | cheats-pro.com | Fast decision flow, SEO |
| 5 | Magnimoo | E-commerce | magnimoo.com | Conversion-focused, parent UX |

## Assets Available
- `cheatsprologo.webp` — Cheats-pro logo
- `magnimoo-logo-kids-magnetic-arch-decal-walls.webp` — Magnimoo logo
- `Lentvario Mediena logo.jpg` — Lentvario logo
- Lentvario screenshots: `chatbot.png`, `Interaktyvi skaičiuoklė.png`, `Sandėlio sistemos kurimas.png`, `Untitled.png`

## Page Sections

### Hero
- Same layout as current
- Updated stats: 5 projects · 454+ tickets handled · 3 industries

### Filter Bar
- Pills: All / Website / AI Chatbot / E-commerce
- Active pill: purple gradient
- Filters cards with smooth fade (useState + filter logic)
- Sticky within the cases section

### Case Cards (enhanced)
Additions to existing card design:
- Company logo (top-left, ~40px height, white/filter for dark bg)
- Live website link icon (top-right)
- Clickable service tag (links to solution page)
- Screenshots below metrics for Lentvario cards

### CTA Section
No changes.

## Solution Pages — "See it in action" strips

Add a strip component above `<RelatedSolutions>` on:
- `ai-chatbotai/page.tsx` → Rideon + Lentvario chatbot
- `svetainiu-kurimas/page.tsx` → Cheats-pro + Lentvario web + Magnimoo
- `el-parduotuviu-kurimas/page.tsx` → Magnimoo

## Files to Create / Modify

| File | Action |
|---|---|
| `src/app/[locale]/case-studies/page.tsx` | Replace placeholder data, add filter, add logos/screenshots |
| `public/case-studies/` | Copy asset images here |
| `src/app/[locale]/ai-chatbotai/page.tsx` | Add "See it in action" strip |
| `src/app/[locale]/svetainiu-kurimas/page.tsx` | Add "See it in action" strip |
| `src/app/[locale]/el-parduotuviu-kurimas/page.tsx` | Add "See it in action" strip |
