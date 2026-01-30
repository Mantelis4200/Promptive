'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Reordered by popularity: outreach → leads → invoicing → support → operations
const workflowCategories = [
  {
    id: 1,
    key: 'linkedinConnections',
    emoji: '🤖',
    icon: 'robot',
    benefit: 'Automated outreach with personalized messaging',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 2,
    key: 'leadSourcing',
    emoji: '📊',
    icon: 'chart',
    benefit: 'Find verified leads automatically from LinkedIn, Apollo, and websites',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 3,
    key: 'invoicing',
    emoji: '💰',
    icon: 'shopping-cart',
    benefit: 'Automated invoice generation and payment tracking',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 4,
    key: 'aiSupport',
    emoji: '🎧',
    icon: 'headphones',
    benefit: 'Smart responses to common inquiries',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 5,
    key: 'documentParsing',
    emoji: '📄',
    icon: 'document',
    benefit: 'Extract and process data from documents automatically',
    color: 'from-gray-500 to-gray-600',
    bgColor: 'bg-gray-50'
  }
];

export default function CustomSolutionsPage() {
  const t = useTranslations('customSolutionsPage');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [loadingStates, setLoadingStates] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleButtonClick = (buttonId: string) => {
    setLoadingStates(prev => ({ ...prev, [buttonId]: true }));
    
    // Reset loading state after 3 seconds
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [buttonId]: false }));
    }, 3000);
  };

  const getLoadingText = () => {
    const isLithuanian = typeof window !== 'undefined' && window.location.pathname.includes('/lt');
    return isLithuanian ? 'Informacija ruošiama..' : 'Being prepared..';
  };

  const scrollToBookCall = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-bl from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-t from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light mb-8">
                {t('hero.subtitle')}
              </p>
              
              {/* Hero CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  onClick={scrollToBookCall}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('hero.primaryCta')}
                </motion.button>
                
                <motion.button
                  onClick={() => handleButtonClick('secondaryCta')}
                  disabled={loadingStates.secondaryCta}
                  className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 text-lg shadow-md hover:shadow-lg disabled:opacity-75"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loadingStates.secondaryCta ? getLoadingText() : t('hero.secondaryCta')}
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Comprehensive Workflow Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-3xl"
            >
              <div className="bg-gradient-to-br from-gray-50/60 to-blue-50/40 rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20 opacity-60"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{t('diagram.title')}</h3>
                  <p className="text-sm text-gray-600 mb-8 text-center">{t('diagram.subtitle')}</p>
                  
                  {/* Workflow Grid - Desktop: 3 columns, Mobile: 1 column */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-12">
                    
                    {/* TOP ROW - INPUTS */}
                    <div className="md:col-span-3 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
                      {/* Email Input */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="flex flex-col items-center group"
                      >
                        <div className="w-18 h-18 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-200">
                          <svg className="w-8 h-8 md:w-9 md:h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{t('diagram.inputs.email')}</span>
                      </motion.div>

                      {/* Spreadsheet Input */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="flex flex-col items-center group"
                      >
                        <div className="w-18 h-18 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-green-200">
                          <svg className="w-8 h-8 md:w-9 md:h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5v6M16 5v6M3 11h18" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{t('diagram.inputs.spreadsheet')}</span>
                      </motion.div>

                      {/* API/Webhook Input */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="flex flex-col items-center group"
                      >
                        <div className="w-18 h-18 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-purple-200">
                          <svg className="w-8 h-8 md:w-9 md:h-9 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{t('diagram.inputs.api')}</span>
                      </motion.div>
                    </div>

                    {/* CONNECTING ARROWS FROM INPUTS */}
                    <div className="md:col-span-3 flex justify-center my-2">
                      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="flex flex-col md:flex-row items-center"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          >
                            <svg className="w-6 h-8 md:w-8 md:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" className="md:hidden" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden md:block" />
                            </svg>
                            {i < 2 && <div className="hidden md:block w-8 h-0.5 bg-gray-200"></div>}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* MIDDLE LAYER - AI ORCHESTRATION */}
                    <div className="md:col-span-3 flex justify-center my-4">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="relative"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.04, 1],
                            boxShadow: [
                              "0 0 20px rgba(139, 92, 246, 0.3)",
                              "0 0 35px rgba(139, 92, 246, 0.5)", 
                              "0 0 20px rgba(139, 92, 246, 0.3)"
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl border-4 border-white relative overflow-hidden"
                        >
                          {/* Subtle gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                          
                          {/* Brain Icon */}
                          <div className="text-4xl md:text-5xl relative z-10">🧠</div>
                        </motion.div>
                        
                        {/* AI Text Labels */}
                        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-center">
                          <div className="text-sm font-bold text-purple-700 whitespace-nowrap mb-1">{t('diagram.aiOrchestration')}</div>
                          <div className="text-xs text-gray-600 whitespace-nowrap">{t('diagram.aiProcess')}</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* CONNECTING ARROWS TO OUTPUTS */}
                    <div className="md:col-span-3 flex justify-center my-6 md:my-2">
                      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="flex flex-col md:flex-row items-center"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 + i * 0.3 }}
                          >
                            <svg className="w-6 h-8 md:w-8 md:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" className="md:hidden" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden md:block" />
                            </svg>
                            {i < 2 && <div className="hidden md:block w-8 h-0.5 bg-gray-200"></div>}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM ROW - OUTPUTS */}
                    <div className="md:col-span-3 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
                      {/* CRM Output */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="flex flex-col items-center group"
                      >
                        <div className="w-18 h-18 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-200">
                          <svg className="w-8 h-8 md:w-9 md:h-9 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{t('diagram.outputs.crm')}</span>
                      </motion.div>

                      {/* Notifications Output */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="flex flex-col items-center group"
                      >
                        <div className="w-18 h-18 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-yellow-200">
                          <svg className="w-8 h-8 md:w-9 md:h-9 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-5 5v-5zM4 19h6v1a1 1 0 001 1h4a1 1 0 001-1v-1h6" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a4 4 0 11-8 0 4 4 0 018 0zM13 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{t('diagram.outputs.notifications')}</span>
                      </motion.div>

                      {/* Analytics Output */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="flex flex-col items-center group"
                      >
                        <div className="w-18 h-18 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-2 border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:border-green-200">
                          <svg className="w-8 h-8 md:w-9 md:h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-700">{t('diagram.outputs.analytics')}</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating Data Dots Animation */}
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute top-16 left-16 w-2 h-2 bg-blue-400 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, -12, 0],
                      opacity: [0.4, 0.9, 0.4]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute bottom-16 right-16 w-2 h-2 bg-purple-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Categories Accordion */}
      <section id="workflow-categories" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('content.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('content.description')}
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {workflowCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg ${category.bgColor}`}
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                      <span className="text-xl">{category.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {category.key === 'linkedinConnections' && t('workflowCards.linkedinConnections.title')}
                        {category.key === 'leadSourcing' && t('workflowCards.leadSourcing.title')}
                        {category.key === 'invoicing' && t('workflowCards.salesAutomation.title')}
                        {category.key === 'aiSupport' && t('workflowCards.aiResponses.title')}
                        {category.key === 'documentParsing' && t('workflowCards.documentProcessing.title')}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {category.key === 'linkedinConnections' && t('workflowCards.linkedinConnections.benefit')}
                        {category.key === 'leadSourcing' && t('workflowCards.leadSourcing.benefit')}
                        {category.key === 'invoicing' && t('workflowCards.salesAutomation.benefit')}
                        {category.key === 'aiSupport' && t('workflowCards.aiResponses.benefit')}
                        {category.key === 'documentParsing' && t('workflowCards.documentProcessing.benefit')}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 bg-white/70">
                        <p className="text-gray-700 leading-relaxed">
                          {category.key === 'linkedinConnections' && t('categories.linkedinConnections.description')}
                          {category.key === 'leadSourcing' && t('categories.leadSourcing.description')}
                          {category.key === 'invoicing' && t('categories.proposalInvoice.description')}
                          {category.key === 'aiSupport' && t('categories.aiAgents.description')}
                          {category.key === 'documentParsing' && t('categories.documentParsing.description')}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Text Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-8">
              {t('experts.title')}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg prose-gray max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('experts.subtitle')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('experts.paragraph')}
                </p>
              </div>

              {/* Benefit bullets */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-900">{t('experts.automation.title')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-900">{t('experts.aiIntegration.title')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-900">{t('experts.customSolutions.title')}</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Comparison Table */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('comparison.title')}</h3>
              
              <div className="overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-semibold text-gray-700">{t('comparison.feature')}</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-orange-600">{t('comparison.zapier')}</th>
                      <th className="text-center py-3 px-2 text-sm font-semibold text-purple-600">{t('comparison.promptive')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">{t('comparison.complexLogic')}</td>
                      <td className="text-center py-3 px-2">
                        <span className="text-orange-500">{t('comparison.limited')}</span>
                      </td>
                      <td className="text-center py-3 px-2">
                        <span className="text-green-500 font-semibold">{t('comparison.advanced')}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">{t('comparison.aiIntegration')}</td>
                      <td className="text-center py-3 px-2">
                        <span className="text-orange-500">{t('comparison.basic')}</span>
                      </td>
                      <td className="text-center py-3 px-2">
                        <span className="text-green-500 font-semibold">{t('comparison.native')}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">{t('comparison.customIntegrations')}</td>
                      <td className="text-center py-3 px-2">
                        <span className="text-orange-500">{t('comparison.limited')}</span>
                      </td>
                      <td className="text-center py-3 px-2">
                        <span className="text-green-500 font-semibold">{t('comparison.unlimited')}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">{t('comparison.monthlyCost')}</td>
                      <td className="text-center py-3 px-2">
                        <span className="text-orange-500">$20-599+</span>
                      </td>
                      <td className="text-center py-3 px-2">
                        <span className="text-green-500 font-semibold">$299-999</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700">{t('comparison.support')}</td>
                      <td className="text-center py-3 px-2">
                        <span className="text-orange-500">{t('comparison.email')}</span>
                      </td>
                      <td className="text-center py-3 px-2">
                        <span className="text-green-500 font-semibold">{t('comparison.dedicated')}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('whyChooseUs.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('whyChooseUs.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'customSolutions', icon: '🎯' },
              { key: 'expertTeam', icon: '👥' },
              { key: 'unlimitedIntegrations', icon: '🔗' },
              { key: 'ongoingSupport', icon: '🛠️' }
            ].map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`whyChooseUs.items.${item.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`whyChooseUs.items.${item.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Client Success Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-500">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('successStory.title')}
                </h2>
                <p className="text-xl text-gray-600">
                  {t('successStory.subtitle')}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-500">
                    <p className="text-red-800 font-medium">{t('successStory.challenge')}</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                    <p className="text-blue-800 font-medium">{t('successStory.solution')}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                    <p className="text-green-800 font-medium">{t('successStory.result')}</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">SB</span>
                    </div>
                    <h4 className="font-bold text-gray-900">Sarah B.</h4>
                    <p className="text-gray-600 text-sm">Head of Operations</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-600">{t('successStory.industry')}</div>
                      <div className="text-sm text-gray-600">{t('successStory.timeframe')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-bl from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* FAQ Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6 border border-purple-200/50"
            >
              <span className="text-purple-700 font-semibold text-sm tracking-wide uppercase">{t('faq.badge')}</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('faq.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('faq.subtitle')}
            </p>
          </motion.div>

          {/* FAQ Grid - Desktop Two Columns */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              { key: 'howLongImplementation', icon: 'clock', category: 'timeline' },
              { key: 'whatSystemsIntegrate', icon: 'cogwheel', category: 'integration' }, 
              { key: 'howMuchCost', icon: 'dollar', category: 'pricing' },
              { key: 'ongoingMaintenance', icon: 'lightbulb', category: 'general' },
              { key: 'dataSecurityPrivacy', icon: 'lock', category: 'security' },
              { key: 'roi', icon: 'dollar', category: 'pricing' }
            ].map((faq, index) => {
              const isExpanded = expandedCategory === index + 100;
              return (
                <motion.div
                  key={faq.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group"
                >
                  <div className={`bg-white rounded-2xl shadow-lg border transition-all duration-300 overflow-hidden ${
                    isExpanded 
                      ? 'border-purple-200 shadow-xl bg-gradient-to-br from-white to-purple-50/30' 
                      : 'border-gray-100 hover:border-purple-200/50 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-purple-50/20'
                  }`}>
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === index + 100 ? null : index + 100)}
                      className="w-full p-6 text-left flex items-start space-x-4 transition-all duration-300"
                      aria-expanded={isExpanded}
                      aria-controls={`faq-answer-${index}`}
                    >
                      {/* FAQ Icon */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg scale-110' 
                          : 'bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600 group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white group-hover:scale-110'
                      }`}>
                        {faq.icon === 'clock' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {faq.icon === 'cogwheel' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {faq.icon === 'dollar' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        )}
                        {faq.icon === 'lightbulb' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        )}
                        {faq.icon === 'lock' && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                          isExpanded ? 'text-purple-900' : 'text-gray-900 group-hover:text-purple-900'
                        }`}>
                          {t(`faq.items.${faq.key}.question`)}
                        </h3>
                      </div>

                      {/* Chevron Icon */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`flex-shrink-0 transition-colors duration-300 ${
                          isExpanded ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-600'
                        }`}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 ml-14">
                            <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 rounded-xl p-4 border border-purple-100/50">
                              <p className="text-gray-700 leading-relaxed">
                                {t(`faq.items.${faq.key}.answer`)}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call-to-Action Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('faq.cta.title')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('faq.cta.description')}
              </p>
              <motion.button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('faq.cta.button')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Feature Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('automationSolutions.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('automationSolutions.subtitle')}
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Featured Card - n8n Automation Experts (spans 2 columns on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-xl border-2 border-purple-200 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-block bg-purple-100 rounded-full px-4 py-2 text-sm font-semibold text-purple-700 mb-4">
                  ⭐ {t('mostPopular')}
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L22 9L16 14.74L17.18 22L12 18.27L6.82 22L8 14.74L2 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {t('automationSolutions.leadGeneration.title')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {t('automationSolutions.leadGeneration.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-sm font-medium text-gray-600">{t('tools')}</span>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-red-500 rounded text-white flex items-center justify-center text-xs font-bold">n8n</div>
                    <div className="w-6 h-6 bg-blue-500 rounded text-white flex items-center justify-center text-xs font-bold">API</div>
                    <div className="w-6 h-6 bg-green-500 rounded text-white flex items-center justify-center text-xs font-bold">DB</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 group-hover:bg-purple-50 transition-colors">
                  <div className="text-sm font-semibold text-gray-700 mb-1">{t('example')}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    • {t('automationSolutions.leadGeneration.examples.0')}<br/>
                    • {t('automationSolutions.leadGeneration.examples.1')}<br/>
                    • {t('automationSolutions.leadGeneration.examples.2')}<br/>
                    • {t('automationSolutions.leadGeneration.examples.3')}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Regular Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('automationSolutions.customerSupport.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('automationSolutions.customerSupport.description')}
              </p>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-sm font-medium text-gray-600">{t('tools')}</span>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gray-600 rounded text-white flex items-center justify-center text-xs font-bold">N8</div>
                  <div className="w-6 h-6 bg-gray-600 rounded text-white flex items-center justify-center text-xs font-bold">AP</div>
                  <div className="w-6 h-6 bg-gray-600 rounded text-white flex items-center justify-center text-xs font-bold">WE</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-purple-50 transition-colors">
                <div className="text-sm font-semibold text-gray-700 mb-1">{t('examples')}</div>
                <div className="text-gray-600 text-sm leading-relaxed">
                  • {t('automationSolutions.customerSupport.examples.0')}<br/>
                  • {t('automationSolutions.customerSupport.examples.1')}<br/>
                  • {t('automationSolutions.customerSupport.examples.2')}<br/>
                  • {t('automationSolutions.customerSupport.examples.3')}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('automationSolutions.salesOps.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('automationSolutions.salesOps.description')}
              </p>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-sm font-medium text-gray-600">{t('tools')}</span>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gray-600 rounded text-white flex items-center justify-center text-xs font-bold">SL</div>
                  <div className="w-6 h-6 bg-gray-600 rounded text-white flex items-center justify-center text-xs font-bold">GO</div>
                  <div className="w-6 h-6 bg-gray-600 rounded text-white flex items-center justify-center text-xs font-bold">HR</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-purple-50 transition-colors">
                <div className="text-sm font-semibold text-gray-700 mb-1">{t('examples')}</div>
                <div className="text-gray-600 text-sm leading-relaxed">
                  • {t('automationSolutions.salesOps.examples.0')}<br/>
                  • {t('automationSolutions.salesOps.examples.1')}<br/>
                  • {t('automationSolutions.salesOps.examples.2')}<br/>
                  • {t('automationSolutions.salesOps.examples.3')}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('automationSolutions.dataProcessing.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('automationSolutions.dataProcessing.description')}
              </p>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-sm font-medium text-gray-600">{t('tools')}</span>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gray-600 rounded text-white flex items-center justify-center text-xs font-bold">AI</div>
                  <div className="w-6 h-6 bg-gray-600 rounded text-white flex items-center justify-center text-xs font-bold">ML</div>
                  <div className="w-6 h-6 bg-gray-600 rounded text-white flex items-center justify-center text-xs font-bold">GP</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-purple-50 transition-colors">
                <div className="text-sm font-semibold text-gray-700 mb-1">{t('examples')}</div>
                <div className="text-gray-600 text-sm leading-relaxed">
                  • {t('automationSolutions.dataProcessing.examples.0')}<br/>
                  • {t('automationSolutions.dataProcessing.examples.1')}<br/>
                  • {t('automationSolutions.dataProcessing.examples.2')}<br/>
                  • {t('automationSolutions.dataProcessing.examples.3')}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mini Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-green-500">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block bg-green-100 rounded-full px-4 py-2 text-sm font-semibold text-green-700 mb-6">
                🚀 {t('caseStudy.label')}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                &ldquo;{t('caseStudy.testimonial')}&rdquo;
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TS</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{t('caseStudy.name')}</div>
                  <div className="text-gray-600">{t('caseStudy.role')}</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
                  <div className="text-gray-600 text-sm">{t('caseStudy.timeSaved')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-gray-600 text-sm">{t('caseStudy.accuracyImproved')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">40%</div>
                  <div className="text-gray-600 text-sm">{t('caseStudy.leadQuality')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('finalCta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                onClick={scrollToBookCall}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('finalCta.primaryButton')}
              </motion.button>
              
              <motion.button
                onClick={() => window.open('/contact', '_blank')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 text-lg shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('finalCta.secondaryButton')}
              </motion.button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t('finalCta.guarantees.noUpfront')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t('finalCta.guarantees.customSolution')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{t('finalCta.guarantees.moneyBack')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}