'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const t = {
  en: {
    hero: {
      badge: 'Fast Delivery',
      title: 'Professional Website in 24 Hours',
      subtitle: 'Need a website fast? We deliver fully functional, SEO-optimized landing pages and business websites within 24 hours. No weeks of waiting.',
      cta: 'Start Now',
      note: 'From €497 • Ready tomorrow',
    },
    howItWorks: {
      title: 'How It Works',
      steps: [
        { time: '0h', title: 'Brief Call', description: 'Quick 15-min call to understand your needs.' },
        { time: '2h', title: 'Design', description: 'We create the design based on your brand.' },
        { time: '12h', title: 'Development', description: 'We build your website with all content.' },
        { time: '24h', title: 'Launch', description: 'Your website is live and ready for visitors.' },
      ],
    },
    includes: {
      title: 'What\'s Included',
      items: [
        'Responsive design (mobile-friendly)',
        'SEO optimization',
        'Contact form',
        'Google Analytics',
        'SSL certificate',
        'Fast hosting (1 year)',
        'Domain setup assistance',
        '30-day support',
      ],
    },
    pricing: {
      title: 'Packages',
      packages: [
        { name: 'Landing Page', price: '€497', time: '24h', description: 'Single page with all essentials', features: ['1 page', 'Contact form', 'SEO basics', 'Mobile responsive'] },
        { name: 'Business Website', price: '€997', time: '48h', description: 'Multi-page professional site', features: ['Up to 5 pages', 'Blog setup', 'Advanced SEO', 'CMS access'], popular: true },
        { name: 'E-commerce', price: 'From €1,997', time: '1 week', description: 'Full online store', features: ['Product catalog', 'Payment integration', 'Order management', 'Inventory sync'] },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        { q: 'Is 24 hours really possible?', a: 'Yes, for landing pages. We have a streamlined process and ready templates that we customize to your brand. Business websites take 48h, e-commerce takes about a week.' },
        { q: 'What do you need from me?', a: 'Your logo, brand colors, text content (or we can help write it), and any images you want to use. The more prepared you are, the faster we deliver.' },
        { q: 'Can I edit the website myself?', a: 'Yes, we build on modern CMS platforms. You get full access to edit text, images, and add new pages.' },
        { q: 'What about hosting?', a: 'First year of fast hosting is included. After that, it\'s €99/year or you can host elsewhere.' },
      ],
    },
    cta: {
      title: 'Need a Website Fast?',
      subtitle: 'Let\'s talk. We\'ll confirm if 24h delivery is possible for your project.',
      button: 'Get Started',
    },
  },
  lt: {
    hero: {
      badge: 'Greitas Pristatymas',
      title: 'Profesionali Svetainė per 24 Valandas',
      subtitle: 'Reikia svetainės greitai? Pristatome pilnai veikiančius, SEO optimizuotus landing puslapius ir verslo svetaines per 24 valandas. Jokio savaičių laukimo.',
      cta: 'Pradėti Dabar',
      note: 'Nuo €497 • Paruošta rytoj',
    },
    howItWorks: {
      title: 'Kaip Tai Veikia',
      steps: [
        { time: '0h', title: 'Trumpas Skambutis', description: 'Greitas 15 min pokalbis suprasti jūsų poreikius.' },
        { time: '2h', title: 'Dizainas', description: 'Sukuriame dizainą pagal jūsų prekės ženklą.' },
        { time: '12h', title: 'Kūrimas', description: 'Pastatome jūsų svetainę su visu turiniu.' },
        { time: '24h', title: 'Paleidimas', description: 'Jūsų svetainė veikia ir paruošta lankytojams.' },
      ],
    },
    includes: {
      title: 'Kas Įeina',
      items: [
        'Responsive dizainas (mobiliesiems pritaikytas)',
        'SEO optimizacija',
        'Kontaktų forma',
        'Google Analytics',
        'SSL sertifikatas',
        'Greitas hosting (1 metai)',
        'Domeno nustatymo pagalba',
        '30 dienų palaikymas',
      ],
    },
    pricing: {
      title: 'Paketai',
      packages: [
        { name: 'Landing Puslapis', price: '€497', time: '24h', description: 'Vienas puslapis su visais esminiais elementais', features: ['1 puslapis', 'Kontaktų forma', 'Bazinis SEO', 'Pritaikytas mobiliesiems'] },
        { name: 'Verslo Svetainė', price: '€997', time: '48h', description: 'Kelių puslapių profesionali svetainė', features: ['Iki 5 puslapių', 'Blogo nustatymas', 'Išplėstinis SEO', 'CMS prieiga'], popular: true },
        { name: 'El. Parduotuvė', price: 'Nuo €1,997', time: '1 savaitė', description: 'Pilna internetinė parduotuvė', features: ['Produktų katalogas', 'Mokėjimų integracija', 'Užsakymų valdymas', 'Inventoriaus sync'] },
      ],
    },
    faq: {
      title: 'DUK',
      items: [
        { q: 'Ar 24 valandos tikrai įmanomos?', a: 'Taip, landing puslapiams. Turime supaprastintą procesą ir paruoštus šablonus, kuriuos pritaikome jūsų prekės ženklui. Verslo svetainės užtrunka 48h, el. parduotuvės — apie savaitę.' },
        { q: 'Ko jums reikia iš manęs?', a: 'Jūsų logotipo, prekės ženklo spalvų, tekstinio turinio (arba galime padėti parašyti) ir bet kokių norimų vaizdų. Kuo geriau pasiruošę, tuo greičiau pristatome.' },
        { q: 'Ar galiu pats redaguoti svetainę?', a: 'Taip, kuriame ant modernių CMS platformų. Gausite pilną prieigą redaguoti tekstą, vaizdus ir pridėti naujus puslapius.' },
        { q: 'O kaip su hostingu?', a: 'Pirmieji metai greito hostingo įeina. Po to — €99/metams arba galite hostinti kitur.' },
      ],
    },
    cta: {
      title: 'Reikia Svetainės Greitai?',
      subtitle: 'Pasikalbėkime. Patvirtinsime, ar 24h pristatymas įmanomas jūsų projektui.',
      button: 'Pradėti',
    },
  },
};

export default function SvetainePer24hPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/30 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-pink-500/30">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              {content.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{content.hero.title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{content.hero.subtitle}</p>
            <motion.button onClick={scrollToContact} className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all text-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {content.hero.cta}
            </motion.button>
            <p className="text-pink-200 text-sm mt-4">{content.hero.note}</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.howItWorks.title}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {content.howItWorks.steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.time}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.includes.title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {content.includes.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200">
                <svg className="w-5 h-5 text-pink-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span className="text-gray-700">{item}</span>
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className={`rounded-2xl p-6 border-2 ${pkg.popular ? 'border-pink-500 bg-pink-50' : 'border-gray-200 bg-white'}`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  <span className="bg-pink-100 text-pink-700 text-xs font-bold px-2 py-1 rounded-full">{pkg.time}</span>
                </div>
                <div className="text-2xl font-bold text-pink-600 mb-2">{pkg.price}</div>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToContact} className={`w-full py-3 rounded-xl font-semibold ${pkg.popular ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  {content.hero.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{content.faq.title}</h2>
          <div className="space-y-4">
            {content.faq.items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{content.cta.title}</h2>
          <p className="text-pink-100 mb-8">{content.cta.subtitle}</p>
          <button onClick={scrollToContact} className="px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl hover:bg-gray-100">{content.cta.button}</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
