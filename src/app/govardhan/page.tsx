"use client";

import GovHero from "@/components/govardhan/GovHero";
import GovFeatureStrip from "@/components/govardhan/GovFeatureStrip";
import GovStory from "@/components/govardhan/GovStory";
import GovSweetCarousel from "@/components/govardhan/GovSweetCarousel";
import GovSignatureSweets from "@/components/govardhan/GovSignatureSweets";
import GovHotel from "@/components/govardhan/GovHotel";
import GovExperience from "@/components/govardhan/GovExperience";
import GovFestivals from "@/components/govardhan/GovFestivals";
import GovGifting from "@/components/govardhan/GovGifting";
import GovTestimonials from "@/components/govardhan/GovTestimonials";
import GovInstagram from "@/components/govardhan/GovInstagram";

export default function GovardhanPage() {
  return (
    <>
      <GovHero />
      <GovFeatureStrip />
      <GovStory />
      <GovSweetCarousel />
      <GovSignatureSweets />
      <GovHotel />
      <GovExperience />
      <GovFestivals />
      <GovGifting />
      <GovTestimonials />
      <GovInstagram />
    </>
  );
}
