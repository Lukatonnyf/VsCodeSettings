

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
