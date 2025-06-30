import Header from "./components/header/header"


export default function Home() {
  return (
    <div className={` w-full dark:bg-bg-primary dark:text-white p-[30px]`}	>
      <Header />
      <div>
        <h1>Hello World</h1>
        <p>Sign In</p>
      </div>

    </div>
  );
}
