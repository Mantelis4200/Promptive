# SEO Improvements — Design Spec
**Date:** 2026-03-23
**Project:** Promptive Agency Site
**Scope:** Technical SEO fixes + LT-first keyword optimization (Option B)
**Primary market:** Lithuanian businesses
**Primary keyword clusters:** AI auditas, AI automatizavimas, verslo procesų automatizavimas
**Secondary clusters:** AI chatbotai verslui, AI agentai

---

## Goals

1. Establish a solid technical SEO foundation before the site goes live on `promptive.agency`
2. Signal to Google the correct keyword intent from day one for LT locale
3. Enable rich results (FAQ, Article, Sitelinks Searchbox) via structured data
4. Ensure AI crawlers (ChatGPT, Perplexity) can discover and describe Promptive correctly

---

## Section 1 — Technical Fixes

### 1.1 `robots.ts`
Create `src/app/robots.ts` using Next.js App Router `MetadataRoute.Robots` type.

Rules:
- Allow all crawlers (`*`) to crawl everything
- Disallow `/api/` and `/lt/api/` (no crawlable value, wastes crawl budget)
- Point `sitemap` to `https://promptive.agency/sitemap.xml`

### 1.2 `sitemap.ts` — dynamic `lastModified`
Change the hardcoded `lastModified: new Date('2026-02-18')` to `new Date()` on all entries. This is pragmatic for a site under active development — every deploy signals freshness. **Intentional debt:** before the site matures, replace with per-page accurate dates to avoid Google discounting the `lastModified` signal as noise.

### 1.3 OG image — SVG → PNG
The current OG image (`/images/logo.svg`) is ignored by social crawlers (Facebook, Twitter, Slack) and Google. Replace with a static `public/og-image.png` (1200×630 px).

The image should contain:
- Promptive wordmark / logo
- Tagline: "AI Automatizavimas Verslui" (LT) / "AI Automation for Business" (EN)
- Dark background matching the site's aesthetic

All layout files currently referencing `logo.svg` as OG image must be updated to `/og-image.png`.

### 1.4 `WebSite` schema (without SearchAction)
Add a `WebSite` schema to the homepage. The `potentialAction` / `SearchAction` block is **excluded** because it requires a functioning `/search` route that does not exist — including it without the route would trigger a Google Rich Results Test failure.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://promptive.agency/#website",
  "url": "https://promptive.agency",
  "name": "Promptive Agency",
  "inLanguage": ["lt", "en"]
}
```

**Implementation note:** Do NOT add this to `StructuredData.tsx` (which is `'use client'`). Create a separate `WebsiteSchema.tsx` server component (no `'use client'` directive) and render it in the homepage layout or directly in the `[locale]/layout.tsx` `<head>` via a server-only component. This ensures the JSON-LD is present in the crawled HTML regardless of JS execution.

### 1.5 `Article` schema for blog posts
**Implementation note:** Create a `BlogStructuredData.tsx` server component (no `'use client'`) for Article schemas — do NOT use `StructuredData.tsx` which is `'use client'`. Each blog layout imports and renders this server component directly.

Each of the 3 blog post layouts must include `Article` structured data with:
- `headline` — post title
- `datePublished` — publish date (hardcoded per post)
- `dateModified` — same as published (update when post is edited)
- `author` — `{ "@type": "Organization", "name": "Promptive Agency" }`
- `publisher` — Organization reference
- `image` — OG image URL

Add via a `BlogStructuredData` server component rendered in each blog layout, or directly via `<script type="application/ld+json">` in the layout.

Blog posts:
- `ai-chatbots-enhancing-customer-engagement-and-support` — published 2025-11-01
- `top-7-workflows-every-business-should-automate-2025` — published 2025-12-01
- `speed-to-lead-why-every-minute-counts-in-sales` — published 2026-01-15

### 1.6 `llms.txt`
Create `public/llms.txt` — a plain-text file readable by AI crawlers (ChatGPT, Perplexity, Claude):

```
# Promptive Agency

Promptive is a Lithuanian AI automation agency that builds AI chatbots,
AI agents, and business process automation solutions for businesses in
Lithuania and across Europe.

## Services
- AI audits (nemokamas AI auditas verslui)
- Business process automation (verslo procesų automatizavimas)
- AI chatbots for customer service and sales
- AI agents and workflow automation
- Landing pages and e-commerce websites

## Contact
- Website: https://promptive.agency
- Phone: +370 612 08887
- Email: hello@promptive.agency
- Location: Vilnius, Lithuania
```

---

## Section 2 — Keyword Optimization

### Target keywords per page (LT locale primary)

#### Homepage `/` (LT: `/lt`)
- **Primary:** `AI automatizavimas verslui Lietuva`
- **Secondary:** `AI agentai`, `dirbtinis intelektas verslui`
- **Title (LT):** `Promptive – AI Automatizavimas ir Agentai Verslui Lietuvoje`
- **Title (EN):** `Promptive – AI Automation Agency for Business`
- **Description (LT):** `AI automatizavimas verslui Lietuvoje. Kuriame AI agentus, chatbotus ir automatizuojame verslo procesus. Nemokama konsultacija →`
- **Description (EN):** `AI automation agency for business. We build AI agents, chatbots and automate business processes. Free consultation →`

#### `/ai-auditas`
- **Primary:** `AI auditas verslui`, `nemokamas AI auditas`
- **Secondary:** `AI galimybių analizė`, `automatizavimo auditas`
- **Title (LT):** `AI Auditas Verslui – Automatizavimo Galimybės | Promptive` (58 chars)
- **Title (EN):** `AI Audit for Business – Find Automation Wins | Promptive` (56 chars)
- **Description (LT):** `Nemokamas AI auditas verslui. Išanalizuosime jūsų procesus ir pasakysime, kur AI gali taupyti laiką ir pinigus. Nemokama konsultacija →`
- **Description (EN):** `Free AI audit for your business. We analyze your processes and show where AI can save time and money. Book a free call →`

#### `/ai-agentai-automatizacijos`
- **Primary:** `AI agentai verslui`, `AI automatizavimas Lietuva`
- **Secondary:** `AI agentūra Vilnius`, `automatizavimo sprendimai`
- **Title (LT):** `AI Agentai ir Automatizavimas Verslui Lietuvoje | Promptive`
- **Title (EN):** `AI Agents & Automation for Business in Lithuania | Promptive`
- **Description (LT):** `AI agentai ir automatizavimo sprendimai verslui Lietuvoje. Dirbame 24/7 – automatizuojame pardavimus, aptarnavimą ir vidinius procesus. Nemokama konsultacija →`
- **Description (EN):** `AI agents and automation solutions for business. We automate sales, customer service and internal operations 24/7. Free consultation →`

#### `/verslo-procesu-automatizavimas`
- **Primary:** `verslo procesų automatizavimas`, `darbo procesų automatizavimas`
- **Secondary:** `workflow automatizavimas`, `RPA Lietuva`
- **Title (LT):** `Verslo Procesų Automatizavimas su AI | Promptive` (48 chars)
- **Title (EN):** `Business Process Automation with AI | Promptive` (46 chars)
- **Description (LT):** `Verslo procesų automatizavimas su AI Lietuvoje. Automatizuojame el. paštą, ataskaitas, CRM ir pasikartojančius darbus. Taupykite 20h/sav. Nemokama konsultacija →`
- **Description (EN):** `Business process automation with AI. We automate email, reports, CRM and repetitive tasks. Save 20h/week. Free consultation →`

#### `/ai-chatbotai`
- **Primary:** `AI chatbotai verslui`, `chatbot kaina Lietuva`
- **Secondary:** `klientų aptarnavimo chatbot`, `pardavimų chatbot`, `DUK chatbot`
- **Title (LT):** `AI Chatbotai Verslui: DUK, Pardavimai, 24/7 | Promptive` (56 chars) — keep existing `DUK` keyword, just trim length
- **Title (EN):** `AI Chatbots for Business: Sales & Support 24/7 | Promptive` (58 chars)
- **Description (LT):** `AI chatbotai verslui Lietuvoje. Automatizuokite klientų aptarnavimą ir pardavimus 24/7. Integracija su CRM ir el. paštu. Nemokama konsultacija →`
- **Description (EN):** `AI chatbots for business. Automate customer service and sales 24/7. CRM and email integration. Free consultation →`

---

## Section 3 — Files to Create/Modify

### New files
| File | Purpose |
|------|---------|
| `src/app/robots.ts` | Next.js native robots route |
| `public/llms.txt` | AI crawler discoverability |
| `public/og-image.png` | 1200×630 branded OG image (static asset, created manually) |
| `src/components/WebsiteSchema.tsx` | Server-only WebSite JSON-LD (no `'use client'`) |
| `src/components/BlogStructuredData.tsx` | Server-only Article JSON-LD for blog posts |

### Modified files
| File | Change |
|------|--------|
| `src/app/sitemap.ts` | `lastModified` → `new Date()` |
| `src/components/StructuredData.tsx` | Add `WebSite` + `SearchAction` schema type |
| `src/app/[locale]/layout.tsx` | Swap OG image SVG→PNG; update LT homepage title/description |
| `src/app/[locale]/ai-auditas/layout.tsx` | Keyword-optimized title + description |
| `src/app/[locale]/ai-agentai-automatizacijos/layout.tsx` | Keyword-optimized title + description |
| `src/app/[locale]/verslo-procesu-automatizavimas/layout.tsx` | Keyword-optimized title + description |
| `src/app/[locale]/ai-chatbotai/layout.tsx` | Minor refinement to title/description |
| `src/app/[locale]/tinklarastis/ai-chatbots-.../layout.tsx` | Article schema |
| `src/app/[locale]/tinklarastis/top-7-workflows-.../layout.tsx` | Article schema |
| `src/app/[locale]/tinklarastis/speed-to-lead-.../layout.tsx` | Article schema |

### Out of scope
- Refactoring `'use client'` homepage page.tsx
- New blog content creation
- Google Search Console setup (manual post-launch step)
- Core Web Vitals / page speed audit
- `/en` blog post layouts (secondary priority)

---

## Success Criteria
- `robots.txt` accessible at `promptive.agency/robots.txt` and correctly formatted
- `sitemap.xml` shows today's date on all entries
- OG image renders correctly when URL is pasted into Slack/Facebook/Twitter
- Google Rich Results Test passes for homepage (Organization, WebSite) and blog posts (Article)
- All 5 money pages have LT titles containing primary keyword in first 60 chars
- All meta descriptions are under 155 chars and contain a CTA
