'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';


export default function AboutPage() {
  const t = useTranslations('aboutPage');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="organization" />
      <Header />

      {/* Hero Section - Compact */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Inline metrics */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-xs text-gray-500">{t('metrics.hoursSaved')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-600">40%</div>
                <div className="text-xs text-gray-500">{t('metrics.costReduction')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">90%</div>
                <div className="text-xs text-gray-500">{t('metrics.clientRetention')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Message - Compact */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-purple-100"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* CEO Photo & Info */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/images/photo.webp"
                    alt="Augustas Vinikas - CEO & Founder"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:text-center">
                  <p className="font-bold text-gray-900">{t('ceoMessage.signature.name')}</p>
                  <p className="text-purple-600 text-sm">{t('ceoMessage.signature.title')}</p>
                </div>
              </div>

              {/* Message */}
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Having worked in enterprise software for over a decade, I witnessed firsthand how teams waste countless hours on repetitive tasks. That&apos;s why I founded Promptive — to help businesses <span className="font-semibold text-purple-600">cut costs</span> and <span className="font-semibold text-blue-600">reclaim time</span> through intelligent automation.
                </p>
                <p className="text-gray-900 font-medium text-sm border-l-3 border-purple-500 pl-3 bg-white/50 py-2 rounded-r">
                  Our mission: Make AI automation so seamless that it transforms how businesses operate.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Bring - Compact Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {t('values.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* Efficiency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{t('values.efficiency.title')}</h3>
              <p className="text-gray-600 text-sm">{t('values.efficiency.description')}</p>
            </motion.div>

            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 border border-gray-200 hover:border-yellow-200 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{t('values.leadership.title')}</h3>
              <p className="text-gray-600 text-sm">{t('values.leadership.description')}</p>
            </motion.div>

            {/* Partnership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 border border-gray-200 hover:border-green-200 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{t('values.partnership.title')}</h3>
              <p className="text-gray-600 text-sm">{t('values.partnership.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Reach - Compact */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Left: Content */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('globalReach.title')}
              </h2>
              <p className="text-gray-600 mb-4">{t('globalReach.paragraph1')}</p>

              {/* Industry badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">{t('industries.fintech')}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">{t('industries.ecommerce')}</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">{t('industries.healthcare')}</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">{t('industries.manufacturing')}</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">{t('industries.saas')}</span>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="flex gap-6 md:gap-8">
              <div className="text-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-xs text-gray-600">{t('global.countriesServed')}</div>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-xs text-gray-600">{t('global.support')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial + Logos - Compact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 text-center"
          >
            <div className="text-2xl text-purple-500 mb-3">★★★★★</div>
            <blockquote className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
              {t('testimonial.quote')}
            </blockquote>
            <div className="text-gray-600 mb-6">
              <p className="font-semibold text-sm">{t('testimonial.name')}</p>
              <p className="text-xs">{t('testimonial.role')}</p>
            </div>

            {/* Logo wall */}
            <div className="border-t pt-6">
              <p className="text-xs text-gray-400 mb-4">{t('trustedBy.title')}</p>
              <div className="flex flex-wrap justify-center gap-6 items-center opacity-50">
                <Image src="/images/rhea.png" alt="Rhea" width={80} height={40} className="h-6 w-auto object-contain" />
                <Image src="/images/magnimoo.png" alt="Magnimoo" width={80} height={40} className="h-6 w-auto object-contain" />
                <Image src="/images/cheats-pro-logo.png" alt="Cheats Pro" width={80} height={40} className="h-8 w-auto object-contain" />
                <Image src="/images/kilo.png" alt="Kilo Health" width={80} height={40} className="h-6 w-auto object-contain" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Compact */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {t('finalCta.title')}
            </h2>
            <p className="text-purple-100 mb-6 max-w-xl mx-auto">
              {t('finalCta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                onClick={scrollToContact}
                className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('finalCta.primaryButton')}
              </motion.button>

              <motion.button
                onClick={() => window.open('/contact', '_blank')}
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('finalCta.secondaryButton')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
