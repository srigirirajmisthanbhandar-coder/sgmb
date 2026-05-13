"use client";

import { useState, useMemo } from "react";
import { allMithai, type MithaiProduct } from "@/data/mithai";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MithaiModal from "@/components/MithaiModal";

const categories = ["All", ...Array.from(new Set(allMithai.map((m) => m.category)))];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<MithaiProduct | null>(null);

  const filtered = useMemo(() => {
    return allMithai.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main>
      <AnnouncementBar />
      <Navbar />

      <section className="section-padding bg-white">
        <div className="container-main">

          <div className="section-header">
            <span className="eyebrow">Shop</span>
            <h1 className="font-serif text-[#0b3753]">
              Our Mithai Collection
            </h1>
            <p className="section-subtitle">
              Handcrafted with pure desi ghee, fresh ingredients and generations of love
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none"
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search sweets..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-[42px] pl-10 pr-4 text-[13px] text-[#1a1a1a] bg-[#f5f0ea] border-none outline-none"
                style={{ fontFamily: 'var(--font-ui)', borderRadius: '500px', transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
              />
            </div>
          </div>

          {/* Category pills */}
          <div className="flex items-center justify-center gap-[8px] flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.03em',
                  padding: '7px 18px',
                  borderRadius: '500px',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? '#871a45' : '#e5e5e5',
                  backgroundColor: activeCategory === cat ? '#871a45' : 'transparent',
                  color: activeCategory === cat ? '#fff' : '#0b3753',
                  transition: 'all .25s cubic-bezier(.104,.204,.492,1)',
                  cursor: 'pointer',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results */}
          <p className="text-[#999] text-[12px] mb-5" style={{ fontFamily: 'var(--font-ui)' }}>
            Showing {filtered.length} {filtered.length === 1 ? "item" : "items"}
          </p>

          {/* Product grid — identical to homepage */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[12px] md:gap-[20px]">
            {filtered.map((product) => {
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

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#999] text-[15px]" style={{ fontFamily: 'var(--font-ui)' }}>No sweets found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>

      <MithaiModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <Footer />
    </main>
  );
}
