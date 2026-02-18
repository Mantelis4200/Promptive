'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">🛵</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">RideOn Konsultantas</p>
              <p className="text-white/70 text-xs">{isLT ? 'Atsakau per sekundes' : 'Responds in seconds'}</p>
            </div>
          </div>
        </div>

        <div className="h-64 p-4 space-y-3 bg-gray-50">
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

          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
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

        <div className="p-3 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder={isLT ? 'Įveskite žinutę...' : 'Type a message...'}
              className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none"
              readOnly
            />
            <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white">
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

const t = {
  en: {
    hero: {
      badge: 'AI Automation',
      title: 'Stop Wasting Time on Work That Can Be Automated',
      subtitle: 'Your team spends hours on repetitive tasks. We help you get that time back.',
      cta: 'Book Free Consultation',
    },
    problems: {
      title: 'Does This Sound Familiar?',
      subtitle: 'These are the problems we solve every day.',
      items: [
        {
          problem: 'Answering the same questions over and over',
          pain: 'Customer asks "What are your hours?" for the 50th time today.',
        },
        {
          problem: 'Copy-pasting data between systems',
          pain: 'Moving info from emails to spreadsheets to CRM manually.',
        },
        {
          problem: 'Forgetting to follow up with leads',
          pain: 'Potential customers slip through the cracks.',
        },
        {
          problem: 'No time for important work',
          pain: 'Stuck in admin tasks instead of growing the business.',
        },
      ],
    },
    process: {
      title: 'How We Work',
      subtitle: 'Simple process. Real results.',
      steps: [
        {
          number: '1',
          title: 'Free Consultation',
          description: 'We talk about your business and identify what eats up your time.',
        },
        {
          number: '2',
          title: 'Custom Plan',
          description: 'We design a solution tailored to your specific problems.',
        },
        {
          number: '3',
          title: 'Build & Test',
          description: 'We build the automation and test it thoroughly.',
        },
        {
          number: '4',
          title: 'Launch & Support',
          description: 'We deploy and make sure everything runs smoothly.',
        },
      ],
    },
    chatbots: {
      title: 'AI Chatbots',
      subtitle: 'Your 24/7 customer service team',
      benefits: [
        { title: 'Instant Answers', description: 'Respond to customers in seconds, not hours' },
        { title: 'Always Available', description: 'Works nights, weekends, holidays — never takes a break' },
        { title: 'Trained on Your Data', description: 'Knows your products, prices, and policies' },
        { title: 'Collects Leads', description: 'Captures contact info from interested visitors' },
      ],
      useCases: ['FAQ automation', 'Product recommendations', 'Order tracking', 'Appointment booking', 'Lead qualification', 'Price quotes'],
    },
    solutions: {
      title: 'What We Can Automate',
      subtitle: 'We use tools like n8n, Make, and custom AI to connect your systems.',
      categories: [
        {
          title: 'Customer Communication',
          icon: 'chat',
          items: ['AI Chatbots (website, WhatsApp, Messenger)', 'Automatic email responses', 'Appointment scheduling', 'Review request automation'],
        },
        {
          title: 'Data & Documents',
          icon: 'data',
          items: ['Sync data between CRM, sheets, and databases', 'Auto-generate reports and invoices', 'Extract info from emails and PDFs', 'Keep inventory in sync'],
        },
        {
          title: 'Sales & Leads',
          icon: 'sales',
          items: ['Automatic follow-up sequences', 'CRM updates without manual entry', 'Price quote generation', 'Lead scoring and qualification'],
        },
        {
          title: 'Internal Operations',
          icon: 'ops',
          items: ['Employee onboarding workflows', 'Approval automations', 'Task assignment and tracking', 'Notification systems'],
        },
      ],
      cta: 'Not sure what can be automated? We\'ll help you find out.',
    },
    caseStudies: {
      title: 'Real Results',
      timeSavedLabel: 'Time saved:',
      rideon: {
        badge: 'E-commerce',
        problem: 'Customer service team was spending most of their day answering the same product questions over and over — specs, availability, pricing. Response times were slow and customers were frustrated.',
        solution: 'We built an AI chatbot trained on their entire product catalog. It instantly answers questions about any of their 500+ products, finds alternatives, and collects contact info from interested buyers.',
        timeSaved: '~20 hours/week',
        results: [
          { value: '70%', label: 'Inquiries automated' },
          { value: '< 5s', label: 'Response time' },
          { value: '24/7', label: 'Availability' },
        ],
      },
      lentvario: {
        badge: 'B2B Manufacturing',
        problem: 'Sales team was manually calculating prices for custom wood orders. Each quote required checking inventory, calculating board meters, and applying customer-specific pricing. A single quote could take 30+ minutes.',
        solution: 'We connected a chatbot directly to their inventory system. Now it automatically checks stock levels, calculates exact prices based on dimensions, and generates quotes instantly — even outside business hours.',
        timeSaved: '~15 hours/week',
        results: [
          { value: '-70%', label: 'Quote time' },
          { value: 'Live', label: 'Inventory sync' },
          { value: '100%', label: 'Lead capture' },
        ],
      },
    },
    cta: {
      title: 'Ready to Save Time?',
      subtitle: 'Book a free consultation. We\'ll identify what can be automated in your business — no strings attached.',
      button: 'Book Free Consultation',
      note: '30-min call • Custom recommendations • No commitment',
    },
  },
  lt: {
    hero: {
      badge: 'AI Automatizacija',
      title: 'Nustokite Švaistyti Laiką Darbui, Kurį Galima Automatizuoti',
      subtitle: 'Jūsų komanda praleidžia valandas rutininiams darbams. Mes padedame tą laiką susigrąžinti.',
      cta: 'Nemokama Konsultacija',
    },
    problems: {
      title: 'Ar Tai Skamba Pažįstamai?',
      subtitle: 'Šias problemas sprendžiame kiekvieną dieną.',
      items: [
        {
          problem: 'Atsakinėjimas į tuos pačius klausimus',
          pain: 'Klientas klausia "Kokios jūsų darbo valandos?" 50-ą kartą šiandien.',
        },
        {
          problem: 'Duomenų kopijavimas tarp sistemų',
          pain: 'Informacijos perkėlimas iš el. laiškų į lenteles, į CRM rankiniu būdu.',
        },
        {
          problem: 'Pamiršti susisiekti su potencialiais klientais',
          pain: 'Potencialūs klientai prasprūsta pro pirštus.',
        },
        {
          problem: 'Nėra laiko svarbiam darbui',
          pain: 'Įstrigę administraciniuose darbuose vietoj verslo augimo.',
        },
      ],
    },
    process: {
      title: 'Kaip Dirbame',
      subtitle: 'Paprastas procesas. Tikri rezultatai.',
      steps: [
        {
          number: '1',
          title: 'Nemokama Konsultacija',
          description: 'Kalbamės apie jūsų verslą ir nustatome, kas eikvoja jūsų laiką.',
        },
        {
          number: '2',
          title: 'Individualus Planas',
          description: 'Suprojektuojame sprendimą pritaikytą jūsų konkrečioms problemoms.',
        },
        {
          number: '3',
          title: 'Kūrimas ir Testavimas',
          description: 'Sukuriame automatizaciją ir kruopščiai ją išbandome.',
        },
        {
          number: '4',
          title: 'Paleidimas ir Palaikymas',
          description: 'Paleidžiame ir užtikriname, kad viskas veiktų sklandžiai.',
        },
      ],
    },
    chatbots: {
      title: 'AI Chatbotai',
      subtitle: 'Jūsų 24/7 klientų aptarnavimo komanda',
      benefits: [
        { title: 'Momentiniai Atsakymai', description: 'Atsakome klientams per sekundes, ne valandas' },
        { title: 'Visada Pasiekiami', description: 'Dirba naktimis, savaitgaliais, švenčių dienomis' },
        { title: 'Apmokyti Jūsų Duomenimis', description: 'Žino jūsų produktus, kainas ir politikas' },
        { title: 'Renka Kontaktus', description: 'Surenka kontaktus iš suinteresuotų lankytojų' },
      ],
      useCases: ['DUK automatizavimas', 'Produktų rekomendacijos', 'Užsakymų sekimas', 'Vizitų rezervavimas', 'Lead kvalifikavimas', 'Kainų pasiūlymai'],
    },
    solutions: {
      title: 'Ką Galime Automatizuoti',
      subtitle: 'Naudojame n8n, Make ir individualius AI sprendimus jūsų sistemoms sujungti.',
      categories: [
        {
          title: 'Klientų Komunikacija',
          icon: 'chat',
          items: ['AI Chatbotai (svetainė, WhatsApp, Messenger)', 'Automatiniai el. pašto atsakymai', 'Vizitų rezervavimas', 'Atsiliepimų prašymo automatizacija'],
        },
        {
          title: 'Duomenys ir Dokumentai',
          icon: 'data',
          items: ['Duomenų sinchronizavimas tarp CRM, lentelių, DB', 'Automatinis ataskaitų ir sąskaitų generavimas', 'Informacijos ištraukimas iš el. laiškų/PDF', 'Inventoriaus sinchronizavimas'],
        },
        {
          title: 'Pardavimai ir Kontaktai',
          icon: 'sales',
          items: ['Automatinės follow-up sekos', 'CRM atnaujinimai be rankinio įvedimo', 'Kainų pasiūlymų generavimas', 'Lead vertinimas ir kvalifikavimas'],
        },
        {
          title: 'Vidinės Operacijos',
          icon: 'ops',
          items: ['Darbuotojų įvedimo procesai', 'Patvirtinimo automatizacijos', 'Užduočių priskyrimas ir sekimas', 'Pranešimų sistemos'],
        },
      ],
      cta: 'Nežinote, ką galima automatizuoti? Padėsime išsiaiškinti.',
    },
    caseStudies: {
      title: 'Realūs Rezultatai',
      timeSavedLabel: 'Sutaupyta laiko:',
      rideon: {
        badge: 'E-komercija',
        problem: 'Klientų aptarnavimo komanda didžiąją dienos dalį praleisdavo atsakinėdama į tuos pačius klausimus apie produktus — specifikacijas, prieinamumą, kainas. Atsakymo laikas buvo lėtas, klientai nepatenkinti.',
        solution: 'Sukūrėme AI chatbotą, apmokytą visame produktų kataloge. Jis akimirksniu atsako į klausimus apie bet kurį iš 500+ produktų, randa alternatyvas ir surenka kontaktinius duomenis iš suinteresuotų pirkėjų.',
        timeSaved: '~20 val./sav.',
        results: [
          { value: '70%', label: 'Užklausų automatizuota' },
          { value: '< 5s', label: 'Atsakymo laikas' },
          { value: '24/7', label: 'Pasiekiamumas' },
        ],
      },
      lentvario: {
        badge: 'B2B Gamyba',
        problem: 'Pardavimų komanda rankiniu būdu skaičiavo kainas individualiems medienos užsakymams. Kiekvienam pasiūlymui reikėjo patikrinti inventorių, apskaičiuoti kubatūrą ir pritaikyti kliento kainas. Vienas pasiūlymas galėjo užtrukti 30+ minučių.',
        solution: 'Prijungėme chatbotą tiesiogiai prie jų inventoriaus sistemos. Dabar jis automatiškai tikrina sandėlio likučius, skaičiuoja tikslias kainas pagal matmenis ir generuoja pasiūlymus akimirksniu — net ir po darbo valandų.',
        timeSaved: '~15 val./sav.',
        results: [
          { value: '-70%', label: 'Pasiūlymo laikas' },
          { value: 'Live', label: 'Inventoriaus sync' },
          { value: '100%', label: 'Lead surinkimas' },
        ],
      },
    },
    cta: {
      title: 'Pasiruošę Taupyti Laiką?',
      subtitle: 'Rezervuokite nemokamą konsultaciją. Nustatysime, ką galima automatizuoti jūsų versle — be jokių įsipareigojimų.',
      button: 'Nemokama Konsultacija',
      note: '30 min pokalbis • Individualios rekomendacijos • Be įsipareigojimų',
    },
  },
};

export default function AIAutomationsPage() {
  const locale = useLocale();
  const content = locale === 'lt' ? t.lt : t.en;

  const scrollToContact = () => {
    window.location.href = `/${locale}/contact`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Matching main page */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-gray-50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear_gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/90 font-medium">{content.hero.badge}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {content.hero.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                {content.hero.subtitle}
              </p>

              <motion.button
                onClick={scrollToContact}
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

      {/* Problems Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.problems.title}
            </h2>
            <p className="text-lg text-gray-600">{content.problems.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.problems.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.problem}</h3>
                    <p className="text-gray-500 text-sm italic">&ldquo;{item.pain}&rdquo;</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbots Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {content.chatbots.title}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.chatbots.subtitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {content.chatbots.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 border border-purple-100 shadow-sm"
              >
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {content.chatbots.useCases.map((useCase, index) => (
              <span key={index} className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-200">
                {useCase}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.solutions.title}
            </h2>
            <p className="text-lg text-gray-600">{content.solutions.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.solutions.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    {category.icon === 'chat' && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    )}
                    {category.icon === 'data' && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    )}
                    {category.icon === 'sales' && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                    {category.icon === 'ops' && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 mt-8"
          >
            {content.solutions.cta}
          </motion.p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.process.title}
            </h2>
            <p className="text-lg text-gray-600">{content.process.subtitle}</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-stretch gap-3">
            {content.process.steps.map((step, index) => (
              <div key={index} className="flex items-center flex-1 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex-1 h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
                {index < 3 && (
                  <div className="hidden md:flex items-center text-purple-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              {content.caseStudies.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* RideOn */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden hover:border-purple-400 hover:shadow-xl transition-all group"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
                <div className="flex items-center justify-between">
                  <div className="relative w-28 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image src="/images/rideon-logo.png" alt="RideOn logo" fill className="object-contain object-left brightness-0 invert" sizes="112px" />
                  </div>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {content.caseStudies.rideon.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{content.caseStudies.rideon.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{content.caseStudies.rideon.solution}</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                  <p className="text-green-700 font-bold text-center">
                    <span className="text-green-600 font-medium">{content.caseStudies.timeSavedLabel}</span> {content.caseStudies.rideon.timeSaved}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {content.caseStudies.rideon.results.map((stat, i) => (
                    <div key={i} className="bg-purple-50 rounded-xl p-3 text-center">
                      <div className="text-xl font-bold text-purple-600">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Lentvario */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all group"
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4">
                <div className="flex items-center justify-between">
                  <div className="relative w-14 h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image src="/images/lentvario-logo.png" alt="Lentvario Mediena logo" fill className="object-contain" sizes="56px" />
                  </div>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {content.caseStudies.lentvario.badge}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{content.caseStudies.lentvario.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{content.caseStudies.lentvario.solution}</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                  <p className="text-green-700 font-bold text-center">
                    <span className="text-green-600 font-medium">{content.caseStudies.timeSavedLabel}</span> {content.caseStudies.lentvario.timeSaved}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {content.caseStudies.lentvario.results.map((stat, i) => (
                    <div key={i} className="bg-amber-50 rounded-xl p-3 text-center">
                      <div className="text-xl font-bold text-amber-600">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
