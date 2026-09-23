import type { Metadata } from "next";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
} from "@/components/ui";
import { gallery } from "@/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of the Department of Computer Science.",
};

export default function GalleryPage() {
  return (
    <>
      <Section spacing="loose" rule>
        <Container size="wide">
          <Eyebrow>Gallery</Eyebrow>
          <Heading as="h1" size="display" className="mt-3 max-w-[18ch]">
            Photo gallery.
          </Heading>
          <p className="mt-6 font-serif text-[1.125rem] leading-relaxed text-ink-soft max-w-[60ch]">
            A selection of photographs from departmental events and the life of
            the department.
          </p>
        </Container>
      </Section>
      <Section spacing="default">
        <Container size="wide">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((g) => (
              <li key={g.id}>
                <figure className="border border-rule bg-paper">
                  <div
                    aria-hidden
                    className="aspect-[4/3] w-full bg-paper-warm"
                  />
                  <figcaption className="p-3">
                    <p className="font-serif text-[0.95rem] leading-snug text-ink">
                      {g.title}
                    </p>
                    {g.caption && (
                      <p className="mt-1 font-sans text-[0.75rem] text-ink-subtle">
                        {g.caption}
                      </p>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}