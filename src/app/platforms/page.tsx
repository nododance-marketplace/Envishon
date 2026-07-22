import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAvailableProducts } from "@/data/products";
import { ShopGrid } from "@/components/product/ShopGrid";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Platforms we service",
  description:
    "The SLM/LPBF metal 3D printers and additive systems Envishon installs, trains on, and supports. Spec-for-spec proof of what we know — not a store.",
};

export default function PlatformsPage() {
  const platforms = getAvailableProducts();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header banner — the real SLM line running. */}
      <section className="relative aspect-[16/7] overflow-hidden">
        <video
          className="edge-fade absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/shop-slm-poster.jpg"
          aria-label="Envishon supporting SLM metal printers on the factory floor"
        >
          <source src="/video/shop-slm.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base via-base/10 to-base/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-base to-transparent" />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-base/50 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-titanium backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring motion-reduce:animate-none" />
          The systems we support
        </span>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <p className="max-w-md font-heading text-lg leading-tight text-white sm:text-2xl">
            The platforms we install, train on, and keep running.
          </p>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-steel sm:block">
            SLM · LPBF · GREEN LASER
          </span>
        </div>
      </section>

      <header className="mt-14 max-w-2xl">
        <p className="kicker">
          <span className="h-px w-8 bg-accent/60" />
          Platforms
        </p>
        <h1 className="mt-5 font-heading text-4xl font-medium tracking-tight text-white sm:text-6xl text-balance">
          The machines we service.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-steel text-pretty">
          These are the SLM/LPBF metal printers and additive systems Envishon
          installs, commissions, trains operators on, and supports. This
          isn&apos;t a catalog to buy from — the specs are here as proof of what
          we know. Bring your own machine, or ask us which platform fits your
          work.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/services/additive" className="btn-spark group px-6 py-3 text-sm">
            Training &amp; support
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/contact" className="btn-ghost px-6 py-3 text-sm">
            Ask which platform fits
          </Link>
        </div>
      </header>

      <div className="mt-14">
        <Suspense fallback={<GridSkeleton />}>
          <ShopGrid products={platforms} />
        </Suspense>
      </div>

      {/* Honest close: this is a services company, not a reseller. */}
      <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-relaxed text-steel">
        Don&apos;t see your machine? We work across common SLM/LPBF platforms.{" "}
        <Link href="/contact" className="text-accent hover:text-accent-signal">
          Tell us what you run
        </Link>{" "}
        and we&apos;ll tell you how we can help.
      </p>
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
