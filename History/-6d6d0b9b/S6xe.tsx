import { useLayoutEffect } from "react";
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
    if (card.current) {
      gsap.fromTo(
        card.current,
        {
          opacity: 0,
          y: 100, // posição inicial (100px à esquerda)
        }, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        delay: 1,
      })
    }
  }, [])

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
