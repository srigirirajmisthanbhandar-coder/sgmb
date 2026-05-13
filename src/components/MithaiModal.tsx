"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import type { MithaiProduct } from "@/data/mithai";

interface MithaiModalProps {
  product: MithaiProduct | null;
  onClose: () => void;
}

export default function MithaiModal({ product, onClose }: MithaiModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKey);
      };
    }
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.104, 0.204, 0.492, 1] }}
            className="relative w-full max-w-[420px] overflow-hidden"
            style={{
              borderRadius: "10px",
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.2) inset",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-[12px] right-[12px] z-10 flex items-center justify-center"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.5)",
                border: "none",
                cursor: "pointer",
                transition: "background-color .2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.7)")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)")}
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Product image */}
            <div className="relative overflow-hidden" style={{ paddingBottom: "70%" }}>
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span
                  className="absolute top-[12px] left-[12px] text-white text-[11px] font-medium"
                  style={{
                    fontFamily: "var(--font-ui)",
                    backgroundColor: product.badgeColor || "#0b3753",
                    padding: "5px 12px",
                    borderRadius: "6px",
                  }}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Details */}
            <div style={{ padding: "22px 24px 26px" }}>
              <div className="flex items-start justify-between gap-3" style={{ marginBottom: "10px" }}>
                <h3
                  className="font-serif text-[#0b3753]"
                  style={{ fontSize: "22px", lineHeight: 1.25, margin: 0 }}
                >
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 shrink-0" style={{ marginTop: "3px" }}>
                  <span className="text-[#fb9e5b] text-[13px] font-bold">★</span>
                  <span
                    className="text-[#0b3753] text-[13px] font-semibold"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {product.rating}
                  </span>
                </div>
              </div>

              {product.description && (
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    color: "#6b6b6b",
                    marginBottom: "16px",
                  }}
                >
                  {product.description}
                </p>
              )}

              {/* Info chips */}
              <div className="flex flex-wrap gap-[8px]" style={{ marginBottom: "18px" }}>
                {product.weight && (
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#0b3753",
                      backgroundColor: "rgba(11,55,83,0.07)",
                      padding: "5px 12px",
                      borderRadius: "500px",
                    }}
                  >
                    {product.weight}
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#0b3753",
                    backgroundColor: "rgba(11,55,83,0.07)",
                    padding: "5px 12px",
                    borderRadius: "500px",
                  }}
                >
                  {product.category}
                </span>
              </div>

              {/* Ingredients */}
              {product.ingredients && (
                <div style={{ marginBottom: "20px" }}>
                  <p
                    className="text-[#0b3753]"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "6px",
                    }}
                  >
                    Ingredients
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "13px",
                      lineHeight: 1.5,
                      color: "#6b6b6b",
                    }}
                  >
                    {product.ingredients}
                  </p>
                </div>
              )}

              {/* Price + Order */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-[8px]">
                  <span
                    className="text-[#1a1a1a] font-bold"
                    style={{ fontFamily: "var(--font-ui)", fontSize: "20px" }}
                  >
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span
                      className="text-[#999] line-through"
                      style={{ fontFamily: "var(--font-ui)", fontSize: "14px" }}
                    >
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <a
                  href={`https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20order%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-white font-medium uppercase"
                  style={{
                    fontFamily: "var(--font-ui)",
                    height: "40px",
                    padding: "0 24px",
                    fontSize: "11px",
                    letterSpacing: "0.06em",
                    backgroundColor: "#25D366",
                    borderRadius: "500px",
                    textDecoration: "none",
                    transition: "all .25s cubic-bezier(.104,.204,.492,1)",
                    gap: "6px",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.226A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.337 0-4.542-.67-6.407-1.822l-.357-.218-3.107.814.855-3.004-.24-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Order
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
