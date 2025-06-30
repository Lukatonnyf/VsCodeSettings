import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

import { Inter } from 'next/font/google';
import { i18n } from '@/config/i18n.config';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}

export const metadata: Metadata = {
  title: {
    default: 'Lukatonny Portifólio',
    template: '%s | Lukatonny Ferreira',
    absolute: 'Lukatonny Ferreira Portifólio',
  },
  robots: {
    follow: true,
    index: true,
  },
}



export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={' bg-background '}>{children}</body>
    </html>
  )
}
