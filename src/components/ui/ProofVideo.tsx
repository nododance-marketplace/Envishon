/**
 * ProofVideo — a framed, autoplaying silent loop of real Envishon field
 * footage. Muted + playsInline so it autoplays everywhere; poster covers the
 * load. Server component (plain markup, no client JS).
 */
export function ProofVideo({
  src,
  poster,
  label,
  aspect = "aspect-video",
  className = "",
}: {
  src: string;
  poster: string;
  /** Small mono chip, top-left. Optional. */
  label?: string;
  /** Tailwind aspect utility, e.g. "aspect-video" or "aspect-[9/16]". */
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-base-900 shadow-depth ${aspect} ${className}`}
    >
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label ?? "Envishon field footage"}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Legibility scrim + brand tint at the base */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/40 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />

      {label ? (
        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-base/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-titanium backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring motion-reduce:animate-none" />
          {label}
        </span>
      ) : null}
    </div>
  );
}
