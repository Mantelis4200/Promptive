'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';


export default function ContactPage() {
  const t = useTranslations('contactPage');

  useEffect(() => {
    // Force scroll to top on page load
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

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <motion.button
                onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.primaryButton')}
              </motion.button>
            </motion.div>

            {/* Trust indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-sm text-gray-500"
            >
              {t('hero.trustIndicator')}
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-gray-600 mb-8">{t('trustSignals.title')}</p>

            {/* Client Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 h-20 flex items-center justify-center">
                <Image
                  src="/images/rhea.png"
                  alt="Rhea"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 h-20 flex items-center justify-center">
                <Image
                  src="/images/magnimoo.png"
                  alt="Magnimoo"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 h-20 flex items-center justify-center">
                <Image
                  src="/images/cheats-pro-logo.png"
                  alt="Cheats Pro"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 h-20 flex items-center justify-center">
                <Image
                  src="/images/kilo.png"
                  alt="Kilo Health"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* Quick Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-purple-50 rounded-2xl p-8 border-l-4 border-purple-500"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="text-yellow-500 text-xl">★★★★★</div>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                {t('trustSignals.testimonial.quote')}
              </blockquote>
              <div className="text-gray-600">
                <p className="font-semibold">{t('trustSignals.testimonial.name')}</p>
                <p className="text-sm">{t('trustSignals.testimonial.role')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section - Calendly */}
      <section id="booking-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-purple-600 font-medium mb-4">
                {t('chatbotSection.badge')}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('chatbotSection.title')}
              </h2>
              <div className="prose prose-lg prose-gray max-w-none">
                <div className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto space-y-4">
                  <p>{t('chatbotSection.description1')}</p>
                  <p className="text-purple-600 font-medium">{t('chatbotSection.description2')}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl"
            >
              {/* Calendly Widget */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/apanavicius-mantas1/30min?hide_gdpr_banner=1&primary_color=8b5cf6"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>

              {/* Trust reassurance below booking */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 text-center"
              >
                <p className="text-sm text-gray-500 bg-gray-50 rounded-lg px-4 py-3 inline-block">
                  {t('chatbot.humanSupport')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('contactSection.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              {t('contactSection.subtitle')}
            </p>
            <p className="text-lg text-purple-600 font-medium">
              📞 {t('contactSection.calendarLink.text')} <a href="https://calendly.com/apanavicius-mantas1/30min" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{t('contactSection.calendarLink.linkText')}</a>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp/SMS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.746"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('contact.whatsapp.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('contact.whatsapp.description')}
              </p>
              <div className="bg-green-50 rounded-lg p-3 mb-6">
                <p className="text-sm font-semibold text-green-700">{t('contact.whatsapp.responseTime')}</p>
              </div>
              <a
                href="https://wa.me/37061208887"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.746"/>
                </svg>
                +370 612 08 887
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('contact.email.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('contact.email.description')}
              </p>
              <div className="bg-purple-50 rounded-lg p-3 mb-6">
                <p className="text-sm font-semibold text-purple-700">{t('contact.email.responseTime')}</p>
              </div>
              <a
                href="mailto:hello@promptive.agency"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@promptive.agency
              </a>
            </motion.div>
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('contact.hours.title')}
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>{t('contact.hours.weekdays')}</p>
              <p><strong>{t('contact.hours.timezone')}</strong></p>
              <p className="text-sm text-purple-600 font-medium mt-4">
                {t('contact.hours.note')}
              </p>
            </div>
          </motion.div>

          {/* Prominent Conversion CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">{t('finalCta.title')}</h3>
              <p className="text-lg mb-8 opacity-90">{t('finalCta.subtitle')}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 text-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('finalCta.button')}
                </motion.button>
              </div>

              <p className="text-sm mt-6 opacity-75">
                {t('finalCta.benefits')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
