'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

interface RelatedItem {
  title: string;
  description: string;
  href: string;
}

const relatedMap: Record<string, { lt: RelatedItem[]; en: RelatedItem[] }> = {
  'ai-auditas': {
    lt: [
      { title: 'AI agentai ir automatizacijos', description: 'Automatizuokite verslo procesus su AI sprendimais', href: '/lt/ai-agentai-automatizacijos' },
      { title: 'Svetainių kūrimas', description: 'Profesionalios svetainės su SEO ir integracijomis', href: '/lt/svetainiu-kurimas' },
    ],
    en: [
      { title: 'AI Agents & Automations', description: 'Automate business processes with AI solutions', href: '/ai-agentai-automatizacijos' },
      { title: 'Website Development', description: 'Professional websites with SEO and integrations', href: '/svetainiu-kurimas' },
    ],
  },
  'ai-auditas-kaina': {
    lt: [
      { title: 'AI auditas verslui', description: 'Automatizavimo planas ir ROI vertinimas', href: '/lt/ai-auditas' },
      { title: 'AI agentai ir automatizacijos', description: 'Įgyvendinkite audito rekomendacijas', href: '/lt/ai-agentai-automatizacijos' },
    ],
    en: [
      { title: 'AI Audit for Business', description: 'Automation plan and ROI assessment', href: '/ai-auditas' },
      { title: 'AI Agents & Automations', description: 'Implement audit recommendations', href: '/ai-agentai-automatizacijos' },
    ],
  },
  'ai-agentai-automatizacijos': {
    lt: [
      { title: 'AI auditas', description: 'Pradėkite nuo automatizavimo audito', href: '/lt/ai-auditas' },
      { title: 'Svetainių kūrimas', description: 'Profesionalios svetainės su integracijomis', href: '/lt/svetainiu-kurimas' },
    ],
    en: [
      { title: 'AI Audit', description: 'Start with an automation audit', href: '/ai-auditas' },
      { title: 'Website Development', description: 'Professional websites with integrations', href: '/svetainiu-kurimas' },
    ],
  },
  'svetainiu-kurimas': {
    lt: [
      { title: 'AI auditas', description: 'Pradėkite nuo automatizavimo audito', href: '/lt/ai-auditas' },
      { title: 'AI agentai ir automatizacijos', description: 'Automatizuokite verslo procesus su AI', href: '/lt/ai-agentai-automatizacijos' },
    ],
    en: [
      { title: 'AI Audit', description: 'Start with an automation audit', href: '/ai-auditas' },
      { title: 'AI Agents & Automations', description: 'Automate business processes with AI', href: '/ai-agentai-automatizacijos' },
    ],
  },
  'projektai': {
    lt: [
      { title: 'AI auditas verslui', description: 'Pradėkite nuo automatizavimo audito', href: '/lt/ai-auditas' },
      { title: 'AI agentai ir automatizacijos', description: 'Automatizavimo sprendimai', href: '/lt/ai-agentai-automatizacijos' },
      { title: 'Svetainių kūrimas', description: 'Profesionalios svetainės', href: '/lt/svetainiu-kurimas' },
    ],
    en: [
      { title: 'AI Audit for Business', description: 'Start with an automation audit', href: '/ai-auditas' },
      { title: 'AI Agents & Automations', description: 'Automation solutions', href: '/ai-agentai-automatizacijos' },
      { title: 'Website Development', description: 'Professional websites', href: '/svetainiu-kurimas' },
    ],
  },
};

interface RelatedSolutionsProps {
  currentPage: string;
  title?: string;
}

function getGridClass(count: number) {
  if (count === 1) return 'grid-cols-1 max-w-sm';
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2 max-w-2xl';
  if (count === 3) return 'grid-cols-1 sm:grid-cols-3 max-w-4xl';
  return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl';
}

export default function RelatedSolutions({ currentPage, title }: RelatedSolutionsProps) {
  const locale = useLocale();
  const isLT = locale === 'lt';
  const items = relatedMap[currentPage]?.[isLT ? 'lt' : 'en'] || [];

  if (items.length === 0) return null;

  const defaultTitle = isLT ? 'Susiję sprendimai' : 'Related Solutions';

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-500 mb-3">
            {isLT ? 'Taip pat siūlome' : 'Also available'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title || defaultTitle}
          </h2>
        </motion.div>

        <div className={`grid gap-5 mx-auto ${getGridClass(items.length)}`}>
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 rounded-2xl border border-gray-200 p-7 hover:bg-white hover:shadow-xl hover:shadow-purple-100/50 hover:border-purple-200 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform duration-200 shadow-md shadow-purple-200/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 mb-2 text-base group-hover:text-purple-700 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.description}</p>

              {/* Arrow indicator */}
              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-purple-500 group-hover:gap-2.5 transition-all duration-200">
                <span>{isLT ? 'Sužinoti daugiau' : 'Learn more'}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
