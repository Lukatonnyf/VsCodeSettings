import type { Metadata } from "next";

import './globals.css'


export const metadata: Metadata = {
  title: "Lukatonny Ferreira Links",
  description: "Conheça um pouco mais sobre mim acessando meus links!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
