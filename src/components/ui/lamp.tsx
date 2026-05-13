"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
  bgColor = "#0b3753",
  glowColor = "#871a45",
  glowLight = "#a0224f",
}: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  glowColor?: string;
  glowLight?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden w-full z-0",
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0" style={{ transform: "scaleY(1.25)" }}>
        {/* Left conic gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "42rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, ${glowColor}, transparent, transparent)`,
          }}
        >
          <div className="absolute w-full left-0 h-40 bottom-0 z-20" style={{ backgroundColor: bgColor, maskImage: "linear-gradient(to top, white, transparent)", WebkitMaskImage: "linear-gradient(to top, white, transparent)" }} />
          <div className="absolute w-40 h-full left-0 bottom-0 z-20" style={{ backgroundColor: bgColor, maskImage: "linear-gradient(to right, white, transparent)", WebkitMaskImage: "linear-gradient(to right, white, transparent)" }} />
        </motion.div>

        {/* Right conic gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "42rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto left-1/2 h-56 overflow-visible"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, ${glowColor})`,
          }}
        >
          <div className="absolute w-40 h-full right-0 bottom-0 z-20" style={{ backgroundColor: bgColor, maskImage: "linear-gradient(to left, white, transparent)", WebkitMaskImage: "linear-gradient(to left, white, transparent)" }} />
          <div className="absolute w-full right-0 h-40 bottom-0 z-20" style={{ backgroundColor: bgColor, maskImage: "linear-gradient(to top, white, transparent)", WebkitMaskImage: "linear-gradient(to top, white, transparent)" }} />
        </motion.div>

        {/* Background blur */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 blur-2xl" style={{ backgroundColor: bgColor, transform: "translateY(3rem) scaleX(1.5)" }} />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Glow orb */}
        <div className="absolute inset-auto z-50 h-36 w-[36rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl" style={{ backgroundColor: glowColor }} />

        {/* Animated inner glow */}
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "22rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 rounded-full blur-2xl"
          style={{ backgroundColor: glowLight, transform: "translateY(-6rem)" }}
        />

        {/* Animated light bar */}
        <motion.div
          initial={{ width: "20rem" }}
          whileInView={{ width: "42rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-[3px] rounded-full"
          style={{ backgroundColor: glowLight, transform: "translateY(-7rem)", boxShadow: `0 0 20px ${glowLight}, 0 0 60px ${glowColor}` }}
        />

        {/* Top mask */}
        <div className="absolute inset-auto z-40 h-44 w-full" style={{ backgroundColor: bgColor, transform: "translateY(-12.5rem)" }} />
      </div>

      <div className="relative z-50 flex flex-col items-center px-5" style={{ transform: "translateY(-20rem)" }}>
        {children}
      </div>
    </div>
  );
};
