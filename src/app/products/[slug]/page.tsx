import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products, CATEGORY_META, formatPrice } from "@/data/products";
import { getAccessoryConfig } from "@/data/accessories";
import { ProductGallery } from "@/components/product/ProductGallery";
import { CategoryBadge } from "@/components/product/CategoryBadge";
import { AccessoryConfigurator } from "@/components/product/AccessoryConfigurator";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import {
  ArrowRightIcon,
  CheckIcon,
  DownloadIcon,
  FileTextIcon,
  ShieldIcon,
} from "@/components/ui/icons";

interface PageProps {
  params: { slug: string };
}

// Pre-render every (available) product page at build time.
export function generateStaticParams() {
  return products.filter((p) => !p.comingSoon).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: `${product.name} — ${product.specLine}. ${product.description}`,
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product || product.comingSoon) notFound();

  const related = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.slug !== product.slug &&
        !p.comingSoon,
    )
    .slice(0, 3);

  const accessoryConfig = getAccessoryConfig(product.slug);
  const isBuyable = product.priceCents != null && !product.inquiryOnly;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-steel">
        <Link href="/shop" className="transition-colors hover:text-accent-ember">
          Shop
        </Link>
        <span className="text-steel/40">/</span>
        <span className="text-titanium">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Gallery — pins on desktop so the machine stays in view while the
            long technical readout scrolls beside it. */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ProductGallery
            images={product.images}
            name={product.name}
            category={product.category}
          />
          {/* HUD footer under the imagery — quiet instrumentation */}
          <div className="mt-4 hidden items-center justify-between lg:flex">
            <span className="hud-chip">
              {product.category} · {product.slug.toUpperCase()}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-graphite">
              ENVISHON // US
            </span>
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center justify-between gap-3">
            <CategoryBadge category={product.category} />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-graphite">
              P/N {product.slug.toUpperCase()}
            </span>
          </div>
          <h1 className="mt-4 font-heading text-4xl font-medium tracking-tight text-white sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-3 font-mono text-xs tracking-[0.02em] text-steel sm:text-sm">
            {product.specLine}
          </p>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-steel">
            {product.description}
          </p>

          {isBuyable && accessoryConfig && accessoryConfig.mode !== "tbd" ? (
            <AccessoryConfigurator
              product={product}
              config={accessoryConfig}
              buyable={isBuyable}
            />
          ) : product.priceCents != null && !product.inquiryOnly ? (
            <>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="font-heading text-2xl text-white">
                  {formatPrice(product.priceCents)}
                </span>
                <AddToCartButton product={product} />
              </div>
              <p className="mt-3 text-xs text-steel">
                Secure checkout powered by Stripe. Need volume pricing,
                financing, or freight details?{" "}
                <Link
                  href="/contact"
                  className="text-accent hover:text-accent-signal"
                >
                  Contact our US-based team
                </Link>
                .
              </p>
            </>
          ) : (
            <>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {product.priceCents != null ? (
                  <span className="font-heading text-2xl text-white">
                    From {formatPrice(product.priceCents)}
                  </span>
                ) : (
                  <span className="text-sm uppercase tracking-[0.2em] text-steel">
                    Pricing on request
                  </span>
                )}
                <Link href="/contact" className="btn-spark group px-7 py-3.5 text-sm">
                  Talk to Sales
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <p className="mt-3 text-xs text-steel">
                {product.inquiryOnly
                  ? "Every engagement is scoped on a quick, no-pressure call — tell us about your business and we’ll show you exactly what’s possible."
                  : "This machine is configured to order. Our US-based team will prepare a quote with freight and installation included."}
              </p>
            </>
          )}

          {/* Downloadable quotation PDF */}
          {product.quotePdf && (
            <a
              href={product.quotePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/[0.06] px-6 py-3 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent/15"
            >
              <FileTextIcon className="h-4 w-4" />
              View Quotation (PDF)
            </a>
          )}

          {/* Competitor price comparison */}
          {product.compareAtCents != null && product.priceCents != null && (
            <div className="mt-5 rounded-xl border border-accent/25 bg-accent/[0.05] px-5 py-4">
              <p className="text-sm leading-relaxed text-titanium">
                Competitors list comparable machines at{" "}
                <span className="text-steel line-through">
                  {formatPrice(product.compareAtCents)}
                </span>
                . You save{" "}
                <span className="font-semibold text-accent">
                  {formatPrice(product.compareAtCents - product.priceCents)}
                </span>{" "}
                with Envishon.
              </p>
              {product.compareUrl && (
                <a
                  href={product.compareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-xs text-accent transition-colors hover:text-accent-signal"
                >
                  See a competitor&apos;s price for yourself
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}

          {/* Downloadable spec sheet */}
          {product.datasheet && (
            <a
              href={product.datasheet}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-titanium transition-all hover:border-accent/50 hover:text-accent-ember"
            >
              <DownloadIcon className="h-4 w-4" />
              Download spec sheet (PDF)
            </a>
          )}

          {/* Key highlights */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="mt-12">
              <h2 className="font-heading text-sm uppercase tracking-[0.2em] text-steel">
                Key highlights
              </h2>
              <ul className="mt-5 space-y-3">
                {product.highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-titanium">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Spec table — technical readout: indexed rows, machined rules,
              aligned mono columns. Reads like the machine's own datasheet. */}
          <div className="mt-12">
            <div className="flex items-baseline justify-between">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
                Technical Parameters
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite">
                {String(product.specs.length).padStart(2, "0")} fields ·{" "}
                {product.name}
              </span>
            </div>
            <div className="rule-ticks mt-3" aria-hidden="true" />
            <dl className="divide-y divide-white/[0.06]">
              {product.specs.map((spec, i) => (
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
          </div>

          {/* Manufacturer compliance — attributed to the factory, never
              restated as Envishon's own. Text only: the official CE / FDA /
              ISO marks are deliberately not used (the FDA logo may not be
              displayed by private companies). See products.ts. */}
          {product.compliance && (
            <div className="mt-8 rounded-2xl border border-white/[0.07] bg-base-900/60 p-5">
              <div className="flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 shrink-0 text-accent-ember" />
                <h2 className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-ember">
                  Compliance
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {product.compliance}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-steel/60">
                Certifications are held by the manufacturer.
              </p>
            </div>
          )}

          <div className="mt-6 rounded-2xl border border-white/[0.07] bg-base-900/60 p-5 text-sm text-steel">
            {CATEGORY_META[product.category].blurb}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-28">
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-2xl tracking-tight text-white">
              More {product.category}
            </h2>
            <Link
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="group inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-signal"
            >
              View category
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-base-900/60 p-5 transition-colors hover:border-accent/30"
              >
                <div>
                  <p className="font-heading text-white">{p.name}</p>
                  <p className="mt-1 text-xs text-steel">{p.specLine}</p>
                </div>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-steel transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
