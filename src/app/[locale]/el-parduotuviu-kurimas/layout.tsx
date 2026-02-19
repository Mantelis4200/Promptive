import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const path = '/el-parduotuviu-kurimas';

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
      title: 'El. parduotuvės kūrimas: mokėjimai, pristatymas, SEO | Promptive',
      description: 'El. parduotuvių kūrimas su mokėjimų integracija, pristatymo sistema ir SEO optimizavimu. Pardavimų automatizavimas ir CRM integracija.',
      openGraph: {
        title: 'El. parduotuvės kūrimas: mokėjimai, pristatymas, SEO',
        description: 'El. parduotuvių kūrimas su mokėjimais, pristatymu ir SEO.',
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
    title: 'E-commerce Development: Payments, Shipping, SEO | Promptive',
    description: 'E-commerce development with payment integration, shipping system, and SEO optimization. Sales automation and CRM integration.',
    openGraph: {
      title: 'E-commerce Development: Payments, Shipping, SEO',
      description: 'E-commerce development with payments, shipping, and SEO.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: alternatesConfig,
  };
}

export default function ElParduotuviuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
