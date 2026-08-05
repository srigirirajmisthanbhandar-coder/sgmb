"use client";

import HeritageTopbar from "@/components/HeritageTopbar";
import HeritageFooter from "@/components/HeritageFooter";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeritageTopbar />
      {/* clears the fixed topbar — these pages have no full-bleed hero
          for it to float over the way the home page does */}
      <div style={{ paddingTop: "clamp(72px, 6vw + 20px, 92px)" }}>
        {children}
      </div>
      <HeritageFooter />
    </>
  );
}
