"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuBar } from "@/components/ui/menu-bar";
import {
  Store,
  Gift,
  Palette,
  Cherry,
  BookOpen,
  Images,
  Phone,
} from "lucide-react";

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

const menuBarItems = [
  {
    icon: Store,
    label: "Shop All",
    href: "#sweets",
    gradient: "radial-gradient(circle, rgba(135,26,69,0.15) 0%, transparent 70%)",
    iconColor: "text-[#871a45]",
  },
  {
    icon: Gift,
    label: "Hampers",
    href: "#gifting",
    gradient: "radial-gradient(circle, rgba(251,158,91,0.15) 0%, transparent 70%)",
    iconColor: "text-[#fb9e5b]",
  },
  {
    icon: Palette,
    label: "Custom Gifting",
    href: "#gifting",
    gradient: "radial-gradient(circle, rgba(45,94,63,0.15) 0%, transparent 70%)",
    iconColor: "text-[#2D5E3F]",
  },
  {
    icon: Cherry,
    label: "Mango Specials",
    href: "#sweets",
    gradient: "radial-gradient(circle, rgba(251,158,91,0.15) 0%, transparent 70%)",
    iconColor: "text-[#fb9e5b]",
  },
  {
    icon: BookOpen,
    label: "Our Story",
    href: "#story",
    gradient: "radial-gradient(circle, rgba(11,55,83,0.15) 0%, transparent 70%)",
    iconColor: "text-[#0b3753]",
  },
  {
    icon: Images,
    label: "Gallery",
    href: "#gallery",
    gradient: "radial-gradient(circle, rgba(135,26,69,0.15) 0%, transparent 70%)",
    iconColor: "text-[#871a45]",
  },
  {
    icon: Phone,
    label: "Contact",
    href: "#contact",
    gradient: "radial-gradient(circle, rgba(11,55,83,0.15) 0%, transparent 70%)",
    iconColor: "text-[#0b3753]",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("Shop All");

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
        style={{ transition: "box-shadow .3s ease" }}
      >
        <div className="container-main flex items-center justify-between h-[60px] md:h-[80px]">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Sri Girraj Mishtan Bhandar"
              className="h-[56px] md:h-[80px] w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </a>

          {/* Desktop MenuBar */}
          <div className="hidden lg:flex items-center ml-auto">
            <MenuBar
              items={menuBarItems}
              activeItem={activeNav}
              onItemClick={(label) => setActiveNav(label)}
            />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center relative z-50 ml-2 shrink-0"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-[#0b3753] absolute ${mobileOpen ? "rotate-45" : "-translate-y-[5px]"}`}
              style={{
                transition: "all .25s cubic-bezier(.104,.204,.492,1)",
              }}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#0b3753] absolute ${mobileOpen ? "opacity-0" : ""}`}
              style={{
                transition: "all .25s cubic-bezier(.104,.204,.492,1)",
              }}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[#0b3753] absolute ${mobileOpen ? "-rotate-45" : "translate-y-[5px]"}`}
              style={{
                transition: "all .25s cubic-bezier(.104,.204,.492,1)",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.104, 0.204, 0.492, 1],
            }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div
              className="pt-[80px] px-[15px] md:px-[50px] pb-8 h-full overflow-y-auto"
              style={{ fontFamily: "var(--font-ui)" }}
            >
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
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-[7px] text-[14px] text-[#999]"
                          >
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
