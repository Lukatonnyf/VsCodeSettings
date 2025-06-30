import Link from "next/dist/client/link";
import FeedbackItem from "./pages/components/FeedbackItem";
import FragDestaques from "./pages/components/fragDestaques";
import Header from "./pages/header";
import HomePage from "./pages/homePage";





export default function Home() {
  return (
    <div className="w-full min-h-screen h-full ">
      <Header />
      <HomePage />
      <FragDestaques />
      <Link href="/form">Form</Link>
      <FeedbackItem />

    </div >
  );
}
