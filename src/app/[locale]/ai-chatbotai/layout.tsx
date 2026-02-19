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
      title: 'AI chatbotai verslui: DUK, pardavimai, aptarnavimas 24/7 | Promptive',
      description: 'AI chatbotai verslui Lietuvoje. Automatizuokite klientų aptarnavimą, pardavimus ir DUK atsakymus 24/7. Integracija su CRM, el. paštu ir mokėjimais.',
      openGraph: {
        title: 'AI chatbotai verslui: DUK, pardavimai, aptarnavimas 24/7',
        description: 'Automatizuokite klientų aptarnavimą ir pardavimus su AI chatbotais.',
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
    title: 'AI Chatbots for Business: FAQ, Sales, Support 24/7 | Promptive',
    description: 'AI chatbots for business. Automate customer service, sales, and FAQ responses 24/7. Integration with CRM, email, and payments.',
    openGraph: {
      title: 'AI Chatbots for Business: FAQ, Sales, Support 24/7',
      description: 'Automate customer service and sales with AI chatbots.',
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
