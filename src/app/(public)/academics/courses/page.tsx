import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Badge,
} from "@/components/ui";
import { courses, getProgrammeById } from "@/data";

export const metadata: Metadata = {
  title: "Courses",
  description: "Courses offered across the department's programmes.",
};

export default function CoursesPage() {
  const sorted = [...courses].sort((a, b) =>
    a.code.localeCompare(b.code),
  );

  return (
    <Section spacing="loose" rule>
      <Container size="wide">
        <Eyebrow>Academics</Eyebrow>
        <Heading as="h1" size="display" className="mt-3 max-w-[20ch]">
          Courses.
        </Heading>
        <p className="mt-6 font-serif text-[1.125rem] leading-relaxed text-ink-soft max-w-[60ch]">
          A representative catalogue of courses across our programmes. The full
          catalogue is maintained by the academic office.
        </p>

        <div className="mt-12 border-y border-rule">
          <ul className="divide-y divide-rule">
            {sorted.map((c) => {
              const programme = getProgrammeById(c.programmeId);
              return (
                <li
                  key={c.id}
                  className="grid grid-cols-12 gap-4 py-5"
                >
                  <div className="col-span-12 sm:col-span-3">
                    <p className="font-mono text-[0.875rem] text-ink">
                      {c.code}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <p className="font-serif text-[1.0625rem] leading-snug text-ink">
                      {c.title}
                    </p>
                    <p className="mt-1 font-sans text-[0.8125rem] text-ink-subtle">
                      {programme?.name}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-span-3 flex flex-wrap items-start gap-2 sm:justify-end">
                    <Badge tone="muted">Level {c.level}</Badge>
                    <Badge tone="muted">
                      {c.semester === "first" ? "1st sem" : "2nd sem"}
                    </Badge>
                    <Badge tone="muted">{c.creditUnits} CU</Badge>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}