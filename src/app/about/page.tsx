import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { EnvishonMark } from "@/components/layout/BrandLockup";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built layer by layer. Envishon — a play on envision — is a US-based company sourcing the hard-to-find industrial 3D printers most businesses can't get locally.",
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
          Built layer by layer.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel text-pretty">
          Envishon puts industrial-grade 3D printing within reach — sourcing the
          SLS, SLM, and large-format FDM machines most businesses can&apos;t get
          locally, and connecting them with the technology that moves them
          forward.
        </p>
      </Reveal>

      {/* The name + the process */}
      <Reveal delay={100}>
        <div className="mt-20 grid items-center gap-10 rounded-3xl border border-white/[0.07] bg-base-900/40 p-8 shadow-depth lg:grid-cols-[0.9fr_1fr] sm:p-12">
          <div className="flex items-center gap-5">
            <EnvishonMark className="h-16 w-auto shrink-0 drop-shadow-[0_4px_16px_rgba(124,58,237,0.4)]" />
            <p className="font-heading text-5xl font-medium uppercase tracking-tight text-white sm:text-6xl">
              Envision it.
              <br />
              <span className="text-spark">Print it.</span>
            </p>
          </div>
          <p className="text-lg leading-relaxed text-steel text-pretty">
            The name is a play on <em className="not-italic text-titanium">envision</em> — picturing
            the part, the tool, the idea that doesn&apos;t exist yet. The
            machines we source make it real the only way that lasts: layer by
            precise layer, built up into something solid. That additive process
            is exactly what the stacked emblem stands for.
          </p>
        </div>
      </Reveal>

      {/* What we sell / Who we serve */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {[
          {
            n: "01",
            h: "What we sell",
            b: "Industrial SLM metal printers — from a compact desktop dental system to a super-large multi-laser machine for mass production. The hard-to-source machines that open new doors.",
          },
          {
            n: "02",
            h: "Who we serve",
            b: "Businesses, not hobbyists — engineering firms, manufacturers, product studios, and labs scaling up. They value capability, reliability, and a partner who knows the machines.",
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
              <p className="mt-3 text-base leading-relaxed text-steel text-pretty">
                {card.b}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Closing CTA */}
      <Reveal delay={160}>
        <div className="mt-6 flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-base-900/60 p-8 shadow-depth sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <EnvishonMark className="h-11 w-auto shrink-0" />
            <p className="font-heading text-xl tracking-tight text-white">
              Print the <span className="text-spark">future.</span>
            </p>
          </div>
          <Link href="/shop" className="btn-spark group px-7 py-3.5 text-sm">
            Shop Printers
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
