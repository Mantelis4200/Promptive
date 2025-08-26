'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  gaId: string;
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  );
}

// Extend window object to include gtag
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}