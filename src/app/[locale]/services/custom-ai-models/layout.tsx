import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  if (locale === 'lt') {
    return {
      title: 'Individualūs AI Modeliai | Custom AI Sprendimai Verslui - Promptive',
      description: 'Kuriame specializuotus AI modelius jūsų verslo poreikiams. GPT, Claude, custom NLP modeliai su jūsų duomenimis. Tikslūs AI sprendimai konkretioms užduotims.',
      keywords: 'individualūs AI modeliai Lietuva, custom AI sprendimai, GPT fine-tuning, NLP modeliai, specialūs AI algoritmai verslui, AI konsultacijos Vilnius',
      openGraph: {
        title: 'Individualūs AI Modeliai - Custom AI Sprendimai Verslui',
        description: 'Sukurkime specialius AI modelius jūsų verslo užduotims. Fine-tuning, custom training, specializuoti algoritmai.',
        url: `${baseUrl}/lt/services/custom-ai-models`,
        images: [
          {
            url: `${baseUrl}/images/custom-ai-models-widget.webp`,
            width: 1200,
            height: 630,
            alt: 'Individualūs AI modeliai verslui',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Individualūs AI Modeliai Verslui',
        description: 'Specializuoti AI sprendimai jūsų verslo poreikiams.',
        images: [`${baseUrl}/images/custom-ai-models-widget.webp`],
      },
      alternates: {
        canonical: `${baseUrl}/lt/services/custom-ai-models`,
        languages: {
          'en': `${baseUrl}/services/custom-ai-models`,
          'lt': `${baseUrl}/lt/services/custom-ai-models`,
          'x-default': `${baseUrl}/services/custom-ai-models`
        },
      },
    };
  }

  return {
    title: 'Custom AI Models | Tailored AI Solutions for Business - Promptive',
    description: 'Build custom AI models tailored to your business needs. GPT fine-tuning, Claude customization, specialized NLP models with your data. Precise AI solutions for specific tasks.',
    keywords: 'custom AI models, AI model training, GPT fine-tuning, custom NLP models, specialized AI algorithms, business AI solutions, machine learning consulting',
    openGraph: {
      title: 'Custom AI Models - Tailored AI Solutions for Business',
      description: 'Create specialized AI models for your business tasks. Fine-tuning, custom training, and specialized algorithms.',
      url: `${baseUrl}/services/custom-ai-models`,
      images: [
        {
          url: `${baseUrl}/images/custom-ai-models-widget.webp`,
          width: 1200,
          height: 630,
          alt: 'Custom AI models for business',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Custom AI Models for Business',
      description: 'Specialized AI solutions tailored to your needs.',
      images: [`${baseUrl}/images/custom-ai-models-widget.webp`],
    },
    alternates: {
      canonical: `${baseUrl}/services/custom-ai-models`,
      languages: {
        'en': `${baseUrl}/services/custom-ai-models`,
        'lt': `${baseUrl}/lt/services/custom-ai-models`,
        'x-default': `${baseUrl}/services/custom-ai-models`
      },
    },
  };
}

export default function CustomAIModelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}