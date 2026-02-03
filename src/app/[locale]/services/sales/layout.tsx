import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';

  if (locale === 'lt') {
    return {
      title: 'AI Pardavimų Automatizacija - Klientų Kvalifikacija ir Follow-up | Promptive',
      description: 'AI pardavimų agentai, kurie kvalifikuoja potencialius klientus, automatizuoja follow-up sekas ir personalizuoja šaltuosius kontaktus 24/7.',
      keywords: 'pardavimų automatizacija, AI pardavimų agentai, klientų kvalifikacija, follow-up automatizacija, šaltieji kontaktai, pardavimų analitika',
      openGraph: {
        title: 'AI Pardavimų Automatizacija - Promptive',
        description: 'AI pardavimų agentai, kurie niekada nemiega ir niekada nepraleidžia kliento.',
        url: `${baseUrl}/lt/services/sales`,
      },
      alternates: {
        canonical: `${baseUrl}/lt/services/sales`,
        languages: {
          'en': `${baseUrl}/en/services/sales`,
          'lt': `${baseUrl}/lt/services/sales`,
        },
      },
    };
  }

  return {
    title: 'AI Sales Automation - Lead Qualification & Follow-up | Promptive',
    description: 'AI sales agents that automatically qualify leads, automate follow-up sequences, and personalize cold outreach campaigns 24/7.',
    keywords: 'sales automation, AI sales agents, lead qualification, follow-up automation, cold outreach, sales analytics',
    openGraph: {
      title: 'AI Sales Automation - Promptive',
      description: 'AI sales agents that never sleep, never miss a lead.',
      url: `${baseUrl}/en/services/sales`,
    },
    alternates: {
      canonical: `${baseUrl}/en/services/sales`,
      languages: {
        'en': `${baseUrl}/en/services/sales`,
        'lt': `${baseUrl}/lt/services/sales`,
      },
    },
  };
}

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}