'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import type { ReactNode } from 'react';

type CaseCategory = 'website' | 'chatbot' | 'ecommerce';

export type CaseRef = {
  company: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  logo: string | null;
  logoText: string;
  category: CaseCategory;
};

type Props = {
  cases: { en: CaseRef[]; lt: CaseRef[] };
};

const categoryIcons: Record<CaseCategory, ReactNode> = {
  chatbot: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  website: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    </svg>
  ),
  ecommerce: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
};

const categoryLabels = {
  en: { chatbot: 'AI Chatbot', website: 'Website', ecommerce: 'E-commerce' },
  lt: { chatbot: 'AI Chatbotas', website: 'Svetainė', ecommerce: 'El. parduotuvė' },
};

export default function CaseStudyStrip({ cases }: Props) {
  const locale = useLocale();
  const isLT = locale === 'lt';
  const items = isLT ? cases.lt : cases.en;
  const heading = isLT ? 'Tai veikia praktikoje' : 'See it in action';
  const linkLabel = isLT ? 'Visi atvejai →' : 'View all case studies →';
  const catLabels = categoryLabels[isLT ? 'lt' : 'en'];

  const gridClass =
    items.length === 1
      ? 'max-w-md'
      : items.length === 2
      ? 'md:grid-cols-2'
      : 'md:grid-cols-3';

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">{heading}</h2>
          <Link
            href={`/${locale}/case-studies`}
            className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
          >
            {linkLabel}
          </Link>
        </div>

        <div className={`grid gap-4 ${gridClass}`}>
          {items.map((item, i) => (
            <motion.div
              key={`${item.company}::${item.category}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <Link
                href={`/${locale}/case-studies`}
                className="block group h-full"
                aria-label={`${item.company} case study`}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition-all h-full flex flex-col">
                  {/* Logo + company + category tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="h-7 w-auto object-contain brightness-0 invert opacity-70"
                        />
                      ) : (
                        <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-violet-500 rounded-md flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {item.logoText}
                        </div>
                      )}
                      <span className="text-white text-sm font-medium">{item.company}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-purple-400 text-xs opacity-70">
                      {categoryIcons[item.category]}
                      {catLabels[item.category]}
                    </span>
                  </div>

                  {/* Metric */}
                  <div className="mb-3">
                    <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                      {item.metric}
                    </span>
                    <span className="text-gray-500 text-xs ml-2">{item.metricLabel}</span>
                  </div>

                  {/* Tagline */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.tagline}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
