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
      title: 'AI agentai ir automatizacijos: mažiau rankinio darbo | Promptive',
      description: 'AI agentai ir verslo automatizacijos. Sumažinkite rankinį darbą, pagreitinkite procesus ir padidinkite komandos efektyvumą su AI sprendimais.',
      openGraph: {
        title: 'AI agentai ir automatizacijos: mažiau rankinio darbo',
        description: 'Sumažinkite rankinį darbą ir padidinkite efektyvumą su AI automatizacijomis.',
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
    title: 'AI Agents & Automations: Less Manual Work | Promptive',
    description: 'AI agents and business automations. Reduce manual work, speed up processes, and increase team efficiency with AI solutions.',
    openGraph: {
      title: 'AI Agents & Automations: Less Manual Work',
      description: 'Reduce manual work and increase efficiency with AI automations.',
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
