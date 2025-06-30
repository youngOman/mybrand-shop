import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSwiper from "@/components/ui/HeroSwiper";
import ConceptSection from "@/components/ui/ConceptSection";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import PromotionBanner from "@/components/ui/PromotionBanner";
import BrandValues from "@/components/ui/BrandValues";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header currentPage="home" />
      <HeroSwiper />
      <ConceptSection />
      <FeaturedProducts />
      <PromotionBanner />
      <BrandValues />
      <Footer />
    </div>
  );
}