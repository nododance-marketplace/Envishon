import type { ComponentType, SVGProps } from "react";
import { LayersIcon, BeamIcon, SparkIcon } from "@/components/ui/icons";

/**
 * The three service pillars — the whole company. Summary content shared by the
 * home pillar grid and the /services hub. Full detail lives on each route.
 *
 * Truth discipline: no invented metrics, certs, SLAs, or client claims. The
 * FastForm relationship is described softly (early-stage, verbal) — see the
 * additive page for the partnership-language TODO.
 */
export type PillarSummary = {
  href: string;
  n: string;
  eyebrow: string;
  title: string;
  blurb: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const PILLARS: PillarSummary[] = [
  {
    href: "/services/additive",
    n: "01",
    eyebrow: "Metal Additive Manufacturing",
    title: "Training, installation & support",
    blurb:
      "We get SLM/LPBF metal printers installed, calibrated, and running — then train your operators, powder safety included, and support them after. In partnership with FastForm.",
    icon: LayersIcon,
  },
  {
    href: "/services/laser-welding",
    n: "02",
    eyebrow: "Laser Welding",
    title: "Handheld fiber laser welding",
    blurb:
      "Several times faster than TIG with a fraction of the heat input — less distortion, cleaner welds, across steel, stainless, and aluminum. Services and training.",
    icon: BeamIcon,
  },
  {
    href: "/services/laser-cleaning",
    n: "03",
    eyebrow: "Laser Cleaning & Rust Removal",
    title: "Ablation cleaning & surface prep",
    blurb:
      "Strip rust, coatings, and contamination without touching the base metal — no media, no chemicals, no grinding. Services and training.",
    icon: SparkIcon,
  },
];

/** Text-to-CAD — a fourth thing Envishon offers, linked out. Coming soon. */
export const VIZUS_TEASER = {
  href: "/vizus",
  title: "Text-to-CAD",
  comingSoon: true,
  blurb: "And the software to design what you print — meet Text-to-CAD.",
};
