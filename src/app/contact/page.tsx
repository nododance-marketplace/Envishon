import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Envishon about sourcing an industrial SLM, SLS, or large-format FDM 3D printer for your business.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn>
          <div className="lg:sticky lg:top-28">
            <p className="kicker">
              <span className="h-px w-8 bg-accent/60" />
              Contact
            </p>
            <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.03] tracking-tight text-white sm:text-6xl text-balance">
              Let&apos;s source your
              <br />
              next machine.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-steel">
              Tell us what you&apos;re building and which systems you&apos;re
              evaluating. Our US-based team handles sourcing, logistics, and
              follow-up — start with a message.
            </p>

            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:envishonlabs3d@gmail.com"
                    className="text-titanium transition-colors hover:text-accent-ember"
                  >
                    envishonlabs3d@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+19804022520"
                    className="text-titanium transition-colors hover:text-accent-ember"
                  >
                    980 402 2520
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  Website
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://envishonlabs3d.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-titanium transition-colors hover:text-accent-ember"
                  >
                    envishonlabs3d.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  Based in
                </dt>
                <dd className="mt-1 text-titanium">United States</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                  Response time
                </dt>
                <dd className="mt-1 text-titanium">1–2 business days</dd>
              </div>
            </dl>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
