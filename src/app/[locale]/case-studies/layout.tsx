import type { Metadata } from 'next';

const baseUrl = 'https://promptive.agency';
const path = '/case-studies';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const alternatesConfig = {
    canonical: locale === 'lt' ? `${baseUrl}/lt${path}` : `${baseUrl}${path}`,
    languages: {
      'en': `${baseUrl}${path}`,
      'lt': `${baseUrl}/lt${path}`,
      'x-default': `${baseUrl}${path}`,
    },
  };

  if (locale === 'lt') {
    return {
      title: 'Projektų atvejai — AI chatbotai ir svetainės su rezultatais | Promptive',
      description: 'Realūs verslo rezultatai: AI chatbotas per 6 savaites apdorojo 454+ užklausas, pašalintas rankinis darbas su kainų skaičiavimais, padidėjusios konversijos. Keletas projektų iš mūsų portfelio.',
      keywords: ['AI chatbotas rezultatai', 'svetainių kūrimas atvejai', 'verslo automatizavimas Lietuva', 'AI agentūra portfolio', 'chatbot sėkmės istorija', 'AI automatizavimas Lietuva'],
      openGraph: {
        title: 'Projektų atvejai — AI chatbotai ir svetainės su rezultatais | Promptive',
        description: 'Realūs verslo rezultatai: 454+ užklausos per 6 savaites, pašalintas rankinis darbas, padidėjusios konversijos. Keletas projektų iš mūsų portfelio.',
        url: `${baseUrl}/lt${path}`,
        siteName: 'Promptive',
        locale: 'lt_LT',
        type: 'website',
        images: [{ url: `${baseUrl}/images/og-default.jpg`, width: 1200, height: 630, alt: 'Promptive — AI automatizavimo agentūra' }],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Projektų atvejai | Promptive',
        description: 'Realūs AI chatbotų ir svetainių kūrimo rezultatai Lietuvos verslams.',
      },
      alternates: alternatesConfig,
    };
  }

  return {
    title: 'Case Studies — AI Chatbot & Website Results | Promptive',
    description: 'Real results from real businesses: AI chatbot handled 454+ support tickets in 6 weeks, eliminated manual quote calculations, increased purchase conversions. Selected projects from our portfolio.',
    keywords: ['AI chatbot case study', 'website development results', 'business automation Lithuania', 'AI agency portfolio', 'chatbot ROI', 'AI automation results'],
    openGraph: {
      title: 'Case Studies — AI Chatbot & Website Results | Promptive',
      description: 'Real results: 454+ tickets in 6 weeks, zero manual quote calculations, increased conversions. Selected projects from our portfolio.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
      images: [{ url: `${baseUrl}/images/og-default.jpg`, width: 1200, height: 630, alt: 'Promptive — AI Automation Agency' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Case Studies | Promptive',
      description: 'Real AI chatbot and website results for businesses.',
    },
    alternates: alternatesConfig,
  };
}

const caseStudiesSchema = (locale: string) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: locale === 'lt' ? 'Projektų atvejai | Promptive' : 'Case Studies | Promptive',
  description: locale === 'lt'
    ? 'Keletas projektų iš Promptive portfelio — realūs AI chatbotų ir svetainių kūrimo rezultatai.'
    : 'Selected projects from the Promptive portfolio — real AI chatbot and website development results.',
  url: locale === 'lt' ? `${baseUrl}/lt${path}` : `${baseUrl}${path}`,
  inLanguage: locale === 'lt' ? 'lt' : 'en',
  publisher: {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Promptive',
    url: baseUrl,
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 5,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'lt'
          ? 'El. prekybos AI chatbotas: 454 užklausos per 6 savaites — Rideon'
          : 'E-commerce AI Chatbot: 454 Tickets in 6 Weeks — Rideon',
        description: locale === 'lt'
          ? 'AI chatbotas per 6 savaites apdorojo 454 unikalias klientų užklausas, atsakant per mažiau nei 5 sekundes, 24/7.'
          : 'AI chatbot handling 454 unique customer tickets in 6 weeks with under 5-second response time, available 24/7.',
        url: locale === 'lt' ? `${baseUrl}/lt${path}` : `${baseUrl}${path}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'lt'
          ? 'Išmanus AI chatbotas su gyvomis atsargų patikromis ir kainų skaičiuokle — Lentvario Mediena'
          : 'Smart AI Chatbot with Live Inventory & Quote Calculator — Lentvario Mediena',
        description: locale === 'lt'
          ? 'Sandėlio valdymo sistema ir chatbotas, kuris tikrina atsargas realiuoju laiku ir skaičiuoja kainas automatiškai.'
          : 'Inventory management system and chatbot performing live stock checks and automatic price calculations.',
        url: locale === 'lt' ? `${baseUrl}/lt${path}` : `${baseUrl}${path}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: locale === 'lt'
          ? 'Konversijai orientuota svetainė su AI vizualais — Lentvario Mediena'
          : 'Conversion-First Website with AI Visuals — Lentvario Mediena',
        description: locale === 'lt'
          ? 'Next.js svetainė su SEO optimizuotais tekstais kiekviename puslapyje ir AI generuotais vizualais.'
          : 'Next.js website with SEO-optimised copy on every page and AI-generated visuals.',
        url: locale === 'lt' ? `${baseUrl}/lt${path}` : `${baseUrl}${path}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: locale === 'lt'
          ? 'Didelės konversijos svetainė žaidimų produktui — Cheats-pro'
          : 'High-Conversion Website for a Gaming Product — Cheats-pro',
        description: locale === 'lt'
          ? 'Aiški, rezultatyvi struktūra su kainų palyginimo eiga ir SEO optimizavimu žaidimų auditorijai.'
          : 'Clear, performance-focused structure with pricing comparison flow and SEO for a gaming audience.',
        url: locale === 'lt' ? `${baseUrl}/lt${path}` : `${baseUrl}${path}`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: locale === 'lt'
          ? 'El. parduotuvė, paremta tėvų psichologija — Magnimoo'
          : 'eCommerce Website Focused on Parent Psychology — Magnimoo',
        description: locale === 'lt'
          ? 'Naudos orientuota el. parduotuvė su pasitikėjimo elementais ir pirkimo srautu, skirtu tėvams.'
          : 'Benefit-driven eCommerce store with trust elements and purchase flow optimised for parents.',
        url: locale === 'lt' ? `${baseUrl}/lt${path}` : `${baseUrl}${path}`,
      },
    ],
  },
});

export default function CaseStudiesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema(params.locale)) }}
      />
      {children}
    </>
  );
}
