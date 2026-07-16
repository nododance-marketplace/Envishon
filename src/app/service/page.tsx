import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  ShieldIcon,
  CompassIcon,
  CubeIcon,
  LayersIcon,
} from "@/components/ui/icons";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SERVICE  ·  /service
 * ─────────────────────────────────────────────────────────────────────────
 *  A sales asset, not a support doc. The argument: you are not buying a box,
 *  you are buying a capability — a machine making good parts 90 days later.
 *
 *  TRUTH DISCIPLINE — Envishon is a young company. This page must NOT invent
 *  technician counts, service-center locations, coverage maps, response-time
 *  SLAs, uptime guarantees, certifications, customer counts, or testimonials.
 *  Every claim here traces to a real, committed line: the 1-year warranty +
 *  lifetime support on every quote; installation/calibration/start-up priced
 *  into quotes; on-site operator training scoped per engagement; the built-in
 *  HD camera / remote monitoring documented in the manufacturer's 2026
 *  catalog; and the permanent ≥30,000-hour filter across the line.
 *
 *  Where a specific commitment isn't settled yet, it is a clearly-marked
 *  JSX "TODO: owner to confirm" placeholder — a blank we fill later, never a
 *  fabricated number.
 *  ─────────────────────────────────────────────────────────────────────────
 */

export const metadata: Metadata = {
  title: "Service & Support | Envishon",
  description:
    "Installation, operator training, powder-safety training, and lifetime technical support with every Envishon metal printer. You're not buying a box — you're buying the capability to run it.",
};

/* ── What ships with every machine ─────────────────────────────────────── */
type Included = { label: string; title: string; body: string };

const INCLUDED: Included[] = [
  {
    label: "Delivery",
    title: "Delivered and placed",
    body: "The machine is crated, shipped, and set on your floor in the spot it will run — not left on a loading dock for you to figure out.",
  },
  {
    label: "Installation",
    title: "Installed and connected",
    body: "Assembled, leveled, and connected to power and inert gas. The physical setup is ours, not a manual you decipher alone.",
  },
  {
    label: "Calibration",
    title: "Calibrated to spec",
    body: "Laser and optics aligned and calibrated before the first real part — so accuracy starts where the datasheet says it should.",
  },
  {
    label: "Start-up",
    title: "First build verified",
    body: "We don't leave on the promise it works. We run a verified build with you watching, in your material, before we call it done.",
  },
  {
    label: "Training",
    title: "Operators trained",
    body: "On-site training on your machine, your material — until your people can run it without us on the phone. Detailed below.",
  },
  {
    label: "Warranty",
    title: "1-year full-set warranty",
    body: "A full year of warranty coverage on the machine — stated on every Envishon quote, not an upsell.",
  },
  {
    label: "Support",
    title: "Lifetime technical support",
    body: "Technical support for as long as you own the machine. Not a 90-day window that quietly expires.",
  },
];

/* ── What an operator can actually do after training ───────────────────── */
const CAPABILITIES: string[] = [
  "Set up and run a build unattended, start to finish",
  "Read a failing print early — and stop it before it wastes a plate",
  "Recover from a failed or interrupted build without guesswork",
  "Handle, load, and store metal powder safely",
  "Sieve spent powder and reuse it instead of scrapping it",
  "Judge when a finished part is good, and when it isn't",
];

/* ── Powder-safety topics ──────────────────────────────────────────────── */
const POWDER: { term: string; body: string }[] = [
  {
    term: "Combustible dust",
    body: "Fine metal powder can ignite as an airborne dust. Training covers grounding, ignition sources, and how to move powder without creating a cloud.",
  },
  {
    term: "Respiratory hazard",
    body: "Alloying elements like nickel and cobalt are respiratory sensitizers. We cover PPE, respirators, and why a dust mask from the hardware store is not one.",
  },
  {
    term: "Handling & sieving",
    body: "Loading, transferring, and sieving powder for reuse without contaminating the batch or exposing the operator — the daily routine, done right.",
  },
  {
    term: "Storage",
    body: "How reactive alloys are stored, sealed, and kept dry between runs, and how to keep two alloys from ever meeting.",
  },
];

export default function ServicePage() {
  return (
    <main className="bg-base text-titanium">
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-base-700">
        <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
        {/* one slow scanline, reduced-motion safe */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/[0.06] to-transparent animate-scanline motion-reduce:hidden" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-accent-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring motion-reduce:animate-none" />
            Service &amp; Support
          </span>

          <h1 className="mt-8 font-heading text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl text-balance">
            The machine is
            <br />
            the <span className="text-spark">easy part.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-steel text-pretty">
            Metal printing doesn&apos;t fail on hardware. It fails on process —
            on nobody in the building knowing how to run a build, recover a
            failed one, or handle the powder safely. Anyone can ship a machine
            on a pallet. What matters is whether it&apos;s making good parts
            ninety days later. That part, we sell too.
          </p>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-spark group px-8 py-4 text-sm">
              Talk to our team
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/shop" className="btn-ghost px-8 py-4 text-sm">
              See the machines
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ────────────────────────────────────────────── */}
      <section className="border-b border-base-700/70 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Included with every machine
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
              What you get is not a printer. It&apos;s a printer that runs.
            </h2>
            <p className="mt-5 leading-relaxed text-steel">
              Delivery, installation, calibration, and a verified first build
              are quoted as line items on every machine — not extras you
              discover you need later. Here is the full set.
            </p>
          </div>

          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item, i) => (
              <li
                key={item.label}
                className="animate-fade-up border-t border-white/[0.08] pt-5 motion-reduce:animate-none"
                style={{ animationDelay: `${Math.min(i, 6) * 70}ms` }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-ember">
                    {item.label}
                  </span>
                  <span className="font-mono text-[11px] tabular-nums text-graphite">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TRAINING ───────────────────────────────────────────────────── */}
      <section className="border-b border-base-700/70 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Training
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
              We don&apos;t leave until your people can run it.
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-steel">
              <p>
                Training happens after install — on your machine, on your floor,
                with the actual alloy you bought it to print. Not a slideshow,
                not a machine that isn&apos;t yours. The operator who will run it
                every day is the one we train.
              </p>
              <p>
                {/* TODO: owner to confirm the standard engagement — e.g. days
                    on site and number of operators covered. Scoped per quote
                    today; a stated default belongs here. */}
                Each engagement is scoped to your team and your material. Tell us
                who&apos;s running the machine and we&apos;ll build the training
                around them.
              </p>
              <p className="text-titanium">
                One machine, one software stack. Every Envishon printer runs{" "}
                <Link
                  href="/vizus"
                  className="text-accent hover:text-accent-signal"
                >
                  Vizus
                </Link>{" "}
                for slicing and control, with a fully automatic layout and
                path-planning workflow — so there&apos;s one thing to learn, not
                a toolchain.
              </p>
            </div>
          </div>

          {/* Capability checklist — the real deliverable of training */}
          <div className="rounded-2xl border border-base-700/80 bg-base-900/60 p-8 shadow-depth">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-graphite">
              After training, your operator can
            </p>
            <ul className="mt-6 space-y-4">
              {CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent-ember">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-titanium">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── POWDER SAFETY ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-base-700/70 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              <ShieldIcon className="h-3.5 w-3.5" />
              Powder safety
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
              Most buyers have never been told any of this.
            </h2>
            <p className="mt-5 leading-relaxed text-steel">
              Metal powder is not toner. It is a combustible dust and a
              respiratory hazard, and the alloys that make the best parts are
              often the most reactive. None of that makes it dangerous to own —
              it makes it something you have to be taught. We teach the process,
              from the first drum to the last sieve.
            </p>
          </div>

          <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {POWDER.map((row) => (
              <div
                key={row.term}
                className="border-t border-white/[0.08] pt-5"
              >
                <dt className="font-heading text-lg tracking-tight text-white">
                  {row.term}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-steel">
                  {row.body}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 max-w-2xl font-mono text-[11px] leading-relaxed tracking-wide text-graphite">
            Training covers safe handling, grounding, PPE, sieving, and storage.
            It is not a substitute for your own site&apos;s safety program or
            local regulations — it&apos;s the operating knowledge most shops are
            never handed.
          </p>
        </div>
      </section>

      {/* ── ONGOING SUPPORT ────────────────────────────────────────────── */}
      <section className="border-b border-base-700/70 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              Ongoing support
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
              After the truck leaves.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Lifetime support */}
            <div className="rounded-2xl border border-base-700/80 bg-base-900/60 p-8">
              <CompassIcon className="h-6 w-6 text-accent-ember" />
              <h3 className="mt-5 font-heading text-xl tracking-tight text-white">
                Lifetime technical support
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                A direct line to people who know the machine, for as long as you
                run it. Most questions are answered the same day, over the
                phone, without anyone getting on a plane.
              </p>
            </div>

            {/* Remote monitoring — real machine feature */}
            <div className="rounded-2xl border border-base-700/80 bg-base-900/60 p-8">
              <LayersIcon className="h-6 w-6 text-accent-ember" />
              <h3 className="mt-5 font-heading text-xl tracking-tight text-white">
                Remote monitoring, built in
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                Every machine ships with a built-in HD camera and online remote
                monitoring with real-time production tracking. When something
                looks off, we can often see the build with you and diagnose it
                without a site visit.
              </p>
            </div>

            {/* Preventative maintenance */}
            <div className="rounded-2xl border border-base-700/80 bg-base-900/60 p-8">
              <CubeIcon className="h-6 w-6 text-accent-ember" />
              <h3 className="mt-5 font-heading text-xl tracking-tight text-white">
                Preventative maintenance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {/* TODO: owner to confirm which maintenance-contract terms are
                    offered (e.g. annual / multi-year) and what each covers. */}
                Preventative maintenance is available by contract and quoted per
                term — scheduled upkeep so problems get caught before they stop
                a build.
              </p>
            </div>

            {/* Permanent filter */}
            <div className="rounded-2xl border border-base-700/80 bg-base-900/60 p-8">
              <ShieldIcon className="h-6 w-6 text-accent-ember" />
              <h3 className="mt-5 font-heading text-xl tracking-tight text-white">
                No filter consumables
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                The filtration is a permanent filter rated{" "}
                <span className="font-mono text-titanium">≥ 30,000 hours</span>{" "}
                across the line — no cartridges to buy, swap, or forget. Less to
                stock, less to maintain, one less thing to get wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ─────────────────────────────────────────────── */}
      <section className="border-b border-base-700/70 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Why it matters
          </span>
          <h2 className="mt-5 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
            A metal printer nobody can run is the most expensive object in the
            building.
          </h2>
          <div className="mt-7 space-y-5 text-left leading-relaxed text-steel">
            <p>
              The price was never the real barrier to owning one of these. The
              skill was. The shop that can&apos;t model, has never run an SLM
              machine, and has never handled reactive powder isn&apos;t afraid
              of the number on the quote — it&apos;s afraid of owning an
              expensive brick.
            </p>
            <p className="text-titanium">
              So we sell the skill with the machine.{" "}
              <Link
                href="/vizus"
                className="text-accent hover:text-accent-signal"
              >
                Vizus
              </Link>{" "}
              removes the design barrier — describe the part instead of modeling
              it. Service removes the operating barrier — your people trained,
              on your floor, with support that doesn&apos;t expire. Between the
              two, the reason not to own one goes away.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-ember transition-colors hover:text-white"
            >
              See the machines
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
            Ask us what happens after the sale.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-steel">
            Tell us what you make and where your team is starting from.
            We&apos;ll walk you through exactly how installation, training, and
            support work for your machine — before you commit to anything.
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
