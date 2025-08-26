'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqData = [
  {
    id: 1,
    key: 'whatIs'
  },
  {
    id: 2,
    key: 'howDifferent'
  },
  {
    id: 3,
    key: 'examples'
  },
  {
    id: 4,
    key: 'dataNeeded'
  }
];

export default function CustomAIModelsPage() {
  const t = useTranslations('customAIModelsPage');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    // Force scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (faqId: number) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const scrollToBookCall = () => {
    // Redirect to contact page with chatbot widget
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
        {/* Background Abstract AI Illustration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-bl from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-t from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              
              {/* Benefit-driven subheading */}
              <p className="text-xl md:text-2xl text-gray-600 font-light mb-8">
                {t('hero.subtitle')}
              </p>
              
              {/* CTA Button */}
              <motion.button
                onClick={scrollToBookCall}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-16 hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.ctaButton')}
              </motion.button>
            </motion.div>
            
            {/* Right side - AI Models Animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* AI Models in Action Illustration */}
              <div className="relative max-w-lg mx-auto">
                {/* Main container */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  
                  {/* Data Input Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-6"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{t('aiProcess.dataInput')}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                          className="h-4 bg-blue-100 rounded"
                        />
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Arrow */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center mb-6"
                  >
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                  
                  {/* AI Processing */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-6"
                  >
                    <div className="flex items-center mb-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </motion.div>
                      <span className="text-sm font-semibold text-gray-700">{t('aiProcess.aiProcessing')}</span>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <motion.div
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                        className="h-2 bg-purple-500 rounded"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Arrow */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="flex justify-center mb-6"
                  >
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                  
                  {/* Results Output */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{t('aiProcess.smartInsights')}</span>
                    </div>
                    <div className="space-y-2">
                      {[t('aiProcess.results.customerInsights'), t('aiProcess.results.processAutomation'), t('aiProcess.results.predictiveAnalytics')].map((result, i) => (
                        <motion.div
                          key={result}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
                          className="bg-green-50 text-green-800 text-xs font-medium px-3 py-2 rounded-lg"
                        >
                          {result}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-4 -right-4 w-6 h-6 bg-purple-400 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-400 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Eyebrow */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-wide text-purple-600 font-semibold mb-4">{t('sectionLabels.faq')}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('faq.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('faq.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side - How AI Models Connect to Workflows Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">{t('workflow.title')}</h3>
                
                {/* Workflow Diagram */}
                <div className="space-y-6">
                  {/* Step 1: Data Sources */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{t('workflow.dataSources.title')}</div>
                      <div className="text-sm text-gray-600">{t('workflow.dataSources.description')}</div>
                    </div>
                  </motion.div>
                  
                  {/* Arrow */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                  >
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                  
                  {/* Step 2: AI Processing */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{t('workflow.aiModelProcessing.title')}</div>
                      <div className="text-sm text-gray-600">{t('workflow.aiModelProcessing.description')}</div>
                    </div>
                  </motion.div>
                  
                  {/* Arrow */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="flex justify-center"
                  >
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                  
                  {/* Step 3: Workflow Integration */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{t('aiProcess.automatedActions')}</div>
                      <div className="text-sm text-gray-600">{t('aiProcess.automatedActionsDesc')}</div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Connection lines */}
                <div className="absolute left-[72px] top-[140px] w-0.5 h-[200px] bg-gradient-to-b from-blue-200 to-green-200"></div>
              </div>
            </motion.div>

            {/* Right Side - Enhanced FAQ Accordion with Icons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { ...faqData[0], icon: '🔧', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
                { ...faqData[1], icon: '🤖', iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
                { ...faqData[2], icon: '💡', iconBg: 'bg-green-100', iconColor: 'text-green-600' },
                { ...faqData[3], icon: '📊', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' }
              ].map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 ${faq.iconBg} rounded-xl flex items-center justify-center`}>
                        <span className="text-lg">{faq.icon}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {t(`faq.items.${faq.key}.question`)}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: expandedFaq === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg 
                        className="w-5 h-5 text-purple-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedFaq === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-700 leading-relaxed bg-gradient-to-r from-purple-50/30 to-blue-50/30">
                          <div 
                            dangerouslySetInnerHTML={{ 
                              __html: t(`faq.items.${faq.key}.answer`) 
                            }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Redesigned Text Block */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-wide text-purple-600 font-semibold mb-4">{t('sectionLabels.benefits')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('benefits.title')}
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - 3 Benefit Bullets */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Benefit 1: Scale with your company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('benefits.scaleWithCompany.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('benefits.scaleWithCompany.description')}</p>
                </div>
              </motion.div>
              
              {/* Benefit 2: Seamless integration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('benefits.seamlessIntegration.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('benefits.seamlessIntegration.description')}</p>
                </div>
              </motion.div>
              
              {/* Benefit 3: Measurable results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('benefits.measurableResults.title')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('benefits.measurableResults.description')}</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Growth Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">{t('businessEvolution.title')}</h3>
                
                {/* Timeline */}
                <div className="space-y-8">
                  {/* Small Business */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-600 text-lg">{t('businessEvolution.smallBusiness.title')}</div>
                      <div className="text-gray-600">{t('businessEvolution.smallBusiness.description')}</div>
                      <div className="text-sm text-gray-500">{t('businessEvolution.smallBusiness.employees')}</div>
                    </div>
                  </motion.div>
                  
                  {/* Arrow */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                  >
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                  
                  {/* Mid-Market */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-purple-600 text-lg">{t('businessEvolution.midMarket.title')}</div>
                      <div className="text-gray-600">{t('businessEvolution.midMarket.description')}</div>
                      <div className="text-sm text-gray-500">{t('businessEvolution.midMarket.employees')}</div>
                    </div>
                  </motion.div>
                  
                  {/* Arrow */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="flex justify-center"
                  >
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                  
                  {/* Enterprise */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-green-600 text-lg">{t('businessEvolution.enterprise.title')}</div>
                      <div className="text-gray-600">{t('businessEvolution.enterprise.description')}</div>
                      <div className="text-sm text-gray-500">{t('businessEvolution.enterprise.employees')}</div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Connecting lines */}
                <div className="absolute left-[72px] top-[120px] w-0.5 h-[280px] bg-gradient-to-b from-blue-200 via-purple-200 to-green-200"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Enhanced Feature Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-wide text-purple-600 font-semibold mb-4">{t('sectionLabels.solutions')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('businessTypes.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('businessTypes.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { key: 'smallBusiness', category: 'SMB', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
              { key: 'enterprise', category: 'Enterprise', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
              { key: 'aiAssistant', category: 'Sector-Specific', color: 'from-green-500 to-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
              { key: 'industrySpecific', category: 'Development', color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' }
            ].map((solution, index) => (
              <motion.div
                key={solution.key}
                className={`bg-white ${solution.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background highlight effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Color-coded Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {solution.key === 'smallBusiness' && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {solution.key === 'enterprise' && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {solution.key === 'aiAssistant' && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                  {solution.key === 'industrySpecific' && (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </motion.div>

                {/* Category Badge */}
                <div className={`inline-block ${solution.bgColor} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 relative z-10`}>
                  <span className={`bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                    {solution.category}
                  </span>
                </div>

                {/* Benefit-First Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors relative z-10">
                  {t(`solutionTypes.${solution.key === 'smallBusiness' ? 'smallBusinessAutomation' : solution.key === 'enterprise' ? 'enterpriseAI' : solution.key === 'aiAssistant' ? 'industryTailoredAI' : 'customDevelopment'}.title`)}
                </h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-600 transition-colors relative z-10 mb-4">
                  {t(`solutionTypes.${solution.key === 'smallBusiness' ? 'smallBusinessAutomation' : solution.key === 'enterprise' ? 'enterpriseAI' : solution.key === 'aiAssistant' ? 'industryTailoredAI' : 'customDevelopment'}.description`)}
                </p>
                
                {/* Original description for additional context */}
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {t(`businessTypes.items.${solution.key}.description`)}
                </p>
                
                {/* Hover arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6 text-gray-400 group-hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mini Case Study / Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-purple-500">
                <path d="M12 2L13.09 8.26L22 9L13.09 15.74L12 22L10.91 15.74L2 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-4 py-2 text-sm font-semibold text-purple-700 mb-6">
                {t('caseStudy.label')}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                &ldquo;{t('caseStudy.quote')}&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TI</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{t('caseStudy.company')}</div>
                  <div className="text-gray-600">{t('caseStudy.industry')}</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">75%</div>
                  <div className="text-gray-600 text-sm">{t('caseStudy.metrics.fasterProcessing')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">98%</div>
                  <div className="text-gray-600 text-sm">{t('caseStudy.metrics.accuracyRate')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">6mo</div>
                  <div className="text-gray-600 text-sm">{t('caseStudy.metrics.implementation')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 mb-8"
            >
              <p className="text-white/90 font-medium">
                {t('finalCta.trustBadge')}
              </p>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            
            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={scrollToBookCall}
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-16 hover:bg-gray-100 transition-all duration-200 text-lg shadow-xl hover:shadow-2xl min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('cta.button')}
              </motion.button>
              
              <motion.button
                onClick={() => window.open('#examples', '_self')}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-medium rounded-16 hover:bg-white/30 transition-all duration-200 text-lg min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('finalCta.seeExamples')}
              </motion.button>
            </div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/60 text-sm"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3.09 8.26L4 21H20L20.91 8.26L12 2ZM12 4.44L18.18 9H5.82L12 4.44ZM6 11H18V19H6V11Z"/>
                </svg>
                <span>{t('finalCta.trustIndicators.gdprCompliant')}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12L11 14L15 10M21 12C21 16.97 17.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
                </svg>
                <span>{t('finalCta.trustIndicators.isoCertified')}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.85 3.4 14.7 3.4 14.55 3.4L12 5L9.45 3.4C9.3 3.4 9.15 3.4 9 3.5L3 7V9L9 5.5L12 7L15 5.5L21 9ZM12 8C8.69 8 6 10.69 6 14S8.69 20 12 20 18 17.31 18 14 15.31 8 12 8ZM12 18C9.79 18 8 16.21 8 14S9.79 10 12 10 16 11.79 16 14 14.21 18 12 18Z"/>
                </svg>
                <span>{t('finalCta.trustIndicators.support')}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
      
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}