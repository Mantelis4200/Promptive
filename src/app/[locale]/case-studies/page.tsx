'use client';

import { motion, useInView } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useRef, useEffect, useState } from 'react';
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
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
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

const t = {
  en: {
    hero: {
      badge: 'Case Studies',
      title: 'Real Results from Real Businesses',
      subtitle: 'See how Lithuanian businesses save time and grow with AI automations and professional websites.',
      stats: [
        { value: 65, suffix: 'h+', label: 'Hours saved per week' },
        { value: 30, suffix: '+', label: 'Businesses helped' },
        { value: 85, suffix: '%', label: 'Avg. AI resolution rate' },
      ],
    },
    labels: {
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results',
      tools: 'Tools used',
      timeSaved: 'Time saved',
    },
    cases: [
      {
        title: 'E-commerce: AI Chatbot for Product Support',
        industry: 'E-commerce / Electric vehicles',
        timeSaved: '~20 hrs/week',
        highlight: '20h',
        highlightLabel: 'saved weekly',
        challenge: 'Customer support team overwhelmed with repetitive product questions — motor specs, battery life, availability. Response times exceeded 4 hours during peak periods.',
        solution: 'Deployed a custom AI chatbot trained on the full product catalog (200+ products). The chatbot answers technical questions, recommends products, and collects leads — 24/7.',
        results: [
          { metric: '~20h/wk', label: 'Support time saved' },
          { metric: '<5s', label: 'Avg. response time' },
          { metric: '85%', label: 'Questions resolved by AI' },
        ],
        tools: ['Custom AI chatbot', 'Product catalog integration', 'CRM sync'],
      },
      {
        title: 'Manufacturing: Document Processing Automation',
        industry: 'Manufacturing / Wood processing',
        timeSaved: '~15 hrs/week',
        highlight: '99%',
        highlightLabel: 'data accuracy',
        challenge: 'Manual processing of supplier invoices, delivery notes, and inventory updates. Staff spent 15+ hours per week on data entry across multiple systems.',
        solution: 'Built an automated workflow using n8n that extracts data from incoming documents, updates inventory, reconciles with orders, and generates reports — zero manual input.',
        results: [
          { metric: '~15h/wk', label: 'Data entry time saved' },
          { metric: '99%', label: 'Data accuracy' },
          { metric: '3 days', label: 'Implementation time' },
        ],
        tools: ['n8n workflows', 'Document AI', 'ERP integration'],
      },
      {
        title: 'Service Business: Lead Automation Pipeline',
        industry: 'Professional services / Consulting',
        timeSaved: '~10 hrs/week',
        highlight: '40%',
        highlightLabel: 'more conversions',
        challenge: 'Leads from website, social media, and referrals were tracked manually in spreadsheets. Follow-ups were inconsistent, and ~30% of leads were lost entirely.',
        solution: 'Integrated all lead sources into HubSpot via n8n automations. Automated lead scoring, assignment, and follow-up email sequences triggered by CRM status.',
        results: [
          { metric: '0%', label: 'Lost leads' },
          { metric: '3x', label: 'Faster response time' },
          { metric: '40%', label: 'More conversions' },
        ],
        tools: ['n8n', 'HubSpot CRM', 'Email automation', 'Lead scoring'],
      },
      {
        title: 'Startup: Website + Chatbot Launch in 48 Hours',
        industry: 'Technology / SaaS',
        timeSaved: 'Weeks saved',
        highlight: '150+',
        highlightLabel: 'leads in week 1',
        challenge: 'Needed a professional landing page with lead capture and AI chatbot before a product launch event. Timeline: 2 days. No existing codebase.',
        solution: 'Built a conversion-optimized landing page with SEO, integrated an AI chatbot for visitor questions, and connected everything to their CRM — shipped in 48 hours.',
        results: [
          { metric: '48h', label: 'Brief to launch' },
          { metric: '150+', label: 'Leads in first week' },
          { metric: '12%', label: 'Conversion rate' },
        ],
        tools: ['Next.js website', 'AI chatbot', 'CRM integration', 'SEO'],
      },
    ],
    testimonials: [
      {
        quote: 'The chatbot now handles everything our support team used to spend half their week on. Setup was fast, and the AI actually understands our products.',
        author: 'Operations Manager',
        company: 'E-commerce / EV sector',
      },
      {
        quote: 'We went from losing 30% of leads to capturing every single one. The automation runs silently in the background — we just open HubSpot and the leads are there.',
        author: 'Founder',
        company: 'Consulting firm',
      },
    ],
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
      subtitle: 'Pažiūrėkite, kaip Lietuvos verslai taupo laiką ir auga su AI automatizacijomis bei profesionaliomis svetainėmis.',
      stats: [
        { value: 65, suffix: 'h+', label: 'Sutaupyta valandų/sav.' },
        { value: 30, suffix: '+', label: 'Padėta verslų' },
        { value: 85, suffix: '%', label: 'Vid. AI sprendimų rodiklis' },
      ],
    },
    labels: {
      challenge: 'Iššūkis',
      solution: 'Sprendimas',
      results: 'Rezultatai',
      tools: 'Naudoti įrankiai',
      timeSaved: 'Sutaupyta laiko',
    },
    cases: [
      {
        title: 'E-komercija: AI chatbotas produktų palaikymui',
        industry: 'E-komercija / Elektrinės transporto priemonės',
        timeSaved: '~20 val./sav.',
        highlight: '20h',
        highlightLabel: 'sutaupyta/sav.',
        challenge: 'Klientų aptarnavimo komanda perkrauta pasikartojančiais produktų klausimais — variklio specifikacijos, baterijos tarnavimo laikas, prieinamumas. Atsakymo laikas viršijo 4 valandas piko metu.',
        solution: 'Įdiegėme individualų AI chatbotą, apmokytą pilnu produktų katalogu (200+ produktų). Chatbotas atsako į techninius klausimus, rekomenduoja produktus ir renka užklausas — 24/7.',
        results: [
          { metric: '~20v/sav.', label: 'Sutaupytas palaikymo laikas' },
          { metric: '<5s', label: 'Vid. atsakymo laikas' },
          { metric: '85%', label: 'Klausimų išspręsta AI' },
        ],
        tools: ['Individualus AI chatbotas', 'Produktų katalogo integracija', 'CRM sinchronizacija'],
      },
      {
        title: 'Gamyba: dokumentų apdorojimo automatizavimas',
        industry: 'Gamyba / Medienos apdirbimas',
        timeSaved: '~15 val./sav.',
        highlight: '99%',
        highlightLabel: 'duomenų tikslumas',
        challenge: 'Rankinis tiekėjų sąskaitų, pristatymo dokumentų ir atsargų atnaujinimų apdorojimas. Darbuotojai leido 15+ valandų per savaitę duomenų įvedimui keliose sistemose.',
        solution: 'Sukūrėme automatizuotą darbo eigą su n8n, kuri ištraukia duomenis iš gaunamų dokumentų, atnaujina atsargas, sutikrina su užsakymais ir generuoja ataskaitas.',
        results: [
          { metric: '~15v/sav.', label: 'Sutaupytas duomenų įvedimo laikas' },
          { metric: '99%', label: 'Duomenų tikslumas' },
          { metric: '3 d.', label: 'Įgyvendinimo laikas' },
        ],
        tools: ['n8n darbo eigos', 'Dokumentų AI', 'ERP integracija'],
      },
      {
        title: 'Paslaugų verslas: užklausų automatizavimo sistema',
        industry: 'Profesionalios paslaugos / Konsultacijos',
        timeSaved: '~10 val./sav.',
        highlight: '40%',
        highlightLabel: 'daugiau konversijų',
        challenge: 'Užklausos iš svetainės, socialinių tinklų ir rekomendacijų buvo sekamos rankiniu būdu lentelėse. Sekimai buvo nenuoseklūs ir ~30% užklausų buvo prarandama.',
        solution: 'Integravome visus užklausų šaltinius į HubSpot per n8n automatizacijas. Automatizavome vertinimą, priskyrimą ir sekimo el. laiškų sekas pagal CRM statusą.',
        results: [
          { metric: '0%', label: 'Prarastų užklausų' },
          { metric: '3x', label: 'Greitesnis atsakymas' },
          { metric: '40%', label: 'Daugiau konversijų' },
        ],
        tools: ['n8n', 'HubSpot CRM', 'El. pašto automatizavimas', 'Užklausų vertinimas'],
      },
      {
        title: 'Startuolis: svetainė + chatbotas per 48 valandas',
        industry: 'Technologijos / SaaS',
        timeSaved: 'Savaitės sutaupytos',
        highlight: '150+',
        highlightLabel: 'užklausų per 1 sav.',
        challenge: 'Reikėjo profesionalaus landing puslapio su užklausų surinkimu ir AI chatbotu prieš produkto pristatymo renginį. Terminas: 2 dienos.',
        solution: 'Sukūrėme konversijai optimizuotą landing puslapį su SEO, integravome AI chatbotą lankytojų klausimams ir viską sujungėme su jų CRM — paleista per 48 val.',
        results: [
          { metric: '48val.', label: 'Nuo brifo iki paleidimo' },
          { metric: '150+', label: 'Užklausų per pirmą savaitę' },
          { metric: '12%', label: 'Konversijos rodiklis' },
        ],
        tools: ['Next.js svetainė', 'AI chatbotas', 'CRM integracija', 'SEO'],
      },
    ],
    testimonials: [
      {
        quote: 'Chatbotas dabar atlieka viską, ką mūsų komanda leisdavo pusę savaitės. Diegimas buvo greitas, o AI tikrai supranta mūsų produktus.',
        author: 'Operacijų vadovas',
        company: 'E-komercija / EV sektorius',
      },
      {
        quote: 'Perėjome nuo 30% prarandamų užklausų prie nulio. Automatizavimas veikia tyliai fone — tiesiog atidarome HubSpot ir užklausos jau ten.',
        author: 'Įkūrėjas',
        company: 'Konsultacijų įmonė',
      },
    ],
    cta: {
      title: 'Norite panašių rezultatų?',
      subtitle: 'Užsirezervuokite nemokamą konsultaciją. Aptarsime jūsų iššūkius ir parodysime, kaip AI automatizavimas ar nauja svetainė gali padėti jūsų verslui.',
      button: 'Rezervuoti konsultaciją',
      note: 'Be įsipareigojimų • 20 min. pokalbis',
    },
  },
};

function TestimonialCard({ quote, author, company }: { quote: string; author: string; company: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto"
    >
      {/* Quote mark */}
      <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-200 text-base italic leading-relaxed mb-5 pt-2">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500/40 to-violet-500/40 rounded-full border border-white/20" />
        <div>
          <p className="text-white font-semibold text-sm">{author}</p>
          <p className="text-gray-500 text-xs">{company}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const isLT = locale === 'lt';
  const [activeTabs, setActiveTabs] = useState<Record<number, number>>({});

  const getTab = (idx: number) => activeTabs[idx] ?? 0;
  const setTab = (idx: number, tab: number) =>
    setActiveTabs(prev => ({ ...prev, [idx]: tab }));

  const breadcrumbItems = [
    { name: isLT ? 'Pradžia' : 'Home', url: isLT ? '/lt' : '/' },
  ];

  // Testimonials inserted after case index 0 and 2
  const testimonialAfter: Record<number, number> = { 0: 0, 2: 1 };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <Header />
      <Breadcrumb items={breadcrumbItems} currentPage="Case Studies" />

      {/* Hero – animated stats */}
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

      {/* Cases on dark background with interleaved testimonials */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          {c.cases.map((cs, index) => (
            <div key={index}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/20 transition-colors"
              >
                {/* Card header */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-7 py-4 border-b border-white/10 bg-white/3">
                  <span className="text-gray-400 text-sm font-medium">{cs.industry}</span>
                  <span className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold border border-purple-500/20">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {c.labels.timeSaved}: {cs.timeSaved}
                  </span>
                </div>

                <div className="p-7">
                  {/* Title + highlight metric */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-7">
                    {/* Giant metric on left */}
                    <div className="flex-shrink-0 text-center md:text-left bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-2xl px-6 py-5 md:w-36">
                      <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-purple-400 to-violet-400 bg-clip-text text-transparent leading-none">
                        {cs.highlight}
                      </div>
                      <div className="text-gray-500 text-xs mt-2 leading-tight">{cs.highlightLabel}</div>
                    </div>

                    {/* Title + tabs */}
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

                      {/* Tab content */}
                      <motion.p
                        key={`${index}-${getTab(index)}`}
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
                </div>
              </motion.article>

              {/* Testimonial card after specific cases */}
              {testimonialAfter[index] !== undefined && (
                <div className="py-4">
                  <TestimonialCard
                    quote={c.testimonials[testimonialAfter[index]].quote}
                    author={c.testimonials[testimonialAfter[index]].author}
                    company={c.testimonials[testimonialAfter[index]].company}
                  />
                </div>
              )}
            </div>
          ))}
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
