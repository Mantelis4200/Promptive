import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  if (locale === 'lt') {
    return {
      title: 'AI Rinkodaros Automatizavimas | Marketing Automation - Promptive',
      description: 'Automatizuokite rinkodaros procesus su AI sprendimais. El. pašto kampanijos, socialinių tinklų valdymas, lead generavimas ir klientų segmentavimas. Padidinkite ROI.',
      keywords: 'AI rinkodaros automatizavimas Lietuva, marketing automation, el. pašto automatizavimas, socialinių tinklų valdymas, lead generation AI, klientų segmentavimas',
      openGraph: {
        title: 'AI Rinkodaros Automatizavimas - Marketing Automation',
        description: 'Automatizuokite rinkodaros kampanijas su AI technologijomis. El. paštas, socialiniai tinklai, lead generation.',
        url: `${baseUrl}/lt/services/marketing`,
        images: [
          {
            url: `${baseUrl}/images/marketing-widget.webp`,
            width: 1200,
            height: 630,
            alt: 'AI rinkodaros automatizavimas',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI Rinkodaros Automatizavimas',
        description: 'Automatizuokite rinkodaros kampanijas su AI.',
        images: [`${baseUrl}/images/marketing-widget.webp`],
      },
      alternates: {
        canonical: `${baseUrl}/lt/services/marketing`,
        languages: {
          'en': `${baseUrl}/services/marketing`,
          'lt': `${baseUrl}/lt/services/marketing`,
        },
      },
    };
  }

  return {
    title: 'AI Marketing Automation | Automated Marketing Campaigns - Promptive',
    description: 'Automate your marketing processes with AI solutions. Email campaigns, social media management, lead generation, and customer segmentation. Increase ROI with intelligent automation.',
    keywords: 'AI marketing automation, automated email campaigns, social media automation, lead generation AI, customer segmentation, marketing AI tools',
    openGraph: {
      title: 'AI Marketing Automation - Automated Marketing Campaigns',
      description: 'Transform your marketing with AI automation. Email campaigns, social media, lead generation, and customer insights.',
      url: `${baseUrl}/services/marketing`,
      images: [
        {
          url: `${baseUrl}/images/marketing-widget.webp`,
          width: 1200,
          height: 630,
          alt: 'AI marketing automation services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Marketing Automation Services',
      description: 'Transform your marketing with AI automation.',
      images: [`${baseUrl}/images/marketing-widget.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/services/marketing`,
      languages: {
        'en': `${baseUrl}/services/marketing`,
        'lt': `${baseUrl}/lt/services/marketing`,
      },
    },
  };
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}