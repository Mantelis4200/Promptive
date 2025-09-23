import type { Metadata } from 'next';

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  
  // Common hreflang configuration - defined once
  const alternatesConfig = {
    canonical: locale === 'lt' ? `${baseUrl}/lt/about` : `${baseUrl}/about`,
    languages: {
      'en': `${baseUrl}/about`,
      'lt': `${baseUrl}/lt/about`,
      'x-default': `${baseUrl}/about`
    },
  };
  
  if (locale === 'lt') {
    return {
      title: 'Apie Mus | Promptive - AI Automatizavimo Agentūros Istorija ir Komanda',
      description: 'Sužinokite apie Promptive - AI automatizavimo agentūrą Lietuvoje. Mūsų istorija, vertybės, globalus meistriškumas ir komanda, kuri padeda verslams augti su AI technologijomis.',
      keywords: 'Promptive apie mus, AI automatizavimo agentūra istorija, Augustas Vinikas, AI konsultantai Lietuva, dirbtinio intelekto ekspertai',
      openGraph: {
        title: 'Apie Promptive - AI Automatizavimo Agentūros Istorija',
        description: 'Sužinokite apie mūsų kelionę, vertybes ir globalų meistriškumą AI automatizavimo srityje. Komanda, kuri keičia verslus visame pasaulyje.',
        url: `${baseUrl}/lt/about`,
        images: [
          {
            url: `${baseUrl}/images/photo.webp`,
            width: 1200,
            height: 630,
            alt: 'Promptive komandos nariai - AI automatizavimo ekspertai',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Apie Promptive - AI Automatizavimo Agentūra',
        description: 'Globalus meistriškumas, lokalus priėjimas. Sužinokite apie mūsų istoriją.',
        images: [`${baseUrl}/images/photo.webp`],
      },
      alternates: alternatesConfig,
    };
  }

  return {
    title: 'About Us | Promptive - AI Automation Agency Story & Team',
    description: 'Learn about Promptive, the leading AI automation agency. Our story, values, global expertise, and team that helps businesses grow with AI technology solutions.',
    keywords: 'about Promptive, AI automation agency story, Augustas Vinikas CEO, AI consultants team, artificial intelligence experts, business automation history',
    openGraph: {
      title: 'About Promptive - AI Automation Agency Story & Team',
      description: 'Discover our journey, values, and global expertise in AI automation. The team transforming businesses worldwide with intelligent solutions.',
      url: `${baseUrl}/about`,
      images: [
        {
          url: `${baseUrl}/images/photo.webp`,
          width: 1200,
          height: 630,
          alt: 'Promptive team members - AI automation experts',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Promptive - AI Automation Agency',
      description: 'Global expertise, local approach. Learn about our story.',
      images: [`${baseUrl}/images/photo.webp`],
    },
    alternates: alternatesConfig,
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}