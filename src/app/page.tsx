import { Hero } from "@/components/home/Hero";
import { TelemetryStrip } from "@/components/home/TelemetryStrip";
import { FilmBand } from "@/components/home/FilmBand";
import { WhySection } from "@/components/home/WhySection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CtaBand } from "@/components/home/CtaBand";
import { ProgressRail } from "@/components/ui/ProgressRail";

// Section index for the sticky rail — ids live on the wrappers below.
const RAIL = [
  { id: "overview", label: "Overview" },
  { id: "film", label: "Walkthrough" },
  { id: "why", label: "Why Envishon" },
  { id: "machines", label: "Machines" },
  { id: "contact-cta", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <ProgressRail sections={RAIL} />

      <div id="overview">
        <Hero />
        <TelemetryStrip />
      </div>
      <div id="film">
        <FilmBand />
      </div>
      <div id="why">
        <WhySection />
      </div>
      <div id="machines">
        <FeaturedProducts />
      </div>
      <div id="contact-cta" className="pb-8 pt-6 sm:pb-16 sm:pt-10">
        <CtaBand />
      </div>
    </>
  );
}
