'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

const brands = [
  { name: 'Kilo', logo: '/images/kilo.png' },
  { name: 'Rhea', logo: '/images/rhea.png' },
  { name: 'Magnimoo', logo: '/images/magnimoo.png' },
];

export default function TrustBar() {
  const locale = useLocale();
  const isLithuanian = locale === 'lt';

  return (
    <section className="py-12 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              {isLithuanian ? 'Mumis pasitiki' : 'Trusted by'}
            </p>
          </div>

          {/* Center - Brand logos */}
          <div className="flex items-center gap-8 lg:gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Testimonial snippet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-sm bg-white rounded-xl p-4 shadow-sm border border-gray-100"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                UZ
              </div>
              <div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {isLithuanian
                    ? '"Sumažinome klientų užklausas 70% dėka AI automatizacijos."'
                    : '"Reduced customer tickets by 70% with AI automation."'
                  }
                </p>
                <p className="text-gray-900 font-medium text-sm mt-1">Ugnius Zykas</p>
                <p className="text-gray-500 text-xs">Kilo.Health</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
