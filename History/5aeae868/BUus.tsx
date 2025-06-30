import Header from "./components/header/header"


export default function Home({ className }: { className: string }) {
  return (
    <div className={`${className} w-full bg-bg-primary p-[30px]`}	>
      <Header />
      <div>
        <h1>Hello World</h1>
        <p>Sign In</p>
      </div>

    </div>
  );
}
