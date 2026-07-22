import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

/**
 * Shared layout for the two laser-service pillars (welding, cleaning). Both are
 * newer offerings, so the copy is written to work for "services and training"
 * and the specific offer/pricing model is left as a code TODO in each route —
 * never fabricated. Laser-technology facts are presented as how the technology
 * works, not as Envishon's measured results.
 */
export type LaserPillar = {
  eyebrow: string;
  breadcrumb: string;
  titleTop: string;
  titleSpark: string;
  lead: string;
  bullets: string[];
  factsHeading: string;
  facts: { term: string; body: string }[];
  note: { heading: string; body: string };
  ctaHeading: string;
  ctaSub: string;
};

export function LaserServicePage({ pillar }: { pillar: LaserPillar }) {
  return (
    <main className="bg-base text-titanium">
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-base-700">
        <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/[0.06] to-transparent animate-scanline motion-reduce:hidden" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <nav className="mb-7 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-graphite">
            <Link href="/services" className="hover:text-accent-ember">
              Services
            </Link>
            <span>/</span>
            <span className="text-steel">{pillar.breadcrumb}</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-accent-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring motion-reduce:animate-none" />
            {pillar.eyebrow}
          </span>

          <h1 className="mt-8 font-heading text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl text-balance">
            {pillar.titleTop}
            <br />
            <span className="text-spark">{pillar.titleSpark}</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-steel text-pretty">
            {pillar.lead}
          </p>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-spark group px-8 py-4 text-sm">
              Talk to our team
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="btn-ghost px-8 py-4 text-sm">
              All services
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ──────────────────────────────────────────────── */}
      <section className="border-b border-base-700/70 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              What we offer
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
              The capability, without the learning curve.
            </h2>
            <p className="mt-5 leading-relaxed text-steel">
              Envishon brings this to shops that want the speed and quality
              without spending months getting there. Whether that&apos;s hands-on
              training for your team, service work we perform, or both, we scope
              it to how you actually operate.
            </p>
          </div>

          <ul className="space-y-4">
            {pillar.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent-ember">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span className="text-[15px] leading-relaxed text-titanium">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── HOW THE TECHNOLOGY WORKS ───────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-base-700/70 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              How it works
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
              {pillar.factsHeading}
            </h2>
          </div>
          <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {pillar.facts.map((row) => (
              <div key={row.term} className="border-t border-white/[0.08] pt-5">
                <dt className="font-heading text-lg tracking-tight text-white">
                  {row.term}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-steel">
                  {row.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── HONEST NOTE — builds trust ─────────────────────────────────── */}
      <section className="border-b border-base-700/70 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-white/[0.08] bg-base-900/60 p-8">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
              {pillar.note.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-steel">{pillar.note.body}</p>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
            {pillar.ctaHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-steel">
            {pillar.ctaSub}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-spark group px-8 py-4 text-sm">
              Talk to our team
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="btn-ghost px-8 py-4 text-sm">
              All services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
