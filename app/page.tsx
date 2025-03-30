import { HeroSection } from "@/components/home/HeroSection";
import { SpecialOffers } from "@/components/home/SpecialOffers";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <SpecialOffers />
      <Testimonials />
    </main>
  );
}