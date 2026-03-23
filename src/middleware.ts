import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'lt'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Run intl middleware (handles locale detection, rewrites, redirects, cookie)
  const response = intlMiddleware(request);

  // Inject pathname as a request header so layout's generateMetadata can build
  // correct per-page canonical URLs and hreflang tags.
  // Uses Next.js x-middleware-request-* convention to forward request headers
  // without discarding the intl rewrite that is already encoded in `response`.
  response.headers.set('x-middleware-request-x-pathname', pathname);

  return response;
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(lt|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
