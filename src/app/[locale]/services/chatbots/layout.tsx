import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  if (locale === 'lt') {
    return {
      title: 'AI Chatbotai Verslui | Klientų Aptarnavimo Automatizavimas - Promptive',
      description: 'Kuriame pažangius AI chatbotus verslui Lietuvoje. Automatizuokite klientų aptarnavimą, pardavimus ir palaikymą su mūsų dirbtinio intelekto pokalbių robotais. 24/7 klientų aptarnavimas.',
      keywords: 'AI chatbotai Lietuva, pokalbių robotai verslui, automatinis klientų aptarnavimas, chatbot kūrimas, conversational AI lietuvių kalba, verslo automatizavimas',
      openGraph: {
        title: 'AI Chatbotai Verslui | Automatizuotas Klientų Aptarnavimas',
        description: 'Kuriame pažangius AI chatbotus lietuvių ir anglų kalbomis. Automatizuokite klientų aptarnavimą ir pardavimus su mūsų pokalbių robotais.',
        url: `${baseUrl}/lt/services/chatbots`,
        images: [
          {
            url: `${baseUrl}/images/chatbot-widget.webp`,
            width: 1200,
            height: 630,
            alt: 'AI Chatbotai Verslui - Promptive',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI Chatbotai Verslui Lietuvoje',
        description: 'Automatizuokite klientų aptarnavimą su AI chatbotais.',
        images: [`${baseUrl}/images/chatbot-widget.webp`],
      },
      alternates: {
        canonical: `${baseUrl}/lt/services/chatbots`,
        languages: {
          'en': `${baseUrl}/services/chatbots`,
          'lt': `${baseUrl}/lt/services/chatbots`,
        },
      },
    };
  }

  return {
    title: 'AI Chatbots for Business | Customer Service Automation - Promptive',
    description: 'Build intelligent AI chatbots for your business. Automate customer service, sales, and support with our conversational AI solutions. 24/7 customer engagement across all platforms.',
    keywords: 'AI chatbots for business, customer service automation, conversational AI, chatbot development, business automation, AI customer support, sales chatbots',
    openGraph: {
      title: 'AI Chatbots for Business | Automated Customer Service Solutions',
      description: 'Transform your customer service with intelligent AI chatbots. Automate support, sales, and engagement with our advanced conversational AI technology.',
      url: `${baseUrl}/services/chatbots`,
      images: [
        {
          url: `${baseUrl}/images/chatbot-widget.webp`,
          width: 1200,
          height: 630,
          alt: 'AI Chatbots for Business - Promptive Agency',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Chatbots for Business Solutions',
      description: 'Transform customer service with AI chatbots.',
      images: [`${baseUrl}/images/chatbot-widget.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/services/chatbots`,
      languages: {
        'en': `${baseUrl}/services/chatbots`,
        'lt': `${baseUrl}/lt/services/chatbots`,
      },
    },
  };
}

export default function ChatbotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}