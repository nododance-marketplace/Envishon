import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand palette (Envishon Brand Guide v1.0) ──────────────
        // Balance: 80 titanium/black · 15 greys · 5 orange (the spark).
        base: {
          DEFAULT: "#0A0B0D", // Near Black — primary background canvas
          900: "#0E0F12",
          800: "#141518",
          700: "#1B1D21",
          600: "#26282D",
        },
        graphite: "#5A5F66", // surfaces, dividers, muted text
        steel: "#8A8F98", // Brushed Steel — body text on dark
        titanium: "#C5C8CC", // Titanium Silver — headings, logo finish
        accent: {
          DEFAULT: "#7C3AED", // Molten Orange — primary accent (links, buttons)
          signal: "#8B5CF6", // Signal — bright accent, gradient end, hover
          ember: "#C4B5FD", // Ember — tints, highlights, subtle glows
        },
      },
      fontFamily: {
        // Bricolage Grotesque — editorial display for headings.
        heading: ["var(--font-heading)", "sans-serif"],
        // Geist Sans — clean, neutral body.
        body: ["var(--font-geist-sans)", "sans-serif"],
        // Geist Mono — spec readouts, data, and the technical "HUD" flavor.
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "steel-sheen":
          "linear-gradient(135deg, rgba(197,200,204,0.14) 0%, rgba(138,143,152,0.04) 40%, rgba(10,11,13,0) 70%)",
        "accent-sheen":
          "linear-gradient(135deg, rgba(196,181,253,0.16) 0%, rgba(124,58,237,0.06) 45%, rgba(10,11,13,0) 72%)",
        "grid-faint":
          "linear-gradient(rgba(197,200,204,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(197,200,204,0.04) 1px, transparent 1px)",
        // Ambient violet mesh — used behind hero/CTA for depth, not a flat fade.
        "violet-mesh":
          "radial-gradient(60% 55% at 82% 20%, rgba(124,58,237,0.18) 0%, rgba(10,11,13,0) 60%), radial-gradient(50% 50% at 8% 90%, rgba(139,92,246,0.12) 0%, rgba(10,11,13,0) 55%)",
      },
      boxShadow: {
        // Subtle violet glow — "the glow, never the surface". Use sparingly.
        accent:
          "0 0 0 1px rgba(124,58,237,0.4), 0 8px 30px -8px rgba(124,58,237,0.35)",
        // Tinted depth shadow that carries the near-black canvas hue.
        depth: "0 24px 60px -24px rgba(4,4,7,0.85)",
        "depth-lg": "0 40px 90px -30px rgba(4,4,7,0.9)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // Slow drift for ambient glow orbs.
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-24px,0)" },
        },
        // Sweeping laser line across the hero readout.
        scanline: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "12%": { opacity: "0.9" },
          "88%": { opacity: "0.9" },
          "100%": { transform: "translateY(1200%)", opacity: "0" },
        },
        // Pulsing status dot.
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(124,58,237,0.55)" },
          "70%": { boxShadow: "0 0 0 7px rgba(124,58,237,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(124,58,237,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        shimmer: "shimmer 2.4s linear infinite",
        float: "float 9s ease-in-out infinite",
        scanline: "scanline 4.5s cubic-bezier(0.4,0,0.2,1) infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
