import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

// Display / headings — squared, mechanical, tech. Strong in bold caps.
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://envishonlabs3d.com"),
  title: {
    default: "Envishon — Industrial Laser & Additive Services",
    template: "%s · Envishon",
  },
  description:
    "Envishon is an industrial laser and additive-manufacturing services company for the Americas — metal 3D printer training, installation and support, laser welding, and laser cleaning. We don't sell you a box. We make sure it produces.",
  keywords: [
    "metal 3D printer training",
    "SLM installation",
    "laser welding services",
    "laser cleaning",
    "laser rust removal",
    "additive manufacturing services",
    "Envishon",
  ],
  openGraph: {
    title: "Envishon — Industrial Laser & Additive Services",
    description:
      "Training, installation, technical support, laser welding, and laser cleaning across the Americas.",
    type: "website",
    url: "https://envishonlabs3d.com",
    siteName: "Envishon",
  },
};

// Organization schema (JSON-LD) with contact details.
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Envishon",
  url: "https://envishonlabs3d.com",
  description:
    "Industrial laser and additive-manufacturing services for the Americas: metal 3D printer training, installation and support, laser welding, and laser cleaning.",
  email: "envishonlabs3d@gmail.com",
  telephone: "+19804022520",
  areaServed: "Americas",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "envishonlabs3d@gmail.com",
    telephone: "+19804022520",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <GrainOverlay />
        <Header />
        <main id="main" className="min-h-[60vh] pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
