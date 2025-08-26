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
    // Force scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const scrollToBookCall = () => {
    // Redirect to contact page with chatbot widget
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="organization" />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            
            {/* Client proof metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600 font-medium">{t('metrics.hoursSaved')}</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-sm text-gray-600 font-medium">{t('metrics.costReduction')}</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-sm text-gray-600 font-medium">{t('metrics.clientRetention')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8">
              {t('ceoMessage.heading')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Quote Background */}
            <div className="absolute -top-6 -left-4 md:-left-8 text-purple-200 text-8xl md:text-9xl font-serif leading-none pointer-events-none z-0">
              &ldquo;
            </div>
            
            {/* CEO Message Content */}
            <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl z-10">
              <div className="prose prose-lg md:prose-xl max-w-none">
                <div className="text-gray-700 leading-relaxed space-y-6">
                  <p className="text-lg md:text-xl">
                    Having worked in enterprise software for over a decade, I witnessed firsthand how teams waste countless hours on repetitive tasks that technology should handle. That&apos;s why I founded Promptive — to help businesses <span className="font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">cut unnecessary costs</span> and <span className="font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">reclaim time</span> through intelligent automation.
                  </p>
                  
                  <p className="text-lg md:text-xl">
                    Every automation we build is designed to free your team from mundane work, so they can focus on what drives real growth and innovation.
                  </p>
                  
                  <p className="text-lg md:text-xl font-medium text-gray-900 border-l-4 border-purple-500 pl-4 bg-white bg-opacity-50 rounded-r-lg py-2">
                    Our mission: Make AI automation so seamless that it transforms how businesses operate, without the complexity.
                  </p>
                </div>
                
                {/* CEO Signature */}
                <div className="mt-8 pt-6 border-t border-purple-200">
                  <div className="flex items-center space-x-4">
                    {/* CEO Photo */}
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                      <Image
                        src="/images/photo.webp"
                        alt="Augustas Vinikas - CEO & Founder"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {t('ceoMessage.signature.name')}
                      </p>
                      <p className="text-purple-600 font-medium">
                        {t('ceoMessage.signature.title')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Quote */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 text-purple-200 text-8xl md:text-9xl font-serif leading-none pointer-events-none rotate-180 z-0">
              &rdquo;
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('values.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Efficiency Value */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Contextual Clock Illustration */}
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('values.efficiency.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('values.efficiency.description')}
              </p>
              
              {/* Mini proof */}
              <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-500">
                <p className="text-sm font-semibold text-green-700">{t('values.efficiency.proofTitle')}</p>
                <p className="text-sm text-green-600">{t('values.efficiency.proofDescription')}</p>
              </div>
            </motion.div>

            {/* Leadership Value */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Contextual Lightbulb Illustration */}
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('values.leadership.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('values.leadership.description')}
              </p>
              
              {/* Mini proof */}
              <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-700">{t('values.leadership.proofTitle')}</p>
                <p className="text-sm text-blue-600">{t('values.leadership.proofDescription')}</p>
              </div>
            </motion.div>

            {/* Partnership Value */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              {/* Contextual Handshake Illustration */}
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('values.partnership.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('values.partnership.description')}
              </p>
              
              {/* Mini proof */}
              <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
                <p className="text-sm font-semibold text-purple-700">{t('values.partnership.proofTitle')}</p>
                <p className="text-sm text-purple-600">{t('values.partnership.proofDescription')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
              {t('globalReach.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('globalReach.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
                <p>{t('globalReach.paragraph1')}</p>
                
                <p>{t('globalReach.paragraph2')}</p>
              </div>
              
              {/* Industry badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">{t('industries.fintech')}</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{t('industries.ecommerce')}</span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">{t('industries.healthcare')}</span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">{t('industries.manufacturing')}</span>
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">{t('industries.saas')}</span>
              </div>

              {/* Concrete proof */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 border-l-4 border-purple-500">
                <p className="text-purple-900 font-semibold mb-2">{t('industryFirst.title')}</p>
                <p className="text-purple-800">{t('industryFirst.description')}</p>
              </div>
            </motion.div>

            {/* Right: Global Map Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-2xl">
                {/* Simplified World Map with Highlighted Regions */}
                <div className="relative w-full h-80">
                  <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                    {/* Background world outline */}
                    <rect width="400" height="200" fill="#f8fafc" rx="8"/>
                    
                    {/* Europe - Highlighted */}
                    <circle cx="200" cy="70" r="25" fill="#8b5cf6" opacity="0.3"/>
                    <circle cx="200" cy="70" r="8" fill="#8b5cf6"/>
                    <text x="200" y="50" textAnchor="middle" className="text-xs font-semibold fill-purple-600">
                      Europe
                    </text>
                    
                    {/* North America - Highlighted */}
                    <circle cx="120" cy="80" r="25" fill="#3b82f6" opacity="0.3"/>
                    <circle cx="120" cy="80" r="8" fill="#3b82f6"/>
                    <text x="120" y="60" textAnchor="middle" className="text-xs font-semibold fill-blue-600">
                      North America
                    </text>
                    
                    {/* UK - Special highlight */}
                    <circle cx="190" cy="65" r="15" fill="#10b981" opacity="0.3"/>
                    <circle cx="190" cy="65" r="5" fill="#10b981"/>
                    <text x="190" y="45" textAnchor="middle" className="text-xs font-semibold fill-green-600">
                      UK
                    </text>
                    
                    {/* Nordic - Highlighted */}
                    <circle cx="210" cy="50" r="20" fill="#f59e0b" opacity="0.3"/>
                    <circle cx="210" cy="50" r="6" fill="#f59e0b"/>
                    <text x="210" y="35" textAnchor="middle" className="text-xs font-semibold fill-yellow-600">
                      Nordic
                    </text>
                  </svg>
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white bg-opacity-80 rounded-lg p-3">
                        <div className="text-2xl font-bold text-purple-600">15+</div>
                        <div className="text-xs text-gray-600">{t('global.countriesServed')}</div>
                      </div>
                      <div className="bg-white bg-opacity-80 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                        <div className="text-xs text-gray-600">{t('global.support')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              {t('whyChoose.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('whyChoose.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Global Expertise Card */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('whyChoose.globalExperience.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('whyChoose.globalExperience.description')}
              </p>
              
              {/* Case study */}
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-700 mb-1">{t('whyChoose.globalExperience.caseStudyTitle')}</p>
                <p className="text-sm text-blue-600">{t('whyChoose.globalExperience.caseStudyDescription')}</p>
              </div>
            </motion.div>

            {/* Specialized Niches Card */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('whyChoose.industrySpecialization.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('whyChoose.industrySpecialization.description')}
              </p>
              
              {/* Specialized niches */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">{t('specializations.healthcareHipaa')}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{t('specializations.saasScale')}</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">{t('specializations.fintechSecurity')}</span>
              </div>
              
              {/* Proprietary tools */}
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-sm font-semibold text-green-700 mb-1">{t('whyChoose.industrySpecialization.frameworkTitle')}</p>
                <p className="text-sm text-green-600">{t('whyChoose.industrySpecialization.frameworkDescription')}</p>
              </div>
            </motion.div>
          </div>

          {/* Client Testimonial & Logo Wall */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="mb-8">
              <div className="text-4xl text-purple-500 mb-4">★★★★★</div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
                {t('testimonial.quote')}
              </blockquote>
              <div className="text-gray-600">
                <p className="font-semibold">{t('testimonial.name')}</p>
                <p className="text-sm">{t('testimonial.role')}</p>
              </div>
            </div>
            
            {/* Trusted by logos */}
            <div className="border-t pt-8">
              <p className="text-sm text-gray-500 mb-6">{t('trustedBy.title')}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <Image
                    src="/images/rhea.png"
                    alt="Rhea"
                    width={100}
                    height={50}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <Image
                    src="/images/magnimoo.png"
                    alt="Magnimoo"
                    width={100}
                    height={50}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg p-1 h-16 flex items-center justify-center">
                  <Image
                    src="/images/cheats-pro-logo.png"
                    alt="Cheats Pro"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <Image
                    src="/images/kilo.png"
                    alt="Kilo Health"
                    width={100}
                    height={50}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative z-20">
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
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
              {t('finalCta.subtitle')}
            </p>
            
            {/* Urgency/Authority line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-purple-600 font-semibold bg-purple-50 inline-block px-4 py-2 rounded-full border border-purple-200">
                {t('finalCta.urgency')}
              </p>
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

            {/* Additional trust signal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <p className="text-sm text-gray-500">
                {t('finalCta.stats')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}