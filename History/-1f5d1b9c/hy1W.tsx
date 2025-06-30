import FragDestaques from "./pages/fragDestaques";
import Header from "./pages/header";





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
