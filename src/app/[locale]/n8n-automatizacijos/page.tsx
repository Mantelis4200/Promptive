'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const t = {
  en: {
    hero: {
      badge: 'n8n Automation',
      title: 'n8n Automation Services',
      subtitle: 'Connect your apps and automate workflows with n8n — the flexible, self-hosted automation platform. We build custom integrations that save hours of manual work.',
      cta: 'Get Free Consultation',
    },
    benefits: {
      title: 'Why n8n?',
      items: [
        { title: 'Self-Hosted', description: 'Your data stays on your servers. Full control and privacy.', icon: 'server' },
        { title: '400+ Integrations', description: 'Connect CRMs, email, databases, APIs, and more.', icon: 'connect' },
        { title: 'No Code Limits', description: 'Unlike Zapier/Make, no task limits or hidden fees.', icon: 'unlimited' },
        { title: 'Custom Logic', description: 'Build complex workflows with conditions, loops, and AI.', icon: 'code' },
      ],
    },
    useCases: {
      title: 'What We Automate with n8n',
      items: [
        { title: 'CRM Sync', description: 'Automatically sync leads between HubSpot, Pipedrive, and your tools.' },
        { title: 'Email Automation', description: 'Trigger personalized emails based on customer actions.' },
        { title: 'Data Processing', description: 'Extract, transform, and load data between systems.' },
        { title: 'Lead Capture', description: 'Collect form submissions and route to CRM + notify team.' },
        { title: 'Invoice Generation', description: 'Auto-generate invoices when deals close in CRM.' },
        { title: 'Report Automation', description: 'Generate and send weekly/monthly reports automatically.' },
      ],
    },
    integrations: {
      title: 'Popular Integrations',
      items: ['HubSpot', 'Pipedrive', 'Google Sheets', 'Slack', 'Gmail', 'Notion', 'Airtable', 'PostgreSQL', 'MySQL', 'Stripe', 'Shopify', 'WordPress'],
    },
    pricing: {
      title: 'n8n Automation Packages',
      packages: [
        { name: 'Single Workflow', price: 'From €297', description: 'One automation with up to 5 app connections', features: ['1 workflow', 'Up to 5 integrations', 'Testing & deployment', '30-day support'] },
        { name: 'Workflow Bundle', price: 'From €697', description: '3 connected automations', features: ['3 workflows', 'Unlimited integrations', 'Custom logic', '60-day support'], popular: true },
        { name: 'Full System', price: 'Custom', description: 'Complete automation ecosystem', features: ['Unlimited workflows', 'Self-hosted setup', 'Monitoring dashboard', 'Ongoing maintenance'] },
      ],
    },
    cta: {
      title: 'Ready to Automate with n8n?',
      subtitle: 'Book a free consultation. We\'ll map your processes and show you what\'s possible.',
      button: 'Free Consultation',
    },
  },
  lt: {
    hero: {
      badge: 'n8n Automatizacija',
      title: 'n8n Automatizavimo Paslaugos',
      subtitle: 'Sujunkite savo programas ir automatizuokite darbo eigas su n8n — lanksčia, savoje infrastruktūroje talpinama automatizavimo platforma. Kuriame individualias integracijas, taupančias valandas rankinio darbo.',
      cta: 'Nemokama Konsultacija',
    },
    benefits: {
      title: 'Kodėl n8n?',
      items: [
        { title: 'Sava Infrastruktūra', description: 'Jūsų duomenys lieka jūsų serveriuose. Pilna kontrolė ir privatumas.', icon: 'server' },
        { title: '400+ Integracijų', description: 'Sujunkite CRM, el. paštą, duomenų bazes, API ir daugiau.', icon: 'connect' },
        { title: 'Be Apribojimų', description: 'Skirtingai nei Zapier/Make, be užduočių limitų ar paslėptų mokesčių.', icon: 'unlimited' },
        { title: 'Individuali Logika', description: 'Kurkite sudėtingas darbo eigas su sąlygomis, ciklais ir AI.', icon: 'code' },
      ],
    },
    useCases: {
      title: 'Ką Automatizuojame su n8n',
      items: [
        { title: 'CRM Sinchronizacija', description: 'Automatiškai sinchronizuokite lead\'us tarp HubSpot, Pipedrive ir jūsų įrankių.' },
        { title: 'El. Pašto Automatizacija', description: 'Siųskite personalizuotus laiškus pagal klientų veiksmus.' },
        { title: 'Duomenų Apdorojimas', description: 'Ištraukite, transformuokite ir perkelkite duomenis tarp sistemų.' },
        { title: 'Lead\'ų Surinkimas', description: 'Surinkite formų duomenis ir nukreipkite į CRM + informuokite komandą.' },
        { title: 'Sąskaitų Generavimas', description: 'Automatiškai generuokite sąskaitas uždarius sandorius CRM.' },
        { title: 'Ataskaitų Automatizacija', description: 'Generuokite ir siųskite savaitines/mėnesines ataskaitas automatiškai.' },
      ],
    },
    integrations: {
      title: 'Populiarios Integracijos',
      items: ['HubSpot', 'Pipedrive', 'Google Sheets', 'Slack', 'Gmail', 'Notion', 'Airtable', 'PostgreSQL', 'MySQL', 'Stripe', 'Shopify', 'WordPress'],
    },
    pricing: {
      title: 'n8n Automatizavimo Paketai',
      packages: [
        { name: 'Viena Darbo Eiga', price: 'Nuo €297', description: 'Viena automatizacija su iki 5 programų', features: ['1 darbo eiga', 'Iki 5 integracijų', 'Testavimas ir diegimas', '30 dienų palaikymas'] },
        { name: 'Darbo Eigų Paketas', price: 'Nuo €697', description: '3 sujungtos automatizacijos', features: ['3 darbo eigos', 'Neriboti integracijos', 'Individuali logika', '60 dienų palaikymas'], popular: true },
        { name: 'Pilna Sistema', price: 'Individuali', description: 'Visa automatizacijų ekosistema', features: ['Neribotos darbo eigos', 'Savos infrastruktūros setup', 'Stebėjimo dashboard', 'Nuolatinė priežiūra'] },
      ],
    },
    cta: {
      title: 'Pasiruošę Automatizuoti su n8n?',
      subtitle: 'Užsirezervuokite nemokamą konsultaciją. Nubraižysime jūsų procesus ir parodysime, kas įmanoma.',
      button: 'Nemokama Konsultacija',
    },
  },
};

export default function N8nAutomatizacijosPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/30 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-500/30">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              {content.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{content.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{content.hero.subtitle}</p>
            <motion.button onClick={scrollToContact} className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all text-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {content.hero.cta}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.benefits.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {content.benefits.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
          <div className="grid md:grid-cols-3 gap-6">
            {content.useCases.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.integrations.title}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {content.integrations.items.map((item, i) => (
              <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.pricing.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.pricing.packages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className={`rounded-2xl p-6 border-2 ${pkg.popular ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">{pkg.price}</div>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToContact} className={`w-full py-3 rounded-xl font-semibold ${pkg.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  {content.hero.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{content.cta.title}</h2>
          <p className="text-orange-100 mb-8">{content.cta.subtitle}</p>
          <button onClick={scrollToContact} className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100">{content.cta.button}</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
