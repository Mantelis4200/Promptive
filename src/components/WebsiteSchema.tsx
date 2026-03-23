// Server component — no 'use client' directive intentionally.
// dangerouslySetInnerHTML is safe here: content is a hardcoded constant (no user input).
// This is the standard Next.js pattern for JSON-LD structured data in server components.
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://promptive.agency/#website',
  url: 'https://promptive.agency',
  name: 'Promptive Agency',
  inLanguage: ['lt', 'en'],
};

export default function WebsiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}
