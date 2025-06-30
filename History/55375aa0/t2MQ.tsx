export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" max-w-[1240px]  border border-amber-200">
      {children}
    </div>
  );
}
