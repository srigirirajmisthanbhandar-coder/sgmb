"use client";

import HeritageTopbar from "@/components/HeritageTopbar";
import HeritageFooter from "@/components/HeritageFooter";

export default function BhandarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeritageTopbar />
      {children}
      <HeritageFooter />
    </>
  );
}
