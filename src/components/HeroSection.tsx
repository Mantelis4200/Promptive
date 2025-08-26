'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  const tTestimonial = useTranslations('testimonial');
  const tMetrics = useTranslations('metrics');
  const tChat = useTranslations('chat');
  const locale = useLocale();
  const isLithuanian = locale === 'lt';

  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/background.webp')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          
          {/* Left Side - Text Content */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              {isLithuanian ? (
                <>
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Automatizuojame</span> pokalbius. <br />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Optimizuojame</span> procesus.
                </>
              ) : (
                <>
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Automating</span> Conversations. <br />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Optimizing</span> Operations.
                </>
              )}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="flex justify-center sm:justify-start">
              <motion.button 
                onClick={scrollToBookCall}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-16 hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('getQuote')}
              </motion.button>
            </div>

            {/* Mobile Testimonial - Centered below buttons */}
            <motion.div 
              className="mt-8 bg-white rounded-2xl p-6 shadow-floating mx-auto max-w-sm md:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  UZ
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{tTestimonial('author')}</p>
                  <p className="text-sm text-gray-600">{tTestimonial('position')}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                &ldquo;{tTestimonial('quote')}&rdquo;
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Elements */}
          <div className="relative z-0">
            
            {/* Client Testimonial Card - Desktop only */}
            <motion.div 
              className="absolute top-10 right-0 bg-white rounded-2xl p-6 shadow-floating max-w-sm z-10 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  UZ
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{tTestimonial('author')}</p>
                  <p className="text-sm text-gray-600">{tTestimonial('position')}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                &ldquo;{tTestimonial('quote')}&rdquo;
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </motion.div>

            {/* Project Showcase Bubble - Hidden on mobile */}
            <motion.div 
              className="absolute top-64 left-10 bg-white rounded-2xl p-4 shadow-floating z-10 hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-24 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                </svg>
              </div>
              <p className="text-xs font-semibold text-gray-900">{tMetrics('projectShowcase')}</p>
              <p className="text-xs text-gray-600">{tMetrics('projectTech')}</p>
            </motion.div>

            {/* Achievement Metrics - Hidden on mobile */}
            <motion.div 
              className="absolute bottom-20 right-20 bg-white rounded-2xl p-6 shadow-floating z-10 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-1">35+</div>
                <div className="text-sm text-gray-600">{tMetrics('projectsCompleted')}</div>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mt-2"></div>
            </motion.div>

            {/* Chat Communication Mockup - Hidden on mobile */}
            <motion.div 
              className="absolute bottom-40 left-0 bg-white rounded-2xl p-4 shadow-floating max-w-xs z-10 hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-end">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm px-3 py-2 rounded-lg max-w-[80%]">
                    {tChat('question')}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 text-gray-900 text-sm px-3 py-2 rounded-lg max-w-[80%]">
                    {tChat('answer')}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                    P
                  </div>
                  <div className="text-xs text-gray-500">{tChat('typing')}</div>
                </div>
              </div>
            </motion.div>

            {/* Additional Floating Elements - Hidden on mobile */}
            <motion.div 
              className="absolute top-80 right-40 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-floating flex items-center justify-center z-10 hidden md:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.1, rotate: 180 }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </motion.div>

            <motion.div 
              className="absolute top-32 left-20 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-floating flex items-center justify-center z-10 hidden md:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.1, rotate: -180 }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}