// import { useRef } from "react";
"use client"
import { useEffect, useRef } from "react";
import Project1 from "./components/project1"
import Project2 from "./components/project2"

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface ComponentsProps {
  // id: number,
  element: React.ReactNode;
}

const componentsArray: ComponentsProps[] = [
  {
    // id: 1,
    element: <Project1 key={1} />
  },
  {
    // id: 2,
    element: <Project2 key={2} />
  },
  {
    // id: 3,
    element: <Project1 key={3} />
  }
]


const Project = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: `+=${componentsArray.length * 500}`,
          scrub: true,
          pin: true,
          // pinSpacing: false,
          markers: true,
        }
      })

      panelsRef.current.forEach((panel) => {
        const container = containerRef.current;
        const yValue = container ? `+=${container.offsetHeight * 1}` : '+=100';
        tl.fromTo(
          panel,
          { opacity: 1, y: yValue },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        )
      })
    }, containerRef)

    return () => ctx.revert()

    // panelsRef.current.forEach((panel) => {
    //   /**@FUNCIONAL_ABAIXO */
    //   ScrollTrigger.create({
    //     trigger: panel as HTMLElement,
    //     start: "center center",
    //     // end: "+=100px",
    //     // end: `+=${panelsRef.current.length * 100}%`, // => pra teste
    //     end: `+=${(panel as HTMLElement).offsetHeight}`,
    //     scrub: 1,
    //     // toggleActions: 'restar none reverse none',
    //     // invalidateOnRefresh: true,
    //     pin: true,
    //     pinSpacing: false,
    //     markers: true,

    //   });
    // });

  }, []);


  return (

    <div
      className="relative w-full h-screen"
      ref={containerRef}>
      <div className="relative w-full h-[70dvh]">
        {
          componentsArray.map((component, i) => (
            <div
              key={i}
              ref={el => {
                if (el) panelsRef.current[i] = el;
              }}
              className="absolute inset-0 pointer-events-none md:flex md:justify-center
              md:items-center"
              style={{ zIndex: i + 1 }}>
              <div className="pointer-events-auto">
                {component.element}
              </div>
            </div>
          ))
        }
      </div>
    </div >
  )
}


export default Project;
