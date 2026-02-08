'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

const translations = {
  en: {
    sectionTag: 'Get Started',
    title: 'Book a Free Discovery Call',
    subtitle: 'Let\'s discuss how AI can automate your business operations. No commitment, just a conversation.',
    benefits: [
      'Identify automation opportunities',
      'Get a custom solution proposal',
      'See real ROI projections',
    ],
    calendlyTitle: 'Select a time that works for you',
  },
  lt: {
    sectionTag: 'Pradėkite',
    title: 'Rezervuokite Nemokamą Pokalbį',
    subtitle: 'Aptarkime, kaip AI gali automatizuoti jūsų verslo operacijas. Be įsipareigojimų, tik pokalbis.',
    benefits: [
      'Nustatyti automatizacijos galimybes',
      'Gauti individualų sprendimo pasiūlymą',
      'Matyti realias ROI prognozes',
    ],
    calendlyTitle: 'Pasirinkite jums tinkamą laiką',
  },
};

export default function BookCallSection() {
  const locale = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="book-call" className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
              {t.sectionTag}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              {t.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t.subtitle}
            </p>

            {/* Benefits list */}
            <ul className="space-y-4">
              {t.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-gray-200"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {benefit}
                </motion.li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-4">
                {locale === 'lt' ? 'Arba susisiekite tiesiogiai:' : 'Or reach out directly:'}
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="mailto:hello@promptive.agency" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@promptive.agency
                </a>
                <a href="tel:+37061208887" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +370 612 08 887
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Calendly embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/apanavicius-mantas1/30min?hide_gdpr_banner=1&primary_color=8b5cf6"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
