import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'lt'],
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Run intl middleware first (locale detection, redirects, locale cookie)
  const intlResponse = intlMiddleware(request);

  // If intl middleware is redirecting, return as-is (redirect has no canonical)
  if (intlResponse.status !== 200) {
    return intlResponse;
  }

  // Inject current pathname into request headers so layout's generateMetadata
  // can build correct per-page canonical URLs and hreflang tags
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Transfer the locale preference cookie set by next-intl
  const localeCookie = intlResponse.cookies.get('NEXT_LOCALE');
  if (localeCookie) {
    response.cookies.set('NEXT_LOCALE', localeCookie.value, { path: '/' });
  }

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
