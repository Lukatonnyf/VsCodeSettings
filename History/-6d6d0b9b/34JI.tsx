import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { IoIosPlanet } from "react-icons/io";
function Loading() {
  // const { text } = useTypewriter({
  //   words: ["Developer", "Designer", "Photographer"],
  //   loop: {},
  // });



  const plannet = useRef<HTMLDivElement>(null)
  const test = useRef<HTMLDivElement>(null)


  //animação do card geral
  useLayoutEffect(() => {
    gsap.fromTo(
      plannet.current,
      { opacity: 0, },
      { opacity: 1, duration: 1, ease: 'power2.out', delay: 1.9, scale: 1.5 }
    );

    gsap.fromTo(
      test.current,
      { opacity: 0, x: -50, },
      { opacity: 1, x: -2, duration: 1, ease: 'power2.out', delay: 1.9 }
    );

  }, []);


  return (
    <>
      <div>
        <div className="flex justify-center items-center
        w-full min-h-screen h-full ">
          <div ref={plannet} >
            <IoIosPlanet className="text-textopaco size-10 " />
          </div>
          <h1 ref={test} className="text-textopaco font-heading font-semibold text-lg">
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
