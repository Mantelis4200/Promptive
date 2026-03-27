'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

type CaseCategory = 'website' | 'chatbot' | 'ecommerce' | 'webapp';

export type CaseRef = {
  company: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  logo: string | null;
  logoDark?: boolean;
  logoText: string;
  category: CaseCategory;
  industry?: string;
  results?: { metric: string; label: string }[];
  link?: string;
};

type Props = {
  cases: { en: CaseRef[]; lt: CaseRef[] };
  carousel?: boolean;
};

const categoryIcons: Record<CaseCategory, ReactNode> = {
  chatbot: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  website: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    </svg>
  ),
  ecommerce: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  webapp: (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const categoryLabels = {
  en: { chatbot: 'AI Chatbot', website: 'Website', ecommerce: 'E-commerce', webapp: 'Web App' },
  lt: { chatbot: 'AI Chatbotas', website: 'Svetainė', ecommerce: 'El. parduotuvė', webapp: 'Web programa' },
};

const GAP = 16;

function CarouselSection({ items, heading, linkLabel, catLabels, locale }: {
  items: CaseRef[];
  heading: string;
  linkLabel: string;
  catLabels: Record<string, string>;
  locale: string;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const total = items.length;

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const visibleCount = containerWidth >= 1024 ? 3 : containerWidth >= 640 ? 2 : 1;
  const cardWidth = containerWidth > 0
    ? (containerWidth - GAP * (visibleCount - 1)) / visibleCount
    : 300;
  const maxIndex = Math.max(0, total - visibleCount);

  const prev = useCallback(() => setCurrent(c => (c <= 0 ? maxIndex : c - 1)), [maxIndex]);
  const next = useCallback(() => setCurrent(c => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex, current]);

  const trackX = -(current * (cardWidth + GAP));

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">{heading}</h2>
            <span className="text-slate-500 text-sm tabular-nums">
              {current + 1}–{Math.min(current + visibleCount, total)} / {total}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <Link
              href={`/${locale}/projektai`}
              className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
            >
              {linkLabel}
            </Link>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: trackX }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            {items.map((item, i) => {
              const isVisible = i >= current && i < current + visibleCount;
              return (
                <Link
                  key={`${item.company}::${item.category}::${i}`}
                  href={item.link ?? `/${locale}/projektai`}
                  aria-label={`${item.company} case study`}
                  style={{ width: cardWidth, flexShrink: 0 }}
                >
                  <motion.div
                    animate={{ opacity: isVisible ? 1 : 0.3 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 hover:bg-white/[0.07] transition-colors h-full flex flex-col min-h-[220px]"
                  >
                    {/* Company row */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {item.logo ? (
                          <div className={`h-7 w-16 flex items-center justify-center ${item.logoDark ? 'bg-slate-800' : 'bg-white'} rounded-md px-1 flex-shrink-0`}>
                            <img src={item.logo} alt={item.company} className="h-5 w-auto max-w-full object-contain" width="64" height="20" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-violet-500 rounded-md flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {item.logoText}
                          </div>
                        )}
                        <div className="min-w-0">
                          <span className="text-white text-sm font-medium block truncate">{item.company}</span>
                          {item.industry && <span className="text-gray-500 text-xs truncate block">{item.industry}</span>}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-purple-400 text-xs opacity-70 shrink-0">
                        {categoryIcons[item.category]}
                        {catLabels[item.category]}
                      </span>
                    </div>

                    {/* Metric */}
                    <div className="mb-3">
                      <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                        {item.metric}
                      </span>
                      <span className="text-gray-500 text-xs ml-2">{item.metricLabel}</span>
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-3">{item.tagline}</p>

                    {/* Result chips */}
                    {item.results && item.results.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {item.results.map((r, ri) => (
                          <span key={ri} className="text-xs bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-gray-400">
                            <span className="text-purple-400 font-semibold mr-1">{r.metric}</span>
                            {r.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-purple-500 w-6' : 'bg-white/20 hover:bg-white/40 w-1.5'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyStrip({ cases, carousel = false }: Props) {
  const locale = useLocale();
  const isLT = locale === 'lt';
  const items = isLT ? cases.lt : cases.en;
  const heading = isLT ? 'Tai veikia praktikoje' : 'See it in action';
  const linkLabel = isLT ? 'Visi atvejai →' : 'View all case studies →';
  const catLabels = categoryLabels[isLT ? 'lt' : 'en'];

  if (carousel) {
    return (
      <CarouselSection
        items={items}
        heading={heading}
        linkLabel={linkLabel}
        catLabels={catLabels}
        locale={locale}
      />
    );
  }

  const gridClass =
    items.length === 1
      ? 'grid-cols-1 max-w-md mx-auto'
      : items.length === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3';

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">{heading}</h2>
          <Link href={`/${locale}/projektai`} className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
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
              className="h-full"
            >
              <Link href={item.link ?? `/${locale}/projektai`} className="block group h-full" aria-label={`${item.company} case study`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition-all h-full flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      {item.logo ? (
                        <div className={`h-7 w-16 flex items-center justify-center ${item.logoDark ? 'bg-slate-800' : 'bg-white'} rounded-md px-1 flex-shrink-0`}>
                          <img src={item.logo} alt={item.company} className="h-5 w-auto max-w-full object-contain" width="64" height="20" />
                        </div>
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
                  <div className="mb-3">
                    <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                      {item.metric}
                    </span>
                    <span className="text-gray-500 text-xs ml-2">{item.metricLabel}</span>
                  </div>
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
