'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useState } from 'react';

const services = [
  {
    id: 'aiAudit',
    number: '01',
    enPath: '/ai-auditas',
    ltPath: '/lt/ai-auditas',
    accent: '#34d399',
    gradientFrom: 'from-emerald-400',
    gradientTo: 'to-teal-500',
    glowColor: 'rgba(52,211,153,0.2)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    enFeatures: ['AI Readiness Check', 'Process Gap Analysis', 'ROI Projections', 'Implementation Roadmap'],
    ltFeatures: ['AI Pasirengimo Patikra', 'Procesų Spragų Analizė', 'ROI Prognozės', 'Įgyvendinimo Planas'],
  },
  {
    id: 'aiAutomations',
    number: '02',
    enPath: '/ai-agentai-automatizacijos',
    ltPath: '/lt/ai-agentai-automatizacijos',
    accent: '#a78bfa',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-blue-500',
    glowColor: 'rgba(139,92,246,0.25)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    enFeatures: ['AI Chatbots', 'Workflow Automations', 'Sales Automation', 'Custom AI Agents'],
    ltFeatures: ['AI Pokalbių Robotai', 'Darbo Eigos Automatizacijos', 'Pardavimų Automatizacija', 'Individualūs AI Agentai'],
  },
  {
    id: 'websites',
    number: '03',
    enPath: '/svetainiu-kurimas',
    ltPath: '/lt/svetainiu-kurimas',
    accent: '#60a5fa',
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-cyan-500',
    glowColor: 'rgba(96,165,250,0.2)',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    enFeatures: ['SEO + GEO Optimized', 'CRM Integrations', 'Payment Systems', 'AI Chatbot Included'],
    ltFeatures: ['SEO + GEO Optimizuota', 'CRM Integracijos', 'Mokėjimo Sistemos', 'AI Pokalbių Robotas įskaitytas'],
  },
];

const translations = {
  en: {
    sectionTag: 'What We Build',
    title: 'Every tool your business needs to grow with AI',
    aiAutomations: {
      title: 'AI Agents & Automations',
      description: 'Intelligent systems that handle customer support, qualify leads, and automate internal operations — running 24/7 without your team lifting a finger.',
      cta: 'Explore AI Solutions',
    },
    aiAudit: {
      title: 'AI Audit',
      description: 'A structured assessment of where AI can save you the most time and money. Walk away with a clear roadmap and realistic ROI estimates.',
      cta: 'Get Your Audit',
    },
    websites: {
      title: 'Websites',
      description: 'Fast, conversion-optimized websites with all integrations built in. Designed to generate leads from day one — not just look good.',
      cta: 'See Website Options',
    },
  },
  lt: {
    sectionTag: 'Ką Kuriame',
    title: 'Paslaugos kurios padės jūsų verslui',
    aiAutomations: {
      title: 'AI Agentai ir Automatizacijos',
      description: 'Išmanios sistemos, aptarnaujančios klientus, kvalifikuojančios užklausas ir automatizuojančios operacijas 24/7 — be papildomo jūsų komandos darbo.',
      cta: 'AI Sprendimai',
    },
    aiAudit: {
      title: 'AI Auditas',
      description: 'Struktūrizuotas įvertinimas, kur AI gali sutaupyti daugiausiai laiko ir pinigų. Gausite aiškų veiksmų planą ir realistiškus ROI skaičiavimus.',
      cta: 'Gauti Auditą',
    },
    websites: {
      title: 'Svetainės',
      description: 'Greitos, konversijai optimizuotos svetainės su visomis integracijomis. Sukurtos generuoti užklausas nuo pirmos dienos.',
      cta: 'Svetainių Variantai',
    },
  },
};

export default function ServicesSection() {
  const locale = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-28 bg-slate-800 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
            {t.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
            {t.title}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const content = t[service.id as keyof typeof t] as { title: string; description: string; cta: string };
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={locale === 'lt' ? service.ltPath : service.enPath} className="block h-full">
                  <div
                    className="relative h-full rounded-2xl border transition-all duration-300 p-8 flex flex-col overflow-hidden"
                    style={{
                      background: isHovered
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%)'
                        : 'rgba(255,255,255,0.05)',
                      borderColor: isHovered ? service.accent + '60' : 'rgba(255,255,255,0.12)',
                      boxShadow: isHovered
                        ? `0 0 40px ${service.glowColor}, inset 0 1px 0 rgba(255,255,255,0.08)`
                        : 'none',
                    }}
                  >
                    {/* Large ghost number in background */}
                    <span
                      className="absolute -top-4 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none transition-all duration-300"
                      style={{ color: isHovered ? service.accent : 'rgba(255,255,255,0.04)' }}
                    >
                      {service.number}
                    </span>

                    {/* Icon + number row */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} text-white transition-shadow duration-300`}
                        style={{ boxShadow: isHovered ? `0 4px 20px ${service.glowColor}` : 'none' }}
                      >
                        {service.icon}
                      </div>
                      <span
                        className="text-xs font-bold tracking-widest transition-colors duration-300"
                        style={{ color: isHovered ? service.accent : 'rgba(255,255,255,0.2)' }}
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {content.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                      {content.description}
                    </p>

                    {/* Feature list */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                      {(locale === 'lt' ? service.ltFeatures : service.enFeatures).map((feature) => (
                        <div key={feature} className="flex items-center gap-2 min-w-0">
                          <svg
                            className="w-3.5 h-3.5 shrink-0 transition-colors duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={{ color: isHovered ? service.accent : 'rgba(255,255,255,0.25)' }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span
                            className="text-xs font-medium leading-snug transition-colors duration-200 truncate"
                            style={{ color: isHovered ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)' }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                      style={{ color: isHovered ? service.accent : 'rgba(255,255,255,0.35)' }}
                    >
                      {content.cta}
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: isHovered ? 4 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
