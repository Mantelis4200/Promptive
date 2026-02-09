'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Interactive RideOn Chatbot Demo
function RideOnChatDemo() {
  const locale = useLocale();
  const isLT = locale === 'lt';
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    { id: 1, isBot: true, text: isLT ? '👋 Sveiki! Kuom galėčiau padėti?' : '👋 Hi! How can I help you?' },
    { id: 2, isBot: false, text: isLT ? 'Koks variklio galingumas : eb-12?' : 'What is the motor power: eb-12?' },
    { id: 3, isBot: true, text: isLT
      ? 'Elektrinis dviratis motoroleris EB-12 turi 500W galingumo variklį. Šis modelis taip pat pasižymi 50 km nuvažiuojamu atstumu ir 20Ah 48V baterija.'
      : 'The EB-12 electric scooter has a 500W motor. This model also features a 50 km range and a 20Ah 48V battery.'
    },
  ];

  useEffect(() => {
    const showMessage = (index: number) => {
      if (index >= messages.length) {
        setTimeout(() => {
          setVisibleMessages(0);
          showMessage(0);
        }, 4000);
        return;
      }

      if (index > 0 && messages[index].isBot) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(index + 1);
          setTimeout(() => showMessage(index + 1), 2000);
        }, 1500);
      } else {
        setVisibleMessages(index + 1);
        setTimeout(() => showMessage(index + 1), 1500);
      }
    };

    showMessage(0);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">🛵</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">RideOn Konsultantas</p>
              <p className="text-white/70 text-xs">{isLT ? 'Galiu padėti su RideOn.lt' : 'I can help with RideOn.lt'}</p>
            </div>
          </div>
          <button className="text-white/80 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="h-72 p-4 space-y-3 bg-gray-50">
          <AnimatePresence>
            {messages.slice(0, visibleMessages).map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.isBot
                    ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={isLT ? 'Įveskite žinutę...' : 'Type a message...'}
              className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              readOnly
            />
            <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Translations
const t = {
  en: {
    hero: {
      badge: 'AI Automation',
      title: 'Stop Losing Sales to Slow Replies',
      subtitle: 'Most e-commerce support can be automated today. Not "one day." Now.',
      cta: 'Book a Free Call',
      stat1: 'Response Time',
      stat2: 'Tickets Handled',
      stat3: 'Available',
    },
    problem: {
      title: 'The Problem',
      slow: 'Slow replies = Lost sales',
      fast: 'Fast replies = More orders',
      simple: 'Simple.',
    },
    categoriesTitle: 'What We Automate',
    categories: {
      chatbots: {
        name: 'AI Chatbots',
        description: 'Intelligent assistants that handle customer inquiries instantly, 24/7. No more missed messages or slow response times.',
        items: ['Customer support 24/7', 'Product recommendations', 'FAQ automation', 'Lead qualification'],
        benefits: [
          { title: 'Instant Response', desc: 'Answer customer questions in seconds, not hours' },
          { title: 'Always Available', desc: 'Works nights, weekends, and holidays without breaks' },
          { title: 'Consistent Quality', desc: 'Every customer gets the same professional service' },
          { title: 'Scalable', desc: 'Handle 10 or 10,000 conversations simultaneously' },
        ],
      },
      automations: {
        name: 'Workflow Automation',
        description: 'Connect your tools and automate repetitive tasks. Focus on what matters while systems handle the rest.',
        items: ['Email/inbox automation', 'CRM pipeline sync', 'Inventory management', 'HR onboarding'],
        benefits: [
          { title: 'Save Hours Daily', desc: 'Eliminate manual data entry and copy-paste work' },
          { title: 'Zero Errors', desc: 'Automated workflows don\'t make typos or forget steps' },
          { title: 'Real-time Sync', desc: 'Keep all your systems updated automatically' },
          { title: 'Full Visibility', desc: 'Track every process and identify bottlenecks' },
        ],
      },
      sales: {
        name: 'Sales Automation',
        description: 'Automate lead nurturing, follow-ups, and pipeline management. Your sales team focuses on closing, not admin.',
        items: ['Lead qualification', 'Follow-up sequences', 'Cold outreach', 'Pipeline automation'],
        benefits: [
          { title: 'No Lead Left Behind', desc: 'Automatic follow-ups ensure every lead is nurtured' },
          { title: 'Faster Pipeline', desc: 'Move leads through stages without manual updates' },
          { title: 'Smart Prioritization', desc: 'AI scores leads so reps focus on hot prospects' },
          { title: 'More Conversations', desc: 'Automate outreach to book more meetings' },
        ],
      },
      custom: {
        name: 'Custom Solutions',
        description: 'Unique business challenges need unique solutions. We build AI systems tailored to your specific workflows.',
        items: ['Multi-system sync', 'Internal AI agents', 'Predictive analytics', 'Document processing'],
        benefits: [
          { title: 'Perfect Fit', desc: 'Built specifically for your business processes' },
          { title: 'Full Integration', desc: 'Connect any system, API, or database you use' },
          { title: 'AI-Powered', desc: 'Leverage machine learning for smarter decisions' },
          { title: 'Competitive Edge', desc: 'Custom tools your competitors don\'t have' },
        ],
      },
    },
    caseStudies: {
      title: 'Real Results',
      rideon: {
        badge: 'E-commerce',
        title: 'RideOn.lt',
        subtitle: '24/7 Customer Support Automation',
        description: 'We set up a chat assistant that answers in seconds, finds product info, solves common questions, collects leads, and hands off tricky cases to humans.',
        results: [
          { value: '454', label: 'Tickets in 6 weeks' },
          { value: '24/7', label: 'Availability' },
          { value: '< 5s', label: 'Response time' },
          { value: '70%', label: 'Auto-resolved' },
        ],
      },
      lentvario: {
        badge: 'B2B / Inventory',
        title: 'Lentvario Mediena',
        subtitle: 'Live Inventory + Price Calculator',
        description: 'AI chatbot connected to inventory system. Checks availability, calculates quantities and prices, then hands qualified leads to sales.',
        results: [
          { value: 'Live', label: 'Inventory sync' },
          { value: 'Auto', label: 'Price calc' },
          { value: '100%', label: 'Qualified leads' },
          { value: '-70%', label: 'Response time' },
        ],
        link: 'View Case Study',
      },
    },
    features: {
      title: 'What Your Bot Can Do',
      items: [
        { title: 'Answer Instantly', desc: 'Respond in seconds so customers don\'t leave' },
        { title: 'Find Information', desc: 'Search your website, products, and knowledge base' },
        { title: 'Solve Questions', desc: 'Handle common issues without human intervention' },
        { title: 'Collect Leads', desc: 'Capture name, email, phone with context' },
        { title: 'Hand Off Smart', desc: 'Transfer complex cases with full conversation history' },
        { title: 'Learn & Improve', desc: 'Get smarter over time with your data' },
      ],
    },
    cta: {
      title: 'Ready to Automate?',
      subtitle: 'Book a free call. We\'ll show you what can be automated in your business.',
      button: 'Book Free Call',
    },
  },
  lt: {
    hero: {
      badge: 'AI Automatizacija',
      title: 'Nustokite Prarasti Pardavimus Dėl Lėtų Atsakymų',
      subtitle: 'Daugumą e-komercijos aptarnavimo galima automatizuoti šiandien. Ne "kažkada." Dabar.',
      cta: 'Rezervuoti Pokalbį',
      stat1: 'Atsakymo laikas',
      stat2: 'Aptarnauta užklausų',
      stat3: 'Pasiekiamumas',
    },
    problem: {
      title: 'Problema',
      slow: 'Lėti atsakymai = Prarasti pardavimai',
      fast: 'Greiti atsakymai = Daugiau užsakymų',
      simple: 'Paprasta.',
    },
    categoriesTitle: 'Ką Automatizuojame',
    categories: {
      chatbots: {
        name: 'AI Chatbotai',
        description: 'Išmanūs asistentai, kurie aptarnauja klientus akimirksniu, 24/7. Jokių praleistų žinučių ar lėtų atsakymų.',
        items: ['Klientų aptarnavimas 24/7', 'Produktų rekomendacijos', 'DUK automatizacija', 'Leadų kvalifikacija'],
        benefits: [
          { title: 'Greitas Atsakymas', desc: 'Atsakykite klientams per sekundes, ne valandas' },
          { title: 'Visada Pasiekiamas', desc: 'Dirba naktimis, savaitgaliais ir švenčių dienomis' },
          { title: 'Vienoda Kokybė', desc: 'Kiekvienas klientas gauna vienodai profesionalų aptarnavimą' },
          { title: 'Lengvai Plečiamas', desc: 'Aptarnauja 10 ar 10,000 pokalbių vienu metu' },
        ],
      },
      automations: {
        name: 'Darbo Eigos',
        description: 'Sujunkite savo įrankius ir automatizuokite pasikartojančias užduotis. Fokusuokitės į tai, kas svarbu.',
        items: ['El. pašto automatizacija', 'CRM pipeline sync', 'Inventoriaus valdymas', 'HR onboarding'],
        benefits: [
          { title: 'Sutaupykite Valandas', desc: 'Pašalinkite rankinį duomenų įvedimą ir kopijavimą' },
          { title: 'Be Klaidų', desc: 'Automatizuoti procesai nedaro klaidų ir nepamiršta žingsnių' },
          { title: 'Sinchronizacija', desc: 'Visos sistemos atnaujinamos automatiškai realiu laiku' },
          { title: 'Pilnas Vaizdas', desc: 'Sekite kiekvieną procesą ir identifikuokite kliūtis' },
        ],
      },
      sales: {
        name: 'Pardavimų Automatizacija',
        description: 'Automatizuokite leadų auginimą, follow-up\'us ir pipeline valdymą. Pardavėjai fokusuojasi į uždarymą.',
        items: ['Leadų kvalifikacija', 'Follow-up sekos', 'Cold outreach', 'Pipeline automatizacija'],
        benefits: [
          { title: 'Joks Lead Nepamirštas', desc: 'Automatiniai follow-up\'ai užtikrina, kad kiekvienas lead gaus dėmesį' },
          { title: 'Greitesnis Pipeline', desc: 'Perkelkite leadus per etapus be rankinio darbo' },
          { title: 'Išmanus Prioritizavimas', desc: 'AI įvertina leadus, kad fokusuotumėtės į karščiausius' },
          { title: 'Daugiau Pokalbių', desc: 'Automatizuotas outreach\'as = daugiau susitikimų' },
        ],
      },
      custom: {
        name: 'Custom Sprendimai',
        description: 'Unikalūs verslo iššūkiai reikalauja unikalių sprendimų. Kuriame AI sistemas pritaikytas jūsų procesams.',
        items: ['Multi-sistemų sync', 'Vidiniai AI agentai', 'Predictive analytics', 'Dokumentų apdorojimas'],
        benefits: [
          { title: 'Tobulas Tinkamumas', desc: 'Sukurta specialiai jūsų verslo procesams' },
          { title: 'Pilna Integracija', desc: 'Sujungiame bet kokią sistemą, API ar duomenų bazę' },
          { title: 'AI Galia', desc: 'Išnaudokite mašininį mokymąsi išmanesniems sprendimams' },
          { title: 'Konkurencinis Pranašumas', desc: 'Individualūs įrankiai, kurių konkurentai neturi' },
        ],
      },
    },
    caseStudies: {
      title: 'Realūs Rezultatai',
      rideon: {
        badge: 'E-komercija',
        title: 'RideOn.lt',
        subtitle: '24/7 Klientų Aptarnavimo Automatizacija',
        description: 'Sukūrėme chat asistentą, kuris atsako per sekundes, randa produktų informaciją, sprendžia dažnus klausimus, renka kontaktus ir perduoda sudėtingus atvejus žmonėms.',
        results: [
          { value: '454', label: 'Užklausos per 6 sav.' },
          { value: '24/7', label: 'Pasiekiamumas' },
          { value: '< 5s', label: 'Atsakymo laikas' },
          { value: '70%', label: 'Auto-išspręsta' },
        ],
      },
      lentvario: {
        badge: 'B2B / Inventorius',
        title: 'Lentvario Mediena',
        subtitle: 'Realaus Laiko Inventorius + Kainų Skaičiuoklė',
        description: 'AI chatbotas prijungtas prie inventoriaus sistemos. Tikrina prieinamumą, skaičiuoja kiekius ir kainas, perduoda kvalifikuotus kontaktus pardavimams.',
        results: [
          { value: 'Live', label: 'Inventoriaus sync' },
          { value: 'Auto', label: 'Kainų skaič.' },
          { value: '100%', label: 'Kvalif. kontaktai' },
          { value: '-70%', label: 'Atsakymo laikas' },
        ],
        link: 'Peržiūrėti Studiją',
      },
    },
    features: {
      title: 'Ką Gali Jūsų Botas',
      items: [
        { title: 'Atsakyti Akimirksniu', desc: 'Atsakymas per sekundes, kad klientai neišeitų' },
        { title: 'Rasti Informaciją', desc: 'Ieško jūsų svetainėje, produktuose ir žinių bazėje' },
        { title: 'Spręsti Klausimus', desc: 'Tvarko dažnas problemas be žmogaus' },
        { title: 'Rinkti Kontaktus', desc: 'Surenka vardą, el. paštą, telefoną su kontekstu' },
        { title: 'Protingai Perduoti', desc: 'Perduoda sudėtingus atvejus su visa pokalbio istorija' },
        { title: 'Mokytis ir Tobulėti', desc: 'Tampa protingesnis laikui bėgant su jūsų duomenimis' },
      ],
    },
    cta: {
      title: 'Pasiruošę Automatizuoti?',
      subtitle: 'Rezervuokite nemokamą pokalbį. Parodysime, ką galima automatizuoti jūsų versle.',
      button: 'Rezervuoti Pokalbį',
    },
  },
};

export default function AIAutomationsPage() {
  const locale = useLocale();
  const content = locale === 'lt' ? t.lt : t.en;
  const [activeCategory, setActiveCategory] = useState('chatbots');

  const scrollToCalendly = () => {
    window.location.href = '/#book-call';
  };

  const categoryKeys = ['chatbots', 'automations', 'sales', 'custom'] as const;

  const categoryIcons: Record<string, JSX.Element> = {
    chatbots: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    automations: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    sales: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    custom: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                {content.hero.badge}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {content.hero.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                {content.hero.subtitle}
              </p>

              {/* Problem statement */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
                <div className="space-y-2 text-lg">
                  <p className="text-red-400">{content.problem.slow}</p>
                  <p className="text-green-400">{content.problem.fast}</p>
                  <p className="text-white font-semibold">{content.problem.simple}</p>
                </div>
              </div>

              <motion.button
                onClick={scrollToCalendly}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all text-lg shadow-lg shadow-purple-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {content.hero.cta}
                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Right - Interactive Chat Demo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <RideOnChatDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-6 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-white text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">&lt; 5s</div>
              <div className="text-sm text-white/80">{content.hero.stat1}</div>
            </div>
            <div className="border-x border-white/20">
              <div className="text-2xl md:text-3xl font-bold">454+</div>
              <div className="text-sm text-white/80">{content.hero.stat2}</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">24/7</div>
              <div className="text-sm text-white/80">{content.hero.stat3}</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
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
              {content.categoriesTitle}
            </h2>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {categoryIcons[cat]}
                {content.categories[cat as keyof typeof content.categories].name}
              </button>
            ))}
          </div>

          {/* Category Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Description */}
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {content.categories[activeCategory as keyof typeof content.categories].description}
                </p>
              </div>

              {/* Use Cases */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {content.categories[activeCategory as keyof typeof content.categories].items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {locale === 'lt' ? 'Pagrindiniai Privalumai' : 'Key Benefits'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {content.categories[activeCategory as keyof typeof content.categories].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.caseStudies.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* RideOn Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl overflow-hidden border border-purple-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                {/* Header with Logo */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="relative w-32 h-8 flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/images/rideon-logo.png"
                      alt="RideOn logo"
                      fill
                      className="object-contain object-left"
                      sizes="128px"
                    />
                  </motion.div>
                  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {content.caseStudies.rideon.badge}
                  </div>
                </div>
                <p className="text-purple-600 font-medium mb-3">
                  {content.caseStudies.rideon.subtitle}
                </p>
                <p className="text-gray-600 mb-6 text-sm">
                  {content.caseStudies.rideon.description}
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {content.caseStudies.rideon.results.map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm">
                      <div className="text-lg font-bold text-purple-600">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Lentvario Case Study */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden border border-amber-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                {/* Header with Logo */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="relative w-14 h-14 flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src="/images/lentvario-logo.png"
                      alt="Lentvario Mediena logo"
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </motion.div>
                  <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    {content.caseStudies.lentvario.badge}
                  </div>
                </div>
                <p className="text-amber-600 font-medium mb-3">
                  {content.caseStudies.lentvario.subtitle}
                </p>
                <p className="text-gray-600 mb-6 text-sm">
                  {content.caseStudies.lentvario.description}
                </p>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {content.caseStudies.lentvario.results.map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm">
                      <div className="text-lg font-bold text-amber-600">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/${locale}/case-studies/lentvario-mediena`}
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 group"
                >
                  {content.caseStudies.lentvario.link}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              {content.features.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

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
              onClick={scrollToCalendly}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.cta.button}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
