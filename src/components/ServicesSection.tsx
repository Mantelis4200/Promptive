'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useState } from 'react';

const services = [
  {
    id: 'aiAutomations',
    route: 'ai-automations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: 'from-purple-500 to-blue-500',
    features: ['AI Chatbots', 'Workflow Automations', 'Sales Automation', 'Custom AI Solutions'],
  },
  {
    id: 'websites',
    route: 'websites',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-500',
    features: ['SEO + GEO Optimization', 'CRM Integrations', 'Payment Systems', 'AI Chatbot Included'],
  },
];

const translations = {
  en: {
    sectionTag: 'Services',
    title: 'What We Build',
    aiAutomations: {
      title: 'AI Agents & Automations',
      description: 'Intelligent systems that handle customer support, qualify leads, and automate internal operations 24/7.',
      cta: 'Explore AI Solutions',
    },
    websites: {
      title: 'Websites',
      description: 'Fast, conversion-optimized websites with all integrations. Ready to generate leads from day one.',
      cta: 'See Website Options',
    },
  },
  lt: {
    sectionTag: 'Paslaugos',
    title: 'Ką Kuriame',
    aiAutomations: {
      title: 'AI Agentai ir Automatizacijos',
      description: 'Išmanios sistemos, kurios aptarnauja klientus, kvalifikuoja potencialius klientus ir automatizuoja operacijas 24/7.',
      cta: 'AI Sprendimai',
    },
    websites: {
      title: 'Svetainės',
      description: 'Greitos, konversijai optimizuotos svetainės su visomis integracijomis. Paruošta generuoti užklausas nuo pirmos dienos.',
      cta: 'Svetainių Variantai',
    },
  },
};

export default function ServicesSection() {
  const locale = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-gray-50">
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            {t.title}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const content = t[service.id as keyof typeof t] as { title: string; description: string; cta: string };
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative"
              >
                <Link href={`/${locale}/services/${service.route}`}>
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300 h-full overflow-hidden group cursor-pointer">
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {content.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {content.description}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                      {content.cta}
                      <motion.svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
