import Link from "next/link";
import { PILLARS, VIZUS_TEASER } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * The three pillars as equipment-plate cards + the Vizus AI teaser. Shared by
 * the home page and the /services hub.
 */
export function PillarGrid() {
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2">
        {PILLARS.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.href} delay={i * 110} from="up">
              <SpotlightCard className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-base-900/50 p-8 shadow-depth">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-accent-ember">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-sm tabular-nums text-steel/50">
                    {p.n}
                  </span>
                </div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-ember">
                  {p.eyebrow}
                </p>
                <h3 className="mt-2 font-heading text-xl leading-snug tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-steel text-pretty">
                  {p.blurb}
                </p>
                <Link
                  href={p.href}
                  className="group/link mt-6 inline-flex items-center gap-1.5 text-sm text-titanium transition-colors hover:text-accent-ember"
                >
                  Explore
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>

      {/* Text-to-CAD — the fourth offering, teased and linked out. Coming soon. */}
      <Reveal delay={120} className="mt-5">
        <Link
          href={VIZUS_TEASER.href}
          className="group flex flex-col items-start justify-between gap-4 rounded-2xl border border-accent/25 bg-accent/[0.05] p-6 transition-colors hover:border-accent/50 sm:flex-row sm:items-center"
        >
          <p className="text-[15px] leading-relaxed text-titanium">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-accent-ember">
              Also from Envishon
              <span className="rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 text-[9px] tracking-[0.18em] text-accent-ember">
                Coming soon
              </span>
            </span>
            <br className="hidden sm:block" />
            {VIZUS_TEASER.blurb}
          </p>
          <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-accent-ember transition-colors group-hover:text-white">
            Preview Text-to-CAD
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </Reveal>
    </div>
  );
}
