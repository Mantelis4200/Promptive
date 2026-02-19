import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const path = '/svetainiu-kurimas';

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
      title: 'Svetainių kūrimas: greitas startas + SEO + integracijos | Promptive',
      description: 'Interneto svetainių kūrimas su SEO optimizavimu ir integracijomis. Landing puslapiai, verslo svetainės, el. parduotuvės. Svetainė per 24 val. įmanoma.',
      openGraph: {
        title: 'Svetainių kūrimas: greitas startas + SEO + integracijos',
        description: 'Interneto svetainių kūrimas su SEO ir integracijomis. Greitas startas nuo 24 val.',
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
    title: 'Website Development: Fast Launch + SEO + Integrations | Promptive',
    description: 'Website development with SEO optimization and integrations. Landing pages, business websites, e-commerce. Website in 24h possible.',
    openGraph: {
      title: 'Website Development: Fast Launch + SEO + Integrations',
      description: 'Website development with SEO and integrations. Fast launch from 24h.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: alternatesConfig,
  };
}

export default function SvetainiuKurimasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
