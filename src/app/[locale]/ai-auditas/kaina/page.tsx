'use client';

import { motion, useInView } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useRef, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
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

function CheckItem({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-3"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: delay + 0.1, type: 'spring', stiffness: 300 }}
        className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-emerald-500/30"
      >
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </motion.li>
  );
}

const t = {
  en: {
    hero: {
      badge: 'Pricing',
      title: 'AI Audit Pricing: Packages, Scope & What\'s Included',
      subtitle: 'Transparent pricing, clear deliverables, and measurable ROI from day one.',
      cta: 'Book Free Consultation',
      stats: [
        { value: 30, suffix: '+', label: 'Businesses audited' },
        { value: 97, suffix: '%', label: 'Found automation opportunities' },
        { value: 15, suffix: 'h', label: 'Avg. weekly hours saved' },
      ],
    },
    packages: {
      title: 'Choose Your Package',
      subtitle: 'Each package is tailored to different business sizes and needs.',
      deliveryLabel: 'Delivery',
      items: [
        {
          name: 'Starter Audit',
          price: '€497',
          period: 'one-time',
          description: 'For small businesses with 1–3 key processes',
          features: [
            '1 department analysis',
            'Up to 3 process mappings',
            'Automation opportunity report',
            'Basic implementation roadmap',
            'Tool recommendations',
            '14-day email support',
          ],
          delivery: '7 days',
          popular: false,
        },
        {
          name: 'Full Audit',
          price: '€997',
          period: 'one-time',
          description: 'Comprehensive analysis for growing businesses',
          features: [
            'Multiple departments',
            'Unlimited process mappings',
            'ROI calculations per process',
            'Detailed implementation plan',
            'Tool & integration recommendations',
            'Priority matrix',
            '30-day support',
            'Video walkthrough of results',
          ],
          delivery: '10–14 days',
          popular: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: 'project-based',
          description: 'For complex organizations with multiple systems',
          features: [
            'Organization-wide analysis',
            'Cross-department workflow mapping',
            'Custom integration assessment',
            'Executive presentation',
            'Implementation support',
            'Ongoing advisory (3 months)',
            'Dedicated project manager',
          ],
          delivery: '3–4 weeks',
          popular: false,
        },
      ],
    },
    whatsIncluded: {
      title: "What's Included in Every Package",
      groups: [
        {
          heading: 'Analysis & Documentation',
          items: [
            'Process documentation with visual maps',
            'Bottleneck identification',
            'Cross-system dependency mapping',
          ],
        },
        {
          heading: 'Recommendations',
          items: [
            'Prioritized automation opportunities',
            'Specific tool recommendations (n8n, Make, Zapier)',
            'Integration assessment with existing systems',
          ],
        },
        {
          heading: 'Roadmap & ROI',
          items: [
            'Step-by-step implementation roadmap',
            'Timeline and cost estimates',
            'ROI forecast per automation',
          ],
        },
      ],
    },
    comparison: {
      title: 'Which Package Fits You?',
      items: [
        {
          name: 'Starter',
          price: '€497',
          ideal: 'Small team (1–5)',
          fit: 'You have 1–3 repetitive tasks eating time, want a quick win, and are testing the waters with automation.',
          tag: 'Best for: Quick clarity',
        },
        {
          name: 'Full Audit',
          price: '€997',
          ideal: 'Growing team (5–50)',
          fit: 'Multiple departments, you want an exhaustive ROI analysis and a clear 6-month automation roadmap.',
          tag: 'Best for: Strategic growth',
          highlight: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          ideal: 'Large org (50+)',
          fit: 'Complex systems, multiple integrations, and you need executive buy-in with a formal presentation.',
          tag: 'Best for: Enterprise rollout',
        },
      ],
    },
    faq: {
      title: 'Pricing FAQ',
      items: [
        { id: 'k1', question: 'Can I upgrade from Starter to Full Audit later?', answer: "Yes. If you start with a Starter Audit and want deeper analysis, we'll credit your €497 toward the Full Audit package." },
        { id: 'k2', question: 'Are there any hidden fees?', answer: 'No. The price you see is the total price. Implementation of recommended automations is quoted separately after the audit.' },
        { id: 'k3', question: "What's the payment process?", answer: '50% upfront to start, 50% upon delivery. We accept bank transfer and card payments.' },
        { id: 'k4', question: 'What if no automation opportunities are found?', answer: "If we genuinely find nothing worth automating, we'll refund 50% of the audit fee. This has never happened." },
        { id: 'k5', question: 'Do you offer implementation after the audit?', answer: 'Yes. Most clients move to implementation after the audit. We offer preferred rates for audit clients.' },
        { id: 'k6', question: 'How quickly can you start?', answer: "Typically within 2–3 business days of payment. We'll schedule the discovery call immediately." },
      ],
    },
    cta: {
      title: "Not Sure Which Package Fits?",
      subtitle: "Book a free 20-minute call. We'll discuss your processes and recommend the right package — no commitment.",
      button: 'Book Free Consultation',
      note: 'No commitment required',
    },
  },
  lt: {
    hero: {
      badge: 'Kainodara',
      title: 'AI audito kaina: paketai, apimtis ir kas įeina',
      subtitle: 'Skaidri kainodara, aiškūs rezultatai ir išmatuojamas ROI nuo pirmos dienos.',
      cta: 'Rezervuoti konsultaciją',
      stats: [
        { value: 30, suffix: '+', label: 'Atlikta auditų' },
        { value: 97, suffix: '%', label: 'Rado automatizavimo galimybių' },
        { value: 15, suffix: 'h', label: 'Vid. sutaupyta/sav.' },
      ],
    },
    packages: {
      title: 'Pasirinkite paketą',
      subtitle: 'Kiekvienas paketas pritaikytas skirtingo dydžio verslams.',
      deliveryLabel: 'Pristatymas',
      items: [
        {
          name: 'Pradinis auditas',
          price: '€497',
          period: 'vienkartinis',
          description: 'Mažiems verslams su 1–3 pagrindiniais procesais',
          features: [
            '1 skyriaus analizė',
            'Iki 3 procesų žymėjimas',
            'Automatizavimo galimybių ataskaita',
            'Bazinis įgyvendinimo planas',
            'Įrankių rekomendacijos',
            '14 dienų palaikymas el. paštu',
          ],
          delivery: '7 dienos',
          popular: false,
        },
        {
          name: 'Pilnas auditas',
          price: '€997',
          period: 'vienkartinis',
          description: 'Išsami analizė augantiems verslams',
          features: [
            'Keli skyriai',
            'Neriboti procesų žymėjimai',
            'ROI skaičiavimai kiekvienam procesui',
            'Detalus įgyvendinimo planas',
            'Įrankių ir integracijų rekomendacijos',
            'Prioritetų matrica',
            '30 dienų palaikymas',
            'Video rezultatų pristatymas',
          ],
          delivery: '10–14 dienų',
          popular: true,
        },
        {
          name: 'Enterprise',
          price: 'Individuali',
          period: 'pagal projektą',
          description: 'Sudėtingoms organizacijoms su daugeliu sistemų',
          features: [
            'Visos organizacijos analizė',
            'Tarpskyrinis procesų žymėjimas',
            'Individualių integracijų vertinimas',
            'Prezentacija vadovybei',
            'Įgyvendinimo palaikymas',
            'Nuolatinės konsultacijos (3 mėn.)',
            'Dedikuotas projektų vadovas',
          ],
          delivery: '3–4 savaitės',
          popular: false,
        },
      ],
    },
    whatsIncluded: {
      title: 'Kas įeina į kiekvieną paketą',
      groups: [
        {
          heading: 'Analizė ir dokumentacija',
          items: [
            'Procesų dokumentacija su vizualiais žemėlapiais',
            'Kliūčių identifikavimas',
            'Tarpsisteминių priklausomybių žymėjimas',
          ],
        },
        {
          heading: 'Rekomendacijos',
          items: [
            'Prioritetinis automatizavimo galimybių sąrašas',
            'Konkretūs įrankiai (n8n, Make, Zapier)',
            'Integracijų vertinimas su esamomis sistemomis',
          ],
        },
        {
          heading: 'Planas ir ROI',
          items: [
            'Žingsnis po žingsnio įgyvendinimo planas',
            'Terminų ir kainų įvertinimai',
            'ROI prognozė kiekvienai automatizacijai',
          ],
        },
      ],
    },
    comparison: {
      title: 'Kuris paketas jums tinka?',
      items: [
        {
          name: 'Pradinis',
          price: '€497',
          ideal: 'Maža komanda (1–5)',
          fit: 'Turite 1–3 pasikartojančias užduotis, norite greito rezultato ir pirmą kartą bandote automatizavimą.',
          tag: 'Geriausiai: Greitas aiškumas',
        },
        {
          name: 'Pilnas auditas',
          price: '€997',
          ideal: 'Auganti komanda (5–50)',
          fit: 'Keli skyriai, norite išsamios ROI analizės ir aiškaus 6 mėnesių automatizavimo plano.',
          tag: 'Geriausiai: Strateginis augimas',
          highlight: true,
        },
        {
          name: 'Enterprise',
          price: 'Individuali',
          ideal: 'Didelė organizacija (50+)',
          fit: 'Sudėtingos sistemos, kelios integracijos, reikia vadovybės pritarimo su formalia prezentacija.',
          tag: 'Geriausiai: Enterprise diegimas',
        },
      ],
    },
    faq: {
      title: 'Kainodara: DUK',
      items: [
        { id: 'k1', question: 'Ar galiu pereiti nuo Pradinio prie Pilno audito?', answer: 'Taip. Jei pradėsite su Pradiniu auditu ir norėsite gilesnės analizės, jūsų €497 bus įskaityti į Pilno audito paketą.' },
        { id: 'k2', question: 'Ar yra paslėptų mokesčių?', answer: 'Ne. Kaina, kurią matote, yra galutinė. Rekomenduojamų automatizacijų įgyvendinimas kainuojamas atskirai po audito.' },
        { id: 'k3', question: 'Koks mokėjimo procesas?', answer: '50% avansu prieš pradedant, 50% pristatant rezultatus. Priimame bankinį pavedimą ir kortelės mokėjimus.' },
        { id: 'k4', question: 'Kas, jei nerasite automatizavimo galimybių?', answer: 'Jei tikrai nerasime nieko, ką verta automatizuoti, grąžinsime 50% audito kainos. Tai dar niekada neatsitiko.' },
        { id: 'k5', question: 'Ar siūlote įgyvendinimą po audito?', answer: 'Taip. Dauguma klientų pereina prie įgyvendinimo po audito. Audito klientams taikome palankesnes kainas.' },
        { id: 'k6', question: 'Kaip greitai galite pradėti?', answer: 'Paprastai per 2–3 darbo dienas nuo apmokėjimo. Pažintinį skambutį suplanuosime iš karto.' },
      ],
    },
    cta: {
      title: 'Neapsisprendžiate, kuris paketas tinka?',
      subtitle: 'Užsirezervuokite nemokamą 20 min. pokalbį. Aptarsime jūsų procesus ir rekomenduosime tinkamą paketą — be įsipareigojimų.',
      button: 'Rezervuoti konsultaciją',
      note: 'Be įsipareigojimų',
    },
  },
};

export default function AIAuditasKainaPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const isLT = locale === 'lt';
  const baseUrl = isLT ? '/lt' : '';

  const breadcrumbItems = [
    { name: 'AI Auditas', url: `${baseUrl}/ai-auditas` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <StructuredData type="service" data={{ name: isLT ? 'AI Auditas Verslui' : 'AI Audit for Business' }} page="ai-auditas/kaina" />
      <Header />
      <Breadcrumb items={breadcrumbItems} currentPage={isLT ? 'Kaina' : 'Pricing'} />

      {/* Hero – Compact with animated trust counters */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute top-16 left-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-500/30">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              {c.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">{c.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{c.hero.subtitle}</p>

            {/* Animated trust counters */}
            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mb-10">
              {c.hero.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-xs mt-1 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all text-lg shadow-lg shadow-emerald-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {c.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages – Dark section with glass cards */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.packages.title}</h2>
            <p className="text-gray-400 text-lg">{c.packages.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {c.packages.items.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Glowing border for popular */}
                {pkg.popular && (
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-emerald-500/60 via-teal-500/60 to-emerald-500/60 rounded-3xl blur-sm opacity-80" />
                )}

                <div className={`relative rounded-3xl p-7 border flex flex-col h-full ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-emerald-500/30'
                    : 'bg-white/5 backdrop-blur-sm border-white/10'
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">
                      {isLT ? 'Populiariausias' : 'Most Popular'}
                    </div>
                  )}

                  {/* Package header */}
                  <div className="mb-6">
                    <h3 className={`text-lg font-bold mb-3 ${pkg.popular ? 'text-white' : 'text-gray-200'}`}>{pkg.name}</h3>
                    <div className="flex items-end gap-2 mb-1">
                      <span className={`text-4xl font-black ${pkg.popular ? 'bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent' : 'text-gray-100'}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mb-3">{pkg.period}</p>
                    <p className="text-gray-400 text-sm">{pkg.description}</p>

                    {/* Delivery badge */}
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {c.packages.deliveryLabel}: {pkg.delivery}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10 mb-5" />

                  {/* Features */}
                  <ul className="space-y-2.5 flex-grow mb-7">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          pkg.popular ? 'bg-emerald-500/20' : 'bg-white/10'
                        }`}>
                          <svg className={`w-2.5 h-2.5 ${pkg.popular ? 'text-emerald-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href={`/${locale}/contact`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full py-3 rounded-xl font-semibold text-center text-sm transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-600'
                        : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/10'
                    }`}
                  >
                    {c.hero.cta}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included – Checklist with staggered animations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.whatsIncluded.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {c.whatsIncluded.groups.map((group, gIdx) => (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: gIdx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{group.heading}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, iIdx) => (
                    <CheckItem key={iIdx} text={item} delay={gIdx * 0.1 + iIdx * 0.1} />
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison – Glass cards with highlight */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.comparison.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {c.comparison.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative"
              >
                {item.highlight && (
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-emerald-400/40 to-teal-400/40 rounded-2xl blur-sm" />
                )}
                <div className={`relative rounded-2xl p-6 h-full flex flex-col border ${
                  item.highlight
                    ? 'bg-gradient-to-b from-emerald-50 to-teal-50 border-emerald-200 shadow-lg'
                    : 'bg-white border-gray-200 shadow-sm'
                }`}>
                  {/* Tag */}
                  <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${
                    item.highlight
                      ? 'bg-emerald-500/10 text-emerald-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {item.tag}
                  </span>

                  {/* Package name & price */}
                  <div className="mb-3">
                    <h3 className={`text-lg font-bold mb-1 ${item.highlight ? 'text-emerald-900' : 'text-gray-900'}`}>{item.name}</h3>
                    <span className={`text-2xl font-black ${item.highlight ? 'text-emerald-600' : 'text-gray-800'}`}>{item.price}</span>
                    <p className="text-gray-500 text-xs mt-1">{item.ideal}</p>
                  </div>

                  <div className={`border-t mb-4 ${item.highlight ? 'border-emerald-200' : 'border-gray-100'}`} />

                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.fit}</p>

                  <motion.a
                    href={`/${locale}/contact`}
                    whileHover={{ scale: 1.02 }}
                    className={`mt-5 block w-full py-2.5 rounded-xl font-semibold text-center text-sm transition-all ${
                      item.highlight
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-md shadow-emerald-500/20'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {c.hero.cta}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={c.faq.items} title={c.faq.title} />

      {/* Related */}
      <RelatedSolutions currentPage="ai-auditas-kaina" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-16 left-[15%] w-16 h-16 bg-white/10 rounded-2xl rotate-12" />
        <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-16 right-[15%] w-12 h-12 bg-white/10 rounded-full" />
        <motion.div animate={{ rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 right-[5%] w-8 h-8 border-2 border-white/20 rounded-lg" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
            <p className="text-emerald-100 mb-8 text-lg">{c.cta.subtitle}</p>
            <motion.a
              href={`/${locale}/contact`}
              className="inline-block px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {c.cta.button}
            </motion.a>
            <p className="text-emerald-200 text-sm mt-4">{c.cta.note}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
