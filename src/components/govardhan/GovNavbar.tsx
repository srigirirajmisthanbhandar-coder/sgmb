"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ── Colors ──────────────────────────────────────────────
const C = {
  bg: "#F8F2E8",
  text: "#0D3B2E",
  gold: "#C79A3B",
  annBg: "#EFE3CF",
  white: "#ffffff",
  border: "rgba(13,59,46,0.12)",
  goldBorder: "rgba(199,154,59,0.3)",
};

// ── Nav links ────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "/govardhan", active: true },
  {
    label: "Sweets",
    href: "/govardhan/sweets",
    submenu: [
      { label: "Kaju Katli", href: "/govardhan/sweets" },
      { label: "Mathura Peda", href: "/govardhan/sweets" },
      { label: "Motichoor Ladoo", href: "/govardhan/sweets" },
      { label: "Ghewar", href: "/govardhan/sweets" },
      { label: "Barfi", href: "/govardhan/sweets" },
      { label: "Dry Fruit Sweets", href: "/govardhan/sweets" },
    ],
  },
  { label: "Hotel", href: "/govardhan/hotel" },
  { label: "Heritage", href: "/heritage" },
  { label: "Festivals", href: "/govardhan/festivals" },
  { label: "Gifting", href: "/govardhan/gifting" },
  { label: "About Us", href: "/govardhan/about" },
  { label: "Contact", href: "/govardhan/contact" },
];

// ── Small SVG icons ──────────────────────────────────────
function IconInstagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconCart({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function IconChevron({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Announcement Bar ──────────────────────────────────────
function AnnouncementBar() {
  return (
    <div
      className="gov-announcement"
      style={{
        backgroundColor: C.annBg,
        color: C.text,
        fontFamily: "var(--font-body)",
        fontSize: "12px",
        letterSpacing: "0.03em",
        borderBottom: `1px solid ${C.goldBorder}`,
      }}
    >
      <div
        style={{
          maxWidth: "1430px",
          margin: "0 auto",
          padding: "0 15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "36px",
          gap: "12px",
          position: "relative",
        }}
      >
        {/* Center — tagline (absolutely centered) */}
        <p
          className="gov-announcement-tagline"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            margin: 0,
            fontWeight: 600,
            opacity: 0.9,
            whiteSpace: "nowrap",
          }}
        >
          || मेरौ तो गिर्राज बाबा ||
        </p>

        {/* Right — language + socials */}
        <div className="gov-announcement-right" style={{ display: "flex", alignItems: "center", gap: "14px", flexShrink: 0 }}>
          {/* Language dropdown */}
          <select
            style={{
              background: "transparent",
              border: "none",
              fontSize: "11.5px",
              fontFamily: "var(--font-body)",
              color: C.text,
              cursor: "pointer",
              outline: "none",
              fontWeight: 500,
              opacity: 0.8,
            }}
          >
            <option value="en">English ▾</option>
            <option value="hi">हिंदी ▾</option>
          </select>

          {/* Divider */}
          <span style={{ width: "1px", height: "14px", background: C.border, display: "block" }} />

          {/* Social icons */}
          <a
            href="#"
            aria-label="Instagram"
            style={{ color: C.text, opacity: 0.7, display: "flex", alignItems: "center", transition: "opacity .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            <IconInstagram size={14} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            style={{ color: C.text, opacity: 0.7, display: "flex", alignItems: "center", transition: "opacity .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            <IconFacebook size={14} />
          </a>
          <a
            href="#"
            aria-label="Instagram Reels"
            style={{ color: C.text, opacity: 0.7, display: "flex", alignItems: "center", transition: "opacity .2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
          >
            <IconInstagram size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Dropdown Menu ─────────────────────────────────────────
function DropdownMenu({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: C.bg,
        border: `1px solid ${C.goldBorder}`,
        borderRadius: "10px",
        boxShadow: "0 8px 32px rgba(13,59,46,0.1), 0 2px 8px rgba(13,59,46,0.06)",
        minWidth: "190px",
        padding: "8px 0",
        zIndex: 100,
        overflow: "hidden",
      }}
    >
      {/* Gold top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
          borderRadius: "0 0 2px 2px",
        }}
      />
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          style={{
            display: "block",
            padding: "9px 20px",
            fontSize: "13.5px",
            fontFamily: "var(--font-body)",
            fontWeight: 450,
            color: C.text,
            textDecoration: "none",
            letterSpacing: "0.01em",
            transition: "background .15s, color .15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `rgba(199,154,59,0.1)`;
            e.currentTarget.style.color = C.gold;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = C.text;
          }}
        >
          {item.label}
        </a>
      ))}
    </motion.div>
  );
}

// ── Desktop Nav Link ──────────────────────────────────────
function NavLink({
  link,
}: {
  link: (typeof NAV_LINKS)[number];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const hasSubmenu = link.submenu && link.submenu.length > 0;

  return (
    <div
      ref={ref}
      style={{ position: "relative" }}
      onMouseEnter={() => hasSubmenu && setOpen(true)}
      onMouseLeave={() => hasSubmenu && setOpen(false)}
    >
      <a
        href={link.href}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "6px 14px",
          fontSize: "14.5px",
          fontFamily: "var(--font-body)",
          fontWeight: link.active ? 600 : 450,
          color: link.active ? C.gold : C.text,
          textDecoration: "none",
          letterSpacing: "0.01em",
          borderRadius: "6px",
          transition: "color .2s",
          position: "relative",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          if (!link.active) e.currentTarget.style.color = C.gold;
        }}
        onMouseLeave={(e) => {
          if (!link.active) e.currentTarget.style.color = C.text;
        }}
      >
        {link.label}
        {hasSubmenu && (
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", alignItems: "center", opacity: 0.6 }}
          >
            <IconChevron size={11} />
          </motion.span>
        )}
        {/* Gold underline for active */}
        {link.active && (
          <span
            style={{
              position: "absolute",
              bottom: "2px",
              left: "14px",
              right: "14px",
              height: "1.5px",
              background: C.gold,
              borderRadius: "1px",
            }}
          />
        )}
      </a>

      <AnimatePresence>
        {hasSubmenu && open && <DropdownMenu items={link.submenu!} />}
      </AnimatePresence>
    </div>
  );
}

// ── Mobile Menu ───────────────────────────────────────────
function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: C.bg,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Mobile header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 20px",
              borderBottom: `1px solid ${C.border}`,
              backgroundColor: C.bg,
              position: "sticky",
              top: 0,
              zIndex: 1,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image
                src="/images/new images/logo.webp"
                alt="Shri Girraj Misthan Bhandar"
                width={69}
                height={46}
                preload
                style={{ objectFit: "contain" }}
              />
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: C.text,
                padding: "6px",
                display: "flex",
                alignItems: "center",
                borderRadius: "6px",
              }}
            >
              <IconClose />
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ flex: 1, padding: "12px 0" }}>
            {NAV_LINKS.map((link, idx) => {
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              const isExpanded = expandedIdx === idx;

              return (
                <div key={link.label}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: `1px solid ${C.border}`,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={hasSubmenu ? undefined : onClose}
                      style={{
                        flex: 1,
                        display: "block",
                        padding: "16px 24px",
                        fontSize: "16px",
                        fontFamily: "var(--font-body)",
                        fontWeight: link.active ? 600 : 450,
                        color: link.active ? C.gold : C.text,
                        textDecoration: "none",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {link.label}
                    </a>
                    {hasSubmenu && (
                      <button
                        onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "16px 20px",
                          color: C.text,
                          display: "flex",
                          alignItems: "center",
                          opacity: 0.6,
                        }}
                      >
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ display: "flex" }}
                        >
                          <IconChevron size={14} />
                        </motion.span>
                      </button>
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {hasSubmenu && isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        style={{ overflow: "hidden", backgroundColor: `rgba(199,154,59,0.04)` }}
                      >
                        {link.submenu!.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={onClose}
                            style={{
                              display: "block",
                              padding: "11px 24px 11px 36px",
                              fontSize: "14px",
                              fontFamily: "var(--font-body)",
                              fontWeight: 400,
                              color: C.text,
                              opacity: 0.75,
                              textDecoration: "none",
                              borderBottom: `1px solid ${C.border}`,
                            }}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div style={{ padding: "20px 24px 36px" }}>
            <a
              href="#order"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                borderRadius: "500px",
                backgroundColor: C.text,
                color: C.white,
                fontFamily: "var(--font-body)",
                fontSize: "14.5px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textDecoration: "none",
                gap: "8px",
              }}
            >
              <IconCart size={18} />
              Order Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── Main Navbar ───────────────────────────────────────────
export default function GovNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        /* Default: show desktop nav, hide hamburger */
        .gov-nav-desktop { display: flex; }
        .gov-nav-hamburger { display: none; }
        @media (max-width: 1024px) {
          .gov-nav-desktop { display: none !important; }
          .gov-nav-hamburger { display: flex !important; }
          .gov-nav-cart-desktop { display: none !important; }
          .gov-nav-order-desktop { display: none !important; }
        }
        @media (max-width: 768px) {
          .gov-nav-inner {
            height: 60px !important;
            gap: 10px !important;
          }
          .gov-nav-logo img { width: 62px !important; height: 42px !important; }
          .gov-announcement { font-size: 11px !important; }
          .gov-announcement > div {
            height: 32px !important;
            padding: 0 12px !important;
            justify-content: center !important;
          }
          .gov-announcement-right { display: none !important; }
          .gov-announcement-tagline {
            position: static !important;
            transform: none !important;
            font-size: 11.5px !important;
          }
        }
        @media (max-width: 480px) {
          .gov-announcement > div { padding: 0 10px !important; }
        }
      `}</style>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "box-shadow 0.3s ease",
          boxShadow: scrolled
            ? "0 2px 16px rgba(13,59,46,0.09), 0 1px 0 rgba(199,154,59,0.15)"
            : "none",
        }}
      >
        {/* Announcement bar */}
        <AnnouncementBar />

        {/* Main navbar */}
        <motion.header
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundColor: C.bg,
            borderBottom: `1px solid ${scrolled ? C.goldBorder : C.border}`,
            transition: "border-color 0.3s ease",
          }}
        >
          <div
            className="gov-nav-inner"
            style={{
              maxWidth: "1430px",
              margin: "0 auto",
              padding: "0 15px",
              display: "flex",
              alignItems: "center",
              height: "72px",
              gap: "24px",
            }}
          >
            {/* ── Logo ── */}
            <a
              href="/govardhan"
              className="gov-nav-logo"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/images/new images/logo.webp"
                  alt="Shri Girraj Misthan Bhandar"
                  width={84}
                  height={56}
                  preload
                  style={{ objectFit: "contain" }}
                />
              </motion.div>
            </a>

            {/* ── Desktop Navigation ── */}
            <nav
              className="gov-nav-desktop"
              style={{
                alignItems: "center",
                gap: "2px",
                flex: 1,
                justifyContent: "center",
              }}
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.label} link={link} />
              ))}
            </nav>

            {/* ── Right actions ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginLeft: "auto",
                flexShrink: 0,
              }}
            >
              {/* Cart — desktop only */}
              <motion.a
                href="#cart"
                aria-label="Cart"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="gov-nav-cart-desktop"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  color: C.text,
                  textDecoration: "none",
                  position: "relative",
                  transition: "background .2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = `rgba(199,154,59,0.12)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <IconCart size={20} />
                {/* Cart badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "6px",
                    right: "6px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: C.gold,
                    border: `1.5px solid ${C.bg}`,
                  }}
                />
              </motion.a>

              {/* Since 1982 — heritage marker (desktop only) */}
              <span
                className="gov-nav-order-desktop"
                aria-label="Established in 1982"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0 18px",
                  height: "40px",
                  borderRadius: "500px",
                  backgroundColor: "transparent",
                  color: C.text,
                  border: `1.5px solid ${C.gold}`,
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: C.gold, display: "inline-block" }} />
                Since 1982
              </span>

              {/* Mobile hamburger */}
              <motion.button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                whileTap={{ scale: 0.92 }}
                className="gov-nav-hamburger"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  background: "none",
                  border: `1px solid ${C.border}`,
                  cursor: "pointer",
                  color: C.text,
                }}
              >
                <IconMenu />
              </motion.button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile slide-in menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
