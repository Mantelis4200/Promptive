# SEO Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish technical SEO foundation and LT-first keyword optimization across 5 money pages before site goes live on `promptive.agency`.

**Architecture:** New server-only components for JSON-LD schemas (no 'use client'), Next.js App Router native `robots.ts`, updated `sitemap.ts`, keyword-optimized `generateMetadata()` in page layouts, static `public/` assets for OG image and `llms.txt`.

**Tech Stack:** Next.js 14 App Router, TypeScript, `MetadataRoute` types, Schema.org JSON-LD, next-intl

**Spec:** `docs/superpowers/specs/2026-03-23-seo-improvements-design.md`

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `src/app/robots.ts` | Create | robots.txt via Next.js App Router |
| `public/llms.txt` | Create | AI crawler discoverability |
| `src/components/WebsiteSchema.tsx` | Create | Server-only WebSite JSON-LD (NOT StructuredData.tsx — see note below) |
| `src/components/BlogStructuredData.tsx` | Create | Server-only Article JSON-LD |
| `src/app/sitemap.ts` | Modify | `lastModified` to `new Date()` |
| `src/app/[locale]/layout.tsx` | Modify | OG image SVG to PNG, homepage titles/descriptions |
| `src/app/[locale]/ai-auditas/layout.tsx` | Modify | Keyword-optimized metadata |
| `src/app/[locale]/ai-agentai-automatizacijos/layout.tsx` | Modify | Keyword-optimized metadata |
| `src/app/[locale]/verslo-procesu-automatizavimas/layout.tsx` | Modify | Keyword-optimized metadata |
| `src/app/[locale]/ai-chatbotai/layout.tsx` | Modify | Title length fix, keep DUK keyword |
| `src/app/[locale]/tinklarastis/ai-chatbots-.../layout.tsx` | Modify | Add Article schema |
| `src/app/[locale]/tinklarastis/top-7-workflows-.../layout.tsx` | Modify | Add Article schema |
| `src/app/[locale]/tinklarastis/speed-to-lead-.../layout.tsx` | Modify | Add Article schema |

> **Note on `StructuredData.tsx`:** The spec's Section 3 table lists this file as modified — that entry is superseded by spec section 1.4's explicit instruction to use a separate server component instead. `StructuredData.tsx` is NOT modified in this plan.

---

## Task 1: Create `robots.ts`

**Files:**
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create the file**

```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/lt/api/'],
      },
    ],
    sitemap: 'https://promptive.agency/sitemap.xml',
  }
}
```

- [ ] **Step 2: Verify output**

Visit `http://localhost:3001/robots.txt`. Expected:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /lt/api/

Sitemap: https://promptive.agency/sitemap.xml
```

- [ ] **Step 3: Commit**

```bash
git add src/app/robots.ts
git commit -m "seo: add robots.ts with crawl rules and sitemap pointer"
```

---

## Task 2: Fix `sitemap.ts` `lastModified`

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Replace hardcoded dates**

In `src/app/sitemap.ts`, find both occurrences of:
```ts
lastModified: new Date('2026-02-18'),
```
Replace both with:
```ts
lastModified: new Date(),
```

- [ ] **Step 2: Verify**

Visit `http://localhost:3001/sitemap.xml`. Every `<lastmod>` should show today's date (e.g. `2026-03-23`).

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "seo: set sitemap lastModified to current date on each build"
```

---

## Task 3: Create `public/llms.txt`

**Files:**
- Create: `public/llms.txt`

- [ ] **Step 1: Create the file with this exact content**

```
# Promptive Agency

Promptive is a Lithuanian AI automation agency that builds AI chatbots,
AI agents, and business process automation solutions for businesses in
Lithuania and across Europe.

## Services
- AI audits (nemokamas AI auditas verslui)
- Business process automation (verslo procesu automatizavimas)
- AI chatbots for customer service and sales
- AI agents and workflow automation
- Landing pages and e-commerce websites

## Contact
- Website: https://promptive.agency
- Phone: +370 612 08887
- Email: hello@promptive.agency
- Location: Vilnius, Lithuania
```

- [ ] **Step 2: Verify**

Visit `http://localhost:3001/llms.txt`. Should return plain text.

- [ ] **Step 3: Commit**

```bash
git add public/llms.txt
git commit -m "seo: add llms.txt for AI crawler discoverability"
```

---

## Task 4: Create `WebsiteSchema.tsx` (server component)

**Files:**
- Create: `src/components/WebsiteSchema.tsx`
- Modify: `src/app/[locale]/layout.tsx`

This is a server component — NO 'use client' directive. The JSON-LD renders in SSR HTML, visible to crawlers even without JS.

Note: JSON-LD uses static data (no user input), so the innerHTML assignment is safe from XSS here — the object is hardcoded in source, not derived from external input.

- [ ] **Step 1: Create `WebsiteSchema.tsx`**

The component serializes a hardcoded static object into a script tag. No user input involved.

```tsx
const baseUrl = 'https://promptive.agency';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: 'Promptive Agency',
  inLanguage: ['lt', 'en'],
};

const schemaString = JSON.stringify(schema);

export default function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      // Safe: schemaString is a hardcoded static object, not user input
      dangerouslySetInnerHTML={{ __html: schemaString }}
    />
  );
}
```

- [ ] **Step 2: Import and render in `[locale]/layout.tsx`**

At the top of `src/app/[locale]/layout.tsx`, add:
```ts
import WebsiteSchema from '@/components/WebsiteSchema';
```

Inside `<head>` (after the existing `<style>` block, before the favicons), add:
```tsx
<WebsiteSchema />
```

- [ ] **Step 3: Verify**

View source at `http://localhost:3001`. Search for `WebSite`. Should appear as a script tag in `<head>`.

- [ ] **Step 4: Commit**

```bash
git add src/components/WebsiteSchema.tsx src/app/[locale]/layout.tsx
git commit -m "seo: add WebSite JSON-LD schema via server component"
```

---

## Task 5: Create `BlogStructuredData.tsx` and apply to 3 blog posts

**Files:**
- Create: `src/components/BlogStructuredData.tsx`
- Modify: `src/app/[locale]/tinklarastis/ai-chatbots-enhancing-customer-engagement-and-support/layout.tsx`
- Modify: `src/app/[locale]/tinklarastis/top-7-workflows-every-business-should-automate-2025/layout.tsx`
- Modify: `src/app/[locale]/tinklarastis/speed-to-lead-why-every-minute-counts-in-sales/layout.tsx`

- [ ] **Step 1: Create `BlogStructuredData.tsx`**

Server component — no 'use client'. Props are typed strings passed from layout constants, not user input.

```tsx
const baseUrl = 'https://promptive.agency';

interface Props {
  headline: string;
  datePublished: string;
  dateModified: string;
  url: string;
  image?: string;
}

export default function BlogStructuredData({
  headline,
  datePublished,
  dateModified,
  url,
  image = `${baseUrl}/og-image.png`,
}: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    datePublished,
    dateModified,
    url,
    image,
    author: {
      '@type': 'Organization',
      name: 'Promptive Agency',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Promptive Agency',
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/images/logo.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <script
      type="application/ld+json"
      // Safe: all values are layout constants, not user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

- [ ] **Step 2: Apply to blog post 1**

File: `src/app/[locale]/tinklarastis/ai-chatbots-enhancing-customer-engagement-and-support/layout.tsx`

**Important:** Preserve the existing module-level constants at the top of the file (lines 4–6: `baseUrl`, `slug`, `image`). Also preserve all existing `import` statements (lines 1–2). Only replace the `export default function BlogArticleLayout` block.

Add this import after the existing imports (do not remove existing ones):
```ts
import BlogStructuredData from '@/components/BlogStructuredData';
```

Replace ONLY the `export default function BlogArticleLayout` block with:
```tsx
export default function BlogArticleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const isLt = locale === 'lt';
  const url = isLt ? `${baseUrl}/lt/tinklarastis/${slug}` : `${baseUrl}/tinklarastis/${slug}`;
  // Derive headline from the page title — strip "| Promptive" suffix
  const headline = isLt
    ? 'DI Pokalbių Robotai: Klientų Įsitraukimas ir Aptarnavimas'
    : 'AI Chatbots: Enhancing Customer Engagement and Support';

  return (
    <>
      <BlogStructuredData
        headline={headline}
        datePublished="2025-11-01"
        dateModified="2025-11-01"
        url={url}
        image={image}
      />
      {children}
    </>
  );
}
```

(`baseUrl`, `slug`, and `image` are already defined as module-level constants at the top of this file — do not redeclare them.)

- [ ] **Step 3: Apply to blog post 2**

File: `src/app/[locale]/tinklarastis/top-7-workflows-every-business-should-automate-2025/layout.tsx`

Read the file first to find its existing `slug`, `image`, and title variables, then apply the same pattern with:
- `datePublished="2025-12-01"`, `dateModified="2025-12-01"`
- headline from the existing `generateMetadata` title strings

- [ ] **Step 4: Apply to blog post 3**

File: `src/app/[locale]/tinklarastis/speed-to-lead-why-every-minute-counts-in-sales/layout.tsx`

Read the file first, then apply with:
- `datePublished="2026-01-15"`, `dateModified="2026-01-15"`

- [ ] **Step 5: Verify**

View source at `http://localhost:3001/tinklarastis/ai-chatbots-enhancing-customer-engagement-and-support`. Search for `"@type":"Article"`. Should appear before `</head>`.

- [ ] **Step 6: Commit**

```bash
git add src/components/BlogStructuredData.tsx \
  "src/app/[locale]/tinklarastis/ai-chatbots-enhancing-customer-engagement-and-support/layout.tsx" \
  "src/app/[locale]/tinklarastis/top-7-workflows-every-business-should-automate-2025/layout.tsx" \
  "src/app/[locale]/tinklarastis/speed-to-lead-why-every-minute-counts-in-sales/layout.tsx"
git commit -m "seo: add Article schema to all 3 blog post layouts"
```

---

## Task 6: Update OG image references SVG to PNG

**Files:**
- Modify: `src/app/[locale]/layout.tsx` (and any others with logo.svg in OG/Twitter)

- [ ] **Step 1: Find all SVG OG references**

```bash
grep -r "logo.svg" src/app --include="*.tsx" --include="*.ts" -l
```

- [ ] **Step 2: Update `[locale]/layout.tsx`**

Find the two `openGraph.images` arrays (one in LT block, one in EN block). Change:
```ts
url: `${baseUrl}/images/logo.svg`,
```
to:
```ts
url: `${baseUrl}/og-image.png`,
```

Also update both `twitter.images` from `[\`${baseUrl}/images/logo.svg\`]` to `[\`${baseUrl}/og-image.png\`]`.

- [ ] **Step 3: Fix any other layouts found in Step 1**

Repeat SVG to PNG replacement for each file.

- [ ] **Step 4: Add placeholder OG image if missing**

Check if `public/og-image.png` exists. If not, copy any PNG and resize/rename it as a placeholder. The real branded 1200x630 image is a post-launch manual step.

- [ ] **Step 5: Commit**

Stage all modified layout files found in Step 1 (not just the locale layout):
```bash
git add src/app/
git commit -m "seo: replace SVG OG image with PNG across all layouts"
```

---

## Task 7: Homepage metadata — keyword optimization

**Files:**
- Modify: `src/app/[locale]/layout.tsx`

The homepage uses the locale layout's `generateMetadata` (since `page.tsx` is `'use client'` and has no metadata export).

- [ ] **Step 1: Update LT title and description**

In `generateMetadata`, find the LT `return` block. Replace:
```ts
title: 'Promptive - AI Automatizavimo Agentura | Chatbotai ir Verslo Procesu Automatizavimas Lietuvoje',
description: 'Pirmaujanti AI automatizavimo agentura Lietuvoje...',
```
With:
```ts
title: 'Promptive – AI Automatizavimas ir Agentai Verslui Lietuvoje',
description: 'AI automatizavimas verslui Lietuvoje. Kuriame AI agentus, chatbotus ir automatizuojame verslo procesus. Nemokama konsultacija →',
```

Update LT `openGraph.title` to: `'Promptive – AI Automatizavimas ir Agentai Verslui Lietuvoje'`

- [ ] **Step 2: Update EN title and description**

Replace:
```ts
title: 'Promptive - AI Automation Agency | Business Chatbots & Process Automation',
description: 'Leading AI automation agency specializing in...',
```
With:
```ts
title: 'Promptive – AI Automation Agency for Business',
description: 'AI automation agency for business. We build AI agents, chatbots and automate business processes. Free consultation →',
```

- [ ] **Step 3: Verify**

```bash
curl -s http://localhost:3001/lt | grep -o '<title>[^<]*</title>'
```
Expected: `<title>Promptive – AI Automatizavimas ir Agentai Verslui Lietuvoje</title>`

- [ ] **Step 4: Commit**

```bash
git add src/app/[locale]/layout.tsx
git commit -m "seo: optimize homepage title and description for LT keyword cluster"
```

---

## Task 8: `/ai-auditas` metadata

**Files:**
- Modify: `src/app/[locale]/ai-auditas/layout.tsx`

- [ ] **Step 1: Update LT metadata**

Replace existing LT title and description:
```ts
title: 'AI Auditas Verslui – Automatizavimo Galimybės | Promptive',
description: 'Nemokamas AI auditas verslui. Išanalizuosime jūsų procesus ir pasakysime, kur AI gali taupyti laiką ir pinigus. Nemokama konsultacija →',
```

Update LT `openGraph.title`: `'AI Auditas Verslui – Automatizavimo Galimybės'`

- [ ] **Step 2: Update EN metadata**

```ts
title: 'AI Audit for Business – Find Automation Wins | Promptive',
description: 'Free AI audit for your business. We analyze your processes and show where AI can save time and money. Book a free call →',
```

- [ ] **Step 3: Verify**

```bash
curl -s http://localhost:3001/lt/ai-auditas | grep -o '<title>[^<]*</title>'
```
Expected: `<title>AI Auditas Verslui – Automatizavimo Galimybės | Promptive</title>`

- [ ] **Step 4: Commit**

```bash
git add "src/app/[locale]/ai-auditas/layout.tsx"
git commit -m "seo: optimize /ai-auditas title and description for primary keyword"
```

---

## Task 9: `/ai-agentai-automatizacijos` metadata

**Files:**
- Modify: `src/app/[locale]/ai-agentai-automatizacijos/layout.tsx`

- [ ] **Step 1: Update LT metadata**

```ts
title: 'AI Agentai ir Automatizavimas Verslui Lietuvoje | Promptive',
description: 'AI agentai ir automatizavimo sprendimai verslui Lietuvoje. Dirbame 24/7 – automatizuojame pardavimus, aptarnavimą ir vidinius procesus. Nemokama konsultacija →',
```

Update LT `openGraph.title`: `'AI Agentai ir Automatizavimas Verslui Lietuvoje'`

- [ ] **Step 2: Update EN metadata**

```ts
title: 'AI Agents & Automation for Business in Lithuania | Promptive',
description: 'AI agents and automation solutions for business. We automate sales, customer service and internal operations 24/7. Free consultation →',
```

- [ ] **Step 3: Commit**

```bash
git add "src/app/[locale]/ai-agentai-automatizacijos/layout.tsx"
git commit -m "seo: optimize /ai-agentai-automatizacijos title and description"
```

---

## Task 10: `/verslo-procesu-automatizavimas` metadata

**Files:**
- Modify: `src/app/[locale]/verslo-procesu-automatizavimas/layout.tsx`

- [ ] **Step 1: Update LT metadata**

```ts
title: 'Verslo Procesų Automatizavimas su AI | Promptive',
description: 'Verslo procesų automatizavimas su AI Lietuvoje. Automatizuojame el. paštą, ataskaitas, CRM ir pasikartojančius darbus. Taupykite 20h/sav. Nemokama konsultacija →',
```

Update LT `openGraph.title`: `'Verslo Procesų Automatizavimas su AI'`

- [ ] **Step 2: Update EN metadata**

```ts
title: 'Business Process Automation with AI | Promptive',
description: 'Business process automation with AI. We automate email, reports, CRM and repetitive tasks. Save 20h/week. Free consultation →',
```

- [ ] **Step 3: Commit**

```bash
git add "src/app/[locale]/verslo-procesu-automatizavimas/layout.tsx"
git commit -m "seo: optimize /verslo-procesu-automatizavimas title and description"
```

---

## Task 11: `/ai-chatbotai` title — trim length, keep DUK

**Files:**
- Modify: `src/app/[locale]/ai-chatbotai/layout.tsx`

Current LT title is 69 chars. Goal: trim to 56 chars while keeping the DUK keyword.

- [ ] **Step 1: Update LT title**

```ts
title: 'AI Chatbotai Verslui: DUK, Pardavimai, 24/7 | Promptive',
```

Update LT `openGraph.title` to match.

- [ ] **Step 2: Update EN title**

```ts
title: 'AI Chatbots for Business: Sales & Support 24/7 | Promptive',
```

- [ ] **Step 3: Commit**

```bash
git add "src/app/[locale]/ai-chatbotai/layout.tsx"
git commit -m "seo: trim /ai-chatbotai titles to under 60 chars, preserve DUK keyword"
```

---

## Final Verification Checklist

- [ ] `http://localhost:3001/robots.txt` — correct rules and sitemap URL
- [ ] `http://localhost:3001/sitemap.xml` — all `<lastmod>` show today's date
- [ ] `http://localhost:3001/llms.txt` — plain text, readable
- [ ] View source on homepage: `<title>` contains `AI Automatizavimas`, `WebSite` JSON-LD in `<head>`
- [ ] View source on a blog post: `Article` JSON-LD present before `</head>`
- [ ] All 5 money page LT `<title>` tags under 60 chars
- [ ] All 5 money page `<meta name="description">` under 155 chars
- [ ] No `logo.svg` in `og:image` or `twitter:image` meta tags
- [ ] Run Google Rich Results Test via ngrok tunnel — Article and Organization schemas pass

---

## Post-Launch Manual Steps (not in this plan)

1. Submit `https://promptive.agency/sitemap.xml` to Google Search Console
2. Verify property using the tag already in layout (`Wno-2089ENNg7IAOh-1GbxVZDW5YyGlidYW0lGqCU90`)
3. Replace `public/og-image.png` placeholder with real branded 1200x630 PNG
4. Run Google Rich Results Test against live domain after launch
