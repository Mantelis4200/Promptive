import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const path = '/landing-puslapiai';

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
      title: 'Landing puslapio kūrimas: daugiau užklausų ir konversijų | Promptive',
      description: 'Landing puslapių kūrimas konversijoms. Greitas paleidimas per 24–72 val., A/B testavimas, SEO optimizavimas ir integracija su CRM.',
      openGraph: {
        title: 'Landing puslapio kūrimas: daugiau užklausų ir konversijų',
        description: 'Konversijai optimizuoti landing puslapiai. Greitas paleidimas per 24–72 val.',
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
    title: 'Landing Page Development: More Leads & Conversions | Promptive',
    description: 'Landing page development for conversions. Fast launch in 24-72h, A/B testing, SEO optimization and CRM integration.',
    openGraph: {
      title: 'Landing Page Development: More Leads & Conversions',
      description: 'Conversion-optimized landing pages. Fast launch in 24-72h.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: alternatesConfig,
  };
}

export default function LandingPuslapiaiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
