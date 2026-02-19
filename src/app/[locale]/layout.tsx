import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import { headers } from 'next/headers';
import "../globals.css";
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

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
  const pathname = headers().get('x-pathname') ?? '/';

  // Remove the /lt locale prefix to get the path segment shared by both locales.
  // e.g. '/lt/ai-auditas' → '/ai-auditas', '/lt' → '/'
  const basePath = isLt && pathname.startsWith('/lt')
    ? pathname.slice(3) || '/'
    : pathname || '/';

  // Build canonical URLs for each locale variant
  const canonicalEn = basePath === '/' ? baseUrl : `${baseUrl}${basePath}`;
  const canonicalLt = basePath === '/' ? `${baseUrl}/lt` : `${baseUrl}/lt${basePath}`;

  const alternatesConfig = {
    canonical: isLt ? canonicalLt : canonicalEn,
    languages: {
      'en': canonicalEn,
      'lt': canonicalLt,
      'x-default': canonicalEn,
    },
  };
  
  if (locale === 'lt') {
    return {
      title: 'Promptive - AI Automatizavimo Agentūra | Chatbotai ir Verslo Procesų Automatizavimas Lietuvoje',
      description: 'Pirmaujanti AI automatizavimo agentūra Lietuvoje. Kuriame AI chatbotus verslui, automatizuojame verslo procesus ir teikiame dirbtinio intelekto konsultacijas. Taupykite laiką ir mažinkite kaštus su AI sprendimais.',
      keywords: 'AI automatizavimas Lietuva, chatbotai verslui, verslo procesų automatizavimas, dirbtinis intelektas, AI konsultacijos Vilnius, automatizavimo paslaugos',
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
        title: 'Promptive - AI Automatizavimo Agentūra Lietuvoje',
        description: 'Pirmaujanti AI automatizavimo agentūra Lietuvoje. Kuriame AI chatbotus verslui ir automatizuojame verslo procesus.',
        siteName: 'Promptive Agency',
        images: [
          {
            url: `${baseUrl}/images/logo.svg`,
            width: 1200,
            height: 630,
            alt: 'Promptive Agency - AI Automatizavimo Agentūra',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Promptive - AI Automatizavimo Agentūra Lietuvoje',
        description: 'Pirmaujanti AI automatizavimo agentūra Lietuvoje. AI chatbotai verslui ir verslo procesų automatizavimas.',
        images: [`${baseUrl}/images/logo.svg`],
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
    title: 'Promptive - AI Automation Agency | Business Chatbots & Process Automation',
    description: 'Leading AI automation agency specializing in AI chatbots for business, conversational AI solutions, and business process automation. Scale your business with AI automation while saving time and reducing costs.',
    keywords: 'AI automation agency, AI chatbots for business, conversational AI, business process automation, AI automation services, chatbot development, workflow automation',
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
      title: 'Promptive - AI Automation Agency for Business Growth',
      description: 'Leading AI automation agency specializing in AI chatbots for business, conversational AI, and business process automation.',
      siteName: 'Promptive Agency',
      images: [
        {
          url: `${baseUrl}/images/logo.svg`,
          width: 1200,
          height: 630,
          alt: 'Promptive Agency - AI Automation for Business',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Promptive - AI Automation Agency for Business Growth',
      description: 'Leading AI automation agency specializing in AI chatbots for business and conversational AI solutions.',
      images: [`${baseUrl}/images/logo.svg`],
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