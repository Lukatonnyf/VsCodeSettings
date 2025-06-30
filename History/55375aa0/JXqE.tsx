import Header from "./components/header/header";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >

      <div className="border border-blue-500 bg-amber-800 max-w-[1240px]">
        <Header />
      </div>
      {children}
    </div>
  );
}
