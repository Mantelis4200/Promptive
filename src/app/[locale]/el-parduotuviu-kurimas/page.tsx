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

const t = {
  en: {
    hero: {
      badge: 'E-commerce',
      title: 'E-commerce Development: Payments, Shipping, SEO',
      subtitle: 'For businesses ready to sell online. We build e-commerce stores with payment processing, shipping integration, inventory management, and SEO that brings organic traffic.',
      cta: 'Book Consultation',
      stats: [
        { value: 40, suffix: '+', label: 'Stores built' },
        { value: 99, suffix: '%', label: 'Uptime SLA' },
        { value: 3, suffix: 'x', label: 'Avg. conversion lift' },
      ],
      mockup: {
        productName: 'Premium Product',
        price: '€49.99',
        badge: 'In stock',
        addToCart: 'Add to Cart',
        reviews: '4.9 (128 reviews)',
      },
    },
    fastStart: {
      title: 'Fast Start: Realistic Timeline',
      subtitle: 'E-commerce done right takes time, but we optimize every step.',
      phases: [
        { label: 'MVP Store', time: '2 weeks', width: '33%', description: 'Core products, payment processing, basic shipping. Enough to start selling.' },
        { label: 'Full Store', time: '3–4 weeks', width: '33%', description: 'Complete catalog, advanced shipping rules, CRM integration, SEO.' },
        { label: 'Custom Platform', time: '6–8 weeks', width: '34%', description: 'Custom features, multi-vendor, subscriptions, AI recommendations.' },
      ],
    },
    process: {
      title: 'How It Works',
      steps: [
        { number: '1', title: 'Discovery', description: 'We understand your products, audience, and business model.', duration: 'Day 1' },
        { number: '2', title: 'Design & Setup', description: 'Store design, product structure, payment and shipping configuration.', duration: 'Week 1' },
        { number: '3', title: 'Development', description: 'Build the store, integrate systems, add products, test transactions.', duration: 'Weeks 2–3' },
        { number: '4', title: 'Launch & Optimize', description: 'Go live, monitor orders, optimize conversions, set up SEO.', duration: 'Week 4+' },
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        { title: 'Online Store', description: 'Fully functional e-commerce platform with product catalog, cart, and checkout.', large: true },
        { title: 'Payment Processing', description: 'Stripe, PayPal, bank transfers — secure payments that work in Lithuania and EU.' },
        { title: 'Shipping Integration', description: 'Automated shipping rates, tracking numbers, and delivery notifications.' },
        { title: 'Product SEO', description: 'Optimized product pages, categories, and structured data for Google Shopping.' },
      ],
    },
    integrations: {
      title: 'Integrations',
      subtitle: 'Click any category to see the tools we support.',
      categories: [
        {
          name: 'Payments',
          icon: '💳',
          color: 'from-green-500 to-emerald-500',
          border: 'border-green-200',
          bg: 'bg-green-50',
          tools: ['Stripe', 'PayPal', 'Paysera', 'SEB bank link', 'Swedbank link', 'Luminor link', 'Apple Pay', 'Google Pay'],
        },
        {
          name: 'Shipping',
          icon: '📦',
          color: 'from-blue-500 to-cyan-500',
          border: 'border-blue-200',
          bg: 'bg-blue-50',
          tools: ['DPD', 'Omniva', 'LP Express', 'GLS', 'DHL', 'Custom carrier', 'Parcel lockers', 'Same-day delivery'],
        },
        {
          name: 'CRM & Email',
          icon: '📧',
          color: 'from-purple-500 to-violet-500',
          border: 'border-purple-200',
          bg: 'bg-purple-50',
          tools: ['HubSpot', 'Pipedrive', 'Salesforce', 'Mailchimp', 'SendGrid', 'Klaviyo', 'ActiveCampaign', 'Brevo'],
        },
        {
          name: 'Analytics',
          icon: '📊',
          color: 'from-orange-500 to-amber-500',
          border: 'border-orange-200',
          bg: 'bg-orange-50',
          tools: ['Google Analytics 4', 'Meta Pixel', 'Google Shopping', 'Hotjar', 'Microsoft Clarity', 'TikTok Pixel', 'LinkedIn Insight', 'Google Ads'],
        },
        {
          name: 'Inventory',
          icon: '🏭',
          color: 'from-teal-500 to-green-500',
          border: 'border-teal-200',
          bg: 'bg-teal-50',
          tools: ['Stock alerts', 'Supplier sync', 'Bulk import', 'Barcode scanning', 'Warehouse management', 'Multi-location stock'],
        },
        {
          name: 'Platforms',
          icon: '🛒',
          color: 'from-rose-500 to-pink-500',
          border: 'border-rose-200',
          bg: 'bg-rose-50',
          tools: ['Shopify', 'WooCommerce', 'Next.js / Headless', 'Magento migration', 'PrestaShop migration', 'Custom build'],
        },
      ],
    },
    useCases: {
      title: 'Who This Is For',
      items: [
        { title: 'Retail Brands', description: 'Physical products going online — clothing, electronics, home goods, food & beverage.', icon: '👗' },
        { title: 'Digital Products', description: 'Courses, templates, software licenses — automated delivery after purchase.', icon: '💾' },
        { title: 'B2B Wholesale', description: 'Bulk ordering, custom pricing tiers, account-based purchasing.', icon: '🏢' },
        { title: 'Subscription Boxes', description: 'Recurring payments, subscriber management, automated fulfillment.', icon: '📦' },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        { id: 'e1', question: 'How much does an e-commerce store cost?', answer: 'MVP stores start from €2,497. Full-featured stores with custom integrations range from €4,000–€10,000. We provide exact quotes after understanding your product catalog and requirements.' },
        { id: 'e2', question: 'Which platform do you use?', answer: 'We work with Shopify, WooCommerce, and custom Next.js/headless builds. We recommend the best fit based on your product count, budget, and scalability needs.' },
        { id: 'e3', question: 'Can you integrate Lithuanian payment methods?', answer: 'Yes. We integrate Paysera, Lithuanian bank links (SEB, Swedbank, Luminor), Stripe, and all major payment processors used in Lithuania and the EU.' },
        { id: 'e4', question: 'Do you handle product photography and content?', answer: 'We focus on development and can recommend partners for photography. We do help with product descriptions and SEO-optimized content.' },
        { id: 'e5', question: 'Can you migrate from an existing store?', answer: 'Yes. We handle migrations from Shopify, WooCommerce, Magento, and other platforms — including products, customers, and order history.' },
        { id: 'e6', question: 'Is SEO included for product pages?', answer: 'Yes. We optimize every product page with proper titles, descriptions, structured data (for Google Shopping), image alt tags, and URL structure.' },
      ],
    },
    cta: {
      title: 'Ready to Start Selling Online?',
      subtitle: "Book a free consultation. We'll discuss your products and recommend the best e-commerce solution.",
      button: 'Book Free Consultation',
      note: 'No commitment • Free estimate • 20-minute call',
    },
  },
  lt: {
    hero: {
      badge: 'El. parduotuvės',
      title: 'El. parduotuvės kūrimas: mokėjimai, pristatymas, SEO',
      subtitle: 'Verslams, pasiruošusiems pardavinėti internetu. Kuriame el. parduotuves su mokėjimų apdorojimu, pristatymo integracija, atsargų valdymu ir SEO, kuris atneša organinį srautą.',
      cta: 'Rezervuoti konsultaciją',
      stats: [
        { value: 40, suffix: '+', label: 'Sukurtų parduotuvių' },
        { value: 99, suffix: '%', label: 'Veikimo laikas' },
        { value: 3, suffix: 'x', label: 'Vid. konversijų augimas' },
      ],
      mockup: {
        productName: 'Premium produktas',
        price: '€49,99',
        badge: 'Yra sandėlyje',
        addToCart: 'Į krepšelį',
        reviews: '4,9 (128 atsiliepimai)',
      },
    },
    fastStart: {
      title: 'Greitas startas: realus laiko grafikas',
      subtitle: 'Kokybiška el. parduotuvė reikalauja laiko, bet optimizuojame kiekvieną žingsnį.',
      phases: [
        { label: 'MVP parduotuvė', time: '2 savaitės', width: '33%', description: 'Pagrindiniai produktai, mokėjimai, bazinis pristatymas. Pakanka pradėti pardavinėti.' },
        { label: 'Pilna parduotuvė', time: '3–4 savaitės', width: '33%', description: 'Pilnas katalogas, pažangios pristatymo taisyklės, CRM integracija, SEO.' },
        { label: 'Individuali platforma', time: '6–8 savaitės', width: '34%', description: 'Individualios funkcijos, multi-vendor, prenumeratos, AI rekomendacijos.' },
      ],
    },
    process: {
      title: 'Kaip tai veikia',
      steps: [
        { number: '1', title: 'Pažintis', description: 'Suprantame jūsų produktus, auditoriją ir verslo modelį.', duration: '1 diena' },
        { number: '2', title: 'Dizainas ir nustatymas', description: 'Parduotuvės dizainas, produktų struktūra, mokėjimų ir pristatymo konfigūracija.', duration: '1 savaitė' },
        { number: '3', title: 'Kūrimas', description: 'Kuriame parduotuvę, integruojame sistemas, pridedame produktus, testuojame.', duration: '2–3 savaitės' },
        { number: '4', title: 'Paleidimas ir optimizavimas', description: 'Paleidžiame, stebime užsakymus, optimizuojame konversijas, nustatome SEO.', duration: '4+ savaitė' },
      ],
    },
    deliverables: {
      title: 'Ką gaunate',
      items: [
        { title: 'Internetinė parduotuvė', description: 'Pilnai funkcionali el. prekybos platforma su produktų katalogu, krepšeliu ir apmokėjimu.', large: true },
        { title: 'Mokėjimų apdorojimas', description: 'Stripe, PayPal, Paysera, banko pavedimai — saugūs mokėjimai Lietuvoje ir ES.' },
        { title: 'Pristatymo integracija', description: 'Automatizuoti pristatymo tarifai, sekimo numeriai ir pristatymo pranešimai.' },
        { title: 'Produktų SEO', description: 'Optimizuoti produktų puslapiai, kategorijos ir struktūriniai duomenys Google Shopping.' },
      ],
    },
    integrations: {
      title: 'Integracijos',
      subtitle: 'Paspauskite kategoriją, kad pamatytumėte palaikomus įrankius.',
      categories: [
        {
          name: 'Mokėjimai',
          icon: '💳',
          color: 'from-green-500 to-emerald-500',
          border: 'border-green-200',
          bg: 'bg-green-50',
          tools: ['Stripe', 'PayPal', 'Paysera', 'SEB banko nuoroda', 'Swedbank nuoroda', 'Luminor nuoroda', 'Apple Pay', 'Google Pay'],
        },
        {
          name: 'Pristatymas',
          icon: '📦',
          color: 'from-blue-500 to-cyan-500',
          border: 'border-blue-200',
          bg: 'bg-blue-50',
          tools: ['DPD', 'Omniva', 'LP Express', 'GLS', 'DHL', 'Individualus vežėjas', 'Paštomatai', 'Tą pačią dieną'],
        },
        {
          name: 'CRM ir el. paštas',
          icon: '📧',
          color: 'from-purple-500 to-violet-500',
          border: 'border-purple-200',
          bg: 'bg-purple-50',
          tools: ['HubSpot', 'Pipedrive', 'Salesforce', 'Mailchimp', 'SendGrid', 'Klaviyo', 'ActiveCampaign', 'Brevo'],
        },
        {
          name: 'Analitika',
          icon: '📊',
          color: 'from-orange-500 to-amber-500',
          border: 'border-orange-200',
          bg: 'bg-orange-50',
          tools: ['Google Analytics 4', 'Meta Pixel', 'Google Shopping', 'Hotjar', 'Microsoft Clarity', 'TikTok Pixel', 'LinkedIn Insight', 'Google Ads'],
        },
        {
          name: 'Atsargos',
          icon: '🏭',
          color: 'from-teal-500 to-green-500',
          border: 'border-teal-200',
          bg: 'bg-teal-50',
          tools: ['Atsargų įspėjimai', 'Tiekėjų sinchronizacija', 'Masinis importas', 'Brūkšninio kodo skaitymas', 'Sandėlio valdymas', 'Kelių vietų atsargos'],
        },
        {
          name: 'Platformos',
          icon: '🛒',
          color: 'from-rose-500 to-pink-500',
          border: 'border-rose-200',
          bg: 'bg-rose-50',
          tools: ['Shopify', 'WooCommerce', 'Next.js / Headless', 'Magento migracija', 'PrestaShop migracija', 'Individuali kūryba'],
        },
      ],
    },
    useCases: {
      title: 'Kam tinka',
      items: [
        { title: 'Mažmeninės prekės', description: 'Fiziniai produktai internete — drabužiai, elektronika, namų prekės, maistas ir gėrimai.', icon: '👗' },
        { title: 'Skaitmeniniai produktai', description: 'Kursai, šablonai, programinės licencijos — automatizuotas pristatymas po pirkimo.', icon: '💾' },
        { title: 'B2B didmeninė prekyba', description: 'Didmeniniai užsakymai, individualūs kainų lygiai, paskyra pagrįsti pirkimai.', icon: '🏢' },
        { title: 'Prenumeratos dėžutės', description: 'Pasikartojantys mokėjimai, prenumeratorių valdymas, automatizuotas pristatymas.', icon: '📦' },
      ],
    },
    faq: {
      title: 'DUK',
      items: [
        { id: 'e1', question: 'Kiek kainuoja el. parduotuvės kūrimas?', answer: 'MVP parduotuvės prasideda nuo €2 497. Pilnos parduotuvės su individualiomis integracijomis paprastai kainuoja €4 000–€10 000. Tikslią kainą pateikiame supratę jūsų produktų katalogą ir reikalavimus.' },
        { id: 'e2', question: 'Kokią platformą naudojate?', answer: 'Dirbame su Shopify, WooCommerce ir individualiais Next.js/headless sprendimais. Rekomenduojame geriausiai tinkančią pagal produktų kiekį, biudžetą ir mastelialumo poreikius.' },
        { id: 'e3', question: 'Ar galite integruoti lietuviškus mokėjimo būdus?', answer: 'Taip. Integruojame Paysera, lietuviškų bankų nuorodas (SEB, Swedbank, Luminor), Stripe ir visus pagrindinius mokėjimų procesorius Lietuvoje ir ES.' },
        { id: 'e4', question: 'Ar tvarkote produktų fotografavimą ir turinį?', answer: 'Mes specializuojamės kūrime ir galime rekomenduoti partnerius fotografavimui. Padedame su produktų aprašymais ir SEO optimizuotu turiniu.' },
        { id: 'e5', question: 'Ar galite perkelti iš esamos parduotuvės?', answer: 'Taip. Atliekame migracijas iš Shopify, WooCommerce, Magento ir kitų platformų — įskaitant produktus, klientus ir užsakymų istoriją.' },
        { id: 'e6', question: 'Ar SEO optimizavimas įeina į produktų puslapius?', answer: 'Taip. Optimizuojame kiekvieną produkto puslapį su tinkamais pavadinimais, aprašymais, struktūriniais duomenimis (Google Shopping), paveikslėlių alt žymėmis ir URL struktūra.' },
      ],
    },
    cta: {
      title: 'Pasiruošę pradėti pardavinėti internetu?',
      subtitle: 'Užsirezervuokite nemokamą konsultaciją. Aptarsime jūsų produktus ir rekomenduosime geriausią el. prekybos sprendimą.',
      button: 'Rezervuoti konsultaciją',
      note: 'Be įsipareigojimų • Nemokamas įvertinimas • 20 min. pokalbis',
    },
  },
};

export default function ElParduotuviuKurimasPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const isLT = locale === 'lt';
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const breadcrumbItems = [
    { name: isLT ? 'Svetainių kūrimas' : 'Website Development', url: `${isLT ? '/lt' : ''}/svetainiu-kurimas` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <StructuredData type="service" data={{ name: isLT ? 'El. Parduotuvių Kūrimas' : 'E-commerce Development' }} page="el-parduotuviu-kurimas" />
      <Header />
      <Breadcrumb items={breadcrumbItems} currentPage={isLT ? 'El. parduotuvių kūrimas' : 'E-commerce Development'} />

      {/* Hero with Product Card Mockup */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {c.hero.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.hero.title}</h1>
              <p className="text-lg text-gray-300 mb-8">{c.hero.subtitle}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {c.hero.stats.map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.15 }} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all text-lg shadow-lg shadow-green-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {c.hero.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Right: CSS Product Card Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex justify-center"
            >
              <div className="relative">
                {/* Glow behind card */}
                <div className="absolute inset-0 bg-green-500/20 rounded-3xl blur-2xl scale-110" />

                {/* Product Card */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative bg-white rounded-2xl shadow-2xl w-72 overflow-hidden"
                >
                  {/* Product Image Area */}
                  <div className="h-44 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 relative flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    {/* Stock badge */}
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {c.hero.mockup.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">{c.hero.mockup.reviews}</span>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-1">{c.hero.mockup.productName}</h3>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-green-600">{c.hero.mockup.price}</span>
                      <span className="text-xs text-gray-400 line-through">€69.99</span>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="flex items-center gap-2">
                      <button className="flex-1 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {c.hero.mockup.addToCart}
                      </button>
                      <button className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge: Order notification */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100"
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">{isLT ? 'Naujas užsakymas!' : 'New order!'}</p>
                    <p className="text-xs text-gray-500">{isLT ? 'Prieš 2 min.' : '2 min ago'}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fast Start – Progress Bar Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.fastStart.title}</h2>
            <p className="text-lg text-gray-600">{c.fastStart.subtitle}</p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <div className="flex rounded-2xl overflow-hidden h-14 shadow-md">
              {c.fastStart.phases.map((phase, i) => (
                <div
                  key={i}
                  className={`relative flex items-center justify-center text-sm font-bold text-white ${
                    i === 0 ? 'bg-green-500' : i === 1 ? 'bg-emerald-600' : 'bg-teal-700'
                  }`}
                  style={{ width: phase.width }}
                >
                  <span className="hidden sm:block truncate px-2">{phase.label}</span>
                  {/* Divider chevron */}
                  {i < c.fastStart.phases.length - 1 && (
                    <div className={`absolute -right-3 top-0 w-6 h-14 z-10 ${i === 0 ? 'bg-green-500' : 'bg-emerald-600'}`}
                      style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
                    />
                  )}
                </div>
              ))}
            </div>
            {/* Time labels below bar */}
            <div className="flex mt-2">
              {c.fastStart.phases.map((phase, i) => (
                <div key={i} style={{ width: phase.width }} className="text-center">
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">{phase.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Phase detail cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {c.fastStart.phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 border-2 ${
                  i === 0 ? 'border-green-200 bg-green-50' : i === 1 ? 'border-emerald-200 bg-emerald-50' : 'border-teal-200 bg-teal-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold ${
                    i === 0 ? 'bg-green-500' : i === 1 ? 'bg-emerald-600' : 'bg-teal-700'
                  }`}>
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-gray-900">{phase.label}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process – Connecting Line */}
      <section className="py-20 bg-gray-50">
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
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-green-100 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full"
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
                >
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-white rounded-2xl border-2 border-green-200 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold bg-gradient-to-br from-green-500 to-emerald-500 bg-clip-text text-transparent">{step.number}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <span className="inline-block text-xs text-green-700 font-medium bg-green-50 px-2.5 py-1 rounded-full mb-3">{step.duration}</span>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables – Bento Grid */}
      <section className="py-20 bg-white">
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

          <div className="grid md:grid-cols-3 gap-6">
            {/* Large featured card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden border border-green-500/20"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-2xl" />
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{c.deliverables.items[0].title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.deliverables.items[0].description}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {['Cart', 'Checkout', 'Catalog', 'Orders'].map(tag => (
                    <span key={tag} className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Smaller cards */}
            {c.deliverables.items.slice(1).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations – Expandable Category Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{c.integrations.title}</h2>
            <p className="text-gray-600">{c.integrations.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.integrations.categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                className={`rounded-2xl border-2 overflow-hidden cursor-pointer transition-all ${
                  openCategory === index ? `${cat.border} bg-white shadow-lg` : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
                onClick={() => setOpenCategory(openCategory === index ? null : index)}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-sm`}>
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-gray-900">{cat.name}</h3>
                  </div>
                  <motion.svg
                    animate={{ rotate: openCategory === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>

                {/* Expandable tools list */}
                <motion.div
                  initial={false}
                  animate={{ height: openCategory === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className={`px-5 pb-5 pt-1 ${cat.bg} border-t ${cat.border}`}>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((tool, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: openCategory === index ? 1 : 0, scale: openCategory === index ? 1 : 0.9 }}
                          transition={{ duration: 0.2, delay: i * 0.04 }}
                          className="text-xs font-medium text-gray-700 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
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

          <div className="grid md:grid-cols-2 gap-6">
            {c.useCases.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-gray-50 to-green-50/30 rounded-2xl p-6 border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RelatedSolutions currentPage="el-parduotuviu-kurimas" />
      <FAQ items={c.faq.items} title={c.faq.title} />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-16 left-[15%] w-16 h-16 bg-white/10 rounded-2xl rotate-12" />
        <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-16 right-[15%] w-12 h-12 bg-white/10 rounded-full" />
        <motion.div animate={{ rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 right-[5%] w-8 h-8 border-2 border-white/20 rounded-lg" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
            <p className="text-green-100 mb-8 text-lg">{c.cta.subtitle}</p>
            <motion.a
              href={`/${locale}/contact`}
              className="inline-block px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {c.cta.button}
            </motion.a>
            <p className="text-green-200 text-sm mt-4">{c.cta.note}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
