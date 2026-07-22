import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, ShieldIcon } from "@/components/ui/icons";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SERVICES · METAL ADDITIVE MANUFACTURING  ·  /services/additive
 * ─────────────────────────────────────────────────────────────────────────
 *  Pillar 1. Envishon gets SLM/LPBF metal printers running and keeps them
 *  running — install, calibration, training, powder safety, ongoing support.
 *
 *  TRUTH DISCIPLINE — Envishon is a new, independent company. No invented
 *  technician counts, locations, SLAs, uptime guarantees, certifications,
 *  client counts, or testimonials. The FastForm relationship is early-stage
 *  and verbal — soft language only, never "authorized"/"official".
 *  ─────────────────────────────────────────────────────────────────────────
 */

export const metadata: Metadata = {
  title: "Metal AM — Training, Installation & Support",
  description:
    "Envishon installs, calibrates, and commissions SLM/LPBF metal printers, then trains your operators to run them safely — including powder handling — and supports them after. In partnership with FastForm.",
};

/* What a metal-AM engagement includes — Envishon's actual services. */
const INCLUDES = [
  {
    label: "Install",
    title: "Installation, calibration & start-up verification",
    body: "Assembled, leveled, connected, and calibrated — then a verified first build in your material before we call it done.",
  },
  {
    label: "Train",
    title: "Operator training on your machine, your material",
    body: "On-site training on the machine you'll actually run, until your people can run a build without us on the phone.",
  },
  {
    label: "Safety",
    title: "Powder-safety training",
    body: "Combustible-dust and respiratory hazards handled correctly — the process discipline most vendors never mention. Detailed below.",
  },
  {
    label: "Support",
    title: "Ongoing technical support & remote diagnostics",
    body: "A direct line to people who know the machine, plus remote diagnostics so many problems are solved without a site visit.",
  },
  {
    label: "Maintain",
    title: "Preventative maintenance programs",
    // TODO: owner to confirm PM program terms (annual / multi-year, coverage).
    body: "Scheduled upkeep so problems get caught before they stop a build.",
  },
];

const CAPABILITIES = [
  "Set up and run a build unattended, start to finish",
  "Read a failing print early — and stop it before it wastes a plate",
  "Recover from a failed or interrupted build without guesswork",
  "Handle, load, and store metal powder safely",
  "Sieve spent powder and reuse it instead of scrapping it",
  "Judge when a finished part is good, and when it isn't",
];

const POWDER = [
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

export default function AdditiveServicePage() {
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
            <span className="text-steel">Metal Additive</span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-accent-ember">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring motion-reduce:animate-none" />
            Metal Additive Manufacturing
          </span>

          <h1 className="mt-8 font-heading text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl text-balance">
            Metal 3D printing fails on
            <br />
            <span className="text-spark">process, not hardware.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-steel text-pretty">
            Envishon installs, calibrates, and commissions SLM/LPBF metal
            printers, then trains your operators to run them safely and reliably
            — including the powder-handling and process discipline most vendors
            never mention. {/* TODO: upgrade partnership language once the agreement is signed */}
            Delivered in partnership with FastForm, whose systems we support.
          </p>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-spark group px-8 py-4 text-sm">
              Talk to our team
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/platforms" className="btn-ghost px-8 py-4 text-sm">
              Platforms we service
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT AN ENGAGEMENT INCLUDES ────────────────────────────────── */}
      <section className="border-b border-base-700/70 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              What we do
            </span>
            <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
              We make sure the machine produces.
            </h2>
            <p className="mt-5 leading-relaxed text-steel">
              A complete metal-AM engagement — from the machine arriving to your
              operators running it unattended. Scoped to your team and your work.
            </p>
          </div>

          <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((item, i) => (
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
                <h3 className="mt-4 font-heading text-lg leading-snug tracking-tight text-white">
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
                with the actual alloy you print. Not a slideshow, not a machine
                that isn&apos;t yours. The operator who runs it every day is the
                one we train.
              </p>
              <p>
                {/* TODO: owner to confirm the standard engagement — days on
                    site and number of operators covered. */}
                Each engagement is scoped to your team and your material. Tell us
                who&apos;s running the machine and we&apos;ll build the training
                around them.
              </p>
              <p className="text-titanium">
                And the software to design what you print —{" "}
                <Link
                  href="/vizus"
                  className="text-accent hover:text-accent-signal"
                >
                  meet Vizus AI
                </Link>
                .
              </p>
            </div>
          </div>

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

          <p className="mt-10 max-w-2xl font-mono text-[11px] leading-relaxed tracking-wide text-graphite">
            Training covers safe handling, grounding, PPE, sieving, and storage.
            It is not a substitute for your own site&apos;s safety program or
            local regulations — it&apos;s the operating knowledge most shops are
            never handed.
          </p>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-violet-mesh" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl text-balance">
            Have a metal printer? Let&apos;s get it producing.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-steel">
            Tell us what you run and where your team is starting from. We&apos;ll
            walk you through install, training, and support for your machine.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-spark group px-8 py-4 text-sm">
              Request training or support
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
