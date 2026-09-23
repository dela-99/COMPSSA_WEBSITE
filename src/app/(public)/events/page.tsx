import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
} from "@/components/ui";
import { events } from "@/data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events",
  description: "Departmental events.",
};

export default function EventsPage() {
  const sorted = [...events].sort((a, b) => a.startsAt.localeCompare(b.startsAt));
  return (
    <>
      <Section spacing="loose" rule>
        <Container size="wide">
          <Eyebrow>Events</Eyebrow>
          <Heading as="h1" size="display" className="mt-3 max-w-[18ch]">
            Departmental events.
          </Heading>
        </Container>
      </Section>
      <Section spacing="default">
        <Container size="wide">
          <ul className="divide-y divide-rule border-y border-rule">
            {sorted.map((e) => (
              <li key={e.id} className="grid grid-cols-12 gap-6 py-6">
                <div className="col-span-12 sm:col-span-3">
                  <p className="font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
                    {formatDate(e.startsAt)}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <p className="font-serif text-[1.25rem] leading-snug text-ink">
                    {e.title}
                  </p>
                  <p className="mt-1 font-sans text-[0.875rem] text-ink-muted">
                    {e.location ?? "—"}
                  </p>
                  <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink-soft max-w-[68ch]">
                    {e.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}