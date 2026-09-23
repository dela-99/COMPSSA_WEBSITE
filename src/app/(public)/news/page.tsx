import type { Metadata } from "next";
import Link from "next/link";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Badge,
} from "@/components/ui";
import { news } from "@/data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News",
  description: "News and announcements from the Department of Computer Science.",
};

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return (
    <>
      <Section spacing="loose" rule>
        <Container size="wide">
          <Eyebrow>News</Eyebrow>
          <Heading as="h1" size="display" className="mt-3 max-w-[18ch]">
            News and announcements.
          </Heading>
        </Container>
      </Section>
      <Section spacing="default">
        <Container size="wide">
          <ul className="divide-y divide-rule border-y border-rule">
            {sorted.map((n) => (
              <li key={n.id}>
                <Link href={`/news/${n.slug}`} className="group block py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
                      {formatDate(n.publishedAt)}
                    </span>
                    {n.tag && <Badge tone="muted">{n.tag}</Badge>}
                  </div>
                  <p className="mt-2 font-serif text-[1.5rem] leading-snug text-ink group-hover:text-accent transition-colors">
                    {n.title}
                  </p>
                  <p className="mt-2 font-sans text-[0.9375rem] leading-relaxed text-ink-muted max-w-[68ch]">
                    {n.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}