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
    breadcrumb: 'AI Agents & Automations',
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
        { number: '1', title: 'Free Consultation', description: 'We identify which processes waste the most time and where AI can help.', duration: 'Day 1' },
        { number: '2', title: 'Custom Plan', description: 'We design the AI agent or automation flow tailored to your workflows.', duration: 'Days 2-5' },
        { number: '3', title: 'Build & Test', description: 'We build, integrate with your systems, and test with real scenarios.', duration: 'Days 6-20' },
        { number: '4', title: 'Launch & Support', description: 'We deploy, train your team, and provide ongoing support.', duration: 'Day 21+' },
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        { title: 'AI Agents', description: 'Intelligent agents that answer questions, qualify leads, process documents, and make decisions based on your data.', icon: 'bot' },
        { title: 'Workflow Automations', description: 'Automated workflows connecting your CRM, email, calendar, and other tools — running 24/7.', icon: 'workflow' },
        { title: 'Custom Integrations', description: 'API connections between systems that don\'t natively talk to each other.', icon: 'integration' },
        { title: 'Training & Documentation', description: 'Your team knows how to use, monitor, and adjust the systems we build.', icon: 'docs' },
      ],
    },
    integrations: {
      title: 'Integrations We Work With',
      subtitle: 'We connect your existing tools into automated workflows.',
      items: [
        { name: 'CRM', examples: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'Email', examples: 'Gmail, Outlook, SendGrid' },
        { name: 'Calendar', examples: 'Google Calendar, Calendly' },
        { name: 'Payments', examples: 'Stripe, PayPal, bank APIs' },
        { name: 'APIs', examples: 'REST, GraphQL, webhooks' },
        { name: 'Automation', examples: 'n8n, Make, Zapier' },
      ],
    },
    useCases: {
      title: 'Who This Is For',
      items: [
        { title: 'E-commerce', description: 'Order processing, inventory sync, customer support chatbots, review management' },
        { title: 'Service Businesses', description: 'Lead qualification, appointment booking, follow-up sequences, invoice automation' },
        { title: 'B2B Companies', description: 'CRM data entry, proposal generation, contract processing, reporting dashboards' },
        { title: 'Manufacturing', description: 'Supply chain notifications, quality check workflows, document processing' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { id: 'a1', question: 'What is an AI agent and how is it different from a chatbot?', answer: 'An AI agent can do more than just chat. It can make decisions, access databases, trigger actions in other systems, and handle complex multi-step tasks. A chatbot answers questions; an AI agent takes action.' },
        { id: 'a2', question: 'How much does AI automation cost?', answer: 'Simple automations start from €497. AI agents with custom training typically range from €1,500–€5,000+. We provide exact quotes after understanding your specific needs.' },
        { id: 'a3', question: 'How long does it take to implement?', answer: 'Simple automations: 1–2 weeks. Complex AI agents: 3–6 weeks. We can prioritize quick wins first while building larger systems.' },
        { id: 'a4', question: 'Will this replace my team?', answer: 'No. AI automations handle repetitive, time-consuming tasks so your team can focus on strategy, relationships, and creative work that requires human judgment.' },
        { id: 'a5', question: 'What systems can you integrate with?', answer: 'We integrate with 400+ tools via n8n, Make, and Zapier. This includes all major CRMs, email platforms, payment processors, calendars, and custom APIs.' },
        { id: 'a6', question: 'Is my data secure?', answer: 'Yes. We can self-host AI agents and automations on your servers using n8n. Your data never leaves your infrastructure if privacy is a priority.' },
      ],
    },
    cta: {
      title: 'Ready to Automate?',
      subtitle: 'Book a free consultation. We\'ll identify your biggest automation opportunities and outline a clear plan.',
      button: 'Book Free Consultation',
      note: 'No commitment • 20-minute call • Clear next steps',
    },
  },
  lt: {
    breadcrumb: 'AI agentai ir automatizacijos',
    hero: {
      badge: 'AI agentai ir automatizacijos',
      title: 'AI agentai ir automatizacijos: mažiau rankinio darbo, daugiau augimo',
      subtitle: 'Verslams, pasiruošusiems nustoti gaišti laiką pasikartojančioms užduotims. Kuriame AI agentus ir automatizacijas, kurios atlieka darbą, kurį jūsų komanda neturėtų daryti rankomis.',
      benefits: [
        'Individualūs AI agentai, apmokyti jūsų verslo duomenimis',
        'Visapusiškas pasikartojančių darbo eigų automatizavimas',
        'Integracijos su jūsų esamu CRM, el. paštu ir įrankiais',
      ],
      cta: 'Rezervuoti konsultaciją',
    },
    process: {
      title: 'Kaip tai veikia',
      steps: [
        { number: '1', title: 'Nemokama konsultacija', description: 'Nustatome, kurie procesai eikvoja daugiausiai laiko ir kur AI gali padėti.', duration: '1 diena' },
        { number: '2', title: 'Individualus planas', description: 'Suprojektuojame AI agentą arba automatizacijos srautą pagal jūsų darbo eigas.', duration: '2-5 dienos' },
        { number: '3', title: 'Kūrimas ir testavimas', description: 'Sukuriame, integruojame su jūsų sistemomis ir testuojame su realiais scenarijais.', duration: '6-20 dienos' },
        { number: '4', title: 'Paleidimas ir palaikymas', description: 'Paleidžiame, apmokome komandą ir teikiame nuolatinį palaikymą.', duration: '21+ diena' },
      ],
    },
    deliverables: {
      title: 'Ką gaunate',
      items: [
        { title: 'AI agentai', description: 'Pažangūs agentai, atsakantys į klausimus, kvalifikuojantys užklausas, apdorojantys dokumentus ir priimantys sprendimus pagal jūsų duomenis.', icon: 'bot' },
        { title: 'Darbo eigų automatizacijos', description: 'Automatizuotos darbo eigos, sujungiančios jūsų CRM, el. paštą, kalendorių ir kitus įrankius — veikiančios 24/7.', icon: 'workflow' },
        { title: 'Individualios integracijos', description: 'API jungtys tarp sistemų, kurios natūraliai nekomunikuoja tarpusavyje.', icon: 'integration' },
        { title: 'Apmokymai ir dokumentacija', description: 'Jūsų komanda žinos, kaip naudoti, stebėti ir koreguoti mūsų sukurtas sistemas.', icon: 'docs' },
      ],
    },
    integrations: {
      title: 'Integracijos, su kuriomis dirbame',
      subtitle: 'Sujungiame jūsų esamus įrankius į automatizuotas darbo eigas.',
      items: [
        { name: 'CRM', examples: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'El. paštas', examples: 'Gmail, Outlook, SendGrid' },
        { name: 'Kalendorius', examples: 'Google Calendar, Calendly' },
        { name: 'Mokėjimai', examples: 'Stripe, PayPal, banko API' },
        { name: 'API', examples: 'REST, GraphQL, webhooks' },
        { name: 'Automatizavimas', examples: 'n8n, Make, Zapier' },
      ],
    },
    useCases: {
      title: 'Kam tinka',
      items: [
        { title: 'E-komercija', description: 'Užsakymų apdorojimas, atsargų sinchronizacija, klientų aptarnavimo chatbotai, atsiliepimų valdymas' },
        { title: 'Paslaugų verslas', description: 'Užklausų kvalifikavimas, vizitų rezervavimas, sekimo sekos, sąskaitų automatizavimas' },
        { title: 'B2B įmonės', description: 'CRM duomenų įvedimas, pasiūlymų generavimas, sutarčių apdorojimas, ataskaitų suvestinės' },
        { title: 'Gamyba', description: 'Tiekimo grandinės pranešimai, kokybės patikrų darbo eigos, dokumentų apdorojimas' },
      ],
    },
    faq: {
      title: 'Dažnai užduodami klausimai',
      items: [
        { id: 'a1', question: 'Kas yra AI agentas ir kuo jis skiriasi nuo chatboto?', answer: 'AI agentas gali daugiau nei tik kalbėtis. Jis gali priimti sprendimus, pasiekti duomenų bazes, paleisti veiksmus kitose sistemose ir atlikti sudėtingas kelių žingsnių užduotis. Chatbotas atsako į klausimus; AI agentas imasi veiksmų.' },
        { id: 'a2', question: 'Kiek kainuoja AI automatizavimas verslui?', answer: 'Paprastos automatizacijos prasideda nuo €497. AI agentai su individualiu apmokymu paprastai kainuoja €1 500–€5 000+. Tikslą kainą pateikiame supratę jūsų konkrečius poreikius.' },
        { id: 'a3', question: 'Kiek laiko užtrunka įgyvendinimas?', answer: 'Paprastos automatizacijos: 1–2 savaitės. Sudėtingi AI agentai: 3–6 savaitės. Galime pirmiausia prioritetizuoti greitus laimėjimus, tuo pat metu kurdami didesnes sistemas.' },
        { id: 'a4', question: 'Ar tai pakeis mano komandą?', answer: 'Ne. AI automatizacijos atlieka pasikartojančias, daug laiko reikalaujančias užduotis, kad jūsų komanda galėtų susitelkti ties strategija, santykiais ir kūrybiniu darbu.' },
        { id: 'a5', question: 'Su kokiomis sistemomis galite integruoti?', answer: 'Integruojame su 400+ įrankių per n8n, Make ir Zapier. Tai apima visas pagrindines CRM, el. pašto platformas, mokėjimų procesorius, kalendorius ir individualias API.' },
        { id: 'a6', question: 'Ar mano duomenys saugūs?', answer: 'Taip. Galime talpinti AI agentus ir automatizacijas jūsų serveriuose naudodami n8n. Jūsų duomenys niekada nepalieka jūsų infrastruktūros, jei privatumas yra prioritetas.' },
      ],
    },
    cta: {
      title: 'Pasiruošę automatizuoti?',
      subtitle: 'Užsirezervuokite nemokamą konsultaciją. Nustatysime didžiausias automatizavimo galimybes ir parengsime aiškų planą.',
      button: 'Nemokama konsultacija',
      note: 'Be įsipareigojimų • 20 min. pokalbis • Aiškūs tolesni žingsniai',
    },
  },
};

function getIcon(icon: string): React.ReactNode {
  switch (icon) {
    case 'bot':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'workflow':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      );
    case 'integration':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'docs':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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

export default function AIAgentaiAutomatizacijosPage() {
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
        data={{ name: isLT ? 'AI Agentai ir Automatizacijos' : 'AI Agents & Automations' }}
        page="ai-agentai-automatizacijos"
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
                      <AnimatedCounter value={400} suffix="+" />
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{isLT ? 'Įrankių integracija' : 'Tools integrated'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      <AnimatedCounter value={24} suffix="/7" />
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{isLT ? 'Veikia nuolat' : 'Always running'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      <AnimatedCounter value={3} />
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{isLT ? 'Savaitės iki rezultatų' : 'Weeks to results'}</div>
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

      {/* Process - Compact Interactive */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {content.process.title}
            </h2>
          </motion.div>

          {/* Horizontal Step Indicators */}
          <div className="flex justify-between items-center mb-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 -translate-y-1/2 transition-all duration-500"
              style={{ width: `${(activeStep / (content.process.steps.length - 1)) * 100}%` }}
            />
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
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-lg">{content.process.steps[activeStep].title}</h3>
                <span className="text-xs text-purple-600 font-medium bg-white px-3 py-1 rounded-full">
                  {content.process.steps[activeStep].duration}
                </span>
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
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeStep ? 'bg-purple-500 w-6' : 'bg-gray-300 hover:bg-purple-300'
                }`}
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
      <RelatedSolutions currentPage="ai-agentai-automatizacijos" />

      {/* FAQ Section */}
      <FAQ items={content.faq.items} title={content.faq.title} />

      <Footer />
    </div>
  );
}
