import { Reveal } from "@/components/ui/Reveal";

/**
 * Home film band — sits as the second section, right under the hero.
 *
 *  1. The official narrated walkthrough (real audio) — plays with controls +
 *     poster, so a visitor watches it deliberately.
 *  2. The full-lineup loop underneath — a silent, auto-playing background loop
 *     of every printer together.
 *
 *  Both use the edge-fade mask (see globals.css) so the footage dissolves into
 *  the near-black page instead of sitting in a hard rectangular card. The
 *  narrated player uses the bottom-safe variant so its controls stay legible.
 */
export function FilmBand() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <Reveal>
        <div className="flex items-baseline justify-between gap-4">
          <p className="kicker">
            <span className="h-px w-8 bg-accent/60" />
            The walkthrough
          </p>
          <span className="hud-chip hidden sm:inline-flex">SEC 01 · FILM</span>
        </div>
        <h2 className="mt-5 max-w-2xl font-heading text-4xl font-medium tracking-tight text-white sm:text-5xl text-balance">
          See the machines run.
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-steel text-pretty">
          A walk through the shop — the machines, the powder, and the metal
          parts coming off the plate. Sound on.
        </p>
      </Reveal>

      {/* Narrated official video — controls + poster, bottom-safe feather */}
      <Reveal delay={120} className="mt-12">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          className="edge-fade-b aspect-video w-full"
          controls
          preload="metadata"
          playsInline
          poster="/video/official-poster.jpg"
        >
          <source src="/video/official.mp4" type="video/mp4" />
        </video>
      </Reveal>

      {/* The full lineup — silent looping background reel, fully feathered */}
      <Reveal delay={80} className="mt-16">
        <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-graphite">
          The full lineup
        </p>
        <video
          className="edge-fade aspect-video w-full"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/video/printers-loop-poster.jpg"
          aria-label="The full Envishon printer lineup"
        >
          <source src="/video/printers-loop.mp4" type="video/mp4" />
        </video>
      </Reveal>
    </section>
  );
}
