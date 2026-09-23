import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Divider,
} from "@/components/ui";
import {
  news,
  events,
  staff,
  executiveTerms,
  programmes,
  courses,
  pastQuestions,
  gallery,
} from "@/data";

export const metadata = {
  title: "Admin dashboard",
  description: "Administrative dashboard for the Department of Computer Science.",
  robots: { index: false, follow: false },
};

export default function AdminDashboardPage() {
  const counts: Array<{ label: string; value: number }> = [
    { label: "News items", value: news.length },
    { label: "Events", value: events.length },
    { label: "Staff records", value: staff.length },
    { label: "Executive terms", value: executiveTerms.length },
    { label: "Programmes", value: programmes.length },
    { label: "Courses", value: courses.length },
    { label: "Past questions", value: pastQuestions.length },
    { label: "Gallery items", value: gallery.length },
  ];

  return (
    <Section spacing="tight">
      <Container>
        <Eyebrow>Dashboard</Eyebrow>
        <Heading as="h1" size="lg" className="mt-3">
          Department overview.
        </Heading>
        <p className="mt-4 font-sans text-[0.9375rem] text-ink-muted max-w-[60ch]">
          Snapshot of content currently in the system. Authentication and
          authorisation are scheduled for Phase 2 — this dashboard is read-only
          for now.
        </p>
        <Divider className="my-8" />
        <ul className="grid grid-cols-2 gap-px bg-rule border border-rule sm:grid-cols-4">
          {counts.map((c) => (
            <li key={c.label} className="bg-paper p-5">
              <p className="font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
                {c.label}
              </p>
              <p className="mt-2 font-serif text-[2rem] leading-none text-ink">
                {c.value}
              </p>
            </li>
          ))}
        </ul>
        <Divider className="my-8" />
        <p className="font-sans text-[0.875rem] text-ink-subtle">
          Phase 1 · static mock data · auth not yet enabled.
        </p>
      </Container>
    </Section>
  );
}