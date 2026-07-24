import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { platforms, getPlatform } from "@/data/platforms";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const p = getPlatform(params.slug);
  if (!p) return { title: "Platform not found" };
  return {
    title: `${p.name} — ${p.subtitle}`,
    description: `${p.name}. ${p.tagline} A platform Envishon installs, trains on, and supports.`,
  };
}

export default function PlatformDetailPage({ params }: PageProps) {
  const p = getPlatform(params.slug);
  if (!p) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-steel">
        <Link href="/platforms" className="transition-colors hover:text-accent-ember">
          Platforms
        </Link>
        <span className="text-steel/40">/</span>
        <span className="text-titanium">{p.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image — pins on desktop while the readout scrolls. */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white">
            <Image
              src={p.image}
              alt={`${p.name} — ${p.subtitle}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-8"
            />
          </div>
          <div className="mt-4 hidden items-center justify-between lg:flex">
            <span className="hud-chip">{p.tag}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-graphite">
              ENVISHON // AMERICAS
            </span>
          </div>
        </div>

        {/* Details */}
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
            {p.tag}
          </span>
          <h1 className="mt-3 font-heading text-4xl font-medium tracking-tight text-white sm:text-5xl">
            {p.name}
          </h1>
          <p className="mt-2 font-mono text-xs tracking-[0.02em] text-steel sm:text-sm">
            {p.subtitle} · {p.tagline}
          </p>

          <div className="mt-6 max-w-prose space-y-4 text-base leading-relaxed text-steel">
            {p.description.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>

          {/* Services CTA — a platform we support, not a product for sale. */}
          <div className="mt-8 rounded-2xl border border-accent/25 bg-accent/[0.05] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
              How Envishon helps
            </p>
            <p className="mt-3 text-sm leading-relaxed text-titanium">
              We install it, train your operators to run it, and support it
              after — or run the work for you. This is a platform we service,
              not a box we sell.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-spark group px-6 py-3 text-sm">
                Get trained on this platform
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={p.serviceHref} className="btn-ghost px-6 py-3 text-sm">
                {p.serviceLabel}
              </Link>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-12">
            <h2 className="font-heading text-sm uppercase tracking-[0.2em] text-steel">
              Key highlights
            </h2>
            <ul className="mt-5 space-y-3">
              {p.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-titanium"
                >
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Spec table */}
          <div className="mt-12">
            <div className="flex items-baseline justify-between">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
                Technical Parameters
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite">
                {String(p.specs.length).padStart(2, "0")} fields
              </span>
            </div>
            <div className="rule-ticks mt-3" aria-hidden="true" />
            <dl className="divide-y divide-white/[0.06]">
              {p.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-[2.25rem_1fr_1.4fr] items-baseline gap-3 py-3 text-sm transition-colors hover:bg-white/[0.015]"
                >
                  <span
                    className="font-mono text-[10px] tabular-nums text-graphite"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <dt className="font-mono text-[12px] uppercase tracking-[0.06em] text-steel">
                    {spec.label}
                  </dt>
                  <dd className="text-right font-mono text-[13px] tabular-nums text-titanium">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="rule-ticks rotate-180" aria-hidden="true" />
            <p className="mt-4 text-xs leading-relaxed text-steel/70">
              {p.specNote}
            </p>
          </div>
        </div>
      </div>

      {/* Real-work gallery — only rendered for platforms that supply photos. */}
      {p.gallery?.length ? (
        <div id="gallery" className="mt-16 scroll-mt-24">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
            From the machine
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {p.gallery.map((shot) => (
              <figure key={shot.src}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-base-900 shadow-depth">
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-relaxed text-steel">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
