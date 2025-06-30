
"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface CarouselItem {
  id: string | number;
  imageUrl: string | ReactNode;
  textLenaguage: string | ReactNode,
  altText: string;
  hint: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplayInterval?: number; // Time in ms for each item to scroll by
}

const LOGO_WIDTH = 150; // px, width for each logo slot
const LOGO_GAP = 32; // px, gap between logos
const EFFECTIVE_LOGO_WIDTH = LOGO_WIDTH + LOGO_GAP;

const Carousel: React.FC<CarouselProps> = ({ items, autoplayInterval = 2000 }) => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  const numOriginalItems = items.length;
  const displayedItems = numOriginalItems > 0 ? [...items, ...items] : [];

  useEffect(() => {
    if (!slidesContainerRef.current || !carouselWrapperRef.current || numOriginalItems === 0 || !gsap) return;

    const slidesContainer = slidesContainerRef.current;
    const singleSetWidth = numOriginalItems * EFFECTIVE_LOGO_WIDTH;

    gsap.set(slidesContainer, { x: 0 });

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(slidesContainer, {
      x: `-=${singleSetWidth}`,
      duration: (numOriginalItems * autoplayInterval) / 1000,
      ease: 'none',
    });

    // Handle hover to pause
    const wrapper = carouselWrapperRef.current;
    const play = () => tl.play();
    const pause = () => tl.pause();

    wrapper.addEventListener('mouseenter', pause);
    wrapper.addEventListener('mouseleave', play);

    return () => {
      tl.kill();
      gsap.set(slidesContainer, { x: 0 });
      wrapper.removeEventListener('mouseenter', pause);
      wrapper.removeEventListener('mouseleave', play);
    };
  }, [numOriginalItems, autoplayInterval, items, displayedItems.length]); // items dependency to recalc if items change

  if (numOriginalItems === 0) {
    return <div className="text-center p-4 text-muted-foreground">No logos to display.</div>;
  }

  return (
    <div
      className="relative w-full max-w-full mx-auto overflow-hidden py-4  border-blue-300"
      ref={carouselWrapperRef}
      aria-label="Scrolling partner logos"
    >
      <div
        ref={slidesContainerRef}
        className="flex"
        style={{ width: `${displayedItems.length * EFFECTIVE_LOGO_WIDTH}px` }}
      >
        {displayedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 flex justify-center items-center gap-1 text-degradetext-to"
            style={{ width: `${LOGO_WIDTH}px`, marginRight: `${LOGO_GAP}px` }}
          >
            <p
              className={`w-${LOGO_WIDTH} w-auto object-contain text-3xl `}
            >{item.imageUrl}</p>
            {/* <Image
              src={item.imageUrl}
              alt={item.altText}
              width={LOGO_WIDTH}
              height={80}
              className="h-5 w-auto object-contain  "
              data-ai-hint={item.hint}
              priority={index < numOriginalItems}
              draggable="false"
            /> */}
            <p className=' text-sm font-bold '>{item.textLenaguage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
