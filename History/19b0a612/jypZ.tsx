'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const logos = [
  '/profile.jpeg',
  '/profile.jpeg',
  '/profile.jpeg',
  '/profile.jpeg',
  '/profile.jpeg',
  '/profile.jpeg',
];

export default function ImageCarousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const boxes = gsap.utils.toArray<HTMLDivElement>('.logo-slide');
    const totalBoxes = boxes.length;

    // Distribui os logos com base na largura de cada um
    gsap.set(boxes, {
      xPercent: (i) => i * 100,
    });

    gsap.to(boxes, {
      xPercent: `-=${(100 * logos.length)}`,
      duration: 20,
      ease: 'none',
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(0, totalBoxes * 100),
      },
    });
  }, []);

  const fullList = [...logos, ...logos]; // duplicado

  return (
    <div className="overflow-hidden bg-black py-8 w-full">
      <div
        className="flex w-max gap-12"
        ref={wrapperRef}
      >
        {fullList.map((src, idx) => (
          <div
            key={idx}
            className="logo-slide w-[80px] aspect-square flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Logo ${idx}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
