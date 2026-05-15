"use client";

import GovNavbar from "@/components/govardhan/GovNavbar";
import GovMaharajStrip from "@/components/govardhan/GovMaharajStrip";
import GovFooter from "@/components/govardhan/GovFooter";

export default function GovardhanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ backgroundColor: "#F8F2E8" }}>
      <GovNavbar />
      <GovMaharajStrip />
      {children}
      <GovFooter />
    </div>
  );
}
