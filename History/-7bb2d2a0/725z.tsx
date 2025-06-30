import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";




export const metadata: Metadata = {
  title: "Lukatonny Ferreira Portifólio",
  description: "Welcome my Portifólio!",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {  
  
  return (
    <html lang="en">
      <body className={" bg-background "}>
      <header className="p-4 flex items-center">
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </header>
        {children}
      </body>
    </html>
  );
}
