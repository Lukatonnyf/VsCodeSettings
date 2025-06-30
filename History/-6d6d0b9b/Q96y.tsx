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
    const tl = gsap.timeline();

    tl.fromTo(
      planetRef.current,
      { opacity: 0, scale: 1 },
      {
        opacity: 1,
        scale: 1.2,
        duration: 0.6,
        ease: 'power2.out',
        delay: 1.5,
      }
    )
      .to(planetRef.current, {
        y: -20,
        scale: 1.4,
        duration: 0.3,
        ease: 'power1.out',
      })
      .to(planetRef.current, {
        y: 0,
        scale: 1.2,
        duration: 0.3,
        ease: 'bounce.out',
      })
      .to(planetRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: 'power2.inOut',
        delay: 0.3,
      });

    gsap.fromTo(
      testRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: -2,
        duration: 1.3,
        ease: 'power2.out',
        delay: 2,
      }
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
