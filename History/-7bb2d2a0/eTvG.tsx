import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";




export const metadata: Metadata = {
  title: "Lukatonny Ferreira Portifólio",
  description: "Welcome my Portifólio!",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {  
  
  return (
    <html lang="en">
      <body className={" bg-background "}>
        {children}
      </body>
    </html>
  );
}
