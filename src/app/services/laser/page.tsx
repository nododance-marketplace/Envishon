import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, BeamIcon, SparkIcon } from "@/components/ui/icons";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SERVICES · LASER WELDING & CLEANING  ·  /services/laser
 * ─────────────────────────────────────────────────────────────────────────
 *  Merged pillar. A single handheld fiber-laser system does both jobs — weld
 *  and clean — so the two former pages (/laser-welding, /laser-cleaning) are
 *  now one. Both redirect here (see next.config.mjs).
 *
 *  Truth discipline: laser facts are general properties of the technology, not
 *  Envishon's measured results. The specific machine (supplier) is not named
 *  customer-facing. Offer model (training vs. service vs. both) is a TODO.
 *  ─────────────────────────────────────────────────────────────────────────
 */

export const metadata: Metadata = {
  title: "Laser Welding & Cleaning",
  description:
    "One handheld fiber laser, two jobs: weld steel, stainless, and aluminum with far less heat than TIG, and strip rust, coatings, and contamination by ablation — no media, no chemicals. Services and training.",
};

const WELDING = {
  bullets: [
    "Steel, stainless & aluminum",
    "Dramatically less heat distortion than TIG",
    "Clean welds, minimal post-processing",
    "Faster throughput",
  ],
  facts: [
    {
      term: "A tighter heat input",
      body: "The focused beam melts a narrow zone, so far less heat spreads into the part than with an arc — which is why distortion and warping drop sharply.",
    },
    {
      term: "Speed over an arc",
      body: "Because it fuses quickly along the joint, laser welding typically runs several times faster than TIG on comparable work.",
    },
    {
      term: "A cleaner bead",
      body: "The narrow, controlled weld leaves a tidy finish that usually needs little grinding or blending afterward.",
    },
  ],
  note: {
    heading: "Where it fits — and where it doesn't",
    body: "Laser welding complements rather than fully replaces TIG and MIG. For thin-to-medium fabrication, speed and finish work, and repeatable production joints, it's a real advantage. For heavy structural welds and thick sections, traditional processes still tend to win. We'll tell you honestly which jobs it's right for.",
  },
};

const CLEANING = {
  bullets: [
    "Rust, paint, coatings & oxide removal",
    "No abrasive media or chemicals",
    "Substrate stays intact",
    "Excellent weld-prep and surface conditioning",
  ],
  facts: [
    {
      term: "It vaporizes the layer, not the part",
      body: "The beam delivers energy the contamination absorbs and the base metal largely reflects, so the rust or coating lifts off while the substrate stays intact.",
    },
    {
      term: "No media, no chemicals",
      body: "Unlike sandblasting or solvent stripping, there's no grit and no chemical bath — which means far less hazardous waste to capture and dispose of.",
    },
    {
      term: "Selective and controllable",
      body: "Power and passes are tuned to the job, so it can take a surface to bare metal or lift a single coating layer without gouging.",
    },
  ],
  note: {
    heading: "How this technology works",
    body: "These are general, well-established properties of laser ablation — how the process behaves on metal, not proprietary test data. Results on any given part depend on the material, the contamination, and the system. We'll assess your actual work before committing to an outcome.",
  },
};

function Capability({
  eyebrow,
  icon: Icon,
  title,
  intro,
  bullets,
  facts,
  note,
}: {
  eyebrow: string;
  icon: typeof BeamIcon;
  title: string;
  intro: string;
  bullets: string[];
  facts: { term: string; body: string }[];
  note: { heading: string; body: string };
}) {
  return (
    <section className="border-b border-base-700/70 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              <Icon className="h-3.5 w-3.5" />
              {eyebrow}
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
              {title}
            </h2>
            <p className="mt-5 leading-relaxed text-steel">{intro}</p>
          </div>
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent-ember">
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span className="text-[15px] leading-relaxed text-titanium">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {facts.map((row) => (
            <div key={row.term} className="border-t border-white/[0.08] pt-5">
              <dt className="font-heading text-base tracking-tight text-white">
                {row.term}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-steel">{row.body}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-base-900/60 p-6">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
            {note.heading}
          </h3>
          <p className="mt-3 leading-relaxed text-steel">{note.body}</p>
        </div>
      </div>
    </section>
  );
}

export default function LaserServicePage() {
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
            <span className="text-steel">Laser Welding &amp; Cleaning</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-accent-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring motion-reduce:animate-none" />
            Laser Welding &amp; Cleaning
          </span>

          <h1 className="mt-8 font-heading text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl text-balance">
            One system.
            <br />
            <span className="text-spark">Weld and clean.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-steel text-pretty">
            A single handheld fiber laser does two jobs most shops buy two tools
            for: it welds steel, stainless, and aluminum with a fraction of the
            heat of TIG, and it strips rust, coatings, and contamination by
            ablation — no media, no chemicals. Clean the surface, weld the seam,
            condition it after, all from one gun.
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

      {/* ── ONE MACHINE, TWO JOBS ──────────────────────────────────────── */}
      <section className="border-b border-base-700/70 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            One machine, two jobs
          </span>
          <p className="mt-5 text-lg leading-relaxed text-steel text-pretty">
            Because welding and cleaning run on the same handheld platform,
            there&apos;s one tool to buy, one thing to learn, and one process
            that flows end to end — strip a rusty surface, weld it, then clean
            the weld. Envishon brings that capability to your shop, as training,
            on-site service, or both.
            {/* TODO: owner to confirm the offer model — training, on-site
                service, or both, and pricing. Copy works either way for now. */}
          </p>
        </div>
      </section>

      <Capability
        eyebrow="Welding"
        icon={BeamIcon}
        title="Weld faster, with less heat."
        intro="Handheld fiber laser welding runs several times faster than TIG with a fraction of the heat input, so parts weld with far less distortion and a cleaner finish that needs little grinding — across steel, stainless, and aluminum."
        bullets={WELDING.bullets}
        facts={WELDING.facts}
        note={WELDING.note}
      />

      <Capability
        eyebrow="Cleaning & rust removal"
        icon={SparkIcon}
        title="Strip the rust. Keep the metal."
        intro="The same laser removes rust, oxides, coatings, and contamination by ablation — vaporizing the unwanted layer while leaving the base metal intact. No media, no chemicals, no grinding, and far less hazardous waste than sandblasting or solvents."
        bullets={CLEANING.bullets}
        facts={CLEANING.facts}
        note={CLEANING.note}
      />

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
            Want laser welding and cleaning in your shop?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-steel">
            Tell us what you fabricate and what you&apos;re trying to clean or
            join. We&apos;ll show you where this earns its place — and how to
            bring it in, through service, training, or both.
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
