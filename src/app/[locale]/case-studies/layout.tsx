import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const path = '/case-studies';

  const alternatesConfig = {
    canonical: locale === 'lt' ? `${baseUrl}/lt${path}` : `${baseUrl}${path}`,
    languages: {
      'en': `${baseUrl}${path}`,
      'lt': `${baseUrl}/lt${path}`,
      'x-default': `${baseUrl}${path}`
    },
  };

  if (locale === 'lt') {
    return {
      title: 'Case studies: automatizacijos ir svetainės (LT rinka) | Promptive',
      description: 'Realūs AI automatizavimo ir svetainių kūrimo pavyzdžiai Lietuvos rinkai. Klientų sėkmės istorijos su konkrečiais rezultatais.',
      openGraph: {
        title: 'Case studies: automatizacijos ir svetainės (LT rinka)',
        description: 'Realūs AI automatizavimo ir svetainių kūrimo pavyzdžiai su konkrečiais rezultatais.',
        url: `${baseUrl}/lt${path}`,
        siteName: 'Promptive',
        locale: 'lt_LT',
        type: 'website',
      },
      twitter: { card: 'summary_large_image' },
      alternates: alternatesConfig,
    };
  }

  return {
    title: 'Case Studies: Automations & Websites (LT Market) | Promptive',
    description: 'Real AI automation and website development examples for the Lithuanian market. Client success stories with concrete results.',
    openGraph: {
      title: 'Case Studies: Automations & Websites (LT Market)',
      description: 'Real AI automation and website development examples with concrete results.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: alternatesConfig,
  };
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
