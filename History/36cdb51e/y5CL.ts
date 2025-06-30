import createMiddleware from "next-intl/middleware";
import { locales } from "next-intl";

export default createMiddleware({
    locales,
    defaultLocale: 'en'
})