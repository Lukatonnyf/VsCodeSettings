// app/page.tsx (ou qualquer componente React)
"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OverlapScroll() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: "top center+=100",
            end: "bottom center",
            scrub: true,
          }
        }
      );
    });
  }, []);

  return (
    <div className="h-[300vh] bg-gray-950 text-white relative">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) sectionsRef.current[i] = el;
              }}
              className="absolute inset-0 flex items-center justify-center text-5xl font-bold bg-opacity-90 transition-all duration-500"
              style={{
                backgroundColor: `rgba(0,0,0,${0.3 + i * 0.2})`,
                zIndex: 10 - i,
              }}
            >
              Bloco {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
