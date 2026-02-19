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
      title: 'Verslo procesų automatizavimas su AI ir n8n | Promptive',
      description: 'Verslo procesų automatizavimas su n8n, Make ir Zapier. API integracijos, CRM sinchronizacija, duomenų apdorojimas. Nemokama konsultacija.',
      openGraph: {
        title: 'Verslo procesų automatizavimas su AI ir n8n',
        description: 'Automatizuokite verslo procesus su n8n, Make ir Zapier. Nemokama konsultacija.',
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
    title: 'Business Process Automation with AI & n8n | Promptive',
    description: 'Business process automation with n8n, Make, and Zapier. API integrations, CRM sync, data processing. Free consultation.',
    openGraph: {
      title: 'Business Process Automation with AI & n8n',
      description: 'Automate business processes with n8n, Make, and Zapier. Free consultation.',
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
