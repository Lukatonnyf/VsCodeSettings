import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lukatonny S. Ferreira Portifólio",
  description: "Portifólio Front End developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logodosite.png" type="image/png" />
      </head>
      <body className={`  bg-background ${geistSans.variable} ${geistMono.variable}`}>
        <main className=" w-full ">
          {children}
        </main>
      </body>
    </html>
  );
}
