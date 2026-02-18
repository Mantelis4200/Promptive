'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const t = {
  en: {
    hero: {
      badge: 'Free AI Audit',
      title: 'Stop Guessing. Get a Clear AI Roadmap.',
      subtitle: 'In 7-14 days, we analyze your business and show you exactly what to automate — and how much time and money you\'ll save.',
      cta: 'Get Your Free Audit',
      note: 'No cost • No commitment • Just clarity',
    },
    problems: {
      title: 'Sound Familiar?',
      items: [
        {
          problem: 'Your team wastes hours on repetitive tasks',
          solution: 'We identify which tasks can be fully automated',
        },
        {
          problem: 'You know AI could help, but don\'t know where to start',
          solution: 'We give you a prioritized list of quick wins',
        },
        {
          problem: 'You\'ve tried tools but they didn\'t stick',
          solution: 'We recommend solutions that fit YOUR workflow',
        },
        {
          problem: 'You\'re not sure if automation is worth the investment',
          solution: 'We calculate exact ROI before you spend a euro',
        },
      ],
    },
    benefits: {
      title: 'What You\'ll Receive',
      subtitle: 'A complete automation roadmap tailored to your business',
      items: [
        {
          title: 'Process Map',
          description: 'Visual breakdown of your workflows showing time spent on each task',
          icon: 'search',
        },
        {
          title: 'Opportunity List',
          description: 'Ranked automation opportunities with estimated hours saved per week',
          icon: 'list',
        },
        {
          title: 'ROI Calculator',
          description: 'Exact numbers: investment vs. savings over 6-12 months',
          icon: 'calculator',
        },
        {
          title: 'Action Plan',
          description: 'Step-by-step roadmap with recommended tools and integrations',
          icon: 'map',
        },
      ],
    },
    process: {
      title: 'Simple 4-Step Process',
      steps: [
        {
          number: '1',
          title: 'Quick Call',
          description: 'We learn about your business, team, and biggest time-wasters.',
        },
        {
          number: '2',
          title: 'Deep Dive',
          description: 'We map your processes and spot automation opportunities.',
        },
        {
          number: '3',
          title: 'Analysis',
          description: 'We calculate ROI and prioritize by impact.',
        },
        {
          number: '4',
          title: 'Your Roadmap',
          description: 'You get a clear plan with actionable next steps.',
        },
      ],
    },
    whyFree: {
      title: 'Why Is It Free?',
      description: 'We believe in showing value before asking for anything. If our audit reveals opportunities worth pursuing, you can choose to work with us — or take the roadmap and run with it yourself. No pressure, no sales tricks.',
    },
    faq: {
      title: 'Questions?',
      items: [
        {
          q: 'What exactly do I get?',
          a: 'A detailed document with: all automation opportunities we found, estimated time/cost savings for each, recommended tools, and a step-by-step implementation plan.',
        },
        {
          q: 'Is this really free?',
          a: 'Yes. We invest our time upfront because we believe in demonstrating value first. If you want us to implement the automations, great. If not, you keep the roadmap.',
        },
        {
          q: 'How long does it take?',
          a: '7-14 days from our first call to delivering your roadmap.',
        },
        {
          q: 'What if there\'s nothing worth automating?',
          a: 'We\'ll tell you honestly. In our experience, every business has opportunities — but if yours doesn\'t, we won\'t pretend otherwise.',
        },
      ],
    },
    cta: {
      title: 'Ready to See What\'s Possible?',
      subtitle: 'Book a free 20-minute call. We\'ll discuss your processes and see if an audit makes sense.',
      button: 'Book Free Call',
      note: '100% free • No obligations • Honest assessment',
    },
  },
  lt: {
    hero: {
      badge: 'Nemokamas AI Auditas',
      title: 'Nustokite Spėlioti. Gaukite Aiškų AI Planą.',
      subtitle: 'Per 7-14 dienų išanalizuojame jūsų verslą ir parodome, ką tiksliai automatizuoti — ir kiek laiko bei pinigų sutaupysite.',
      cta: 'Gauti Nemokamą Auditą',
      note: 'Be kainos • Be įsipareigojimų • Tik aiškumas',
    },
    problems: {
      title: 'Pažįstama?',
      items: [
        {
          problem: 'Jūsų komanda eikvoja valandas pasikartojančioms užduotims',
          solution: 'Nustatome, kurias užduotis galima pilnai automatizuoti',
        },
        {
          problem: 'Žinote, kad AI galėtų padėti, bet nežinote nuo ko pradėti',
          solution: 'Pateikiame prioritetinį greitų pergalių sąrašą',
        },
        {
          problem: 'Bandėte įrankius, bet jie neprigijo',
          solution: 'Rekomenduojame sprendimus, kurie tinka JŪSŲ procesams',
        },
        {
          problem: 'Nesate tikri, ar automatizacija verta investicijos',
          solution: 'Apskaičiuojame tikslią ROI prieš išleidžiant eurą',
        },
      ],
    },
    benefits: {
      title: 'Ką Gausite',
      subtitle: 'Pilnas automatizavimo planas, pritaikytas jūsų verslui',
      items: [
        {
          title: 'Procesų Žemėlapis',
          description: 'Vizualus darbo eigų išskaidymas, rodantis kiekvienai užduočiai skirtą laiką',
          icon: 'search',
        },
        {
          title: 'Galimybių Sąrašas',
          description: 'Suranguotos automatizavimo galimybės su įvertintomis sutaupytomis valandomis per savaitę',
          icon: 'list',
        },
        {
          title: 'ROI Skaičiuoklė',
          description: 'Tikslūs skaičiai: investicija vs. sutaupymai per 6-12 mėnesių',
          icon: 'calculator',
        },
        {
          title: 'Veiksmų Planas',
          description: 'Žingsnis po žingsnio planas su rekomenduojamais įrankiais ir integracijomis',
          icon: 'map',
        },
      ],
    },
    process: {
      title: 'Paprastas 4 Žingsnių Procesas',
      steps: [
        {
          number: '1',
          title: 'Trumpas Skambutis',
          description: 'Sužinome apie jūsų verslą, komandą ir didžiausius laiko eikvojimus.',
        },
        {
          number: '2',
          title: 'Gilus Tyrimas',
          description: 'Žymime jūsų procesus ir aptinkame automatizavimo galimybes.',
        },
        {
          number: '3',
          title: 'Analizė',
          description: 'Apskaičiuojame ROI ir prioritetizuojame pagal poveikį.',
        },
        {
          number: '4',
          title: 'Jūsų Planas',
          description: 'Gaunate aiškų planą su konkrečiais tolimesniais žingsniais.',
        },
      ],
    },
    whyFree: {
      title: 'Kodėl Nemokama?',
      description: 'Tikime, kad reikia parodyti vertę prieš ko nors prašant. Jei mūsų auditas atskleis galimybes, kurias verta įgyvendinti, galėsite pasirinkti dirbti su mumis — arba pasiimti planą ir įgyvendinti patys. Jokio spaudimo, jokių pardavimo triukų.',
    },
    faq: {
      title: 'Klausimai?',
      items: [
        {
          q: 'Ką tiksliai gaunu?',
          a: 'Detalų dokumentą su: visomis rastomis automatizavimo galimybėmis, įvertintais laiko/kainos sutaupymais kiekvienai, rekomenduojamais įrankiais ir žingsnis po žingsnio įgyvendinimo planu.',
        },
        {
          q: 'Ar tai tikrai nemokama?',
          a: 'Taip. Investuojame savo laiką iš anksto, nes tikime, kad reikia pirmiausia parodyti vertę. Jei norėsite, kad įgyvendintume automatizacijas — puiku. Jei ne, planą pasilaikote sau.',
        },
        {
          q: 'Kiek laiko tai užtrunka?',
          a: '7-14 dienų nuo pirmo skambučio iki jūsų plano pristatymo.',
        },
        {
          q: 'O jei nėra nieko verto automatizuoti?',
          a: 'Pasakysime sąžiningai. Mūsų patirtimi, kiekvienas verslas turi galimybių — bet jei jūsų neturės, neapsimetinėsime kitaip.',
        },
      ],
    },
    cta: {
      title: 'Pasiruošę Pamatyti, Kas Įmanoma?',
      subtitle: 'Užsirezervuokite nemokamą 20 minučių pokalbį. Aptarsime jūsų procesus ir pažiūrėsime, ar auditas prasminga.',
      button: 'Rezervuoti Nemokamą Pokalbį',
      note: '100% nemokama • Be įsipareigojimų • Sąžiningas vertinimas',
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
      case 'calculator':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'map':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

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
              <p className="text-gray-400 text-sm mt-4">{content.hero.note}</p>
            </motion.div>
        </div>
      </section>

      {/* Problem-Solution Section */}
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
              {content.problems.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {content.problems.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{item.problem}</p>
                </div>
                <div className="flex items-start gap-4 mt-4 pl-12">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center -ml-12">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.benefits.title}
            </h2>
            <p className="text-lg text-gray-600">{content.benefits.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
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

      {/* Process Section - No timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid md:grid-cols-4 gap-4">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector line */}
                {index < content.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-gradient-to-r from-purple-300 to-blue-300" />
                )}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {content.whyFree.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {content.whyFree.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
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
