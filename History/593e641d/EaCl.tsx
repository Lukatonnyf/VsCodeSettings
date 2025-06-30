"use client"
import { useEffect, useRef } from "react";
import Project1 from "./components/project1"
import Project2 from "./components/project2"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface ComponentsProps {
  element: React.ReactNode;
}

const componentsArray: ComponentsProps[] = [
  { element: <Project1 /> },
  { element: <Project2 /> },
  { element: <Project1 /> }
];

const Project = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const panels = panelsRef.current.filter(Boolean);
      const totalPanels = panels.length;

      if (!container || panels.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalPanels * 100}vh`,
          scrub: true,
          pin: true,
          markers: true
        }
      });

      panels.forEach((panel, i) => {
        gsap.set(panel, { opacity: 0, y: "100%" }); // começa escondido abaixo da tela
        tl.to(panel, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }, i); // animação começa no tempo i do timeline
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-screen" ref={containerRef}>
      <div className="relative w-full h-full">
        {
          componentsArray.map((component, i) => (
            <div
              key={i}
              ref={el => {
                if (el) panelsRef.current[i] = el;
              }}
              className="absolute inset-0 flex justify-center items-center"
              style={{ zIndex: i + 1 }}
            >
              {component.element}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Project;
