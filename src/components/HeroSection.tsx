'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const brandLogos = [
  { name: 'Kilo', logo: '/images/kilo.png' },
  { name: 'Rhea', logo: '/images/rhea.png' },
  { name: 'Magnimoo', logo: '/images/magnimoo.png' },
  { name: 'Cheats Pro', logo: '/images/cheats-pro-logo.png' },
  { name: 'Lentvario Mediena', logo: '/images/lentvario-logo.png' },
  { name: 'Rideon', logo: '/images/rideon-logo.png' },
  { name: 'Ramo Dumas', logo: '/images/ramo_dumas_logo.png' },
];

// Doubled for seamless infinite loop — flat array avoids React hydration issues
const doubledBrands = [
  ...brandLogos.map((b) => ({ ...b, key: `a-${b.name}` })),
  ...brandLogos.map((b) => ({ ...b, key: `b-${b.name}` })),
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
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left: text */}
            <div className="flex-1 text-center lg:text-left">
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
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6 text-white"
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
                className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
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
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
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
                className="grid grid-cols-3 gap-6 sm:gap-8 max-w-sm mx-auto lg:mx-0 mb-8 lg:mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[
                  { value: '35+', label: isLithuanian ? 'Projektų' : 'Projects' },
                  { value: '70%', label: isLithuanian ? 'Mažiau užklausų' : 'Fewer Tickets' },
                  { value: '24/7', label: isLithuanian ? 'Aptarnavimas' : 'Support' },
                ].map((metric, index) => (
                  <div key={index} className={`text-center lg:text-left ${index === 1 ? 'border-x border-white/10 px-4' : ''}`}>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: photo */}
            <motion.div
              className="flex-shrink-0 w-full lg:w-[380px] xl:w-[420px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <div className="relative">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-purple-500/40 rounded-2xl blur-sm opacity-75" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/hero-side.avif"
                    alt={isLithuanian ? 'Promptive komanda' : 'Promptive team'}
                    width={420}
                    height={460}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
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
            {/* Glass card with gradient border */}
            <div className="relative group">
              {/* Gradient border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-purple-500/50 rounded-3xl blur-sm opacity-75" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl opacity-30" />

              {/* Card content */}
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8 sm:p-10">
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
                    <p className="text-gray-200 text-lg leading-relaxed mb-4">
                      {isLithuanian
                        ? '"Sumažinome klientų aptarnavimo užklausas 70% dėka AI automatizacijos ir kartu padidinome konversijas."'
                        : '"Reduced customer support tickets by 70% with AI automation while increasing conversions."'
                      }
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30">
                        UZ
                      </div>
                      <div>
                        <p className="text-white font-semibold">Ugnius Zykas</p>
                        <p className="text-purple-300 text-sm">Product Lead, Kilo.Health</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
                  <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

                  {/* Right - Brand logos carousel */}
                  <div className="flex-1 min-w-0">
                    <p className="text-purple-300 text-sm font-medium uppercase tracking-wider text-center lg:text-left mb-6">
                      {isLithuanian ? 'Mumis pasitiki' : 'Trusted by'}
                    </p>
                    <div
                      className="overflow-hidden"
                      style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          width: 'max-content',
                          animation: 'hero-marquee 20s linear infinite',
                        }}
                      >
                        {doubledBrands.map((brand) => (
                          <div
                            key={brand.key}
                            className="flex-shrink-0 flex items-center justify-center mx-4"
                            style={{ width: '72px', height: '56px' }}
                          >
                            <Image
                              src={brand.logo}
                              alt={`${brand.name} logo`}
                              width={72}
                              height={48}
                              className="object-contain transition-all duration-300 opacity-70 hover:opacity-100"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
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
