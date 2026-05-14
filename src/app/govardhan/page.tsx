"use client";

import GovNavbar from "@/components/govardhan/GovNavbar";
import GovHero from "@/components/govardhan/GovHero";
import GovFeatureStrip from "@/components/govardhan/GovFeatureStrip";
import GovStory from "@/components/govardhan/GovStory";
import GovSignatureSweets from "@/components/govardhan/GovSignatureSweets";
import GovHotel from "@/components/govardhan/GovHotel";
import GovExperience from "@/components/govardhan/GovExperience";
import GovFestivals from "@/components/govardhan/GovFestivals";
import GovGifting from "@/components/govardhan/GovGifting";
import GovTestimonials from "@/components/govardhan/GovTestimonials";
import GovInstagram from "@/components/govardhan/GovInstagram";
import GovFooter from "@/components/govardhan/GovFooter";

export default function GovardhanPage() {
  return (
    <div style={{ backgroundColor: "#F8F2E8" }}>
      <GovNavbar />
      <GovHero />
      <GovFeatureStrip />
      <GovStory />
      <GovSignatureSweets />
      <GovHotel />
      <GovExperience />
      <GovFestivals />
      <GovGifting />
      <GovTestimonials />
      <GovInstagram />
      <GovFooter />
    </div>
  );
}
