import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";
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
    default: "Envishon — Industrial 3D Printers",
    template: "%s · Envishon",
  },
  description:
    "Print the future. US-based sourcing for industrial SLM, SLS, and large-format FDM 3D printers — built for businesses.",
  keywords: [
    "industrial 3D printers",
    "SLM",
    "SLS",
    "large-format FDM",
    "metal 3D printing",
    "Envishon",
  ],
  openGraph: {
    title: "Envishon — Industrial 3D Printers",
    description: "Print the future.",
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
  email: "envishonlabs3d@gmail.com",
  telephone: "+19804022520",
  areaServed: "US",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
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
        <CartProvider>
          <Header />
          <main id="main" className="min-h-[60vh] pt-16">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
