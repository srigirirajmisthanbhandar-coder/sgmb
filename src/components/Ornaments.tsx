"use client";

import { motion } from "framer-motion";

/* ── Paisley-inspired SVG divider ── */
export function OrnamentalDivider({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <svg width="60" height="12" viewBox="0 0 60 12" fill="none" className="opacity-50">
        <path d="M0 6h18M42 6h18" stroke={color} strokeWidth="0.75" />
        <path d="M20 6a4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4z" stroke={color} strokeWidth="0.75" fill="none" />
        <circle cx="30" cy="6" r="1.5" fill={color} opacity="0.6" />
        <path d="M26 2l4 4-4 4M34 2l-4 4 4 4" stroke={color} strokeWidth="0.5" opacity="0.4" />
      </svg>
    </div>
  );
}

/* ── Lotus icon ── */
export function LotusIcon({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 38c0 0-8-6-8-16s8-16 8-16 8 6 8 16-8 16-8 16z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
      <path d="M24 38c0 0-14-4-16-14S24 6 24 6" stroke="currentColor" strokeWidth="0.75" opacity="0.4" fill="none" />
      <path d="M24 38c0 0 14-4 16-14S24 6 24 6" stroke="currentColor" strokeWidth="0.75" opacity="0.4" fill="none" />
      <circle cx="24" cy="22" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/* ── Ornamental corner brackets for cards ── */
export function CardCorners({ color = "var(--color-gold)" }: { color?: string }) {
  const cornerStyle = { borderColor: color };
  return (
    <>
      <span className="absolute top-3 left-3 w-5 h-5 border-t-[1.5px] border-l-[1.5px] opacity-40 transition-all duration-500 group-hover:w-7 group-hover:h-7 group-hover:opacity-70" style={cornerStyle} />
      <span className="absolute top-3 right-3 w-5 h-5 border-t-[1.5px] border-r-[1.5px] opacity-40 transition-all duration-500 group-hover:w-7 group-hover:h-7 group-hover:opacity-70" style={cornerStyle} />
      <span className="absolute bottom-3 left-3 w-5 h-5 border-b-[1.5px] border-l-[1.5px] opacity-40 transition-all duration-500 group-hover:w-7 group-hover:h-7 group-hover:opacity-70" style={cornerStyle} />
      <span className="absolute bottom-3 right-3 w-5 h-5 border-b-[1.5px] border-r-[1.5px] opacity-40 transition-all duration-500 group-hover:w-7 group-hover:h-7 group-hover:opacity-70" style={cornerStyle} />
    </>
  );
}

/* ── Mandala ring background decoration ── */
export function MandalaRing({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      className={`opacity-[0.04] ${className}`}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 200 200)`}>
          <ellipse cx="200" cy="60" rx="18" ry="40" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="30" r="4" fill="currentColor" />
        </g>
      ))}
      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.3" />
    </motion.svg>
  );
}

/* ── Section heading with ornamental decoration ── */
export function SectionHeading({
  label,
  title,
  titleAccent,
  description,
  light = false,
}: {
  label: string;
  title: string;
  titleAccent: string;
  description?: string;
  light?: boolean;
}) {
  const textColor = light ? "text-warm-white" : "text-brown-dark";
  const accentColor = light ? "text-gold-light" : "text-saffron";
  const labelColor = light ? "text-gold" : "text-gold-dark";
  const descColor = light ? "text-warm-white/50" : "text-brown-light/60";

  return (
    <div className="text-center mb-16 md:mb-20">
      <OrnamentalDivider color={light ? "#DBBD6A" : "#C8A23D"} className="mb-5" />
      <span className={`text-xs tracking-[0.5em] uppercase ${labelColor} block mb-4`}>
        {label}
      </span>
      <h2 className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${textColor} leading-[1.05] font-light`}>
        {title}
        <br />
        <span className={`${accentColor} italic font-normal`}>{titleAccent}</span>
      </h2>
      {description && (
        <p className={`mt-6 ${descColor} text-base md:text-lg max-w-xl mx-auto leading-relaxed`}>
          {description}
        </p>
      )}
      <OrnamentalDivider color={light ? "#DBBD6A" : "#C8A23D"} className="mt-6" />
    </div>
  );
}
