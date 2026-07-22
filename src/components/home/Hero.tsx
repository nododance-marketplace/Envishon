import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Parallax } from "@/components/ui/Parallax";
import { Magnetic } from "@/components/ui/Magnetic";

// Capability vocabulary for the base ticker — what Envishon does, not a
// machine catalog.
const MARQUEE = [
  "Installation",
  "Operator training",
  "Powder safety",
  "Technical support",
  "Remote diagnostics",
  "Laser welding",
  "Laser cleaning",
  "Rust removal",
  "Surface prep",
  "Americas",
];

const CAPS = [
  { k: "Additive", v: "Train · install · support" },
  { k: "Laser welding", v: "Steel · stainless · aluminum" },
  { k: "Laser cleaning", v: "Rust · coatings · prep" },
];

export function Hero() {
  return (
    <section className="relative -mt-16 flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      {/* Cinematic background — the Envishon walkthrough footage, drifting. */}
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

      {/* Legibility scrims + brand mesh */}
      <div className="absolute inset-0 bg-base/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base/10 to-base" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_56%_at_50%_46%,rgba(10,11,13,0.62)_0%,rgba(10,11,13,0.28)_48%,rgba(10,11,13,0)_74%)]" />
      <div className="absolute inset-0 bg-violet-mesh opacity-60" />

      <Parallax speed={0.05} className="pointer-events-none absolute inset-0">
        <div className="tech-grid h-full w-full opacity-70" />
      </Parallax>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-accent/[0.06] to-transparent animate-[scanline_12s_cubic-bezier(0.4,0,0.2,1)_infinite] motion-reduce:hidden" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[52vh] w-[52vh] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px] animate-float motion-reduce:animate-none" />

      {/* Centered content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center sm:px-6">
        <p className="kicker mx-auto mb-8 w-fit animate-fade-up rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm motion-reduce:animate-none">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring motion-reduce:animate-none" />
          Industrial Laser &amp; Additive Services · Americas
        </p>

        <h1 className="animate-fade-up font-heading text-[clamp(3rem,9vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.01em] text-white text-balance [text-shadow:0_2px_40px_rgba(10,11,13,0.85)] [animation-delay:60ms] motion-reduce:animate-none">
          The machine is
          <br />
          the <span className="text-spark">easy part.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-titanium/90 text-pretty [text-shadow:0_1px_16px_rgba(10,11,13,0.95)] [animation-delay:140ms] motion-reduce:animate-none sm:text-xl">
          Envishon is an industrial laser and additive-manufacturing services
          company for the Americas — training, installation, technical support,
          laser welding, and laser cleaning. We don&apos;t sell you a box. We
          make sure it produces.
        </p>

        <div className="mt-11 flex animate-fade-up flex-wrap items-center justify-center gap-4 [animation-delay:220ms] motion-reduce:animate-none">
          <Magnetic>
            <Link href="/services" className="btn-spark group px-8 py-4 text-sm">
              Explore services
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Magnetic>
          <Link href="/contact" className="btn-ghost px-8 py-4 text-sm">
            Talk to our team
          </Link>
        </div>

        {/* Capability rail — the three pillars, no invented numbers */}
        <dl className="mx-auto mt-16 grid max-w-2xl animate-fade-up grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.1] sm:grid-cols-3 [animation-delay:300ms] motion-reduce:animate-none">
          {CAPS.map((c) => (
            <div key={c.k} className="bg-base-900/40 px-4 py-4 backdrop-blur-sm">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-ember">
                {c.k}
              </dt>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-steel">
                {c.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Base ticker — capability vocabulary, drifting */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/[0.06] bg-base/40 py-3 backdrop-blur-sm">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap motion-reduce:animate-none">
          {[...MARQUEE, ...MARQUEE].map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-steel/70"
            >
              {tag}
              <span className="text-accent/40">▮</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
