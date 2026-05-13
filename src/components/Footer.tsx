"use client";

import { useState } from "react";
import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer>
      {/* ── Newsletter CTA Band ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #f5f0ea 0%, #ece4d6 100%)',
          padding: '48px 0',
        }}
      >
        <div className="container-main">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10"
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '32px 28px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            }}
          >
            <div className="text-center md:text-left">
              <h3
                className="font-serif text-[#0b3753]"
                style={{ marginBottom: '6px' }}
              >
                Stay in the Loop
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '14px',
                  color: '#6b6b6b',
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
                  fontFamily: 'var(--font-ui)',
                  fontSize: '13px',
                  height: '42px',
                  padding: '0 16px',
                  backgroundColor: '#f5f0ea',
                  border: 'none',
                  borderRadius: '500px',
                  outline: 'none',
                  color: '#1a1a1a',
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  height: '42px',
                  padding: '0 28px',
                  backgroundColor: '#871a45',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '500px',
                  cursor: 'pointer',
                  transition: 'all .25s cubic-bezier(.104,.204,.492,1)',
                  whiteSpace: 'nowrap' as const,
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6e1538')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#871a45')}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div
        style={{
          backgroundColor: '#0b3753',
          padding: '56px 0 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── Decorative sweet clipart ── */}
        {/* Laddu — top right */}
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" style={{ position: 'absolute', top: '-20px', right: '5%', opacity: 0.035, pointerEvents: 'none' }}>
          <circle cx="90" cy="90" r="80" stroke="white" strokeWidth="2" />
          <circle cx="90" cy="90" r="65" stroke="white" strokeWidth="1.5" />
          <circle cx="90" cy="90" r="50" stroke="white" strokeWidth="1" />
          {/* Laddu texture dots */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <circle key={angle} cx={90 + 35 * Math.cos(angle * Math.PI / 180)} cy={90 + 35 * Math.sin(angle * Math.PI / 180)} r="4" fill="white" />
          ))}
          {[22, 67, 112, 157, 202, 247, 292, 337].map((angle) => (
            <circle key={angle} cx={90 + 55 * Math.cos(angle * Math.PI / 180)} cy={90 + 55 * Math.sin(angle * Math.PI / 180)} r="3" fill="white" />
          ))}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <circle key={`inner-${angle}`} cx={90 + 20 * Math.cos(angle * Math.PI / 180)} cy={90 + 20 * Math.sin(angle * Math.PI / 180)} r="3.5" fill="white" />
          ))}
        </svg>

        {/* Barfi diamond — left mid */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ position: 'absolute', top: '40%', left: '2%', opacity: 0.03, pointerEvents: 'none', transform: 'rotate(15deg)' }}>
          <rect x="20" y="20" width="80" height="80" rx="6" stroke="white" strokeWidth="2" transform="rotate(45 60 60)" />
          <rect x="32" y="32" width="56" height="56" rx="4" stroke="white" strokeWidth="1.5" transform="rotate(45 60 60)" />
          {/* Silver vark lines */}
          <line x1="45" y1="60" x2="75" y2="60" stroke="white" strokeWidth="1" />
          <line x1="60" y1="45" x2="60" y2="75" stroke="white" strokeWidth="1" />
          <line x1="48" y1="48" x2="72" y2="72" stroke="white" strokeWidth="0.8" />
          <line x1="72" y1="48" x2="48" y2="72" stroke="white" strokeWidth="0.8" />
        </svg>

        {/* Peda — bottom right */}
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none" style={{ position: 'absolute', bottom: '80px', right: '8%', opacity: 0.03, pointerEvents: 'none' }}>
          <ellipse cx="70" cy="55" rx="60" ry="35" stroke="white" strokeWidth="2" />
          <ellipse cx="70" cy="55" rx="42" ry="24" stroke="white" strokeWidth="1.5" />
          <ellipse cx="70" cy="55" rx="22" ry="13" stroke="white" strokeWidth="1" />
          {/* Pista dots on top */}
          <ellipse cx="55" cy="48" rx="4" ry="2.5" fill="white" transform="rotate(-20 55 48)" />
          <ellipse cx="70" cy="45" rx="4" ry="2.5" fill="white" transform="rotate(10 70 45)" />
          <ellipse cx="85" cy="48" rx="4" ry="2.5" fill="white" transform="rotate(25 85 48)" />
        </svg>

        {/* Diya / oil lamp — left bottom */}
        <svg width="100" height="120" viewBox="0 0 100 120" fill="none" style={{ position: 'absolute', bottom: '60px', left: '6%', opacity: 0.03, pointerEvents: 'none' }}>
          {/* Flame */}
          <path d="M50 15 C50 15, 42 30, 42 38 C42 43, 45.5 47, 50 47 C54.5 47, 58 43, 58 38 C58 30, 50 15, 50 15Z" stroke="white" strokeWidth="1.5" />
          <path d="M50 25 C50 25, 46 33, 46 37 C46 40, 47.8 42, 50 42 C52.2 42, 54 40, 54 37 C54 33, 50 25, 50 25Z" fill="white" opacity="0.5" />
          {/* Lamp body */}
          <path d="M30 55 Q30 48, 50 48 Q70 48, 70 55 L75 85 Q75 95, 50 95 Q25 95, 25 85 Z" stroke="white" strokeWidth="2" />
          <ellipse cx="50" cy="55" rx="20" ry="5" stroke="white" strokeWidth="1.5" />
          {/* Base */}
          <line x1="35" y1="95" x2="65" y2="95" stroke="white" strokeWidth="2" />
          <line x1="40" y1="100" x2="60" y2="100" stroke="white" strokeWidth="1.5" />
        </svg>

        {/* Decorative paisley swirl — center top */}
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" style={{ position: 'absolute', top: '-40px', left: '40%', opacity: 0.02, pointerEvents: 'none', transform: 'rotate(-30deg)' }}>
          <path d="M100 20 C140 20, 170 50, 170 90 C170 130, 140 160, 100 160 C80 160, 65 150, 55 135" stroke="white" strokeWidth="2" />
          <path d="M55 135 C45 120, 40 100, 50 80 C60 60, 80 50, 100 55" stroke="white" strokeWidth="2" />
          <path d="M100 55 C110 58, 120 70, 118 85 C116 100, 105 110, 90 108" stroke="white" strokeWidth="1.5" />
          <circle cx="90" cy="90" r="8" stroke="white" strokeWidth="1.5" />
          <circle cx="90" cy="90" r="3" fill="white" />
        </svg>

        {/* Flickering grid background */}
        <FlickeringGrid
          squareSize={3}
          gridGap={8}
          flickerChance={0.15}
          color="rgb(255, 255, 255)"
          maxOpacity={0.08}
        />

        <div className="container-main relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">
            {/* Brand + Store Info — spans 4 cols */}
            <div className="lg:col-span-4">
              <img
                src="/images/logo.png"
                alt="Sri Girraj Mishtan Bhandar"
                className="h-[52px] w-auto object-contain brightness-0 invert mb-5"
              />
              <p
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                  maxWidth: '300px',
                }}
              >
                Handcrafted mithai made with pure desi ghee, fresh ingredients and generations of love — since Govardhan.
              </p>

              {/* Store address */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '16px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  marginBottom: '24px',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'rgba(255,255,255,0.8)', fontWeight: 600, marginBottom: '4px' }}>
                    Visit Our Store
                  </p>
                  <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                    Govardhan, Mathura<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-[10px]">
                {[
                  { name: "Instagram", icon: <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z" /> },
                  { name: "Facebook", icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                  { name: "YouTube", icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></> },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="inline-flex items-center justify-center"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '500px',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      transition: 'all .25s cubic-bezier(.104,.204,.492,1)',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#871a45'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" stroke="none">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links — spans 2 cols */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '20px',
                }}
              >
                Quick Links
              </h4>
              <ul className="list-none m-0 p-0">
                {[
                  { label: "All Sweets", href: "/products" },
                  { label: "Bulk Gifting", href: "#gifting" },
                  { label: "Our Story", href: "#story" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Contact Us", href: "#contact" },
                ].map((item) => (
                  <li key={item.label} style={{ marginBottom: '10px' }}>
                    <a
                      href={item.href}
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.55)',
                        textDecoration: 'none',
                        transition: 'color .2s ease',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories — spans 2 cols */}
            <div className="lg:col-span-2">
              <h4
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '20px',
                }}
              >
                Categories
              </h4>
              <ul className="list-none m-0 p-0">
                {["Burfi", "Laddu", "Peda", "Traditional", "Petha", "Chocolate"].map((item) => (
                  <li key={item} style={{ marginBottom: '10px' }}>
                    <a
                      href="/products"
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.55)',
                        textDecoration: 'none',
                        transition: 'color .2s ease',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Policies — spans 2 cols */}
            <div className="lg:col-span-2">
              <h4
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '20px',
                }}
              >
                Get in Touch
              </h4>
              <div style={{ marginBottom: '24px' }}>
                {[
                  {
                    icon: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />,
                    icon2: <polyline points="22,6 12,13 2,6" />,
                    text: "hello@srigirraj.com",
                    href: "mailto:hello@srigirraj.com",
                  },
                  {
                    icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />,
                    text: "+91 99999 99999",
                    href: "tel:+919999999999",
                  },
                ].map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center gap-[10px]"
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'none',
                      marginBottom: '14px',
                      transition: 'color .2s ease',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                      {contact.icon}
                      {contact.icon2}
                    </svg>
                    {contact.text}
                  </a>
                ))}
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '16px',
                }}
              >
                Policies
              </h4>
              <ul className="list-none m-0 p-0">
                {["Terms of Service", "Privacy Policy", "Shipping", "Refunds"].map((item) => (
                  <li key={item} style={{ marginBottom: '10px' }}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.4)',
                        textDecoration: 'none',
                        transition: 'color .2s ease',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            marginTop: '48px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            className="container-main flex flex-col items-center"
            style={{ padding: '28px 0 24px' }}
          >
            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Sri Girraj Mishtan Bhandar"
              className="brightness-0 invert"
              style={{ height: '36px', width: 'auto', objectFit: 'contain', marginBottom: '14px', opacity: 0.4 }}
            />
            {/* Devanagari tagline */}
            <p
              style={{
                fontFamily: "'Noto Serif Devanagari', serif",
                fontSize: '13px',
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.04em',
                marginBottom: '10px',
              }}
            >
              ॥ राधे राधे ॥
            </p>
            {/* Copyright — centered */}
            <p
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.02em',
                textAlign: 'center',
              }}
            >
              &copy; {new Date().getFullYear()} Sri Girraj Mishtan Bhandar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
