'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function ChatbotsPage() {
  const t = useTranslations('chatbotsPage');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);

  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-300 rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-light max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToBookCall}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <span>{t('buttons.bookConsultation')}</span>
                  </span>
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 font-medium rounded-2xl hover:bg-gray-50 transition-all duration-200 text-lg shadow-lg hover:shadow-xl border border-gray-200">
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    <span>{t('buttons.seeUseCases')}</span>
                  </span>
                </button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative max-w-lg">
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center border-4 border-purple-200 shadow-lg">
                      <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl max-w-xs text-sm">
                        {t('chatDemo.welcome')}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-3 rounded-2xl max-w-xs text-sm">
                        {t('chatDemo.userQuestion')}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl max-w-xs text-sm">
                        {t('chatDemo.botResponse')}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4">
                    <div className="bg-green-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.885 3.746A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.746"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4">
                    <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Types Section */}
      <section id="chatbot-types" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-medium mb-4 text-lg">{t('sectionLabels.interactiveSolutions')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('types.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('types.subtitle')}</p>
          </div>
          <div className="space-y-6">
            {['sales', 'ecommerce', 'support'].map((type, index) => (
              <div 
                key={type}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                style={{ minHeight: '120px' }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        {type === 'sales' && (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                          </svg>
                        )}
                        {type === 'ecommerce' && (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                          </svg>
                        )}
                        {type === 'support' && (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{t(`types.items.${type}.title`)}</h3>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 bg-gray-100 text-gray-600">
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${expandedCard === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  {expandedCard === index && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-gray-600 mb-4">{t(`types.items.${type}.intro`)}</p>
                      <ul className="space-y-2">
                        {(t.raw(`types.items.${type}.bullets`) as string[]).map((bullet: string, bulletIndex: number) => (
                          <li key={bulletIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: bullet }}></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AI Chatbots Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <p className="text-purple-600 font-medium mb-4 text-lg">{t('sectionLabels.whyChooseChatbots')}</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{t('overview.title')}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('benefits.boostConversions.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('benefits.boostConversions.description')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('benefits.reduceSupportLoad.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('benefits.reduceSupportLoad.description')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{t('benefits.multiPlatformIntegration.title')}</h3>
                  <p className="text-gray-600 text-sm">{t('benefits.multiPlatformIntegration.description')}</p>
                </div>
              </div>
              <div className="prose prose-lg prose-gray max-w-none mb-8">
                <div className="text-gray-700 space-y-6 text-lg leading-8">
                  <p>{t('overview.paragraph1')}</p>
                </div>
              </div>
              <button 
                onClick={scrollToBookCall}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 font-medium rounded-2xl hover:from-purple-200 hover:to-blue-200 transition-all duration-200 border border-purple-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                {t('buttons.bookConsultation')}
              </button>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6 mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9l-5.09 3.26L19 22l-7-5.27L5 22l2.09-9.74L2 9l6.91-.74L12 2z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="h-2 bg-purple-300 rounded"></div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-xl p-3 shadow-inner border border-gray-200">
                      <div className="text-xs text-gray-600 mb-1">Response A</div>
                      <div className="h-2 bg-green-200 rounded w-3/4"></div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-inner border border-gray-200">
                      <div className="text-xs text-gray-600 mb-1">Response B</div>
                      <div className="h-2 bg-blue-200 rounded w-2/3"></div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-inner border border-gray-200">
                      <div className="text-xs text-gray-600 mb-1">Response C</div>
                      <div className="h-2 bg-purple-200 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-purple-600 font-medium mb-4 text-lg">{t('sectionLabels.industryExpertise')}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{t('industries.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('industries.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['healthcare', 'finance', 'realestate', 'ecommerce'].map((industry) => {
              let borderClasses, hoverBorderClasses, shadowClasses, hoverShadowClasses, bgClasses, bulletClasses;
              
              if (industry === 'healthcare') {
                borderClasses = 'border-green-100';
                hoverBorderClasses = 'hover:border-green-200';
                shadowClasses = 'hover:shadow-green-100/50';
                hoverShadowClasses = 'hover:shadow-green-100/20';
                bgClasses = 'bg-gradient-to-br from-green-400 to-green-500';
                bulletClasses = 'bg-gradient-to-r from-green-400 to-green-500';
              } else if (industry === 'finance') {
                borderClasses = 'border-blue-100';
                hoverBorderClasses = 'hover:border-blue-200';
                shadowClasses = 'hover:shadow-blue-100/50';
                hoverShadowClasses = 'hover:shadow-blue-100/20';
                bgClasses = 'bg-gradient-to-br from-blue-400 to-blue-500';
                bulletClasses = 'bg-gradient-to-r from-blue-400 to-blue-500';
              } else if (industry === 'realestate') {
                borderClasses = 'border-orange-100';
                hoverBorderClasses = 'hover:border-orange-200';
                shadowClasses = 'hover:shadow-orange-100/50';
                hoverShadowClasses = 'hover:shadow-orange-100/20';
                bgClasses = 'bg-gradient-to-br from-orange-400 to-red-500';
                bulletClasses = 'bg-gradient-to-r from-orange-400 to-red-500';
              } else { // ecommerce
                borderClasses = 'border-purple-100';
                hoverBorderClasses = 'hover:border-purple-200';
                shadowClasses = 'hover:shadow-purple-100/50';
                hoverShadowClasses = 'hover:shadow-purple-100/20';
                bgClasses = 'bg-gradient-to-br from-purple-400 to-pink-500';
                bulletClasses = 'bg-gradient-to-r from-purple-400 to-pink-500';
              }
              
              return (
                <div 
                  key={industry}
                  className={`group bg-white rounded-3xl shadow-lg border-2 ${borderClasses} ${hoverBorderClasses} ${shadowClasses} hover:shadow-2xl ${hoverShadowClasses} hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden`}
                  onClick={() => setExpandedIndustry(expandedIndustry === industry ? null : industry)}
                >
                  <div className="p-8 cursor-pointer">
                    <div className={`w-16 h-16 ${bgClasses} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {industry === 'healthcare' && (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      )}
                      {industry === 'finance' && (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                        </svg>
                      )}
                      {industry === 'realestate' && (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                      )}
                      {industry === 'ecommerce' && (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                      )}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">{t(`industries.items.${industry}.title`)}</h3>
                      <div className="text-gray-500">
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${expandedIndustry === industry ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {(t.raw(`industries.items.${industry}.bullets`) as string[]).map((bullet: string, bulletIndex: number) => (
                        <div key={bulletIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${bulletClasses} rounded-full`}></div>
                          <span className="text-gray-600 text-sm">{bullet}</span>
                        </div>
                      ))}
                    </div>
                    {expandedIndustry === industry && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-700 text-sm">{t(`industries.items.${industry}.expandedText`)}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('faq.title')}</h2>
          </div>
          <div className="space-y-8">
            {Object.entries(t.raw('faq.categories') as Record<string, { title: string; questions: Array<{ question: string; quickAnswer: string; answer: string; icon: string }> }>).map(([categoryKey, category]) => (
              <div key={categoryKey} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-purple-100">
                  {category.title}
                </h3>
                {category.questions.map((faq, index: number) => {
                  const faqId = `${categoryKey}-${index}`;
                  const isExpanded = expandedFaq === faqId;
                  let iconClasses, textClasses;
                  
                  if (categoryKey === 'general') {
                    iconClasses = 'bg-purple-100 text-purple-600';
                    textClasses = 'text-purple-600';
                  } else if (categoryKey === 'integration') {
                    iconClasses = 'bg-blue-100 text-blue-600';
                    textClasses = 'text-blue-600';
                  } else { // pricing
                    iconClasses = 'bg-green-100 text-green-600';
                    textClasses = 'text-green-600';
                  }
                  
                  return (
                    <div 
                      key={faqId}
                      className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${isExpanded ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      <button 
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        onClick={() => setExpandedFaq(isExpanded ? null : faqId)}
                        aria-expanded={isExpanded}
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className={`flex-shrink-0 w-10 h-10 ${iconClasses} rounded-lg flex items-center justify-center`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {faq.icon === 'question' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              )}
                              {faq.icon === 'robot' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                              )}
                              {faq.icon === 'gear' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                              )}
                              {faq.icon === 'lock' && (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                              )}
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h4>
                            <p className={`text-sm ${textClasses} font-medium mt-1`}>{faq.quickAnswer}</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <svg 
                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </button>
                      {isExpanded && (
                        <div className="px-6 pb-6">
                          <div className="pl-14">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-pink-400 rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <p className="text-purple-600 font-medium mb-4 text-lg">{t('sectionLabels.readyToStart')}</p>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">{t('cta.title')}</h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">{t('cta.description')}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">{t('trustElements.chatbotsBuilt')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="font-medium">{t('trustElements.industriesServed')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
                <span className="font-medium">{t('trustElements.uptimeGuarantee')}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToBookCall}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <span>{t('cta.button')}</span>
                </span>
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 font-medium rounded-2xl hover:bg-gray-50 transition-all duration-200 text-lg shadow-lg hover:shadow-xl border border-gray-200">
                <span className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span>{t('buttons.downloadCaseStudy')}</span>
                </span>
              </button>
            </div>
            <p className="mt-8 text-sm text-gray-500 max-w-lg mx-auto">
              {t('finalCta.description')}
              <span className="font-medium text-purple-600"> {t('finalCta.commitment')}</span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}