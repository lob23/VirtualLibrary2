import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
 
export async function middleware(request) {
    const res = await fetch('http://localhost:3030/role', {
        method: 'GET',
        headers: { Cookie: cookies().toString() }
    });
    if (res.status === 401) {
        if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') return NextResponse.next();
        return NextResponse.redirect(new URL('/login', request.url));
    }
    const user = await res.json();
    switch (user.User_authorizationLevel) {
        case 3:
            switch (request.nextUrl.pathname) {
                case '/':
                case '/homeReader':
                case '/homeAuthor':
                case '/composer':
                case '/booksetting':
                case '/request':
                case '/profile':
                case '/bookSubmission':
                case '/authorbookmanagement':
                case '/login':
                    return NextResponse.redirect(new URL('/homeLibrarian', request.url));
            }
            break;
        case 2:
            switch (request.nextUrl.pathname) {
                case '/':
                case '/homeReader':
                case '/homeLibrarian':
                case '/request':
                case '/librarian':
                case '/librarian/manageBook': 
                case '/librarian/manageRequest': 
                case '/librarian/manageUser':
                case '/librarian/librarianBDetail':
                case '/librarian/librarianReading':
                case '/verifyAuthorRequest':
                case '/login':
                    return NextResponse.redirect(new URL('/homeAuthor', request.url));
            }
            break;
        case 1:
            switch (request.nextUrl.pathname) {
                case '/':
                case '/homeAuthor':
                case '/homeLibrarian':
                case '/librarian':
                case '/librarian/manageBook': 
                case '/librarian/manageRequest': 
                case '/librarian/manageUser':
                case '/librarian/librarianBDetail':
                case '/librarian/librarianReading':
                case '/composer':
                case '/booksetting': 
                case '/verifyAuthorRequest':
                case '/bookSubmission':
                case '/authorbookmanagement':
                case '/login':
                    return NextResponse.redirect(new URL('/homeReader', request.url));
            }
            break;
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!favicon.ico|font|image|_next|$).*)']
}