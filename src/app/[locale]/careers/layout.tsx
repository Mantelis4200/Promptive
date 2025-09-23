import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  // Common hreflang configuration - defined once
  const alternatesConfig = {
    canonical: locale === 'lt' ? `${baseUrl}/lt/careers` : `${baseUrl}/careers`,
    languages: {
      'en': `${baseUrl}/careers`,
      'lt': `${baseUrl}/lt/careers`,
      'x-default': `${baseUrl}/careers`
    },
  };
  
  if (locale === 'lt') {
    return {
      title: 'Karjera Promptive | Prisijunk prie AI Automatizavimo Komandos Lietuvoje',
      description: 'Ieškome talentingų AI inžinierių, programuotojų ir pardavimo specialistų. Nuotolinis darbas, konkurencinga alga, šiuolaiškos technologijos. Aplikuok dabar!',
      keywords: 'karjera AI srityje Lietuva, darbas AI automatizavimo srityje, AI inžinierius darbo pasiūlymai, programuotojas darbas nuotoliniu būdu, tech karjera Vilnius',
      openGraph: {
        title: 'Karjera Promptive - Prisijunk prie AI Automatizavimo Komandos',
        description: 'Ieškome talentingų specialistų AI automatizavimo srityje. Nuotolinis darbas su konkurencinga alga.',
        url: `${baseUrl}/lt/careers`,
        images: [
          {
            url: `${baseUrl}/images/logo.svg`,
            width: 1200,
            height: 630,
            alt: 'Promptive karjera - AI automatizavimo komanda',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Karjera Promptive - AI Automatizavimas',
        description: 'Prisijunk prie mūsų AI automatizavimo komandos.',
        images: [`${baseUrl}/images/logo.svg`],
      },
      alternates: alternatesConfig,
    };
  }

  return {
    title: 'Careers at Promptive | Join Our AI Automation Team',
    description: 'Looking for talented AI engineers, developers and sales specialists. Remote work, competitive salary, modern technologies. Apply now!',
    keywords: 'AI careers, AI engineer jobs, remote developer jobs, chatbot company careers, tech jobs, AI automation careers, machine learning jobs',
    openGraph: {
      title: 'Careers at Promptive - Join Our AI Automation Team',
      description: 'Looking for talented specialists in AI automation. Remote work with competitive salary.',
      url: `${baseUrl}/careers`,
      images: [
        {
          url: `${baseUrl}/images/logo.svg`,
          width: 1200,
          height: 630,
          alt: 'Promptive careers - AI automation team',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Careers at Promptive - AI Automation',
      description: 'Join our AI automation team.',
      images: [`${baseUrl}/images/logo.svg`],
    },
    alternates: alternatesConfig,
  };
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}