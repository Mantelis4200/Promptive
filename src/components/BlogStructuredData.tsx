// Server component — no 'use client' directive intentionally.
// dangerouslySetInnerHTML is safe: content is a static object literal (no user input).
interface BlogStructuredDataProps {
  headline: string;
  datePublished: string;
  dateModified: string;
  image: string;
}

export default function BlogStructuredData({
  headline,
  datePublished,
  dateModified,
  image,
}: BlogStructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    datePublished,
    dateModified,
    image,
    author: {
      '@type': 'Organization',
      name: 'Promptive Agency',
      url: 'https://promptive.agency',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Promptive Agency',
      url: 'https://promptive.agency',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
