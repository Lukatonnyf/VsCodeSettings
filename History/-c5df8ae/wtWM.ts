import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config"; // Supondo que seja: const locales = ["pt", "en"] as const;

export default getRequestConfig(async ({ locale }) => {
    // Definir um locale padrão, garantindo que seja um dos permitidos
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const resolvedLocale = locales.includes(locale as any) ? (locale as "pt" | "en") : "pt";

    if (!locales.includes(resolvedLocale)) {
        notFound();
    }

    return {
        locale: resolvedLocale, // ✅ Agora é do tipo correto
        messages: (await import(`./messages/${resolvedLocale}.json`)).default,
    };
});
