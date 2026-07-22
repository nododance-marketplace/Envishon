import type { Metadata } from "next";
import { LaserServicePage, type LaserPillar } from "@/components/services/LaserServicePage";

export const metadata: Metadata = {
  title: "Laser Welding",
  description:
    "Handheld fiber laser welding for steel, stainless, and aluminum — several times faster than TIG with far less heat distortion and a cleaner finish. Services and training from Envishon.",
};

const pillar: LaserPillar = {
  eyebrow: "Laser Welding",
  breadcrumb: "Laser Welding",
  titleTop: "Weld faster,",
  titleSpark: "with less heat.",
  lead: "Handheld fiber laser welding is changing metal fabrication. It runs several times faster than TIG with a fraction of the heat input, so parts weld with far less distortion and a cleaner finish that needs little grinding — across steel, stainless, and aluminum. Envishon brings that capability to shops that want the speed and quality without the traditional learning curve.",
  bullets: [
    "Steel, stainless & aluminum",
    "Dramatically less heat distortion than TIG",
    "Clean welds, minimal post-processing",
    "Faster throughput",
    // TODO: owner to confirm the offer model — training, on-site service, or
    // both, and pricing. Copy is written to work either way until then.
    "Training and/or on-site service",
  ],
  factsHeading: "Fiber laser welding, in plain terms.",
  facts: [
    {
      term: "A tighter heat input",
      body: "The focused beam melts a narrow zone, so far less heat spreads into the part than with an arc — which is why distortion and warping drop sharply.",
    },
    {
      term: "Speed over an arc",
      body: "Because it fuses quickly along the joint, laser welding typically runs several times faster than TIG on comparable work.",
    },
    {
      term: "A cleaner bead",
      body: "The narrow, controlled weld leaves a tidy finish that usually needs little grinding or blending afterward.",
    },
    {
      term: "Handheld and mobile",
      body: "Modern handheld fiber systems bring the process to the bench or the part, rather than requiring everything to come to a fixed station.",
    },
  ],
  note: {
    heading: "Where it fits — and where it doesn't",
    body: "Laser welding complements rather than fully replaces TIG and MIG. For thin-to-medium fabrication, speed and finish work, and repeatable production joints, it's a real advantage. For heavy structural welds and thick sections, traditional processes still tend to win. We'll tell you honestly which jobs it's right for.",
  },
  ctaHeading: "Want laser welding in your shop?",
  ctaSub: "Tell us what you fabricate and how your team works today. We'll show you where laser welding earns its place — and how to bring it in.",
};

export default function LaserWeldingPage() {
  return <LaserServicePage pillar={pillar} />;
}
