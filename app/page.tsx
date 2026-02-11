import { HeroNew } from "@/components/home/HeroNew";
import { HeroSteps } from "@/components/home/HeroSteps";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { HomePackagesSection } from "@/components/home/HomePackagesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTABanner } from "@/components/home/CTABanner";
import { TrustPartnerSection } from "@/components/home/TrustPartnerSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroNew />
      <HeroSteps />
      <FeaturesSection />
      <WhyChooseSection />
      <HomePackagesSection />
      <TestimonialsSection />
      <CTABanner />
      <TrustPartnerSection />
      <ContactSection />
    </>
  );
}
