'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const t = {
  en: {
    meta: {
      title: 'AI Audit & Consulting | AI Strategy for Business',
      description: 'Get a custom AI automation plan for your business in 7-14 days. We identify what can be automated and create a roadmap for implementation.',
    },
    hero: {
      badge: 'AI Audit',
      title: 'AI Audit: Your Automation Roadmap in 7-14 Days',
      subtitle: 'Not sure where to start with AI? We analyze your business processes and deliver a clear plan for what can be automated — and what results to expect.',
      cta: 'Book Free Consultation',
    },
    benefits: {
      title: 'What You Get',
      items: [
        {
          title: 'Process Analysis',
          description: 'We map your workflows and identify repetitive tasks eating up your team\'s time.',
          icon: 'search',
        },
        {
          title: 'Automation Opportunities',
          description: 'Prioritized list of processes that can be automated with estimated time savings.',
          icon: 'list',
        },
        {
          title: 'Implementation Roadmap',
          description: 'Step-by-step plan with timelines, costs, and expected ROI for each automation.',
          icon: 'map',
        },
        {
          title: 'Tool Recommendations',
          description: 'Specific tools and integrations tailored to your existing systems (CRM, email, etc.).',
          icon: 'tools',
        },
      ],
    },
    process: {
      title: 'How It Works',
      steps: [
        {
          number: '1',
          title: 'Discovery Call',
          description: '30-min call to understand your business, pain points, and goals.',
          duration: 'Day 1',
        },
        {
          number: '2',
          title: 'Process Mapping',
          description: 'We document your workflows and identify automation candidates.',
          duration: 'Days 2-5',
        },
        {
          number: '3',
          title: 'Analysis & Strategy',
          description: 'We calculate ROI and prioritize automations by impact.',
          duration: 'Days 6-10',
        },
        {
          number: '4',
          title: 'Roadmap Delivery',
          description: 'You receive a detailed plan with recommendations and next steps.',
          duration: 'Days 11-14',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'What exactly do I get from the AI audit?',
          a: 'You receive a detailed document outlining: 1) All identified automation opportunities, 2) Estimated time/cost savings for each, 3) Recommended tools and integrations, 4) Step-by-step implementation roadmap with priorities.',
        },
        {
          q: 'Is the AI audit really free?',
          a: 'Yes, the audit is completely free with no obligations. We invest our time upfront because we believe in demonstrating value first. If you decide to implement the automations we recommend, we can help with that too.',
        },
        {
          q: 'How long does the audit take?',
          a: 'Typically 7-14 days from kickoff to delivery, depending on the complexity of your operations and number of processes analyzed.',
        },
        {
          q: 'Do you implement the automations too?',
          a: 'Yes! After the audit, we can implement any or all of the recommended automations. Many clients start with the highest-ROI automation first.',
        },
        {
          q: 'What if we don\'t have any processes worth automating?',
          a: 'In our experience, every business has automation opportunities. If we genuinely can\'t find meaningful savings, we\'ll tell you honestly and recommend alternatives.',
        },
        {
          q: 'What tools do you work with?',
          a: 'We work with n8n, Make, Zapier, custom AI solutions, and can integrate with most CRMs (HubSpot, Pipedrive), communication tools, and business software.',
        },
      ],
    },
    cta: {
      title: 'Ready to Discover Your Automation Potential?',
      subtitle: 'Book a free 20-minute consultation. We\'ll discuss your processes and see if an AI audit makes sense for your business.',
      button: 'Book Free Consultation',
      note: 'No commitment • Honest assessment • Clear next steps',
    },
  },
  lt: {
    meta: {
      title: 'AI Auditas Verslui | Dirbtinio Intelekto Strategija',
      description: 'Gaukite individualų AI automatizavimo planą per 7-14 dienų. Nustatome, ką galima automatizuoti ir sukuriame įgyvendinimo planą.',
    },
    hero: {
      badge: 'AI Auditas',
      title: 'AI Auditas: Jūsų Automatizavimo Planas per 7-14 Dienų',
      subtitle: 'Nežinote nuo ko pradėti su AI? Išanalizuojame jūsų verslo procesus ir pateikiame aiškų planą — ką galima automatizuoti ir kokių rezultatų tikėtis.',
      cta: 'Nemokama Konsultacija',
    },
    benefits: {
      title: 'Ką Gausite',
      items: [
        {
          title: 'Procesų Analizė',
          description: 'Nustatome jūsų darbo eigas ir pasikartojančias užduotis, kurios eikvoja komandos laiką.',
          icon: 'search',
        },
        {
          title: 'Automatizavimo Galimybės',
          description: 'Prioritetinis procesų sąrašas su įvertintu sutaupytu laiku.',
          icon: 'list',
        },
        {
          title: 'Įgyvendinimo Planas',
          description: 'Žingsnis po žingsnio planas su terminais, kainomis ir tikėtina investicijų grąža.',
          icon: 'map',
        },
        {
          title: 'Įrankių Rekomendacijos',
          description: 'Konkretūs įrankiai ir integracijos, pritaikyti jūsų esamoms sistemoms.',
          icon: 'tools',
        },
      ],
    },
    process: {
      title: 'Kaip Tai Veikia',
      steps: [
        {
          number: '1',
          title: 'Pažintinis Skambutis',
          description: '30 min pokalbis apie jūsų verslą, problemas ir tikslus.',
          duration: '1 diena',
        },
        {
          number: '2',
          title: 'Procesų Žymėjimas',
          description: 'Dokumentuojame jūsų darbo eigas ir nustatome automatizavimo kandidatus.',
          duration: '2-5 dienos',
        },
        {
          number: '3',
          title: 'Analizė ir Strategija',
          description: 'Apskaičiuojame ROI ir prioritetizuojame automatizacijas pagal poveikį.',
          duration: '6-10 dienos',
        },
        {
          number: '4',
          title: 'Plano Pristatymas',
          description: 'Gaunate detalų planą su rekomendacijomis ir tolimesniais žingsniais.',
          duration: '11-14 dienos',
        },
      ],
    },
    faq: {
      title: 'Dažnai Užduodami Klausimai',
      items: [
        {
          q: 'Ką tiksliai gaunu iš AI audito?',
          a: 'Gaunate detalų dokumentą su: 1) Visomis nustatytomis automatizavimo galimybėmis, 2) Įvertintu sutaupytu laiku/kainomis kiekvienai, 3) Rekomenduojamais įrankiais ir integracijomis, 4) Žingsnis po žingsnio įgyvendinimo planu.',
        },
        {
          q: 'Ar AI auditas tikrai nemokamas?',
          a: 'Taip, auditas yra visiškai nemokamas ir be jokių įsipareigojimų. Investuojame savo laiką iš anksto, nes tikime, kad reikia pirmiausia parodyti vertę. Jei nuspręsite įgyvendinti mūsų rekomenduotas automatizacijas, galėsime jums padėti.',
        },
        {
          q: 'Kiek laiko trunka auditas?',
          a: 'Paprastai 7-14 dienų nuo pradžios iki pristatymo, priklausomai nuo jūsų operacijų sudėtingumo.',
        },
        {
          q: 'Ar jūs įgyvendinate automatizacijas?',
          a: 'Taip! Po audito galime įgyvendinti bet kurias rekomenduotas automatizacijas. Daugelis klientų pradeda nuo didžiausią ROI turinčios automatizacijos.',
        },
        {
          q: 'O jei neturime procesų, kuriuos verta automatizuoti?',
          a: 'Mūsų patirtimi, kiekvienas verslas turi automatizavimo galimybių. Jei tikrai nerasime prasmingų sutaupymų, pasakysime sąžiningai.',
        },
        {
          q: 'Su kokiais įrankiais dirbate?',
          a: 'Dirbame su n8n, Make, Zapier, individualiais AI sprendimais ir galime integruoti su dauguma CRM (HubSpot, Pipedrive), komunikacijos įrankių ir verslo programinės įrangos.',
        },
      ],
    },
    cta: {
      title: 'Pasiruošę Atrasti Savo Automatizavimo Potencialą?',
      subtitle: 'Užsirezervuokite nemokamą 20 minučių konsultaciją. Aptarsime jūsų procesus ir pažiūrėsime, ar AI auditas tinka jūsų verslui.',
      button: 'Nemokama Konsultacija',
      note: 'Be įsipareigojimų • Sąžiningas įvertinimas • Aiškūs tolesni žingsniai',
    },
  },
};

export default function AIAuditasPage() {
  const locale = useLocale();
  const content = locale === 'lt' ? t.lt : t.en;

  const scrollToContact = () => {
    window.location.href = `/${locale}/contact`;
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'search':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'list':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case 'map':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        );
      case 'tools':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              {content.hero.badge}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {content.hero.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
        </div>
      </section>

      {/* Benefits Section */}
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
              {content.benefits.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.process.title}
            </h2>
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
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                    <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.faq.title}
            </h2>
          </motion.div>

          <div className="space-y-4">
            {content.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </motion.div>
            ))}
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
