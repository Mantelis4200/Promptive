import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const baseUrl = 'https://promptive.agency';
const slug = 'ai-chatbots-enhancing-customer-engagement-and-support';
const image = `${baseUrl}/images/blog/hero.webp`;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isLt = locale === 'lt';
  const canonicalEn = `${baseUrl}/tinklarastis/${slug}`;
  const canonicalLt = `${baseUrl}/lt/tinklarastis/${slug}`;
  const canonical = isLt ? canonicalLt : canonicalEn;

  const title = isLt
    ? 'DI Pokalbių Robotai: Klientų Įsitraukimas ir Aptarnavimas | Promptive'
    : 'AI Chatbots: Enhancing Customer Engagement and Support | Promptive';
  const description = isLt
    ? 'Sužinokite, kaip AI pokalbių robotai keičia klientų aptarnavimą: 24/7 palaikymas, potencialių klientų generavimas ir personalizuoti sprendimai.'
    : 'Discover how AI chatbots are transforming customer service through 24/7 support, lead generation, and personalized customer experiences.';

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { en: canonicalEn, lt: canonicalLt, 'x-default': canonicalEn },
    },
    openGraph: {
      type: 'article',
      url: canonical,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      siteName: 'Promptive Agency',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default function BlogArticleLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
