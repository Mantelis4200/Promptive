'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const isLithuanian = locale === 'lt';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="w-full bg-white shadow-subtle sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <div className="relative w-[120px] h-[120px]">
                  <img src="/images/logo.svg" alt="Promptive Agency" className="w-full h-full object-contain" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }

  const switchLanguage = (newLocale: string) => {
    // Force page reload to ensure proper locale detection
    if (newLocale === 'en') {
      window.location.href = '/en';
    } else {
      window.location.href = `/${newLocale}`;
    }
    setIsLanguageOpen(false);
  };

  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If not on homepage, redirect to contact page
      window.location.href = '/contact';
    }
  };

  return (
    <header className="w-full bg-white shadow-subtle sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center hover:scale-105 transition-transform duration-200">
              <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px]">
{/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.svg"
                  alt="Promptive Agency - Your trusted digital partner"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t('services')}
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-16 shadow-floating z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a
                    href="/services/ai-automations"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-t-16 transition-colors"
                  >
                    {t('aiAutomations')}
                  </a>
                  <a
                    href="/services/websites"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-b-16 transition-colors"
                  >
                    {t('websites')}
                  </a>
                </div>
              )}
            </div>
            <a href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              {t('about')}
            </a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              {t('blog')}
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              {t('contact')}
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={scrollToBookCall}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-16 hover:from-purple-600 hover:to-blue-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t('getQuote')}
            </button>
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-16 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg mr-2">{isLithuanian ? '🇱🇹' : '🇺🇸'}</span>
                {isLithuanian ? 'LT' : 'EN'}
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-16 shadow-floating z-50">
                  <button 
                    onClick={() => switchLanguage('en')}
                    className={`flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-16 ${!isLithuanian ? 'bg-gray-50 font-medium' : ''}`}
                  >
                    <span className="text-lg mr-2">🇺🇸</span>
                    English
                  </button>
                  <button 
                    onClick={() => switchLanguage('lt')}
                    className={`flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-b-16 ${isLithuanian ? 'bg-gray-50 font-medium' : ''}`}
                  >
                    <span className="text-lg mr-2">🇱🇹</span>
                    Lietuvių
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {/* Mobile Services Section */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900 border-b border-gray-100">
                  {t('services')}
                </div>
                <a href="/services/ai-automations" className="block px-6 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  {t('aiAutomations')}
                </a>
                <a href="/services/websites" className="block px-6 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  {t('websites')}
                </a>
              </div>
              <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                {t('about')}
              </a>
              <a href="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                {t('blog')}
              </a>
              <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                {t('contact')}
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                {/* Mobile Language Selector */}
                <div className="flex items-center justify-between p-3 border border-gray-300 rounded-16">
                  <span className="text-sm font-medium text-gray-700">Language</span>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => switchLanguage('en')}
                      className={`flex items-center text-sm ${!isLithuanian ? 'text-purple-600 font-medium' : 'text-gray-500'}`}
                    >
                      <span className="text-lg mr-2">🇺🇸</span>
                      EN
                    </button>
                    <button 
                      onClick={() => switchLanguage('lt')}
                      className={`flex items-center text-sm ${isLithuanian ? 'text-purple-600 font-medium' : 'text-gray-500'}`}
                    >
                      <span className="text-lg mr-2">🇱🇹</span>
                      LT
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={scrollToBookCall}
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-16 hover:from-purple-600 hover:to-blue-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {t('getQuote')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}