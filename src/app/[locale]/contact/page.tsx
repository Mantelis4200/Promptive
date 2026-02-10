'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function ContactPage() {
  const locale = useLocale();

  const content = {
    en: {
      title: 'Book a Free Consultation',
      subtitle: 'Let\'s discuss how we can help automate your business.',
      trust: 'Trusted by',
      altContact: 'Prefer a different method?',
      whatsapp: 'WhatsApp',
      email: 'Email',
    },
    lt: {
      title: 'Rezervuokite Nemokamą Konsultaciją',
      subtitle: 'Aptarkime, kaip galime padėti automatizuoti jūsų verslą.',
      trust: 'Mumis pasitiki',
      altContact: 'Pageidaujate kito būdo?',
      whatsapp: 'WhatsApp',
      email: 'El. paštas',
    },
  };

  const c = content[locale as keyof typeof content] || content.en;

  useEffect(() => {
    window.scrollTo(0, 0);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const logos = [
    { src: '/images/rhea.png', alt: 'Rhea' },
    { src: '/images/magnimoo.png', alt: 'Magnimoo' },
    { src: '/images/kilo.png', alt: 'Kilo Health' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="organization" />
      <Header />

      <section className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {c.title}
            </h1>
            <p className="text-lg text-gray-600">
              {c.subtitle}
            </p>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6"
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/apanavicius-mantas1/30min?hide_gdpr_banner=1&primary_color=8b5cf6"
              style={{ minWidth: '280px', height: '400px' }}
            />
          </motion.div>

          {/* Alternative Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-sm text-gray-500 mb-12"
          >
            <span>{c.altContact} </span>
            <a
              href="https://wa.me/37061208887"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              {c.whatsapp}
            </a>
            <span className="mx-2">·</span>
            <a
              href="mailto:hello@promptive.agency"
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              {c.email}
            </a>
          </motion.div>

          {/* Trust Logos */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-sm text-gray-400 mb-4">{c.trust}</p>
            <div className="flex items-center justify-center gap-8">
              {logos.map((logo) => (
                <div key={logo.alt} className="h-8">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
