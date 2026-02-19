import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const baseUrl = 'https://promptive.agency';
const slug = 'top-7-workflows-every-business-should-automate-2025';
const image = `${baseUrl}/images/blog/top-7-workflows/top-7-workflows-hero.webp`;

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
    ? '7 Verslo Procesai, Kuriuos Reikia Automatizuoti 2025 m. | Promptive'
    : 'Top 7 Workflows Every Business Should Automate in 2025 | Promptive';
  const description = isLt
    ? 'Nustokite rankiniu būdu vykdyti pasikartojančias užduotis. Sužinokite 7 esminius verslo procesus, kuriuos galima automatizuoti, kad sutaupytumėte laiko ir padidintumėte produktyvumą.'
    : 'Stop handling repetitive tasks manually. Discover the 7 essential workflows every business should automate to save time, reduce errors, and boost productivity in 2025.';

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
