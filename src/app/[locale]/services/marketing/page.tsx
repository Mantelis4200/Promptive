'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const marketingServices = [
  {
    id: 1,
    key: 'facebookInstagram',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    id: 2,
    key: 'googleAds',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    )
  },
  {
    id: 3,
    key: 'emailMarketing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    key: 'cro',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

export default function MarketingPage() {
  const t = useTranslations('marketingPage');

  useEffect(() => {
    // Force scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const scrollToBookCall = () => {
    // Redirect to contact page with chatbot widget
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section Overhaul */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Credibility proof */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-block bg-green-100 rounded-full px-4 py-2 text-sm font-semibold text-green-700 mb-6"
              >
                {t('hero.credibilityProof')}
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light mb-4">
                {t('hero.subtitle')}
              </p>
              
              {/* Core differentiator */}
              <p className="text-lg text-purple-600 font-medium mb-8">
                {t('hero.differentiator')}
              </p>
            </motion.div>

            {/* Right: Real Ad Previews */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid gap-6">
                {/* Meta Ad Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{t('adPreviews.metaAd.brandName')}</div>
                      <div className="text-xs text-gray-500">{t('adPreviews.metaAd.sponsored')}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg h-32 mb-3 flex items-center justify-center text-white font-bold">
                    {t('adPreviews.metaAd.headline')}
                  </div>
                  <p className="text-sm text-gray-700 mb-2">&ldquo;{t('adPreviews.metaAd.description')}&rdquo;</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{t('adPreviews.metaAd.engagement')}</span>
                    <span className="text-blue-600">{t('adPreviews.metaAd.cta')}</span>
                  </div>
                </motion.div>

                {/* Google Search Ad */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500 font-medium">{t('adPreviews.googleAd.adLabel')}</span>
                  </div>
                  <h3 className="text-blue-600 text-lg font-medium mb-1">{t('adPreviews.googleAd.headline')}</h3>
                  <p className="text-green-700 text-sm mb-2">{t('adPreviews.googleAd.url')}</p>
                  <p className="text-gray-700 text-sm">{t('adPreviews.googleAd.description')}</p>
                </motion.div>

                {/* Email Screenshot */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        GM
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{t('adPreviews.email.sender')}</div>
                        <div className="text-xs text-gray-500">{t('adPreviews.email.senderEmail')}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">{t('adPreviews.email.time')}</div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">{t('adPreviews.email.subject')}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{t('adPreviews.email.preview')}</p>
                  <div className="mt-3 bg-purple-600 text-white text-center py-2 rounded-lg text-xs font-medium">
                    {t('adPreviews.email.cta')}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side - Marketing Services */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {marketingServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t(`services.${service.key}.title`)}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t(`services.${service.key}.description`)}
                    </p>
                    
                    {/* Micro trust indicators */}
                    <div className="space-y-2">
                      {t(`services.${service.key}.trustIndicators.0`) && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">{t(`services.${service.key}.trustIndicators.0`)}</span>
                        </div>
                      )}
                      {t(`services.${service.key}.trustIndicators.1`) && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">{t(`services.${service.key}.trustIndicators.1`)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Marketing Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-2xl">
                {/* Marketing Illustration */}
                <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 shadow-2xl aspect-square">
                  
                  {/* Central Marketing Hub */}
                  <div className="flex justify-center mb-12">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="relative w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-xl"
                    >
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </motion.div>
                  </div>

                  {/* Marketing Icons Around Center */}
                  
                  {/* Charts Icon - Top Left */}
                  <div className="absolute top-12 left-12">
                    <motion.div
                      animate={{ 
                        y: [0, -15, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: 0
                      }}
                      className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Target Icon - Top Right */}
                  <div className="absolute top-12 right-12">
                    <motion.div
                      animate={{ 
                        y: [0, -15, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                      className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Dollar Sign - Bottom Left */}
                  <div className="absolute bottom-12 left-12">
                    <motion.div
                      animate={{ 
                        y: [0, -15, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: 1
                      }}
                      className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Thumbs Up - Bottom Right */}
                  <div className="absolute bottom-12 right-12">
                    <motion.div
                      animate={{ 
                        y: [0, -15, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: 1.5
                      }}
                      className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                    <motion.path
                      d="M200,200 L100,100"
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.path
                      d="M200,200 L300,100"
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    />
                    <motion.path
                      d="M200,200 L100,300"
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    />
                    <motion.path
                      d="M200,200 L300,300"
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 3 }}
                    />
                  </svg>

                  {/* Floating Decorative Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                    className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, -12, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: 1
                    }}
                    className="absolute bottom-20 right-20 w-4 h-4 bg-purple-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
              {t('overview.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('overview.subtitle')}
            </p>
          </motion.div>

          <div className="prose prose-lg prose-gray max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
              <p>{t('overview.paragraph1')}</p>
              <p>{t('overview.paragraph2')}</p>
              
              {/* Performance numbers */}
              <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-500">
                <p className="text-purple-900 font-semibold mb-2">{t('overview.provenResults.title')}</p>
                <p className="text-purple-800">{t('overview.provenResults.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
              {t('expertise.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('expertise.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                key: 'performance',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                key: 'ppc',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                )
              },
              {
                key: 'email',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                key: 'cro',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((expertise, index) => (
              <motion.div
                key={expertise.key}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6">
                  {expertise.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t(`expertise.items.${expertise.key}.title`)}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t(`expertise.items.${expertise.key}.description`)}
                </p>
                
                {/* Case Study */}
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-600">{t('expertise.caseStudyLabel')}</span>
                    <span className="text-sm font-bold text-green-600">{t(`expertise.items.${expertise.key}.metric`)}</span>
                  </div>
                  <p className="text-sm text-gray-700">{t(`expertise.items.${expertise.key}.caseStudy`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('finalCta.subtitle')}
            </p>
            
            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-sm text-purple-600 font-semibold mb-2">{t('finalCta.socialProof')}</p>
            </motion.div>
            
            {/* Dual CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={scrollToBookCall}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('finalCta.primaryButton')}
              </motion.button>
              
              <motion.button
                onClick={() => window.open('/contact', '_blank')}
                className="px-8 py-4 border-2 border-purple-500 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all duration-200 text-lg"
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