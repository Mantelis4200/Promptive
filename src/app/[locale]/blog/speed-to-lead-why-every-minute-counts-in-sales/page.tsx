'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function SpeedToLeadPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const isLithuanian = locale === 'lt';

  const post = {
    id: 3,
    title: "Speed to Lead: Why Every Minute Counts in Sales",
    excerpt: "Responding within 5 minutes can boost conversion rates up to 8x. Learn why speed to lead is the ultimate competitive advantage.",
    category: "Sales & Conversions",
    date: "2025-09-29",
    readTime: "8 min read",
    image: "/images/blog/speed-to-lead-hero.webp",
    slug: "speed-to-lead-why-every-minute-counts-in-sales",
    author: "Mantas Apanavicius",
    authorRole: "Founder",
    authorImage: "/images/photo.webp",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": isLithuanian ? "Speed to Lead: Kodėl pardavimuose kiekviena minutė ytin svarbi" : "Speed to Lead: Why Every Minute Counts in Sales",
    "description": isLithuanian
      ? "Atsakymas per 5 minutes gali padidinti konversijų rodiklius iki 8 kartų. Sužinokite, kodėl greitis yra pagrindinis konkurencinis pranašumas."
      : "Responding within 5 minutes can boost conversion rates up to 8x. Learn why speed to lead is the ultimate competitive advantage.",
    "image": "https://promptive.agency/images/blog/speed-to-lead-hero.webp",
    "author": {
      "@type": "Organization",
      "name": "Promptive Agency",
      "url": "https://promptive.agency"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Promptive Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://promptive.agency/images/logo.svg"
      }
    },
    "datePublished": "2025-09-29",
    "dateModified": "2025-09-29",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://promptive.agency${isLithuanian ? '/lt' : ''}/blog/speed-to-lead-why-every-minute-counts-in-sales`
    },
    "articleSection": isLithuanian ? "Pardavimai ir konversijos" : "Sales & Conversions",
    "keywords": isLithuanian
      ? ["speed to lead", "pardavimų automatizavimas", "potencialių klientų valdymas", "konversijų optimizavimas", "CRM", "pardavimų greitis", "klientų aptarnavimas"]
      : ["speed to lead", "sales automation", "lead management", "conversion optimization", "CRM", "response time", "customer service"],
    "wordCount": 1800,
    "timeRequired": "PT8M"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isLithuanian ? "Pradinis" : "Home",
        "item": `https://promptive.agency${isLithuanian ? '/lt' : ''}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": isLithuanian ? "Blogas" : "Blog",
        "item": `https://promptive.agency${isLithuanian ? '/lt' : ''}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": isLithuanian ? "Speed to Lead" : "Speed to Lead",
        "item": `https://promptive.agency${isLithuanian ? '/lt' : ''}/blog/speed-to-lead-why-every-minute-counts-in-sales`
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = isLithuanian ? {
    title: "Speed to Lead: Kodėl Pardavimuose Kiekviena Minutė Ytin Svarbi",
    excerpt: "Atsakymas per 5 minutes gali padidinti konversijų rodiklius iki 8 kartų. Sužinokite, kodėl greitis yra pagrindinis konkurencinis pranašumas.",
    category: "Pardavimai ir konversijos",
    readTime: "8 min skaitymo",
    backToBlog: "← Atgal į blogą",
    intro: {
      p1: "Greitis yra pagrindinis nesąžiningas pranašumas konvertuojant potencialius klientus.",
      p2: "Kai potencialus klientas užpildo formą ar pradeda pirkimo procesą, jo dėmesys yra aukščiausiame taške. Kiekviena minutė, kuri praeina, mažina tikimybę, kad jis taps jūsų klientu.",
    },
    sections: {
      whatIs: {
        title: "Kas yra Speed to Lead?",
        p1: "'Speed to lead' (dar vadinamas laiku iki kontakto) – tai laikas, per kurį jūsų komanda atsako į naują užklausą.",
        stats: [
          { value: "8x", label: "didesnė konversija atsakant per 5 min." },
          { value: "30 min.", label: "po šio laiko įsitraukimas dramatiškai krenta" },
          { value: "24 val.", label: "po šio laiko konversijos tikimybė beveik išnyksta" },
        ],
        p2: "Priežastis paprasta: susidomėjimas yra greitai gendantis resursas.",
      },
      experience: {
        title: "Asmeninė Patirtis",
        p1: "Iš el. pašto rinkodaros patirties: palikto krepšelio sekos pirmieji du laiškai (per 24 valandas) sugeneruoja maždaug 50% visos sekos pajamų.",
        p2: "2-5 dienos generuoja kitą pusę. Greitesnis veiksmas = didesnė grąža.",
      },
      hormozi: {
        title: "Alex Hormozi Pavyzdys",
        p1: "Alex Hormozi yra puikus pavyzdys, kaip net su nedideliu kiekiu kasdienių potencialių klientų, traktuojant juos kaip auksą ir atsakant akimirksniu, galima sugeneruoti milijonus pajamų.",
      },
      b2c: {
        title: "Speed to Lead B2C Versle",
        items: [
          {
            title: "Klientų aptarnavimas",
            description: "Greiti atsakymai paverčia nusivylusius klientus lojaliais. Vėlavimai sukelia grąžinimus ir neigiamus atsiliepimus.",
          },
          {
            title: "Gyvas pokalbis ir chatbotai",
            description: "Atsakymai per sekundes išlaiko pirkėjus jūsų svetainėje, o ne konkurentų.",
          },
          {
            title: "Palikti krepšeliai",
            description: "Tos pačios dienos automatiniai priminimai užfiksuoja ketinimą, kol jis dar šviežias.",
          },
        ],
      },
      implementation: {
        title: "Kaip Įmonės Įgyvendina Speed to Lead",
        steps: [
          "Nustatykite griežtus SLA (pvz., 'visi potencialūs klientai kontaktuojami per 5 minutes')",
          "Automatizuokite pirmą kontaktą per chatbotus, SMS ar momentinį el. laišką",
          "Nukreipkite potencialius klientus akimirksniu per CRM automatizavimą",
          "Matuokite laiką iki pirmo atsakymo kaip pagrindinį rodiklį",
        ],
      },
      why2025: {
        title: "Kodėl Tai Svarbiau Nei Bet Kada (2025)",
        p1: "Momentinės komunikacijos lūkesčiai (messenger'iai, programėlės, socialiniai tinklai) reiškia, kad klientai tikisi nedelsiant sulaukti verslo atsakymo.",
        p2: "Speed to lead tampa 'konkurenciniu grioviu visoje kliento kelionėje'.",
      },
      conclusion: {
        title: "Išvados",
        p1: "Kiekviena sąveika turi realų pajamų potencialą, kuris išnyksta su vėlavimu.",
        quote: "Atsakykite greičiau nei jūsų konkurentai. Tai paprasta, galinga ir įrodyta.",
      },
    },
    cta: {
      title: "Pasirengę Automatizuoti Savo Atsakymus?",
      description: "Leiskite mums padėti sukurti automatizavimus, kurie užtikrins, kad nė vienas potencialus klientas nebus praleistas.",
      button: "Rezervuoti Nemokamą Konsultaciją",
      note: "30 minučių skambutis • Individuali strategija • Be įsipareigojimų",
    },
  } : {
    title: "Speed to Lead: Why Every Minute Counts in Sales",
    excerpt: "Responding within 5 minutes can boost conversion rates up to 8x. Learn why speed to lead is the ultimate competitive advantage.",
    category: "Sales & Conversions",
    readTime: "8 min read",
    backToBlog: "← Back to Blog",
    intro: {
      p1: "Speed is the ultimate unfair advantage in converting leads.",
      p2: "When a prospect fills out a form or begins the checkout process, their attention peaks immediately. Every minute that passes reduces the likelihood they'll become your customer.",
    },
    sections: {
      whatIs: {
        title: "What is Speed to Lead?",
        p1: "\"Speed to lead\" (also known as time to lead or time to contact) refers to how quickly your team responds to a new inquiry.",
        stats: [
          { value: "8x", label: "higher conversion when responding in 5 min" },
          { value: "30 min", label: "after this, engagement drops dramatically" },
          { value: "24 hrs", label: "after this, conversion probability nearly disappears" },
        ],
        p2: "The reason is simple: interest is a perishable resource.",
      },
      experience: {
        title: "Personal Experience",
        p1: "From email marketing experience: abandoned cart sequences show the first two emails (within 24 hours) generate roughly 50% of all sequence revenue.",
        p2: "Days 2-5 produce the other half. Faster action = bigger return.",
      },
      hormozi: {
        title: "The Hormozi Example",
        p1: "Alex Hormozi is a great example of how even with a small number of daily leads, treating them as gold and responding instantly can generate millions in revenue.",
      },
      b2c: {
        title: "Speed to Lead in B2C",
        items: [
          {
            title: "Customer Support",
            description: "Instant replies turn frustrated customers into loyal fans. Delays risk refunds and negative reviews.",
          },
          {
            title: "Live Chat & Chatbots",
            description: "Seconds-fast responses keep shoppers on-site rather than bouncing to competitors.",
          },
          {
            title: "Abandoned Carts",
            description: "Same-day automated reminders capture intent while it's still fresh.",
          },
        ],
      },
      implementation: {
        title: "How Companies Implement Speed to Lead",
        steps: [
          "Set strict SLAs (e.g., \"all leads contacted within 5 minutes\")",
          "Automate first contact via chatbots, SMS, or instant email",
          "Route leads instantly via CRM automation",
          "Measure time-to-first-response as a key metric",
        ],
      },
      why2025: {
        title: "Why It Matters More Than Ever (2025)",
        p1: "Instant communication expectations (messengers, apps, social media) mean customers expect immediate business responses.",
        p2: "Speed to lead becomes \"a competitive moat across the entire customer journey.\"",
      },
      conclusion: {
        title: "Final Thoughts",
        p1: "Every interaction holds real revenue potential that vanishes with delay.",
        quote: "Respond faster than your competitors. It's simple, powerful, and proven.",
      },
    },
    cta: {
      title: "Ready to Automate Your Response Time?",
      description: "Let us help you build automations that ensure no lead slips through the cracks.",
      button: "Book Free Consultation",
      note: "30-minute call • Custom strategy • No commitment required",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Back to Blog */}
            <motion.a
              href={`${isLithuanian ? '/lt' : ''}/blog`}
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-8 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.backToBlog}
            </motion.a>

            {/* Category Badge */}
            <motion.div
              className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.category}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {content.excerpt}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{post.author}</div>
                  <div>{post.authorRole}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <time dateTime={post.date}>{isLithuanian ? '2025 m. rugsėjo 29 d.' : 'September 29, 2025'}</time>
                <span>•</span>
                <span>{content.readTime}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <article className="prose prose-xl max-w-none">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xl leading-relaxed text-gray-700 mb-6 font-semibold">
              {content.intro.p1}
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              {content.intro.p2}
            </p>
          </motion.div>

          {/* What is Speed to Lead */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.sections.whatIs.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              {content.sections.whatIs.p1}
            </p>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {content.sections.whatIs.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              {content.sections.whatIs.p2}
            </p>
          </motion.section>

          {/* Personal Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.sections.experience.title}</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
              <p className="text-lg text-amber-900">
                {content.sections.experience.p1}
              </p>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              {content.sections.experience.p2}
            </p>
          </motion.section>

          {/* Hormozi Example */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.sections.hormozi.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {content.sections.hormozi.p1}
            </p>
          </motion.section>

          {/* B2C Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.sections.b2c.title}</h2>
            <div className="space-y-6">
              {content.sections.b2c.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Implementation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.sections.implementation.title}</h2>
            <ol className="space-y-4">
              {content.sections.implementation.steps.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-lg text-gray-700 pt-1">{step}</span>
                </motion.li>
              ))}
            </ol>
          </motion.section>

          {/* Why 2025 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.sections.why2025.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              {content.sections.why2025.p1}
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              {content.sections.why2025.p2}
            </p>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.sections.conclusion.title}</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              {content.sections.conclusion.p1}
            </p>
            <blockquote className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 text-xl font-semibold text-gray-900 italic">
              &ldquo;{content.sections.conclusion.quote}&rdquo;
            </blockquote>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {content.cta.title}
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {content.cta.description}
              </p>
              <motion.a
                href={`${isLithuanian ? '/lt' : ''}/contact`}
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.cta.button}
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <p className="text-sm text-blue-200 mt-6">
                {content.cta.note}
              </p>
            </div>
          </motion.section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
