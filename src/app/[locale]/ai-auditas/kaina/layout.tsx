import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const path = '/ai-auditas/kaina';

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
      title: 'AI audito kaina: paketai, apimtis ir kas įeina | Promptive',
      description: 'AI audito kainodara: nuo €497. Sužinokite, kas įeina į kiekvieną paketą, kokia apimtis ir kokių rezultatų tikėtis. Skaidri kainodara be paslėptų mokesčių.',
      openGraph: {
        title: 'AI audito kaina: paketai, apimtis ir kas įeina',
        description: 'AI audito kainodara: nuo €497. Skaidri kainodara be paslėptų mokesčių.',
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
    title: 'AI Audit Pricing: Packages, Scope & What\'s Included | Promptive',
    description: 'AI audit pricing from €497. Learn what\'s included in each package, the scope, and expected results. Transparent pricing with no hidden fees.',
    openGraph: {
      title: 'AI Audit Pricing: Packages, Scope & What\'s Included',
      description: 'AI audit pricing from €497. Transparent pricing with no hidden fees.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: alternatesConfig,
  };
}

export default function AIAuditasKainaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
