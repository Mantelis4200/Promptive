'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Website Preview Component
function WebsitePreview() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Browser chrome */}
        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200">
              yourbusiness.com
            </div>
          </div>
        </div>

        {/* Website content */}
        <div className="p-6 space-y-4">
          {/* Hero mockup */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white">
            <div className="h-3 w-24 bg-white/30 rounded mb-3" />
            <div className="h-5 w-48 bg-white/50 rounded mb-2" />
            <div className="h-3 w-36 bg-white/30 rounded mb-4" />
            <div className="h-8 w-28 bg-white rounded-lg" />
          </div>

          {/* Features mockup */}
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg mb-2" />
                <div className="h-2 w-full bg-gray-200 rounded mb-1" />
                <div className="h-2 w-2/3 bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* CTA mockup */}
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
            <div>
              <div className="h-3 w-20 bg-gray-300 rounded mb-1" />
              <div className="h-2 w-32 bg-gray-200 rounded" />
            </div>
            <div className="h-8 w-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

const t = {
  en: {
    hero: {
      badge: 'Fast Launch',
      title: 'Your Website. Live in 24 Hours.',
      subtitle: 'No templates. No delays. A custom website built for your business, ready to convert visitors into customers.',
      cta: 'Start Your Project',
    },
    stats: {
      speed: 'First page live',
      seo: 'SEO optimized',
      integrations: 'All integrations',
    },
    included: {
      title: "What's Included",
      items: [
        { title: 'Custom Design', desc: 'Unique design tailored to your brand, not a template' },
        { title: 'SEO + GEO', desc: 'Optimized for Google, local search, and AI search engines' },
        { title: 'CRM Integration', desc: 'HubSpot, Pipedrive, or custom - automatic lead flow' },
        { title: 'Payment Systems', desc: 'Stripe, PayPal, or local payment gateways' },
        { title: 'Booking Calendar', desc: 'Calendly or custom booking integration' },
        { title: 'AI Chatbot', desc: 'Built-in chatbot for support and lead capture' },
      ],
    },
    process: {
      title: 'How It Works',
      steps: [
        { num: '1', title: 'Discovery Call', desc: 'We discuss your business, goals, and requirements' },
        { num: '2', title: 'Build', desc: 'We design and develop your website with all integrations' },
        { num: '3', title: 'Launch', desc: 'Your website goes live and starts generating leads' },
      ],
    },
    solutions: {
      title: 'What We Build',
      subtitle: 'Custom solutions tailored to your business needs. Every project is unique.',
      landing: {
        name: 'Landing Page',
        desc: 'Perfect for campaigns & lead generation',
        features: ['1 focused page', 'SEO optimized', 'Mobile responsive', 'Contact form', 'Basic analytics'],
      },
      business: {
        name: 'Business Website',
        desc: 'Complete online presence for your company',
        features: ['Up to 5 pages', 'CRM integration', 'AI chatbot', 'Booking system', 'Advanced SEO'],
        popular: true,
      },
      ecommerce: {
        name: 'E-commerce',
        desc: 'Full online store with all integrations',
        features: ['Full online store', 'Payment integration', 'Inventory management', 'Order tracking', 'Customer portal'],
      },
    },
    cta: {
      title: 'Ready to Launch?',
      subtitle: 'Book a free call. We\'ll discuss your project and give you a clear timeline.',
      button: 'Book Free Call',
    },
  },
  lt: {
    hero: {
      badge: 'Greitas Paleidimas',
      title: 'Jūsų Svetainė. Veikianti per 24 val.',
      subtitle: 'Jokių šablonų. Jokių vėlavimų. Individuali svetainė, sukurta jūsų verslui, paruošta paversti lankytojus klientais.',
      cta: 'Pradėti Projektą',
    },
    stats: {
      speed: 'Pirmas puslapis paruoštas',
      seo: 'SEO optimizuota',
      integrations: 'Visos integracijos',
    },
    included: {
      title: 'Kas Įeina',
      items: [
        { title: 'Individualus Dizainas', desc: 'Unikalus dizainas pritaikytas jūsų prekės ženklui, ne šablonas' },
        { title: 'SEO + GEO', desc: 'Optimizuota Google, vietinei paieškai ir AI paieškos varikliams' },
        { title: 'CRM Integracija', desc: 'HubSpot, Pipedrive ar custom - automatinis kontaktų srautas' },
        { title: 'Mokėjimų Sistemos', desc: 'Stripe, PayPal ar vietiniai mokėjimų tiekėjai' },
        { title: 'Rezervacijų Kalendorius', desc: 'Calendly ar individuali rezervacijų integracija' },
        { title: 'AI Chatbotas', desc: 'Integruotas chatbotas aptarnavimui ir kontaktų rinkimui' },
      ],
    },
    process: {
      title: 'Kaip Tai Veikia',
      steps: [
        { num: '1', title: 'Pokalbis', desc: 'Aptariame jūsų verslą, tikslus ir reikalavimus' },
        { num: '2', title: 'Kūrimas', desc: 'Kuriame ir vystome svetainę su visomis integracijomis' },
        { num: '3', title: 'Paleidimas', desc: 'Svetainė pradeda veikti ir generuoti užklausas' },
      ],
    },
    solutions: {
      title: 'Ką Kuriame',
      subtitle: 'Individualūs sprendimai pritaikyti jūsų verslui. Kiekvienas projektas unikalus.',
      landing: {
        name: 'Landing Puslapis',
        desc: 'Idealus kampanijoms ir kontaktų rinkimui',
        features: ['1 tikslingas puslapis', 'SEO optimizuota', 'Mobili versija', 'Kontaktų forma', 'Bazinė analitika'],
      },
      business: {
        name: 'Verslo Svetainė',
        desc: 'Pilnas internetinis buvimas jūsų įmonei',
        features: ['Iki 5 puslapių', 'CRM integracija', 'AI chatbotas', 'Rezervacijų sistema', 'Išplėstinis SEO'],
        popular: true,
      },
      ecommerce: {
        name: 'E-komercija',
        desc: 'Pilna el. parduotuvė su visomis integracijomis',
        features: ['Pilna el. parduotuvė', 'Mokėjimų integracija', 'Inventoriaus valdymas', 'Užsakymų sekimas', 'Klientų portalas'],
      },
    },
    cta: {
      title: 'Pasiruošę Paleisti?',
      subtitle: 'Rezervuokite nemokamą pokalbį. Aptarsime projektą ir pateiksime aiškų terminą.',
      button: 'Rezervuoti Pokalbį',
    },
  },
};

export default function WebsitesPage() {
  const locale = useLocale();
  const content = locale === 'lt' ? t.lt : t.en;

  const scrollToCalendly = () => {
    window.location.href = '/#book-call';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                {content.hero.badge}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {content.hero.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                {content.hero.subtitle}
              </p>

              <motion.button
                onClick={scrollToCalendly}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all text-lg shadow-lg shadow-blue-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {content.hero.cta}
                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Right - Website Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <WebsitePreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-6 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-white text-center">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">24h - {content.stats.speed}</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-x border-white/20">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">{content.stats.seo}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">{content.stats.integrations}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
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
              {content.solutions.title}
            </h2>
            <p className="text-gray-600">{content.solutions.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {(['landing', 'business', 'ecommerce'] as const).map((plan, index) => {
              const pkg = content.solutions[plan];
              const isPopular = 'popular' in pkg && pkg.popular;

              return (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-2xl p-8 shadow-sm border-2 transition-all hover:shadow-lg ${
                    isPopular ? 'border-purple-500 shadow-lg scale-105' : 'border-gray-100 hover:border-purple-200'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                      {locale === 'lt' ? 'Populiariausias' : 'Most Popular'}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-purple-600 font-medium mb-6">{pkg.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToCalendly}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      isPopular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {locale === 'lt' ? 'Susisiekti' : 'Get in Touch'}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.included.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.included.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {content.process.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />
                )}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
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
            <p className="text-blue-100 mb-8 text-lg">
              {content.cta.subtitle}
            </p>
            <motion.button
              onClick={scrollToCalendly}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.cta.button}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
