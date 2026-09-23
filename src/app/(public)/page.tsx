import Link from "next/link";
import {
  Button,
  Container,
  Section,
  Eyebrow,
  Heading,
  Badge,
  Divider,
} from "@/components/ui";
import {
  programmes,
  getRecentNews,
  getUpcomingEvents,
  getCurrentExecutiveTerm,
  getCurrentHOD,
} from "@/data";

export default function HomePage() {
  const news = getRecentNews(3);
  const events = getUpcomingEvents(3);
  const currentExecs = getCurrentExecutiveTerm();
  const currentHOD = getCurrentHOD();

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/*  Hero — editorial, restrained. No giant gradient.                 */}
      {/* ---------------------------------------------------------------- */}
      <Section spacing="loose" rule>
        <Container size="wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Eyebrow className="text-ink-subtle">
                Department of Computer Science
              </Eyebrow>
              <Heading
                as="h1"
                size="display"
                className="mt-5 max-w-[18ch]"
              >
                A department of computing, teaching and research.
              </Heading>
              <p className="mt-7 font-serif text-[1.125rem] leading-relaxed text-ink-soft max-w-[58ch]">
                We are an academic department serving undergraduate and
                postgraduate programmes in computer science and information
                technology. Our work spans teaching, research and the
                stewardship of a long-running academic community.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/academics/programmes" size="md">
                  Explore programmes
                </Button>
                <Button href="/about" size="md" variant="secondary">
                  About the department
                </Button>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="border border-rule bg-paper p-6 sm:p-7">
                <Eyebrow>At a glance</Eyebrow>
                <dl className="mt-4 space-y-4">
                  <Fact label="Founded" value="Est. 19xx" />
                  <Fact
                    label="Programmes"
                    value={`${programmes.length} active`}
                  />
                  <Fact
                    label="Current HOD"
                    value={currentHOD?.staff?.name ?? "—"}
                  />
                  <Fact
                    label="Executive term"
                    value={currentExecs?.academicYear ?? "—"}
                  />
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/*  Programmes — quick index                                         */}
      {/* ---------------------------------------------------------------- */}
      <Section spacing="default">
        <Container size="wide">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Programmes</Eyebrow>
              <Heading as="h2" size="lg" className="mt-3 max-w-[24ch]">
                Two undergraduate pathways, two postgraduate degrees.
              </Heading>
            </div>
            <Link
              href="/academics/programmes"
              className="hidden sm:inline-block font-sans text-[0.875rem] text-ink-muted hover:text-ink"
            >
              All programmes →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px bg-rule border border-rule sm:grid-cols-2 lg:grid-cols-4">
            {programmes.map((p) => (
              <Link
                key={p.id}
                href="/academics/programmes"
                className="group block bg-paper p-6 transition-colors duration-200 ease-editorial hover:bg-paper-warm"
              >
                <span className="font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
                  {p.level}
                </span>
                <p className="mt-2 font-serif text-[1.125rem] leading-snug text-ink">
                  {p.name}
                </p>
                <p className="mt-2 font-sans text-[0.8125rem] text-ink-muted">
                  {p.durationYears} {p.durationYears === 1 ? "year" : "years"} · {p.code}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/*  News & Events — two-up                                           */}
      {/* ---------------------------------------------------------------- */}
      <Section spacing="default" tone="warm">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-end justify-between gap-6">
                <Eyebrow>News</Eyebrow>
                <Link
                  href="/news"
                  className="font-sans text-[0.875rem] text-ink-muted hover:text-ink"
                >
                  All →
                </Link>
              </div>
              <ul className="mt-6 divide-y divide-rule border-y border-rule">
                {news.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/news/${item.slug}`}
                      className="group block py-5"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
                          {new Date(item.publishedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        {item.tag && (
                          <Badge tone="muted" className="font-sans text-[0.625rem]">
                            {item.tag}
                          </Badge>
                        )}
                      </div>
                      <p className="mt-2 font-serif text-[1.125rem] leading-snug text-ink group-hover:text-accent transition-colors">
                        {item.title}
                      </p>
                      <p className="mt-1 font-sans text-[0.9375rem] leading-relaxed text-ink-muted line-clamp-2">
                        {item.excerpt}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-end justify-between gap-6">
                <Eyebrow>Events</Eyebrow>
                <Link
                  href="/events"
                  className="font-sans text-[0.875rem] text-ink-muted hover:text-ink"
                >
                  All →
                </Link>
              </div>
              <ul className="mt-6 divide-y divide-rule border-y border-rule">
                {events.map((e) => (
                  <li key={e.id}>
                    <Link
                      href={`/events/${e.slug}`}
                      className="group flex items-start gap-6 py-5"
                    >
                      <div className="flex w-16 shrink-0 flex-col items-start border-r border-rule pr-4">
                        <span className="font-serif text-[1.5rem] leading-none text-ink">
                          {new Date(e.startsAt).getDate()}
                        </span>
                        <span className="mt-1 font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
                          {new Date(e.startsAt).toLocaleDateString("en-GB", {
                            month: "short",
                          })}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-serif text-[1.0625rem] leading-snug text-ink group-hover:text-accent transition-colors">
                          {e.title}
                        </p>
                        <p className="mt-1 font-sans text-[0.875rem] text-ink-muted">
                          {e.location ?? "—"}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/*  Past Questions — featured entry point                           */}
      {/* ---------------------------------------------------------------- */}
      <Section spacing="default" rule>
        <Container size="wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>Past questions</Eyebrow>
              <Heading as="h2" size="lg" className="mt-3 max-w-[20ch]">
                Searchable past question papers, by course and year.
              </Heading>
              <p className="mt-5 font-serif text-[1.0625rem] leading-relaxed text-ink-soft max-w-[60ch]">
                Filter the archive of end-of-semester examinations by programme,
                level, semester and academic year. Each entry links to a PDF
                maintained by the department.
              </p>
              <div className="mt-6">
                <Button href="/past-questions">Browse past questions</Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-rule p-6 sm:p-7">
                <Eyebrow>Filters available</Eyebrow>
                <ul className="mt-4 space-y-2 font-sans text-[0.9375rem] text-ink-soft">
                  <li>· Course</li>
                  <li>· Programme</li>
                  <li>· Level</li>
                  <li>· Semester</li>
                  <li>· Academic year</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/*  Closing CTA                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section spacing="loose" tone="ink">
        <Container size="wide">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow className="text-paper/70">Get in touch</Eyebrow>
              <Heading
                as="h2"
                size="lg"
                className="mt-3 text-paper max-w-[20ch]"
              >
                Prospective students, partners, alumni — we are reachable.
              </Heading>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <Button href="/contact" variant="secondary" className="bg-transparent text-paper border-paper hover:bg-paper hover:text-ink">
                Contact
              </Button>
              <Button href="/feedback" className="bg-paper text-ink hover:bg-paper-warm">
                Send feedback
              </Button>
            </div>
          </div>
          <Divider className="mt-16 bg-paper/20" />
        </Container>
      </Section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3 last:border-b-0 last:pb-0">
      <dt className="font-sans text-[0.8125rem] uppercase tracking-[0.14em] text-ink-subtle">
        {label}
      </dt>
      <dd className="font-serif text-[0.95rem] text-ink text-right">{value}</dd>
    </div>
  );
}