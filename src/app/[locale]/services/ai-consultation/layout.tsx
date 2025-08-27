import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  if (locale === 'lt') {
    return {
      title: 'AI Konsultacijos | Dirbtinio Intelekto Strategijos Verslui - Promptive',
      description: 'Profesionalios AI konsultacijos Lietuvoje. Sukurkime jūsų verslo AI strategiją, optimizuokime procesus ir įdiegkime dirbtinio intelekto sprendimus. Nemokama pirmoji konsultacija.',
      keywords: 'AI konsultacijos Lietuva, dirbtinio intelekto strategija, verslo AI sprendimai, automatizavimo konsultacijos Vilnius, AI ekspertų paslaugos',
      openGraph: {
        title: 'AI Konsultacijos - Dirbtinio Intelekto Strategijos Verslui',
        description: 'Profesionalios AI konsultacijos verslo optimizavimui. Sukurkime jūsų AI strategiją ir įdiegkime efektyvius sprendimus.',
        url: `${baseUrl}/lt/services/ai-consultation`,
        images: [
          {
            url: `${baseUrl}/images/ai-consultation-widget.webp`,
            width: 1200,
            height: 630,
            alt: 'AI konsultacijos verslui Lietuvoje',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI Konsultacijos - Dirbtinio Intelekto Strategijos',
        description: 'Profesionalios AI konsultacijos verslo optimizavimui.',
        images: [`${baseUrl}/images/ai-consultation-widget.webp`],
      },
      alternates: {
        canonical: `${baseUrl}/lt/services/ai-consultation`,
        languages: {
          'en': `${baseUrl}/services/ai-consultation`,
          'lt': `${baseUrl}/lt/services/ai-consultation`,
          'x-default': `${baseUrl}/services/ai-consultation`
        },
      },
    };
  }

  return {
    title: 'AI Consultation Services | Business AI Strategy & Implementation',
    description: 'Expert AI consultation services for businesses. Develop your AI strategy, optimize processes, and implement intelligent automation solutions. Free initial consultation available.',
    keywords: 'AI consultation services, business AI strategy, artificial intelligence consulting, AI implementation, automation consulting, AI transformation',
    openGraph: {
      title: 'AI Consultation Services - Business AI Strategy & Implementation',
      description: 'Expert AI consultation for business transformation. Develop your AI strategy and implement intelligent automation solutions.',
      url: `${baseUrl}/services/ai-consultation`,
      images: [
        {
          url: `${baseUrl}/images/ai-consultation-widget.webp`,
          width: 1200,
          height: 630,
          alt: 'AI consultation services for business',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Consultation Services - Business Strategy',
      description: 'Expert AI consultation for business transformation.',
      images: [`${baseUrl}/images/ai-consultation-widget.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/services/ai-consultation`,
      languages: {
        'en': `${baseUrl}/services/ai-consultation`,
        'lt': `${baseUrl}/lt/services/ai-consultation`,
        'x-default': `${baseUrl}/services/ai-consultation`
      },
    },
  };
}

export default function AIConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}