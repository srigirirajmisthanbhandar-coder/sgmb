"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { testimonials } from "@/data/sweets";
import { SectionHeading, CardCorners } from "./Ornaments";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-36 bg-cream relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-saffron/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/[0.04] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading
              label="Voices of Love"
              title="Cherished by"
              titleAccent="Thousands"
              description="The sweetest reward is the trust and love of the families we serve."
            />
          </motion.div>

          {/* Testimonial cards */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-5 lg:gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.id} variants={fadeInUp}>
                <TestimonialCard testimonial={t} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="group relative bg-warm-white border border-beige hover:border-gold/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(200,162,61,0.08)]">
      {/* Inner frame */}
      <div className="relative p-8 md:p-10">
        <CardCorners color="#C8A23D" />

        {/* Large quote mark */}
        <div className="absolute top-6 right-8 font-serif text-8xl text-gold/10 leading-none select-none">
          &ldquo;
        </div>

        {/* Stars */}
        <div className="flex gap-1.5 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-saffron" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Content */}
        <p className="text-brown-light/70 text-[15px] leading-[1.85] mb-8 relative z-10 italic">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Separator */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
          <div className="flex-1 h-[0.5px] bg-beige" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/40" />
        </div>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center border border-gold/20">
            <span className="font-serif text-saffron text-lg font-semibold">
              {testimonial.name[0]}
            </span>
          </div>
          <div>
            <p className="text-brown-dark font-medium text-sm tracking-wide">
              {testimonial.name}
            </p>
            <p className="text-brown-light/40 text-xs tracking-wider uppercase">
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </div>
  );
}
