import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const path = '/verslo-procesu-automatizavimas';

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
      title: 'Verslo Procesų Automatizavimas su AI | Promptive',
      description: 'Verslo procesų automatizavimas su AI Lietuvoje. Automatizuojame el. paštą, ataskaitas, CRM ir pasikartojančius darbus. Taupykite 20h/sav. Nemokama konsultacija →',
      openGraph: {
        title: 'Verslo Procesų Automatizavimas su AI | Promptive',
        description: 'Verslo procesų automatizavimas su AI. Automatizuojame el. paštą, ataskaitas, CRM ir pasikartojančius darbus. Taupykite 20h/sav.',
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
    title: 'Business Process Automation with AI | Promptive',
    description: 'Business process automation with AI. We automate email, reports, CRM and repetitive tasks. Save 20h/week. Free consultation →',
    openGraph: {
      title: 'Business Process Automation with AI | Promptive',
      description: 'Business process automation with AI. We automate email, reports, CRM and repetitive tasks. Save 20h/week.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: alternatesConfig,
  };
}

export default function VersloProcesuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
