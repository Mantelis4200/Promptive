'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqData = [
  {
    id: 1,
    key: 'industries'
  },
  {
    id: 2,
    key: 'technical'
  },
  {
    id: 3,
    key: 'duration'
  },
  {
    id: 4,
    key: 'whyFree'
  },
  {
    id: 5,
    key: 'results'
  },
  {
    id: 6,
    key: 'afterConsultation'
  },
  {
    id: 7,
    key: 'businessSizes'
  }
];

export default function AIConsultationPage() {
  const t = useTranslations('aiConsultationPage');
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
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Geometric pattern */}
            <svg className="absolute top-10 left-10 w-32 h-32 text-purple-300" fill="currentColor" viewBox="0 0 100 100">
              <circle cx="20" cy="20" r="2"/>
              <circle cx="80" cy="20" r="2"/>
              <circle cx="50" cy="50" r="3"/>
              <circle cx="20" cy="80" r="2"/>
              <circle cx="80" cy="80" r="2"/>
            </svg>
            <svg className="absolute top-20 right-20 w-24 h-24 text-blue-300" fill="currentColor" viewBox="0 0 100 100">
              <polygon points="50,10 90,90 10,90"/>
            </svg>
            <svg className="absolute bottom-20 left-20 w-28 h-28 text-indigo-300" fill="currentColor" viewBox="0 0 100 100">
              <rect x="30" y="30" width="40" height="40" rx="8"/>
            </svg>
            <svg className="absolute bottom-10 right-10 w-20 h-20 text-purple-300" fill="currentColor" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4"/>
              <circle cx="50" cy="50" r="8"/>
            </svg>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto lg:mx-0 mb-4 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
                
                {/* Value proposition */}
                <p className="text-lg text-purple-600 font-medium mb-8 max-w-2xl mx-auto lg:mx-0">
                  {t('hero.valueProposition')}
                </p>
                
                {/* CTA Button */}
                <motion.button
                  onClick={scrollToBookCall}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t('hero.ctaText')}
                </motion.button>
              </motion.div>

              {/* Right Side - AI Strategy Report Preview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative max-w-sm">
                  {/* Tablet Device Mockup */}
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative bg-gray-800 rounded-2xl p-3 shadow-2xl"
                    style={{ transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)' }}
                  >
                    {/* Screen */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-inner">
                      {/* Report Header */}
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-bold text-lg">AI Automation Opportunities</h3>
                            <p className="text-purple-100 text-sm">Strategy Report</p>
                          </div>
                          <div className="bg-white bg-opacity-20 rounded-lg p-2">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Report Content */}
                      <div className="p-6 space-y-4">
                        {/* Client Info */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-gray-900">[Your Company]</span>
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">CONFIDENTIAL</span>
                          </div>
                          <p className="text-sm text-gray-600">Strategic Assessment - {new Date().toLocaleDateString()}</p>
                        </div>

                        {/* Current Process Analysis */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                            Current Process Analysis
                          </h4>
                          <div className="space-y-1 text-sm text-gray-700 pl-4">
                            <div className="flex items-center">
                              <svg className="w-3 h-3 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                              Manual customer inquiries: 4.2hrs/day
                            </div>
                            <div className="flex items-center">
                              <svg className="w-3 h-3 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                              Data entry tasks: 2.8hrs/day
                            </div>
                            <div className="flex items-center">
                              <svg className="w-3 h-3 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                              Follow-up processes: 1.5hrs/day
                            </div>
                          </div>
                        </div>

                        {/* AI Opportunities */}
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Identified AI Opportunities
                          </h4>
                          <div className="space-y-2 pl-4">
                            <div className="flex items-center justify-between bg-green-50 rounded-lg p-2">
                              <span className="text-sm font-medium text-gray-700">Chatbot Implementation</span>
                              <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">HIGH</span>
                            </div>
                            <div className="flex items-center justify-between bg-blue-50 rounded-lg p-2">
                              <span className="text-sm font-medium text-gray-700">Workflow Automation</span>
                              <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">HIGH</span>
                            </div>
                            <div className="flex items-center justify-between bg-yellow-50 rounded-lg p-2">
                              <span className="text-sm font-medium text-gray-700">Data Processing AI</span>
                              <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs font-bold">MED</span>
                            </div>
                          </div>
                        </div>

                        {/* ROI Section */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-gray-900">Expected ROI</h4>
                            <div className="text-2xl font-bold text-green-600">180%</div>
                          </div>
                          <p className="text-sm text-gray-600">Within 12 months</p>
                          
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-700">Implementation Timeline</span>
                              <span className="font-semibold text-purple-600">6-8 weeks</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="bg-gray-50 px-6 py-3 border-t">
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            Generated by Promptive AI
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-xs font-medium text-gray-700">Page 1 of 3</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Screen Reflection */}
                    <div className="absolute inset-3 bg-gradient-to-b from-white/20 to-transparent rounded-xl pointer-events-none"></div>
                  </motion.div>

                  {/* Floating Insight Bubbles */}
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                    className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-purple-100"
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-medium text-gray-700">Save $45k/year</span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 3.5,
                      repeat: Infinity,
                      delay: 1.5
                    }}
                    className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-blue-100"
                  >
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-xs font-medium text-gray-700">75% efficiency gain</span>
                    </div>
                  </motion.div>

                  {/* Floating Decorative Elements */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -top-8 -right-8 w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full shadow-lg opacity-60"
                  />

                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-8 -left-8 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-lg opacity-60"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-purple-600 font-medium mb-4 text-lg">{t('labels.commonQuestions')}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('faq.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('faq.subtitle')}
              </p>
            </motion.div>
          </div>

          {/* FAQ Container with Background Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Side - FAQ Accordion */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {faqData.map((faq, index) => {
                  const faqIcons = {
                    industries: (
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                    technical: (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    duration: (
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    whyFree: (
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    ),
                    results: (
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ),
                    afterConsultation: (
                      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    businessSizes: (
                      <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                  };

                  return (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className={`w-full px-6 py-5 text-left flex items-center justify-between transition-all duration-300 ${
                          expandedFaq === faq.id 
                            ? 'bg-purple-50 border-b border-purple-100' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {faqIcons[faq.key as keyof typeof faqIcons]}
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {t(`faq.items.${faq.key}.question`)}
                          </h3>
                        </div>
                        
                        <motion.div
                          animate={{ 
                            rotate: expandedFaq === faq.id ? 45 : 0,
                            scale: expandedFaq === faq.id ? 1.1 : 1
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            expandedFaq === faq.id 
                              ? 'bg-purple-500 text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            <svg 
                              className="w-3 h-3" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={3} 
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                              />
                            </svg>
                          </div>
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {expandedFaq === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden bg-white"
                          >
                            <div className="px-6 pb-6 pt-4 text-gray-700 leading-relaxed border-t border-gray-100">
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
                  );
                })}
              </motion.div>

              {/* Right Side - Business + AI Collaboration Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative max-w-lg">
                  {/* Main Collaboration Scene */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
                    
                    {/* Central Holographic AI Interface */}
                    <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 mb-6 border border-purple-200 shadow-inner">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.02, 1],
                          opacity: [0.9, 1, 0.9]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative"
                      >
                        {/* Holographic Display */}
                        <div className="bg-white bg-opacity-80 rounded-xl p-4 backdrop-blur-sm shadow-lg border border-white/50">
                          <div className="grid grid-cols-3 gap-2 mb-3">
                            <motion.div 
                              animate={{ height: [8, 16, 12, 20, 8] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="bg-purple-400 rounded-sm"
                            />
                            <motion.div 
                              animate={{ height: [12, 8, 16, 10, 12] }}
                              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                              className="bg-blue-400 rounded-sm"
                            />
                            <motion.div 
                              animate={{ height: [6, 14, 8, 18, 6] }}
                              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                              className="bg-green-400 rounded-sm"
                            />
                          </div>
                          
                          {/* Progress Indicators */}
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <motion.div 
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 bg-green-500 rounded-full"
                              />
                              <div className="text-xs text-gray-700 font-medium">Analysis Complete</div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <motion.div 
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-2 h-2 bg-blue-500 rounded-full"
                              />
                              <div className="text-xs text-gray-600">Processing Insights</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Holographic Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-xl blur-sm -z-10"></div>
                      </motion.div>
                    </div>

                    {/* Business Professionals Around Interface */}
                    <div className="flex justify-between items-end mb-4">
                      {/* Professional 1 - Left */}
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-600 text-center">CEO</div>
                      </motion.div>

                      {/* Professional 2 - Center */}
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-600 text-center">AI Expert</div>
                      </motion.div>

                      {/* Professional 3 - Right */}
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.4 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center mb-2 shadow-lg">
                          <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-600 text-center">CTO</div>
                      </motion.div>
                    </div>

                    {/* Transformation Flow Elements */}
                    <div className="flex justify-center space-x-4 items-center">
                      {/* Questions */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: 0
                        }}
                        className="bg-white rounded-xl p-3 shadow-lg border border-orange-100"
                      >
                        <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
                        </svg>
                      </motion.div>

                      {/* Arrow */}
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-purple-400"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </motion.div>

                      {/* AI Processing */}
                      <motion.div
                        animate={{ 
                          rotate: [0, 360]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="bg-white rounded-xl p-3 shadow-lg border border-purple-100"
                      >
                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </motion.div>

                      {/* Arrow */}
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="text-purple-400"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </motion.div>

                      {/* Insights */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          delay: 2
                        }}
                        className="bg-white rounded-xl p-3 shadow-lg border border-green-100"
                      >
                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Floating Insight Bubbles */}
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                      className="absolute -top-2 -right-2 bg-white rounded-xl p-2 shadow-lg border border-blue-100"
                    >
                      <div className="text-xs font-medium text-blue-600">ROI: 180%</div>
                    </motion.div>

                    <motion.div
                      animate={{ 
                        y: [0, -6, 0],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 3.5,
                        repeat: Infinity,
                        delay: 1.2
                      }}
                      className="absolute -bottom-2 -left-2 bg-white rounded-xl p-2 shadow-lg border border-green-100"
                    >
                      <div className="text-xs font-medium text-green-600">6-8 weeks</div>
                    </motion.div>

                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-4 right-4 w-4 h-4 bg-purple-200 rounded-full opacity-40"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute bottom-4 right-8 w-3 h-3 bg-blue-200 rounded-full opacity-40"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-purple-600 font-medium mb-4 text-lg">{t('labels.expectationSteps')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('expectationsSection.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('expectationsSection.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.raw('expectationsSection.steps').map((step: { title: string; description: string; duration: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {step.description}
                </p>
                <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-purple-600 font-medium mb-4 text-lg">{t('labels.professionalStats')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('professionalServices.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('professionalServices.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.raw('professionalServices.stats').map((stat: { number: string; label: string; description: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <p className="text-purple-600 font-medium mb-4 text-lg">{t('labels.whyChooseUs')}</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  {t('overview.title')}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t('overview.subtitle')}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="flex flex-wrap gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t('benefits.cutCosts.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('benefits.cutCosts.description')}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t('benefits.fasterImplementation.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('benefits.fasterImplementation.description')}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{t('benefits.scalableAI.title')}</h3>
                    <p className="text-gray-600 text-sm">{t('benefits.scalableAI.description')}</p>
                  </div>
                </motion.div>
              </div>

              {/* Overview Content */}
              <div className="prose prose-lg prose-gray max-w-none">
                <div className="text-gray-700 space-y-6 text-lg leading-8">
                  <p>{t('overview.paragraph1')}</p>
                  <p>{t('overview.paragraph2')}</p>
                  <p>{t('overview.paragraph3')}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Strategy Session Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                
                {/* Strategy Session Mockup */}
                <div className="relative">
                  {/* Conference Table */}
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 mb-6">
                    <div className="flex justify-center space-x-4 mb-4">
                      {/* People around table */}
                      {[1, 2, 3].map((person) => (
                        <motion.div
                          key={person}
                          animate={{ 
                            y: [0, -2, 0],
                          }}
                          transition={{ 
                            duration: 2 + person * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: person * 0.3
                          }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                            person === 1 ? 'bg-purple-500' : 
                            person === 2 ? 'bg-blue-500' : 'bg-green-500'
                          }`}
                        >
                          {person === 1 ? 'AI' : person === 2 ? 'CEO' : 'CTO'}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Strategy Board */}
                    <div className="bg-white rounded-xl p-4 shadow-inner">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-2 bg-purple-200 rounded"></div>
                        <div className="h-2 bg-blue-200 rounded"></div>
                        <div className="h-2 bg-green-200 rounded"></div>
                        <div className="h-2 bg-purple-300 rounded col-span-2"></div>
                        <div className="h-2 bg-blue-300 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Strategy Elements */}
                  <div className="absolute -top-4 -right-4">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                      className="bg-white rounded-xl p-3 shadow-lg border border-purple-100"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <div className="text-xs font-medium text-gray-700">{t('floatingElements.strategy')}</div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute -bottom-4 -left-4">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: 1.5
                      }}
                      className="bg-white rounded-xl p-3 shadow-lg border border-blue-100"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="text-xs font-medium text-gray-700">{t('floatingElements.planning')}</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Results Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">85%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">30+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-xs text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Free vs Premium */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-purple-600 font-medium mb-4 text-lg">{t('labels.freeVsPremium')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t('servicesGrid.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('servicesGrid.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Free Consultation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-green-100 hover:-translate-y-2 group"
            >
              <div className="text-center mb-8">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  FREE
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('servicesGrid.freeSection.title')}
                </h3>
                <p className="text-gray-600">
                  {t('servicesGrid.freeSection.subtitle')}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {t.raw('servicesGrid.freeSection.features').map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={scrollToBookCall}
                className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-2xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-105"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('servicesGrid.freeSection.cta')}
              </motion.button>
            </motion.div>

            {/* Premium Strategy Package */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-purple-500 hover:-translate-y-2 group text-white relative overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                    PREMIUM
                  </div>
                  <h3 className="text-3xl font-bold mb-2">
                    {t('servicesGrid.premiumSection.title')}
                  </h3>
                  <p className="text-blue-100">
                    {t('servicesGrid.premiumSection.subtitle')}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {t.raw('servicesGrid.premiumSection.features').map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  onClick={() => window.location.href = '/contact'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-2xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('servicesGrid.premiumSection.cta')}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-pink-400 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('finalCta.subtitle')}
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('finalCta.description')}
            </p>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
            >
              {t.raw('finalCta.trustElements').map((element: string, index: number) => (
                <div key={index} className="bg-white bg-opacity-60 backdrop-blur rounded-2xl p-4 text-sm font-medium text-gray-700">
                  {element}
                </div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <motion.button
                onClick={scrollToBookCall}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{t('finalCta.primaryButton')}</span>
                </span>
              </motion.button>

              <motion.button
                onClick={() => window.open('/contact', '_blank')}
                className="px-8 py-4 bg-white text-gray-700 font-medium rounded-2xl hover:bg-gray-50 transition-all duration-200 text-lg shadow-lg hover:shadow-xl border border-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{t('finalCta.secondaryButton')}</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Final Trust Message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 max-w-lg mx-auto"
            >
              {t('finalTrust.message')} 
              <span className="font-medium text-purple-600"> {t('finalTrust.commitment')}</span>
            </motion.p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}