import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const path = '/ai-auditas';

  const alternatesConfig = {
    canonical: locale === 'lt' ? `${baseUrl}/lt${path}` : `${baseUrl}${path}`,
    languages: {
      'en': `${baseUrl}${path}`,
      'lt': `${baseUrl}/lt${path}`,
      'x-default': `${baseUrl}${path}`,
    },
  };

  if (locale === 'lt') {
    return {
      title: 'AI Auditas Verslui – Automatizavimo Galimybės | Promptive',
      description:
        'Nemokamas AI auditas verslui. Išanalizuosime jūsų procesus ir pasakysime, kur AI gali taupyti laiką ir pinigus. Nemokama konsultacija →',
      openGraph: {
        title: 'AI Auditas Verslui – Automatizavimo Galimybės | Promptive',
        description:
          'Nemokamas AI auditas verslui. Išanalizuosime jūsų procesus ir pasakysime, kur AI gali taupyti laiką ir pinigus.',
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
    title: 'AI Audit for Business – Find Automation Wins | Promptive',
    description:
      'Free AI audit for your business. We analyze your processes and show where AI can save time and money. Book a free call →',
    openGraph: {
      title: 'AI Audit for Business – Find Automation Wins | Promptive',
      description:
        'Free AI audit for your business. We analyze your processes and show where AI can save time and money.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: alternatesConfig,
  };
}

export default function AIAuditasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
