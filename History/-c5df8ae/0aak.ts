import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Garante que `locale` nunca seja undefined, definindo um padrão
  const resolvedLocale = locale ?? "pt"; 

  if (!locales.includes(resolvedLocale)) {
    notFound();
  }

  return {
    locale: resolvedLocale, // ✅ Agora sempre retornamos uma string válida
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
  };
});
