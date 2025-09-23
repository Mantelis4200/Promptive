'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('footer');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Promptive. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    );
  }

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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative w-32 h-32">
{/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.svg"
                  alt="Promptive Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a 
                href="https://twitter.com/promptiveagency" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Promptive on Twitter"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/promptive-agency" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Promptive on LinkedIn"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/promptiveagency" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Like Promptive on Facebook"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('services.title')}</h3>
            <ul className="space-y-4">
              <li>
                <a href="/services/chatbots" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.chatbots')}
                </a>
              </li>
              <li>
                <a href="/services/ad-creatives" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.adCreatives')}
                </a>
              </li>
              <li>
                <a href="/services/custom-ai-models" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.customAI')}
                </a>
              </li>
              <li>
                <a href="/services/ai-consultation" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.aiConsultation')}
                </a>
              </li>
              <li>
                <a href="/services/workflows" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.workflows')}
                </a>
              </li>
              <li>
                <a href="/services/marketing" className="text-gray-300 hover:text-white transition-colors">
                  {t('services.marketing')}
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('company.title')}</h3>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('company.about')}
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  {t('company.blog')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('company.contact')}
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  {t('company.careers')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('contact.title')}</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">hello@promptive.agency</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+370 612 08 887</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">{t('contact.location')}</span>
              </div>
            </div>
            
            <button
              onClick={scrollToBookCall}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-16 hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t('contact.cta')}
            </button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <div className="mb-2">
                © {new Date().getFullYear()} Promptive. {t('copyright')}
              </div>
              <div className="text-xs space-y-1">
                <div>{t('companyDetails.name')}</div>
                <div>{t('companyDetails.codes')}</div>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                {t('legal.privacy')}
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                {t('legal.terms')}
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                {t('legal.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}