import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import { headers } from 'next/headers';
import "../globals.css";
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import WebsiteSchema from '@/components/WebsiteSchema';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});
// import GoogleAnalytics from '@/components/GoogleAnalytics';

const locales = ['en', 'lt'];

export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string}
}): Promise<Metadata> {
  const baseUrl = 'https://promptive.agency';
  const isLt = locale === 'lt';

  // Read the pathname injected by middleware to generate per-page canonical URLs.
  // Fallback to '/' so the homepage always has a valid canonical.
  const pathname = (await headers()).get('x-pathname') ?? '/';

  // Remove the /lt locale prefix to get the path segment shared by both locales.
  // e.g. '/lt/ai-auditas' → '/ai-auditas', '/lt' → '/'
  const basePath = isLt && pathname.startsWith('/lt')
    ? pathname.slice(3) || '/'
    : pathname || '/';

  // Build canonical URLs for each locale variant
  const canonicalEn = basePath === '/' ? baseUrl : `${baseUrl}${basePath}`;
  const canonicalLt = basePath === '/' ? `${baseUrl}/lt` : `${baseUrl}/lt${basePath}`;

  // Hreflang is rendered as <link> elements in the root layout JSX (not via metadata API)
  // to guarantee a single output and avoid Next.js metadata-merge duplication.
  const alternatesConfig = {
    canonical: isLt ? canonicalLt : canonicalEn,
  };
  
  if (locale === 'lt') {
    return {
      title: 'Promptive – AI Automatizavimas ir Agentai Verslui Lietuvoje',
      description: 'AI automatizavimas verslui Lietuvoje. Kuriame AI agentus, chatbotus ir automatizuojame verslo procesus. Nemokama konsultacija →',
      keywords: 'AI automatizavimas verslui Lietuva, AI agentai, dirbtinis intelektas verslui, verslo procesų automatizavimas, chatbotai verslui',
      authors: [{ name: 'Promptive Agency' }],
      creator: 'Promptive Agency',
      publisher: 'Promptive Agency',
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        type: 'website',
        locale: 'lt_LT',
        url: `${baseUrl}/lt`,
        title: 'Promptive – AI Automatizavimas ir Agentai Verslui Lietuvoje',
        description: 'AI automatizavimas verslui Lietuvoje. Kuriame AI agentus, chatbotus ir automatizuojame verslo procesus.',
        siteName: 'Promptive Agency',
        images: [
          {
            url: `${baseUrl}/og-image.png`,
            width: 1200,
            height: 630,
            alt: 'Promptive Agency - AI Automatizavimas Verslui',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Promptive – AI Automatizavimas ir Agentai Verslui Lietuvoje',
        description: 'AI automatizavimas verslui Lietuvoje. Kuriame AI agentus, chatbotus ir automatizuojame verslo procesus.',
        images: [`${baseUrl}/og-image.png`],
        creator: '@PromptiveAgency',
      },
      alternates: alternatesConfig,
      verification: {
        google: 'Wno-2089ENNg7IAOh-1GbxVZDW5YyGlidYW0lGqCU90',
      },
    };
  }

  // English metadata
  return {
    title: 'Promptive – AI Automation Agency for Business',
    description: 'AI automation agency for business. We build AI agents, chatbots and automate business processes. Free consultation →',
    keywords: 'AI automation agency, AI agents for business, AI chatbots, business process automation, workflow automation',
    authors: [{ name: 'Promptive Agency' }],
    creator: 'Promptive Agency',
    publisher: 'Promptive Agency',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      title: 'Promptive – AI Automation Agency for Business',
      description: 'AI automation agency for business. We build AI agents, chatbots and automate business processes.',
      siteName: 'Promptive Agency',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Promptive Agency - AI Automation for Business',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Promptive – AI Automation Agency for Business',
      description: 'AI automation agency for business. We build AI agents, chatbots and automate business processes.',
      images: [`${baseUrl}/og-image.png`],
      creator: '@PromptiveAgency',
    },
    alternates: alternatesConfig,
    verification: {
      google: 'Wno-2089ENNg7IAOh-1GbxVZDW5YyGlidYW0lGqCU90',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  // Compute hreflang URLs from the request path.
  // Hreflang is rendered as <link> elements (not via generateMetadata) to guarantee
  // a single output — no risk of Next.js metadata-merge producing duplicate tags.
  const baseUrl = 'https://promptive.agency';
  const rawPath = (await headers()).get('x-pathname') ?? '/';
  const isLt = locale === 'lt';
  const basePath = isLt && rawPath.startsWith('/lt') ? rawPath.slice(3) || '/' : rawPath;
  // Map paths where EN and LT use different slugs
  const enPath = basePath.replace(/^\/tinklarastis(\/|$)/, '/blog$1').replace(/^\/karjera(\/|$)/, '/careers$1');
  const ltPath = basePath.replace(/^\/blog(\/|$)/, '/tinklarastis$1').replace(/^\/careers(\/|$)/, '/karjera$1');
  const hreflangEn = enPath === '/' ? baseUrl : `${baseUrl}${enPath}`;
  const hreflangLt = ltPath === '/' ? `${baseUrl}/lt` : `${baseUrl}/lt${ltPath}`;

  // Load messages directly based on locale parameter
  let messages;
  try {
    const messageModule = await import(`../../../messages/${locale}.json`);
    messages = messageModule.default;
  } catch {
    // Fallback to English if locale file not found
    const fallbackModule = await import(`../../../messages/en.json`);
    messages = fallbackModule.default;
  }

  return (
    <html lang={locale}>
      <head>
        {/* Hreflang — single source of truth, rendered directly to avoid metadata-merge duplicates */}
        <link rel="alternate" hreflang="en" href={hreflangEn} />
        <link rel="alternate" hreflang="lt" href={hreflangLt} />
        <link rel="alternate" hreflang="x-default" href={hreflangEn} />

        {/* Font preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for better resource loading */}
        <link rel="dns-prefetch" href="//promptive.agency" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/images/background.webp" as="image" type="image/webp" fetchPriority="high" />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-section {
              position: relative;
              min-height: 100vh;
              background: linear-gradient(to bottom right, #f9fafb, #f3f4f6);
              overflow: hidden;
            }
            .hero-overlay {
              position: absolute;
              inset: 0;
              background-color: rgba(0, 0, 0, 0.4);
            }
            .hero-content {
              position: relative;
              z-index: 10;
              max-width: 80rem;
              margin: 0 auto;
              padding: 2rem 1rem 4rem;
              padding-top: 2rem;
            }
          `
        }} />
        
        <WebsiteSchema />

        {/* Favicons */}
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    anonymize_ip: true
                  });
                `,
              }}
            />
          </>
        )}
        
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}