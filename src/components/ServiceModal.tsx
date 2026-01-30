'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useEffect } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceKey: 'websites' | 'aiAutomations';
}

export default function ServiceModal({ isOpen, onClose, serviceKey }: ServiceModalProps) {
  const t = useTranslations('serviceModals');
  const locale = useLocale();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const serviceContent = {
    websites: {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    aiAutomations: {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  };

  const content = serviceContent[serviceKey];

  const getFeatures = (): string[] => {
    try {
      const raw = t.raw(`${serviceKey}.features`);
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  };

  const getBenefits = (): Array<{stat: string, label: string}> => {
    try {
      const raw = t.raw(`${serviceKey}.benefitsList`);
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  };

  const getProcess = (): Array<{step: string, title: string, desc: string}> => {
    try {
      const raw = t.raw(`${serviceKey}.process`);
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  };

  const handleCtaClick = () => {
    onClose();
    window.location.href = `/${locale}/contact`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
              {/* Header - Brandbook gradient */}
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 md:p-8 text-white relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                    {content.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {t(`${serviceKey}.title`)}
                    </h2>
                    <p className="text-white/80 mt-1">
                      {t(`${serviceKey}.tagline`)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                {/* Description */}
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {t(`${serviceKey}.description`)}
                </p>

                {/* Features Grid */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('whatWeOffer')}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {getFeatures().map((feature: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="p-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('benefits')}</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {getBenefits().map((benefit, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="text-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                          {benefit.stat}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{benefit.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('howItWorks')}</h3>
                  <div className="space-y-3">
                    {getProcess().map((step, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 md:p-8 bg-white border-t border-gray-100">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-gray-600 text-center sm:text-left">
                    {t('readyToStart')}
                  </p>
                  <motion.button
                    onClick={handleCtaClick}
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-16 shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-600 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('getStarted')}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
