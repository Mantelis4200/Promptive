'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const serviceKeys = [
  {
    id: 1,
    key: 'chatbots',
    icon: '/images/chatbot-widget.webp',
    href: '/services/chatbots',
  },
  {
    id: 2,
    key: 'adCreatives',
    icon: '/images/ad-creatives-widget.webp',
    href: '/services/ad-creatives',
  },
  {
    id: 3,
    key: 'customAi',
    icon: '/images/custom-ai-models-widget.webp',
    href: '/services/custom-ai-models',
  },
  {
    id: 4,
    key: 'consultation',
    icon: '/images/ai-consultation-widget.webp',
    href: '/services/ai-consultation',
  },
  {
    id: 5,
    key: 'workflows',
    icon: '/images/workflows-widget.webp',
    href: '/services/workflows',
  },
  {
    id: 6,
    key: 'marketing',
    icon: '/images/marketing-widget.webp',
    href: '/services/marketing',
  },
];

export default function ServicesSection() {
  const t = useTranslations('services');
  
  return (
    <section className="py-20 bg-gray-50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-sm font-semibold text-purple-500 uppercase tracking-wide mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('sectionTag')}
          </motion.h2>
          
          <motion.h3 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('title')} <br />
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t('titleHighlight')}
            </span>
          </motion.h3>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-subtle hover:shadow-floating transition-shadow duration-300 group flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Service Icon */}
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={service.icon}
                  alt={`${t(`items.${service.key}.title`)} icon`}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>

              {/* Service Content */}
              <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                {t(`items.${service.key}.title`)}
              </h4>
              
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {t(`items.${service.key}.description`)}
              </p>

              {/* Learn More Button */}
              <motion.a
                href={service.href}
                className="inline-flex items-center text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-3 rounded-16 font-medium transition-all duration-200 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={t(`ctaTexts.${service.key}`)}
              >
                {t(`ctaTexts.${service.key}`)}
                <svg 
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}