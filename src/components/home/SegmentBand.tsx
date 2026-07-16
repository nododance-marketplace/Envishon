import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  ArrowRightIcon,
  CubeIcon,
  CompassIcon,
  LayersIcon,
} from "@/components/ui/icons";

/**
 * Use-case segments — the image-led band. Each tile uses a branded graphic
 * (no product photo dependency) with a "scale" cue that grows from Desktop to
 * Industrial, and routes to the shop pre-filtered to that category.
 */
const SEGMENTS = [
  {
    index: "Ⅰ",
    label: "Desktop",
    icon: CubeIcon,
    scale: 1,
    title: "Metal on the bench",
    blurb:
      "All-in-one SLM systems small enough for a lab bench — in-house metal printing without the floor space.",
    href: "/shop?category=Desktop",
  },
  {
    index: "Ⅱ",
    label: "Dental",
    icon: CompassIcon,
    scale: 2,
    title: "Crowns by the tray",
    blurb:
      "Precision SLM tuned for crowns, frameworks, and dental labs — hundreds of units per run.",
    href: "/shop?category=Dental",
  },
  {
    index: "Ⅲ",
    label: "Industrial",
    icon: LayersIcon,
    scale: 3,
    title: "Production at scale",
    blurb:
      "Large- and super-large-format multi-laser SLM for molds, tooling, and serious mass production.",
    href: "/shop?category=Industrial",
  },
];

export function SegmentBand() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-40 lg:px-8">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <div className="flex items-baseline gap-6">
              <p className="kicker">
                <span className="h-px w-8 bg-accent/60" />
                Built around your work
              </p>
              <span className="hud-chip hidden sm:inline-flex">SEC 02</span>
            </div>
            <h2 className="mt-5 font-heading text-4xl font-medium tracking-tight text-white sm:text-5xl text-balance">
              One process. Three floors.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-steel text-pretty">
            The same laser-melting technology, sized from a single bench to a
            full production line. Pick the scale that matches your shop.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {SEGMENTS.map((seg, i) => {
          const Icon = seg.icon;
          return (
            <Reveal key={seg.label} delay={i * 120} from="up">
              <SpotlightCard className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-base-900/60 shadow-depth">
                {/* Branded graphic plinth */}
                <div className="relative aspect-[5/4] w-full overflow-hidden">
                  <div className="absolute inset-0 tech-grid" />
                  <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.12] blur-[70px] transition-all duration-700 group-hover:bg-accent/20" />

                  {/* Ascending layer stack — count == scale */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 40 56"
                      className="h-2/3 w-auto text-titanium transition-transform duration-700 ease-out group-hover:-translate-y-1"
                      fill="none"
                      aria-hidden="true"
                    >
                      {[0, 1, 2].map((n) => {
                        const y = 34 - n * 11;
                        const active = n < seg.scale;
                        return (
                          <path
                            key={n}
                            d={`M20 ${y} L37 ${y + 8.5} L20 ${y + 17} L3 ${y + 8.5} Z`}
                            fill={active ? "currentColor" : "currentColor"}
                            opacity={active ? 0.35 + n * 0.25 : 0.06}
                          />
                        );
                      })}
                    </svg>
                  </div>

                  <span className="absolute left-5 top-4 font-mono text-2xl text-steel/40">
                    {seg.index}
                  </span>
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-base/40 text-accent-ember backdrop-blur">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-base-900 to-transparent" />
                </div>

                <div className="relative flex flex-1 flex-col p-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
                    {seg.label}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl tracking-tight text-white">
                    {seg.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel text-pretty">
                    {seg.blurb}
                  </p>
                  <Link
                    href={seg.href}
                    className="group/link mt-6 inline-flex items-center gap-1.5 text-sm text-titanium transition-colors hover:text-accent-ember"
                    aria-label={`Explore ${seg.label} printers`}
                  >
                    Explore {seg.label.toLowerCase()}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
