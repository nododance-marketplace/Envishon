import { Suspense } from "react";
import type { Metadata } from "next";
import {
  getAvailableProducts,
  getComingSoonProducts,
} from "@/data/products";
import { ShopGrid } from "@/components/product/ShopGrid";
import { ComingSoonCard } from "@/components/product/ComingSoonCard";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Shop Printers",
  description:
    "Browse Envishon's catalog of industrial SLM metal 3D printers and the EN-Atomizer powder system — request a quote with US-based support. SLS, resin, and large-format FDM coming soon.",
};

export default function ShopPage() {
  const available = getAvailableProducts();
  const comingSoon = getComingSoonProducts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header banner — a still frame of the real example footage. The source
          frame carries a legacy watermark along the very bottom edge, so the
          image is scaled from the top and the strip is clipped + scrimmed. */}
      <section className="relative aspect-[16/7] overflow-hidden rounded-3xl border border-white/[0.08] bg-base-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/shop-still-frame.png"
          alt="Envishon SLM metal printer control panel mid-build"
          className="absolute inset-0 h-[118%] w-full origin-top object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base via-base/10 to-base/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-base to-transparent" />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-base/50 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-titanium backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring" />
          See it in action
        </span>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <p className="max-w-xs font-heading text-lg leading-tight text-white sm:text-2xl">
            Live SLM build telemetry — layer by layer.
          </p>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-steel sm:block">
            CoCr · 200 W · 0.030 mm
          </span>
        </div>
      </section>

      <header className="mt-14 max-w-2xl">
        <p className="kicker">
          <span className="h-px w-8 bg-accent/60" />
          Catalog
        </p>
        <h1 className="mt-5 font-heading text-4xl font-medium tracking-tight text-white sm:text-6xl text-balance">
          Industrial 3D printers
        </h1>
        <p className="mt-5 text-base leading-relaxed text-steel text-pretty">
          Production-grade SLM metal systems — plus the atomizer that makes the
          powder they run on. The hard-to-source machines that open new doors,
          with US-based support from inquiry to install.
        </p>
      </header>

      <div className="mt-14">
        <Suspense fallback={<GridSkeleton />}>
          <ShopGrid products={available} />
        </Suspense>
      </div>

      {comingSoon.length > 0 && (
        <section className="mt-24">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">
                Coming soon
              </p>
              <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl">
                More inventory on the way
              </h2>
              <p className="mt-4 text-base leading-relaxed text-steel">
                We&apos;re sourcing SLS, resin, and large-format FDM systems from
                vetted manufacturers. Register your interest and we&apos;ll reach
                out the moment they land.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoon.map((product, i) => (
              <FadeIn key={product.slug} delay={Math.min(i, 6) * 70}>
                <ComingSoonCard product={product} />
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-white/[0.07]"
        >
          <div className="skeleton aspect-[4/3] w-full" />
          <div className="space-y-3 p-6">
            <div className="skeleton h-4 w-20 rounded-full" />
            <div className="skeleton h-5 w-2/3 rounded" />
            <div className="skeleton h-4 w-full rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
