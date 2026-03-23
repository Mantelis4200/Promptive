import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const path = '/ai-chatbotai';

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
      title: 'AI Chatbotai Verslui: DUK, Pardavimai, 24/7 | Promptive',
      description: 'AI chatbotai verslui Lietuvoje. Automatizuokite klientų aptarnavimą ir pardavimus 24/7. Integracija su CRM ir el. paštu. Nemokama konsultacija →',
      openGraph: {
        title: 'AI Chatbotai Verslui: DUK, Pardavimai, 24/7 | Promptive',
        description: 'AI chatbotai verslui Lietuvoje. Automatizuokite klientų aptarnavimą ir pardavimus 24/7. Integracija su CRM ir el. paštu.',
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
    title: 'AI Chatbots for Business: Sales & Support 24/7 | Promptive',
    description: 'AI chatbots for business. Automate customer service and sales 24/7. CRM and email integration. Free consultation →',
    openGraph: {
      title: 'AI Chatbots for Business: Sales & Support 24/7 | Promptive',
      description: 'AI chatbots for business. Automate customer service and sales 24/7. CRM and email integration.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: alternatesConfig,
  };
}

export default function AIChatbotaiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
