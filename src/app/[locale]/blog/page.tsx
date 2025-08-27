'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

// Sample blog data structure
const createBlogPosts = (locale: string) => [
  {
    id: 1,
    title: locale === 'lt' 
      ? "Kaip AI chatbotai padidino potencialių klientų kvalifikaciją 300% SaaS įmonėms"
      : "How AI Chatbots Increased Lead Qualification by 300% for SaaS Companies",
    excerpt: locale === 'lt'
      ? "Sužinokite, kaip AI chatbotų įdiegimas transformavo potencialių klientų generavimą trims skirtingoms SaaS įmonėms, užtikrindamas aukštesnės kokybės potencialius klientus ir sumažindamas rankinį darbą."
      : "Discover how implementing AI chatbots transformed lead generation for three different SaaS companies, resulting in higher quality leads and reduced manual work.",
    category: locale === 'lt' ? "AI Automatizavimas" : "AI Automation",
    date: "2024-03-15",
    readTime: locale === 'lt' ? "8 min skaitymas" : "8 min read",
    image: "/images/blog/ai-chatbots.jpg",
    slug: "ai-chatbots-lead-qualification-saas"
  },
  {
    id: 2,
    title: locale === 'lt'
      ? "Išsamus marketingo automatizavimo workflow vadovas 2024 metams"
      : "The Complete Guide to Marketing Automation Workflows in 2024",
    excerpt: locale === 'lt'
      ? "Sužinokite, kaip sukurti efektyvius marketingo automatizavimo workflow, kurie ugdys potencialius klientus, padidins konversijas ir sutaupys jūsų komandai 20+ valandų per savaitę."
      : "Learn how to build effective marketing automation workflows that nurture leads, increase conversions, and save your team 20+ hours per week.",
    category: locale === 'lt' ? "Marketingas" : "Marketing",
    date: "2024-03-12",
    readTime: locale === 'lt' ? "12 min skaitymas" : "12 min read",
    image: "/images/blog/marketing-automation.jpg",
    slug: "complete-guide-marketing-automation-workflows-2024"
  },
  {
    id: 3,
    title: locale === 'lt'
      ? "Atvejo studija: Klientų aptarnavimo automatizavimas su n8n ir AI"
      : "Case Study: Automating Customer Support with n8n and AI",
    excerpt: locale === 'lt'
      ? "Kaip padėjome fintech įmonei automatizuoti 80% jų klientų aptarnavimo užklausų naudojant n8n workflow ir AI pagrindu veikiančius atsakymus."
      : "How we helped a fintech company automate 80% of their customer support inquiries using n8n workflows and AI-powered responses.",
    category: locale === 'lt' ? "Atvejų studijos" : "Case Studies",
    date: "2024-03-10",
    readTime: locale === 'lt' ? "6 min skaitymas" : "6 min read",
    image: "/images/blog/customer-support-automation.jpg",
    slug: "case-study-automating-customer-support-n8n-ai"
  },
  {
    id: 4,
    title: locale === 'lt'
      ? "5 workflow automatizavimo klaidos, kurios kainuoja jums pinigų"
      : "5 Workflow Automation Mistakes That Are Costing You Money",
    excerpt: locale === 'lt'
      ? "Išvenkite šių dažnų klaidų diegiant workflow automatizavimą. Mokykitės iš realių pavyzdžių ir optimizuokite savo procesus maksimaliai ROI."
      : "Avoid these common pitfalls when implementing workflow automation. Learn from real-world examples and optimize your processes for maximum ROI.",
    category: locale === 'lt' ? "Workflow" : "Workflows",
    date: "2024-03-08",
    readTime: locale === 'lt' ? "7 min skaitymas" : "7 min read",
    image: "/images/blog/automation-mistakes.jpg",
    slug: "5-workflow-automation-mistakes-costing-money"
  },
  {
    id: 5,
    title: locale === 'lt'
      ? "Protingų chatbotų kūrimas: geriausi sprendimai ir įrankiai"
      : "Building Intelligent Chatbots: Best Practices and Tools",
    excerpt: locale === 'lt'
      ? "Išsamus vadovas, kaip kurti chatbotus, kurie tikrai padeda jūsų verslui. Nuo planavimo iki diegimo - aprėpiame viską, ką reikia žinoti."
      : "A comprehensive guide to creating chatbots that actually help your business. From planning to deployment, we cover everything you need to know.",
    category: locale === 'lt' ? "Chatbotai" : "Chatbots",
    date: "2024-03-05",
    readTime: locale === 'lt' ? "10 min skaitymas" : "10 min read",
    image: "/images/blog/intelligent-chatbots.jpg",
    slug: "building-intelligent-chatbots-best-practices-tools"
  },
  {
    id: 6,
    title: locale === 'lt'
      ? "ROI analizė: AI automatizavimas vs tradiciniai rankiniai procesai"
      : "ROI Analysis: AI Automation vs Traditional Manual Processes",
    excerpt: locale === 'lt'
      ? "Realūs skaičiai iš 50+ įdiegimų, rodantys tiksliai, kaip AI automatizavimas paveiks jūsų pelningumą palyginti su rankiniais procesais."
      : "Real numbers from 50+ implementations showing exactly how AI automation impacts your bottom line compared to manual processes.",
    category: locale === 'lt' ? "AI Automatizavimas" : "AI Automation",
    date: "2024-03-01",
    readTime: locale === 'lt' ? "9 min skaitymas" : "9 min read",
    image: "/images/blog/roi-analysis.jpg",
    slug: "roi-analysis-ai-automation-vs-manual-processes"
  }
];

const categoryKeys = ["all", "aiAutomation", "marketing", "workflows", "chatbots", "caseStudies"];

export default function BlogPage() {
  const t = useTranslations('blogPage');
  const locale = useLocale();
  const blogPosts = createBlogPosts(locale);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Initialize filtered posts
    setFilteredPosts(blogPosts);
  }, [blogPosts]);

  useEffect(() => {
    let filtered = blogPosts;
    
    // Filter by category
    if (activeCategory !== "all") {
      const categoryMap = locale === 'lt' ? {
        "aiAutomation": "AI Automatizavimas",
        "marketing": "Marketingas", 
        "workflows": "Workflow",
        "chatbots": "Chatbotai",
        "caseStudies": "Atvejų studijos"
      } : {
        "aiAutomation": "AI Automation",
        "marketing": "Marketing", 
        "workflows": "Workflows",
        "chatbots": "Chatbots",
        "caseStudies": "Case Studies"
      };
      const actualCategory = categoryMap[activeCategory as keyof typeof categoryMap];
      if (actualCategory) {
        filtered = filtered.filter(post => post.category === actualCategory);
      }
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm, blogPosts, locale]);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      // English categories
      "AI Automation": "bg-purple-100 text-purple-700",
      "Marketing": "bg-blue-100 text-blue-700", 
      "Workflows": "bg-green-100 text-green-700",
      "Chatbots": "bg-orange-100 text-orange-700",
      "Case Studies": "bg-pink-100 text-pink-700",
      // Lithuanian categories
      "AI Automatizavimas": "bg-purple-100 text-purple-700",
      "Marketingas": "bg-blue-100 text-blue-700", 
      "Workflow": "bg-green-100 text-green-700",
      "Chatbotai": "bg-orange-100 text-orange-700",
      "Atvejų studijos": "bg-pink-100 text-pink-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="organization" />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto mb-8">
              {t('hero.subtitle')}
            </p>
            
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t('hero.newsletterPlaceholder')}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('hero.newsletterButton')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categoryKeys.map((categoryKey) => (
                  <button
                    key={categoryKey}
                    onClick={() => handleCategoryFilter(categoryKey)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === categoryKey
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t(`filters.${categoryKey}`)}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder={t('search.placeholder')}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              
              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Featured Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-purple-300">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Category Tag */}
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-purple-600 transition-colors cursor-pointer">
                        <a href={`/blog/${post.slug}`}>
                          {post.title}
                        </a>
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{new Date(post.date).toLocaleDateString(locale === 'lt' ? 'lt-LT' : 'en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Read More CTA */}
                      <a 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                        aria-label={`Read full article: ${post.title}`}
                      >
                        {t('readMore')}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('noResults.title')}</h3>
                  <p className="text-gray-600 mb-6">{t('noResults.description')}</p>
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchTerm("");
                    }}
                    className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    {t('noResults.clearButton')}
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Popular Posts */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('sidebar.popularPosts')}</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <a key={post.id} href={`/blog/${post.slug}`} className="block group">
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{post.readTime}</p>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Lead Magnet */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-3">{t('sidebar.leadMagnet.title')}</h3>
                <p className="mb-4 opacity-90">
                  {t('sidebar.leadMagnet.description')}
                </p>
                <motion.button
                  className="w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('sidebar.leadMagnet.button')}
                </motion.button>
              </motion.div>

              {/* Sticky CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('sidebar.cta.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('sidebar.cta.description')}
                </p>
                <motion.button
                  onClick={() => document.getElementById('chatbot-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('sidebar.cta.button')}
                </motion.button>
              </motion.div>

              {/* Newsletter Widget */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t('sidebar.newsletter.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('sidebar.newsletter.description')}
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder={t('sidebar.newsletter.placeholder')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="w-full bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors">
                    {t('sidebar.newsletter.button')}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}