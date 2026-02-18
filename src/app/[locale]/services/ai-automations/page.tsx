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
    solutions: {
      title: 'What We Build',
      items: [
        {
          title: 'AI Chatbots',
          problem: 'Stop answering the same questions',
          solution: 'Chatbot handles FAQs, finds product info, collects leads — 24/7',
          results: ['Instant responses', 'Works while you sleep', 'Handles 70%+ of inquiries'],
        },
        {
          title: 'Workflow Automation',
          problem: 'Stop copy-pasting between tools',
          solution: 'Connect your systems so data flows automatically',
          results: ['Zero manual entry', 'No more errors', 'Hours saved daily'],
        },
        {
          title: 'Lead Follow-up',
          problem: 'Stop letting leads go cold',
          solution: 'Automatic follow-ups until you close or they say no',
          results: ['No lead forgotten', 'Consistent outreach', 'More conversions'],
        },
      ],
    },
    caseStudies: {
      title: 'Real Results',
      rideon: {
        badge: 'E-commerce',
        problem: 'Couldn\'t respond to customer questions fast enough',
        solution: 'AI chatbot that answers in seconds, finds products, handles 70% of inquiries',
        results: [
          { value: '454', label: 'Conversations handled' },
          { value: '< 5s', label: 'Response time' },
          { value: '70%', label: 'Auto-resolved' },
          { value: '24/7', label: 'Availability' },
        ],
      },
      lentvario: {
        badge: 'B2B Manufacturing',
        problem: 'Manual price quotes taking too long',
        solution: 'Chatbot connected to inventory, calculates prices instantly',
        results: [
          { value: 'Live', label: 'Inventory sync' },
          { value: 'Auto', label: 'Price calculation' },
          { value: '-70%', label: 'Response time' },
          { value: '100%', label: 'Qualified leads' },
        ],
        link: 'View Case Study',
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
    solutions: {
      title: 'Ką Kuriame',
      items: [
        {
          title: 'AI Chatbotai',
          problem: 'Nustokite atsakinėti į tuos pačius klausimus',
          solution: 'Chatbotas tvarko DUK, randa produktų info, renka kontaktus — 24/7',
          results: ['Momentiniai atsakymai', 'Dirba kol jūs miegate', 'Aptarnauja 70%+ užklausų'],
        },
        {
          title: 'Darbo Eigos',
          problem: 'Nustokite kopijuoti duomenis tarp įrankių',
          solution: 'Sujungiame jūsų sistemas, kad duomenys tekėtų automatiškai',
          results: ['Jokio rankinio įvedimo', 'Jokių klaidų', 'Sutaupytos valandos kasdien'],
        },
        {
          title: 'Lead Follow-up',
          problem: 'Nustokite prarasti potencialius klientus',
          solution: 'Automatiniai follow-up\'ai kol uždarote arba jie atsisako',
          results: ['Nė vienas lead nepamirštas', 'Nuoseklus bendravimas', 'Daugiau konversijų'],
        },
      ],
    },
    caseStudies: {
      title: 'Realūs Rezultatai',
      rideon: {
        badge: 'E-komercija',
        problem: 'Nespėjo atsakyti į klientų klausimus pakankamai greitai',
        solution: 'AI chatbotas, atsakantis per sekundes, randantis produktus, aptarnaujantis 70% užklausų',
        results: [
          { value: '454', label: 'Aptarnauta pokalbių' },
          { value: '< 5s', label: 'Atsakymo laikas' },
          { value: '70%', label: 'Auto-išspręsta' },
          { value: '24/7', label: 'Pasiekiamumas' },
        ],
      },
      lentvario: {
        badge: 'B2B Gamyba',
        problem: 'Rankinės kainų pasiūlymai užtruko per ilgai',
        solution: 'Chatbotas prijungtas prie inventoriaus, skaičiuoja kainas akimirksniu',
        results: [
          { value: 'Live', label: 'Inventoriaus sync' },
          { value: 'Auto', label: 'Kainų skaičiavimas' },
          { value: '-70%', label: 'Atsakymo laikas' },
          { value: '100%', label: 'Kvalif. kontaktai' },
        ],
        link: 'Peržiūrėti Studiją',
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                {content.hero.badge}
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid md:grid-cols-4 gap-6">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-purple-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
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
              {content.solutions.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.solutions.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-red-600 font-medium text-sm mb-1">{locale === 'lt' ? 'Problema:' : 'Problem:'}</p>
                    <p className="text-gray-700">{item.problem}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-green-600 font-medium text-sm mb-1">{locale === 'lt' ? 'Sprendimas:' : 'Solution:'}</p>
                    <p className="text-gray-700">{item.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <ul className="space-y-2">
                      {item.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
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

          <div className="grid lg:grid-cols-2 gap-8">
            {/* RideOn */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-32 h-8 flex-shrink-0">
                  <Image src="/images/rideon-logo.png" alt="RideOn logo" fill className="object-contain object-left" sizes="128px" />
                </div>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  {content.caseStudies.rideon.badge}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-red-600 font-medium text-sm mb-1">{locale === 'lt' ? 'Problema:' : 'Problem:'}</p>
                <p className="text-gray-700">{content.caseStudies.rideon.problem}</p>
              </div>
              <div className="mb-6">
                <p className="text-green-600 font-medium text-sm mb-1">{locale === 'lt' ? 'Sprendimas:' : 'Solution:'}</p>
                <p className="text-gray-700">{content.caseStudies.rideon.solution}</p>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {content.caseStudies.rideon.results.map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm">
                    <div className="text-lg font-bold text-purple-600">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Lentvario */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image src="/images/lentvario-logo.png" alt="Lentvario Mediena logo" fill className="object-contain" sizes="56px" />
                </div>
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                  {content.caseStudies.lentvario.badge}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-red-600 font-medium text-sm mb-1">{locale === 'lt' ? 'Problema:' : 'Problem:'}</p>
                <p className="text-gray-700">{content.caseStudies.lentvario.problem}</p>
              </div>
              <div className="mb-6">
                <p className="text-green-600 font-medium text-sm mb-1">{locale === 'lt' ? 'Sprendimas:' : 'Solution:'}</p>
                <p className="text-gray-700">{content.caseStudies.lentvario.solution}</p>
              </div>

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
