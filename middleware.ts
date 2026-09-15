import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const BYPASS_PATHS = ['/maintenance', '/favicon.ico'];

function shouldBypass(pathname: string): boolean {
  if (BYPASS_PATHS.includes(pathname)) return true;
  if (pathname.startsWith('/_next')) return true;
  if (pathname.startsWith('/images')) return true;
  if (/\.(svg|png|jpg|jpeg|gif|webp|ico|woff2?)$/i.test(pathname)) return true;
  return false;
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (shouldBypass(pathname)) {
    return NextResponse.next();
  }

  if (process.env.MAINTENANCE_MODE === 'true') {
    const url = req.nextUrl.clone();
    url.pathname = '/maintenance';
    return NextResponse.rewrite(url);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
