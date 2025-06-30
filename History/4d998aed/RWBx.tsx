import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-poppins',
});

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="pt-BR" className={poppins.variable}>

      {children}
    </div>
  );
}
