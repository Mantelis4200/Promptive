import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'promptive.agency',
        port: '',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Compression
  compress: true,
  
  // Power level optimization
  poweredByHeader: false,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://assets.calendly.com; style-src 'self' 'unsafe-inline' https://assets.calendly.com; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://calendly.com https://*.calendly.com; frame-src https://calendly.com https://*.calendly.com;"
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()'
          }
        ],
      },
      // Cache static assets
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      // Cache favicon and static files
      {
        source: '/(favicon.ico|apple-touch-icon.png|android-chrome-:size*.png|favicon-:size*.png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
    ]
  },

  // SEO and internationalization redirects
  async redirects() {
    return [
      // English page name -> Lithuanian URL redirects
      { source: '/about', destination: '/apie-mus', permanent: true },
      { source: '/en/about', destination: '/apie-mus', permanent: true },
      { source: '/lt/about', destination: '/lt/apie-mus', permanent: true },
      { source: '/case-studies', destination: '/projektai', permanent: true },
      { source: '/en/case-studies', destination: '/projektai', permanent: true },
      { source: '/lt/case-studies', destination: '/lt/projektai', permanent: true },
      { source: '/blog', destination: '/tinklarastis', permanent: true },
      { source: '/en/blog', destination: '/tinklarastis', permanent: true },
      { source: '/lt/blog', destination: '/lt/tinklarastis', permanent: true },
      { source: '/blog/:slug', destination: '/tinklarastis/:slug', permanent: true },
      { source: '/en/blog/:slug', destination: '/tinklarastis/:slug', permanent: true },
      { source: '/lt/blog/:slug', destination: '/lt/tinklarastis/:slug', permanent: true },
      { source: '/contact', destination: '/kontaktai', permanent: true },
      { source: '/en/contact', destination: '/kontaktai', permanent: true },
      { source: '/lt/contact', destination: '/lt/kontaktai', permanent: true },
      { source: '/careers', destination: '/karjera', permanent: true },
      { source: '/en/careers', destination: '/karjera', permanent: true },
      { source: '/lt/careers', destination: '/lt/karjera', permanent: true },
      // Old service URLs -> New SEO-friendly URLs (English)
      {
        source: '/services/ai-automations',
        destination: '/ai-agentai-automatizacijos',
        permanent: true,
      },
      {
        source: '/en/services/ai-automations',
        destination: '/ai-agentai-automatizacijos',
        permanent: true,
      },
      {
        source: '/services/websites',
        destination: '/svetainiu-kurimas',
        permanent: true,
      },
      {
        source: '/en/services/websites',
        destination: '/svetainiu-kurimas',
        permanent: true,
      },
      // Old service URLs -> New SEO-friendly URLs (Lithuanian)
      {
        source: '/lt/services/ai-automations',
        destination: '/lt/ai-agentai-automatizacijos',
        permanent: true,
      },
      {
        source: '/lt/services/websites',
        destination: '/lt/svetainiu-kurimas',
        permanent: true,
      },
      // ai-chatbotai page removed - redirect to main AI page
      {
        source: '/ai-chatbotai',
        destination: '/ai-agentai-automatizacijos',
        permanent: true,
      },
      {
        source: '/lt/ai-chatbotai',
        destination: '/lt/ai-agentai-automatizacijos',
        permanent: true,
      },
      // Legacy redirects - redirect to main AI page
      {
        source: '/chatbots',
        destination: '/ai-agentai-automatizacijos',
        permanent: true,
      },
      {
        source: '/chatbotai',
        destination: '/lt/ai-agentai-automatizacijos',
        permanent: true,
      },
      {
        source: '/n8n-automatizacijos',
        destination: '/ai-agentai-automatizacijos',
        permanent: true,
      },
      {
        source: '/lt/n8n-automatizacijos',
        destination: '/lt/ai-agentai-automatizacijos',
        permanent: true,
      },
      {
        source: '/svetaine-per-24h',
        destination: '/svetainiu-kurimas',
        permanent: true,
      },
      {
        source: '/lt/svetaine-per-24h',
        destination: '/lt/svetainiu-kurimas',
        permanent: true,
      },
      {
        source: '/ai-consultation',
        destination: '/ai-auditas',
        permanent: true,
      },
      {
        source: '/ai-konsultacija',
        destination: '/lt/ai-auditas',
        permanent: true,
      },
    ]
  },

  // Bundle analyzer for performance monitoring
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Static generation optimization
  trailingSlash: false,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Enable source maps for production debugging
  productionBrowserSourceMaps: true,
  
  // Output optimization
  output: 'standalone',
  
  // Runtime configuration
  env: {
    SITE_URL: 'https://promptive.agency',
    NEXT_PUBLIC_SITE_URL: 'https://promptive.agency',
  },
};
 
export default withNextIntl(nextConfig);