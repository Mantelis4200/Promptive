# Case Studies Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace placeholder case study data with 5 real portfolio projects, add a filter bar + company logos, and add "See it in action" strips on 3 solution pages.

**Architecture:** Single-page `/case-studies` enhanced with real data and filter state. A shared `CaseStudyStrip` component is added to `ai-chatbotai`, `svetainiu-kurimas`, and `el-parduotuviu-kurimas` solution pages. No new routes.

**Tech Stack:** Next.js 14, React 18, Framer Motion, Tailwind CSS, next-intl (LT + EN)

---

## Context

Design doc: `docs/plans/2026-02-23-case-studies-redesign.md`

### Real case study data (from docx files — already extracted)

**Rideon** (AI Chatbot, rideon.lt)
- Goal: 24/7 support that answers first in seconds, handles tickets, collects leads
- Solution: AI chat assistant — finds info on site, shares product details/prices, collects name/phone/email, hands off to human with context
- Results: 454 unique tickets in first 6 weeks, instant replies, team reviews fewer tickets
- No logo image available — use text avatar "R"

**Lentvario Mediena — Chatbot** (AI Chatbot, lentvariomediena.lt)
- Goal: Bot that checks availability, calculates quantities/prices, captures leads
- Solution: AI chatbot connected to inventory CSV — live availability checks, quote+calculator flows, lead capture+handoff (email/CRM/phone) with conversation summary
- Results: Reduces back-and-forth, only high-intent inquiries reach the team
- Logo: `public/case-studies/lentvario-logo.jpg`
- Screenshot: `public/case-studies/lentvario-chatbot.png`

**Lentvario Mediena — Website** (Website, lentvariomediena.lt)
- Goal: Conversion-first website, customers instantly understand products and take action
- Solution: Page structure built around buyer journey, SEO-optimised copy, AI-generated visuals, product pages with use cases/options/trust/CTAs
- Results: Product-led site, each page answers a specific buyer question and drives action
- Logo: `public/case-studies/lentvario-logo.jpg`
- Screenshots: `public/case-studies/lentvario-warehouse.png`, `public/case-studies/lentvario-calculator.png`

**Cheats-pro** (Website, cheats-pro.com)
- Goal: High-impact website that communicates product advantages and drives fast plan selection
- Solution: Direct, performance-focused structure for gaming audiences. Clear feature presentation, pricing comparison flow, strong CTA placement, full SEO
- Results: Faster decision-making flow, clear product positioning, optimised for conversions and search visibility
- Logo: `public/case-studies/cheats-pro-logo.webp`

**Magnimoo** (E-commerce, magnimoo.com)
- Goal: Conversion-focused eCommerce website, encourages fast purchase decisions
- Solution: Clean, benefit-driven structure focused on parent psychology. Optimised product storytelling, trust elements, purchase flow. Simple navigation, strong CTA hierarchy. SEO optimisation
- Results: Clear value communication, improved user flow toward purchase, positioned as both brand and sales tool
- Logo: `public/case-studies/magnimoo-logo.webp`

### Service page → case study mapping
- `ai-chatbotai` → Rideon, Lentvario Mediena chatbot
- `svetainiu-kurimas` → Cheats-pro, Lentvario Mediena website, Magnimoo
- `el-parduotuviu-kurimas` → Magnimoo

---

## Task 1: Copy assets to public/

**Files:**
- Create dir: `public/case-studies/`

**Step 1: Create the directory and copy all images**

```bash
mkdir -p "C:/Users/lukas/Promptive/public/case-studies"

cp "C:/Users/lukas/Desktop/case studies/Cheats-pro Case study/cheatsprologo.webp" \
   "C:/Users/lukas/Promptive/public/case-studies/cheats-pro-logo.webp"

cp "C:/Users/lukas/Desktop/case studies/Magnimoo Case study/magnimoo-logo-kids-magnetic-arch-decal-walls.webp" \
   "C:/Users/lukas/Promptive/public/case-studies/magnimoo-logo.webp"

cp "C:/Users/lukas/Desktop/case studies/Lentvario Mediena Case study/chatbot/Lentvario Mediena logo.jpg" \
   "C:/Users/lukas/Promptive/public/case-studies/lentvario-logo.jpg"

cp "C:/Users/lukas/Desktop/case studies/Lentvario Mediena Case study/chatbot/chatbot.png" \
   "C:/Users/lukas/Promptive/public/case-studies/lentvario-chatbot.png"

cp "C:/Users/lukas/Desktop/case studies/Lentvario Mediena Case study/web/Interaktyvi skaičiuoklė.png" \
   "C:/Users/lukas/Promptive/public/case-studies/lentvario-calculator.png"

cp "C:/Users/lukas/Desktop/case studies/Lentvario Mediena Case study/web/Sandėlio sistemos kurimas.png" \
   "C:/Users/lukas/Promptive/public/case-studies/lentvario-warehouse.png"
```

**Step 2: Verify files exist**
```bash
ls "C:/Users/lukas/Promptive/public/case-studies/"
```
Expected: 6 files listed

**Step 3: Commit**
```bash
cd "C:/Users/lukas/Promptive"
git add public/case-studies/
git commit -m "assets: add case study logos and screenshots"
```

---

## Task 2: Replace case-studies page with real data + filter + logos

**Files:**
- Modify: `src/app/[locale]/case-studies/page.tsx` (full rewrite of the `t` data object and card rendering)

**Step 1: Update the `t` translation object**

Replace the entire `t` object (lines 53–252). The new data structure adds `category`, `logo`, `logoText`, `website`, and optional `screenshots` fields to each case.

```typescript
type CaseStudy = {
  title: string;
  company: string;
  industry: string;
  website: string;
  category: 'website' | 'chatbot' | 'ecommerce';
  serviceLink: string;
  logo: string | null;   // null = use logoText fallback
  logoText: string;
  timeSaved: string;
  highlight: string;
  highlightLabel: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  tools: string[];
  screenshots?: string[];
};
```

EN cases array:
```typescript
[
  {
    title: 'E-commerce AI Chatbot: 454 Tickets in 6 Weeks',
    company: 'Rideon',
    industry: 'E-commerce / Electric vehicles',
    website: 'https://www.rideon.lt',
    category: 'chatbot',
    serviceLink: '/ai-chatbotai',
    logo: null,
    logoText: 'R',
    timeSaved: '~20 hrs/week',
    highlight: '454',
    highlightLabel: 'tickets in 6 weeks',
    challenge: 'Support team overwhelmed with repetitive product questions. Slow replies were causing lost sales — customers couldn\'t get information fast enough.',
    solution: 'Deployed a 24/7 AI chat assistant that answers first in seconds, finds info on the website, shares product details and prices, collects name/phone/email, and hands off complex cases to a human with full context.',
    results: [
      { metric: '454', label: 'Unique tickets (6 weeks)' },
      { metric: '<5s', label: 'First response time' },
      { metric: '24/7', label: 'Coverage without staff' },
    ],
    tools: ['Custom AI chatbot', 'Lead capture', 'Human handoff system'],
  },
  {
    title: 'Smart AI Chatbot with Live Inventory & Quote Calculator',
    company: 'Lentvario Mediena',
    industry: 'Manufacturing / Wood products',
    website: 'https://www.lentvariomediena.lt',
    category: 'chatbot',
    serviceLink: '/ai-chatbotai',
    logo: '/case-studies/lentvario-logo.jpg',
    logoText: 'LM',
    timeSaved: 'Manual queries eliminated',
    highlight: '100%',
    highlightLabel: 'automated availability checks',
    challenge: 'Customers needed live availability checks and accurate quantity/price quotes — information that required manual back-and-forth with the team for every inquiry.',
    solution: 'Built inventory management from scratch, then connected the chatbot to it via CSV. The bot performs live availability checks, calculates quantities and prices from user inputs, captures leads with conversation summaries, and routes only high-intent inquiries to the team.',
    results: [
      { metric: 'Live', label: 'Inventory checks via CSV' },
      { metric: '0', label: 'Manual quote calculations' },
      { metric: 'Auto', label: 'Lead capture + handoff' },
    ],
    tools: ['Custom AI chatbot', 'Inventory system (built from scratch)', 'CSV integration', 'Lead capture + CRM handoff'],
    screenshots: ['/case-studies/lentvario-chatbot.png'],
  },
  {
    title: 'Conversion-First Website with AI Visuals',
    company: 'Lentvario Mediena',
    industry: 'Manufacturing / Wood products',
    website: 'https://www.lentvariomediena.lt',
    category: 'website',
    serviceLink: '/svetainiu-kurimas',
    logo: '/case-studies/lentvario-logo.jpg',
    logoText: 'LM',
    timeSaved: 'Fewer "just browsing" enquiries',
    highlight: '100%',
    highlightLabel: 'product-led pages',
    challenge: 'Product information was scattered. Visitors bounced or called with basic questions instead of requesting a quote — wasting the team\'s time.',
    solution: 'Built the website end-to-end: page structure around buyer journey, SEO-optimised copy for every product/service page, and AI-generated visuals (fast to produce, consistent style). Each page answers a specific buyer question and drives action.',
    results: [
      { metric: 'SEO', label: 'Optimised copy on every page' },
      { metric: 'AI', label: 'Visuals — fast & consistent' },
      { metric: '↑', label: 'Ready-to-buy inquiries' },
    ],
    tools: ['Next.js website', 'SEO copywriting', 'AI-generated visuals', 'CTA architecture'],
    screenshots: ['/case-studies/lentvario-warehouse.png', '/case-studies/lentvario-calculator.png'],
  },
  {
    title: 'High-Conversion Website for a Gaming Product',
    company: 'Cheats-pro',
    industry: 'Gaming / Digital products',
    website: 'https://cheats-pro.com',
    category: 'website',
    serviceLink: '/svetainiu-kurimas',
    logo: '/case-studies/cheats-pro-logo.webp',
    logoText: 'CP',
    timeSaved: 'Faster plan selection',
    highlight: '↑',
    highlightLabel: 'plan conversion rate',
    challenge: 'Needed a website that communicates product advantages clearly and drives fast plan selection for a gaming audience with short attention spans.',
    solution: 'Built a direct, performance-focused structure with clear feature presentation, a pricing comparison flow, strong CTA placement, simplified user journey, and full SEO optimisation.',
    results: [
      { metric: 'Fast', label: 'Decision-making flow' },
      { metric: 'Clear', label: 'Product positioning' },
      { metric: 'SEO', label: 'Optimised for search' },
    ],
    tools: ['Custom website', 'Pricing comparison flow', 'SEO optimisation', 'CTA architecture'],
  },
  {
    title: 'eCommerce Website Focused on Parent Psychology',
    company: 'Magnimoo',
    industry: 'eCommerce / Educational products',
    website: 'https://magnimoo.com',
    category: 'ecommerce',
    serviceLink: '/el-parduotuviu-kurimas',
    logo: '/case-studies/magnimoo-logo.webp',
    logoText: 'M',
    timeSaved: 'Improved purchase flow',
    highlight: '↑',
    highlightLabel: 'purchase conversions',
    challenge: 'An educational product for parents needed a website that communicates value quickly and encourages fast purchase decisions — without overwhelming visitors.',
    solution: 'Built a clean, benefit-driven structure focused on parent psychology. Optimised product storytelling, trust elements, and purchase flow. Designed simple navigation and strong CTA hierarchy. Implemented SEO to improve organic visibility.',
    results: [
      { metric: 'Clear', label: 'Value communication' },
      { metric: '↑', label: 'User flow to purchase' },
      { metric: 'Dual', label: 'Brand + sales tool' },
    ],
    tools: ['eCommerce website', 'Benefit-driven copywriting', 'Trust elements', 'SEO optimisation'],
  },
]
```

LT cases array — same structure, translated text (see EN above for field mapping). Translation guidance:
- category/serviceLink/logo/logoText/website/screenshots: identical to EN (no translation needed)
- company name: keep as-is (proper nouns)
- industry LT: use existing page translations as reference
- For tools and metric labels: translate to Lithuanian

**Step 2: Add filter state and pill bar**

Above the cases section, add:

```tsx
const [activeFilter, setActiveFilter] = useState<'all' | 'website' | 'chatbot' | 'ecommerce'>('all');

const filteredCases = activeFilter === 'all'
  ? c.cases
  : c.cases.filter(cs => cs.category === activeFilter);

const filterLabels = {
  en: { all: 'All', website: 'Website', chatbot: 'AI Chatbot', ecommerce: 'E-commerce' },
  lt: { all: 'Visi', website: 'Svetainė', chatbot: 'AI Chatbotas', ecommerce: 'El. parduotuvė' },
};
```

Filter bar JSX (place between hero and cases section):
```tsx
<div className="bg-slate-900 py-6 border-b border-white/10 sticky top-0 z-20">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 justify-center">
    {(['all', 'website', 'chatbot', 'ecommerce'] as const).map(f => (
      <button
        key={f}
        onClick={() => setActiveFilter(f)}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
          activeFilter === f
            ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg shadow-purple-500/25'
            : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
        }`}
      >
        {filterLabels[locale === 'lt' ? 'lt' : 'en'][f]}
      </button>
    ))}
  </div>
</div>
```

**Step 3: Update card rendering with logo, website link, service tag, and screenshots**

In the card header section, replace the existing header div with:

```tsx
{/* Card header: logo + company name + website link */}
<div className="flex flex-wrap items-center justify-between gap-3 px-7 py-4 border-b border-white/10 bg-white/3">
  <div className="flex items-center gap-3">
    {/* Logo or text avatar */}
    {cs.logo ? (
      <img
        src={cs.logo}
        alt={cs.company}
        className="h-8 w-auto object-contain brightness-0 invert opacity-80"
      />
    ) : (
      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        {cs.logoText}
      </div>
    )}
    <span className="text-white font-semibold text-sm">{cs.company}</span>
    <a
      href={cs.website}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-purple-400 transition-colors"
      title={cs.website}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  </div>
  <div className="flex items-center gap-2">
    {/* Service tag linking to solution page */}
    <a
      href={`/${locale}${cs.serviceLink}`}
      className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-xs font-medium border border-purple-500/20 hover:bg-purple-500/30 transition-colors"
    >
      {cs.category === 'chatbot' && (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )}
      {cs.category === 'website' && (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
      )}
      {cs.category === 'ecommerce' && (
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )}
      {filterLabels[locale === 'lt' ? 'lt' : 'en'][cs.category]}
    </a>
    <span className="inline-flex items-center gap-2 text-gray-400 text-xs">
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {cs.timeSaved}
    </span>
  </div>
</div>
```

After the tools section, add screenshots if present:
```tsx
{cs.screenshots && cs.screenshots.length > 0 && (
  <div className="mt-6 pt-6 border-t border-white/10">
    <div className={`grid gap-3 ${cs.screenshots.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {cs.screenshots.map((src, i) => (
        <div key={i} className="rounded-xl overflow-hidden border border-white/10">
          <img
            src={src}
            alt={`${cs.company} screenshot ${i + 1}`}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
)}
```

**Step 4: Update hero stats to real numbers**

```typescript
// EN
stats: [
  { value: 5, suffix: '', label: 'Portfolio projects' },
  { value: 454, suffix: '+', label: 'Tickets handled (first 6 wks)' },
  { value: 3, suffix: '', label: 'Industries served' },
]
// LT
stats: [
  { value: 5, suffix: '', label: 'Portfelio projektai' },
  { value: 454, suffix: '+', label: 'Užklausų per pirmas 6 sav.' },
  { value: 3, suffix: '', label: 'Aptarnautos industrijios' },
]
```

**Step 5: Wrap cases in AnimatePresence for filter transitions**

```tsx
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Replace c.cases.map with filteredCases.map
// Wrap the map in:
<AnimatePresence mode="popLayout">
  {filteredCases.map((cs, index) => (
    <motion.div
      key={cs.company + cs.category}  // stable key
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
    >
      {/* existing article card */}
    </motion.div>
  ))}
</AnimatePresence>
```

Note: remove testimonial interleaving (the `testimonialAfter` logic) since we have 5 real cases and the testimonials were placeholders. Keep the testimonials section but place it as a single block after all cards.

**Step 6: Commit**
```bash
git add src/app/[locale]/case-studies/page.tsx
git commit -m "feat: case studies page with real portfolio data, filter, logos, screenshots"
```

---

## Task 3: Create CaseStudyStrip component

**Files:**
- Create: `src/components/CaseStudyStrip.tsx`

This component shows a compact "See it in action" section with 1-3 case study preview cards. It accepts an array of case references and links to the full `/case-studies` page.

**Step 1: Create the component**

```tsx
// src/components/CaseStudyStrip.tsx
'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';

type CaseRef = {
  company: string;
  tagline: string; // one-line result
  metric: string;
  metricLabel: string;
  logo: string | null;
  logoText: string;
  category: 'website' | 'chatbot' | 'ecommerce';
};

type Props = {
  cases: { en: CaseRef[]; lt: CaseRef[] };
};

export default function CaseStudyStrip({ cases }: Props) {
  const locale = useLocale();
  const isLT = locale === 'lt';
  const items = isLT ? cases.lt : cases.en;
  const heading = isLT ? 'Tai veikia praktikoje' : 'See it in action';
  const linkLabel = isLT ? 'Visi atvejai →' : 'View all case studies →';

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">{heading}</h2>
          <Link
            href={`/${locale}/case-studies`}
            className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
          >
            {linkLabel}
          </Link>
        </div>
        <div className={`grid gap-4 ${items.length === 1 ? 'md:grid-cols-1 max-w-md' : items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <Link href={`/${locale}/case-studies`} className="block group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition-all h-full">
                  {/* Logo + company */}
                  <div className="flex items-center gap-3 mb-4">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="h-7 w-auto object-contain brightness-0 invert opacity-70"
                      />
                    ) : (
                      <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-violet-500 rounded-md flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {item.logoText}
                      </div>
                    )}
                    <span className="text-white text-sm font-medium">{item.company}</span>
                  </div>
                  {/* Metric */}
                  <div className="mb-3">
                    <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">{item.metric}</span>
                    <span className="text-gray-500 text-xs ml-2">{item.metricLabel}</span>
                  </div>
                  {/* Tagline */}
                  <p className="text-gray-400 text-sm leading-relaxed">{item.tagline}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**
```bash
git add src/components/CaseStudyStrip.tsx
git commit -m "feat: add CaseStudyStrip component for solution pages"
```

---

## Task 4: Add CaseStudyStrip to ai-chatbotai page

**Files:**
- Modify: `src/app/[locale]/ai-chatbotai/page.tsx`

**Step 1: Import the component** (add at top of file)

```tsx
import CaseStudyStrip from '@/components/CaseStudyStrip';
```

**Step 2: Define the case data** (add before the `return` statement in `AIChatbotaiPage`)

```tsx
const chatbotCases = {
  en: [
    {
      company: 'Rideon',
      tagline: '24/7 chatbot that answered 454 unique support tickets in its first 6 weeks.',
      metric: '454',
      metricLabel: 'tickets / 6 weeks',
      logo: null,
      logoText: 'R',
      category: 'chatbot' as const,
    },
    {
      company: 'Lentvario Mediena',
      tagline: 'AI chatbot connected to live inventory — checks stock, calculates quotes, captures leads automatically.',
      metric: '0',
      metricLabel: 'manual quote calculations',
      logo: '/case-studies/lentvario-logo.jpg',
      logoText: 'LM',
      category: 'chatbot' as const,
    },
  ],
  lt: [
    {
      company: 'Rideon',
      tagline: '24/7 chatbotas, kuris per pirmas 6 savaites apdorojo 454 unikalias palaikymo užklausas.',
      metric: '454',
      metricLabel: 'užklausos / 6 sav.',
      logo: null,
      logoText: 'R',
      category: 'chatbot' as const,
    },
    {
      company: 'Lentvario Mediena',
      tagline: 'AI chatbotas sujungtas su sandėlio sistema — tikrina atsargas, skaičiuoja kainas, automatiškai renka kontaktus.',
      metric: '0',
      metricLabel: 'rankinių skaičiavimų',
      logo: '/case-studies/lentvario-logo.jpg',
      logoText: 'LM',
      category: 'chatbot' as const,
    },
  ],
};
```

**Step 3: Place the component** — add `<CaseStudyStrip cases={chatbotCases} />` just before `<RelatedSolutions currentPage="ai-chatbotai" />`

**Step 4: Commit**
```bash
git add src/app/[locale]/ai-chatbotai/page.tsx
git commit -m "feat: add case study strip to ai-chatbotai page"
```

---

## Task 5: Add CaseStudyStrip to svetainiu-kurimas page

**Files:**
- Modify: `src/app/[locale]/svetainiu-kurimas/page.tsx`

**Step 1: Import the component**

```tsx
import CaseStudyStrip from '@/components/CaseStudyStrip';
```

**Step 2: Define case data** (add before `return`)

```tsx
const websiteCases = {
  en: [
    {
      company: 'Cheats-pro',
      tagline: 'Gaming product website with clear pricing flow and full SEO — built to convert visitors to paying customers.',
      metric: '↑',
      metricLabel: 'plan conversion rate',
      logo: '/case-studies/cheats-pro-logo.webp',
      logoText: 'CP',
      category: 'website' as const,
    },
    {
      company: 'Lentvario Mediena',
      tagline: 'Product-led website with SEO copy and AI visuals — each page drives ready-to-buy inquiries.',
      metric: 'SEO',
      metricLabel: 'every product page',
      logo: '/case-studies/lentvario-logo.jpg',
      logoText: 'LM',
      category: 'website' as const,
    },
    {
      company: 'Magnimoo',
      tagline: 'eCommerce site built on parent psychology — clear value communication and optimised purchase flow.',
      metric: '↑',
      metricLabel: 'purchase conversions',
      logo: '/case-studies/magnimoo-logo.webp',
      logoText: 'M',
      category: 'ecommerce' as const,
    },
  ],
  lt: [
    {
      company: 'Cheats-pro',
      tagline: 'Žaidimų produkto svetainė su aiškiu kainų srautu ir pilnu SEO — sukurta konvertuoti lankytojus į klientus.',
      metric: '↑',
      metricLabel: 'plano konversijų rodiklis',
      logo: '/case-studies/cheats-pro-logo.webp',
      logoText: 'CP',
      category: 'website' as const,
    },
    {
      company: 'Lentvario Mediena',
      tagline: 'Produktais paremta svetainė su SEO tekstais ir AI vizualais — kiekvienas puslapis generuoja užklausas.',
      metric: 'SEO',
      metricLabel: 'kiekviename puslapyje',
      logo: '/case-studies/lentvario-logo.jpg',
      logoText: 'LM',
      category: 'website' as const,
    },
    {
      company: 'Magnimoo',
      tagline: 'El. parduotuvė, paremta tėvų psichologija — aiški vertės komunikacija ir optimizuotas pirkimo srautas.',
      metric: '↑',
      metricLabel: 'pirkimo konversijų',
      logo: '/case-studies/magnimoo-logo.webp',
      logoText: 'M',
      category: 'ecommerce' as const,
    },
  ],
};
```

**Step 3: Place the component** — add `<CaseStudyStrip cases={websiteCases} />` just before `<RelatedSolutions currentPage="svetainiu-kurimas" />`

**Step 4: Commit**
```bash
git add src/app/[locale]/svetainiu-kurimas/page.tsx
git commit -m "feat: add case study strip to svetainiu-kurimas page"
```

---

## Task 6: Add CaseStudyStrip to el-parduotuviu-kurimas page

**Files:**
- Modify: `src/app/[locale]/el-parduotuviu-kurimas/page.tsx` (line 746 has RelatedSolutions)

**Step 1: Import the component**

```tsx
import CaseStudyStrip from '@/components/CaseStudyStrip';
```

**Step 2: Define case data** (add before `return`)

```tsx
const ecommerceCases = {
  en: [
    {
      company: 'Magnimoo',
      tagline: 'eCommerce website built on parent psychology — clear value communication and optimised purchase flow that positions the brand as both a trust signal and a sales tool.',
      metric: '↑',
      metricLabel: 'purchase conversions',
      logo: '/case-studies/magnimoo-logo.webp',
      logoText: 'M',
      category: 'ecommerce' as const,
    },
  ],
  lt: [
    {
      company: 'Magnimoo',
      tagline: 'El. parduotuvė, sukurta tėvų psichologijos pagrindu — aiški vertės komunikacija ir optimizuotas pirkimo srautas.',
      metric: '↑',
      metricLabel: 'pirkimo konversijų',
      logo: '/case-studies/magnimoo-logo.webp',
      logoText: 'M',
      category: 'ecommerce' as const,
    },
  ],
};
```

**Step 3: Place the component** — add `<CaseStudyStrip cases={ecommerceCases} />` just before `<RelatedSolutions currentPage="el-parduotuviu-kurimas" />` (line 746)

**Step 4: Commit**
```bash
git add src/app/[locale]/el-parduotuviu-kurimas/page.tsx
git commit -m "feat: add case study strip to el-parduotuviu-kurimas page"
```

---

## Task 7: Verify everything locally

**Step 1: Run dev server**
```bash
cd "C:/Users/lukas/Promptive"
npm run dev
```

**Step 2: Check these URLs**
- `http://localhost:3000/lt/case-studies` — all 5 cards, filter works, logos show, screenshots show
- `http://localhost:3000/lt/ai-chatbotai` — CaseStudyStrip shows Rideon + Lentvario
- `http://localhost:3000/lt/svetainiu-kurimas` — CaseStudyStrip shows 3 cards
- `http://localhost:3000/lt/el-parduotuviu-kurimas` — CaseStudyStrip shows Magnimoo

**Step 3: Check EN locale too**
- `http://localhost:3000/case-studies`
- `http://localhost:3000/ai-chatbotai`

**Step 4: Final commit if any small fixes needed**
```bash
git add -A
git commit -m "fix: case studies polish"
```
