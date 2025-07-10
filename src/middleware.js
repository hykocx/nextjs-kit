import { NextResponse } from 'next/server';

export function middleware(request) {
    //DEV AUTH - START
    if (process.env.DEV_AUTH_ENABLED === 'true' && process.env.NODE_ENV !== 'development') {
        const authHeader = request.headers.get('authorization');
        if (authHeader) {
            const authValue = authHeader.split(' ')[1];
            const [user, pwd] = atob(authValue).split(':');
            if (user === process.env.DEV_AUTH_USERNAME && pwd === process.env.DEV_AUTH_PASSWORD) {
                return NextResponse.next();
            }
        }
        return new NextResponse('This site is under development. Authentication required.', {
            status: 401,
            headers: {'WWW-Authenticate': 'Basic realm="Secure Area"'},
        });
    }
    //DEV AUTH - END

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
}; 