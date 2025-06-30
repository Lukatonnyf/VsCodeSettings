import Header from "./components/header/header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
      <Header />
      <main className="pt-10">
        {children}
      </main>
    </div >
  );
}
