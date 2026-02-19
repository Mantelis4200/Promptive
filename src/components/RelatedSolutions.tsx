'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

interface RelatedItem {
  title: string;
  description: string;
  href: string;
}

const relatedMap: Record<string, { lt: RelatedItem[]; en: RelatedItem[] }> = {
  'ai-auditas': {
    lt: [
      { title: 'AI agentai ir automatizacijos', description: 'Automatizuokite verslo procesus su AI sprendimais', href: '/lt/ai-agentai-automatizacijos' },
      { title: 'Svetainių kūrimas', description: 'Profesionalios svetainės su SEO ir integracijomis', href: '/lt/svetainiu-kurimas' },
    ],
    en: [
      { title: 'AI Agents & Automations', description: 'Automate business processes with AI solutions', href: '/ai-agentai-automatizacijos' },
      { title: 'Website Development', description: 'Professional websites with SEO and integrations', href: '/svetainiu-kurimas' },
    ],
  },
  'ai-auditas-kaina': {
    lt: [
      { title: 'AI auditas verslui', description: 'Automatizavimo planas ir ROI vertinimas', href: '/lt/ai-auditas' },
      { title: 'AI agentai ir automatizacijos', description: 'Įgyvendinkite audito rekomendacijas', href: '/lt/ai-agentai-automatizacijos' },
      { title: 'Verslo procesų automatizavimas', description: 'Procesų automatizavimas su n8n ir Make', href: '/lt/verslo-procesu-automatizavimas' },
    ],
    en: [
      { title: 'AI Audit for Business', description: 'Automation plan and ROI assessment', href: '/ai-auditas' },
      { title: 'AI Agents & Automations', description: 'Implement audit recommendations', href: '/ai-agentai-automatizacijos' },
      { title: 'Business Process Automation', description: 'Process automation with n8n and Make', href: '/verslo-procesu-automatizavimas' },
    ],
  },
  'ai-agentai-automatizacijos': {
    lt: [
      { title: 'AI auditas', description: 'Pradėkite nuo automatizavimo audito', href: '/lt/ai-auditas' },
      { title: 'Svetainių kūrimas', description: 'Profesionalios svetainės su integracijomis', href: '/lt/svetainiu-kurimas' },
    ],
    en: [
      { title: 'AI Audit', description: 'Start with an automation audit', href: '/ai-auditas' },
      { title: 'Website Development', description: 'Professional websites with integrations', href: '/svetainiu-kurimas' },
    ],
  },
  'ai-chatbotai': {
    lt: [
      { title: 'AI agentai ir automatizacijos', description: 'Pilnas automatizacijos sprendimų spektras', href: '/lt/ai-agentai-automatizacijos' },
      { title: 'Verslo procesų automatizavimas', description: 'Chatboto integracija su jūsų sistemomis', href: '/lt/verslo-procesu-automatizavimas' },
      { title: 'AI auditas verslui', description: 'Nustatykite, kur chatbotas atneš didžiausią naudą', href: '/lt/ai-auditas' },
      { title: 'Svetainių kūrimas', description: 'Svetainė su integruotu AI chatbotu', href: '/lt/svetainiu-kurimas' },
    ],
    en: [
      { title: 'AI Agents & Automations', description: 'Full spectrum of automation solutions', href: '/ai-agentai-automatizacijos' },
      { title: 'Business Process Automation', description: 'Chatbot integration with your systems', href: '/verslo-procesu-automatizavimas' },
      { title: 'AI Audit for Business', description: 'Identify where a chatbot brings most value', href: '/ai-auditas' },
      { title: 'Website Development', description: 'Website with integrated AI chatbot', href: '/svetainiu-kurimas' },
    ],
  },
  'verslo-procesu-automatizavimas': {
    lt: [
      { title: 'AI agentai ir automatizacijos', description: 'Pažangūs AI sprendimai verslui', href: '/lt/ai-agentai-automatizacijos' },
      { title: 'AI chatbotai verslui', description: 'Automatizuotas klientų aptarnavimas', href: '/lt/ai-chatbotai' },
      { title: 'AI auditas verslui', description: 'Nustatykite automatizavimo galimybes', href: '/lt/ai-auditas' },
      { title: 'El. parduotuvių kūrimas', description: 'E-komercija su automatizuotais procesais', href: '/lt/el-parduotuviu-kurimas' },
    ],
    en: [
      { title: 'AI Agents & Automations', description: 'Advanced AI solutions for business', href: '/ai-agentai-automatizacijos' },
      { title: 'AI Chatbots for Business', description: 'Automated customer service', href: '/ai-chatbotai' },
      { title: 'AI Audit for Business', description: 'Identify automation opportunities', href: '/ai-auditas' },
      { title: 'E-commerce Development', description: 'E-commerce with automated processes', href: '/el-parduotuviu-kurimas' },
    ],
  },
  'svetainiu-kurimas': {
    lt: [
      { title: 'Landing puslapių kūrimas', description: 'Konversijai optimizuoti landing puslapiai', href: '/lt/landing-puslapiai' },
      { title: 'El. parduotuvių kūrimas', description: 'E-komercija su mokėjimais ir pristatymu', href: '/lt/el-parduotuviu-kurimas' },
      { title: 'AI chatbotai verslui', description: 'Integruokite chatbotą į svetainę', href: '/lt/ai-chatbotai' },
      { title: 'AI auditas verslui', description: 'Pradėkite nuo nemokamos konsultacijos', href: '/lt/ai-auditas' },
    ],
    en: [
      { title: 'Landing Page Development', description: 'Conversion-optimized landing pages', href: '/landing-puslapiai' },
      { title: 'E-commerce Development', description: 'E-commerce with payments and shipping', href: '/el-parduotuviu-kurimas' },
      { title: 'AI Chatbots for Business', description: 'Integrate a chatbot into your website', href: '/ai-chatbotai' },
      { title: 'AI Audit for Business', description: 'Start with a free consultation', href: '/ai-auditas' },
    ],
  },
  'landing-puslapiai': {
    lt: [
      { title: 'Svetainių kūrimas', description: 'Pilno masto svetainių kūrimas su SEO', href: '/lt/svetainiu-kurimas' },
      { title: 'El. parduotuvių kūrimas', description: 'Pardavimų platforma su integracijomis', href: '/lt/el-parduotuviu-kurimas' },
      { title: 'AI chatbotai verslui', description: 'Chatbotas jūsų landing puslapyje', href: '/lt/ai-chatbotai' },
      { title: 'Verslo procesų automatizavimas', description: 'Automatizuokite užklausų apdorojimą', href: '/lt/verslo-procesu-automatizavimas' },
    ],
    en: [
      { title: 'Website Development', description: 'Full-scale website development with SEO', href: '/svetainiu-kurimas' },
      { title: 'E-commerce Development', description: 'Sales platform with integrations', href: '/el-parduotuviu-kurimas' },
      { title: 'AI Chatbots for Business', description: 'Chatbot on your landing page', href: '/ai-chatbotai' },
      { title: 'Business Process Automation', description: 'Automate inquiry processing', href: '/verslo-procesu-automatizavimas' },
    ],
  },
  'el-parduotuviu-kurimas': {
    lt: [
      { title: 'Svetainių kūrimas', description: 'Verslo svetainės su SEO optimizavimu', href: '/lt/svetainiu-kurimas' },
      { title: 'Landing puslapių kūrimas', description: 'Produktų pristatymo puslapiai', href: '/lt/landing-puslapiai' },
      { title: 'Verslo procesų automatizavimas', description: 'Užsakymų ir atsargų automatizavimas', href: '/lt/verslo-procesu-automatizavimas' },
      { title: 'AI chatbotai verslui', description: 'Produktų konsultantas jūsų parduotuvėje', href: '/lt/ai-chatbotai' },
    ],
    en: [
      { title: 'Website Development', description: 'Business websites with SEO optimization', href: '/svetainiu-kurimas' },
      { title: 'Landing Page Development', description: 'Product showcase pages', href: '/landing-puslapiai' },
      { title: 'Business Process Automation', description: 'Order and inventory automation', href: '/verslo-procesu-automatizavimas' },
      { title: 'AI Chatbots for Business', description: 'Product consultant in your store', href: '/ai-chatbotai' },
    ],
  },
  'case-studies': {
    lt: [
      { title: 'AI auditas verslui', description: 'Pradėkite nuo automatizavimo audito', href: '/lt/ai-auditas' },
      { title: 'AI agentai ir automatizacijos', description: 'Automatizavimo sprendimai', href: '/lt/ai-agentai-automatizacijos' },
      { title: 'Svetainių kūrimas', description: 'Profesionalios svetainės', href: '/lt/svetainiu-kurimas' },
    ],
    en: [
      { title: 'AI Audit for Business', description: 'Start with an automation audit', href: '/ai-auditas' },
      { title: 'AI Agents & Automations', description: 'Automation solutions', href: '/ai-agentai-automatizacijos' },
      { title: 'Website Development', description: 'Professional websites', href: '/svetainiu-kurimas' },
    ],
  },
};

interface RelatedSolutionsProps {
  currentPage: string;
  title?: string;
}

export default function RelatedSolutions({ currentPage, title }: RelatedSolutionsProps) {
  const locale = useLocale();
  const isLT = locale === 'lt';
  const items = relatedMap[currentPage]?.[isLT ? 'lt' : 'en'] || [];

  if (items.length === 0) return null;

  const defaultTitle = isLT ? 'Susiję sprendimai' : 'Related Solutions';

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title || defaultTitle}
          </h2>
        </motion.div>

        <div className={`grid gap-6 ${items.length <= 2 ? 'md:grid-cols-2 max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:border-purple-200 transition-all ${items.length <= 2 ? 'p-8' : 'p-6'}`}
            >
              <div className={`bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform ${items.length <= 2 ? 'w-14 h-14' : 'w-10 h-10'}`}>
                <svg className={items.length <= 2 ? 'w-7 h-7' : 'w-5 h-5'} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <h3 className={`font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors ${items.length <= 2 ? 'text-xl' : ''}`}>
                {item.title}
              </h3>
              <p className={`text-gray-600 ${items.length <= 2 ? 'text-base' : 'text-sm'}`}>{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
