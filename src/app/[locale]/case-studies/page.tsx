'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useRef, useEffect, useState, type ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedSolutions from '@/components/RelatedSolutions';
import StructuredData from '@/components/StructuredData';

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();
    let rafId: number;
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function MetricReveal({ metric, label, delay }: { metric: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent leading-none mb-1">
        {metric}
      </div>
      <div className="text-gray-400 text-xs leading-snug">{label}</div>
    </motion.div>
  );
}

type CaseCategory = 'website' | 'chatbot' | 'ecommerce';

type CaseStudy = {
  title: string;
  company: string;
  industry: string;
  website: string;
  category: CaseCategory;
  serviceLink: string;
  logo: string | null;
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

const filterLabels = {
  en: { all: 'All', website: 'Website', chatbot: 'AI Chatbot', ecommerce: 'E-commerce' },
  lt: { all: 'Visi', website: 'Svetainė', chatbot: 'AI Chatbotas', ecommerce: 'El. parduotuvė' },
};

const categoryIcons: Record<CaseCategory, ReactNode> = {
  chatbot: (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  website: (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    </svg>
  ),
  ecommerce: (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
};

const enCases: CaseStudy[] = [
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
    challenge: "Support team overwhelmed with repetitive product questions. Slow replies were causing lost sales — customers couldn't get information fast enough outside business hours.",
    solution: 'Deployed a 24/7 AI chat assistant that answers in seconds, finds info on the website, shares product details and prices, collects name/phone/email, and hands off complex cases to a human with full context.',
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
    highlight: '0',
    highlightLabel: 'manual quote calculations',
    challenge: 'Customers needed live availability checks and accurate quantity/price quotes — information that required manual back-and-forth with the team for every single inquiry.',
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
    highlight: 'SEO',
    highlightLabel: 'every product page',
    challenge: 'Product information was scattered. Visitors bounced or called with basic questions instead of requesting a quote — wasting the team\'s time on low-intent traffic.',
    solution: 'Built the website end-to-end: page structure around the buyer journey, SEO-optimised copy for every product/service page, and AI-generated visuals. Each page answers a specific buyer question and drives action.',
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
    solution: 'Built a clean, benefit-driven structure focused on parent psychology. Optimised product storytelling, trust elements, and purchase flow. Simple navigation, strong CTA hierarchy, and SEO to improve organic visibility.',
    results: [
      { metric: 'Clear', label: 'Value communication' },
      { metric: '↑', label: 'User flow to purchase' },
      { metric: 'Dual', label: 'Brand + sales tool' },
    ],
    tools: ['eCommerce website', 'Benefit-driven copywriting', 'Trust elements', 'SEO optimisation'],
  },
];

const ltCases: CaseStudy[] = [
  {
    title: 'El. prekybos AI chatbotas: 454 užklausos per 6 savaites',
    company: 'Rideon',
    industry: 'El. prekyba / Elektrinės transporto priemonės',
    website: 'https://www.rideon.lt',
    category: 'chatbot',
    serviceLink: '/ai-chatbotai',
    logo: null,
    logoText: 'R',
    timeSaved: '~20 val./sav.',
    highlight: '454',
    highlightLabel: 'užklausos per 6 sav.',
    challenge: 'Klientų aptarnavimo komanda perkrauta pasikartojančiais produktų klausimais. Lėti atsakymai prarandavo pardavimus — klientai negaudavo informacijos ne darbo valandomis.',
    solution: 'Įdiegėme 24/7 AI pokalbių asistentą, kuris atsako per sekundes, randa informaciją svetainėje, dalinasi produktų detalėmis ir kainomis, renka vardą/telefoną/el. paštą ir sudėtingus atvejus su pilnu kontekstu perduoda žmogui.',
    results: [
      { metric: '454', label: 'Unikalios užklausos (6 sav.)' },
      { metric: '<5s', label: 'Pirmo atsakymo laikas' },
      { metric: '24/7', label: 'Aptarnavimas be darbuotojų' },
    ],
    tools: ['Individualus AI chatbotas', 'Kontaktų surinkimas', 'Perdavimo žmogui sistema'],
  },
  {
    title: 'Išmanus AI chatbotas su gyvomis atsargų patikromis ir kainyno skaičiuoklė',
    company: 'Lentvario Mediena',
    industry: 'Gamyba / Medienos produktai',
    website: 'https://www.lentvariomediena.lt',
    category: 'chatbot',
    serviceLink: '/ai-chatbotai',
    logo: '/case-studies/lentvario-logo.jpg',
    logoText: 'LM',
    timeSaved: 'Rankinis darbas pašalintas',
    highlight: '0',
    highlightLabel: 'rankinių skaičiavimų',
    challenge: 'Klientai reikalavo gyvo atsargų patikrinimo ir tikslių kiekio/kainos pasiūlymų — kiekviena užklausa reikalavo rankinio bendravimo su komanda.',
    solution: 'Sukūrėme sandėlio valdymo sistemą nuo nulio, tada sujungėme chatbotą su ja per CSV. Botas tikrina atsargas, skaičiuoja kiekius ir kainas iš vartotojo įvesties, renka kontaktus su pokalbio santrauka ir nukreipia tik aukštos intencijos užklausas komandai.',
    results: [
      { metric: 'Gyva', label: 'Atsargų patikra per CSV' },
      { metric: '0', label: 'Rankinių kainos skaičiavimų' },
      { metric: 'Auto', label: 'Kontaktų rinkimas + perdavimas' },
    ],
    tools: ['Individualus AI chatbotas', 'Sandėlio sistema (sukurta nuo nulio)', 'CSV integracija', 'Kontaktų rinkimas + CRM perdavimas'],
    screenshots: ['/case-studies/lentvario-chatbot.png'],
  },
  {
    title: 'Konversijai orientuota svetainė su AI vizualais',
    company: 'Lentvario Mediena',
    industry: 'Gamyba / Medienos produktai',
    website: 'https://www.lentvariomediena.lt',
    category: 'website',
    serviceLink: '/svetainiu-kurimas',
    logo: '/case-studies/lentvario-logo.jpg',
    logoText: 'LM',
    timeSaved: 'Mažiau „tik naršau" užklausų',
    highlight: 'SEO',
    highlightLabel: 'kiekviename puslapyje',
    challenge: 'Produktų informacija buvo išsklaidyta. Lankytojai išeidavo arba skambindavo su pagrindiniais klausimais vietoj pasiūlymo užklausos — švaisydami komandos laiką.',
    solution: 'Sukūrėme svetainę nuo pradžių iki pabaigos: puslapių struktūra pagal pirkėjo kelionę, SEO optimizuoti tekstai kiekvienam produkto/paslaugos puslapiui ir AI generuoti vizualai. Kiekvienas puslapis atsako į konkretų pirkėjo klausimą ir skatina veiksmą.',
    results: [
      { metric: 'SEO', label: 'Optimizuoti tekstai kiekviename puslapyje' },
      { metric: 'AI', label: 'Vizualai — greiti ir nuoseklūs' },
      { metric: '↑', label: 'Pasiruošusių pirkti užklausų' },
    ],
    tools: ['Next.js svetainė', 'SEO tekstai', 'AI generuoti vizualai', 'CTA architektūra'],
    screenshots: ['/case-studies/lentvario-warehouse.png', '/case-studies/lentvario-calculator.png'],
  },
  {
    title: 'Didelės konversijos svetainė žaidimų produktui',
    company: 'Cheats-pro',
    industry: 'Žaidimai / Skaitmeniniai produktai',
    website: 'https://cheats-pro.com',
    category: 'website',
    serviceLink: '/svetainiu-kurimas',
    logo: '/case-studies/cheats-pro-logo.webp',
    logoText: 'CP',
    timeSaved: 'Greitesnis plano pasirinkimas',
    highlight: '↑',
    highlightLabel: 'plano konversijų rodiklis',
    challenge: 'Reikėjo svetainės, kuri aiškiai perteikia produkto privalumus ir skatina greitai pasirinkti planą žaidėjų auditorijai su trumpu dėmesio laiku.',
    solution: 'Sukūrėme tiesioginę, efektyvumo orientuotą struktūrą su aiškiu funkcijų pristatymu, kainų palyginimo eiga, stipria CTA vieta, supaprastintu vartotojo keliu ir pilnu SEO optimizavimu.',
    results: [
      { metric: 'Greitas', label: 'Sprendimų priėmimo srautas' },
      { metric: 'Aiški', label: 'Produkto pozicionavimas' },
      { metric: 'SEO', label: 'Optimizuota paieškai' },
    ],
    tools: ['Individuali svetainė', 'Kainų palyginimo srautas', 'SEO optimizavimas', 'CTA architektūra'],
  },
  {
    title: 'El. parduotuvė, paremta tėvų psichologija',
    company: 'Magnimoo',
    industry: 'El. prekyba / Edukaciniai produktai',
    website: 'https://magnimoo.com',
    category: 'ecommerce',
    serviceLink: '/el-parduotuviu-kurimas',
    logo: '/case-studies/magnimoo-logo.webp',
    logoText: 'M',
    timeSaved: 'Pagerintas pirkimo srautas',
    highlight: '↑',
    highlightLabel: 'pirkimo konversijų',
    challenge: 'Edukacinis produktas tėvams reikalavo svetainės, kuri greitai perteikia vertę ir skatina greitą pirkimo sprendimą — neapsunkindama lankytojų.',
    solution: 'Sukūrėme švarią, naudos orientuotą struktūrą, paremtą tėvų psichologija. Optimizavome produkto pasakojimą, pasitikėjimo elementus ir pirkimo srautą. Paprasta navigacija, stipri CTA hierarchija ir SEO organiniam matomumui.',
    results: [
      { metric: 'Aiški', label: 'Vertės komunikacija' },
      { metric: '↑', label: 'Srautas iki pirkimo' },
      { metric: 'Dvejopa', label: 'Prekės ženklas + pardavimų įrankis' },
    ],
    tools: ['El. parduotuvė', 'Naudos orientuoti tekstai', 'Pasitikėjimo elementai', 'SEO optimizavimas'],
  },
];

const t = {
  en: {
    hero: {
      badge: 'Case Studies',
      title: 'Real Results from Real Businesses',
      subtitle: 'See how businesses save time and grow with AI automations and professional websites.',
      stats: [
        { value: 5, suffix: '', label: 'Portfolio projects' },
        { value: 454, suffix: '+', label: 'Tickets handled (first 6 wks)' },
        { value: 3, suffix: '', label: 'Industries served' },
      ],
    },
    labels: {
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results',
      tools: 'Tools used',
    },
    cta: {
      title: 'Want Similar Results?',
      subtitle: "Book a free consultation. We'll discuss your challenges and show how AI automation or a new website can help your business.",
      button: 'Book Free Consultation',
      note: 'No commitment • 20-minute call',
    },
  },
  lt: {
    hero: {
      badge: 'Case studies',
      title: 'Realūs verslo rezultatai',
      subtitle: 'Pažiūrėkite, kaip verslai taupo laiką ir auga su AI automatizacijomis bei profesionaliomis svetainėmis.',
      stats: [
        { value: 5, suffix: '', label: 'Portfelio projektai' },
        { value: 454, suffix: '+', label: 'Užklausų per pirmas 6 sav.' },
        { value: 3, suffix: '', label: 'Aptarnautos industrijos' },
      ],
    },
    labels: {
      challenge: 'Iššūkis',
      solution: 'Sprendimas',
      results: 'Rezultatai',
      tools: 'Naudoti įrankiai',
    },
    cta: {
      title: 'Norite panašių rezultatų?',
      subtitle: 'Užsirezervuokite nemokamą konsultaciją. Aptarsime jūsų iššūkius ir parodysime, kaip AI automatizavimas ar nauja svetainė gali padėti jūsų verslui.',
      button: 'Rezervuoti konsultaciją',
      note: 'Be įsipareigojimų • 20 min. pokalbis',
    },
  },
};

export default function CaseStudiesPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const cases = locale === 'lt' ? ltCases : enCases;
  const isLT = locale === 'lt';
  const [activeTabs, setActiveTabs] = useState<Record<number, number>>({});
  const [activeFilter, setActiveFilter] = useState<'all' | CaseCategory>('all');

  const getTab = (idx: number) => activeTabs[idx] ?? 0;
  const setTab = (idx: number, tab: number) =>
    setActiveTabs(prev => ({ ...prev, [idx]: tab }));

  const filteredCases = activeFilter === 'all'
    ? cases
    : cases.filter(cs => cs.category === activeFilter);

  const fl = filterLabels[isLT ? 'lt' : 'en'];

  const breadcrumbItems = [
    { name: isLT ? 'Pradžia' : 'Home', url: isLT ? '/lt' : '/' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <Header />
      <Breadcrumb items={breadcrumbItems} currentPage="Case Studies" />

      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              {c.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">{c.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">{c.hero.subtitle}</p>

            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {c.hero.stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15 }} className="text-center">
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-xs mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="bg-slate-900 py-5 border-b border-white/10 sticky top-0 z-20">
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
              {fl[f]}
            </button>
          ))}
        </div>
      </div>

      {/* Cases */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((cs, index) => (
              <motion.div
                key={`${cs.company}::${cs.category}`}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/20 transition-colors"
                >
                  {/* Card header: logo + company + website link + service tag */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-7 py-4 border-b border-white/10 bg-white/[0.03]">
                    <div className="flex items-center gap-3">
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
                        aria-label={`Visit ${cs.company} website`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="text-gray-500 text-xs hidden sm:inline">{cs.industry}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`/${locale}${cs.serviceLink}`}
                        className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-xs font-medium border border-purple-500/20 hover:bg-purple-500/30 transition-colors"
                      >
                        {categoryIcons[cs.category]}
                        {fl[cs.category]}
                      </a>
                    </div>
                  </div>

                  <div className="p-7">
                    {/* Title + highlight metric */}
                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-7">
                      <div className="flex-shrink-0 text-center md:text-left bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl px-6 py-5 md:w-36">
                        <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-purple-400 to-violet-400 bg-clip-text text-transparent leading-none">
                          {cs.highlight}
                        </div>
                        <div className="text-gray-500 text-xs mt-2 leading-tight">{cs.highlightLabel}</div>
                      </div>

                      <div className="flex-grow">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{cs.title}</h2>

                        {/* Tab switcher */}
                        <div className="flex gap-1 bg-white/5 rounded-xl p-1 border border-white/10 w-fit mb-4">
                          {[c.labels.challenge, c.labels.solution].map((label, tabIdx) => (
                            <button
                              key={tabIdx}
                              onClick={() => setTab(index, tabIdx)}
                              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                getTab(index) === tabIdx
                                  ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-md'
                                  : 'text-gray-400 hover:text-gray-200'
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>

                        <motion.p
                          key={`${cs.company}-${cs.category}-${getTab(index)}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-gray-400 text-sm leading-relaxed"
                        >
                          {getTab(index) === 0 ? cs.challenge : cs.solution}
                        </motion.p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="border-t border-white/10 pt-6 mb-6">
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-4">{c.labels.results}</p>
                      <div className="grid grid-cols-3 gap-4">
                        {cs.results.map((r, i) => (
                          <MetricReveal key={i} metric={r.metric} label={r.label} delay={i * 0.1} />
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-3">{c.labels.tools}</p>
                      <div className="flex flex-wrap gap-2">
                        {cs.tools.map((tool, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05, y: -1 }}
                            className="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-full text-xs font-medium border border-purple-500/20 cursor-default"
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Screenshots */}
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
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <RelatedSolutions currentPage="case-studies" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-16 left-[15%] w-16 h-16 bg-white/10 rounded-2xl rotate-12" />
        <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-16 right-[15%] w-12 h-12 bg-white/10 rounded-full" />
        <motion.div animate={{ rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 right-[5%] w-8 h-8 border-2 border-white/20 rounded-lg" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
            <p className="text-purple-100 mb-8 text-lg">{c.cta.subtitle}</p>
            <motion.a
              href={`/${locale}/contact`}
              className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {c.cta.button}
            </motion.a>
            <p className="text-purple-200 text-sm mt-4">{c.cta.note}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
