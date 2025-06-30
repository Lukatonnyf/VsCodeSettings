import FragDestaques from "./components/fragDestaques";
import Header from "./components/header";
import HomePage from "./components/homePage";


export default function Home() {
  return (
    <div className="w-full min-h-screen h-full ">
      <Header />
      <div className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
        <HomePage />
        {/* <FragDestaques /> */}
      </div>
    </div>
  );
}
