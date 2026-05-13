"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { signatureSweets } from "@/data/sweets";
import { SectionHeading, CardCorners } from "./Ornaments";

export default function SignatureSweets() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sweets" className="py-24 md:py-36 bg-cream relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, var(--color-saffron) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, var(--color-gold) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              label="Signature Collection"
              title="Crafted with"
              titleAccent="Devotion & Love"
              description="Each creation is a masterpiece — handcrafted using time-honoured recipes and the purest ingredients from the heart of Braj."
            />
          </motion.div>
        </motion.div>

        {/* Sweet cards — editorial alternating layout */}
        <div className="space-y-20 md:space-y-28">
          {signatureSweets.map((sweet, index) => (
            <SweetCard key={sweet.id} sweet={sweet} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SweetCard({ sweet, index }: { sweet: (typeof signatureSweets)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`grid md:grid-cols-12 gap-8 md:gap-6 items-center`}
    >
      {/* Image side */}
      <div className={`md:col-span-7 ${isEven ? "" : "md:order-2"}`}>
        <div className="relative group">
          {/* Decorative offset background */}
          <div
            className={`absolute ${isEven ? "-right-3 -bottom-3" : "-left-3 -bottom-3"} w-full h-full opacity-20 transition-opacity duration-500 group-hover:opacity-40`}
            style={{ backgroundColor: sweet.accent }}
          />

          {/* Image container with ornamental frame */}
          <div className="relative overflow-hidden bg-warm-white p-2">
            <div className="relative overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={sweet.image}
                alt={sweet.name}
                className="w-full h-[350px] md:h-[450px] object-cover"
                loading="lazy"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-600" />

              {/* Hindi name overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-4 left-4 font-serif text-4xl md:text-5xl text-warm-white/20 pointer-events-none"
              >
                {sweet.hindi}
              </motion.div>
            </div>
            <CardCorners color={sweet.accent} />
          </div>

          {/* Accent bar */}
          <div
            className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out"
            style={{ backgroundColor: sweet.accent }}
          />
        </div>
      </div>

      {/* Content side */}
      <div className={`md:col-span-5 ${isEven ? "" : "md:order-1"} ${isEven ? "md:pl-8" : "md:pr-8"}`}>
        {/* Tagline badge */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="w-8 h-[2px]"
            style={{ backgroundColor: sweet.accent }}
          />
          <span
            className="text-[11px] tracking-[0.35em] uppercase font-medium"
            style={{ color: sweet.accent }}
          >
            {sweet.tagline}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown-dark mb-2 leading-tight font-medium">
          {sweet.name}
        </h3>

        {/* Hindi subtitle */}
        <p className="font-serif text-lg text-brown-light/40 italic mb-6">{sweet.hindi}</p>

        {/* Description */}
        <p className="text-brown-light/65 text-[15px] leading-[1.8] mb-8">
          {sweet.description}
        </p>

        {/* Decorative separator */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rotate-45 border" style={{ borderColor: sweet.accent }} />
          <div className="flex-1 h-[0.5px]" style={{ backgroundColor: `${sweet.accent}30` }} />
          <div className="w-2 h-2 rotate-45 border" style={{ borderColor: sweet.accent }} />
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ x: 8 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-4 group/link"
        >
          <span
            className="text-[12px] tracking-[0.25em] uppercase font-medium"
            style={{ color: sweet.accent }}
          >
            Order Now
          </span>
          <span
            className="block w-8 h-[1px] group-hover/link:w-14 transition-all duration-400"
            style={{ backgroundColor: sweet.accent }}
          />
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ color: sweet.accent }}>
            <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
