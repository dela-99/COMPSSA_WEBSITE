import type { Metadata } from "next";
import Link from "next/link";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Badge,
  Button,
} from "@/components/ui";
import { programmes } from "@/data";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Undergraduate and postgraduate programmes of the Department of Computer Science.",
};

export default function ProgrammesPage() {
  const ug = programmes.filter((p) => p.level === "undergraduate");
  const pg = programmes.filter((p) => p.level === "postgraduate");
  return (
    <>
      <Section spacing="loose" rule>
        <Container size="wide">
          <Eyebrow>Academics</Eyebrow>
          <Heading as="h1" size="display" className="mt-3 max-w-[20ch]">
            Programmes of study.
          </Heading>
          <p className="mt-6 font-serif text-[1.125rem] leading-relaxed text-ink-soft max-w-[60ch]">
            We offer undergraduate programmes in Computer Science and
            Information Technology, and postgraduate programmes leading to a
            PGD or M.Sc. degree.
          </p>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="wide">
          <Eyebrow>Undergraduate</Eyebrow>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ug.map((p) => (
              <article key={p.id} className="border border-rule p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <Badge tone="muted">{p.code}</Badge>
                  <span className="font-sans text-[0.8125rem] text-ink-subtle">
                    {p.durationYears} years
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-[1.5rem] leading-snug text-ink">
                  {p.name}
                </h2>
                <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink-muted">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="warm">
        <Container size="wide">
          <Eyebrow>Postgraduate</Eyebrow>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pg.map((p) => (
              <article key={p.id} className="border border-rule bg-paper p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <Badge tone="muted">{p.code}</Badge>
                  <span className="font-sans text-[0.8125rem] text-ink-subtle">
                    {p.durationYears} {p.durationYears === 1 ? "year" : "years"}
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-[1.5rem] leading-snug text-ink">
                  {p.name}
                </h2>
                <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink-muted">
                  {p.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/past-questions" variant="secondary">
              Browse past question papers
            </Button>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="narrow">
          <p className="font-sans text-[0.875rem] text-ink-subtle">
            Looking for a specific course? See <Link href="/academics/courses" className="prose-link">Courses</Link>.
          </p>
        </Container>
      </Section>
    </>
  );
}