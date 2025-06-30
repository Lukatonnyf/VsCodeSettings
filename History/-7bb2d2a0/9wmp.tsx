import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";




export const metadata: Metadata = {
  title: "Lukatonny Ferreira Portifólio",
  description: "Welcome",
};


export const metadata: Metadata = {
  title: "Lukatonny Ferreira - Portfólio",
  description: "Conheça o portfólio de Lukatonny Ferreira, desenvolvedor web.",
  openGraph: {
    title: "Lukatonny Ferreira - Portfólio",
    description: "Conheça o portfólio de Lukatonny Ferreira, desenvolvedor web.",
    url: "https://seu-dominio.com/",
    siteName: "Lukatonny Ferreira",
    images: [
      {
        url: "https://seu-dominio.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {  
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png"  />
      </head>
      <body className={" bg-background "}>
        {children}
      </body>
    </html>
  );
}
