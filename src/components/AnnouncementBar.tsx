"use client";

import { useState, useEffect, useCallback } from "react";

const announcements = [
  { text: "॥ मेरौ तो गिर्राज बाबा ॥", isHindi: true },
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % announcements.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + announcements.length) % announcements.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="bg-[#871a45] text-white relative" style={{ minHeight: '34px' }}>
      <div className="container-main flex items-center justify-between" style={{ minHeight: '34px' }}>
        {/* Left arrow — BSS exact: 28px nav buttons */}
        <button
          onClick={prev}
          className="w-[28px] h-[28px] flex items-center justify-center text-white/70 hover:text-white shrink-0"
          style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
          aria-label="Previous announcement"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M7 13L1 7L7 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Text — BSS exact: 14px, font-weight 700 */}
        <div className="flex-1 text-center py-[5px]">
          <p
            className="text-[14px] font-bold leading-[1.2]"
            style={announcements[current].isHindi ? { fontFamily: "'Noto Serif Devanagari', serif", fontSize: '16px', letterSpacing: '0.04em' } : {}}
          >
            {announcements[current].text}
          </p>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          className="w-[28px] h-[28px] flex items-center justify-center text-white/70 hover:text-white shrink-0"
          style={{ transition: 'all .25s cubic-bezier(.104,.204,.492,1)' }}
          aria-label="Next announcement"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M1 13L7 7L1 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
