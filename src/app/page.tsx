import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import ExperienceCards from "@/components/ExperienceCards";
import FestiveCollections from "@/components/FestiveCollections";
import ProductGrid from "@/components/ProductGrid";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import TrustStats from "@/components/TrustStats";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import Footer from "@/components/Footer";
import MaharajGallery from "@/components/MaharajGallery";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <MaharajGallery />
      <HeroSlideshow />
      <ExperienceCards />
      <FestiveCollections />
      <ProductGrid />
      <ReviewsCarousel />
      <TrustStats />
      <ScrollingMarquee />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
