"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLockup } from "@/components/layout/BrandLockup";
import { MenuIcon, CloseIcon, ArrowRightIcon } from "@/components/ui/icons";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/platforms", label: "Platforms" },
  { href: "/vizus", label: "Text-to-CAD" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on navigation (safety net; links also close on tap).
  useEffect(() => setMenuOpen(false), [pathname]);

  // While the menu is open: lock body scroll and close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled || menuOpen
          ? "glass border-b border-white/[0.06]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="transition-opacity hover:opacity-80"
          aria-label="Envishon home"
        >
          <BrandLockup />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active ? "text-white" : "text-steel hover:text-accent-ember"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn-spark group px-5 py-2.5 text-sm"
          >
            Talk to our team
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="rounded-full p-2.5 text-titanium transition-colors hover:bg-white/5 md:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Tap-away backdrop — sits below the bar, closes the menu on tap. */}
      <div
        className={`fixed inset-x-0 bottom-0 top-16 bg-base/60 backdrop-blur-sm md:hidden transition-opacity duration-200 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu — a full-size overlay panel. It renders at full height the
          instant it opens (only opacity/transform animate), so every tap target
          exists immediately; no height-clipping race that swallows taps. Closed
          state is pointer-events-none so it never intercepts taps. */}
      <nav
        aria-label="Mobile"
        className={`absolute inset-x-0 top-full border-t border-white/[0.06] bg-base-900/95 px-4 py-2 backdrop-blur-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85)] transition-[opacity,transform] duration-200 md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between border-b border-white/[0.06] py-4 text-sm font-medium text-white last:border-0 active:text-accent-ember"
          >
            {item.label}
            <ArrowRightIcon className="h-4 w-4 text-steel/40" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
