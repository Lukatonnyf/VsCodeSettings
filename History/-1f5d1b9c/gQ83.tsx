

import FeedbackItem from "./page/FeedbackItem";
import FragDestaques from "./page/fragDestaques";
import Header from "./page/header";
import HomePage from "./page/homePage";



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
