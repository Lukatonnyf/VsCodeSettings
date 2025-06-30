import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ['en', 'pt'];

export default getRequestConfig(async ({locales} => {
    if(!locales.includes(locales as any)) notFound();

    return{
        messages:(await import(`../messages/${locale}.json`))
    }
}))