"use client";
import { NextIntlClientProvider } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

export default function Providers({ children, locale }: { children: ReactNode, locale: string }) {
  return (
    <NextIntlClientProvider locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
