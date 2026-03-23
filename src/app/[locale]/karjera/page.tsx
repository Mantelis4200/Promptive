'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const params = useParams();
  const locale = params?.locale as string || 'en';
  const isLithuanian = locale === 'lt';

  useEffect(() => {
    // Force scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const content = isLithuanian ? {
    hero: {
      title: "Prisijunk prie Promptive komandos",
      subtitle: "Kartu kuriam AI automatizavimo sprendimus, kurie keičia įmones visame pasaulyje"
    },
    culture: {
      title: "Mūsų kultūra",
      subtitle: "Mes tikime, kad talentingi žmonės kuria geriausius sprendimus",
      values: [
        {
          title: "Inovacijos",
          description: "Nuolat ieškome naujų būdų, kaip AI gali padėti įmonėms augti ir klestėti."
        },
        {
          title: "Bendradarbiavimas", 
          description: "Kartu mes stipresni. Vertiname komandos darbą ir atvirą komunikaciją."
        },
        {
          title: "Augimas",
          description: "Investuojame į savo komandos augimą ir mokymąsi naujų technologijų."
        },
        {
          title: "Poveikis",
          description: "Kuriame sprendimus, kurie daro tikrą poveikį mūsų klientų verslams."
        }
      ]
    },
    benefits: {
      title: "Kodėl verta dirbti su mumis",
      items: [
        {
          title: "Konkurencinga alga",
          description: "Mokame rinkos vidurkį viršijančias algas ir premiją už rezultatus"
        },
        {
          title: "Nuotolinis darbas",
          description: "Galimybė dirbti iš bet kurios pasaulio vietos su lankstiu grafiku"
        },
        {
          title: "Profesionalus augimas",
          description: "Nemokamos konferencijos, kursai ir sertifikacijos"
        },
        {
          title: "Šiuolaikiškos technologijos",
          description: "Dirbame su naujausiais AI įrankiais ir technologijomis"
        },
        {
          title: "Sveikata ir gerovė",
          description: "Sveikatos draudimas ir gerovės programos"
        },
        {
          title: "Startup atmosfera",
          description: "Dinamiška aplinka, kurioje kiekvienas balsa"
        }
      ]
    },
    positions: {
      title: "Atviros pozicijos",
      subtitle: "Šiuo metu ieškome talentingų specialistų šiose srityse:",
      jobs: [
        {
          title: "Pardavimų atstovas",
          location: "Nuotoliniu būdu",
          type: "Pilnas etatas", 
          description: "Padėk mums augti ir rasti naujus klientus, kurie nori automatizuoti savo verslo procesus.",
          requirements: [
            "2+ metų B2B pardavimų patirtis",
            "Technologijų sektoriu patirtis",
            "Puikus lietuvių ir anglų kalbų mokėjimas",
            "CRM sistemų naudojimo žinios"
          ]
        }
      ]
    },
    application: {
      title: "Kaip aplikuoti?",
      description: "Nematai tinkamos pozicijos, bet nori prisijungti prie mūsų komandos?",
      steps: [
        "Parašyk mums laišką adresu careers@promptive.agency",
        "Pridėk savo CV ir motyvacijos laišką", 
        "Papasakok, kaip galėtum prisidėti prie mūsų misijos",
        "Lauksi atsakymo per 48 valandas"
      ]
    }
  } : {
    hero: {
      title: "Join the Promptive Team", 
      subtitle: "Together we're building AI automation solutions that transform businesses worldwide"
    },
    culture: {
      title: "Our Culture",
      subtitle: "We believe talented people create the best solutions",
      values: [
        {
          title: "Innovation",
          description: "We constantly explore new ways AI can help businesses grow and thrive."
        },
        {
          title: "Collaboration",
          description: "Together we're stronger. We value teamwork and open communication."
        },
        {
          title: "Growth",
          description: "We invest in our team's development and learning of new technologies."
        },
        {
          title: "Impact",
          description: "We create solutions that make a real difference to our clients' businesses."
        }
      ]
    },
    benefits: {
      title: "Why work with us",
      items: [
        {
          title: "Competitive salary",
          description: "We pay above market average with performance bonuses"
        },
        {
          title: "Remote work",
          description: "Work from anywhere in the world with flexible hours"
        },
        {
          title: "Professional growth",
          description: "Free conferences, courses and certifications"
        },
        {
          title: "Modern technology",
          description: "Work with the latest AI tools and technologies"
        },
        {
          title: "Health & wellness",
          description: "Health insurance and wellness programs"
        },
        {
          title: "Startup atmosphere",
          description: "Dynamic environment where every voice matters"
        }
      ]
    },
    positions: {
      title: "Open positions",
      subtitle: "We're currently looking for talented specialists in these areas:",
      jobs: [
        {
          title: "Sales Representative",
          location: "Remote",
          type: "Full-time",
          description: "Help us grow and find new clients who want to automate their business processes.",
          requirements: [
            "2+ years B2B sales experience",
            "Technology sector experience",
            "Excellent English proficiency",
            "CRM system usage knowledge"
          ]
        }
      ]
    },
    application: {
      title: "How to apply?",
      description: "Don't see a suitable position but want to join our team?",
      steps: [
        "Send us an email at careers@promptive.agency",
        "Include your CV and cover letter",
        "Tell us how you could contribute to our mission", 
        "Expect a response within 48 hours"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto mb-12">
              {content.hero.subtitle}
            </p>
            
            {/* Team Photo - Using background image as placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-purple-500 to-blue-500"
            >
              <div className="flex items-center justify-center h-64 text-white">
                <div className="text-center">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-semibold">
                    {isLithuanian ? 'Mūsų komanda' : 'Our Team'}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content.culture.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.culture.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.culture.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content.benefits.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.benefits.items.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content.positions.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {content.positions.subtitle}
            </p>
          </motion.div>

          <div className="space-y-8">
            {content.positions.jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center">
                        ⏰ {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{job.description}</p>
                  </div>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 whitespace-nowrap lg:ml-8">
                    {isLithuanian ? 'Aplikuoti' : 'Apply Now'}
                  </button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {isLithuanian ? 'Reikalavimai:' : 'Requirements:'}
                  </h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content.application.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {content.application.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {content.application.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-600">{step}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="mailto:careers@promptive.agency"
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200"
              >
                {isLithuanian ? 'Rašyk mums dabar' : 'Contact Us Now'}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}