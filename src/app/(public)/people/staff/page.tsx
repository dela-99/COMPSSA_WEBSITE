import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
} from "@/components/ui";
import { staff } from "@/data";

export const metadata: Metadata = {
  title: "Lecturers & Staff",
  description: "Academic and administrative staff of the Department of Computer Science.",
};

export default function StaffPage() {
  const sorted = [...staff].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Section spacing="loose" rule>
        <Container size="wide">
          <Eyebrow>People</Eyebrow>
          <Heading as="h1" size="display" className="mt-3 max-w-[20ch]">
            Lecturers and staff.
          </Heading>
          <p className="mt-6 font-serif text-[1.125rem] leading-relaxed text-ink-soft max-w-[60ch]">
            Academic and administrative staff of the Department of Computer
            Science, listed alphabetically.
          </p>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="wide">
          <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((s) => (
              <li key={s.id} className="border-t border-rule pt-5">
                <p className="font-serif text-[1.0625rem] leading-snug text-ink">
                  {s.name}
                </p>
                <p className="mt-1 font-sans text-[0.8125rem] text-ink-muted">
                  {s.role}
                </p>
                {s.specialization && (
                  <p className="mt-1 font-sans text-[0.8125rem] text-ink-subtle">
                    {s.specialization}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}