import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';

  if (locale === 'lt') {
    return {
      title: 'Verslo Procesų Automatizacija - AI Automatizacijos | Promptive',
      description: 'Automatizuokite verslo procesus su n8n workflow sprendimais. Gmail automatizacija, CRM vamzdynai, atsargų valdymas ir HR procesai, veikiantys 24/7.',
      keywords: 'verslo automatizacija, n8n workflows, Gmail automatizacija, CRM automatizacija, atsargų valdymas, HR automatizacija',
      openGraph: {
        title: 'Verslo Procesų Automatizacija - Promptive',
        description: 'Automatizuokite verslo procesus su n8n workflow sprendimais. Veikia 24/7 be žmogaus įsikišimo.',
        url: `${baseUrl}/lt/services/automations`,
      },
      alternates: {
        canonical: `${baseUrl}/lt/services/automations`,
        languages: {
          'en': `${baseUrl}/en/services/automations`,
          'lt': `${baseUrl}/lt/services/automations`,
        },
      },
    };
  }

  return {
    title: 'Business Process Automation - AI Automation Services | Promptive',
    description: 'Automate your business processes with n8n workflows. Gmail automations, CRM pipelines, inventory management, and HR processes that work 24/7.',
    keywords: 'business automation, n8n workflows, gmail automation, crm automation, inventory management, hr automation',
    openGraph: {
      title: 'Business Process Automation - Promptive',
      description: 'Automate your business processes with n8n workflows. Works 24/7 without human intervention.',
      url: `${baseUrl}/en/services/automations`,
    },
    alternates: {
      canonical: `${baseUrl}/en/services/automations`,
      languages: {
        'en': `${baseUrl}/en/services/automations`,
        'lt': `${baseUrl}/lt/services/automations`,
      },
    },
  };
}

export default function AutomationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}