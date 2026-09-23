import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Badge,
} from "@/components/ui";
import {
  getExecutiveTermBySlug,
  getAllExecutiveTerms,
  slugToAcademicYear,
} from "@/data";
import { MemberCard } from "@/components/public";

type Params = { params: Promise<{ year: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { year } = await params;
  const term = getExecutiveTermBySlug(year);
  if (!term) return { title: "Council not found" };
  return {
    title: `Executive Council ${term.academicYear}`,
    description: `The student executive council for the ${term.academicYear} academic session.`,
  };
}

export default async function PastExecutiveTermPage({ params }: Params) {
  const { year } = await params;
  const term = getExecutiveTermBySlug(year);
  if (!term) notFound();

  // Sibling terms for in-place year-switching UI.
  const allTerms = getAllExecutiveTerms();
  const siblings = allTerms.filter((t) => t.id !== term.id);

  return (
    <>
      <Section spacing="loose" rule>
        <Container size="wide">
          <Eyebrow>Executive history</Eyebrow>
          <Heading as="h1" size="display" className="mt-3 max-w-[18ch]">
            {term.academicYear}
          </Heading>
          <div className="mt-4 flex items-center gap-3">
            <Badge tone="muted">Past council</Badge>
            <span className="font-sans text-[0.875rem] text-ink-subtle">
              {term.members.length} members
            </span>
          </div>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="wide">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {term.members.map((m) => (
              <li key={m.id} className="list-none">
                <MemberCard
                  name={m.name}
                  position={m.position}
                  biography={m.biography}
                  photoUrl={m.photoUrl}
                />
              </li>
            ))}
          </ul>

          {/* Year switcher — keeps users in the history flow. */}
          {siblings.length > 0 && (
            <div className="mt-16 border-t border-rule pt-8">
              <Eyebrow>Browse other years</Eyebrow>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {siblings.map((t) => (
                  <li key={t.id}>
                    <Link
                      href={`/people/executives/history/${t.academicYear.replace(/\//g, "-")}`}
                      className="font-sans text-[0.875rem] text-ink-muted underline decoration-rule decoration-1 underline-offset-4 hover:text-ink hover:decoration-ink"
                    >
                      {slugToAcademicYear(t.academicYear)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}