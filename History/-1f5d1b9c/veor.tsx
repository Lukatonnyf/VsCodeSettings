

import FeedbackItem from "./components/FeedbackItem";
import FragDestaques from "./components/fragDestaques";
import Header from "./components/header";
import HomePage from "./components/homePage";



export default function Home() {
  return (
    <div className="w-full min-h-screen h-full ">
      <Header />
      <HomePage />
      <FragDestaques />
      <FeedbackItem />

    </div >
  );
}
