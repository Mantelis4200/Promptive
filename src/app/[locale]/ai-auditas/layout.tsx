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
      title: 'AI auditas verslui: automatizacijų planas ir ROI | Promptive',
      description:
        'AI auditas verslui per 7-14 dienų. Nustatome automatizavimo galimybes, apskaičiuojame ROI ir pateikiame įgyvendinimo planą. Nemokama konsultacija.',
      openGraph: {
        title: 'AI auditas verslui: automatizacijų planas ir ROI',
        description:
          'Nustatome automatizavimo galimybes, apskaičiuojame ROI ir pateikiame įgyvendinimo planą. Nemokama konsultacija.',
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
    title: 'AI Audit for Business: Automation Plan & ROI | Promptive',
    description:
      'AI audit for business in 7-14 days. We identify automation opportunities, calculate ROI, and deliver an implementation plan. Free consultation.',
    openGraph: {
      title: 'AI Audit for Business: Automation Plan & ROI',
      description:
        'We identify automation opportunities, calculate ROI, and deliver an implementation plan. Free consultation.',
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
