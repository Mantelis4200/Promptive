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
    excerpt: "Discover why responding within 5 minutes can increase conversion rates up to 8x. Learn how speed to lead transforms businesses from missed opportunities to millions in revenue.",
    category: "Sales & Conversions",
    date: "2025-09-29",
    readTime: "8 min read",
    image: "/images/blog/speed-to-lead-hero.avif",
    slug: "speed-to-lead-why-every-minute-counts-in-sales",
    author: "Augustas Vinikas",
    authorRole: "CEO & Founder",
    authorImage: "/images/photo.webp",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": isLithuanian ? "Speed to Lead: Kodėl pardavimuose kiekviena minutė ytin svarbi" : "Speed to Lead: Why Every Minute Counts in Sales",
    "description": isLithuanian
      ? "Atsakymas per 5 minutes gali padidinti konversijų rodiklius iki 8 kartų. Sužinokite, kodėl greitis yra pagrindinis konkurencinis pranašumas."
      : "Discover why responding within 5 minutes can increase conversion rates up to 8x. Learn how speed to lead transforms businesses from missed opportunities to millions in revenue.",
    "image": "https://promptive.agency/images/blog/speed-to-lead-hero.avif",
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
      "@id": `https://promptive.agency${isLithuanian ? '/lt' : ''}/tinklarastis/speed-to-lead-why-every-minute-counts-in-sales`
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
        "name": "Speed to Lead",
        "item": `https://promptive.agency${isLithuanian ? '/lt' : ''}/tinklarastis/speed-to-lead-why-every-minute-counts-in-sales`
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

  const backToBlog = isLithuanian ? '← Atgal į blogą' : '← Back to Blog';
  const category = isLithuanian ? 'Pardavimai ir konversijos' : 'Sales & Conversions';
  const readTime = isLithuanian ? '8 min skaitymo' : '8 min read';
  const heroTitle = isLithuanian
    ? 'Speed to Lead: Kodėl Pardavimuose Kiekviena Minutė Ytin Svarbi'
    : 'Speed to Lead: Why Every Minute Counts in Sales';
  const heroExcerpt = isLithuanian
    ? 'Sužinokite, kodėl atsakymas per 5 minutes gali padidinti konversijų rodiklius iki 8 kartų. Kaip greitis keičia verslą – nuo praleistų galimybių iki milijonų pajamų.'
    : 'Discover why responding within 5 minutes can increase conversion rates up to 8x. Learn how speed to lead transforms businesses from missed opportunities to millions in revenue.';

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
              {backToBlog}
            </motion.a>

            {/* Category Badge */}
            <motion.div
              className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {category}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {heroTitle}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {heroExcerpt}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 mb-10"
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
                <span>{readTime}</span>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Image
                src={post.image}
                alt={heroTitle}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <article className="prose prose-xl max-w-none">

          {isLithuanian ? (
            /* ===================== LITHUANIAN CONTENT ===================== */
            <>
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 mt-12"
              >
                <p className="text-xl leading-relaxed text-gray-700 mb-6 font-semibold">
                  Kai kalbama apie potencialių klientų pavertimą mokančiais klientais, greitis yra pagrindinis nesąžiningas pranašumas.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Kai potencialus klientas užpildo formą, atsisiunčia išteklių ar pradeda atsiskaitymo procesą, jo dėmesys ir ketinimai yra aukščiausiame lygyje.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Jei jūsų verslas nereaguoja greitai, tas susidomėjimas blėsta, atsiranda trukdžių ir konkurentai gali laimėti sandorį.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Čia atsiranda koncepcija <strong>speed to lead</strong>.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kas yra Speed to Lead?</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  <strong>Speed to lead</strong> (dar vadinamas laiku iki lead arba laiku iki kontakto) reiškia, kaip greitai jūsų komanda reaguoja į naują lead&apos;ą ar užklausą.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                  <p className="font-semibold text-amber-900 mb-4">Tyrimai rodo, kad:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-amber-800">
                      <span className="mt-1 text-amber-500">•</span>
                      <span>Susisiekimas per <strong>5 minutes</strong> nuo lead&apos;o veiksmo gali padidinti konversijų rodiklius <strong>iki 8 kartų</strong>, palyginti su laukimu valandą</span>
                    </li>
                    <li className="flex items-start gap-3 text-amber-800">
                      <span className="mt-1 text-amber-500">•</span>
                      <span>Net 30 minučių laukimas dramatiškai sumažina įsitraukimo tikimybę</span>
                    </li>
                    <li className="flex items-start gap-3 text-amber-800">
                      <span className="mt-1 text-amber-500">•</span>
                      <span>Po 24 valandų galimybė užmegzti kontaktą ar konvertuoti lead&apos;ą beveik visiškai išnyksta</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Kodėl? Nes susidomėjimas yra greitai gendantis išteklius.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Vos tik kažkas pakelia ranką, jie galvoja apie problemos sprendimą. Po kelių valandų jie arba atvėso, arba kažkas kitas jau atsakė į jų skambutį.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Asmeninė Patirtis su Laiku</h2>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                  <p className="text-lg text-amber-900">
                    Turėdamas el. pašto rinkodaros patirties foną, mačiau tą patį principą. Pavyzdžiui, palikto krepšelio sekose, pirmieji du el. laiškai, išsiųsti per pirmąsias 24 valandas, sugeneruoja apie <strong>50% visų sekos pajamų</strong>.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Likę el. laiškai, išsiųsti 2–5 dienomis, sudaro kitą pusę. Kitaip tariant — kuo greičiau veikiate, tuo didesnė grąža.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Nesvarbu, ar tai pardavimų skambučiai, automatiniai el. laiškai ar klientų aptarnavimo atsakymai — laikas nėra tik svarbus, tai viskas.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Hormozi Pavyzdys</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  Štai puikus realaus pasaulio pavyzdys iš Alex Hormozi, kuris puikiai iliustruoja speed to lead galią:
                </p>
                <div className="relative w-full mb-8" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/2oSh0nDmBIM"
                    title="Alex Hormozi Speed to Lead"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                  />
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  Išvada? Net jei per dieną turite tik kelis lead&apos;us, traktuodami juos kaip auksą ir atsakydami akimirksniu, galite gauti milijonus pajamų.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Speed to Lead B2C versle</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Tai ne tik apie B2B pardavimus. B2C laikas taip pat stipriai veikia konversijas:
                </p>
                <ul className="space-y-6 mb-6">
                  <li className="text-lg text-gray-700">
                    <strong>Klientų aptarnavimas:</strong> Greitas atsakymas į aptarnavimo užklausą gali nusivylusį klientą paversti ištikimu gerbėju. Pavėluokite per ilgai — rizikuojate grąžinimu ar neigiamu atsiliepimų.
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Gyvas pokalbis ar chatbotai:</strong> Atsakymas per sekundes išlaiko pirkėjus jūsų svetainėje, o ne leidžia jiems išeiti pas konkurentą.
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Palikti krepšeliai:</strong> Tos pačios dienos automatiniai priminimai fiksuoja ketinimą, kol jis dar šviežias — laukiant dienų prarandami pardavimai.
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  Nesvarbu, ar tai didelio biudžeto pardavimų skambutis, ar paprastas produkto klausimas iš internetinio pirkėjo — principas tas pats: greitesni atsakymai lygūs didesnėms konversijoms.
                </p>
              </motion.section>

              {/* Implementation */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kaip Įmonės Įgyvendina Speed to Lead</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Laimintys komandos nepalieka greičio atsitiktinumui — jie jį įtraukia į savo procesus:
                </p>
                <ul className="space-y-6">
                  <li className="text-lg text-gray-700">
                    <strong>Nustatykite griežtus SLA:</strong> Daugelis įmonių nustato taisyklę, pvz., „Visi lead&apos;ai ar užklausos turi būti kontaktuojami per 5 minutes.&rdquo;
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Automatizuokite pirmą kontaktą:</strong> Naudokite chatbotus, SMS ar greitus el. pašto atsakymus, kad įtrauktumėte lead&apos;ą, kol jis dar karštas — dar prieš tai, kai pardavimų atstovas net pakelia ragelį.
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Nukreipkite lead&apos;us akimirksniu:</strong> Naudokite CRM automatizavimą, kad lead&apos;ai būtų siunčiami tinkamam atstovui vos tik jie ateina.
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Matuokite atsako laiką:</strong> Stebėkite laiką iki pirmojo atsakymo kaip pagrindinį pardavimų ir klientų sėkmės rodiklį.
                  </li>
                </ul>
              </motion.section>

              {/* Why 2025 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Kodėl Speed to Lead Svarbesnis Nei Bet Kada</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  2025 m. klientų lūkesčiai yra labai aukšti. Dėl momentinės komunikacijos (pasiuntiniai, programėlės, socialiniai tinklai) žmonės tikisi, kad įmonės atsakys akimirksniu — nesvarbu, ar jie prašo demonstracijos, ar klausia, ar jūsų produktas siunčiamas tarptautiniu mastu.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Jei ne jūs — tai padarys kitas.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Štai kodėl speed to lead gerinimas nėra tik pardavimų optimizavimas — tai konkurencinis griovys visoje kliento kelionėje.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Išvados</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Kiekviena sąveika reiškia realų pajamų potencialą — nuo kvalifikuoto pardavimų lead&apos;o iki vieno nusivylusio kliento, prašančio pagalbos.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Tačiau tas potencialas išnyksta, jei per ilgai laukiate.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Jei norite uždaryti daugiau sandorių ir pagerinti B2C konversijas neišleidžiant daugiau reklamai, prisiminkite tai:
                </p>
                <blockquote className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 text-xl font-semibold text-gray-900 italic mb-6">
                  &ldquo;Atsakykite greičiau nei jūsų konkurentai. Tai paprasta, galinga ir įrodyta.&rdquo;
                </blockquote>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Norite pamatyti, kurie automatizavimai sutaupytų jūsų verslui daugiausiai laiko?</strong>
                </p>
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
                    Pasirengę Paspartinti Savo Verslą?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Sužinokite, kaip automatizavimas gali pakeisti jūsų klientų aptarnavimo greitį
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <motion.a
                      href={isLithuanian ? '/lt/kontaktai' : '/kontaktai'}
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Rezervuoti Nemokamą Konsultaciją
                      <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={isLithuanian ? '/lt/ai-agentai-automatizacijos' : '/ai-agentai-automatizacijos'}
                      className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Peržiūrėti Automatizavimo Paslaugas
                    </motion.a>
                  </div>
                  <p className="text-sm text-blue-200">
                    ⚡ 30 minučių skambutis • 🎯 Individuali strategija • 💰 Be įsipareigojimų
                  </p>
                </div>
              </motion.section>
            </>
          ) : (
            /* ===================== ENGLISH CONTENT ===================== */
            <>
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 mt-12"
              >
                <p className="text-xl leading-relaxed text-gray-700 mb-6 font-semibold">
                  When it comes to turning leads into paying customers, speed is the ultimate unfair advantage.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  The moment a potential customer fills out a form, downloads a resource, or starts a checkout, their attention and intent are at their peak.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  If your business doesn&apos;t respond quickly, that interest fades, distractions creep in, and competitors might win the deal instead.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  This is where the concept of <strong>speed to lead</strong> comes in.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Speed to Lead?</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  <strong>Speed to lead</strong> (sometimes called time to lead or time to contact) refers to how quickly your team responds to a new lead or inquiry.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                  <p className="font-semibold text-amber-900 mb-4">Research shows that:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-amber-800">
                      <span className="mt-1 text-amber-500">•</span>
                      <span>Reaching out within <strong>5 minutes</strong> of a lead&apos;s action can increase conversion rates <strong>up to 8x</strong> compared to waiting an hour</span>
                    </li>
                    <li className="flex items-start gap-3 text-amber-800">
                      <span className="mt-1 text-amber-500">•</span>
                      <span>Waiting even 30 minutes dramatically lowers your chances of engagement</span>
                    </li>
                    <li className="flex items-start gap-3 text-amber-800">
                      <span className="mt-1 text-amber-500">•</span>
                      <span>After 24 hours, the odds of making contact or converting the lead drop off almost completely</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Why? Because interest is a perishable resource.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  The second someone raises their hand, they&apos;re thinking about solving a problem. Hours later, they&apos;ve either cooled off or someone else has already answered their call.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Own Experience with Timing</h2>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                  <p className="text-lg text-amber-900">
                    Coming from an email marketing background, I&apos;ve seen the exact same principle play out. For example, in abandoned cart flows, the first two emails sent within the first 24 hours generate about <strong>50% of all the revenue from the entire sequence</strong>.
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  The remaining emails, sent on days 2–5, produce the other half. In other words — the faster you act, the bigger the return.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Whether it&apos;s sales calls, automated emails, or customer support responses, timing isn&apos;t just important — it&apos;s everything.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Hormozi Example</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  Here&apos;s a great real-world example from Alex Hormozi that perfectly illustrates the power of speed to lead:
                </p>
                <div className="relative w-full mb-8" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/2oSh0nDmBIM"
                    title="Alex Hormozi Speed to Lead"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                  />
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                  The takeaway? Even if you only have a handful of leads per day, treating them like gold and responding instantly can bring in millions in revenue.
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Speed to Lead in B2C</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  It&apos;s not only about B2B sales. In B2C, timing drives conversions just as strongly:
                </p>
                <ul className="space-y-6 mb-6">
                  <li className="text-lg text-gray-700">
                    <strong>Customer support:</strong> Answering a support request instantly can turn a frustrated customer into a loyal fan. Wait too long, and you risk a refund or negative review.
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Live chat or chatbots:</strong> Responding within seconds keeps shoppers engaged on your website instead of bouncing to a competitor.
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Abandoned carts:</strong> Automated reminders sent the same day capture intent while it&apos;s fresh — waiting days means lost sales.
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700">
                  Whether it&apos;s a high-ticket sales call or a simple product question from an online shopper, the principle is the same: faster responses equal higher conversions.
                </p>
              </motion.section>

              {/* Implementation */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Companies Implement Speed to Lead</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Winning teams don&apos;t leave speed to chance — they build it into their processes:
                </p>
                <ul className="space-y-6">
                  <li className="text-lg text-gray-700">
                    <strong>Set strict SLAs:</strong> Many companies set a rule like &ldquo;All leads or inquiries must be contacted within 5 minutes.&rdquo;
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Automate first contact:</strong> Use chatbots, SMS, or instant email replies to engage the lead while they&apos;re still hot, before a human rep even picks up the phone.
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Route leads instantly:</strong> Use CRM automation to send leads to the right rep the second they come in.
                  </li>
                  <li className="text-lg text-gray-700">
                    <strong>Measure response time:</strong> Track time-to-first-response as a key sales and customer success metric.
                  </li>
                </ul>
              </motion.section>

              {/* Why Speed to Lead Matters More Than Ever */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Speed to Lead Matters More Than Ever</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  In 2025, customer expectations are sky-high. Thanks to instant communication (messengers, apps, social media), people expect businesses to respond instantly — whether they&apos;re requesting a demo or asking if your product ships internationally.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  If you don&apos;t, someone else will.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  That&apos;s why improving your speed to lead isn&apos;t just a sales optimization — it&apos;s a competitive moat across the entire customer journey.
                </p>
              </motion.section>

              {/* Final Thoughts */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Every interaction represents real revenue potential — from a qualified sales lead to a single frustrated customer asking for help.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  But that potential vanishes if you wait too long.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  If you want to close more deals and improve B2C conversions without spending more on ads, remember this:
                </p>
                <blockquote className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 text-xl font-semibold text-gray-900 italic mb-6">
                  &ldquo;Respond faster than your competitors. It&apos;s simple, powerful, and proven.&rdquo;
                </blockquote>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Want to see which automations would save your business the most time?</strong>
                </p>
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
                    Ready to Speed Up Your Business?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Discover how automation can transform your customer service speed
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <motion.a
                      href="/kontaktai"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book a Free Consultation
                      <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="/ai-agentai-automatizacijos"
                      className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300 text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      See Our Automation Services
                    </motion.a>
                  </div>
                  <p className="text-sm text-blue-200">
                    ⚡ 30-minute call • 🎯 Custom strategy • 💰 No commitment required
                  </p>
                </div>
              </motion.section>
            </>
          )}

        </article>
      </main>

      <Footer />
    </div>
  );
}
