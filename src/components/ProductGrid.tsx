"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { allMithai, type MithaiProduct } from "@/data/mithai";
import MithaiModal from "./MithaiModal";

const products = allMithai.slice(0, 8);

export default function ProductGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [selectedProduct, setSelectedProduct] = useState<MithaiProduct | null>(null);

  return (
    <section id="sweets" className="section-padding bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container-main"
      >
        <div className="section-header">
          <span className="eyebrow">Most Loved</span>
          <h2 className="font-serif text-[#0b3753]">
            Our Bestselling Mithai
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] md:gap-[20px]">
          {products.map((product) => {
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;

            return (
              <div
                key={product.id}
                className="product-card flex flex-col bg-white overflow-hidden"
                style={{
                  border: '1px solid #e5e5e5',
                  borderRadius: '10px',
                }}
              >
                <div className="relative overflow-hidden" style={{ paddingBottom: '100%', borderRadius: '10px 10px 0 0' }}>
                  {product.badge && (
                    <span
                      className="absolute top-[10px] right-[10px] z-10 text-white text-[11px] font-medium leading-[1.2] whitespace-nowrap"
                      style={{
                        fontFamily: 'var(--font-ui)',
                        backgroundColor: product.badgeColor || "#0b3753",
                        padding: '5px 10px',
                        borderRadius: '6px',
                      }}
                    >
                      {product.badge}
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ transition: 'transform .5s cubic-bezier(.104,.204,.492,1)' }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  <div
                    className="absolute bottom-[10px] right-[10px] z-10 flex flex-col items-center justify-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#0b3753',
                    }}
                  >
                    <span className="text-[#fb9e5b] text-[10px] leading-none font-bold">★</span>
                    <span className="text-white text-[11px] font-semibold leading-none mt-[2px]">{product.rating}</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col" style={{ padding: '14px 14px 16px' }}>
                  <p
                    className="text-[#1a1a1a] line-clamp-2"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '15px',
                      fontWeight: 600,
                      lineHeight: '1.35',
                      marginBottom: '8px',
                    }}
                  >
                    {product.name}
                  </p>

                  <div className="flex items-center flex-wrap gap-[6px]" style={{ marginBottom: '12px', marginTop: 'auto' }}>
                    <span className="text-[#1a1a1a] font-semibold" style={{ fontFamily: 'var(--font-ui)', fontSize: '15px' }}>
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[#999] text-[13px] line-through" style={{ fontFamily: 'var(--font-ui)' }}>
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    {discount > 0 && (
                      <span
                        className="text-[#871a45] text-[11px] font-medium"
                        style={{
                          fontFamily: 'var(--font-ui)',
                          backgroundColor: 'rgba(135,26,69,0.08)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          lineHeight: '1.2',
                        }}
                      >
                        {discount}% Off
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full text-white font-medium uppercase"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      height: '42px',
                      fontSize: '12px',
                      letterSpacing: '0.06em',
                      backgroundColor: '#871a45',
                      borderRadius: '500px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all .25s cubic-bezier(.104,.204,.492,1)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6e1538')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#871a45')}
                  >
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center" style={{ marginTop: '40px' }}>
          <a
            href="/products"
            className="group inline-flex items-center justify-center font-medium gap-2"
            style={{
              fontFamily: 'var(--font-ui)',
              height: '48px',
              padding: '0 40px',
              fontSize: '14px',
              letterSpacing: '0.02em',
              color: '#fff',
              backgroundColor: '#0b3753',
              borderRadius: '500px',
              transition: 'all .3s cubic-bezier(.104,.204,.492,1)',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(11,55,83,0.2)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#871a45'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(135,26,69,0.3)'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#0b3753'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(11,55,83,0.2)'; }}
          >
            View All Mithai
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>

      <MithaiModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
