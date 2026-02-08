'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

const steps = [
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const translations = {
  en: {
    sectionTag: 'Process',
    title: 'How It Works',
    subtitle: 'From idea to launch in three simple steps',
    steps: [
      {
        title: 'Discovery Call',
        description: 'We discuss your business, goals, and identify the best automation opportunities.',
      },
      {
        title: 'Build & Integrate',
        description: 'We develop your AI solution and integrate it with your existing systems.',
      },
      {
        title: 'Launch & Optimize',
        description: 'We launch, monitor, and continuously improve your automations.',
      },
    ],
  },
  lt: {
    sectionTag: 'Procesas',
    title: 'Kaip Tai Veikia',
    subtitle: 'Nuo idėjos iki paleidimo per tris paprastus žingsnius',
    steps: [
      {
        title: 'Pokalbis',
        description: 'Aptariame jūsų verslą, tikslus ir nustatome geriausias automatizacijos galimybes.',
      },
      {
        title: 'Kūrimas ir Integracija',
        description: 'Kuriame AI sprendimą ir integruojame su esamomis sistemomis.',
      },
      {
        title: 'Paleidimas ir Optimizavimas',
        description: 'Paleidžiame, stebime ir nuolat tobuliname automatizacijas.',
      },
    ],
  },
};

export default function HowWeWorkSection() {
  const locale = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            {t.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-200 to-transparent" />
              )}

              <div className="text-center">
                {/* Step number + icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-sm border-2 border-purple-100 shadow-sm">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t.steps[index].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.steps[index].description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
