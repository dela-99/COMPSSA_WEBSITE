import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
} from "@/components/ui";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Department of Computer Science.",
};

export default function ContactPage() {
  return (
    <Section spacing="loose">
      <Container size="narrow">
        <Eyebrow>Contact</Eyebrow>
        <Heading as="h1" size="display" className="mt-3 max-w-[18ch]">
          Get in touch.
        </Heading>

        <dl className="mt-12 grid grid-cols-1 gap-px bg-rule border border-rule sm:grid-cols-2">
          <Cell label="Email">
            <a href={`mailto:${siteConfig.email}`} className="prose-link">
              {siteConfig.email}
            </a>
          </Cell>
          <Cell label="Phone">{siteConfig.phone}</Cell>
          <Cell label="Address" className="sm:col-span-2">
            {siteConfig.address.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </Cell>
        </dl>

        <p className="mt-10 font-sans text-[0.9375rem] text-ink-muted max-w-[60ch]">
          For admissions and academic matters, please use the email above. The
          full contact form is being prepared for Phase 2.
        </p>
      </Container>
    </Section>
  );
}

function Cell({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
        {label}
      </dt>
      <dd className="mt-2 font-serif text-[1.0625rem] leading-relaxed text-ink">
        {children}
      </dd>
    </div>
  );
}