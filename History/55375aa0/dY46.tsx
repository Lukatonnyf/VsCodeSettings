import Header from "./components/header/header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >

      <header className="border border-blue-500 bg-amber-800">
        <Header />
      </header>
      {children}
    </div>
  );
}
