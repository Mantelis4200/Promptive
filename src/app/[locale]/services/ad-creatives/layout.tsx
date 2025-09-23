import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  // Common hreflang configuration - defined once
  const alternatesConfig = {
    canonical: locale === 'lt' ? `${baseUrl}/lt/services/ad-creatives` : `${baseUrl}/services/ad-creatives`,
    languages: {
      'en': `${baseUrl}/services/ad-creatives`,
      'lt': `${baseUrl}/lt/services/ad-creatives`,
      'x-default': `${baseUrl}/services/ad-creatives`
    },
  };
  
  if (locale === 'lt') {
    return {
      title: 'AI Reklamos Kūrimas | Automatinis Reklaminių Tekstų Generavimas - Promptive',
      description: 'Automatiškai kurkite efektyvius reklamos tekstus su AI. Facebook, Google, LinkedIn reklamos, banner\'iai, el. pašto kampanijos. Padidinkite konversijas iki 40%.',
      keywords: 'AI reklamos kūrimas Lietuva, automatinis reklaminių tekstų generavimas, Facebook reklamos AI, Google Ads tekstai, reklamos optimizavimas',
      openGraph: {
        title: 'AI Reklamos Kūrimas - Automatinis Tekstų Generavimas',
        description: 'Kurkite efektyvius reklamos tekstus automatiškai su AI technologijomis. Facebook, Google, LinkedIn kampanijos.',
        url: `${baseUrl}/lt/services/ad-creatives`,
        images: [
          {
            url: `${baseUrl}/images/ad-creatives-widget.webp`,
            width: 1200,
            height: 630,
            alt: 'AI reklamos kūrimas automatiškai',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI Reklamos Kūrimas Lietuvoje',
        description: 'Automatiškai kurkite efektyvius reklamos tekstus.',
        images: [`${baseUrl}/images/ad-creatives-widget.webp`],
      },
      alternates: alternatesConfig,
    };
  }

  return {
    title: 'AI Ad Creative Generation | Automated Ad Copy & Banners - Promptive',
    description: 'Generate high-converting ad creatives automatically with AI. Facebook ads, Google Ads, LinkedIn campaigns, banners, and email creatives. Increase conversions up to 40%.',
    keywords: 'AI ad creative generation, automated ad copy, Facebook ads AI, Google Ads automation, creative optimization, AI marketing copy, banner generation',
    openGraph: {
      title: 'AI Ad Creative Generation - Automated Ad Copy & Banners',
      description: 'Create high-converting ad creatives automatically with AI. Facebook, Google, LinkedIn campaigns and more.',
      url: `${baseUrl}/services/ad-creatives`,
      images: [
        {
          url: `${baseUrl}/images/ad-creatives-widget.webp`,
          width: 1200,
          height: 630,
          alt: 'AI ad creative generation services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Ad Creative Generation Services',
      description: 'Create high-converting ads automatically with AI.',
      images: [`${baseUrl}/images/ad-creatives-widget.webp`],
    },
    alternates: alternatesConfig,
  };
}

export default function AdCreativesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}