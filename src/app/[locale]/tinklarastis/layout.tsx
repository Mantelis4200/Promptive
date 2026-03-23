import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  // Common hreflang configuration - defined once
  const alternatesConfig = {
    canonical: locale === 'lt' ? `${baseUrl}/lt/blog` : `${baseUrl}/blog`,
    languages: {
      'en': `${baseUrl}/blog`,
      'lt': `${baseUrl}/lt/blog`,
      'x-default': `${baseUrl}/blog`
    },
  };
  
  if (locale === 'lt') {
    return {
      title: 'AI Automatizavimo Blogas | Promptive - Patarimai, Atvejų Studijos ir Naujienos',
      description: 'Skaitykite Promptive AI automatizavimo blogą. AI chatbotų vadovai, verslo procesų automatizavimo patarimai, atvejų studijos ir naujausi dirbtinio intelekto sprendimai verslui.',
      keywords: 'AI automatizavimo blogas Lietuva, chatbotų vadovai, verslo procesų automatizavimas, AI atvejų studijos, dirbtinio intelekto naujienos, AI patarimai verslui',
      openGraph: {
        title: 'AI Automatizavimo Blogas - Promptive Naujienos ir Vadovai',
        description: 'Sužinokite apie naujausius AI automatizavimo sprendimus, chatbotų kūrimo patarimus ir verslo procesų optimizavimą.',
        url: `${baseUrl}/lt/blog`,
        images: [
          {
            url: `${baseUrl}/images/logo.svg`,
            width: 1200,
            height: 630,
            alt: 'Promptive AI automatizavimo blogas',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI Automatizavimo Blogas - Promptive',
        description: 'Patarimai, atvejų studijos ir AI naujienos verslui.',
        images: [`${baseUrl}/images/logo.svg`],
      },
      alternates: alternatesConfig,
    };
  }

  return {
    title: 'AI Automation Blog | Promptive - Tips, Case Studies & Industry News',
    description: 'Read Promptive AI automation blog. AI chatbot guides, business process automation tips, case studies, and latest artificial intelligence solutions for business.',
    keywords: 'AI automation blog, chatbot guides, business process automation tips, AI case studies, artificial intelligence news, AI business solutions, automation insights',
    openGraph: {
      title: 'AI Automation Blog - Promptive Insights & Guides',
      description: 'Discover the latest AI automation solutions, chatbot development tips, and business process optimization strategies.',
      url: `${baseUrl}/blog`,
      images: [
        {
          url: `${baseUrl}/images/logo.svg`,
          width: 1200,
          height: 630,
          alt: 'Promptive AI automation blog',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Automation Blog - Promptive',
      description: 'Tips, case studies, and AI insights for business.',
      images: [`${baseUrl}/images/logo.svg`],
    },
    alternates: alternatesConfig,
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}