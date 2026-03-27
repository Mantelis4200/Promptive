'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useRef, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import RelatedSolutions from '@/components/RelatedSolutions';
import StructuredData from '@/components/StructuredData';

const t = {
  en: {
    breadcrumb: 'AI Audit',
    hero: {
      badge: 'Free AI Audit',
      title: 'AI Audit for Business: Automation Plan & ROI',
      subtitle:
        'For business owners and operations teams who want clarity on where AI can save time and money. We analyze your workflows and deliver a prioritized automation roadmap with projected ROI.',
      benefits: [
        'Clear picture of which processes can be automated',
        'ROI projections for every recommended automation',
        'Ready-to-execute implementation plan in 7-14 days',
      ],
      cta: 'Book Free Audit',
    },
    process: {
      title: 'How the AI Audit Works',
      steps: [
        {
          number: '1',
          title: 'Free Consultation',
          description:
            '30-minute call to understand your business, current pain points, and automation goals.',
          duration: 'Day 1',
        },
        {
          number: '2',
          title: 'Process Analysis',
          description:
            'We map your workflows, interview key team members, and identify repetitive tasks eating up time.',
          duration: 'Days 2-5',
        },
        {
          number: '3',
          title: 'Strategy & ROI',
          description:
            'We calculate ROI for each automation opportunity and prioritize by impact and implementation effort.',
          duration: 'Days 6-10',
        },
        {
          number: '4',
          title: 'Plan Delivery',
          description:
            'You receive a detailed roadmap with specific tools, timelines, costs, and expected results.',
          duration: 'Days 11-14',
        },
      ],
    },
    deliverables: {
      title: 'What Your AI Audit Includes',
      items: [
        {
          title: 'Process Analysis Document',
          description:
            'Detailed mapping of your current workflows with identified bottlenecks and inefficiencies.',
          icon: 'search',
        },
        {
          title: 'Automation Opportunities List',
          description:
            'Prioritized list of processes that can be automated, with estimated time and cost savings for each.',
          icon: 'list',
        },
        {
          title: 'Implementation Roadmap',
          description:
            'Step-by-step plan with timelines, costs, dependencies, and expected ROI for each phase.',
          icon: 'map',
        },
        {
          title: 'Tool Recommendations',
          description:
            'Specific tools and integrations tailored to your existing systems and budget.',
          icon: 'tools',
        },
      ],
    },
    integrations: {
      title: 'Tools We Evaluate in Your Audit',
      subtitle:
        'We assess and recommend integrations across your entire tech stack.',
      items: [
        { name: 'CRM', examples: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'Email', examples: 'Gmail, Outlook, Mailchimp' },
        { name: 'Calendar', examples: 'Google Calendar, Calendly' },
        { name: 'Payments', examples: 'Stripe, PayPal, invoicing tools' },
        { name: 'API & Custom', examples: 'REST APIs, webhooks, databases' },
        {
          name: 'Automation Platforms',
          examples: 'n8n, Make, Zapier',
        },
      ],
    },
    useCases: {
      title: 'Who Should Get an AI Audit',
      items: [
        {
          title: 'E-commerce',
          description:
            'Order processing, inventory updates, customer notifications, returns handling',
        },
        {
          title: 'Service Businesses',
          description:
            'Booking management, client onboarding, invoicing, follow-ups',
        },
        {
          title: 'B2B Companies',
          description:
            'Lead qualification, proposal generation, CRM updates, reporting',
        },
        {
          title: 'Manufacturing',
          description:
            'Supply chain tracking, quality reports, vendor communication, scheduling',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          id: 'what-is-ai-audit',
          question: 'What exactly is an AI audit for business?',
          answer:
            'An AI audit is a structured assessment of your business processes to identify where artificial intelligence and automation can save time, reduce costs, and improve efficiency. You receive a detailed document with automation opportunities, ROI projections, and an implementation roadmap.',
        },
        {
          id: 'cost',
          question: 'Is the AI audit really free?',
          answer:
            'Yes, our AI audit is completely free. We provide this as a value-first approach to help businesses understand their automation potential. If you decide to implement our recommendations, we can discuss implementation costs at that stage.',
        },
        {
          id: 'duration',
          question: 'How long does the AI readiness assessment take?',
          answer:
            'The full AI readiness assessment typically takes 7-14 days from kickoff to delivery, depending on the complexity of your operations and the number of processes analyzed.',
        },
        {
          id: 'implementation',
          question: 'Do you implement the automations after the automation audit?',
          answer:
            'Yes. After completing the automation audit, we can implement any or all of the recommended automations. Most clients start with the highest-ROI automation first and expand from there.',
        },
        {
          id: 'no-opportunities',
          question:
            'What if there are no processes worth automating in our business?',
          answer:
            'In our experience, every business has automation opportunities. However, if our AI consulting assessment genuinely finds no meaningful savings, we will tell you honestly and recommend alternatives.',
        },
        {
          id: 'tools',
          question: 'What tools and platforms does the AI strategy cover?',
          answer:
            'Our AI strategy recommendations include n8n, Make, Zapier, custom AI solutions, and integrations with most CRMs (HubSpot, Pipedrive, Salesforce), communication tools, payment systems, and business software.',
        },
      ],
    },
    cta: {
      title: 'Ready to Discover Your Automation Potential?',
      subtitle:
        'Book a free AI audit. We will analyze your processes and deliver a clear automation roadmap with ROI projections.',
      button: 'Book Free Audit',
      note: 'No commitment • Completely free • Clear next steps',
    },
  },
  lt: {
    breadcrumb: 'AI Auditas',
    hero: {
      badge: 'Nemokamas AI auditas',
      title: 'AI auditas verslui: automatizacijos planas ir ROI',
      subtitle:
        'Verslo savininkams ir vadovams, norintiems aiškiai suprasti, kur AI gali sutaupyti laiko ir pinigų. Išanalizuojame jūsų darbo eigas ir pateikiame prioritetinį automatizacijos planą su ROI prognozėmis.',
      benefits: [
        'Sužinosite, kuriuos procesus galima automatizuoti',
        'ROI prognozės kiekvienai rekomenduojamai automatizacijai',
        'Paruoštas įgyvendinimo planas per 7–14 dienų',
      ],
      cta: 'Gauti nemokamą auditą',
    },
    process: {
      title: 'Kaip vyksta AI auditas',
      steps: [
        {
          number: '1',
          title: 'Nemokama konsultacija',
          description:
            '30 minučių pokalbis, kurio metu susipažįstame su jūsų verslu, aptariame esamas problemas ir išsiaiškiname automatizacijos tikslus.',
          duration: '1 diena',
        },
        {
          number: '2',
          title: 'Procesų analizė',
          description:
            'Dokumentuojame jūsų darbo eigas, kalbamės su komanda ir nustatome pasikartojančias, laiką eikvojančias užduotis.',
          duration: '2–5 dienos',
        },
        {
          number: '3',
          title: 'Strategija ir ROI',
          description:
            'Įvertiname kiekvienos automatizacijos galimybės potencialą, apskaičiuojame investicijų grąžą (ROI) ir sudėliojame prioritetus pagal poveikį bei įgyvendinimo sudėtingumą.',
          duration: '6–10 dienos',
        },
        {
          number: '4',
          title: 'Plano pristatymas',
          description:
            'Gaunate išsamų planą su konkrečiais įrankiais, terminais, kaštais ir tikėtinais rezultatais.',
          duration: '11–14 dienos',
        },
      ],
    },
    deliverables: {
      title: 'Ką gausite po AI audito',
      items: [
        {
          title: 'Procesų analizės dokumentas',
          description:
            'Išsamus jūsų esamų darbo eigų aprašas su nustatytomis problemomis ir neefektyvumais.',
          icon: 'search',
        },
        {
          title: 'Kur sutaupysite laiko ir pinigų',
          description:
            'Aiškiai išdėstytos galimybės su konkrečiais skaičiais — kiek laiko ir kaštų sutaupysite automatizavę kiekvieną procesą.',
          icon: 'list',
        },
        {
          title: 'Įgyvendinimo planas',
          description:
            'Žingsnis po žingsnio planas su terminais, kaštais, tarpusavio sąsajomis ir tikėtinu ROI kiekvienam etapui.',
          icon: 'map',
        },
        {
          title: 'Įrankių rekomendacijos',
          description:
            'Konkretūs įrankiai ir integracijos, pritaikyti jūsų esamoms sistemoms ir biudžetui.',
          icon: 'tools',
        },
      ],
    },
    integrations: {
      title: 'Įrankiai, kuriuos vertiname audite',
      subtitle:
        'Vertiname ir rekomenduojame integracijas visoje jūsų technologinėje aplinkoje.',
      items: [
        { name: 'CRM', examples: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'El. paštas', examples: 'Gmail, Outlook, Mailchimp' },
        { name: 'Kalendorius', examples: 'Google Calendar, Calendly' },
        { name: 'Mokėjimai', examples: 'Stripe, PayPal, sąskaitų įrankiai' },
        { name: 'API ir custom', examples: 'REST API, webhooks, duomenų bazės' },
        {
          name: 'Automatizavimo platformos',
          examples: 'n8n, Make, Zapier',
        },
      ],
    },
    useCases: {
      title: 'Kam tinka AI auditas',
      items: [
        {
          title: 'El. prekyba',
          description:
            'Užsakymų apdorojimas, atsargų valdymas, klientų informavimas ir grąžinimų tvarkymas.',
        },
        {
          title: 'Paslaugų verslai',
          description:
            'Rezervacijų valdymas, naujų klientų priėmimas, sąskaitų išrašymas ir nuolatinis bendravimas.',
        },
        {
          title: 'B2B įmonės',
          description:
            'Potencialių klientų atranka, pasiūlymų rengimas, CRM atnaujinimai ir reguliarios ataskaitos.',
        },
        {
          title: 'Gamyba',
          description:
            'Tiekimo grandinės stebėjimas, kokybės ataskaitos, bendravimas su tiekėjais ir gamybos planavimas.',
        },
      ],
    },
    faq: {
      title: 'Dažnai užduodami klausimai',
      items: [
        {
          id: 'what-is-ai-audit',
          question: 'Kas yra AI auditas verslui?',
          answer:
            'AI auditas verslui — tai struktūruotas jūsų verslo procesų įvertinimas, siekiant nustatyti, kur dirbtinis intelektas ir automatizavimas gali sutaupyti laiko, sumažinti kaštus ir padidinti efektyvumą. Gaunate išsamų dokumentą su automatizavimo galimybėmis, ROI prognozėmis ir įgyvendinimo planu.',
        },
        {
          id: 'cost',
          question: 'Ar AI auditas tikrai nemokamas?',
          answer:
            'Taip, mūsų AI auditas yra visiškai nemokamas. Tai mūsų būdas padėti verslams suvokti savo automatizavimo potencialą.',
        },
        {
          id: 'duration',
          question: 'Kiek laiko trunka AI parengtumo vertinimas?',
          answer:
            'AI parengtumo vertinimas paprastai trunka nuo 7 iki 14 dienų – nuo pradinės analizės iki galutinio pristatymo. Trukmė gali kisti priklausomai nuo jūsų verslo procesų sudėtingumo ir vertinamų sričių apimties.',
        },
        {
          id: 'implementation',
          question:
            'Ar po automatizavimo audito įgyvendinate ir pačias automatizacijas?',
          answer:
            'Taip. Atlikus auditą, galime įgyvendinti bet kurias ar visas rekomenduotas automatizacijas. Dauguma klientų pradeda nuo greičiausiai atsiperkančios automatizacijos ir palaipsniui plečia toliau.',
        },
        {
          id: 'no-opportunities',
          question: 'O jei mūsų versle nėra procesų, kuriuos verta automatizuoti?',
          answer:
            'Mūsų patirtimi, kiekvienas verslas turi automatizavimo galimybių. Tačiau jei audito metu tikrai nerasime prasmingų sutaupymų, pasakysime sąžiningai ir pasiūlysime alternatyvų.',
        },
        {
          id: 'tools',
          question: 'Kokius sprendimus apima AI strategija?',
          answer:
            'AI strategija apima automatizavimo, dirbtinio intelekto sprendimų ir integracijų rekomendacijas, pritaikytas jūsų verslo poreikiams. Ji gali apimti klientų valdymo, komunikacijos, mokėjimų bei kitų verslo sistemų optimizavimą ir tarpusavio sujungimą, siekiant didesnio efektyvumo.',
        },
      ],
    },
    cta: {
      title: 'Pasiruošę sužinoti, kur galite sutaupyti?',
      subtitle:
        'Susisiekite dėl nemokamo AI audito. Išanalizuosime jūsų procesus ir pateiksime aiškų automatizacijos planą su ROI prognozėmis.',
      button: 'Nemokamas auditas',
      note: 'Be įsipareigojimų • Visiškai nemokama • Aiškūs tolesni žingsniai',
    },
  },
};

function getIcon(icon: string): React.ReactNode {
  switch (icon) {
    case 'search':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case 'list':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'map':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case 'tools':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return null;
  }
}

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress >= 1) clearInterval(timer);
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export default function AIAuditasPage() {
  const locale = useLocale();
  const content = locale === 'lt' ? t.lt : t.en;
  const isLT = locale === 'lt';
  const [activeStep, setActiveStep] = useState(0);

  function scrollToContact() {
    window.location.href = `/${locale}/contact`;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb currentPage={content.breadcrumb} />
      <StructuredData type="organization" />
      <StructuredData
        type="service"
        data={{
          name:
            locale === 'lt'
              ? 'AI auditas verslui'
              : 'AI Audit for Business',
        }}
        page="ai-auditas"
      />

      {/* Hero Section - Glass Card with Stats */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              {content.hero.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {content.hero.title}
            </h1>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              {content.hero.subtitle}
            </p>
          </motion.div>

          {/* Stats + Benefits Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50 rounded-3xl blur-sm opacity-75" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8">
                {/* Animated Stats */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      <AnimatedCounter value={200} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{isLT ? 'Procesai analizuoti' : 'Processes analyzed'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      <AnimatedCounter value={30} suffix="%" />
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{isLT ? 'Vid. laiko sutaupymas' : 'Avg. time saved'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      <AnimatedCounter value={14} />
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{isLT ? 'Dienų iki plano' : 'Days to roadmap'}</div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8" />

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {content.hero.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 text-gray-200"
                    >
                      <svg
                        className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                <div className="text-center">
                  <motion.button
                    onClick={scrollToContact}
                    className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all text-lg shadow-lg shadow-purple-500/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {content.hero.cta}
                    <svg
                      className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.deliverables.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {content.deliverables.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 overflow-hidden"
              >
                {/* Ghost number */}
                <span className="absolute top-4 right-6 text-6xl font-bold text-gray-900/[0.04] select-none leading-none tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 h-px bg-gradient-to-r from-purple-400/40 via-blue-400/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations - Floating Pills */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.integrations.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {content.integrations.subtitle}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {content.integrations.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all cursor-default"
              >
                <span className="font-semibold text-purple-600">{item.name}</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-500 text-sm">{item.examples}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.useCases.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {content.useCases.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full min-h-[160px] bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col">
                  {/* Top accent + number row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-1 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    <span className="text-xs font-bold text-purple-400 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg mb-2.5">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Compact Interactive */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{content.process.title}</h2>
          </motion.div>

          {/* Horizontal Step Indicators */}
          <div className="flex justify-between items-center mb-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
            <div className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 -translate-y-1/2 transition-all duration-500" style={{ width: `${(activeStep / (content.process.steps.length - 1)) * 100}%` }} />
            {content.process.steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  index <= activeStep
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white border-2 border-gray-200 text-gray-400 hover:border-purple-300'
                }`}
              >
                {step.number}
              </button>
            ))}
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100"
            >
              <div className="mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{content.process.steps[activeStep].title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{content.process.steps[activeStep].description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {content.process.steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === activeStep ? 'bg-purple-500 w-6' : 'bg-gray-300 hover:bg-purple-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with floating elements */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-2xl rotate-12" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full" />
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/15 rounded-lg -rotate-12" />
        <div className="absolute top-20 right-1/4 w-12 h-12 bg-white/10 rounded-xl rotate-45" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {content.cta.title}
            </h2>
            <p className="text-purple-100 mb-8 text-lg">
              {content.cta.subtitle}
            </p>
            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.cta.button}
            </motion.button>
            <p className="text-purple-200 text-sm mt-4">{content.cta.note}</p>
          </motion.div>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions currentPage="ai-auditas" />

      {/* FAQ Section */}
      <FAQ items={content.faq.items} title={content.faq.title} />

      <Footer />
    </div>
  );
}
