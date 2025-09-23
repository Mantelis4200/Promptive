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
            value: 'origin-when-cross-origin'
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
      // Redirect old URLs if any
      {
        source: '/chatbots',
        destination: '/en/services/chatbots',
        permanent: true,
      },
      {
        source: '/ai-consultation',
        destination: '/en/services/ai-consultation',
        permanent: true,
      },
      // Lithuanian redirects
      {
        source: '/chatbotai',
        destination: '/lt/services/chatbots',
        permanent: true,
      },
      {
        source: '/ai-konsultacija',
        destination: '/lt/services/ai-consultation',
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