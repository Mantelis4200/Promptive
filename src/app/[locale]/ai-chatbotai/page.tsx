'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import RelatedSolutions from '@/components/RelatedSolutions';
import StructuredData from '@/components/StructuredData';

const t = {
  en: {
    hero: {
      badge: 'AI Chatbots',
      title: 'AI Chatbots for Business: FAQ, Sales, Support 24/7',
      subtitle: 'Stop losing leads and customers outside business hours. We build custom AI chatbots that answer questions, qualify leads, and close sales — trained on your business data.',
      benefits: [
        'Custom AI chatbot trained on your products and services',
        'Seamless CRM, email, and payment integrations',
        'Live analytics dashboard with conversation insights',
      ],
      cta: 'Book Consultation',
    },
    process: {
      title: 'How It Works',
      steps: [
        { number: '1', title: 'Consultation', description: 'We analyze your customer queries, sales process, and support needs to design the ideal chatbot.', duration: '30 min' },
        { number: '2', title: 'Chatbot Design', description: 'We design conversation flows, personality, and integrations tailored to your business goals.', duration: '3–5 days' },
        { number: '3', title: 'Training & Integration', description: 'We train the AI on your data, connect to your CRM and tools, and test with real scenarios.', duration: '1–2 weeks' },
        { number: '4', title: 'Launch & Optimization', description: 'We deploy the chatbot, monitor performance, and continuously optimize based on real conversations.', duration: '30 days' },
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        { title: 'AI Chatbot Trained on Your Data', description: 'A conversational AI that knows your products, pricing, policies, and FAQs — answering customers accurately 24/7.', icon: 'brain' },
        { title: 'CRM & Tool Integration', description: 'Leads captured by the chatbot are automatically saved to HubSpot, Pipedrive, or your preferred CRM with full context.', icon: 'link' },
        { title: 'Analytics Dashboard', description: 'Real-time insights into conversation volume, common questions, lead quality, and chatbot performance metrics.', icon: 'chart' },
        { title: 'Ongoing Optimization', description: 'We monitor conversations, improve responses, and expand the knowledge base as your business evolves.', icon: 'refresh' },
      ],
    },
    integrations: {
      title: 'Integrations',
      subtitle: 'Your chatbot connects with the tools you already use.',
      categories: [
        { name: 'Website', tools: 'WordPress, Shopify, custom websites' },
        { name: 'CRM', tools: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'Email', tools: 'Gmail, Outlook, SendGrid' },
        { name: 'Payments', tools: 'Stripe, PayPal' },
        { name: 'Social', tools: 'Facebook Messenger, Instagram DM' },
        { name: 'API', tools: 'REST, webhooks, custom APIs' },
      ],
    },
    useCases: {
      title: 'Who This Is For',
      items: [
        { title: 'E-commerce', description: 'Product recommendations, order tracking, size guides, return policies — all handled instantly by the chatbot.' },
        { title: 'Service Businesses', description: 'Appointment booking, pricing questions, service explanations, and lead capture on autopilot.' },
        { title: 'B2B Companies', description: 'Qualify inbound leads, answer technical questions, schedule demos, and route to the right sales rep.' },
        { title: 'Real Estate', description: 'Property inquiries, viewing scheduling, neighborhood info, and buyer/seller qualification 24/7.' },
      ],
    },
    pricing: {
      title: 'Chatbot Packages',
      packages: [
        { name: 'FAQ Bot', price: 'From €497', description: 'Answer common questions automatically', features: ['Up to 50 FAQ answers', 'Website widget', 'Basic analytics', '30-day support'] },
        { name: 'Sales Bot', price: 'From €997', description: 'Qualify leads & collect contacts', features: ['Unlimited knowledge base', 'Lead capture forms', 'CRM integration', 'Email notifications', '60-day support'], popular: true },
        { name: 'Custom Bot', price: 'Custom', description: 'Full custom AI solution', features: ['Custom AI training', 'Multiple integrations', 'Advanced workflows', 'Ongoing maintenance'] },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        { id: 'c1', question: 'What are AI chatbots for business and how do they work?', answer: 'AI chatbots for business are conversational AI systems trained on your specific data — products, services, policies, and FAQs. They understand natural language, answer customer questions accurately, qualify leads, and can trigger actions in your CRM or other tools. Unlike rule-based bots, AI chatbots learn and improve over time.' },
        { id: 'c2', question: 'How much does a business chatbot cost?', answer: 'Our FAQ Bot starts from €497 for answering common questions. The Sales Bot starts from €997 and includes lead qualification, CRM integration, and advanced features. Custom bots with multiple integrations and AI training are quoted individually based on complexity.' },
        { id: 'c3', question: 'Can the chatbot integrate with my CRM and other tools?', answer: 'Yes. We integrate chatbots with HubSpot, Pipedrive, Salesforce, Gmail, Outlook, Stripe, and hundreds of other tools. Leads and conversations are automatically synced to your existing systems.' },
        { id: 'c4', question: 'How are AI chatbots different from simple chat widgets?', answer: 'Simple chat widgets follow rigid scripts and can only match exact keywords. AI chatbots understand context, handle complex questions, remember conversation history, and provide personalized responses. They can also trigger actions — like creating a CRM contact or sending a follow-up email.' },
        { id: 'c5', question: 'How long does it take to build and launch a chatbot?', answer: 'A basic FAQ bot can be live in 1-2 weeks. Sales bots with CRM integration typically take 2-3 weeks. Custom solutions with multiple integrations and AI training take 3-6 weeks.' },
        { id: 'c6', question: 'Will the chatbot work in multiple languages?', answer: 'Yes. Our AI chatbots support multilingual conversations. They can detect the customer\'s language and respond accordingly — perfect for businesses serving Lithuanian and international customers.' },
        { id: 'c7', question: 'What happens if the chatbot can\'t answer a question?', answer: 'The chatbot gracefully hands off to a human agent when it encounters questions outside its training. It collects the customer\'s contact info and question, so your team can follow up quickly. Over time, we add new answers based on these handoffs.' },
      ],
    },
    cta: {
      title: 'Ready to Automate Customer Conversations?',
      subtitle: 'Book a free consultation. We\'ll show you exactly how a chatbot would work for your business and estimate the ROI.',
      button: 'Book Free Consultation',
      note: 'No commitment • 20-minute call • Clear next steps',
    },
  },
  lt: {
    hero: {
      badge: 'AI Chatbotai',
      title: 'AI chatbotai verslui: DUK, pardavimai, aptarnavimas 24/7',
      subtitle: 'Nustokite prarasti klientus ir užklausas po darbo valandų. Kuriame individualius AI chatbotus, kurie atsako į klausimus, kvalifikuoja užklausas ir parduoda — apmokyti jūsų verslo duomenimis.',
      benefits: [
        'Individualus AI chatbotas, apmokytas jūsų produktais ir paslaugomis',
        'Integracijos su CRM, el. paštu ir mokėjimų sistemomis',
        'Analitikos suvestinė su pokalbių įžvalgomis',
      ],
      cta: 'Rezervuoti konsultaciją',
    },
    process: {
      title: 'Kaip tai veikia',
      steps: [
        { number: '1', title: 'Konsultacija', description: 'Išanalizuojame jūsų klientų užklausas, pardavimų procesą ir aptarnavimo poreikius, kad suprojektuotume idealų chatbotą.', duration: '30 min' },
        { number: '2', title: 'Chatboto dizainas', description: 'Suprojektuojame pokalbio eigas, asmenybę ir integracijas pagal jūsų verslo tikslus.', duration: '3–5 dienos' },
        { number: '3', title: 'Apmokymas ir integracijos', description: 'Apmokome AI jūsų duomenimis, sujungiame su CRM ir įrankiais, testuojame su realiais scenarijais.', duration: '1–2 savaitės' },
        { number: '4', title: 'Paleidimas ir optimizavimas', description: 'Paleidžiame chatbotą, stebime rezultatus ir nuolat optimizuojame pagal realius pokalbius.', duration: '30 dienų' },
      ],
    },
    deliverables: {
      title: 'Ką gaunate',
      items: [
        { title: 'AI chatbotas, apmokytas jūsų duomenimis', description: 'Pokalbinis AI, kuris žino jūsų produktus, kainas, taisykles ir DUK — tiksliai atsako klientams 24/7.', icon: 'brain' },
        { title: 'CRM ir įrankių integracija', description: 'Chatboto surinkti kontaktai automatiškai išsaugomi HubSpot, Pipedrive ar kitame CRM su visu kontekstu.', icon: 'link' },
        { title: 'Analitikos suvestinė', description: 'Realaus laiko įžvalgos apie pokalbių skaičių, daženiausius klausimus, užklausų kokybę ir chatboto efektyvumą.', icon: 'chart' },
        { title: 'Nuolatinė optimizacija', description: 'Stebime pokalbius, tobuliname atsakymus ir plečiame žinių bazę augant jūsų verslui.', icon: 'refresh' },
      ],
    },
    integrations: {
      title: 'Integracijos',
      subtitle: 'Jūsų chatbotas jungiasi su įrankiais, kuriuos jau naudojate.',
      categories: [
        { name: 'Svetainė', tools: 'WordPress, Shopify, individualios svetainės' },
        { name: 'CRM', tools: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'El. paštas', tools: 'Gmail, Outlook, SendGrid' },
        { name: 'Mokėjimai', tools: 'Stripe, PayPal' },
        { name: 'Socialiniai', tools: 'Facebook Messenger, Instagram DM' },
        { name: 'API', tools: 'REST, webhooks, individualios API' },
      ],
    },
    useCases: {
      title: 'Kam tinka',
      items: [
        { title: 'E-komercija', description: 'Produktų rekomendacijos, užsakymų sekimas, dydžių gidai, grąžinimo taisyklės — viskas iškart per chatbotą.' },
        { title: 'Paslaugų verslas', description: 'Vizitų rezervavimas, kainų klausimai, paslaugų paaiškinimai ir kontaktų surinkimas autopilotu.' },
        { title: 'B2B įmonės', description: 'Kvalifikuokite užklausas, atsakykite į techninius klausimus, planuokite demo ir nukreipkite pas teisingą pardavėją.' },
        { title: 'Nekilnojamas turtas', description: 'Turto užklausos, apžiūrų planavimas, rajono informacija ir pirkėjų/pardavėjų kvalifikavimas 24/7.' },
      ],
    },
    pricing: {
      title: 'Chatbotų paketai',
      packages: [
        { name: 'DUK Botas', price: 'Nuo €497', description: 'Atsakykite į daženiausius klausimus automatiškai', features: ['Iki 50 DUK atsakymų', 'Svetainės widget\'as', 'Bazinė analitika', '30 dienų palaikymas'] },
        { name: 'Pardavimų Botas', price: 'Nuo €997', description: 'Kvalifikuokite užklausas ir rinkite kontaktus', features: ['Neribota žinių bazė', 'Kontaktų surinkimo formos', 'CRM integracija', 'El. pašto pranešimai', '60 dienų palaikymas'], popular: true },
        { name: 'Individualus Botas', price: 'Individuali', description: 'Pilnas individualus AI sprendimas', features: ['Individualus AI apmokymas', 'Daugybė integracijų', 'Išplėstinės darbo eigos', 'Nuolatinė priežiūra'] },
      ],
    },
    faq: {
      title: 'DUK',
      items: [
        { id: 'c1', question: 'Kas yra AI chatbotai verslui ir kaip jie veikia?', answer: 'AI chatbotai verslui yra pokalbinio AI sistemos, apmokytos jūsų konkrečiais duomenimis — produktais, paslaugomis, taisyklėmis ir DUK. Jie supranta natūralią kalbą, tiksliai atsako į klientų klausimus, kvalifikuoja užklausas ir gali paleisti veiksmus jūsų CRM ar kituose įrankiuose. Skirtingai nuo taisyklėmis paremtu botų, AI chatbotai mokosi ir tobulėja laikui bėgant.' },
        { id: 'c2', question: 'Kiek kainuoja chatbotas verslui?', answer: 'Mūsų DUK Botas prasideda nuo €497 daženiausių klausimų atsakymams. Pardavimų Botas prasideda nuo €997 ir apima užklausų kvalifikavimą, CRM integraciją ir išplėstines funkcijas. Individualus botas su daugeliu integracijų ir AI apmokymu įkainojamas pagal sudėtingumą.' },
        { id: 'c3', question: 'Ar chatbotas gali integruotis su mano CRM ir kitais įrankiais?', answer: 'Taip. Integruojame chatbotus su HubSpot, Pipedrive, Salesforce, Gmail, Outlook, Stripe ir šimtais kitų įrankių. Užklausos ir pokalbiai automatiškai sinchronizuojami su jūsų esamomis sistemomis.' },
        { id: 'c4', question: 'Kuo AI chatbotai skiriasi nuo paprastų pokalbio widget\'ų?', answer: 'Paprasti pokalbio widget\'ai seka gruodžius scenarijus ir gali atpažinti tik tikslius raktiniams žodžius. AI chatbotai supranta kontekstą, tvarko sudėtingus klausimus, prisimena pokalbio istoriją ir pateikia personalizuotus atsakymus. Jie taip pat gali paleisti veiksmus — sukurti CRM kontaktą ar išsiųsti sekimo laišką.' },
        { id: 'c5', question: 'Per kiek laiko galima sukurti ir paleisti chatbotą?', answer: 'Bazinis DUK botas gali veikti per 1–2 savaites. Pardavimų botai su CRM integracija paprastai užtruko 2–3 savaites. Individualius sprendimai su daugeliu integracijų ir AI apmokymu — 3–6 savaites.' },
        { id: 'c6', question: 'Ar chatbotas veiks keliomis kalbomis?', answer: 'Taip. Mūsų AI chatbotai palaiko daugiakalbės pokalbius. Jie atpažįsta kliento kalbą ir atsako atitinkamai — puikiai tinka verslams, aptarnaujantiems Lietuvos ir tarptautinius klientus.' },
        { id: 'c7', question: 'Kas nutinka, jei chatbotas negali atsakyti į klausimą?', answer: 'Chatbotas graciškai perduoda pokalbį žmogui, kai susiduria su klausimais už savo apmokymo ribų. Jis surenka kliento kontaktus ir klausimą, kad jūsų komanda galėtų greitai sužinoti. Laikui bėgant, pridėme naujus atsakymus pagal šiuos perdavimus.' },
      ],
    },
    cta: {
      title: 'Pasiruošę automatizuoti klientų pokalbius?',
      subtitle: 'Užsirezervuokite nemokamą konsultaciją. Parodysime, kaip chatbotas veiktų jūsų verslui ir įvertinsime ROI.',
      button: 'Rezervuoti konsultaciją',
      note: 'Be įsipareigojimų • 20 min. pokalbis • Aiskūs tolesni žingsniai',
    },
  },
};

const chatMessages = {
  en: [
    { from: 'user', text: 'Hi! Do you deliver to Vilnius?' },
    { from: 'bot', text: 'Yes! We deliver to Vilnius within 1-2 business days. Free shipping on orders over €50.' },
    { from: 'user', text: 'What about the EcoRide Pro scooter battery life?' },
    { from: 'bot', text: 'The EcoRide Pro has a 48V 15Ah battery — up to 65km on a single charge. Would you like me to send you the full specs?' },
  ],
  lt: [
    { from: 'user', text: 'Sveiki! Ar pristatote į Vilnių?' },
    { from: 'bot', text: 'Taip! Pristatome į Vilnių per 1-2 darbo dienas. Nemokamas pristatymas užsakymams nuo €50.' },
    { from: 'user', text: 'O koks EcoRide Pro paspirtuko baterijos tarnavimas?' },
    { from: 'bot', text: 'EcoRide Pro turi 48V 15Ah bateriją — iki 65km vienu įkrovimu. Ar norėtumėte gauti pilnas specifikacijas?' },
  ],
};

export default function AIChatbotaiPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const messages = locale === 'lt' ? chatMessages.lt : chatMessages.en;
  const isLT = locale === 'lt';

  const breadcrumbItems = [
    { name: isLT ? 'Pradžia' : 'Home', url: isLT ? '/lt' : '/' },
  ];

  const deliverableIcons: Record<string, React.ReactNode> = {
    brain: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    link: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    chart: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    refresh: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <StructuredData type="service" data={{ name: isLT ? 'AI Chatbotai Verslui' : 'AI Chatbots for Business' }} page="ai-chatbotai" />
      <Header />
      <Breadcrumb items={breadcrumbItems} currentPage={isLT ? 'AI chatbotai' : 'AI Chatbots'} />

      {/* Hero with Chat Animation */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                {c.hero.badge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{c.hero.title}</h1>
              <p className="text-lg text-gray-300 mb-8">{c.hero.subtitle}</p>
              <div className="flex flex-col gap-3 mb-8">
                {c.hero.benefits.map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.15 }} className="flex items-center gap-3 text-purple-300">
                    <div className="w-5 h-5 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-sm">{b}</span>
                  </motion.div>
                ))}
              </div>
              <motion.a href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all text-lg shadow-lg shadow-purple-500/25" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {c.hero.cta}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </motion.a>
            </motion.div>

            {/* Right: Chat Widget Mockup */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
              <div className="relative">
                {/* Glowing border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50 rounded-3xl blur-sm opacity-75" />
                <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/20 overflow-hidden">
                  {/* Chat header */}
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">AI Assistant</div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-white/70 text-xs">{isLT ? 'Prisijungęs' : 'Online'}</span>
                      </div>
                    </div>
                  </div>
                  {/* Chat messages */}
                  <div className="p-6 space-y-4 min-h-[320px]">
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.7, duration: 0.4 }}
                        className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                          msg.from === 'user'
                            ? 'bg-purple-600 text-white rounded-br-md'
                            : 'bg-slate-800 text-gray-200 border border-slate-700 rounded-bl-md'
                        }`}>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                    {/* Typing indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.6 }}
                      className="flex justify-start"
                    >
                      <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-purple-400 rounded-full" />
                        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-purple-400 rounded-full" />
                        <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-purple-400 rounded-full" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process - Chat-style Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.process.title}</h2>
          </motion.div>

          <div className="space-y-8">
            {c.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-md relative ${index % 2 === 0 ? '' : ''}`}>
                  {/* Connector line */}
                  {index < c.process.steps.length - 1 && (
                    <div className={`hidden md:block absolute top-full ${index % 2 === 0 ? 'left-12' : 'right-12'} w-px h-8 bg-gradient-to-b from-purple-300 to-transparent`} />
                  )}
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    {/* Step number bubble */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/25">
                      {step.number}
                    </div>
                    {/* Content card */}
                    <div className={`bg-gray-50 rounded-2xl p-5 border border-gray-100 ${index % 2 === 0 ? 'rounded-tl-md' : 'rounded-tr-md'}`}>
                      <div className="flex items-center justify-between mb-2 gap-3">
                        <h3 className="font-bold text-gray-900">{step.title}</h3>
                        <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2.5 py-1 rounded-full whitespace-nowrap">{step.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables - Feature Showcase with Chat Widget Mockup */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
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
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/30 group-hover:via-blue-500/30 group-hover:to-purple-500/30 rounded-2xl blur-sm transition-all duration-500" />
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 group-hover:border-purple-200 transition-colors h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                    {deliverableIcons[item.icon]}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations - Connected Nodes Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.integrations.title}</h2>
            <p className="text-lg text-gray-600">{c.integrations.subtitle}</p>
          </motion.div>

          {/* Central node layout */}
          <div className="relative py-16">
            {/* Central chatbot icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 w-24 h-24 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl shadow-purple-500/25 mb-12"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </motion.div>

            {/* Integration nodes in a grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {c.integrations.categories.map((cat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all text-center"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mx-auto mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{cat.name}</h3>
                  <p className="text-gray-500 text-xs">{cat.tools}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
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
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Dark Section with Animated Border Gradient */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{c.pricing.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.pricing.packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Glowing border for popular */}
                {pkg.popular && (
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/60 via-blue-500/60 to-purple-500/60 rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
                )}
                {/* Animated border for non-popular on hover */}
                {!pkg.popular && (
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/40 group-hover:via-blue-500/40 group-hover:to-purple-500/40 rounded-3xl blur-sm transition-all duration-500" />
                )}
                <div className={`relative rounded-3xl p-8 border h-full flex flex-col ${
                  pkg.popular
                    ? 'bg-slate-800/90 backdrop-blur-xl border-purple-500/30'
                    : 'bg-white/5 backdrop-blur-xl border-white/10'
                }`}>
                  {pkg.popular && (
                    <span className="inline-block text-xs font-semibold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full mb-4 w-fit border border-purple-500/30">
                      {isLT ? 'Populiariausias' : 'Most Popular'}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">{pkg.price}</div>
                  <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={`/${locale}/contact`}
                    className={`block w-full py-3.5 rounded-xl font-semibold text-center transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {c.hero.cta}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Floating elements */}
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-16 left-[15%] w-16 h-16 bg-white/10 rounded-2xl rotate-12" />
        <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-16 right-[15%] w-12 h-12 bg-white/10 rounded-full" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
            <p className="text-purple-100 mb-8 text-lg">{c.cta.subtitle}</p>
            <motion.a href={`/${locale}/contact`} className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{c.cta.button}</motion.a>
            <p className="text-purple-200 text-sm mt-4">{c.cta.note}</p>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <RelatedSolutions currentPage="ai-chatbotai" />

      {/* FAQ */}
      <FAQ items={c.faq.items} title={c.faq.title} />

      <Footer />
    </div>
  );
}
