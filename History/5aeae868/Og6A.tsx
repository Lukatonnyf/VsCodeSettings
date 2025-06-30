import Header from "./components/header/header"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24 gap-10">
      <Header />
      <div>
        <h1>Hello World</h1>
        <p>Sign In</p>
      </div>

    </div>
  );
}
