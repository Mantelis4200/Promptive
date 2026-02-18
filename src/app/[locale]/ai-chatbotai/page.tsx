'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const t = {
  en: {
    hero: {
      badge: 'AI Chatbots',
      title: 'AI Chatbots for Business',
      subtitle: 'Automate customer service, answer FAQs, qualify leads, and collect contacts — 24/7. Custom AI chatbots trained on your business data.',
      cta: 'Get Free Consultation',
    },
    benefits: {
      title: 'What AI Chatbots Can Do',
      items: [
        { title: '24/7 Availability', description: 'Answer customer questions any time, even outside business hours.' },
        { title: 'Instant Responses', description: 'No more waiting — customers get answers in seconds.' },
        { title: 'Lead Qualification', description: 'Collect contact info and qualify leads automatically.' },
        { title: 'Product Knowledge', description: 'Trained on your catalog — finds products, specs, and prices.' },
        { title: 'Multilingual', description: 'Support customers in multiple languages simultaneously.' },
        { title: 'CRM Integration', description: 'Automatically save leads to HubSpot, Pipedrive, etc.' },
      ],
    },
    useCases: {
      title: 'Perfect For',
      items: [
        { title: 'E-commerce', description: 'Product questions, order tracking, recommendations' },
        { title: 'Service Businesses', description: 'Booking, pricing, FAQs, lead capture' },
        { title: 'B2B Companies', description: 'Quote requests, product specs, lead qualification' },
        { title: 'Real Estate', description: 'Property inquiries, viewing scheduling, qualification' },
      ],
    },
    pricing: {
      title: 'Chatbot Packages',
      packages: [
        { name: 'FAQ Bot', price: 'From €497', description: 'Answer common questions', features: ['Up to 50 FAQ answers', 'Website widget', 'Basic analytics', '30-day support'] },
        { name: 'Sales Bot', price: 'From €997', description: 'Qualify leads & collect contacts', features: ['Unlimited knowledge base', 'Lead capture forms', 'CRM integration', 'Email notifications', '60-day support'], popular: true },
        { name: 'Custom Bot', price: 'Custom', description: 'Full custom solution', features: ['Custom AI training', 'Multiple integrations', 'Advanced workflows', 'Ongoing maintenance'] },
      ],
    },
    cta: {
      title: 'Ready to Automate Customer Service?',
      subtitle: 'Book a free demo. We\'ll show you exactly how a chatbot would work for your business.',
      button: 'Book Free Demo',
    },
  },
  lt: {
    hero: {
      badge: 'AI Chatbotai',
      title: 'AI Chatbotai Verslui',
      subtitle: 'Automatizuokite klientų aptarnavimą, atsakykite į DUK, kvalifikuokite lead\'us ir rinkite kontaktus — 24/7. Individualūs AI chatbotai, apmokyti jūsų verslo duomenimis.',
      cta: 'Nemokama Konsultacija',
    },
    benefits: {
      title: 'Ką Gali AI Chatbotai',
      items: [
        { title: '24/7 Pasiekiamumas', description: 'Atsakykite į klientų klausimus bet kuriuo metu, net ir po darbo valandų.' },
        { title: 'Momentiniai Atsakymai', description: 'Jokio laukimo — klientai gauna atsakymus per sekundes.' },
        { title: 'Lead\'ų Kvalifikavimas', description: 'Automatiškai surinkite kontaktus ir kvalifikuokite lead\'us.' },
        { title: 'Produktų Žinios', description: 'Apmokytas jūsų kataloge — randa produktus, specifikacijas ir kainas.' },
        { title: 'Daugiakalbis', description: 'Aptarnaukite klientus keliomis kalbomis vienu metu.' },
        { title: 'CRM Integracija', description: 'Automatiškai išsaugokite lead\'us į HubSpot, Pipedrive ir kt.' },
      ],
    },
    useCases: {
      title: 'Puikiai Tinka',
      items: [
        { title: 'E-komercijai', description: 'Produktų klausimai, užsakymų sekimas, rekomendacijos' },
        { title: 'Paslaugų Verslams', description: 'Rezervacijos, kainos, DUK, lead\'ų surinkimas' },
        { title: 'B2B Įmonėms', description: 'Pasiūlymų užklausos, produktų specifikacijos, kvalifikavimas' },
        { title: 'Nekilnojamam Turtui', description: 'Turto užklausos, apžiūrų planavimas, kvalifikavimas' },
      ],
    },
    pricing: {
      title: 'Chatbot\'ų Paketai',
      packages: [
        { name: 'DUK Botas', price: 'Nuo €497', description: 'Atsakykite į dažnus klausimus', features: ['Iki 50 DUK atsakymų', 'Svetainės widget\'as', 'Bazinė analitika', '30 dienų palaikymas'] },
        { name: 'Pardavimų Botas', price: 'Nuo €997', description: 'Kvalifikuokite lead\'us ir rinkite kontaktus', features: ['Neribota žinių bazė', 'Lead\'ų surinkimo formos', 'CRM integracija', 'El. pašto pranešimai', '60 dienų palaikymas'], popular: true },
        { name: 'Individualus Botas', price: 'Individuali', description: 'Pilnas individualus sprendimas', features: ['Individualus AI apmokymas', 'Daugelis integracijų', 'Išplėstinės darbo eigos', 'Nuolatinė priežiūra'] },
      ],
    },
    cta: {
      title: 'Pasiruošę Automatizuoti Klientų Aptarnavimą?',
      subtitle: 'Užsirezervuokite nemokamą demo. Parodysime, kaip chatbotas veiktų jūsų verslui.',
      button: 'Nemokamas Demo',
    },
  },
};

export default function AIChatbotaiPage() {
  const locale = useLocale();
  const content = locale === 'lt' ? t.lt : t.en;

  const scrollToContact = () => {
    window.location.href = `/${locale}/contact`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              {content.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{content.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{content.hero.subtitle}</p>
            <motion.button onClick={scrollToContact} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all text-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {content.hero.cta}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.benefits.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.benefits.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.useCases.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {content.useCases.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.pricing.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.pricing.packages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className={`rounded-2xl p-6 border-2 ${pkg.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToContact} className={`w-full py-3 rounded-xl font-semibold ${pkg.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  {content.hero.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{content.cta.title}</h2>
          <p className="text-blue-100 mb-8">{content.cta.subtitle}</p>
          <button onClick={scrollToContact} className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100">{content.cta.button}</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
