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
        // Balance: 80 titanium/black · 15 greys · 5 violet (the spark).
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
          DEFAULT: "#7C3AED", // Electric Violet — primary accent (links, buttons)
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

        /* ── Vizus AI concept-mockup motion ─────────────────────────── */

        // Annotation strokes drawing themselves in, holding, then clearing.
        "vz-draw": {
          "0%": { strokeDashoffset: "260" },
          "22%, 74%": { strokeDashoffset: "0" },
          "92%, 100%": { strokeDashoffset: "260" },
        },
        // Caret blink for the prompt bar.
        "vz-caret": {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        // Prompt text typing itself out, holding, then resetting.
        "vz-type": {
          "0%": { width: "0%" },
          "35%, 80%": { width: "100%" },
          "97%, 100%": { width: "0%" },
        },
        // The part gently breathing so the viewport never feels frozen.
        "vz-hover": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-7px,0)" },
        },
        // Geometry resolving: wireframe -> solid, on a loop.
        "vz-resolve": {
          "0%, 12%": { opacity: "0", transform: "scale(0.965)" },
          "38%, 82%": { opacity: "1", transform: "scale(1)" },
          "97%, 100%": { opacity: "0", transform: "scale(0.965)" },
        },
        // Inverse of vz-resolve — the wireframe that fades as the solid lands.
        "vz-wire": {
          "0%, 12%": { opacity: "0.85" },
          "38%, 82%": { opacity: "0.12" },
          "97%, 100%": { opacity: "0.85" },
        },
        // Lattice cells populating as the prompt resolves.
        "vz-lattice": {
          "0%, 20%": { opacity: "0" },
          "45%, 85%": { opacity: "0.75" },
          "98%, 100%": { opacity: "0" },
        },
        // Reference image landing in the drop zone.
        "vz-drop": {
          "0%, 8%": { opacity: "0", transform: "translateY(-10px) scale(0.94)" },
          "28%, 88%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "99%, 100%": { opacity: "0", transform: "translateY(-10px) scale(0.94)" },
        },
        // Prompt-history chip handing off to the next one.
        "vz-step": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        // Soft sweep across a viewport as geometry rebuilds.
        "vz-sweep": {
          "0%": { transform: "translateX(-120%)", opacity: "0" },
          "20%, 60%": { opacity: "0.5" },
          "100%": { transform: "translateX(120%)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        shimmer: "shimmer 2.4s linear infinite",
        float: "float 9s ease-in-out infinite",
        scanline: "scanline 4.5s cubic-bezier(0.4,0,0.2,1) infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 32s linear infinite",

        // Vizus AI mockups — one shared 9s cycle so panels feel synchronised.
        "vz-draw": "vz-draw 9s ease-in-out infinite",
        "vz-caret": "vz-caret 1.1s step-end infinite",
        "vz-type": "vz-type 9s steps(34, end) infinite",
        "vz-hover": "vz-hover 6s ease-in-out infinite",
        "vz-resolve": "vz-resolve 9s cubic-bezier(0.16,1,0.3,1) infinite",
        "vz-wire": "vz-wire 9s cubic-bezier(0.16,1,0.3,1) infinite",
        "vz-lattice": "vz-lattice 9s ease-in-out infinite",
        "vz-drop": "vz-drop 9s cubic-bezier(0.16,1,0.3,1) infinite",
        "vz-step": "vz-step 9s ease-in-out infinite",
        "vz-sweep": "vz-sweep 9s cubic-bezier(0.4,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
