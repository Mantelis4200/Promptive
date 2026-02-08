'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const t = {
  en: {
    hero: {
      title: 'Let\'s Talk',
      subtitle: 'Book a free 30-minute call or reach out directly.',
    },
    booking: {
      title: 'Book a Call',
      subtitle: 'Pick a time that works for you. No commitment.',
    },
    contact: {
      title: 'Or Reach Out Directly',
      whatsapp: {
        title: 'WhatsApp',
        desc: 'Quick questions? Message us.',
        response: 'Usually responds within 1 hour',
      },
      email: {
        title: 'Email',
        desc: 'For detailed inquiries.',
        response: 'Response within 24 hours',
      },
    },
  },
  lt: {
    hero: {
      title: 'Susisiekime',
      subtitle: 'Rezervuokite nemokamą 30 min. pokalbį arba susisiekite tiesiogiai.',
    },
    booking: {
      title: 'Rezervuoti Pokalbį',
      subtitle: 'Pasirinkite jums tinkamą laiką. Jokių įsipareigojimų.',
    },
    contact: {
      title: 'Arba Susisiekite Tiesiogiai',
      whatsapp: {
        title: 'WhatsApp',
        desc: 'Greiti klausimai? Parašykite mums.',
        response: 'Paprastai atsakome per 1 val.',
      },
      email: {
        title: 'El. paštas',
        desc: 'Išsamesnėms užklausoms.',
        response: 'Atsakymas per 24 val.',
      },
    },
  },
};

export default function ContactPage() {
  const locale = useLocale();
  const content = locale === 'lt' ? t.lt : t.en;

  useEffect(() => {
    window.scrollTo(0, 0);

    // Load Calendly script
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

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {content.hero.title}
            </h1>
            <p className="text-xl text-gray-300">
              {content.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Booking */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {content.booking.title}
            </h2>
            <p className="text-gray-600">{content.booking.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/apanavicius-mantas1/30min?hide_gdpr_banner=1&primary_color=8b5cf6"
              style={{ minWidth: '320px', height: '650px' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {content.contact.title}
            </h2>
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
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.746"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{content.contact.whatsapp.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{content.contact.whatsapp.desc}</p>
                  <p className="text-green-600 text-sm font-medium">+370 612 08 887</p>
                  <p className="text-gray-400 text-xs mt-1">{content.contact.whatsapp.response}</p>
                </div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:hello@promptive.agency"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{content.contact.email.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{content.contact.email.desc}</p>
                  <p className="text-purple-600 text-sm font-medium">hello@promptive.agency</p>
                  <p className="text-gray-400 text-xs mt-1">{content.contact.email.response}</p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
