'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
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
  const imgRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!imgRefs.current.length) return;

    gsap.set(imgRefs.current, {
      xPercent: (i) => i * 100,
    });

    gsap.to(imgRefs.current, {
      xPercent: '-=100',
      duration: 5,
      ease: 'none',
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(0, imgRefs.current.length * 100),
      },
    });
  }, []);


  const fullList = [...logos, ...logos]; // Duplicado

  return (
    <div className="overflow-hidden bg-black py-8">
      <div className="flex w-max gap-12" >
        {fullList.map((src, idx) => (
          <div
            key={idx}
            className="logo-slide"
            ref={(el) => {
              if (el) imgRefs.current[idx] = el;
            }}
          >
            <Image
              src={src}
              alt={`profile ${idx}`}
              width={100}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
