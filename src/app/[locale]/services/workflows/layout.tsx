import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  if (locale === 'lt') {
    return {
      title: 'Darbo Srautų Automatizavimas | Verslo Procesų Optimizavimas - Promptive',
      description: 'Automatizuokite darbo srautus su AI sprendimais. Optimizuokime jūsų verslo procesus, sumažinkime laiką 40% ir padidinkime efektyvumą. Nemokama analitika.',
      keywords: 'darbo srautų automatizavimas Lietuva, verslo procesų optimizavimas, workflow automation, AI sprendimai verslui, automatizavimo paslaugos Vilnius',
      openGraph: {
        title: 'Darbo Srautų Automatizavimas - Verslo Procesų Optimizavimas',
        description: 'Automatizuokite darbo srautus ir optimizuokite verslo procesus su AI technologijomis. Sumažinkite laiką ir padidinkite efektyvumą.',
        url: `${baseUrl}/lt/services/workflows`,
        images: [
          {
            url: `${baseUrl}/images/workflows-widget.webp`,
            width: 1200,
            height: 630,
            alt: 'Darbo srautų automatizavimas verslui',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Darbo Srautų Automatizavimas Lietuvoje',
        description: 'Automatizuokite verslo procesus su AI technologijomis.',
        images: [`${baseUrl}/images/workflows-widget.webp`],
      },
      alternates: {
        canonical: `${baseUrl}/lt/services/workflows`,
        languages: {
          'en': `${baseUrl}/services/workflows`,
          'lt': `${baseUrl}/lt/services/workflows`,
          'x-default': `${baseUrl}/services/workflows`
        },
      },
    };
  }

  return {
    title: 'Workflow Automation | Business Process Optimization - AI Solutions',
    description: 'Automate your business workflows with AI-powered solutions. Optimize processes, reduce time by 40%, and increase efficiency. Free workflow analysis available.',
    keywords: 'workflow automation, business process automation, AI workflow solutions, process optimization, automation services, intelligent workflows',
    openGraph: {
      title: 'Workflow Automation - AI-Powered Business Process Optimization',
      description: 'Transform your business with intelligent workflow automation. Reduce manual work and increase efficiency with AI solutions.',
      url: `${baseUrl}/services/workflows`,
      images: [
        {
          url: `${baseUrl}/images/workflows-widget.webp`,
          width: 1200,
          height: 630,
          alt: 'Workflow automation services for business',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Workflow Automation - AI Business Solutions',
      description: 'Transform your business with intelligent workflow automation.',
      images: [`${baseUrl}/images/workflows-widget.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/services/workflows`,
      languages: {
        'en': `${baseUrl}/services/workflows`,
        'lt': `${baseUrl}/lt/services/workflows`,
        'x-default': `${baseUrl}/services/workflows`
      },
    },
  };
}

export default function WorkflowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}