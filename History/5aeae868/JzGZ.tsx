import Header from "./components/header/header"


export default function Home() {
  return (
    <div className="w-full h-screen  overflow-y-hidden bg-bg-primary flex flex-col">
      <Header />
      <div>
        <h1>Hello World</h1>
        <p>Sign In</p>
      </div>

    </div>
  );
}
