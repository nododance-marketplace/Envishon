import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Parallax } from "@/components/ui/Parallax";
import { Counter } from "@/components/ui/Counter";

// Rolling process/material tags for the base marquee.
const MARQUEE = [
  "SLM",
  "Selective Laser Melting",
  "CoCr",
  "Titanium Alloy",
  "Pure Titanium",
  "Dental",
  "Large-format FDM",
  "SLS",
  "US-based support",
  "Layer by layer",
];

export function Hero() {
  return (
    <section className="relative -mt-16 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      {/* ── Cinematic background — a clean still of the SLM powder bed,
          drifting on a gentle parallax. NOTE: the old header.mp4 footage
          contains legacy StrataLabs branding mid-clip, so we hold this
          branding-free frame instead. Drop a new branded loop at
          /public/video/header.mp4 and swap this <img> for a <video> to bring
          motion back. ──────────────────────────────────────────────────── */}
      <Parallax speed={-0.1} className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/video/header-first-frame.jpg"
          alt=""
          aria-hidden="true"
          className="h-[115%] w-full object-cover"
        />
      </Parallax>

      {/* Legibility scrims + brand mesh — vertical vignette for centered copy */}
      <div className="absolute inset-0 bg-base/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base/50 to-base" />
      <div className="absolute inset-0 bg-violet-mesh" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[52vh] w-[52vh] -translate-x-1/2 rounded-full bg-accent/12 blur-[150px] animate-float" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[26vh] w-[26vh] rounded-full bg-accent-signal/10 blur-[110px] animate-float [animation-delay:-4s]" />

      {/* ── Centered spotlight content ─────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6">
        <p className="kicker mx-auto mb-8 w-fit animate-fade-up rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring" />
          Industrial 3D Printers · United States
        </p>

        <h1 className="animate-fade-up font-heading text-[clamp(3.2rem,10vw,8rem)] font-bold uppercase leading-[0.9] tracking-[-0.01em] text-white text-balance [animation-delay:60ms]">
          Print the
          <br />
          <span className="text-spark">future.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-steel text-pretty [animation-delay:140ms] sm:text-xl">
          Industrial 3D printing, within reach. Envishon sources the SLM, SLS,
          and large-format FDM machines most businesses can&apos;t get locally —
          and delivers them across the United States. Built layer by layer, just
          like the future.
        </p>

        <div className="mt-11 flex animate-fade-up flex-wrap items-center justify-center gap-4 [animation-delay:220ms]">
          <Link href="/shop" className="btn-spark group px-8 py-4 text-sm">
            Shop Printers
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/contact" className="btn-ghost px-8 py-4 text-sm">
            Talk to Sales
          </Link>
        </div>

        {/* Stat rail — centered, animated counters */}
        <dl className="mx-auto mt-16 grid max-w-2xl animate-fade-up grid-cols-3 divide-x divide-white/[0.1] border-y border-white/[0.1] py-6 [animation-delay:300ms]">
          <div className="px-1.5 sm:px-4">
            <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-steel sm:text-[11px] sm:tracking-[0.2em]">
              Machines
            </dt>
            <dd className="mt-1.5 font-heading text-2xl font-semibold text-white sm:text-4xl">
              <Counter value={6} suffix="+" />
            </dd>
          </div>
          <div className="px-1.5 sm:px-4">
            <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-steel sm:text-[11px] sm:tracking-[0.2em]">
              Accuracy
            </dt>
            <dd className="mt-1.5 font-heading text-2xl font-semibold text-white sm:text-4xl">
              ±<Counter value={0.05} decimals={2} />
              <span className="text-sm text-steel sm:text-lg">mm</span>
            </dd>
          </div>
          <div className="px-1.5 sm:px-4">
            <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-steel sm:text-[11px] sm:tracking-[0.2em]">
              Support
            </dt>
            <dd className="mt-1.5 font-heading text-2xl font-semibold text-white sm:text-4xl">
              US<span className="text-sm text-steel sm:text-lg">-based</span>
            </dd>
          </div>
        </dl>
      </div>

      {/* Base marquee — process + material vocabulary, always drifting */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/[0.06] bg-base/40 py-3 backdrop-blur-sm">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.24em] text-steel/70"
            >
              {tag}
              <span className="text-accent/50">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
