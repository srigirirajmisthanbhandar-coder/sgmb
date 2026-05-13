"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "3500+", label: "Corporate Clients" },
  { number: "1000+", label: "Weddings Celebrated" },
  { number: "3,22,172", label: "Hampers Delivered" },
  { number: "Pan-India", label: "Delivery Network" },
];

export default function TrustStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container-main"
      >
        <div className="section-header">
          <span className="eyebrow">Our Numbers</span>
          <h2 className="font-serif text-[#0b3753]">
            Trusted Across India
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '560px' }}>
            From gifting across corporates to personal celebrations, Sri Girraj is the goto!
          </p>
        </div>

        {/* Stats — BSS exact: border 1px, radius 3px */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] md:gap-[20px]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#e5e5e5] rounded-[10px] py-5 md:py-6 px-4 text-center"
            >
              <span className="font-serif text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#0b3753] block leading-tight" style={{ letterSpacing: '-0.02em' }}>
                {stat.number}
              </span>
              <span className="text-[#6b6b6b] text-[13px] font-medium block mt-2" style={{ letterSpacing: '0.02em' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
