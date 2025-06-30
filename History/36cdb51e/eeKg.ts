import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ['en-US', 'pt-BR'],
    defaultLocale:'',
})

export const config = [
    matcher: ['/((?!api|_next|.*\\..&).*)'],
]