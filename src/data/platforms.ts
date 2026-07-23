/**
 * ─────────────────────────────────────────────────────────────────────────
 *  PLATFORMS — the equipment Envishon services.
 * ─────────────────────────────────────────────────────────────────────────
 *  Two platforms, one per service pillar. Placeholder images live in
 *  /public/products. Truth discipline:
 *    - Metal-printer specs are a REPRESENTATIVE range across the FastForm
 *      SLM/LPBF line (real catalog figures) — exact numbers vary by model.
 *    - xTool MetalFab specs are what's published on xTool's product page;
 *      figures not published there are marked "Confirm on quote", never
 *      invented. Partnership language stays soft (see TODOs).
 * ─────────────────────────────────────────────────────────────────────────
 */
export type PlatformSpec = { label: string; value: string };

export type Platform = {
  slug: string;
  name: string;
  subtitle: string;
  tag: string;
  image: string;
  tagline: string;
  description: string[];
  highlights: string[];
  specs: PlatformSpec[];
  specNote: string;
  serviceHref: string;
  serviceLabel: string;
};

export const platforms: Platform[] = [
  {
    slug: "metal-printers",
    name: "Metal 3D Printers",
    subtitle: "SLM / LPBF metal additive",
    tag: "Metal Additive",
    image: "/products/platform-printers.jpg",
    tagline: "Desktop to super-large-format metal printing.",
    description: [
      "The metal 3D printing platform Envishon installs, calibrates, trains operators on, and supports. It's an SLM/LPBF line that scales from a desktop dental system to a super-large multi-laser machine — with a green-laser option that prints copper and other reflective metals most fiber lasers can't.",
      // TODO: upgrade partnership language once the agreement is signed.
      "Delivered in partnership with FastForm, whose systems we support. We don't sell the box — we make sure it produces.",
    ],
    highlights: [
      "SLM/LPBF metal printing, desktop to super-large-format",
      "Single 300 W fiber laser up to 6–8 × 500 W multi-laser",
      "A green-laser option prints copper and other reflective metals",
      "Stainless, tool steel, titanium, CoCr, aluminum, superalloy, copper",
      "Permanent filter ≥ 30,000 hours — a low maintenance burden",
    ],
    specs: [
      { label: "Process", value: "SLM / LPBF (Selective Laser Melting)" },
      { label: "Build Volume", value: "Ø100 × 70 mm → 650 × 650 × 1100 mm" },
      { label: "Laser Configuration", value: "1 × 300 W → 6–8 × 500 W fiber" },
      { label: "Copper / Reflective", value: "500 W single-mode green laser (option)" },
      { label: "Scanning Speed", value: "Up to 10 m/s" },
      { label: "Beam / Spot Size", value: "15–100 µm" },
      { label: "Layer Thickness", value: "20–150 µm" },
      { label: "Accuracy", value: "±0.05 mm" },
      {
        label: "Materials",
        value:
          "Stainless steel, tool steel, titanium, CoCr, aluminum, superalloy, copper",
      },
      { label: "Filtration", value: "Permanent filter ≥ 30,000 hours" },
    ],
    specNote:
      "Representative figures across the printer line we service — exact specs vary by model. We'll match you to the right platform for your work.",
    serviceHref: "/services/additive",
    serviceLabel: "Training, installation & support",
  },
  {
    slug: "xtool-metalfab",
    name: "xTool MetalFab",
    subtitle: "Laser Welder & CNC Cutter",
    tag: "Laser Welding & Cleaning",
    image: "/products/platform-xtool.jpg",
    tagline: "One handheld machine — weld, cut, and clean.",
    description: [
      "An all-in-one metal workshop in a single handheld machine: weld, cut, and clean without buying three separate tools. Built for small-batch metalwork, repair, and fabrication, the xTool MetalFab delivers welds and cuts on stainless steel, carbon steel, brass, and aluminum with professional stability.",
      // TODO: upgrade partnership language / confirm reseller terms with xTool.
      "In partnership with xTool. Its low learning curve — 108+ one-click parameters — is exactly why it fits our model: we train your team to run it, or run the work for you.",
    ],
    highlights: [
      "Weld, cut, and clean from one machine",
      "Stainless steel, carbon steel, brass, and aluminum",
      "108+ one-click parameters — start in minutes, minimal training",
      "Smart dual cameras for precise alignment",
      "VibeFreeCut™, FlexiTrack™ and SaveGas™ for clean cuts and lower gas cost",
      "10,000+ hour laser lifespan, 24/7 stable output",
      "10 built-in safety features; runs from −10 °C to 40 °C",
    ],
    specs: [
      { label: "Modes", value: "Welding · Cutting · Cleaning" },
      { label: "Laser Power", value: "800 W or 1200 W" },
      {
        label: "Materials",
        value: "Stainless steel, carbon steel, brass, aluminum",
      },
      { label: "Presets", value: "108+ one-click parameters" },
      { label: "Vision", value: "Smart dual cameras" },
      { label: "Technologies", value: "VibeFreeCut™ · FlexiTrack™ · SaveGas™" },
      { label: "Laser Lifespan", value: "≥ 10,000 hours" },
      { label: "Duty", value: "24/7 stable output" },
      { label: "Safety", value: "10 built-in safety features" },
      { label: "Operating Temperature", value: "−10 °C to 40 °C" },
      {
        label: "Configurations",
        value: "800 W Welder · 1200 W Welder · + CNC Cutter · All-in-one bundle",
      },
      // Not published on the source page — do not fabricate.
      { label: "Dimensions & Weight", value: "Confirm on quote" },
      { label: "Weld / Cut Thickness & Speed", value: "Confirm on quote" },
    ],
    specNote:
      "Specifications as published by xTool. Figures not listed there are confirmed on quote rather than estimated.",
    serviceHref: "/services/laser",
    serviceLabel: "Laser welding & cleaning",
  },
];

export function getPlatform(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug);
}
