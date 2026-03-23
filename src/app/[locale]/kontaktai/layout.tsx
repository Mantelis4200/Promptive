import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  // Common hreflang configuration - defined once
  const alternatesConfig = {
    canonical: locale === 'lt' ? `${baseUrl}/lt/contact` : `${baseUrl}/contact`,
    languages: {
      'en': `${baseUrl}/contact`,
      'lt': `${baseUrl}/lt/contact`,
      'x-default': `${baseUrl}/contact`
    },
  };
  
  if (locale === 'lt') {
    return {
      title: 'Kontaktai | Promptive - AI Automatizavimo Konsultacija ir Paslaugos',
      description: 'Susisiekite su Promptive AI automatizavimo ekspertais. Nemokama konsultacija, AI chatbotų kūrimas, verslo procesų automatizavimas. Skambinkite +37061208887 arba rašykite.',
      keywords: 'Promptive kontaktai, AI automatizavimo konsultacija Lietuva, nemokama AI konsultacija, chatbotų kūrimas kontaktai, AI paslaugų užklausa',
      openGraph: {
        title: 'Kontaktai - Promptive AI Automatizavimo Konsultacija',
        description: 'Gaukite nemokamą AI automatizavimo konsultaciją. Susisiekite su mūsų ekspertais dėl chatbotų kūrimo ir verslo procesų automatizavimo.',
        url: `${baseUrl}/lt/contact`,
        images: [
          {
            url: `${baseUrl}/images/logo.svg`,
            width: 1200,
            height: 630,
            alt: 'Promptive kontaktai - AI automatizavimo paslaugos',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Kontaktai - Promptive AI Automatizavimas',
        description: 'Gaukite nemokamą konsultaciją dėl AI automatizavimo.',
        images: [`${baseUrl}/images/logo.svg`],
      },
      alternates: alternatesConfig,
    };
  }

  return {
    title: 'Contact Us | Promptive - AI Automation Consultation & Services',
    description: 'Get in touch with Promptive AI automation experts. Free consultation, AI chatbot development, business process automation. Call +37061208887 or message us.',
    keywords: 'Promptive contact, AI automation consultation, free AI consultation, chatbot development contact, AI services inquiry, business automation help',
    openGraph: {
      title: 'Contact Us - Promptive AI Automation Consultation',
      description: 'Get a free AI automation consultation. Contact our experts for chatbot development and business process automation solutions.',
      url: `${baseUrl}/contact`,
      images: [
        {
          url: `${baseUrl}/images/logo.svg`,
          width: 1200,
          height: 630,
          alt: 'Promptive contact - AI automation services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Promptive - AI Automation',
      description: 'Get free consultation for AI automation solutions.',
      images: [`${baseUrl}/images/logo.svg`],
    },
    alternates: alternatesConfig,
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}