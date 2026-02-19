import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const baseUrl = 'https://promptive.agency';
const slug = 'speed-to-lead-why-every-minute-counts-in-sales';
const image = `${baseUrl}/images/blog/speed-to-lead-hero.webp`;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isLt = locale === 'lt';
  const canonicalEn = `${baseUrl}/blog/${slug}`;
  const canonicalLt = `${baseUrl}/lt/blog/${slug}`;
  const canonical = isLt ? canonicalLt : canonicalEn;

  const title = isLt
    ? 'Greitis į Potencialų Klientą: Kodėl Kiekviena Minutė Svarbi | Promptive'
    : 'Speed to Lead: Why Every Minute Counts in Sales | Promptive';
  const description = isLt
    ? 'Atsakymas per 5 minutes gali padidinti konversijų rodiklius iki 8 kartų. Sužinokite, kodėl greitis į potencialų klientą yra svarbiausias konkurencinis pranašumas.'
    : 'Responding within 5 minutes can boost conversion rates up to 8x. Learn why speed to lead is the ultimate competitive advantage in modern sales.';

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
