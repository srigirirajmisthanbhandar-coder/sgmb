"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LampContainer } from "@/components/ui/lamp";

const collections = [
  {
    name: "Bestselling Hampers",
    image: "/images/products/festive-hamper.jpg",
    href: "#sweets",
  },
  {
    name: "Chocolate Hampers",
    image: "/images/products/choco-hamper.png",
    href: "#sweets",
  },
  {
    name: "Luxury Gift Hampers",
    image: "/images/products/luxury-hamper.png",
    href: "#gifting",
  },
];

export default function FestiveCollections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <section id="festive" ref={ref} style={{ backgroundColor: "#0f172a" }}>
      <LampContainer bgColor="#0f172a" glowColor="#06b6d4" glowLight="#22d3ee" className="min-h-[700px] md:min-h-[750px] pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="container-main w-full"
          style={{ maxWidth: "1430px" }}
        >
          <div className="section-header">
            <span className="eyebrow" style={{ color: "#fb9e5b" }}>
              Collections
            </span>
            <h2 className="font-serif" style={{ color: "#fff" }}>
              Say it with Sri Girraj
            </h2>
            <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.55)" }}>
              For every celebration, mood and person, our curated collections have it all!
            </p>
          </div>

          {/* Collection circles */}
          <div className="flex justify-center gap-[20px] md:gap-[30px] lg:gap-[50px] flex-wrap">
            {collections.map((col, i) => (
              <motion.a
                key={col.name}
                href={col.href}
                className="group flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              >
                <div
                  className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden mb-4 md:mb-5"
                  style={{
                    border: "2px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 8px 32px rgba(6,182,212,0.2), 0 0 0 1px rgba(255,255,255,0.05) inset",
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-[1.07]"
                    style={{
                      backgroundImage: `url('${col.image}')`,
                      transition: "transform .5s cubic-bezier(.104,.204,.492,1)",
                    }}
                  />
                </div>
                <span
                  className="text-[0.8125rem] font-medium text-center"
                  style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.01em" }}
                >
                  {col.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </LampContainer>
    </section>
  );
}
