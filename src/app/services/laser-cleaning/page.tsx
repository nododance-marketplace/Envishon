import type { Metadata } from "next";
import { LaserServicePage, type LaserPillar } from "@/components/services/LaserServicePage";

export const metadata: Metadata = {
  title: "Laser Cleaning & Rust Removal",
  description:
    "Laser ablation cleaning removes rust, coatings, and contamination without damaging the base metal — no media, no chemicals, no grinding. Services and training from Envishon.",
};

const pillar: LaserPillar = {
  eyebrow: "Laser Cleaning & Rust Removal",
  breadcrumb: "Laser Cleaning",
  titleTop: "Strip the rust.",
  titleSpark: "Keep the metal.",
  lead: "Laser cleaning removes rust, oxides, coatings, and contamination by ablation — vaporizing the unwanted layer while leaving the base metal intact. No media, no chemicals, no grinding, and far less hazardous waste than sandblasting or solvents. It's used for restoration, decontamination, and pre- and post-weld surface prep across industrial and marine work.",
  bullets: [
    "Rust, paint, coatings & oxide removal",
    "No abrasive media or chemicals",
    "Substrate stays intact",
    "Excellent weld-prep and surface conditioning",
    // TODO: owner to confirm the offer model — training, on-site service, or
    // both, and pricing. Copy is written to work either way until then.
    "Training and/or on-site service",
  ],
  factsHeading: "Ablation, in plain terms.",
  facts: [
    {
      term: "It vaporizes the layer, not the part",
      body: "The beam delivers energy the contamination absorbs and the base metal largely reflects, so the rust or coating lifts off while the substrate stays intact.",
    },
    {
      term: "No media, no chemicals",
      body: "Unlike sandblasting or solvent stripping, there's no grit and no chemical bath — which means far less hazardous waste to capture and dispose of.",
    },
    {
      term: "Selective and controllable",
      body: "Power and passes are tuned to the job, so it can take a surface down to bare metal or lift a single coating layer without gouging.",
    },
    {
      term: "Great weld prep",
      body: "Because it leaves clean, oxide-free metal, it's well suited to preparing surfaces before welding and conditioning them after.",
    },
  ],
  note: {
    heading: "How this technology works",
    body: "These are general, well-established properties of laser ablation — how the process behaves on metal, not proprietary test data. Results on any given part depend on the material, the contamination, and the system. We'll assess your actual work before committing to an outcome.",
  },
  ctaHeading: "Have rust, coatings, or surface prep to solve?",
  ctaSub: "Tell us the material and the contamination. We'll tell you whether laser cleaning is the right tool — and how we can help, through service, training, or both.",
};

export default function LaserCleaningPage() {
  return <LaserServicePage pillar={pillar} />;
}
