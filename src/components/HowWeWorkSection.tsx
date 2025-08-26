'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const processSteps = [
  {
    id: 1,
    key: 'discovery',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    id: 2,
    key: 'audit',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 3,
    key: 'build',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    key: 'integrate',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 5,
    key: 'optimize',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    id: 6,
    key: 'growth',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  }
];

export default function HowWeWorkSection() {
  const t = useTranslations('howWeWork');

  return (
    <section className="py-20 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-600 font-semibold mb-4 text-sm uppercase tracking-wide">
            {t('sectionTag')}
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="/images/human-bot.webp"
                alt="Human and AI collaboration illustration"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Side - Process Timeline */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-300"></div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  
                  {/* Timeline Circle with Icon */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full text-white shadow-lg">
                    {step.icon}
                  </div>
                  
                  {/* Step Content */}
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t(`steps.${step.key}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}