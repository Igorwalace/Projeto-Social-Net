import { NextRequest, NextResponse } from 'next/server';
import { getUrl } from './services/get-url';

export function middleware(request: NextRequest) {
    const token = request.cookies.get(process.env.PATHNAME_COOKIES || '');
    const pathname = request.nextUrl.pathname;

    if (pathname === '/' && token) {
        return NextResponse.redirect(new URL(getUrl('/pages/home')));
    }

    if (pathname.includes('/pages') && !token) {
        return NextResponse.redirect(new URL(getUrl('/')));
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
