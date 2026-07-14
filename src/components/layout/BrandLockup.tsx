import Image from "next/image";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ENVISHON BRAND LOCKUP
 * ─────────────────────────────────────────────────────────────────────────
 *  The real Envishon logo — a 3D metallic "layered E" emblem (violet → steel)
 *  and the brushed-metal ENVISHON wordmark. Both are background-removed PNGs
 *  in /public/brand (en-emblem.png, en-wordmark.png), so they sit cleanly on
 *  any dark surface. Size everything with a height class + w-auto.
 * ─────────────────────────────────────────────────────────────────────────
 */

export function EnvishonMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/en-emblem.png"
      alt="Envishon emblem"
      width={653}
      height={760}
      className={`w-auto object-contain drop-shadow-[0_2px_10px_rgba(124,58,237,0.35)] ${className}`}
    />
  );
}

export function EnvishonWordmark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/en-wordmark.png"
      alt="Envishon"
      width={1400}
      height={158}
      className={`w-auto object-contain ${className}`}
    />
  );
}

/**
 * Full lockup: emblem + ENVISHON wordmark. `compact` drops the wordmark.
 */
export function BrandLockup({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <EnvishonMark className="h-9 shrink-0" />
      {!compact && <EnvishonWordmark className="h-[15px]" />}
    </span>
  );
}
