import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CompassIcon, CubeIcon, ShieldIcon } from "@/components/ui/icons";

const PILLARS = [
  {
    icon: CompassIcon,
    index: "01",
    title: "Process, not hardware",
    body: "The machine rarely fails. The knowledge to run it is what's missing — how to commission it, train an operator, handle the powder, weld cleanly, strip a surface without wrecking it. That's the part we do.",
  },
  {
    icon: ShieldIcon,
    index: "02",
    title: "Independent by design",
    body: "We don't move boxes, so our advice isn't a sales pitch for one. We'll tell you which platform fits, when laser is the wrong tool, and what an honest engagement actually looks like.",
  },
  {
    icon: CubeIcon,
    index: "03",
    title: "Built for the Americas",
    body: "Envishon works across the Americas — the US, Canada, Mexico, Brazil, and beyond — bringing laser and additive capability to shops that would otherwise have to send the work out.",
  },
];

export function WhySection() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-44">
      {/* Technical grid backdrop */}
      <div className="pointer-events-none absolute inset-0 tech-grid" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60vw] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4">
            <p className="kicker">
              <span className="h-px w-8 bg-accent/60" />
              Why Envishon
            </p>
            <span className="hud-chip hidden sm:inline-flex">
              SEC 03 · CAPABILITY
            </span>
          </div>
          <h2 className="mt-5 max-w-2xl font-heading text-4xl font-medium tracking-tight text-white sm:text-5xl text-balance">
            We sell the part that fails.
          </h2>
        </Reveal>

        {/* Asymmetric 3-up — spotlight panels, not a flat card row */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 110} from="up">
                <SpotlightCard className="flex h-full flex-col rounded-2xl border border-white/[0.07] bg-base-900/50 p-8 shadow-depth">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-accent-ember">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm tabular-nums text-steel/50">
                      {pillar.index}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-xl tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel text-pretty">
                    {pillar.body}
                  </p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
