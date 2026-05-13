"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { image: "/images/slider/1.webp", href: "#sweets" },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => setCurrent(index), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full" style={{ aspectRatio: '1921/650' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.104, 0.204, 0.492, 1] }}
            className="absolute inset-0"
          >
            <a href={slides[current].href} className="block w-full h-full">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slides[current].image}')` }}
              />
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators — BSS exact flickity dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-[6px] md:gap-[12px]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-[1.5px] md:rounded-[3px] ${
                i === current
                  ? 'w-[14px] md:w-[32px] opacity-100'
                  : 'w-[7px] md:w-[14px] opacity-50'
              } h-[3px] md:h-[6px] bg-[#1a1a1a]`}
              style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
