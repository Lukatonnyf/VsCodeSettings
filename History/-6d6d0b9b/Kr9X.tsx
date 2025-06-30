import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { IoIosPlanet } from "react-icons/io";
function Loading() {
  // const { text } = useTypewriter({
  //   words: ["Developer", "Designer", "Photographer"],
  //   loop: {},
  // });

  useLayoutEffect(() => {
    gsap.to(".box", {
      duration: 3,
      y: 0,
      opacity: 1,
      delay: 0.5,
      scale: 1,
      filter: "blur(0px)",
    });
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center items-center
        w-full min-h-screen h-full ">
          <IoIosPlanet className="text-textopaco size-10 lg:size-20" />
          <h1 className="text-textopaco font-heading font-semibold text-lg">
            Plan
            <span className="text-btncolor">
              {/* &lt; */}
              net
              {/* &gt; */}
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Loading;
