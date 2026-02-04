'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const serviceKeys = [
  {
    id: 1,
    key: 'aiAutomations',
    route: 'ai-automations',
    icon: '/images/chatbot-widget.webp',
  },
  {
    id: 2,
    key: 'websites',
    route: 'websites',
    icon: '/images/custom-ai-models-widget.webp',
  },
];

export default function ServicesSection() {
  const t = useTranslations('services');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <>
      <section id="services" className="py-20 bg-gray-50 relative z-20">
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

          {/* Services Grid - 2 columns */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {serviceKeys.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-subtle hover:shadow-floating transition-all duration-300 group flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Service Icon */}
                <div className="relative w-12 h-12 mb-4">
                  <Image
                    src={service.icon}
                    alt={`${t(`items.${service.key}.title`)} icon`}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>

                {/* Service Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {t(`items.${service.key}.title`)}
                </h4>

                <p className="text-gray-600 leading-relaxed mb-4 flex-grow text-sm">
                  {t(`items.${service.key}.description`)}
                </p>

                {/* Read More Button */}
                <Link
                  href={`/${locale}/services/${service.route}`}
                  className="inline-flex items-center justify-center text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl group/btn w-full text-sm"
                >
                  {t('readMore')}
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
