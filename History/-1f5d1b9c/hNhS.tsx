
import Carousel from "./components/carousel";
import FeedbackItem from "./components/Feedbacks";
import Header from "./components/header";
import HomePage from "./components/homePage";
import FormFeedback from "./components/subcomponents/formFeedback";


export default function Home() {
  return (
    <div className="w-full min-h-screen h-full ">
      <Header />
      <HomePage />
      {/* <Carousel /> */}
      <FeedbackItem />
      <FormFeedback />
    </div >
  );
}
