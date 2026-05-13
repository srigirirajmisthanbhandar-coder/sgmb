"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Indian Mithai & Desserts",
    description: "The flavours you grew up with, but with a twist!",
    image: "/images/experience/mithai-dessert.webp",
    href: "#sweets",
  },
  {
    title: "Bulk Gifting",
    description: "From corporate gifting to wedding favours and festive gifts, we are your one-stop gifting solution.",
    image: "/images/experience/bulk-gifting.webp",
    href: "#gifting",
  },
  {
    title: "Curated Hampers",
    description: "Explore curated gift hampers for different occasions with a varied price range.",
    image: "/images/products/luxury-hamper.png",
    href: "#festive",
  },
  {
    title: "Our Store",
    description: "Visit our store in Govardhan for fresh mithai, sweets and traditional delicacies.",
    image: "/images/reviews/kadhai.jpg",
    href: "#contact",
  },
];

export default function ExperienceCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#f5f0ea', padding: '64px 0 72px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container-main"
      >
        <div className="section-header">
          <span className="eyebrow">Explore</span>
          <h2 className="font-serif text-[#0b3753]">
            The Sri Girraj Experience
          </h2>
          <p className="section-subtitle">
            From timeless mithai to modern gifting, here&apos;s everything we have for you.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] md:gap-[20px]">
          {experiences.map((exp) => (
            <a
              key={exp.title}
              href={exp.href}
              className="group bg-white rounded-[10px] overflow-hidden flex flex-col"
              style={{ textDecoration: 'none' }}
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: '110%' }}>
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.05]"
                  style={{
                    backgroundImage: `url('${exp.image}')`,
                    transition: 'transform .5s cubic-bezier(.104,.204,.492,1)',
                  }}
                />
              </div>
              <div style={{ padding: '20px 18px 24px' }} className="text-center flex-1 flex flex-col">
                <h4 className="font-serif text-[#0b3753]" style={{ marginBottom: '8px' }}>
                  {exp.title}
                </h4>
                <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#6b6b6b' }}>
                  {exp.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
