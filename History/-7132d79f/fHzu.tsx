import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Fragrância divina",
  description: "Para aqueles que querem Possuir um cheiro marcante.",
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
      <body className="
       bg-background ">
        {children}
      </body>
    </html>
  );
}
