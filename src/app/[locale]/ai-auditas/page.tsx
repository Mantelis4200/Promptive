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
      title: 'How It Works',
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
      title: 'What You Get',
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
      title: 'Integrations We Work With',
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
      title: 'Who Is This For',
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
      badge: 'Nemokamas AI Auditas',
      title: 'AI auditas verslui: automatizacijų planas ir ROI',
      subtitle:
        'Verslo savininkams ir operacijų komandoms, norintiems aiškiai suprasti, kur AI gali sutaupyti laiko ir pinigų. Išanalizuojame jūsų darbo eigas ir pateikiame prioritetinį automatizacijos planą su prognozuojama ROI.',
      benefits: [
        'Aiškus vaizdas, kuriuos procesus galima automatizuoti',
        'ROI prognozės kiekvienai rekomenduojamai automatizacijai',
        'Paruoštas įgyvendinimo planas per 7–14 dienų',
      ],
      cta: 'Rezervuoti nemokamą auditą',
    },
    process: {
      title: 'Kaip tai veikia',
      steps: [
        {
          number: '1',
          title: 'Nemokama konsultacija',
          description:
            '30 minučių pokalbis, kad suprastume jūsų verslą, esamas problemas ir automatizacijos tikslus.',
          duration: '1 diena',
        },
        {
          number: '2',
          title: 'Procesų analizė',
          description:
            'Dokumentuojame jūsų darbo eigas, kalbėdamės su komanda ir nustatome pasikartojnčias, laiką eikvojančias užduotis.',
          duration: '2–5 dienos',
        },
        {
          number: '3',
          title: 'Strategija ir ROI',
          description:
            'Apskaičiuojame ROI kiekvienai automatizacijos galimybei ir prioritetizuojame pagal poveikį bei sudėtingumą.',
          duration: '6–10 dienos',
        },
        {
          number: '4',
          title: 'Plano pristatymas',
          description:
            'Gaunate detalų planą su konkrečiais įrankiais, terminais, kainomis ir laukiamais rezultatais.',
          duration: '11–14 dienos',
        },
      ],
    },
    deliverables: {
      title: 'Ką gaunate',
      items: [
        {
          title: 'Procesų analizės dokumentas',
          description:
            'Detalus jūsų esamų darbo eigų žemėlapis su nustatytomis problemomis ir neefektyvumais.',
          icon: 'search',
        },
        {
          title: 'Automatizavimo galimybių sąrašas',
          description:
            'Prioritetinis procesų sąrašas su įvertintu sutaupytu laiku ir kainomis kiekvienam.',
          icon: 'list',
        },
        {
          title: 'Įgyvendinimo planas',
          description:
            'Žingsnis po žingsnio planas su terminais, kainomis, priklausomybėmis ir tikėtina ROI kiekvienam etapui.',
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
      title: 'Integracijos, su kuriomis dirbame',
      subtitle:
        'Vertiname ir rekomenduojame integracijas visame jūsų technologijų sluoksnyje.',
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
      title: 'Kam tinka',
      items: [
        {
          title: 'E-komercija',
          description:
            'Užsakymų apdorojimas, atsargų atnaujinimas, klientų pranešimai, grąžinimai',
        },
        {
          title: 'Paslaugų verslai',
          description:
            'Rezervacijų valdymas, klientų priėmimas, sąskaitų išrašymas, follow-up',
        },
        {
          title: 'B2B įmonės',
          description:
            'Lead kvalifikavimas, pasiūlymų generavimas, CRM atnaujinimai, ataskaitų kūrimas',
        },
        {
          title: 'Gamyba',
          description:
            'Tiekimo grandinės sekimas, kokybės ataskaitos, tiekėjų komunikacija, planavimas',
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
            'AI auditas verslui — tai struktūruotas jūsų verslo procesų vertinimas, siekiant nustatyti, kur dirbtinis intelektas ir automatizavimas gali sutaupyti laiko, sumažinti kaštus ir pagerinti efektyvumą. Gaunate detalų dokumentą su automatizavimo galimybėmis, ROI prognozėmis ir įgyvendinimo planu.',
        },
        {
          id: 'cost',
          question: 'Ar AI auditas tikrai nemokamas?',
          answer:
            'Taip, mūsų AI auditas yra visiškai nemokamas. Tai mūsų būdas padėti verslams suprasti jų automatizavimo potencialą. Jei nuspręsite įgyvendinti mūsų rekomendacijas, galėsime aptarti įgyvendinimo kainas tame etape.',
        },
        {
          id: 'duration',
          question: 'Kiek laiko trunka AI parengtumo vertinimas?',
          answer:
            'Pilnas AI parengtumo vertinimas paprastai trunka 7–14 dienų nuo pradžios iki pristatymo, priklausomai nuo jūsų operacijų sudėtingumo ir analizuojamų procesų skaičiaus.',
        },
        {
          id: 'implementation',
          question:
            'Ar po automatizavimo audito įgyvendinate ir pačias automatizacijas?',
          answer:
            'Taip. Atlikus automatizavimo auditą, galime įgyvendinti bet kurias ar visas rekomenduotas automatizacijas. Dauguma klientų pradeda nuo didžiausią ROI turinčios automatizacijos ir plečia toliau.',
        },
        {
          id: 'no-opportunities',
          question: 'O jei mūsų versle nėra procesų, kuriuos verta automatizuoti?',
          answer:
            'Mūsų patirtimi, kiekvienas verslas turi automatizavimo galimybių. Tačiau jei mūsų AI konsultacijos vertinimas tikrai neras prasmingo sutaupymų, pasakysime sąžiningai ir pasiūlysime alternatyvas.',
        },
        {
          id: 'tools',
          question: 'Kokius įrankius ir platformas apima AI strategija?',
          answer:
            'Mūsų AI strategijos rekomendacijos apima n8n, Make, Zapier, individualius AI sprendimus ir integracijas su dauguma CRM (HubSpot, Pipedrive, Salesforce), komunikacijos įrankių, mokėjimų sistemų ir verslo programinės įrangos.',
        },
      ],
    },
    cta: {
      title: 'Pasiruošę atrasti savo automatizavimo potencialą?',
      subtitle:
        'Užsirezervuokite nemokamą AI auditą. Išanalizuosime jūsų procesus ir pateiksime aiškų automatizacijos planą su ROI prognozėmis.',
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

      {/* How It Works - Vertical Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.process.title}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-300" />

            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Connector dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg shadow-purple-500/30 z-10" />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {step.number}
                      </div>
                      <span className="text-xs text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables - Bento Grid */}
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

          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6">
            {/* Large featured card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:row-span-2 bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(content.deliverables.items[0].icon)}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {content.deliverables.items[0].title}
                </h3>
                <p className="text-purple-100 text-sm leading-relaxed">
                  {content.deliverables.items[0].description}
                </p>
              </div>
            </motion.div>

            {/* Smaller cards */}
            {content.deliverables.items.slice(1).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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

      {/* Use Cases - Gradient Border Cards */}
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
              {content.useCases.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.useCases.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/50 group-hover:via-blue-500/50 group-hover:to-purple-500/50 rounded-2xl blur-sm transition-all duration-500 opacity-0 group-hover:opacity-75" />
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 group-hover:border-purple-200 transition-all">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions currentPage="ai-auditas" />

      {/* FAQ Section */}
      <FAQ items={content.faq.items} title={content.faq.title} />

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

      <Footer />
    </div>
  );
}
