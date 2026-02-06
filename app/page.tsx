import { Hero } from "@/components/home/Hero";
import { PackagesSection } from "@/components/home/PackagesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTABanner } from "@/components/home/CTABanner";
import { WorldMapSection } from "@/components/home/WorldMapSection";
import { HomeForm } from "@/components/home/HomeForm";

export default function Home() {
  return (
    <>
      <Hero />
      <PackagesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTABanner />
      <WorldMapSection />
      <HomeForm />
    </>
  );
}
