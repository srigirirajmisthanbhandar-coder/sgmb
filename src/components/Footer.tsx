"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const chartData = [6, 8, 5, 7, 9, 6, 4, 8, 10, 7, 5, 3, 6, 8, 5, 3, 2, 4, 6, 3];

const cities = [
  { flag: "🇮🇳", name: "Mathura", count: 12 },
  { flag: "🇮🇳", name: "Delhi NCR", count: 8 },
  { flag: "🇮🇳", name: "Mumbai", count: 5 },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const maxChart = Math.max(...chartData);

  return (
    <footer>
      {/* ── Newsletter CTA Band ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #f5f0ea 0%, #ece4d6 100%)",
          padding: "48px 0",
        }}
      >
        <div className="container-main">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10"
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "32px 28px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            }}
          >
            <div className="text-center md:text-left">
              <h3
                className="font-serif text-[#0b3753]"
                style={{ marginBottom: "6px" }}
              >
                Stay in the Loop
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "14px",
                  color: "#6b6b6b",
                  lineHeight: 1.5,
                }}
              >
                Get updates on new sweets, festive specials & exclusive offers.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto gap-[10px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 md:w-[280px]"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "13px",
                  height: "42px",
                  padding: "0 16px",
                  backgroundColor: "#f5f0ea",
                  border: "none",
                  borderRadius: "500px",
                  outline: "none",
                  color: "#1a1a1a",
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  height: "42px",
                  padding: "0 28px",
                  backgroundColor: "#871a45",
                  color: "#fff",
                  border: "none",
                  borderRadius: "500px",
                  cursor: "pointer",
                  transition: "all .25s cubic-bezier(.104,.204,.492,1)",
                  whiteSpace: "nowrap" as const,
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6e1538")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#871a45")
                }
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div
        className="w-full border-t"
        style={{
          backgroundColor: "#1a1a1a",
          borderColor: "#2a2a2a",
        }}
      >
        <div className="mx-auto max-w-7xl px-8 py-24">
          <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap md:items-start">
            {/* ── Brand Column ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex-shrink-0 text-center md:mx-0 md:w-96 md:pr-12 md:text-left"
            >
              {/* Logo */}
              <a
                href="#"
                className="flex items-center justify-center gap-2 md:justify-start"
              >
                <img
                  src="/images/logo.png"
                  alt="Sri Girraj Mishtan Bhandar"
                  className="h-6 w-auto object-contain brightness-0 invert"
                />
                <strong
                  className="text-base font-extrabold tracking-tight md:text-lg"
                  style={{ color: "#ffffff" }}
                >
                  Sri Girraj
                </strong>
              </a>

              {/* Tagline */}
              <p
                className="mt-3 text-sm"
                style={{ color: "#9ca3af" }}
              >
                Handcrafted mithai made with pure desi ghee, fresh ingredients
                and generations of love — since Govardhan.
              </p>

              {/* Copyright */}
              <p
                className="mt-3 text-sm"
                style={{ color: "#9ca3af" }}
              >
                Copyright &copy; {new Date().getFullYear()} - All rights reserved
              </p>

              {/* Made with */}
              <p
                className="mb-3 mt-1 text-sm"
                style={{ color: "#9ca3af" }}
              >
                Made with ❤️ in{" "}
                <a
                  href="#"
                  className="underline hover:no-underline"
                  style={{ color: "#ffffff" }}
                >
                  Govardhan
                </a>
              </p>

              {/* Order on WhatsApp badge */}
              <a
                href="https://wa.me/919412421253"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer rounded px-2 py-1 text-sm ring-1 ring-white/10 transition-all duration-200 hover:ring-green-500"
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#1a1a1a",
                }}
              >
                <div className="flex items-center gap-1">
                  <span>Order on</span>
                  <span className="flex items-center gap-0.5 font-semibold tracking-tight">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" className="h-5 w-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </span>
                </div>
              </a>

              {/* Analytics Widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 w-full max-w-[330px] rounded-lg border p-4 text-left"
                style={{
                  backgroundColor: "#242424",
                  borderColor: "#2a2a2a",
                }}
              >
                {/* Users count */}
                <p
                  className="text-xs font-medium tracking-wider"
                  style={{ color: "#9ca3af" }}
                >
                  HAPPY CUSTOMERS THIS MONTH
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "#ffffff" }}
                  >
                    248
                  </span>
                  <span
                    className="h-2 w-2 animate-pulse rounded-full"
                    style={{ backgroundColor: "#e8abe7" }}
                  />
                </div>

                {/* Chart */}
                <div className="mt-4 flex h-20 items-end gap-1">
                  {chartData.map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${(value / maxChart) * 100}%`,
                        backgroundColor: "#e8abe7",
                        opacity: 0.8 + (index / chartData.length) * 0.2,
                      }}
                    />
                  ))}
                </div>

                {/* Time labels */}
                <div
                  className="mt-1 flex justify-between text-xs"
                  style={{ color: "#9ca3af" }}
                >
                  <span>Week 1</span>
                  <span>Week 2</span>
                  <span>Week 3</span>
                  <span>Week 4</span>
                </div>

                {/* City stats */}
                <p
                  className="mt-4 text-xs font-medium tracking-wider"
                  style={{ color: "#9ca3af" }}
                >
                  TOP CITIES
                </p>
                <div className="mt-2 space-y-2">
                  {cities.map((city, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{city.flag}</span>
                        <span
                          className="text-sm"
                          style={{ color: "#ffffff" }}
                        >
                          {city.name}
                        </span>
                      </div>
                      <span
                        className="text-sm"
                        style={{ color: "#ffffff" }}
                      >
                        {city.count}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── Link Columns ── */}
            <div className="-mb-10 mt-10 flex flex-grow flex-wrap justify-center text-center md:mt-0 md:text-left lg:pl-24">
              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full px-4 md:w-1/2 lg:w-1/3"
              >
                <div
                  className="mb-3 text-sm font-semibold tracking-widest"
                  style={{ color: "#ffffff" }}
                >
                  LINKS
                </div>
                <div className="mb-10 flex flex-col items-center gap-2 text-sm md:items-start">
                  {[
                    { label: "All Sweets", href: "/products" },
                    { label: "Bulk Gifting", href: "#gifting" },
                    { label: "Our Story", href: "#story" },
                    { label: "Gallery", href: "#gallery" },
                    { label: "Contact Us", href: "#contact" },
                    { label: "Order on WhatsApp", href: "https://wa.me/919412421253", external: true },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={"external" in item ? "_blank" : undefined}
                      rel={"external" in item ? "noopener noreferrer" : undefined}
                      className="transition-opacity hover:opacity-80"
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full px-4 md:w-1/2 lg:w-1/3"
              >
                <div
                  className="mb-3 text-sm font-semibold tracking-widest"
                  style={{ color: "#ffffff" }}
                >
                  LEGAL
                </div>
                <div className="mb-10 flex flex-col items-center gap-2 text-sm md:items-start">
                  {[
                    "Terms of Service",
                    "Privacy Policy",
                    "Shipping Policy",
                    "Refund Policy",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full px-4 md:w-1/2 lg:w-1/3"
              >
                <div
                  className="mb-3 text-sm font-semibold tracking-widest"
                  style={{ color: "#ffffff" }}
                >
                  CATEGORIES
                </div>
                <div className="mb-10 flex flex-col items-center gap-2 text-sm md:items-start">
                  {[
                    "Kaju Katli",
                    "Burfi",
                    "Laddu",
                    "Peda",
                    "Petha",
                    "Traditional",
                    "Chocolate",
                    "Festive Hampers",
                    "Corporate Gifting",
                  ].map((item) => (
                    <a
                      key={item}
                      href="/products"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: "#ffffff", textDecoration: "none" }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
