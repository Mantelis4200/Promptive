'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import RelatedSolutions from '@/components/RelatedSolutions';
import StructuredData from '@/components/StructuredData';

const t = {
  en: {
    hero: {
      badge: 'AI Agents & Automations',
      title: 'AI Agents & Automations: Less Manual Work, More Growth',
      subtitle: 'For businesses ready to stop losing time on repetitive tasks. We build AI agents and automation systems that handle the work your team shouldn\'t be doing manually.',
      benefits: [
        'Custom AI agents trained on your business data',
        'End-to-end automation of repetitive workflows',
        'Integrations with your existing CRM, email, and tools',
      ],
      cta: 'Book Consultation',
    },
    process: {
      title: 'How It Works',
      steps: [
        { number: '1', title: 'Free Consultation', description: 'We identify which processes waste the most time and where AI can help.', duration: '30 min' },
        { number: '2', title: 'Custom Plan', description: 'We design the AI agent or automation flow tailored to your workflows.', duration: '3\u20135 days' },
        { number: '3', title: 'Build & Test', description: 'We build, integrate with your systems, and test with real scenarios.', duration: '1\u20133 weeks' },
        { number: '4', title: 'Launch & Support', description: 'We deploy, train your team, and provide ongoing support.', duration: '30 days' },
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        { title: 'AI Agents', description: 'Intelligent agents that answer questions, qualify leads, process documents, and make decisions based on your data.' },
        { title: 'Workflow Automations', description: 'Automated workflows connecting your CRM, email, calendar, and other tools \u2014 running 24/7.' },
        { title: 'Custom Integrations', description: 'API connections between systems that don\'t natively talk to each other.' },
        { title: 'Training & Documentation', description: 'Your team knows how to use, monitor, and adjust the systems we build.' },
      ],
    },
    integrations: {
      title: 'Integrations',
      subtitle: 'We connect your existing tools into automated workflows.',
      categories: [
        { name: 'CRM', tools: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'Email', tools: 'Gmail, Outlook, SendGrid' },
        { name: 'Calendar', tools: 'Google Calendar, Calendly' },
        { name: 'Payments', tools: 'Stripe, PayPal, bank APIs' },
        { name: 'APIs', tools: 'REST, GraphQL, webhooks' },
        { name: 'Automation', tools: 'n8n, Make, Zapier' },
      ],
    },
    useCases: {
      title: 'Who This Is For',
      items: [
        { title: 'E-commerce', description: 'Automated order processing, inventory sync, customer support chatbots, review management.', before: 'Manual order processing, slow support', after: 'Automated 24/7, instant responses' },
        { title: 'Service Businesses', description: 'Lead qualification, appointment booking, follow-up sequences, invoice automation.', before: 'Missed leads, inconsistent follow-ups', after: 'Zero lost leads, auto follow-ups' },
        { title: 'B2B Companies', description: 'CRM data entry, proposal generation, contract processing, reporting dashboards.', before: 'Hours of data entry weekly', after: 'Automated CRM, instant reports' },
        { title: 'Manufacturing', description: 'Supply chain notifications, quality check workflows, document processing.', before: 'Manual tracking, delayed alerts', after: 'Real-time monitoring, auto alerts' },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        { id: 'a1', question: 'What is an AI agent and how is it different from a chatbot?', answer: 'An AI agent can do more than just chat. It can make decisions, access databases, trigger actions in other systems, and handle complex multi-step tasks. A chatbot answers questions; an AI agent takes action.' },
        { id: 'a2', question: 'How much does AI automation cost?', answer: 'Simple automations start from \u20AC497. AI agents with custom training typically range from \u20AC1,500\u2013\u20AC5,000+. We provide exact quotes after understanding your specific needs.' },
        { id: 'a3', question: 'How long does it take to implement?', answer: 'Simple automations: 1\u20132 weeks. Complex AI agents: 3\u20136 weeks. We can prioritize quick wins first while building larger systems.' },
        { id: 'a4', question: 'Will this replace my team?', answer: 'No. AI automations handle repetitive, time-consuming tasks so your team can focus on strategy, relationships, and creative work that requires human judgment.' },
        { id: 'a5', question: 'What systems can you integrate with?', answer: 'We integrate with 400+ tools via n8n, Make, and Zapier. This includes all major CRMs, email platforms, payment processors, calendars, and custom APIs.' },
        { id: 'a6', question: 'Is my data secure?', answer: 'Yes. We can self-host AI agents and automations on your servers using n8n. Your data never leaves your infrastructure if privacy is a priority.' },
      ],
    },
    cta: {
      title: 'Ready to Automate?',
      subtitle: 'Book a free consultation. We\'ll identify your biggest automation opportunities and outline a clear plan.',
      button: 'Book Free Consultation',
      note: 'No commitment \u2022 20-minute call \u2022 Clear next steps',
    },
  },
  lt: {
    hero: {
      badge: 'AI agentai ir automatizacijos',
      title: 'AI agentai ir automatizacijos: ma\u017Eiau rankinio darbo, daugiau augimo',
      subtitle: 'Verslams, pasiruo\u0161usiems nustoti gai\u0161ti laik\u0105 pasikartojan\u010Dioms u\u017Eduotims. Kuriame AI agentus ir automatizacijas, kurios atlieka darb\u0105, kur\u012F j\u016Bs\u0173 komanda netur\u0117t\u0173 daryti rankomis.',
      benefits: [
        'Individual\u016Bs AI agentai, apmokyti j\u016Bs\u0173 verslo duomenimis',
        'Visapusi\u0161kas pasikartojan\u010Di\u0173 darbo eig\u0173 automatizavimas',
        'Integracijos su j\u016Bs\u0173 esamu CRM, el. pa\u0161tu ir \u012Frankiais',
      ],
      cta: 'Rezervuoti konsultacij\u0105',
    },
    process: {
      title: 'Kaip tai veikia',
      steps: [
        { number: '1', title: 'Nemokama konsultacija', description: 'Nustatome, kurie procesai eikvoja daugiausiai laiko ir kur AI gali pad\u0117ti.', duration: '30 min' },
        { number: '2', title: 'Individualus planas', description: 'Suprojektuojame AI agent\u0105 arba automatizacijos sraut\u0105 pagal j\u016Bs\u0173 darbo eigas.', duration: '3\u20135 dienos' },
        { number: '3', title: 'K\u016Brimas ir testavimas', description: 'Sukuriame, integruojame su j\u016Bs\u0173 sistemomis ir testuojame su realiais scenarijais.', duration: '1\u20133 savait\u0117s' },
        { number: '4', title: 'Paleidimas ir palaikymas', description: 'Paleid\u017Eiame, apmokome komand\u0105 ir teikiame nuolatin\u012F palaikym\u0105.', duration: '30 dien\u0173' },
      ],
    },
    deliverables: {
      title: 'K\u0105 gaunate',
      items: [
        { title: 'AI agentai', description: 'Pa\u017Eang\u016Bs agentai, atsakantys \u012F klausimus, kvalifikuojantys u\u017Eklausas, apdorojantys dokumentus ir priimantys sprendimus pagal j\u016Bs\u0173 duomenis.' },
        { title: 'Darbo eig\u0173 automatizacijos', description: 'Automatizuotos darbo eigos, sujungian\u010Dios j\u016Bs\u0173 CRM, el. pa\u0161t\u0105, kalendori\u0173 ir kitus \u012Frankius \u2014 veikian\u010Dios 24/7.' },
        { title: 'Individualios integracijos', description: 'API jungtys tarp sistem\u0173, kurios nat\u016Braliai nekomunikuoja tarpusavyje.' },
        { title: 'Apmokymai ir dokumentacija', description: 'J\u016Bs\u0173 komanda \u017Einos, kaip naudoti, steb\u0117ti ir koreguoti m\u016Bs\u0173 sukurtas sistemas.' },
      ],
    },
    integrations: {
      title: 'Integracijos',
      subtitle: 'Sujungiame j\u016Bs\u0173 esamus \u012Frankius \u012F automatizuotas darbo eigas.',
      categories: [
        { name: 'CRM', tools: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'El. pa\u0161tas', tools: 'Gmail, Outlook, SendGrid' },
        { name: 'Kalendorius', tools: 'Google Calendar, Calendly' },
        { name: 'Mok\u0117jimai', tools: 'Stripe, PayPal, banko API' },
        { name: 'API', tools: 'REST, GraphQL, webhooks' },
        { name: 'Automatizavimas', tools: 'n8n, Make, Zapier' },
      ],
    },
    useCases: {
      title: 'Kam tinka',
      items: [
        { title: 'E-komercija', description: 'Automatizuotas u\u017Esakym\u0173 apdorojimas, atsarg\u0173 sinchronizacija, klient\u0173 aptarnavimo chatbotai, atsiliepim\u0173 valdymas.', before: 'Rankinis u\u017Esakym\u0173 apdorojimas, l\u0117tas aptarnavimas', after: 'Automatizuota 24/7, greiti atsakymai' },
        { title: 'Paslaug\u0173 verslas', description: 'U\u017Eklaus\u0173 kvalifikavimas, vizit\u0173 rezervavimas, sekimo sekos, s\u0105skait\u0173 automatizavimas.', before: 'Prarastos u\u017Eklausos, nenuosekl\u016Bs sekimai', after: 'Nulis prarast\u0173 u\u017Eklaus\u0173, auto sekimai' },
        { title: 'B2B \u012Fmon\u0117s', description: 'CRM duomen\u0173 \u012Fvedimas, pasi\u016Blym\u0173 generavimas, sutar\u010Di\u0173 apdorojimas, ataskait\u0173 suvestin\u0117s.', before: 'Valandos duomen\u0173 \u012Fvedimo per savait\u0119', after: 'Automatizuotas CRM, greitos ataskaitos' },
        { title: 'Gamyba', description: 'Tiekimo grandin\u0117s prane\u0161imai, kokyb\u0117s patikr\u0173 darbo eigos, dokument\u0173 apdorojimas.', before: 'Rankinis sekimas, v\u0117luojantys \u012Fsp\u0117jimai', after: 'Realaus laiko steb\u0117jimas, auto \u012Fsp\u0117jimai' },
      ],
    },
    faq: {
      title: 'DUK',
      items: [
        { id: 'a1', question: 'Kas yra AI agentas ir kuo jis skiriasi nuo chatboto?', answer: 'AI agentas gali daugiau nei tik kalb\u0117tis. Jis gali priimti sprendimus, pasiekti duomen\u0173 bazes, paleisti veiksmus kitose sistemose ir atlikti sud\u0117tingas keli\u0173 \u017Eingsni\u0173 u\u017Eduotis. Chatbotas atsako \u012F klausimus; AI agentas imasi veiksm\u0173.' },
        { id: 'a2', question: 'Kiek kainuoja AI automatizavimas verslui?', answer: 'Paprastos automatizacijos prasideda nuo \u20AC497. AI agentai su individualiu apmokymu paprastai kainuoja \u20AC1 500\u2013\u20AC5 000+. Tiksl\u0105 kain\u0105 pateikiame suprat\u0119 j\u016Bs\u0173 konkre\u010Dius poreikius.' },
        { id: 'a3', question: 'Kiek laiko u\u017Etrunka \u012Fgyvendinimas?', answer: 'Paprastos automatizacijos: 1\u20132 savait\u0117s. Sud\u0117tingi AI agentai: 3\u20136 savait\u0117s. Galime pirmiausia prioritetizuoti greitus laim\u0117jimus, tuo pat metu kurdami didesnes sistemas.' },
        { id: 'a4', question: 'Ar tai pakeis mano komand\u0105?', answer: 'Ne. AI automatizacijos atlieka pasikartojan\u010Dias, daug laiko reikalaujan\u010Dias u\u017Eduotis, kad j\u016Bs\u0173 komanda gal\u0117t\u0173 susitelkti ties strategija, santykiais ir k\u016Brybiniu darbu.' },
        { id: 'a5', question: 'Su kokiomis sistemomis galite integruoti?', answer: 'Integruojame su 400+ \u012Franki\u0173 per n8n, Make ir Zapier. Tai apima visas pagrindines CRM, el. pa\u0161to platformas, mok\u0117jim\u0173 procesorius, kalendorius ir individualias API.' },
        { id: 'a6', question: 'Ar mano duomenys saug\u016Bs?', answer: 'Taip. Galime talpinti AI agentus ir automatizacijas j\u016Bs\u0173 serveriuose naudodami n8n. J\u016Bs\u0173 duomenys niekada nepalieka j\u016Bs\u0173 infrastrukt\u016Bros, jei privatumas yra prioritetas.' },
      ],
    },
    cta: {
      title: 'Pasiruo\u0161\u0119 automatizuoti?',
      subtitle: 'U\u017Esirezervuokite nemokam\u0105 konsultacij\u0105. Nustatysime did\u017Eiausias automatizavimo galimybes ir parengsime ai\u0161k\u0173 plan\u0105.',
      button: 'Rezervuoti konsultacij\u0105',
      note: 'Be \u012Fsipareigojim\u0173 \u2022 20 min. pokalbis \u2022 Aisk\u016Bs tolesni \u017Eingsniai',
    },
  },
};

export default function AIAgentaiAutomatizacijosPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const isLT = locale === 'lt';
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const breadcrumbItems = [
    { name: isLT ? 'Prad\u017Eia' : 'Home', url: isLT ? '/lt' : '/' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <StructuredData type="service" data={{ name: isLT ? 'AI Agentai ir Automatizacijos' : 'AI Agents & Automations' }} page="ai-agentai-automatizacijos" />
      <Header />
      <Breadcrumb items={breadcrumbItems} currentPage={isLT ? 'AI agentai ir automatizacijos' : 'AI Agents & Automations'} />

      {/* Hero - Animated Workflow Diagram */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              {c.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{c.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{c.hero.subtitle}</p>
            <div className="flex flex-col items-center gap-3 mb-8">
              {c.hero.benefits.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-center gap-2 text-purple-300">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Workflow Diagram */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              {['CRM', 'Email', 'Data'].map((label, i) => (
                <motion.div key={label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.15 }} className="flex items-center gap-2 md:gap-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white text-sm font-medium">
                    {label}
                  </div>
                  {i < 2 && (
                    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8 + i * 0.15, duration: 0.3 }} className="hidden md:block">
                      <svg className="w-8 h-4 text-purple-400" viewBox="0 0 32 16" fill="none"><path d="M0 8h24M24 8l-6-6M24 8l-6 6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" /></svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.3 }} className="hidden md:block">
                <svg className="w-8 h-4 text-purple-400" viewBox="0 0 32 16" fill="none"><path d="M0 8h24M24 8l-6-6M24 8l-6 6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" /></svg>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, type: 'spring' }} className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl px-5 py-3 text-white font-bold shadow-lg shadow-purple-500/30">
                AI Agent
              </motion.div>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.6, duration: 0.3 }} className="hidden md:block">
                <svg className="w-8 h-4 text-purple-400" viewBox="0 0 32 16" fill="none"><path d="M0 8h24M24 8l-6-6M24 8l-6 6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" /></svg>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8 }} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white text-sm font-medium">
                {isLT ? 'Rezultatai' : 'Results'}
              </motion.div>
            </div>
          </motion.div>

          <div className="text-center">
            <motion.a href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all text-lg shadow-lg shadow-purple-500/25" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {c.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Process - Horizontal Stepper */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.process.title}</h2>
          </motion.div>

          <div className="relative">
            {/* Progress bar */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.3 }} viewport={{ once: true }} className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {c.process.steps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.2 }} viewport={{ once: true }} className="relative text-center">
                  <div className="relative z-10 w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/25">
                    {step.number}
                  </div>
                  <span className="inline-block text-xs text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full mb-3">{step.duration}</span>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Hover Flip Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.deliverables.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.deliverables.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations - Interactive Category Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.integrations.title}</h2>
            <p className="text-lg text-gray-600">{c.integrations.subtitle}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button onClick={() => setActiveCategory(null)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === null ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {isLT ? 'Visos' : 'All'}
            </button>
            {c.integrations.categories.map((cat) => (
              <button key={cat.name} onClick={() => setActiveCategory(cat.name)} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.name ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {c.integrations.categories
                .filter(cat => !activeCategory || cat.name === activeCategory)
                .map((cat) => (
                  <motion.div
                    key={cat.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-purple-200 transition-colors"
                  >
                    <h3 className="font-bold text-purple-600 mb-2">{cat.name}</h3>
                    <p className="text-gray-600 text-sm">{cat.tools}</p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Use Cases - Before/After Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.useCases.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.useCases.items.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                      <div className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">{isLT ? 'Prie\u0161' : 'Before'}</div>
                      <p className="text-sm text-red-700">{item.before}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                      <div className="text-xs font-semibold text-green-500 uppercase tracking-wider mb-1">{isLT ? 'Po' : 'After'}</div>
                      <p className="text-sm text-green-700">{item.after}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={c.faq.items} title={c.faq.title} />
      <RelatedSolutions currentPage="ai-agentai-automatizacijos" />

      {/* CTA - Dark with Gradient Mesh */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
            <p className="text-gray-300 mb-8 text-lg">{c.cta.subtitle}</p>
            <motion.a href={`/${locale}/contact`} className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg shadow-purple-500/25" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{c.cta.button}</motion.a>
            <p className="text-gray-500 text-sm mt-4">{c.cta.note}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
