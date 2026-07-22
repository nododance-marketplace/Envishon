import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
  ArrowRightIcon,
  LayersIcon,
  BeamIcon,
  SparkIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Platforms we service",
  description:
    "The equipment Envishon trains and supports on — metal 3D printers, laser welders, and laser cleaning systems. Specific platforms coming soon.",
};

/**
 * Platforms — one placeholder per service pillar for now. The full machine
 * catalog was removed; specific platforms will be added later. Each card is a
 * gateway to the service that runs on that equipment.
 */
const PLACEHOLDERS = [
  {
    href: "/services/additive",
    icon: LayersIcon,
    tag: "Metal Additive",
    title: "Metal 3D Printer",
    blurb:
      "SLM/LPBF metal printers — the platform we install, calibrate, train operators on, and support.",
  },
  {
    href: "/services/laser-welding",
    icon: BeamIcon,
    tag: "Laser Welding",
    title: "Laser Welding Machine",
    blurb:
      "Handheld fiber laser welding systems for steel, stainless, and aluminum — service and training.",
  },
  {
    href: "/services/laser-cleaning",
    icon: SparkIcon,
    tag: "Laser Cleaning",
    title: "Laser Cleaning System",
    blurb:
      "Laser ablation systems that strip rust, coatings, and contamination without touching the base metal.",
  },
];

export default function PlatformsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <p className="kicker">
          <span className="h-px w-8 bg-accent/60" />
          Platforms
        </p>
        <h1 className="mt-5 font-heading text-4xl font-medium tracking-tight text-white sm:text-6xl text-balance">
          The equipment behind the work.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-steel text-pretty">
          Envishon is equipment-agnostic — we work across common platforms for
          each service. Specific machines are being added here. For now, here&apos;s
          the shape of what we install, train on, and support.
        </p>
      </header>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {PLACEHOLDERS.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.href} delay={i * 110} from="up">
              <SpotlightCard
                as="article"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-base-900/60 shadow-depth"
              >
                {/* Placeholder visual */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-base-800">
                  <div className="absolute inset-0 tech-grid opacity-70" />
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.12] blur-[70px]" />
                  <div className="absolute inset-0 flex items-center justify-center text-steel/60">
                    <Icon className="h-14 w-14" />
                  </div>
                  <span className="absolute right-3 top-3 rounded-md border border-accent/40 bg-accent/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-ember backdrop-blur">
                    Coming soon
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-steel/70">
                    <span>{p.tag}</span>
                    <span>Platform TBD</span>
                  </div>
                </div>

                <div className="relative z-[2] flex flex-1 flex-col gap-3 p-6">
                  <div className="rule-ticks" aria-hidden="true" />
                  <h3 className="font-heading text-xl tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-steel text-pretty">
                    {p.blurb}
                  </p>
                  <Link
                    href={p.href}
                    className="group/link mt-auto inline-flex items-center gap-1.5 pt-4 text-sm text-accent-ember transition-colors hover:text-white"
                  >
                    Explore the service
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>

      <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-relaxed text-steel">
        Running a machine we haven&apos;t listed yet?{" "}
        <Link href="/contact" className="text-accent hover:text-accent-signal">
          Tell us what you have
        </Link>{" "}
        and we&apos;ll tell you how we can help.
      </p>
    </div>
  );
}
