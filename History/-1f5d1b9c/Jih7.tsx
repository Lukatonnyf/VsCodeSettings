import FeedbackItem from "./pages/FeedbackItem";
import FragDestaques from "./pages/fragDestaques";
import Header from "./pages/header";
import HomePage from "./pages/homePage";





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
