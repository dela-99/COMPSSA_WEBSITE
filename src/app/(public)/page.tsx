import {
  HeroSection,
  AboutFeatureSection,
  NewsBentoSection,
  CommunityCTASection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with atmospheric visual backdrop, heraldic crest & floating feature cards */}
      <HeroSection />

      {/* 2. About & Middle Section: Editorial introduction with overlapping student portrait */}
      <AboutFeatureSection />

      {/* 3. News & Events Bento Grid: Featured image cards, monthly calendar widget, and Join card */}
      <NewsBentoSection />

      {/* 4. Academic Highlights & Community On-ramp */}
      <CommunityCTASection />
    </>
  );
}