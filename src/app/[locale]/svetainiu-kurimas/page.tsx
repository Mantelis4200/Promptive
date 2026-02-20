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
      badge: 'Website Development',
      title: 'Website Development: Fast Launch + SEO + Integrations',
      subtitle: 'For businesses that need a professional website that actually generates leads. We build fast, SEO-optimized websites with CRM, payment, and chatbot integrations.',
      benefits: [
        'SEO-optimized from day one \u2014 built for Google rankings',
        'Integrations with CRM, payments, calendar, and chatbots',
        'Fast delivery: landing pages from 24h, websites from 3 days',
      ],
      cta: 'Book Consultation',
    },
    fast: {
      title: 'Website in 24 Hours: When It\'s Possible and What\'s Included',
      subtitle: 'Not every website takes weeks. Here\'s what we can deliver and when.',
      items: [
        { type: 'Landing Page', time: '24 hours', description: 'Single-page site with clear CTA, contact form, SEO setup. Perfect for product launches and campaigns.' },
        { type: 'Business Website', time: '3\u20137 days', description: 'Multi-page site with portfolio, services, blog, CRM integration, and full SEO.' },
        { type: 'E-commerce', time: '2\u20134 weeks', description: 'Full online store with payments, shipping, inventory management, and product SEO.' },
      ],
      included: ['Responsive design (mobile-first)', 'SEO setup (meta tags, sitemap, schema)', 'Contact form + CRM connection', 'Google Analytics & Search Console', 'SSL certificate', '30-day support'],
    },
    process: {
      title: 'How It Works',
      steps: [
        { number: '1', title: 'Discovery Call', description: 'We discuss your goals, audience, and requirements.', duration: 'Day 1' },
        { number: '2', title: 'Design & Content', description: 'We create wireframes and design mockups. You approve the direction.', duration: 'Days 2\u20133' },
        { number: '3', title: 'Development', description: 'We build the site, integrate tools, optimize for SEO and speed.', duration: 'Days 4\u20137' },
        { number: '4', title: 'Launch & Optimize', description: 'We launch, submit to Google, and fine-tune based on initial data.', duration: 'Day 7+' },
      ],
    },
    deliverables: {
      title: 'What You Get',
      items: [
        { title: 'Responsive Design', description: 'Looks great on any device \u2014 phone, tablet, desktop. Mobile-first approach.' },
        { title: 'SEO Optimization', description: 'Technical SEO, meta tags, schema markup, sitemap, page speed optimization.' },
        { title: 'CRM Integration', description: 'Contact forms connected to HubSpot, Pipedrive, or your preferred CRM.' },
        { title: 'Analytics Setup', description: 'Google Analytics, Search Console, conversion tracking \u2014 all configured.' },
      ],
    },
    integrations: {
      title: 'Integrations',
      subtitle: 'Your website connected to the tools you already use.',
      categories: [
        { name: 'CRM', tools: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'Email', tools: 'Gmail, Outlook, Mailchimp' },
        { name: 'Payments', tools: 'Stripe, PayPal, bank links' },
        { name: 'Calendar', tools: 'Google Calendar, Calendly' },
        { name: 'AI Chatbot', tools: 'Custom AI chatbot integration' },
        { name: 'Analytics', tools: 'Google Analytics, GTM, Meta Pixel' },
      ],
    },
    useCases: {
      title: 'Who This Is For',
      items: [
        { title: 'Startups', description: 'Need a professional online presence fast? We launch MVPs and landing pages in 24\u201348h.' },
        { title: 'Service Businesses', description: 'Lawyers, dentists, consultants \u2014 websites that generate appointments and build trust.' },
        { title: 'E-commerce', description: 'Online stores with payments, delivery tracking, and product catalog management.' },
        { title: 'B2B Companies', description: 'Corporate websites with case studies, service pages, and lead capture systems.' },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        { id: 's1', question: 'Can you really build a website in 24 hours?', answer: 'Yes \u2014 for simple landing pages. We have templates and processes optimized for fast delivery. Business websites take 3\u20137 days, and e-commerce stores 2\u20134 weeks.' },
        { id: 's2', question: 'How do you determine pricing?', answer: 'Pricing depends on the project scope: complexity, number of pages, design requirements, and integrations needed. Book a free consultation to get a personalized quote.' },
        { id: 's3', question: 'Is SEO included?', answer: 'Yes. Every website we build includes technical SEO: meta tags, schema markup, sitemap, page speed optimization, and Google Search Console setup.' },
        { id: 's4', question: 'Can you integrate with our CRM?', answer: 'Yes. We integrate with HubSpot, Pipedrive, Salesforce, and most other CRMs. Contact form submissions go directly to your CRM.' },
        { id: 's5', question: 'Do you provide hosting?', answer: 'We recommend and help set up hosting on Vercel, Netlify, or your preferred platform. We optimize for speed and reliability.' },
        { id: 's6', question: 'Can you add an AI chatbot to the website?', answer: 'Yes! We build custom AI chatbots that can answer visitor questions, qualify leads, and collect contact information 24/7.' },
        { id: 's7', question: 'What about ongoing maintenance?', answer: 'All projects include 30 days of support. We also offer monthly maintenance plans for updates, security, and new features.' },
      ],
    },
    cta: {
      title: 'Ready to Launch Your Website?',
      subtitle: 'Book a free consultation. We\'ll discuss your goals and recommend the best solution for your business.',
      button: 'Book Free Consultation',
      note: 'No commitment \u2022 Free estimate \u2022 20-minute call',
    },
  },
  lt: {
    hero: {
      badge: 'Svetaini\u0173 k\u016Brimas',
      title: 'Svetaini\u0173 k\u016Brimas: greitas startas + SEO + integracijos',
      subtitle: 'Verslams, kuriems reikia profesionalios svetain\u0117s, kuri i\u0161 tikr\u0173j\u0173 generuoja u\u017Eklausas. Kuriame greitas, SEO optimizuotas svetaines su CRM, mok\u0117jim\u0173 ir chatboto integracijomis.',
      benefits: [
        'SEO optimizuota nuo pirmos dienos \u2014 sukurta Google reitingams',
        'Integracijos su CRM, mok\u0117jimais, kalendoriumi ir chatbotais',
        'Greitas pristatymas: landing puslapiai nuo 24 val., svetain\u0117s nuo 3 dien\u0173',
      ],
      cta: 'Rezervuoti konsultacij\u0105',
    },
    fast: {
      title: 'Svetain\u0117 per 24 val.: kada \u012Fmanoma ir kas \u012Feina',
      subtitle: 'Ne kiekviena svetain\u0117 u\u017Etrunka savaites. \u0160tai k\u0105 galime pristatyti ir per kiek laiko.',
      items: [
        { type: 'Landing puslapis', time: '24 valandos', description: 'Vieno puslapio svetain\u0117 su ai\u0161kiu CTA, kontakt\u0173 forma ir SEO nustatymais. Puikiai tinka produkt\u0173 pristatymams ir kampanijoms.' },
        { type: 'Verslo svetain\u0117', time: '3\u20137 dienos', description: 'Keli\u0173 puslapi\u0173 svetain\u0117 su portfolio, paslaugomis, blogu, CRM integracija ir pilnu SEO.' },
        { type: 'El. parduotuv\u0117', time: '2\u20134 savait\u0117s', description: 'Pilna internetin\u0117 parduotuv\u0117 su mok\u0117jimais, pristatymu, atsarg\u0173 valdymu ir produkt\u0173 SEO.' },
      ],
      included: ['Responsyvus dizainas (mobile-first)', 'SEO nustatymai (meta \u017Eym\u0117s, sitemap, schema)', 'Kontakt\u0173 forma + CRM sujungimas', 'Google Analytics ir Search Console', 'SSL sertifikatas', '30 dien\u0173 palaikymas'],
    },
    process: {
      title: 'Kaip tai veikia',
      steps: [
        { number: '1', title: 'Pa\u017Eintinis pokalbis', description: 'Aptariame j\u016Bs\u0173 tikslus, auditorij\u0105 ir reikalavimus.', duration: '1 diena' },
        { number: '2', title: 'Dizainas ir turinys', description: 'Sukuriame wireframe ir dizaino maketus. Patvirtinate krypt\u012F.', duration: '2\u20133 dienos' },
        { number: '3', title: 'K\u016Brimas', description: 'Sukuriame svetain\u0119, integruojame \u012Frankius, optimizuojame SEO ir greit\u012F.', duration: '4\u20137 dienos' },
        { number: '4', title: 'Paleidimas ir optimizavimas', description: 'Paleid\u017Eiame, pateikiame Google ir tobuliname pagal pradinius duomenis.', duration: '7+ diena' },
      ],
    },
    deliverables: {
      title: 'K\u0105 gaunate',
      items: [
        { title: 'Responsyvus dizainas', description: 'Puikiai atrodo bet kuriame \u012Frenginyje \u2014 telefone, plan\u0161et\u0117je, kompiuteryje.' },
        { title: 'SEO optimizavimas', description: 'Techninis SEO, meta \u017Eym\u0117s, schema markup, sitemap, puslapio grei\u010Dio optimizavimas.' },
        { title: 'CRM integracija', description: 'Kontakt\u0173 formos sujungtos su HubSpot, Pipedrive ar j\u016Bs\u0173 pasirinktu CRM.' },
        { title: 'Analitikos nustatymas', description: 'Google Analytics, Search Console, konversij\u0173 sekimas \u2014 viskas sukonfig\u016Bruota.' },
      ],
    },
    integrations: {
      title: 'Integracijos',
      subtitle: 'J\u016Bs\u0173 svetain\u0117 sujungta su \u012Frankiais, kuriuos jau naudojate.',
      categories: [
        { name: 'CRM', tools: 'HubSpot, Pipedrive, Salesforce' },
        { name: 'El. pa\u0161tas', tools: 'Gmail, Outlook, Mailchimp' },
        { name: 'Mok\u0117jimai', tools: 'Stripe, PayPal, banko nuorodos' },
        { name: 'Kalendorius', tools: 'Google Calendar, Calendly' },
        { name: 'AI chatbotas', tools: 'Individualus AI chatboto integracija' },
        { name: 'Analitika', tools: 'Google Analytics, GTM, Meta Pixel' },
      ],
    },
    useCases: {
      title: 'Kam tinka',
      items: [
        { title: 'Startuoliai', description: 'Reikia profesionalaus buvimo internete greitai? Paleid\u017Eiame MVP ir landing puslapius per 24\u201348 val.' },
        { title: 'Paslaug\u0173 verslas', description: 'Teisininkai, odontologai, konsultantai \u2014 svetain\u0117s, kurios generuoja vizitus ir kuria pasitik\u0117jim\u0105.' },
        { title: 'E-komercija', description: 'Internetin\u0117s parduotuv\u0117s su mok\u0117jimais, pristatymo sekimu ir produkt\u0173 katalogo valdymu.' },
        { title: 'B2B \u012Fmon\u0117s', description: 'Korporatyvin\u0117s svetain\u0117s su atvej\u0173 analiz\u0117mis, paslaug\u0173 puslapiais ir u\u017Eklaus\u0173 surinkimo sistemomis.' },
      ],
    },
    faq: {
      title: 'DUK',
      items: [
        { id: 's1', question: 'Ar tikrai galite sukurti svetain\u0119 per 24 valandas?', answer: 'Taip \u2014 paprastiems landing puslapiams. Turime optimizuotus \u0161ablonus ir procesus greitam pristatymui. Verslo svetain\u0117s u\u017Etrunka 3\u20137 dienas, el. parduotuv\u0117s 2\u20134 savaites.' },
        { id: 's2', question: 'Kaip nustatote kain\u0105?', answer: 'Kaina priklauso nuo projekto apimties: sud\u0117tingumo, puslapi\u0173 skai\u010Diaus, dizaino reikalavim\u0173 ir reikaling\u0173 integracija\u0173. U\u017Esirezervuokite nemokam\u0105 konsultacij\u0105 ir gaukite individual\u0173 pasi\u016Blym\u0105.' },
        { id: 's3', question: 'Ar SEO optimizavimas \u012Feina \u012F kain\u0105?', answer: 'Taip. Kiekviena m\u016Bs\u0173 sukurta svetain\u0117 apima techin\u012F SEO: meta \u017Eymes, schema markup, sitemap, puslapio grei\u010Dio optimizavim\u0105 ir Google Search Console nustatym\u0105.' },
        { id: 's4', question: 'Ar galite integruoti su m\u016Bs\u0173 CRM?', answer: 'Taip. Integruojame su HubSpot, Pipedrive, Salesforce ir daugeliu kit\u0173 CRM. Kontakt\u0173 form\u0173 u\u017Epildymai patenka tiesiai \u012F j\u016Bs\u0173 CRM.' },
        { id: 's5', question: 'Ar teikiate hosting\u0105?', answer: 'Rekomenduojame ir padedame nustatyti hosting\u0105 Vercel, Netlify arba j\u016Bs\u0173 pasirinktoje platformoje. Optimizuojame greit\u012F ir patikimum\u0105.' },
        { id: 's6', question: 'Ar galite prid\u0117ti AI chatbot\u0105 \u012F svetain\u0119?', answer: 'Taip! Kuriame individualius AI chatbotus, kurie atsako \u012F lankytoj\u0173 klausimus, kvalifikuoja u\u017Eklausas ir renka kontaktin\u0119 informacij\u0105 24/7.' },
        { id: 's7', question: 'O kaip d\u0117l nuolatin\u0117s prie\u017Ei\u016Bros?', answer: 'Visi projektai apima 30 dien\u0173 palaikym\u0105. Taip pat si\u016Blome m\u0117nesinius prie\u017Ei\u016Bros planus atnaujinimams, saugumui ir naujoms funkcijoms.' },
      ],
    },
    cta: {
      title: 'Pasiruo\u0161\u0119 paleisti savo svetain\u0119?',
      subtitle: 'U\u017Esirezervuokite nemokam\u0105 konsultacij\u0105. Aptarsime j\u016Bs\u0173 tikslus ir rekomenduosime geriausi\u0105 sprendim\u0105 j\u016Bs\u0173 verslui.',
      button: 'Rezervuoti konsultacij\u0105',
      note: 'Be \u012Fsipareigojim\u0173 \u2022 Nemokamas \u012Fvertinimas \u2022 20 min. pokalbis',
    },
  },
};

export default function SvetainiuKurimasPage() {
  const locale = useLocale();
  const c = locale === 'lt' ? t.lt : t.en;
  const isLT = locale === 'lt';

  const breadcrumbItems = [
    { name: isLT ? 'Prad\u017Eia' : 'Home', url: isLT ? '/lt' : '/' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <StructuredData type="service" data={{ name: isLT ? 'Svetaini\u0173 K\u016Brimas' : 'Website Development' }} page="svetainiu-kurimas" />
      <Header />
      <Breadcrumb items={breadcrumbItems} currentPage={isLT ? 'Svetaini\u0173 k\u016Brimas' : 'Website Development'} />

      {/* Hero - Browser Mockup */}
      <section className="pt-16 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />

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
            <motion.a href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all text-lg shadow-lg shadow-purple-500/25" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {c.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
          </motion.div>

          {/* Browser Mockup */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-purple-500/40 rounded-2xl blur-sm opacity-75" />
              <div className="relative bg-slate-800 rounded-2xl border border-white/10 overflow-hidden">
                {/* Browser top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500/80 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500/80 rounded-full" />
                    <div className="w-3 h-3 bg-green-500/80 rounded-full" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-slate-700/50 rounded-lg px-4 py-1.5 text-xs text-gray-400 max-w-md mx-auto text-center">
                      yourwebsite.com
                    </div>
                  </div>
                </div>
                {/* Browser content - abstract website layout */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-3 bg-purple-500/30 rounded-full" />
                    <div className="flex gap-3">
                      <div className="w-12 h-2 bg-white/10 rounded-full" />
                      <div className="w-12 h-2 bg-white/10 rounded-full" />
                      <div className="w-12 h-2 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <div className="w-48 h-3 bg-white/20 rounded-full" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                    <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                    <div className="h-16 bg-white/5 rounded-lg border border-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fast Delivery - Milestone Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.fast.title}</h2>
            <p className="text-lg text-gray-600">{c.fast.subtitle}</p>
          </motion.div>

          {/* Horizontal Timeline Bar */}
          <div className="relative mb-12">
            <div className="hidden md:block h-2 bg-gray-100 rounded-full mb-8">
              <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1.5 }} viewport={{ once: true }} className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {c.fast.items.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.2 }} viewport={{ once: true }} className="relative">
                  <div className="hidden md:block absolute -top-11 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg" />
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="mb-3">
                      <span className="text-sm font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{item.time}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.type}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Always Included */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="font-bold text-gray-900 mb-4 text-center">{isLT ? 'Kas visada \u012Feina' : 'Always Included'}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {c.fast.included.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.05 }} viewport={{ once: true }} className="flex items-center gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process - Vertical Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.process.title}</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-300" />

            {c.process.steps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }} className={`relative flex items-start gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg shadow-purple-500/30 z-10" />
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold">{step.number}</div>
                      <span className="text-xs text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">{step.duration}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables - Gradient Feature Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.deliverables.title}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.deliverables.items.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100/50 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations - Logo Grid with Tooltips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{c.integrations.title}</h2>
            <p className="text-lg text-gray-600">{c.integrations.subtitle}</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {c.integrations.categories.map((cat, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.08 }} viewport={{ once: true }} whileHover={{ y: -4, scale: 1.05 }} className="bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all cursor-default group relative">
                <span className="font-semibold text-purple-600">{cat.name}</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-500 text-sm">{cat.tools}</span>
              </motion.div>
            ))}
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
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-purple-200 transition-all">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-2xl rotate-12" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.cta.title}</h2>
            <p className="text-purple-100 mb-8 text-lg">{c.cta.subtitle}</p>
            <motion.a href={`/${locale}/contact`} className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{c.cta.button}</motion.a>
            <p className="text-purple-200 text-sm mt-4">{c.cta.note}</p>
          </motion.div>
        </div>
      </section>

      <RelatedSolutions currentPage="svetainiu-kurimas" />
      <FAQ items={c.faq.items} title={c.faq.title} />

      <Footer />
    </div>
  );
}
