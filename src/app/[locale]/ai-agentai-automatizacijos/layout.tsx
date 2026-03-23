import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const path = '/ai-agentai-automatizacijos';

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
      title: 'AI Agentai ir Automatizavimas Verslui Lietuvoje | Promptive',
      description: 'AI agentai ir automatizavimo sprendimai verslui Lietuvoje. Dirbame 24/7 – automatizuojame pardavimus, aptarnavimą ir vidinius procesus. Nemokama konsultacija →',
      openGraph: {
        title: 'AI Agentai ir Automatizavimas Verslui Lietuvoje | Promptive',
        description: 'AI agentai ir automatizavimo sprendimai verslui Lietuvoje. Dirbame 24/7 – automatizuojame pardavimus, aptarnavimą ir vidinius procesus.',
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
    title: 'AI Agents & Automation for Business in Lithuania | Promptive',
    description: 'AI agents and automation solutions for business. We automate sales, customer service and internal operations 24/7. Free consultation →',
    openGraph: {
      title: 'AI Agents & Automation for Business in Lithuania | Promptive',
      description: 'AI agents and automation solutions for business. We automate sales, customer service and internal operations 24/7.',
      url: `${baseUrl}${path}`,
      siteName: 'Promptive',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    alternates: alternatesConfig,
  };
}

export default function AIAgentaiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
