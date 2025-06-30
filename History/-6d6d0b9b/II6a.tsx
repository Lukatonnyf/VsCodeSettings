import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { IoIosPlanet } from "react-icons/io";
function Loading() {
  // const { text } = useTypewriter({
  //   words: ["Developer", "Designer", "Photographer"],
  //   loop: {},
  // });



  const buttons = useRef<HTMLDivElement>(null)


  //animação do card geral
  useLayoutEffect(() => {
    gsap.fromTo(
      text1.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1.9 }
    );

    gsap.fromTo(
      text2.current,
      { opacity: 0, x: 50, },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', delay: 1.9 }
    );

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
