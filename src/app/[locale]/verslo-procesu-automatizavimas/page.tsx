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

const t = {
  en: {
    hero: {
      badge: 'Process Automation',
      title: 'Business Process Automation with AI & n8n',
      subtitle: 'For businesses losing hours on repetitive tasks. We connect your tools, automate workflows, and free your team to focus on what matters.',
      benefits: [
        'Save 10–30 hours per week on manual tasks',
        'Connect all your tools into one automated workflow',
        'No disruption to your current systems',
      ],
      cta: 'Book Consultation',
      stats: [
        { value: 30, suffix: 'h', label: 'Saved per week' },
        { value: 500, suffix: '+', label: 'Workflows built' },
        { value: 99, suffix: '%', label: 'Uptime' },
      ],
    },
    process: {
      title: 'How It Works',
      steps: [
        { number: '1', title: 'Free Consultation', description: 'We discuss your processes, identify bottlenecks, and estimate potential savings.', duration: 'Day 1' },
        { number: '2', title: 'Workflow Design', description: 'We map the ideal automated workflow and choose the best tools for the job.', duration: 'Days 2–5' },
        { number: '3', title: 'Build & Test', description: 'We build the automations using n8n, Make, or Zapier and test thoroughly.', duration: 'Days 6–12' },
        { number: '4', title: 'Launch & Monitor', description: 'We deploy, train your team, and monitor for the first 30 days.', duration: 'Day 13+' },
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        { title: 'Automated Workflows', description: 'Fully working automation flows that run on autopilot — no manual intervention needed.' },
        { title: 'System Integrations', description: 'Your CRM, email, calendar, database, and other tools connected and synchronized.' },
        { title: 'Documentation', description: 'Clear documentation of every workflow, so your team knows exactly what happens and when.' },
        { title: 'Training & Support', description: 'Team training session + 30 days of support to ensure everything runs smoothly.' },
      ],
    },
    tools: {
      title: 'Tools & Integrations',
      subtitle: 'We work with the platforms that fit your needs.',
      items: [
        { name: 'n8n', description: 'Self-hosted, no task limits, full data control. Our go-to for complex workflows and businesses that need privacy.', tag: 'Recommended' },
        { name: 'Make (Integromat)', description: 'Cloud-based, visual builder, 1000+ app connections. Great for mid-complexity workflows.' },
        { name: 'Zapier', description: 'Simplest setup, 6000+ apps. Best for quick, simple automations between popular tools.' },
        { name: 'Custom AI + API', description: 'When off-the-shelf won\'t cut it. Custom scripts, AI models, and direct API integrations.' },
      ],
      integrations: ['HubSpot', 'Pipedrive', 'Gmail', 'Outlook', 'Google Calendar', 'Stripe', 'Slack', 'Notion', 'Airtable', 'Google Sheets', 'WordPress', 'Shopify'],
    },
    useCases: {
      title: 'What We Automate',
      items: [
        { title: 'Lead Processing', description: 'Auto-capture leads from forms, qualify them, add to CRM, and trigger follow-up sequences.', metric: '10h', metricLabel: 'saved/week' },
        { title: 'Invoice & Payments', description: 'Generate invoices, send reminders, reconcile payments — all automatically.', metric: '15h', metricLabel: 'saved/week' },
        { title: 'Data Sync', description: 'Keep your CRM, spreadsheets, and databases in perfect sync without manual entry.', metric: '99%', metricLabel: 'accuracy' },
        { title: 'Customer Onboarding', description: 'Welcome emails, account setup, task assignment — triggered automatically when a deal closes.', metric: '5min', metricLabel: 'vs 2 hours' },
        { title: 'Reporting', description: 'Automated daily/weekly reports pulled from multiple sources, delivered to your inbox or Slack.', metric: '8h', metricLabel: 'saved/week' },
        { title: 'Email Workflows', description: 'Personalized email sequences triggered by customer actions or CRM status changes.', metric: '3x', metricLabel: 'more replies' },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        { id: 'v1', question: 'What is n8n and why do you recommend it?', answer: 'n8n is an open-source workflow automation tool. Unlike Zapier or Make, it can be self-hosted (your data stays on your servers), has no task limits, and supports complex logic including AI. We recommend it for businesses that need privacy, scalability, or complex workflows.' },
        { id: 'v2', question: 'How much does business process automation cost?', answer: 'Simple automations start from €497. Complex multi-system workflows with custom integrations typically range from €1,500–€5,000. We provide exact quotes after the initial consultation.' },
        { id: 'v3', question: 'How long does implementation take?', answer: 'Simple automations: 3–5 days. Complex workflows: 2–4 weeks. We can also work in phases, starting with the highest-ROI automation first.' },
        { id: 'v4', question: 'Will this work with our existing CRM/tools?', answer: 'Almost certainly. We integrate with HubSpot, Pipedrive, Salesforce, Google Workspace, Microsoft 365, Stripe, and hundreds of other tools via API.' },
        { id: 'v5', question: 'What\'s the difference between n8n, Make, and Zapier?', answer: 'n8n: self-hosted, no limits, complex logic. Make: cloud, visual, mid-complexity. Zapier: simplest, most apps, basic workflows. We recommend the best fit for your specific needs.' },
        { id: 'v6', question: 'Do you provide ongoing maintenance?', answer: 'Yes. All projects include 30 days of support. We also offer monthly maintenance plans for monitoring, updates, and new automation requests.' },
        { id: 'v7', question: 'Can you automate processes that involve AI decisions?', answer: 'Yes. We build workflows that include AI steps — text classification, sentiment analysis, document extraction, and more. The AI runs inside n8n or as a separate service.' },
      ],
    },
    cta: {
      title: 'Stop Doing Manually What Can Be Automated',
      subtitle: 'Book a free consultation. We\'ll identify your top 3 automation opportunities and estimate the time savings.',
      button: 'Book Free Consultation',
      note: 'No commitment • Clear ROI estimate • 20-minute call',
    },
  },
  lt: {
    hero: {
      badge: 'Procesų automatizavimas',
      title: 'Verslo procesų automatizavimas su AI ir n8n',
      subtitle: 'Verslams, prarandantiems valandas pasikartojančioms užduotims. Sujungiame jūsų įrankius, automatizuojame darbo eigas ir atlaisviname komandą svarbiems darbams.',
      benefits: [
        'Sutaupykite 10–30 valandų per savaitę nuo rankinio darbo',
        'Sujunkite visus įrankius į vieną automatizuotą darbo eigą',
        'Be trikdžių esamoms sistemoms',
      ],
      cta: 'Rezervuoti konsultaciją',
      stats: [
        { value: 30, suffix: 'h', label: 'Sutaupyta/sav.' },
        { value: 500, suffix: '+', label: 'Sukurtos eigos' },
        { value: 99, suffix: '%', label: 'Veikimo laikas' },
      ],
    },
    process: {
      title: 'Kaip tai veikia',
      steps: [
        { number: '1', title: 'Nemokama konsultacija', description: 'Aptariame jūsų procesus, nustatome kliūtis ir įvertiname galimus sutaupymus.', duration: '1 diena' },
        { number: '2', title: 'Darbo eigos projektavimas', description: 'Suprojektuojame idealią automatizuotą darbo eigą ir parenkame tinkamiausius įrankius.', duration: '2–5 dienos' },
        { number: '3', title: 'Kūrimas ir testavimas', description: 'Sukuriame automatizacijas su n8n, Make arba Zapier ir kruopščiai testuojame.', duration: '6–12 dienos' },
        { number: '4', title: 'Paleidimas ir stebėjimas', description: 'Paleidžiame, apmokome komandą ir stebime pirmas 30 dienų.', duration: '13+ diena' },
      ],
    },
    deliverables: {
      title: 'Ką gaunate',
      items: [
        { title: 'Automatizuotos darbo eigos', description: 'Pilnai veikiančios automatizacijos, kurios veikia autopilotu — be rankinio įsikišimo.' },
        { title: 'Sistemų integracijos', description: 'Jūsų CRM, el. paštas, kalendorius, duomenų bazė ir kiti įrankiai sujungti ir sinchronizuoti.' },
        { title: 'Dokumentacija', description: 'Aiški kiekvienos darbo eigos dokumentacija, kad komanda žinotų, kas ir kada vyksta.' },
        { title: 'Apmokymai ir palaikymas', description: 'Komandos apmokymo sesija + 30 dienų palaikymas, kad viskas veiktų sklandžiai.' },
      ],
    },
    tools: {
      title: 'Įrankiai ir integracijos',
      subtitle: 'Dirbame su platformomis, kurios geriausiai tinka jūsų poreikiams.',
      items: [
        { name: 'n8n', description: 'Savarankiškai talpinamas, be užduočių limitų, pilna duomenų kontrolė. Mūsų pasirinkimas sudėtingoms darbo eigoms ir verslams, kuriems svarbi privatumas.', tag: 'Rekomenduojama' },
        { name: 'Make (Integromat)', description: 'Debesyje, vizualus kūrėjas, 1000+ programų jungčių. Puikus vidutinio sudėtingumo darbo eigoms.' },
        { name: 'Zapier', description: 'Paprasčiausias nustatymas, 6000+ programų. Geriausiai tinka greičiausioms ir paprasčiausioms automatizacijoms.' },
        { name: 'Custom AI + API', description: 'Kai standartiniai sprendimai netinka. Individualūs skriptai, AI modeliai ir tiesioginės API integracijos.' },
      ],
      integrations: ['HubSpot', 'Pipedrive', 'Gmail', 'Outlook', 'Google Calendar', 'Stripe', 'Slack', 'Notion', 'Airtable', 'Google Sheets', 'WordPress', 'Shopify'],
    },
    useCases: {
      title: 'Ką automatizuojame',
      items: [
        { title: 'Užklausų apdorojimas', description: 'Automatiškai surenkame užklausas iš formų, kvalifikuojame, įrašome į CRM ir paleidžiame sekimo sekas.', metric: '10h', metricLabel: 'sutaupyta/sav.' },
        { title: 'Sąskaitos ir mokėjimai', description: 'Sąskaitų generavimas, priminimų siuntimas, mokėjimų suvedimas — viskas automatiškai.', metric: '15h', metricLabel: 'sutaupyta/sav.' },
        { title: 'Duomenų sinchronizacija', description: 'CRM, lentelės ir duomenų bazės idealiai sinchronizuotos be rankinio įvedimo.', metric: '99%', metricLabel: 'tikslumas' },
        { title: 'Klientų priėmimas', description: 'Pasisveikinimo laiškai, paskyros nustatymas, užduočių priskyrimas — automatiškai uždarius sandorį.', metric: '5min', metricLabel: 'vs 2 valandos' },
        { title: 'Ataskaitų rengimas', description: 'Automatinės dienos/savaitės ataskaitos iš kelių šaltinių, pristatomos į el. paštą arba Slack.', metric: '8h', metricLabel: 'sutaupyta/sav.' },
        { title: 'El. pašto darbo eigos', description: 'Personalizuotos laiškų sekos pagal kliento veiksmus ar CRM statuso pokyčius.', metric: '3x', metricLabel: 'daugiau atsakymų' },
      ],
    },
    faq: {
      title: 'DUK',
      items: [
        { id: 'v1', question: 'Kas yra n8n ir kodėl jį rekomenduojate?', answer: 'n8n yra atviro kodo darbo eigų automatizavimo įrankis. Skirtingai nei Zapier ar Make, jis gali būti talpinamas jūsų serveriuose (duomenys lieka pas jus), neturi užduočių limitų ir palaiko sudėtingą logiką, įskaitant AI. Rekomenduojame verslams, kuriems svarbu privatumas, mastelumas ar sudėtingos darbo eigos.' },
        { id: 'v2', question: 'Kiek kainuoja verslo procesų automatizavimas?', answer: 'Paprastos automatizacijos prasideda nuo €497. Sudėtingos kelių sistemų darbo eigos su individualiomis integracijomis paprastai kainuoja €1 500–€5 000. Tikslią kainą pateikiame po pradinės konsultacijos.' },
        { id: 'v3', question: 'Kiek laiko užtrunka įgyvendinimas?', answer: 'Paprastos automatizacijos: 3–5 dienos. Sudėtingos darbo eigos: 2–4 savaitės. Galime dirbti etapais, pradedant nuo didžiausią ROI turinčios automatizacijos.' },
        { id: 'v4', question: 'Ar tai veiks su mūsų esamomis sistemomis?', answer: 'Beveik tikrai. Integruojame su HubSpot, Pipedrive, Salesforce, Google Workspace, Microsoft 365, Stripe ir šimtais kitų įrankių per API.' },
        { id: 'v5', question: 'Kuo skiriasi n8n, Make ir Zapier?', answer: 'n8n: savarankiškai talpinamas, be limitų, sudėtinga logika. Make: debesyje, vizualus, vidutinio sudėtingumo. Zapier: paprasčiausias, daugiausiai programų, bazinės darbo eigos. Rekomenduojame geriausiai jūsų poreikiams tinkantį.' },
        { id: 'v6', question: 'Ar teikiate nuolatinę priežiūrą?', answer: 'Taip. Visi projektai apima 30 dienų palaikymą. Taip pat siūlome mėnesinius priežiūros planus stebėjimui, atnaujinimams ir naujų automatizacijų užklausoms.' },
        { id: 'v7', question: 'Ar galite automatizuoti procesus su AI sprendimais?', answer: 'Taip. Kuriame darbo eigas su AI žingsniais — teksto klasifikavimas, sentimento analizė, dokumentų ištraukimas ir daugiau. AI veikia n8n viduje arba kaip atskira paslauga.' },
      ],
    },
    cta: {
      title: 'Nustokite daryti rankomis tai, ką galima automatizuoti',
      subtitle: 'Užsirezervuokite nemokamą konsultaciją. Nustatysime jūsų top 3 automatizavimo galimybes ir įvertinsime laiko sutaupymus.',
      button: 'Rezervuoti konsultaciją',
      note: 'Be įsipareigojimų • Aiškus ROI įvertinimas • 20 min. pokalbis',
    },
  },
};

export default function VersloProcesuAutomatizavimasPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const isLT = locale === 'lt';

  const breadcrumbItems = [
    { name: isLT ? 'Pradžia' : 'Home', url: isLT ? '/lt' : '/' },
    { name: isLT ? 'AI agentai ir automatizacijos' : 'AI Agents & Automations', url: `${isLT ? '/lt' : ''}/ai-agentai-automatizacijos` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <StructuredData type="service" data={{ name: isLT ? 'Verslo Procesų Automatizavimas' : 'Business Process Automation' }} page="verslo-procesu-automatizavimas" />
      <Header />
      <Breadcrumb items={breadcrumbItems} currentPage={isLT ? 'Verslo procesų automatizavimas' : 'Business Process Automation'} />

      {/* Hero with Flow Diagram */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                {c.hero.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.hero.title}</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{c.hero.subtitle}</p>
            </motion.div>
          </div>

          {/* Animated Flow Diagram */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="hidden md:flex items-center justify-center gap-2 mb-12">
            {['CRM', 'Email', 'Data'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-white text-sm font-medium"
                >
                  {label}
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 + i * 0.2 }}>
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </motion.div>
              </div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl px-6 py-3 text-white text-sm font-bold shadow-lg shadow-blue-500/25"
            >
              n8n
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-white text-sm font-medium"
            >
              {isLT ? 'Rezultatai' : 'Results'}
            </motion.div>
          </motion.div>

          {/* Stats + CTA */}
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-lg w-full">
              {c.hero.stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.15 }} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.a href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all text-lg shadow-lg shadow-blue-500/25" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {c.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Process - Numbered Cards with Connecting Arrows */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.process.title}</h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full"
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
                  {/* Step circle */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-white rounded-2xl border-2 border-blue-200 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">{step.number}</span>
                  </div>
                  {/* Card */}
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <span className="inline-block text-xs text-blue-600 font-medium bg-blue-50 px-2.5 py-1 rounded-full mb-3">{step.duration}</span>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Gradient Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.deliverables.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.deliverables.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools - Featured n8n Card + Others */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.tools.title}</h2>
            <p className="text-lg text-gray-600">{c.tools.subtitle}</p>
          </motion.div>

          {/* Featured n8n card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-blue-500/50 rounded-3xl blur-sm opacity-75" />
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 border border-blue-500/20">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/25">
                    n8n
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{c.tools.items[0].name}</h3>
                    <span className="text-xs font-medium text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">{c.tools.items[0].tag}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{c.tools.items[0].description}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other tools */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {c.tools.items.slice(1).map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-gray-900 text-lg mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Integrations - Marquee style */}
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-6">{isLT ? 'Populiarios integracijos' : 'Popular Integrations'}</h3>
            <div className="overflow-hidden relative">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="flex gap-4 w-max"
              >
                {[...c.tools.integrations, ...c.tools.integrations].map((name, i) => (
                  <div key={i} className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm whitespace-nowrap">
                    {name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Metric-focused Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.useCases.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.useCases.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all group"
              >
                {/* Metric highlight */}
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{item.metric}</span>
                  <span className="text-xs text-gray-500 pb-1">{item.metricLabel}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <RelatedSolutions currentPage="verslo-procesu-automatizavimas" />

      {/* FAQ */}
      <FAQ items={c.faq.items} title={c.faq.title} />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Floating elements */}
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-16 left-[15%] w-16 h-16 bg-white/10 rounded-2xl rotate-12" />
        <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-16 right-[15%] w-12 h-12 bg-white/10 rounded-full" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
            <p className="text-blue-100 mb-8 text-lg">{c.cta.subtitle}</p>
            <motion.a href={`/${locale}/contact`} className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{c.cta.button}</motion.a>
            <p className="text-blue-200 text-sm mt-4">{c.cta.note}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
