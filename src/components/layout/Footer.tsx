import Link from "next/link";
import { BrandLockup } from "@/components/layout/BrandLockup";

export function Footer() {
  const year = 2026; // Static to keep this a server component; update as needed.

  return (
    <footer className="relative mt-32 border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-80"
              aria-label="Envishon home"
            >
              <BrandLockup />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-steel">
              Industrial laser and additive-manufacturing services for the
              Americas — training, installation, technical support, laser
              welding, and laser cleaning. We don&apos;t sell you a box. We make
              sure it produces.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:envishonlabs3d@gmail.com"
                  className="text-titanium transition-colors hover:text-accent-ember"
                >
                  envishonlabs3d@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19804022520"
                  className="text-titanium transition-colors hover:text-accent-ember"
                >
                  980 402 2520
                </a>
              </li>
              <li>
                <a
                  href="https://envishonlabs3d.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-titanium transition-colors hover:text-accent-ember"
                >
                  envishonlabs3d.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-steel">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/services/additive"
                  className="text-titanium hover:text-accent-ember"
                >
                  Metal AM training &amp; support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/laser-welding"
                  className="text-titanium hover:text-accent-ember"
                >
                  Laser welding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/laser-cleaning"
                  className="text-titanium hover:text-accent-ember"
                >
                  Laser cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/vizus"
                  className="text-titanium hover:text-accent-ember"
                >
                  Vizus AI
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-steel">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/platforms"
                  className="text-titanium hover:text-accent-ember"
                >
                  Platforms
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-titanium hover:text-accent-ember">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-titanium hover:text-accent-ember">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-steel sm:flex-row sm:items-center">
          <p>© {year} Envishon. All rights reserved.</p>
          <p className="text-steel/70">
            Industrial laser &amp; additive services · The Americas
          </p>
        </div>
      </div>
    </footer>
  );
}
