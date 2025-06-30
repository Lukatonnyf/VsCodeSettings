
import Carousel from "./components/carousel";
import FragDestaques from "./components/fragDestaques";
import Header from "./components/header";
import HomePage from "./components/homePage";
import FormFeedback from "./components/subcomponents/formFeedback";


export default function Home() {
  return (
    <div className="w-full min-h-screen h-full ">
      <Header />
      <HomePage />
      {/* <Carousel /> */}
      <FragDestaques />
      <FormFeedback />
    </div >
  );
}
