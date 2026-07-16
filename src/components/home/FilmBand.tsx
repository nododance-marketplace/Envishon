import { Reveal } from "@/components/ui/Reveal";

/**
 * Home film band — the official Envishon walkthrough. This is a NARRATED
 * video (real audio), so it plays with controls and a poster rather than as a
 * muted background loop. It sits as the second section on the home page, right
 * under the hero, so it's the first full thing a visitor sees on scroll.
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

      <Reveal delay={120} className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-base-700/80 bg-base-900 shadow-depth-lg">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            className="aspect-video w-full bg-base-900"
            controls
            preload="metadata"
            playsInline
            poster="/video/official-poster.jpg"
          >
            <source src="/video/official.mp4" type="video/mp4" />
          </video>
        </div>
      </Reveal>
    </section>
  );
}
