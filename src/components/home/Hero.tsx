import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Parallax } from "@/components/ui/Parallax";
import { Counter } from "@/components/ui/Counter";
import { Magnetic } from "@/components/ui/Magnetic";
import { getAvailableProducts } from "@/data/products";

// Live machine readouts for the base ticker — real model codes and spec
// lines straight from the catalog, never invented copy.
const READOUT = getAvailableProducts().map(
  (p) => `${p.name} :: ${p.specLine}`,
);

export function Hero() {
  return (
    <section className="relative -mt-16 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      {/* ── Cinematic background — the Envishon header loop, drifting on a
          gentle parallax so the hero feels three-dimensional. Muted + looped
          so it plays inline everywhere; the poster covers the first paint and
          any browser that blocks autoplay. ─────────────────────────────── */}
      <Parallax speed={-0.1} className="absolute inset-0">
        <video
          className="h-[115%] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/header-poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/header.mp4" type="video/mp4" />
        </video>
      </Parallax>

      {/* ── Legibility scrims ─────────────────────────────────────────────
          Kept deliberately light so the footage actually reads. Instead of a
          heavy full-frame wash, a soft radial pool sits behind the copy and
          does the contrast work only where type lands; the top/bottom edges
          stay anchored for the fixed header and the stat rail + marquee. */}
      <div className="absolute inset-0 bg-base/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base/10 to-base" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_56%_at_50%_46%,rgba(10,11,13,0.62)_0%,rgba(10,11,13,0.28)_48%,rgba(10,11,13,0)_74%)]" />
      <div className="absolute inset-0 bg-violet-mesh opacity-60" />

      {/* Faint engineering grid, drifting a few px against the scroll */}
      <Parallax speed={0.05} className="pointer-events-none absolute inset-0">
        <div className="tech-grid h-full w-full opacity-70" />
      </Parallax>

      {/* One restrained scanline sweep — slow, dim, machined */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-accent/[0.06] to-transparent animate-[scanline_12s_cubic-bezier(0.4,0,0.2,1)_infinite] motion-reduce:hidden" />

      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[52vh] w-[52vh] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px] animate-float" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[26vh] w-[26vh] rounded-full bg-accent-signal/[0.08] blur-[110px] animate-float [animation-delay:-4s]" />

      {/* ── Centered spotlight content ─────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6">
        <p className="kicker mx-auto mb-8 w-fit animate-fade-up rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring" />
          Industrial 3D Printers · United States
        </p>

        <h1 className="animate-fade-up font-heading text-[clamp(3.2rem,10vw,8rem)] font-bold uppercase leading-[0.9] tracking-[-0.01em] text-white text-balance [text-shadow:0_2px_40px_rgba(10,11,13,0.85)] [animation-delay:60ms]">
          Print the
          <br />
          <span className="text-spark">future.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-titanium/90 text-pretty [text-shadow:0_1px_16px_rgba(10,11,13,0.95)] [animation-delay:140ms] sm:text-xl">
          Industrial 3D printing, within reach. Envishon sources the SLM, SLS,
          and large-format FDM machines most businesses can&apos;t get locally —
          and delivers them across the United States. Built layer by layer, just
          like the future.
        </p>

        <div className="mt-11 flex animate-fade-up flex-wrap items-center justify-center gap-4 [animation-delay:220ms]">
          <Magnetic>
            <Link href="/shop" className="btn-spark group px-8 py-4 text-sm">
              Shop Printers
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
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

      {/* Base ticker — live machine readouts from the actual catalog,
          drifting slowly along the bottom edge like an instrument strip. */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/[0.06] bg-base/40 py-3 backdrop-blur-sm">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap motion-reduce:animate-none">
          {[...READOUT, ...READOUT].map((line, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-mono text-[10px] uppercase tracking-[0.18em] text-steel/70"
            >
              {line}
              <span className="text-accent/40">▮</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
