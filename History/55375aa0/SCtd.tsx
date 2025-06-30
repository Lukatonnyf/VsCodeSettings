import Header from "./components/header/header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="relative z-50">
        <Header />
      </div>
      <main className="mt-10">
        {children}
      </main>
    </div >
  );
}
