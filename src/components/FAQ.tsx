'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StructuredData from './StructuredData';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions", subtitle }: FAQProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  // Prepare structured data for FAQ schema
  const faqSchemaData = items.map(item => ({
    question: item.question,
    answer: item.answer
  }));

  return (
    <section className="py-16 bg-white">
      <StructuredData type="faq" data={faqSchemaData} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-2xl"
                aria-expanded={expandedItem === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {expandedItem === item.id && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed mt-4">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}