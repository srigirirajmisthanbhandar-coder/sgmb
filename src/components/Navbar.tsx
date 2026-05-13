"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Shop All",
    href: "#sweets",
    submenu: [
      { name: "Kaju Katli", href: "#sweets" },
      { name: "Motichoor Ladoo", href: "#sweets" },
      { name: "Mathura Peda", href: "#sweets" },
      { name: "Ghewar", href: "#sweets" },
      { name: "Barfi", href: "#sweets" },
      { name: "Dry Fruit Sweets", href: "#sweets" },
    ],
  },
  {
    name: "Hampers",
    href: "#gifting",
    submenu: [
      { name: "Wedding Collection", href: "#gifting" },
      { name: "Diwali Hampers", href: "#festive" },
      { name: "Janmashtami Special", href: "#festive" },
      { name: "Corporate Gifts", href: "#gifting" },
    ],
  },
  {
    name: "Customised Gifting",
    href: "#gifting",
    submenu: [
      { name: "Custom Branding", href: "#gifting" },
      { name: "Bulk Orders", href: "#contact" },
      { name: "Custom Packaging", href: "#contact" },
    ],
  },
  { name: "Mango Specials", href: "#sweets" },
  { name: "Our Story", href: "#story" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`bg-white sticky top-0 z-50 ${scrolled ? "shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : ""}`}
        style={{ transition: 'box-shadow .3s ease' }}
      >
        <div className="container-main flex items-center justify-between h-[60px] md:h-[80px]">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Sri Girraj Mishtan Bhandar"
              className="h-[56px] md:h-[80px] w-auto object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
          </a>

          {/* Nav links — right aligned */}
          <nav className="hidden lg:flex items-center ml-auto" style={{ fontFamily: 'var(--font-ui)' }}>
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative inline-flex items-center"
                style={{ padding: '3px 15px' }}
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <a
                  href={link.href}
                  className="py-[10px] text-[14px] font-bold text-[#0b3753] hover:text-[#871a45] inline-flex items-center gap-1.5 whitespace-nowrap tracking-[0.01em]"
                  style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
                >
                  {link.name}
                  {link.submenu && (
                    <svg width="10" height="6" viewBox="0 0 12 7" fill="none" className="ml-0.5">
                      <path d="M11 1L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>

                {/* Dropdown — BSS exact: border-radius 3px, shadow, border-top */}
                {link.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-[-11px] min-w-[270px] bg-white rounded-[10px] z-50"
                        style={{ boxShadow: '0 6px 24px #0000000d, 0 0 0 1px #e5e5e5' }}
                      >
                        <ul className="list-none m-0 p-0" style={{ padding: '0 20px' }}>
                          {link.submenu.map((sub) => (
                            <li key={sub.name} className="border-b border-[#e5e5e5] last:border-b-0">
                              <a
                                href={sub.href}
                                className="flex items-center justify-between py-[13px] text-[13px] font-medium text-[#0b3753] hover:text-[#871a45]"
                                style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
                              >
                                {sub.name}
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                                  <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center relative z-50 ml-2 shrink-0"
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1.5px] bg-[#0b3753] absolute ${mobileOpen ? "rotate-45" : "-translate-y-[5px]"}`} style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }} />
            <span className={`block w-5 h-[1.5px] bg-[#0b3753] absolute ${mobileOpen ? "opacity-0" : ""}`} style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }} />
            <span className={`block w-5 h-[1.5px] bg-[#0b3753] absolute ${mobileOpen ? "-rotate-45" : "translate-y-[5px]"}`} style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu — BSS exact: border-top, 54px min-height items, weight 500, 1rem */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.104, 0.204, 0.492, 1] }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="pt-[80px] px-[15px] md:px-[50px] pb-8 h-full overflow-y-auto" style={{ fontFamily: 'var(--font-ui)' }}>
              <div className="border-b border-[#e5e5e5]">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center min-h-[54px] py-[5px] text-[1rem] font-medium text-[#0b3753] border-t border-[#e5e5e5]"
                    >
                      {link.name}
                    </a>
                    {link.submenu && (
                      <div className="pl-4 pb-3">
                        {link.submenu.map((sub) => (
                          <a key={sub.name} href={sub.href} onClick={() => setMobileOpen(false)} className="block py-[7px] text-[14px] text-[#999]">
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
