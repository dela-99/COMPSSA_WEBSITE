"use client";

import * as React from "react";
import Link from "next/link";
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Badge,
  Button,
} from "@/components/ui";
import {
  filterPastQuestions,
  getDistinctAcademicYears,
  programmes,
} from "@/data";
import type { CourseLevel, Semester } from "@/types";

export default function PastQuestionsPage() {
  const [query, setQuery] = React.useState("");
  const [programmeId, setProgrammeId] = React.useState<string>("");
  const [level, setLevel] = React.useState<CourseLevel | "">("");
  const [semester, setSemester] = React.useState<Semester | "">("");
  const [academicYear, setAcademicYear] = React.useState<string>("");

  const years = getDistinctAcademicYears();
  const levels: CourseLevel[] = [100, 200, 300, 400, 500];

  const results = filterPastQuestions({
    query,
    programmeId: programmeId || undefined,
    level: level === "" ? undefined : level,
    semester: semester === "" ? undefined : semester,
    academicYear: academicYear || undefined,
  });

  function reset() {
    setQuery("");
    setProgrammeId("");
    setLevel("");
    setSemester("");
    setAcademicYear("");
  }

  return (
    <>
      <Section spacing="loose" rule>
        <Container size="wide">
          <Eyebrow>Past questions</Eyebrow>
          <Heading as="h1" size="display" className="mt-3 max-w-[22ch]">
            An archive of past examination papers.
          </Heading>
          <p className="mt-6 font-serif text-[1.125rem] leading-relaxed text-ink-soft max-w-[60ch]">
            Filter by course, programme, level, semester or academic year.
            Every entry links to a PDF maintained by the department.
          </p>
        </Container>
      </Section>

      <Section spacing="default">
        <Container size="wide">
          {/* Filters */}
          <div className="border border-rule bg-paper p-6 sm:p-8">
            <Eyebrow>Filters</Eyebrow>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-12">
              <Field label="Search" className="md:col-span-4">
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Course code or title"
                  className="form-input"
                />
              </Field>
              <Field label="Programme" className="md:col-span-3">
                <select
                  value={programmeId}
                  onChange={(e) => setProgrammeId(e.target.value)}
                  className="form-input"
                >
                  <option value="">All programmes</option>
                  {programmes.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.code}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Level" className="md:col-span-2">
                <select
                  value={level === "" ? "" : String(level)}
                  onChange={(e) =>
                    setLevel(e.target.value ? (Number(e.target.value) as CourseLevel) : "")
                  }
                  className="form-input"
                >
                  <option value="">All</option>
                  {levels.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Semester" className="md:col-span-2">
                <select
                  value={semester}
                  onChange={(e) =>
                    setSemester(e.target.value as Semester | "")
                  }
                  className="form-input"
                >
                  <option value="">All</option>
                  <option value="first">First</option>
                  <option value="second">Second</option>
                </select>
              </Field>
              <Field label="Academic year" className="md:col-span-1">
                <select
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                  className="form-input"
                >
                  <option value="">All</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="font-sans text-[0.875rem] text-ink-muted">
                {results.length} {results.length === 1 ? "result" : "results"}
              </p>
              <Button variant="ghost" size="sm" onClick={reset}>
                Reset
              </Button>
            </div>
          </div>

          {/* Results */}
          <ul className="mt-10 divide-y divide-rule border-y border-rule">
            {results.length === 0 && (
              <li className="py-10 text-center">
                <p className="font-serif text-[1.125rem] text-ink-muted">
                  No past questions match your filters.
                </p>
              </li>
            )}
            {results.map((pq) => (
              <li
                key={pq.id}
                className="grid grid-cols-12 gap-4 py-6"
              >
                <div className="col-span-12 sm:col-span-3">
                  <p className="font-mono text-[0.875rem] text-ink">{pq.courseCode}</p>
                  <p className="mt-1 font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
                    {pq.academicYear}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <p className="font-serif text-[1.125rem] leading-snug text-ink">
                    {pq.courseTitle}
                  </p>
                  {pq.description && (
                    <p className="mt-1 font-sans text-[0.875rem] text-ink-muted">
                      {pq.description}
                    </p>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-3 flex flex-wrap items-start gap-2 sm:justify-end">
                  <Badge tone="muted">{pq.programmeCode}</Badge>
                  <Badge tone="muted">L{pq.level}</Badge>
                  <Badge tone="muted">
                    {pq.semester === "first" ? "1st" : "2nd"} sem
                  </Badge>
                  <Link
                    href={pq.fileUrl}
                    className="mt-2 inline-flex h-9 items-center px-3 border border-ink font-sans text-[0.8125rem] text-ink hover:bg-ink hover:text-paper transition-colors sm:mt-0"
                  >
                    Download PDF
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Inline form styles — Tailwind v3 not yet @apply-able across `<input>`. */}
      <style>{`
        .form-input {
          width: 100%;
          height: 40px;
          padding: 0 12px;
          border: 1px solid rgb(var(--rule));
          background: rgb(var(--background));
          font-family: var(--font-sans), system-ui, sans-serif;
          font-size: 0.9375rem;
          color: rgb(var(--foreground));
          transition: border-color 200ms ease;
          border-radius: 2px;
        }
        .form-input::placeholder { color: rgba(11,11,10,0.45); }
        .form-input:focus { outline: none; border-color: rgb(var(--foreground)); }
      `}</style>
    </>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="block mb-1.5 font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-subtle">
        {label}
      </span>
      {children}
    </label>
  );
}