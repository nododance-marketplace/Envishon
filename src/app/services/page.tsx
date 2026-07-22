import type { Metadata } from "next";
import Link from "next/link";
import { PillarGrid } from "@/components/services/PillarGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Envishon's services: metal AM training, installation and support; laser welding; and laser cleaning — for shops across the Americas. We don't sell you a box. We make sure it produces.",
};

export default function ServicesHubPage() {
  return (
    <main className="bg-base text-titanium">
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-base-700">
        <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/[0.06] to-transparent animate-scanline motion-reduce:hidden" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-accent-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring motion-reduce:animate-none" />
            Industrial laser &amp; additive services
          </span>
          <h1 className="mt-8 font-heading text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl text-balance">
            We sell capability,
            <br />
            <span className="text-spark">not machines.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-steel text-pretty">
            Three ways Envishon puts industrial laser and additive capability on
            your floor — training, installation, technical support, laser
            welding, and laser cleaning — across the Americas.
          </p>
        </div>
      </section>

      {/* ── PILLARS ────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PillarGrid />
        </div>
      </section>

      {/* ── HONEST FRAMING ─────────────────────────────────────────────── */}
      <section className="border-t border-base-700/70 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            How we work
          </span>
          <h2 className="mt-5 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
            An independent services company.
          </h2>
          <p className="mt-6 leading-relaxed text-steel">
            Envishon is a new, independent company focused on one thing: making
            industrial laser and additive capability actually work for the shops
            that adopt it. We&apos;re direct about what we do and don&apos;t do
            yet — and we&apos;d rather scope the right engagement than oversell.
          </p>
          <div className="mt-9">
            <Link href="/contact" className="btn-spark group px-8 py-4 text-sm">
              Talk to our team
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
