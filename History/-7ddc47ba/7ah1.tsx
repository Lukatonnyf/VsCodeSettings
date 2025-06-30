import FragDestaques from "./components/subcomponents/fragDestaques";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./components/homePage";
import AboutAbner from "./components/aboutAbner";

export default function Home() {
  return (
    <div className="w-full min-h-screen h-full ">
      <Header />
      <HomePage />
      <FragDestaques />
      <AboutAbner />
      <Footer />
    </div >
  );
}
