import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { EnvishonMark } from "@/components/layout/BrandLockup";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Envishon is a new, independent industrial laser and additive-manufacturing services company for the Americas — training, installation, support, laser welding, and laser cleaning. We support FastForm systems.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal>
        <p className="kicker">
          <span className="h-px w-8 bg-accent/60" />
          Who we are
        </p>
        <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl text-balance">
          The machine is the easy part.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel text-pretty">
          Envishon is a new, independent industrial laser and
          additive-manufacturing services company for the Americas. We don&apos;t
          sell machines. We sell the capability to run them — training,
          installation, technical support, laser welding, and laser cleaning —
          so the shops that adopt this technology actually produce with it.
        </p>
      </Reveal>

      {/* The idea */}
      <Reveal delay={100}>
        <div className="mt-20 grid items-center gap-10 rounded-3xl border border-white/[0.07] bg-base-900/40 p-8 shadow-depth lg:grid-cols-[0.9fr_1fr] sm:p-12">
          <div className="flex items-center gap-5">
            <EnvishonMark className="h-16 w-auto shrink-0 drop-shadow-[0_4px_16px_rgba(124,58,237,0.4)]" />
            <p className="font-heading text-4xl font-medium uppercase tracking-tight text-white sm:text-5xl">
              Capability,
              <br />
              <span className="text-spark">not a box.</span>
            </p>
          </div>
          <p className="text-lg leading-relaxed text-steel text-pretty">
            Anyone can put a laser or a metal printer on a pallet. What&apos;s
            hard is getting it commissioned, learning to run it safely, and
            keeping it producing months later. That gap is the whole reason we
            exist — and it&apos;s the same gap whether you&apos;re printing metal,
            welding a seam, or stripping a surface.
          </p>
        </div>
      </Reveal>

      {/* Facts */}
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {[
          {
            n: "01",
            h: "What we do",
            b: "Metal AM training, installation and support; handheld laser welding; and laser cleaning and rust removal — as services, training, or both.",
          },
          {
            n: "02",
            h: "Who we serve",
            b: "Fabrication shops, manufacturers, labs, and industrial and marine operations across the Americas — the US, Canada, Mexico, Brazil, and beyond.",
          },
          {
            n: "03",
            h: "How we partner",
            /* TODO: upgrade partnership language once the agreement is signed */
            b: "We support FastForm metal-AM systems and work in partnership with FastForm. Independent by design — our advice isn't a pitch for any one machine.",
          },
        ].map((card, i) => (
          <Reveal key={card.h} delay={120 + i * 60}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-base-900/60 p-8 shadow-depth">
              <span className="font-mono text-sm tabular-nums text-steel/50">
                {card.n}
              </span>
              <h2 className="mt-3 font-heading text-lg tracking-tight text-white">
                {card.h}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-steel text-pretty">
                {card.b}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Honest note — young company */}
      <Reveal delay={140}>
        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-base-900/60 p-8 shadow-depth">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
            Straight talk
          </p>
          <p className="mt-4 leading-relaxed text-steel">
            Envishon is new, and we&apos;d rather earn trust than inflate it. You
            won&apos;t find invented client counts, coverage maps, or guarantees
            we can&apos;t back on this site. What you&apos;ll get is a direct
            conversation about what we can do for your shop and how.
          </p>
        </div>
      </Reveal>

      {/* Closing CTA */}
      <Reveal delay={160}>
        <div className="mt-6 flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-base-900/60 p-8 shadow-depth sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <EnvishonMark className="h-11 w-auto shrink-0" />
            <p className="font-heading text-xl tracking-tight text-white">
              We make it <span className="text-spark">produce.</span>
            </p>
          </div>
          <Link href="/services" className="btn-spark group px-7 py-3.5 text-sm">
            Explore services
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
