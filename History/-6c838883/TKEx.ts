import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ['en', 'pt'];

export default getRequestConfig(async({locale} => {
    if(!locales.include(locale as any)) notFound();
}))