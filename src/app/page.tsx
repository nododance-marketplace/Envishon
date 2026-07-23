import { Hero } from "@/components/home/Hero";
import { WhySection } from "@/components/home/WhySection";
import { CtaBand } from "@/components/home/CtaBand";
import { PillarGrid } from "@/components/services/PillarGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ProgressRail } from "@/components/ui/ProgressRail";

const RAIL = [
  { id: "overview", label: "Overview" },
  { id: "services", label: "Services" },
  { id: "why", label: "Why Envishon" },
  { id: "contact-cta", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <ProgressRail sections={RAIL} />

      <div id="overview">
        <Hero />
      </div>

      {/* ── THREE PILLARS ────────────────────────────────────────────── */}
      <section id="services" className="relative py-28 sm:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4">
              <p className="kicker">
                <span className="h-px w-8 bg-accent/60" />
                What we do
              </p>
              <span className="hud-chip hidden sm:inline-flex">
                SEC 01 · SERVICES
              </span>
            </div>
            <h2 className="mt-5 max-w-2xl font-heading text-4xl font-medium tracking-tight text-white sm:text-5xl text-balance">
              Two ways we make it produce.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-steel text-pretty">
              Envishon is an industrial laser and additive services company.
              This is the whole company — plus the software to design what you
              print.
            </p>
          </Reveal>
          <div className="mt-14">
            <PillarGrid />
          </div>
        </div>
      </section>

      <div id="why">
        <WhySection />
      </div>
      <div id="contact-cta" className="pb-8 pt-6 sm:pb-16 sm:pt-10">
        <CtaBand />
      </div>
    </>
  );
}
