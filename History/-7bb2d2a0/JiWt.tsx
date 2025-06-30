import type { Metadata } from 'next'
import './globals.css'


import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
 

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

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className={' bg-background '}>{children}</body>
    </html>
  )
}
