'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const brands = [
  {
    name: 'Kilo',
    logo: '/images/kilo.png',
  },
  {
    name: 'Rhea',
    logo: '/images/rhea.png',
  },
  {
    name: 'Magnimoo',
    logo: '/images/magnimoo.png',
  },
];

export default function BrandsSection() {
  const t = useTranslations('brands');
  
  return (
    <section className="py-16 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t('title')}{' '}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {t('titleHighlight')}
              </span>{' '}
              {t('titleEnd')}
            </h2>
          </motion.div>

          {/* Right Side - Brand Logos */}
          <motion.div 
            className="flex flex-wrap items-center justify-center lg:justify-end gap-8 lg:gap-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, opacity: 1 }}
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 112px, 128px"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}