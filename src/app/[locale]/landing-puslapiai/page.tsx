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
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
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
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-3"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: delay + 0.1, type: 'spring', stiffness: 300 }}
        className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-orange-500/30"
      >
        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      <span className="text-gray-700 text-sm leading-relaxed">{text}</span>
    </motion.li>
  );
}

const t = {
  en: {
    breadcrumb: 'Landing Pages',
    breadcrumbParent: { name: 'Website Development', url: '/svetainiu-kurimas' },
    hero: {
      badge: 'Landing Pages',
      title: 'Landing Page Development: More Leads & Conversions',
      subtitle:
        'High-converting landing pages designed for one goal: turning visitors into customers. SEO-optimized, mobile-first, and ready to launch in as little as 24 hours.',
      benefits: [
        'Conversion-focused design with clear CTAs and trust signals',
        'SEO-optimized for Google and AI search engines',
        'Fast launch: simple pages in 24h, complex in 48-72h',
      ],
      cta: 'Book Consultation',
      stats: [
        { value: 3, suffix: 'x', label: 'Higher conversions' },
        { value: 24, suffix: 'h', label: 'Fastest delivery' },
        { value: 50, suffix: '+', label: 'LPs launched' },
      ],
      funnel: {
        steps: ['Visitors', 'Landing Page', 'Leads', 'Customers'],
        label: 'Your conversion pipeline',
      },
    },
    fastLaunch: {
      title: 'Fast Launch (24–72h)',
      subtitle: 'We understand speed matters. That is why we offer one of the fastest turnaround times in the market.',
      tiers: [
        {
          time: '24h',
          title: 'Simple Landing Page',
          description: 'Single-page design with hero, benefits section, contact form, and basic SEO setup.',
          color: 'from-orange-500 to-amber-500',
        },
        {
          time: '48–72h',
          title: 'Complex Landing Page',
          description: 'Multi-section page with custom animations, CRM integration, A/B testing setup, and advanced analytics.',
          color: 'from-amber-500 to-orange-600',
        },
      ],
      included: {
        title: "What's Included",
        items: [
          'Responsive design (mobile, tablet, desktop)',
          'On-page SEO optimization',
          'Contact form with email notifications',
          'CRM integration (HubSpot, Pipedrive)',
          'Google Analytics & conversion tracking',
        ],
      },
    },
    process: {
      title: 'How It Works',
      steps: [
        { number: '1', title: 'Brief Call', description: 'We discuss your goals, target audience, and desired actions. 20-minute call is all we need.', duration: 'Day 1' },
        { number: '2', title: 'Design', description: 'We create a conversion-optimized design focused on your specific goal and audience.', duration: 'Day 1–2' },
        { number: '3', title: 'Development', description: 'We build, integrate analytics and CRM, optimize for speed and SEO.', duration: 'Day 2–3' },
        { number: '4', title: 'Launch & A/B Testing', description: 'We go live, set up A/B tests, and start optimizing for maximum conversions.', duration: 'Day 3+' },
      ],
    },
    deliverables: {
      title: 'What You Get',
      groups: [
        {
          heading: 'Design & Development',
          items: [
            'Conversion-optimized page layout',
            'Mobile-first responsive design',
            'Custom animations & interactions',
            'Fast page load (Core Web Vitals)',
          ],
        },
        {
          heading: 'Marketing & Analytics',
          items: [
            'On-page SEO optimization',
            'Google Analytics setup',
            'Conversion event tracking',
            'Heatmap integration (Hotjar)',
          ],
        },
        {
          heading: 'Integrations & Growth',
          items: [
            'CRM integration (HubSpot / Pipedrive)',
            'A/B testing configuration',
            'Email marketing connection',
            '30-day post-launch support',
          ],
        },
      ],
    },
    integrations: {
      title: 'Integrations',
      subtitle: 'We connect your landing page with the tools you already use.',
      items: ['HubSpot', 'Pipedrive', 'Salesforce', 'Mailchimp', 'SendGrid', 'Stripe', 'Google Analytics', 'Hotjar', 'Meta Pixel', 'LinkedIn', 'TikTok Ads', 'Google Ads'],
    },
    useCases: {
      title: 'Who Is This For',
      items: [
        {
          title: 'Product Launches',
          description: 'Create buzz and collect pre-orders or signups for your new product with a dedicated landing page.',
          gradient: 'from-orange-500/80 to-amber-600/80',
          bg: 'bg-gradient-to-br from-orange-50 to-amber-50',
          accent: 'bg-orange-100 text-orange-700',
          icon: '🚀',
        },
        {
          title: 'Service Businesses',
          description: 'Generate qualified leads for your consulting, legal, medical, or professional service.',
          gradient: 'from-blue-500/80 to-indigo-600/80',
          bg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
          accent: 'bg-blue-100 text-blue-700',
          icon: '💼',
        },
        {
          title: 'Events & Webinars',
          description: 'Drive registrations with countdown timers, speaker bios, and one-click signup forms.',
          gradient: 'from-purple-500/80 to-pink-600/80',
          bg: 'bg-gradient-to-br from-purple-50 to-pink-50',
          accent: 'bg-purple-100 text-purple-700',
          icon: '🎯',
        },
        {
          title: 'Lead Generation',
          description: 'Pair with Google Ads or social media campaigns for maximum ROI on your ad spend.',
          gradient: 'from-green-500/80 to-teal-600/80',
          bg: 'bg-gradient-to-br from-green-50 to-teal-50',
          accent: 'bg-green-100 text-green-700',
          icon: '📈',
        },
      ],
    },
    pricing: {
      title: 'Investment',
      description: 'Transparent pricing. No hidden fees.',
      packages: [
        {
          name: 'Basic LP',
          price: '€497',
          priceNote: 'one-time',
          description: 'Simple, effective landing page',
          features: [
            'Single-page design',
            'Mobile responsive',
            'Contact form',
            'Basic SEO setup',
            'Google Analytics',
            '24h delivery',
          ],
          popular: false,
        },
        {
          name: 'Premium LP',
          price: '€997',
          priceNote: 'one-time',
          description: 'Full conversion machine',
          features: [
            'Multi-section design',
            'Custom animations',
            'CRM integration',
            'A/B testing setup',
            'Advanced analytics',
            'Conversion tracking',
            '30-day support',
          ],
          popular: true,
        },
        {
          name: 'Campaign Package',
          price: '€1,497',
          priceNote: 'one-time',
          description: 'Landing page + ad campaign setup',
          features: [
            'Premium LP included',
            'Google Ads setup',
            'Social media pixels',
            'Retargeting setup',
            'Monthly performance report',
            '60-day support',
          ],
          popular: false,
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { id: 'what-is-landing-page', question: 'What is a landing page and why do I need one?', answer: 'A landing page is a standalone web page designed for a single goal: converting visitors into leads or customers. Unlike a full website, it removes distractions and focuses on one clear call-to-action, which typically results in 2-5x higher conversion rates compared to a generic homepage.' },
        { id: 'landing-page-cost', question: 'How much does landing page development cost?', answer: 'Our Basic LP starts at €497 for a simple, effective page with SEO and analytics. The Premium LP at €997 includes CRM integration, A/B testing, and advanced analytics. The Campaign Package at €1,497 adds Google Ads setup and social media pixel integration.' },
        { id: 'timeline', question: 'How fast can you build a landing page?', answer: 'A simple landing page can be live within 24 hours. More complex pages with CRM integration, custom animations, and A/B testing setup typically take 48-72 hours from brief to launch.' },
        { id: 'conversion-optimization', question: 'How do you optimize landing pages for conversions?', answer: 'We use proven conversion optimization techniques: clear value propositions above the fold, social proof elements, urgency triggers, minimal form fields, mobile-first design, and fast page load times. After launch, we set up A/B testing to continuously improve performance.' },
        { id: 'ab-testing', question: 'What is A/B testing and is it included?', answer: 'A/B testing means running two versions of your landing page simultaneously to see which performs better. It is included in our Premium LP and Campaign Package. We test headlines, CTAs, layouts, and other elements to maximize your conversion rate.' },
        { id: 'seo-landing', question: 'Will my landing page rank in Google?', answer: 'Yes. Every landing page we build includes on-page SEO optimization: meta tags, structured data, Open Graph tags, fast loading speed, and mobile responsiveness. For competitive keywords, we recommend pairing the landing page with a content strategy.' },
        { id: 'integrations', question: 'Can you integrate the landing page with my CRM and analytics tools?', answer: 'Absolutely. We integrate with HubSpot, Pipedrive, Salesforce, Google Analytics, Meta Pixel, LinkedIn Pixel, and most other marketing and CRM tools. Every lead captured goes directly into your existing workflow.' },
      ],
    },
    cta: {
      title: 'Ready to Launch Your Landing Page?',
      subtitle: 'Book a free 20-minute consultation. We will discuss your goals and give you a clear timeline and quote.',
      button: 'Book Free Consultation',
      note: 'No commitment \u2022 24h turnaround available \u2022 Clear pricing',
    },
  },
  lt: {
    breadcrumb: 'Landing puslapiai',
    breadcrumbParent: { name: 'Svetainių kūrimas', url: '/lt/svetainiu-kurimas' },
    hero: {
      badge: 'Landing puslapiai',
      title: 'Landing puslapio kūrimas: daugiau užklausų ir konversijų',
      subtitle:
        'Konversijai optimizuoti landing puslapiai su vienu tikslu: paversti lankytojus klientais. SEO optimizuoti, mobile-first, ir paruošti paleisti per 24 valandas.',
      benefits: [
        'Konversijai optimizuotas dizainas su aiškiais CTA ir pasitikėjimo signalais',
        'SEO optimizuota Google ir AI paieškos varikliams',
        'Greitas paleidimas: paprastas LP per 24 val., sudėtingas per 48-72 val.',
      ],
      cta: 'Rezervuoti konsultaciją',
      stats: [
        { value: 3, suffix: 'x', label: 'Didesnės konversijos' },
        { value: 24, suffix: 'h', label: 'Greičiausias pristatymas' },
        { value: 50, suffix: '+', label: 'Paleisti LP' },
      ],
      funnel: {
        steps: ['Lankytojai', 'Landing puslapis', 'Užklausos', 'Klientai'],
        label: 'Jūsų konversijų pipeline',
      },
    },
    fastLaunch: {
      title: 'Greitas paleidimas (24–72 val.)',
      subtitle: 'Suprantame, kad greitis svarbu. Todėl siūlome vieną greičiausių terminų rinkoje.',
      tiers: [
        {
          time: '24val.',
          title: 'Paprastas Landing Puslapis',
          description: 'Vieno puslapio dizainas su hero sekcija, naudų aprašymu, kontaktų forma ir baziniu SEO nustatymu.',
          color: 'from-orange-500 to-amber-500',
        },
        {
          time: '48–72val.',
          title: 'Sudėtingas Landing Puslapis',
          description: 'Daugiau sekcijų su individualiomis animacijomis, CRM integracija, A/B testavimo sąranka ir išplėstine analitika.',
          color: 'from-amber-500 to-orange-600',
        },
      ],
      included: {
        title: 'Kas įeina',
        items: [
          'Responsive dizainas (mobilusis, planšetė, kompiuteris)',
          'On-page SEO optimizavimas',
          'Kontaktų forma su el. pašto pranešimais',
          'CRM integracija (HubSpot, Pipedrive)',
          'Google Analytics ir konversijų sekimas',
        ],
      },
    },
    process: {
      title: 'Kaip tai veikia',
      steps: [
        { number: '1', title: 'Trumpas pokalbis', description: 'Aptariame jūsų tikslus, tikslinę auditoriją ir norimus veiksmus. Pakanka 20 minučių pokalbio.', duration: '1 diena' },
        { number: '2', title: 'Dizainas', description: 'Sukuriame konversijai optimizuotą dizainą, orientuotą į jūsų konkretų tikslą ir auditoriją.', duration: '1–2 dienos' },
        { number: '3', title: 'Kūrimas', description: 'Pastatome, integruojame analitiką ir CRM, optimizuojame greitį ir SEO.', duration: '2–3 dienos' },
        { number: '4', title: 'Paleidimas ir A/B testavimas', description: 'Paleidžiame, nustatome A/B testus ir pradedame optimizuoti maksimalioms konversijoms.', duration: '3+ diena' },
      ],
    },
    deliverables: {
      title: 'Ką gaunate',
      groups: [
        {
          heading: 'Dizainas ir kūrimas',
          items: [
            'Konversijai optimizuotas puslapio maketas',
            'Mobile-first responsive dizainas',
            'Individualios animacijos ir interaktyvumas',
            'Greitas įkrovimas (Core Web Vitals)',
          ],
        },
        {
          heading: 'Rinkodara ir analitika',
          items: [
            'On-page SEO optimizavimas',
            'Google Analytics nustatymas',
            'Konversijų įvykių sekimas',
            'Šilumos žemėlapio integracija (Hotjar)',
          ],
        },
        {
          heading: 'Integracijos ir augimas',
          items: [
            'CRM integracija (HubSpot / Pipedrive)',
            'A/B testavimo sąranka',
            'El. pašto rinkodaros jungtis',
            '30 dienų palaikymas po paleidimo',
          ],
        },
      ],
    },
    integrations: {
      title: 'Integracijos',
      subtitle: 'Sujungiame jūsų landing puslapį su įrankiais, kuriuos jau naudojate.',
      items: ['HubSpot', 'Pipedrive', 'Salesforce', 'Mailchimp', 'SendGrid', 'Stripe', 'Google Analytics', 'Hotjar', 'Meta Pixel', 'LinkedIn', 'TikTok Ads', 'Google Ads'],
    },
    useCases: {
      title: 'Kam tinka',
      items: [
        {
          title: 'Produktų pristatymai',
          description: 'Sukurkite ažiotažą ir surinkite išankstinius užsakymus ar registracijas naujam produktui.',
          gradient: 'from-orange-500/80 to-amber-600/80',
          bg: 'bg-gradient-to-br from-orange-50 to-amber-50',
          accent: 'bg-orange-100 text-orange-700',
          icon: '🚀',
        },
        {
          title: 'Paslaugų verslai',
          description: 'Generuokite kvalifikuotus kontaktus konsultacijų, teisinėms, medicinos ar profesionalioms paslaugoms.',
          gradient: 'from-blue-500/80 to-indigo-600/80',
          bg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
          accent: 'bg-blue-100 text-blue-700',
          icon: '💼',
        },
        {
          title: 'Renginiai ir webinarai',
          description: 'Skatinkite registracijas su atgalinės atskaitos laikmačiais ir vieno paspaudimo registracija.',
          gradient: 'from-purple-500/80 to-pink-600/80',
          bg: 'bg-gradient-to-br from-purple-50 to-pink-50',
          accent: 'bg-purple-100 text-purple-700',
          icon: '🎯',
        },
        {
          title: 'Lead generavimo kampanijos',
          description: 'Sujunkite su Google Ads ar socialinių tinklų kampanijomis maksimaliam ROI.',
          gradient: 'from-green-500/80 to-teal-600/80',
          bg: 'bg-gradient-to-br from-green-50 to-teal-50',
          accent: 'bg-green-100 text-green-700',
          icon: '📈',
        },
      ],
    },
    pricing: {
      title: 'Kainodara',
      description: 'Skaidri kainodara. Jokių paslėptų mokesčių.',
      packages: [
        {
          name: 'Bazinis LP',
          price: '€497',
          priceNote: 'vienkartinis',
          description: 'Paprastas, efektyvus landing puslapis',
          features: [
            'Vieno puslapio dizainas',
            'Mobili responsive versija',
            'Kontaktų forma',
            'Bazinis SEO nustatymas',
            'Google Analytics',
            'Pristatymas per 24 val.',
          ],
          popular: false,
        },
        {
          name: 'Premium LP',
          price: '€997',
          priceNote: 'vienkartinis',
          description: 'Pilna konversijų mašina',
          features: [
            'Kelių sekcijų dizainas',
            'Individualios animacijos',
            'CRM integracija',
            'A/B testavimo sąranka',
            'Išplėstinė analitika',
            'Konversijų sekimas',
            '30 dienų palaikymas',
          ],
          popular: true,
        },
        {
          name: 'Kampanijos paketas',
          price: '€1 497',
          priceNote: 'vienkartinis',
          description: 'Landing puslapis + reklamos kampanijos nustatymas',
          features: [
            'Premium LP įtrauktas',
            'Google Ads nustatymas',
            'Socialinių tinklų pikseliai',
            'Retargeting nustatymas',
            'Mėnesinė veiklos ataskaita',
            '60 dienų palaikymas',
          ],
          popular: false,
        },
      ],
    },
    faq: {
      title: 'Dažnai užduodami klausimai',
      items: [
        { id: 'what-is-landing-page', question: 'Kas yra landing puslapis ir kodėl jis man reikalingas?', answer: 'Landing puslapis \u2014 tai atskiras interneto puslapis, sukurtas vienam tikslui: paversti lankytojus potencialiais klientais. Skirtingai nuo pilnos svetainės, jis pašalina blaškančius elementus ir sutelkia dėmesį į vieną aiškų veiksmą, kas paprastai lemia 2\u20135 kartus didesnes konversijas.' },
        { id: 'landing-page-cost', question: 'Kiek kainuoja landing puslapio kūrimas?', answer: 'Bazinis LP prasideda nuo €497 \u2014 paprastas, efektyvus puslapis su SEO ir analitika. Premium LP nuo €997 apima CRM integraciją, A/B testavimą ir išplėstinę analitiką. Kampanijos paketas nuo €1\u00a0497 prideda Google Ads nustatymą ir socialinių tinklų pikselių integraciją.' },
        { id: 'timeline', question: 'Kaip greitai galite sukurti landing puslapį?', answer: 'Paprastas landing puslapis gali būti paleistas per 24 valandas. Sudėtingesni puslapiai su CRM integracija, individualiomis animacijomis ir A/B testavimo sąranka paprastai užtrunka 48\u201372 valandas nuo užduoties iki paleidimo.' },
        { id: 'conversion-optimization', question: 'Kaip optimizuojate landing puslapius konversijoms?', answer: 'Naudojame patikrintas konversijų optimizavimo technikas: aiškias vertės propozicijas virš pirmojo ekrano, socialinius įrodymus, skubos elementus, minimalų formų laukų skaičių, mobile-first dizainą ir greitą puslapio krovimą.' },
        { id: 'ab-testing', question: 'Kas yra A/B testavimas ir ar jis įtrauktas?', answer: 'A/B testavimas reiškia dviejų landing puslapio versijų paleidimą vienu metu, kad pamatytumėte, kuri veikia geriau. Jis įtrauktas į Premium LP ir Kampanijos paketą.' },
        { id: 'seo-landing', question: 'Ar mano landing puslapis bus rodomas Google paieškoje?', answer: 'Taip. Kiekvienas mūsų kuriamas landing puslapis apima on-page SEO optimizavimą: meta žymes, struktūruotus duomenis, Open Graph žymes, greitą krovimąsi ir mobilią versiją.' },
        { id: 'integrations', question: 'Ar galite integruoti landing puslapį su mano CRM ir analitikos įrankiais?', answer: 'Žinoma. Integruojame su HubSpot, Pipedrive, Salesforce, Google Analytics, Meta Pixel, LinkedIn Pixel ir dauguma kitų rinkodaros bei CRM įrankių.' },
      ],
    },
    cta: {
      title: 'Pasiruošę paleisti savo landing puslapį?',
      subtitle: 'Užsirezervuokite nemokamą 20 minučių konsultaciją. Aptarsime jūsų tikslus ir pateiksime aiškų terminą bei kainą.',
      button: 'Nemokama konsultacija',
      note: 'Be įsipareigojimų \u2022 Galimas 24 val. pristatymas \u2022 Aiški kainodara',
    },
  },
};

export default function LandingPuslapiaiPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const isLT = locale === 'lt';
  const [activePackage, setActivePackage] = useState(1);

  const breadcrumbItems = [
    { name: c.breadcrumbParent.name, url: c.breadcrumbParent.url },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <StructuredData
        type="service"
        data={{ name: isLT ? 'Landing puslapių kūrimas' : 'Landing Page Development' }}
        page="landing-puslapiai"
      />
      <Header />
      <Breadcrumb items={breadcrumbItems} currentPage={c.breadcrumb} />

      {/* Hero with Conversion Funnel */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-500/30">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                {c.hero.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.hero.title}</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{c.hero.subtitle}</p>
            </motion.div>
          </div>

          {/* Conversion Funnel Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center justify-center gap-3 mb-12"
          >
            <p className="text-gray-500 text-xs mr-2">{c.hero.funnel.label}:</p>
            {c.hero.funnel.steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className={`relative px-5 py-3 rounded-xl text-sm font-semibold border ${
                    i === 0
                      ? 'bg-white/10 backdrop-blur-sm border-white/20 text-gray-300'
                      : i === 1
                      ? 'bg-gradient-to-r from-orange-500/30 to-amber-500/30 border-orange-500/40 text-orange-300'
                      : i === 2
                      ? 'bg-orange-500/20 border-orange-400/30 text-orange-200'
                      : 'bg-gradient-to-r from-orange-500 to-amber-500 border-transparent text-white shadow-lg shadow-orange-500/30'
                  }`}
                >
                  {step}
                  {i === 3 && (
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900" />
                  )}
                </motion.div>
                {i < c.hero.funnel.steps.length - 1 && (
                  <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + i * 0.2 }}
                    className="w-5 h-5 text-orange-400/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                )}
              </div>
            ))}
          </motion.div>

          {/* Stats + CTA */}
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-lg w-full">
              {c.hero.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all text-lg shadow-lg shadow-orange-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {c.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Fast Launch – Large Animated Time Display */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Floating shapes */}
        <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-12 left-[10%] w-20 h-20 bg-white/10 rounded-3xl rotate-12" />
        <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-12 right-[8%] w-14 h-14 bg-white/10 rounded-full" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.fastLaunch.title}</h2>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto">{c.fastLaunch.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {c.fastLaunch.tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center group hover:bg-white/15 transition-all"
              >
                {/* Large time display */}
                <div className={`text-6xl md:text-7xl font-black text-white mb-3 leading-none`}>
                  {tier.time}
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{tier.title}</h3>
                <p className="text-orange-100 text-sm leading-relaxed">{tier.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Included items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="font-bold text-white text-xl mb-5">{c.fastLaunch.included.title}</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {c.fastLaunch.included.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-orange-100">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process – Numbered Cards with Connecting Line */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.process.title}</h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-orange-100 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 rounded-full"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {c.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-white rounded-2xl border-2 border-orange-200 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold bg-gradient-to-br from-orange-500 to-amber-500 bg-clip-text text-transparent">{step.number}</span>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <span className="inline-block text-xs text-orange-600 font-medium bg-orange-50 px-2.5 py-1 rounded-full mb-3">{step.duration}</span>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables – Checklist with Staggered Animations */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.deliverables.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {c.deliverables.groups.map((group, gIdx) => (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: gIdx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900">{group.heading}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item, iIdx) => (
                    <CheckItem key={iIdx} text={item} delay={gIdx * 0.1 + iIdx * 0.08} />
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations – Marquee */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{c.integrations.title}</h2>
            <p className="text-gray-600">{c.integrations.subtitle}</p>
          </motion.div>
          <div className="overflow-hidden relative">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex gap-4 w-max"
            >
              {[...c.integrations.items, ...c.integrations.items].map((name, i) => (
                <div key={i} className="px-5 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm whitespace-nowrap hover:border-orange-300 hover:text-orange-700 transition-colors">
                  {name}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases – Industry Cards with Gradient Overlays */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.useCases.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.useCases.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`${item.bg} rounded-2xl p-6 border border-white/60 shadow-sm hover:shadow-xl transition-all overflow-hidden relative group`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />

                <div className="relative">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${item.accent}`}>
                    {item.title}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing – Tabbed Interface */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{c.pricing.title}</h2>
            <p className="text-gray-400 text-lg">{c.pricing.description}</p>
          </motion.div>

          {/* Package Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-white/5 rounded-2xl p-1.5 flex gap-1 border border-white/10">
              {c.pricing.packages.map((pkg, index) => (
                <button
                  key={index}
                  onClick={() => setActivePackage(index)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activePackage === index
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {pkg.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Package Card */}
          <motion.div
            key={activePackage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {c.pricing.packages[activePackage].popular && (
              <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/50 via-amber-500/50 to-orange-500/50 rounded-3xl blur-sm opacity-75" />
            )}
            <div className={`relative bg-white/5 backdrop-blur-xl border ${c.pricing.packages[activePackage].popular ? 'border-orange-500/40' : 'border-white/10'} rounded-3xl p-8 md:p-10`}>
              {c.pricing.packages[activePackage].popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-lg">
                  {isLT ? 'Populiariausias' : 'Most Popular'}
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Left: Price & description */}
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-bold text-white mb-2">{c.pricing.packages[activePackage].name}</h3>
                  <div className="mb-1">
                    <span className="text-5xl font-black bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      {c.pricing.packages[activePackage].price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{c.pricing.packages[activePackage].priceNote}</p>
                  <p className="text-gray-400 text-sm mb-6">{c.pricing.packages[activePackage].description}</p>
                  <motion.a
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {c.hero.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>

                {/* Right: Features */}
                <div className="md:w-2/3">
                  <h4 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">{isLT ? 'Įtraukta' : 'Includes'}</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {c.pricing.packages[activePackage].features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-center gap-2.5 text-gray-300 text-sm"
                      >
                        <div className="w-5 h-5 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Package comparison dots */}
          <div className="flex justify-center gap-2 mt-6">
            {c.pricing.packages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePackage(index)}
                className={`w-2 h-2 rounded-full transition-all ${activePackage === index ? 'bg-orange-400 w-6' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Floating decorative elements */}
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-16 left-[15%] w-16 h-16 bg-white/10 rounded-2xl rotate-12" />
        <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-16 right-[15%] w-12 h-12 bg-white/10 rounded-full" />
        <motion.div animate={{ rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 right-[5%] w-8 h-8 border-2 border-white/20 rounded-lg" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
            <p className="text-orange-100 mb-8 text-lg">{c.cta.subtitle}</p>
            <motion.a
              href={`/${locale}/contact`}
              className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {c.cta.button}
            </motion.a>
            <p className="text-orange-200 text-sm mt-4">{c.cta.note}</p>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <RelatedSolutions currentPage="landing-puslapiai" />

      {/* FAQ */}
      <FAQ items={c.faq.items} title={c.faq.title} />

      <Footer />
    </div>
  );
}
