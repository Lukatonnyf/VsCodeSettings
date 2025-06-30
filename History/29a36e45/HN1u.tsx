// import Image from "next/image";
import Carousel from "@/ui/carousel";
import Presentation from "./components/presentation/presentation";
// import Project from "./components/projects/project";
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi"
import Project from "./components/projects/project";
const logoItems = [
  { id: 1, imageUrl: <BiLogoHtml5 />, textLenaguage: "HTML5", altText: 'Client Logo 1', hint: 'company logo' },
  { id: 2, imageUrl: <BiLogoCss3 />, textLenaguage: "CSS3", altText: 'Client Logo 2', hint: 'brand symbol' },
  { id: 3, imageUrl: <BiLogoJavascript />, textLenaguage: "JavaScript", altText: 'Client Logo 3', hint: 'tech company' },
  { id: 4, imageUrl: <BiLogoReact />, textLenaguage: "ReactJs", altText: 'Client Logo 6', hint: 'business icon' },
  { id: 5, imageUrl: <BiLogoTypescript />, textLenaguage: "NextJs", altText: 'Client Logo 4', hint: 'startup emblem' },
  { id: 6, imageUrl: <BiLogoTailwindCss />, textLenaguage: "TailwindCss", altText: 'Client Logo 5', hint: 'corporate mark' },
];

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center w-full
    min-h-screen h-full- pt-12  text-white pb-10" >


      <Presentation />

      {/* Carousel Component */}
      <div className="max-w-[1120px] w-full px-5"
        style={{
          boxShadow: 'inset 20px 0 30px -10px rgba(10,10,10,0.8), inset -20px 0 30px -10px rgba(10,10,10,0.8)'
        }}>

        <Carousel items={logoItems} autoplayInterval={2500} />
      </div>


      <div className="w-full mt-10 max-w-[1120px] px-5">
        <Project />
      </div>
    </div >
  );
}
