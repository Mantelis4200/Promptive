'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import RelatedSolutions from '@/components/RelatedSolutions';
import StructuredData from '@/components/StructuredData';

// RideOn Chatbot Demo Component
function RideOnChatDemo({ isLT }: { isLT: boolean }) {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    { id: 1, isBot: true, text: isLT ? 'Sveiki! Kuo galiu padeti?' : 'Hi! How can I help you?' },
    { id: 2, isBot: false, text: isLT ? 'Koks EB-12 variklio galingumas?' : 'What is the EB-12 motor power?' },
    { id: 3, isBot: true, text: isLT
      ? 'EB-12 turi 500W variklj, 50 km nuotolj ir 20Ah 48V baterija. Kaina: €1,299. Ar noretumete uzsisakyti?'
      : 'The EB-12 has a 500W motor, 50km range, and 20Ah 48V battery. Price: €1,299. Would you like to order?'
    },
  ];

  useEffect(() => {
    const showMessage = (index: number) => {
      if (index >= messages.length) {
        setTimeout(() => {
          setVisibleMessages(0);
          showMessage(0);
        }, 3000);
        return;
      }
      if (index > 0 && messages[index].isBot) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(index + 1);
          setTimeout(() => showMessage(index + 1), 2000);
        }, 1200);
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
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
            🛵
          </div>
          <div>
            <p className="text-white font-semibold text-sm">RideOn {isLT ? 'Asistentas' : 'Assistant'}</p>
            <p className="text-white/70 text-xs">{isLT ? 'Atsako per sekundes' : 'Responds instantly'}</p>
          </div>
        </div>
        <div className="h-56 p-4 space-y-3 bg-gray-50 overflow-hidden">
          <AnimatePresence>
            {messages.slice(0, visibleMessages).map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                  msg.isBot ? 'bg-white text-gray-800 shadow-sm border border-gray-100' : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
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
      </div>
    </div>
  );
}

const t = {
  en: {
    hero: {
      badge: 'AI Agents & Automations',
      title: 'Your Team Wastes 20+ Hours/Week on Tasks AI Can Do',
      subtitle: 'We build AI agents and automations that handle repetitive work — so your team focuses on what matters.',
      cta: 'Book Free Consultation',
    },
    problems: {
      title: 'Problems We Solve',
      items: [
        { icon: '💬', problem: 'Same questions asked 50x/day', solution: 'AI chatbot answers instantly, 24/7' },
        { icon: '📋', problem: 'Copy-pasting data between systems', solution: 'Automated sync between all your tools' },
        { icon: '📞', problem: 'Leads slip through the cracks', solution: 'Auto follow-up within minutes' },
        { icon: '⏰', problem: 'Hours spent on admin tasks', solution: 'AI handles scheduling, invoices, reports' },
      ],
    },
    chatbot: {
      badge: 'AI Chatbots',
      title: 'AI Chatbots That Actually Work',
      subtitle: 'Not just FAQ bots. Our chatbots know your products, prices, and inventory — and can take action.',
      benefits: [
        'Trained on YOUR data (products, pricing, policies)',
        'Answers in seconds, not hours',
        'Collects leads and books appointments',
        'Works 24/7 — never takes a break',
      ],
      demo: 'Live Demo: RideOn E-Bikes',
    },
    automations: {
      title: 'What We Automate',
      subtitle: 'Using n8n, Make, and custom AI — we connect your systems.',
      items: [
        { title: 'Lead Follow-up', desc: 'New lead → instant email + CRM update + Slack notification' },
        { title: 'Order Processing', desc: 'Order received → invoice sent → inventory updated → shipping notified' },
        { title: 'Data Sync', desc: 'Keep CRM, spreadsheets, and databases in perfect sync' },
        { title: 'Reporting', desc: 'Auto-generate daily/weekly reports from multiple sources' },
      ],
    },
    process: {
      title: 'How It Works',
      steps: [
        { num: '1', title: 'Free Call', desc: 'We identify your biggest time-wasters' },
        { num: '2', title: 'Plan', desc: 'We design the AI agent or automation' },
        { num: '3', title: 'Build', desc: 'We build, test, and integrate' },
        { num: '4', title: 'Launch', desc: 'Go live with 30-day support' },
      ],
    },
    results: {
      title: 'Real Results',
      items: [
        { metric: '70%', label: 'Less support tickets', company: 'Kilo Health' },
        { metric: '15h', label: 'Saved per week', company: 'RideOn' },
        { metric: '24/7', label: 'Customer support', company: 'Multiple clients' },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        { id: 'a1', question: 'How much does it cost?', answer: 'Simple automations start at €497. AI chatbots typically €1,500–€3,000. Complex AI agents €3,000–€5,000+. We give exact quotes after understanding your needs.' },
        { id: 'a2', question: 'How long to implement?', answer: 'Automations: 1–2 weeks. AI chatbots: 2–3 weeks. Complex systems: 4–6 weeks.' },
        { id: 'a3', question: 'Will it replace my team?', answer: 'No. It handles the boring stuff so your team can focus on strategy, relationships, and creative work.' },
        { id: 'a4', question: 'Is my data secure?', answer: 'Yes. We can self-host everything on your servers. Your data never leaves your infrastructure.' },
      ],
    },
    cta: {
      title: 'Ready to Stop Wasting Time?',
      subtitle: 'Book a free 20-min call. We\'ll identify what to automate and give you a clear plan.',
      button: 'Book Free Consultation',
      note: 'No commitment • Honest assessment • Clear next steps',
    },
  },
  lt: {
    hero: {
      badge: 'AI agentai ir automatizacijos',
      title: 'Jusu komanda eikvoja 20+ val./sav. darbams, kuriuos gali atlikti AI',
      subtitle: 'Kuriame AI agentus ir automatizacijas, kurios atlieka pasikartojanti darba — kad komanda galetu susitelkti i svarbiausius dalykus.',
      cta: 'Nemokama konsultacija',
    },
    problems: {
      title: 'Problemos, kurias sprendziame',
      items: [
        { icon: '💬', problem: 'Tie patys klausimai 50x/diena', solution: 'AI chatbotas atsako akimirksniu, 24/7' },
        { icon: '📋', problem: 'Duomenu kopijavimas tarp sistemu', solution: 'Automatinis sync tarp visu irankiu' },
        { icon: '📞', problem: 'Uzklausos pasimeta', solution: 'Automatinis follow-up per kelias minutes' },
        { icon: '⏰', problem: 'Valandos admin darbams', solution: 'AI tvarko kalendoriu, saskaitas, ataskaitas' },
      ],
    },
    chatbot: {
      badge: 'AI Chatbotai',
      title: 'AI chatbotai, kurie tikrai veikia',
      subtitle: 'Ne tik DUK botai. Musu chatbotai zino jusu produktus, kainas ir sandelio likucius — ir gali imtis veiksmu.',
      benefits: [
        'Apmokyti JUSU duomenimis (produktai, kainos, taisykles)',
        'Atsako per sekundes, ne valandas',
        'Renka kontaktus ir rezervuoja vizitus',
        'Dirba 24/7 — niekada neatostogauja',
      ],
      demo: 'Gyvas demo: RideOn E-Bikes',
    },
    automations: {
      title: 'Ka automatizuojame',
      subtitle: 'Naudodami n8n, Make ir individualu AI — sujungiame jusu sistemas.',
      items: [
        { title: 'Lead sekimas', desc: 'Nauja uzklausas → el. laiskas + CRM + Slack pranesimas' },
        { title: 'Uzsakymu apdorojimas', desc: 'Uzsakymas → saskaita → atsargos → kurjeris' },
        { title: 'Duomenu sync', desc: 'CRM, lenteles ir duomenu bazes visada sinchronizuotos' },
        { title: 'Ataskaitos', desc: 'Auto ataskaitos kas diena/savaite is visu saltiniu' },
      ],
    },
    process: {
      title: 'Kaip tai veikia',
      steps: [
        { num: '1', title: 'Pokalbis', desc: 'Nustatome didziausius laiko eikvojimus' },
        { num: '2', title: 'Planas', desc: 'Suprojektuojame AI agenta ar automatizacija' },
        { num: '3', title: 'Kurimas', desc: 'Sukuriame, testuojame, integruojame' },
        { num: '4', title: 'Paleidimas', desc: 'Startas su 30 dienu palaikymu' },
      ],
    },
    results: {
      title: 'Realus rezultatai',
      items: [
        { metric: '70%', label: 'Maziau aptarnavimo uzklaususu', company: 'Kilo Health' },
        { metric: '15h', label: 'Sutaupyta per savaite', company: 'RideOn' },
        { metric: '24/7', label: 'Klientu aptarnavimas', company: 'Keli klientai' },
      ],
    },
    faq: {
      title: 'DUK',
      items: [
        { id: 'a1', question: 'Kiek kainuoja?', answer: 'Paprastos automatizacijos nuo €497. AI chatbotai €1 500–€3 000. Sudetingi AI agentai €3 000–€5 000+. Tikslia kaina pateikiame suprate poreikius.' },
        { id: 'a2', question: 'Kiek uzima igyvendinimas?', answer: 'Automatizacijos: 1–2 savaites. AI chatbotai: 2–3 savaites. Sudetingos sistemos: 4–6 savaites.' },
        { id: 'a3', question: 'Ar tai pakeis mano komanda?', answer: 'Ne. Tai atlieka nuobodzius darbus, kad komanda galetu susitelkti i strategija ir santykius.' },
        { id: 'a4', question: 'Ar duomenys saugus?', answer: 'Taip. Galime talpinti viska jusu serveriuose. Duomenys niekada nepalieka jusu infrastrukturos.' },
      ],
    },
    cta: {
      title: 'Pasiruose nustoti eikgiti laiko?',
      subtitle: 'Uzsierezervuokite nemokama 20 min. pokalbi. Nustatysime, ka automatizuoti, ir pateiksime aisksu plana.',
      button: 'Nemokama konsultacija',
      note: 'Be isipareigoimu • Saziningas vertinimas • Aiskus planas',
    },
  },
};

export default function AIAgentaiAutomatizacijosPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const isLT = locale === 'lt';

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <StructuredData type="service" data={{ name: isLT ? 'AI Agentai ir Automatizacijos' : 'AI Agents & Automations' }} page="ai-agentai-automatizacijos" />
      <Header />
      <Breadcrumb currentPage={isLT ? 'AI agentai ir automatizacijos' : 'AI Agents & Automations'} />

      {/* Hero - Direct, Problem-focused */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              {c.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{c.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{c.hero.subtitle}</p>
            <motion.a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all text-lg shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {c.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve - Visual Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {c.problems.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {c.problems.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full" />
                      <p className="text-gray-700 font-medium">{item.problem}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      <p className="text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbots Section with Demo */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />
                {c.chatbot.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.chatbot.title}</h2>
              <p className="text-gray-300 mb-8">{c.chatbot.subtitle}</p>
              <ul className="space-y-3">
                {c.chatbot.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-purple-300 text-sm font-medium text-center mb-4">{c.chatbot.demo}</p>
              <RideOnChatDemo isLT={isLT} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.automations.title}</h2>
            <p className="text-lg text-gray-600">{c.automations.subtitle}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.automations.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm font-mono bg-gray-100 rounded-lg px-3 py-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Simple 4 Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {c.process.title}
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {c.process.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            {c.results.title}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.results.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <p className="text-gray-700 font-medium">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={c.faq.items} title={c.faq.title} />

      <RelatedSolutions currentPage="ai-agentai-automatizacijos" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
