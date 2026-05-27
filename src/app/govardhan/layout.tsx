"use client";

import GovNavbar from "@/components/govardhan/GovNavbar";
import GovFooter from "@/components/govardhan/GovFooter";

export default function GovardhanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gov-page" style={{ backgroundColor: "#F8F2E8" }}>
      <GovNavbar />
      {children}
      <GovFooter />
    </div>
  );
}
