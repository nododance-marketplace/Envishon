import { Hero } from "@/components/home/Hero";
import { TelemetryStrip } from "@/components/home/TelemetryStrip";
import { WhySection } from "@/components/home/WhySection";
import { SegmentBand } from "@/components/home/SegmentBand";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TelemetryStrip />
      <WhySection />
      <SegmentBand />
      <FeaturedProducts />
      <CtaBand />
    </>
  );
}
