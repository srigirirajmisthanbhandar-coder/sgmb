"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MandalaRing, LotusIcon } from "./Ornaments";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1666190064817-8e4373890498?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/80 via-brown-dark/60 to-brown-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/40 via-transparent to-saffron-dark/20" />
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,162,61,0.3) 1px, transparent 0)",
            backgroundSize: "30px 30px"
          }}
        />
      </div>

      {/* Mandala decorations */}
      <MandalaRing className="absolute -top-40 -right-40 w-[500px] h-[500px] text-gold" />
      <MandalaRing className="absolute -bottom-60 -left-60 w-[600px] h-[600px] text-saffron" />

      {/* Floating decorative circles */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[8%] w-24 h-24 rounded-full border border-gold/15"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] right-[10%] w-36 h-36 rounded-full border border-gold/10"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[20%] w-3 h-3 rounded-full bg-gold/20"
      />

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Lotus icon */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
          <LotusIcon size={44} className="text-gold animate-float" />
        </motion.div>

        {/* Location badge */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
          <span className="block w-8 h-[0.5px] bg-gold/40" />
          <span className="text-gold/80 text-[11px] tracking-[0.6em] uppercase">
            Govardhan &middot; Est. Since Generations
          </span>
          <span className="block w-8 h-[0.5px] bg-gold/40" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeInUp}
          className="font-serif leading-[0.95] mb-4"
        >
          <span className="block text-gold-light text-2xl sm:text-3xl md:text-4xl font-light italic mb-3 tracking-wide">
            श्री गिर्राज
          </span>
          <span className="block text-warm-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-light">
            Mishtan
          </span>
          <span className="block gold-shimmer text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-semibold mt-1">
            Bhandar
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-warm-white/60 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          From the sacred land of Govardhan — handcrafted premium Indian sweets
          for life&apos;s most cherished celebrations
        </motion.p>

        {/* Decorative line */}
        <motion.div variants={fadeInUp} className="flex justify-center mb-10">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <a
            href="#sweets"
            className="group relative px-10 py-4 bg-saffron text-warm-white text-[13px] tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,120,28,0.3)]"
          >
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-saffron-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a
            href="#gifting"
            className="group px-10 py-4 border border-gold/40 text-gold-light text-[13px] tracking-[0.2em] uppercase font-light hover:bg-gold/10 hover:border-gold/70 transition-all duration-500"
          >
            Corporate Gifting
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade with ornamental element */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-32 bg-gradient-to-t from-cream to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-gold/40 flex justify-center pt-1.5"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[2px] h-2 rounded-full bg-gold/60"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
