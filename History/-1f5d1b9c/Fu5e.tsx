import FragDestaques from "./components/fragDestaques";
import Header from "./components/header";
import HomePage from "./components/homePage";


export default function Home() {
  return (
    <div className="w-full min-h-screen h-full
    max-w-[1240px] mx-auto px-5 py-8 md:py-0 ">
      <Header />
      <HomePage />
      {/* <FragDestaques /> */}
    </div>
  );
}
