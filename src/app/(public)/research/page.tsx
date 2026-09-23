import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
} from "@/components/ui";
import { researchAreas, researchProjects, publications } from "@/data";

export const metadata: Metadata = {
  title: "Research",
  description: "Research areas, projects, and publications of the Department of Computer Science.",
};

export default function ResearchPage() {
  return (
    <>
      <Section spacing="loose" rule>
        <Container size="wide">
          <Eyebrow>Research</Eyebrow>
          <Heading as="h1" size="display" className="mt-3 max-w-[20ch]">
            Research at the department.
          </Heading>
          <p className="mt-6 font-serif text-[1.125rem] leading-relaxed text-ink-soft max-w-[60ch]">
            The department maintains active programmes of research across
            several areas, undertaken by academic staff and postgraduate
            students.
          </p>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="wide">
          <Eyebrow>Research areas</Eyebrow>
          <ul className="mt-8 grid grid-cols-1 gap-px bg-rule border border-rule sm:grid-cols-2">
            {researchAreas.map((a) => (
              <li key={a.id} className="bg-paper p-6 sm:p-8">
                <p className="font-serif text-[1.25rem] leading-snug text-ink">
                  {a.name}
                </p>
                <p className="mt-2 font-sans text-[0.9375rem] leading-relaxed text-ink-muted">
                  {a.summary}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section spacing="default" tone="warm">
        <Container size="wide">
          <Eyebrow>Projects</Eyebrow>
          <ul className="mt-8 divide-y divide-rule border-y border-rule">
            {researchProjects.map((p) => (
              <li key={p.id} className="py-6">
                <p className="font-serif text-[1.125rem] leading-snug text-ink">
                  {p.title}
                </p>
                <p className="mt-1 font-sans text-[0.875rem] text-ink-muted">
                  {p.summary}
                </p>
                <p className="mt-2 font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
                  Status: {p.status}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {publications.length > 0 && (
        <Section spacing="default" rule>
          <Container size="wide">
            <Eyebrow>Recent publications</Eyebrow>
            <ul className="mt-8 divide-y divide-rule border-y border-rule">
              {publications.map((p) => (
                <li key={p.id} className="py-5">
                  <p className="font-serif text-[1.0625rem] leading-snug text-ink">
                    {p.title}
                  </p>
                  <p className="mt-1 font-sans text-[0.875rem] text-ink-muted">
                    {p.authors.join(", ")} · <em>{p.venue}</em> · {p.year}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}
    </>
  );
}