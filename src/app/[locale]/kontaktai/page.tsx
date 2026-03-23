'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function ContactPage() {
  const locale = useLocale();

  const content = {
    en: {
      hero: {
        badge: 'Free Consultation',
        title: 'Let\'s Talk About Your Business',
        subtitle: 'Book a call and discover how AI automation can transform your workflows.',
      },
      benefits: {
        title: 'What You\'ll Get',
        items: [
          {
            icon: '🎯',
            title: 'Free Business Audit',
            description: 'We\'ll analyze your current processes and identify automation opportunities.',
          },
          {
            icon: '⚡',
            title: 'Custom Solutions',
            description: 'No cookie-cutter approaches. Every solution is tailored to your specific needs.',
          },
          {
            icon: '🚀',
            title: 'Fast Implementation',
            description: 'Most projects go live within 2-4 weeks. Start seeing results quickly.',
          },
          {
            icon: '💬',
            title: 'No Obligation',
            description: '30-minute call, zero pressure. Just honest advice about what\'s possible.',
          },
        ],
      },
      calendly: {
        title: 'Pick a Time',
        subtitle: 'Choose a slot that works for you',
      },
      altContact: {
        title: 'Prefer Another Way?',
        whatsapp: {
          label: 'WhatsApp',
          description: 'Quick questions? Message us directly.',
          response: 'Responds in ~1 hour',
        },
        email: {
          label: 'Email',
          description: 'For detailed inquiries.',
          response: 'Responds in 24 hours',
        },
      },
      trust: {
        title: 'Trusted by',
        testimonial: {
          quote: '"Promptive helped us automate our customer support, saving us 20+ hours per week. The team truly understands business needs."',
          name: 'Jonas K.',
          role: 'CEO, Tech Startup',
        },
      },
    },
    lt: {
      hero: {
        badge: 'Nemokama Konsultacija',
        title: 'Pakalbėkime Apie Jūsų Verslą',
        subtitle: 'Rezervuokite skambutį ir sužinokite, kaip AI automatizacija gali pakeisti jūsų darbo procesus.',
      },
      benefits: {
        title: 'Ką Gausite',
        items: [
          {
            icon: '🎯',
            title: 'Nemokamas Verslo Auditas',
            description: 'Išanalizuosime jūsų dabartinus procesus ir nustatysime automatizavimo galimybes.',
          },
          {
            icon: '⚡',
            title: 'Individualūs Sprendimai',
            description: 'Jokių šabloninių sprendimų. Kiekvienas projektas pritaikomas jūsų poreikiams.',
          },
          {
            icon: '🚀',
            title: 'Greitas Įgyvendinimas',
            description: 'Dauguma projektų startuoja per 2-4 savaites. Rezultatus matysite greitai.',
          },
          {
            icon: '💬',
            title: 'Be Įsipareigojimų',
            description: '30 minučių skambutis, jokio spaudimo. Tik sąžiningi patarimai.',
          },
        ],
      },
      calendly: {
        title: 'Pasirinkite Laiką',
        subtitle: 'Išsirinkite jums patogų laiką',
      },
      altContact: {
        title: 'Pageidaujate Kito Būdo?',
        whatsapp: {
          label: 'WhatsApp',
          description: 'Greiti klausimai? Rašykite tiesiogiai.',
          response: 'Atsakome per ~1 val.',
        },
        email: {
          label: 'El. paštas',
          description: 'Detalesnėms užklausoms.',
          response: 'Atsakome per 24 val.',
        },
      },
      trust: {
        title: 'Mumis pasitiki',
        testimonial: {
          quote: '"Promptive padėjo automatizuoti mūsų klientų aptarnavimą, sutaupant 20+ valandų per savaitę. Komanda tikrai supranta verslo poreikius."',
          name: 'Jonas K.',
          role: 'CEO, Tech Startup',
        },
      },
    },
  };

  const c = content[locale as keyof typeof content] || content.en;

  useEffect(() => {
    window.scrollTo(0, 0);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="organization" />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              {c.hero.badge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {c.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {c.hero.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* Main Section - Side by Side */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:sticky lg:top-24"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {c.benefits.title}
              </h2>

              <div className="space-y-4">
                {c.benefits.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="group relative bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 flex gap-5 items-start overflow-hidden"
                  >
                    {/* Subtle accent line on left */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Step number badge */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-md shadow-purple-100 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{item.icon}</span>
                        <h3 className="font-semibold text-gray-900 text-[15px]">{item.title}</h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>

                    {/* Decorative corner glow */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-100 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl" />
                  </motion.div>
                ))}
              </div>

              {/* Bottom trust signal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6 flex items-center gap-3 px-5 py-3.5 bg-green-50 border border-green-100 rounded-xl"
              >
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                <p className="text-green-700 text-sm font-medium">
                  {locale === 'lt' ? 'Šiandien turime laisvų vietų' : 'Spots available today'}
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Calendly */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{c.calendly.title}</h2>
                <p className="text-gray-600">{c.calendly.subtitle}</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/apanavicius-mantas1/30min?hide_gdpr_banner=1&primary_color=8b5cf6"
                  style={{ minWidth: '320px', height: '680px' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900">{c.altContact.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/37061208887"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 flex items-center gap-4 group"
              whileHover={{ y: -2 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.746"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900">{c.altContact.whatsapp.label}</h3>
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">{c.altContact.whatsapp.response}</span>
                </div>
                <p className="text-gray-600 text-sm">{c.altContact.whatsapp.description}</p>
                <p className="text-green-600 font-semibold text-sm mt-1">+370 612 08 887</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:hello@promptive.agency"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-300 flex items-center gap-4 group"
              whileHover={{ y: -2 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900">{c.altContact.email.label}</h3>
                  <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">{c.altContact.email.response}</span>
                </div>
                <p className="text-gray-600 text-sm">{c.altContact.email.description}</p>
                <p className="text-purple-600 font-semibold text-sm mt-1">hello@promptive.agency</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Trust Section — Logo Marquee */}
      <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10"
          >
            {c.trust.title}
          </motion.p>
        </div>

        {/* Marquee track */}
        <div
          className="relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          }}
        >
          <div
            className="flex items-center gap-6"
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee 22s linear infinite',
            }}
          >
            {[
              { src: '/images/kilo.png', alt: 'Kilo Health', key: 'a-kilo' },
              { src: '/images/rhea.png', alt: 'Rhea', key: 'a-rhea' },
              { src: '/images/magnimoo.png', alt: 'Magnimoo', key: 'a-magnimoo' },
              { src: '/images/cheats-pro-logo.png', alt: 'Cheats Pro', key: 'a-cheats' },
              { src: '/images/lentvario-logo.png', alt: 'Lentvario Mediena', key: 'a-lentvario' },
              { src: '/images/rideon-logo.png', alt: 'Rideon', key: 'a-rideon' },
              { src: '/images/kilo.png', alt: 'Kilo Health', key: 'b-kilo' },
              { src: '/images/rhea.png', alt: 'Rhea', key: 'b-rhea' },
              { src: '/images/magnimoo.png', alt: 'Magnimoo', key: 'b-magnimoo' },
              { src: '/images/cheats-pro-logo.png', alt: 'Cheats Pro', key: 'b-cheats' },
              { src: '/images/lentvario-logo.png', alt: 'Lentvario Mediena', key: 'b-lentvario' },
              { src: '/images/rideon-logo.png', alt: 'Rideon', key: 'b-rideon' },
            ].map((logo) => (
              <div
                key={logo.key}
                className="flex-shrink-0 bg-gray-50 hover:bg-gray-100 rounded-xl px-6 h-20 w-36 flex items-center justify-center transition-colors duration-200 mx-3"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:opacity-80 transition-opacity duration-200"
                />
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
