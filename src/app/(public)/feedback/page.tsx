import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Button,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Send feedback to the Department of Computer Science.",
};

export default function FeedbackPage() {
  return (
    <Section spacing="loose">
      <Container size="narrow">
        <Eyebrow>Feedback</Eyebrow>
        <Heading as="h1" size="display" className="mt-3 max-w-[18ch]">
          Send feedback.
        </Heading>
        <p className="mt-6 font-serif text-[1.125rem] leading-relaxed text-ink-soft max-w-[58ch]">
          We welcome feedback on the department, our programmes, and this
          website. The full feedback form will be wired up in Phase 2; for now,
          please use the contact page.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="secondary">Go to contact</Button>
        </div>
      </Container>
    </Section>
  );
}