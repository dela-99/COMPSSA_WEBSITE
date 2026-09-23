import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Badge,
} from "@/components/ui";
import { getCurrentHOD, getHODHistory } from "@/data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Head of Department",
  description: "The current Head of the Department of Computer Science.",
};

export default function HODPage() {
  const current = getCurrentHOD();
  const history = getHODHistory().filter((t) => t.endDate); // past only

  return (
    <>
      <Section spacing="loose" rule>
        <Container size="wide">
          <Eyebrow>People</Eyebrow>
          <Heading as="h1" size="display" className="mt-3 max-w-[18ch]">
            Head of Department.
          </Heading>
        </Container>
      </Section>

      {current?.staff && (
        <Section spacing="default">
          <Container size="wide">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="aspect-[4/5] w-full border border-rule bg-paper-warm" aria-hidden />
              </div>
              <div className="lg:col-span-8">
                <Badge tone="accent">Current HOD</Badge>
                <Heading as="h2" size="lg" className="mt-4">
                  {current.staff.name}
                </Heading>
                <p className="mt-2 font-sans text-[0.9375rem] text-ink-muted">
                  {current.staff.role}
                  {current.staff.specialization
                    ? ` — ${current.staff.specialization}`
                    : ""}
                </p>
                <p className="mt-6 font-serif text-[1.0625rem] leading-relaxed text-ink-soft max-w-[60ch]">
                  {current.staff.bio}
                </p>
                <p className="mt-6 font-sans text-[0.8125rem] text-ink-subtle">
                  In office since {formatDate(current.startDate)}
                </p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      <Section spacing="default" tone="warm" rule>
        <Container size="wide">
          <Eyebrow>HOD history</Eyebrow>
          <Heading as="h2" size="lg" className="mt-3 max-w-[24ch]">
            Previous Heads of Department.
          </Heading>
          <ul className="mt-10 divide-y divide-rule border-y border-rule">
            {history.map((t) => (
              <li key={t.id} className="grid grid-cols-12 gap-4 py-5">
                <p className="col-span-12 sm:col-span-3 font-mono text-[0.875rem] text-ink">
                  {formatDate(t.startDate)} – {t.endDate ? formatDate(t.endDate) : "Present"}
                </p>
                <p className="col-span-12 sm:col-span-9 font-serif text-[1.0625rem] text-ink">
                  {t.staff?.name}
                  <span className="ml-3 font-sans text-[0.875rem] text-ink-muted">
                    {t.staff?.role}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}