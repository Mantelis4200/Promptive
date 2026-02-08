'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const brands = [
  { name: 'Kilo', logo: '/images/kilo.png' },
  { name: 'Rhea', logo: '/images/rhea.png' },
  { name: 'Magnimoo', logo: '/images/magnimoo.png' },
];

export default function HeroSection() {
  const locale = useLocale();
  const isLithuanian = locale === 'lt';

  const scrollToCalendly = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-gray-50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90 font-medium">
                {isLithuanian ? 'Priimame naujus projektus' : 'Accepting new projects'}
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {isLithuanian ? (
                <>
                  AI Agentai ir Automatizacijos{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Jūsų Verslui
                  </span>
                </>
              ) : (
                <>
                  AI Agents & Automations{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    For Your Business
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isLithuanian
                ? 'Automatizuojame klientų aptarnavimą, pardavimus ir vidines operacijas. Jūsų verslas veikia 24/7, net kai jūs ilsitės.'
                : 'We automate customer support, sales, and internal operations. Your business runs 24/7, even while you sleep.'
              }
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={scrollToCalendly}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLithuanian ? 'Rezervuoti Pokalbį' : 'Book a Call'}
                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>

              <motion.button
                onClick={scrollToServices}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLithuanian ? 'Kaip Tai Veikia' : 'How It Works'}
              </motion.button>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              className="grid grid-cols-3 gap-6 sm:gap-8 max-w-md mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: '35+', label: isLithuanian ? 'Projektų' : 'Projects' },
                { value: '70%', label: isLithuanian ? 'Mažiau užklausų' : 'Fewer Tickets' },
                { value: '24/7', label: isLithuanian ? 'Aptarnavimas' : 'Support' },
              ].map((metric, index) => (
                <div key={index} className={`text-center ${index === 1 ? 'border-x border-white/10 px-4' : ''}`}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Section - Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pb-24"
        >
          <div className="max-w-5xl mx-auto">
            {/* Glass card for trust content */}
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/10 p-8 sm:p-10">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left - Testimonial */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    {isLithuanian
                      ? '"Sumažinome klientų aptarnavimo užklausas 70% dėka AI automatizacijos ir kartu padidinome konversijas."'
                      : '"Reduced customer support tickets by 70% with AI automation while increasing conversions."'
                    }
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      UZ
                    </div>
                    <div>
                      <p className="text-white font-medium">Ugnius Zykas</p>
                      <p className="text-gray-400 text-sm">Product Lead, Kilo.Health</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Right - Brand logos */}
                <div className="flex-1">
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider text-center lg:text-left mb-6">
                    {isLithuanian ? 'Mumis pasitiki' : 'Trusted by'}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8">
                    {brands.map((brand, index) => (
                      <motion.div
                        key={brand.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        className="relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                      >
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                          <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            fill
                            className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                            sizes="80px"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
