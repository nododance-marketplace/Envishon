import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { platforms } from "@/data/platforms";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Platforms we service",
  description:
    "The equipment Envishon trains and supports on — the FastForm SLM/LPBF metal printer line, the xTool MetalFab laser welder, cutter, and cleaner, and the EN-Atomizer precious-metal powder system.",
};

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
          The metal printers, laser systems, and powder production Envishon
          installs, trains operators on, and supports — because printing starts
          with the material. Bring your own machine, or ask us which platform
          fits your work.
        </p>
      </header>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {platforms.map((p, i) => (
          <Reveal key={p.slug} delay={i * 110} from="up">
            <SpotlightCard
              as="article"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-base-900/60 shadow-depth"
            >
              <Link
                href={`/platforms/${p.slug}`}
                className="relative aspect-[4/3] w-full overflow-hidden bg-white"
                aria-label={`View ${p.name}`}
              >
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.subtitle}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 z-10 rounded-md border border-white/10 bg-base/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-titanium backdrop-blur">
                  {p.tag}
                </span>
              </Link>

              <div className="relative z-[2] flex flex-1 flex-col gap-3 p-6">
                <div className="rule-ticks" aria-hidden="true" />
                <h2 className="font-heading text-xl tracking-tight text-white">
                  {p.name}
                </h2>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-ember">
                  {p.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-steel text-pretty">
                  {p.tagline}
                </p>
                <Link
                  href={`/platforms/${p.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm text-accent-ember transition-colors hover:text-white"
                >
                  View platform &amp; specs
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-relaxed text-steel">
        Running a machine we haven&apos;t listed?{" "}
        <Link href="/contact" className="text-accent hover:text-accent-signal">
          Tell us what you have
        </Link>{" "}
        and we&apos;ll tell you how we can help.
      </p>
    </div>
  );
}
