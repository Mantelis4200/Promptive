import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  // Common hreflang configuration - defined once
  const alternatesConfig = {
    canonical: locale === 'lt' ? `${baseUrl}/lt/blog/ai-chatbots-enhancing-customer-engagement-and-support` : `${baseUrl}/blog/ai-chatbots-enhancing-customer-engagement-and-support`,
    languages: {
      'en': `${baseUrl}/blog/ai-chatbots-enhancing-customer-engagement-and-support`,
      'lt': `${baseUrl}/lt/blog/ai-chatbots-enhancing-customer-engagement-and-support`,
      'x-default': `${baseUrl}/blog/ai-chatbots-enhancing-customer-engagement-and-support`
    },
  };
  
  if (locale === 'lt') {
    return {
      title: 'AI Chatbotai: Klientų Įtraukimo ir Palaikymo Gerinimas | Promptive',
      description: 'Išsamiai apie AI chatbotus verslui: 24/7 palaikymas, lyderių generavimas, personalizuoti sprendimai. Sužinokite, kaip chatbotai gali pagerinti jūsų klientų aptarnavimą ir pardavimus.',
      keywords: 'AI chatbotai, klientų aptarnavimas, automatizavimas, verslo sprendimai, dirbtinis intelektas, lyderių generavimas, pardavimų augimas',
      openGraph: {
        title: 'AI Chatbotai: Klientų Įtraukimo ir Palaikymo Gerinimas',
        description: 'Sužinokite, kaip AI chatbotai keičia klientų aptarnavimą ir padidina pardavimus. Ekspertų patarimai ir realūs pavyzdžiai.',
        url: `${baseUrl}/lt/blog/ai-chatbots-enhancing-customer-engagement-and-support`,
        siteName: 'Promptive Agency',
        images: [
          {
            url: `${baseUrl}/images/blog/ai-chatbots-customer-engagement.webp`,
            width: 1200,
            height: 630,
            alt: 'AI chatbotų klientų aptarnavimui schema',
          },
        ],
        locale: 'lt_LT',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'AI Chatbotai: Klientų Įtraukimo ir Palaikymo Gerinimas',
        description: 'Sužinokite, kaip AI chatbotai keičia klientų aptarnavimą ir padidina pardavimus.',
        images: [`${baseUrl}/images/blog/ai-chatbots-customer-engagement.webp`],
      },
      alternates: alternatesConfig,
    };
  }

  return {
    title: 'AI Chatbots: Enhancing Customer Engagement and Support | Promptive',
    description: 'Complete guide to AI chatbots for business: 24/7 support, lead generation, personalized solutions. Learn how chatbots improve customer service and boost sales.',
    keywords: 'AI chatbots, customer service automation, business chatbots, artificial intelligence, lead generation, sales growth, customer engagement, NLP, machine learning',
    openGraph: {
      title: 'AI Chatbots: Enhancing Customer Engagement and Support',
      description: 'Discover how AI chatbots are transforming customer service and driving sales growth. Expert insights and real-world applications.',
      url: `${baseUrl}/blog/ai-chatbots-enhancing-customer-engagement-and-support`,
      siteName: 'Promptive Agency',
      images: [
        {
          url: `${baseUrl}/images/blog/ai-chatbots-customer-engagement.webp`,
          width: 1200,
          height: 630,
          alt: 'AI chatbot customer service workflow diagram',
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Chatbots: Enhancing Customer Engagement and Support',
      description: 'Discover how AI chatbots are transforming customer service and driving sales growth.',
      images: [`${baseUrl}/images/blog/ai-chatbots-customer-engagement.webp`],
    },
    alternates: alternatesConfig,
  };
}

export default function AIchatbotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}