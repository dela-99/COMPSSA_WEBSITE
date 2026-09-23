import type { ExecutiveTerm, ExecutiveMember } from "@/types";

/**
 * Executive terms — one entry per academic year.
 *
 * The `current` term is the open one with `status: "current"`.
 * All others are historical.
 *
 * The public site renders:
 *   - The current term on /people/executives (current executive council).
 *   - A chronological list of past terms on /people/executives.
 *   - A dedicated page per past term at /people/executives/history/[slug].
 *
 * Architecture: a term contains N members. There is no separate
 * "current" or "past" collection — current/past is derived from
 * `ExecutiveTerm.status` at the data layer.
 */

/* ------------------------------------------------------------------ */
/*  Slug helpers                                                        */
/* ------------------------------------------------------------------ */

/** "2024/2025" → "2024-2025" (Next.js path segments can't contain "/"). */
export const academicYearToSlug = (academicYear: string): string =>
  academicYear.replace(/\//g, "-");

/** "2024-2025" → "2024/2025". Idempotent for values that already use "/". */
export const slugToAcademicYear = (slug: string): string =>
  slug.replace(/-/g, "/");

/* ------------------------------------------------------------------ */
/*  Member builder                                                      */
/* ------------------------------------------------------------------ */

type MemberSeed = {
  name: string;
  position: string;
  biography?: string;
  /** A short accent token used by the avatar component (e.g. initials + tone). */
  accent?: "ink" | "accent" | "warm";
  displayOrder: number;
};

const members = (
  termId: string,
  rows: MemberSeed[],
  createdAt: string,
): ExecutiveMember[] =>
  rows.map((m, i) => ({
    id: `${termId}-${i + 1}`,
    termId,
    name: m.name,
    position: m.position,
    biography: m.biography,
    photoUrl: undefined,
    displayOrder: m.displayOrder,
    createdAt,
    updatedAt: createdAt,
  }));

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

export const executiveTerms: ExecutiveTerm[] = [
  {
    id: "exec-2025-2026",
    academicYear: "2025/2026",
    startDate: "2025-09-01T00:00:00.000Z",
    endDate: "2026-08-31T00:00:00.000Z",
    status: "current",
    members: members(
      "exec-2025-2026",
      [
        {
          name: "Tobi Akinwale",
          position: "President",
          biography:
            "Final-year undergraduate focused on systems programming and the department's open-source initiatives.",
          accent: "ink",
          displayOrder: 1,
        },
        {
          name: "Sade Ojo",
          position: "Vice President",
          biography:
            "Leads the student research circles and represents the council at faculty meetings.",
          accent: "ink",
          displayOrder: 2,
        },
        {
          name: "Ibrahim Danjuma",
          position: "General Secretary",
          biography: "Coordinates meetings, minutes, and council correspondence.",
          accent: "warm",
          displayOrder: 3,
        },
        {
          name: "Ngozi Eke",
          position: "Financial Secretary",
          biography: "Manages the council budget, dues, and financial reporting.",
          accent: "warm",
          displayOrder: 4,
        },
        {
          name: "David Olu",
          position: "Organising Secretary",
          biography: "Owns the calendar of departmental student events and logistics.",
          accent: "accent",
          displayOrder: 5,
        },
        {
          name: "Aisha Bello",
          position: "Public Relations Officer",
          biography:
            "Handles the council's communications, announcements, and alumni outreach.",
          accent: "accent",
          displayOrder: 6,
        },
        {
          name: "Fatima Aliyu",
          position: "Welfare Officer",
          biography: "Coordinates student welfare, peer-support, and the open-door hour.",
          accent: "warm",
          displayOrder: 7,
        },
      ],
      "2025-09-01T00:00:00.000Z",
    ),
    createdAt: "2025-09-01T00:00:00.000Z",
    updatedAt: "2025-09-01T00:00:00.000Z",
  },
  {
    id: "exec-2024-2025",
    academicYear: "2024/2025",
    startDate: "2024-09-01T00:00:00.000Z",
    endDate: "2025-08-31T00:00:00.000Z",
    status: "past",
    members: members(
      "exec-2024-2025",
      [
        {
          name: "Ifeanyi Umeh",
          position: "President",
          biography: "Led the council through the 2024/2025 session.",
          accent: "ink",
          displayOrder: 1,
        },
        {
          name: "Zainab Yusuf",
          position: "Vice President",
          accent: "ink",
          displayOrder: 2,
        },
        {
          name: "Samuel Addo",
          position: "General Secretary",
          accent: "warm",
          displayOrder: 3,
        },
        {
          name: "Kemi Awe",
          position: "Financial Secretary",
          accent: "warm",
          displayOrder: 4,
        },
        {
          name: "Ahmed Tukur",
          position: "Organising Secretary",
          accent: "accent",
          displayOrder: 5,
        },
        {
          name: "Lola Akin",
          position: "Public Relations Officer",
          accent: "accent",
          displayOrder: 6,
        },
      ],
      "2024-09-01T00:00:00.000Z",
    ),
    createdAt: "2024-09-01T00:00:00.000Z",
    updatedAt: "2025-08-31T00:00:00.000Z",
  },
  {
    id: "exec-2023-2024",
    academicYear: "2023/2024",
    startDate: "2023-09-01T00:00:00.000Z",
    endDate: "2024-08-31T00:00:00.000Z",
    status: "past",
    members: members(
      "exec-2023-2024",
      [
        { name: "Esther Olawale", position: "President", accent: "ink", displayOrder: 1 },
        { name: "Bashir Sani", position: "Vice President", accent: "ink", displayOrder: 2 },
        { name: "Lola Akin", position: "General Secretary", accent: "warm", displayOrder: 3 },
        { name: "Ahmed Tukur", position: "Financial Secretary", accent: "warm", displayOrder: 4 },
        { name: "Tomi Adeleke", position: "PRO", accent: "accent", displayOrder: 5 },
      ],
      "2023-09-01T00:00:00.000Z",
    ),
    createdAt: "2023-09-01T00:00:00.000Z",
    updatedAt: "2024-08-31T00:00:00.000Z",
  },
  {
    id: "exec-2022-2023",
    academicYear: "2022/2023",
    startDate: "2022-09-01T00:00:00.000Z",
    endDate: "2023-08-31T00:00:00.000Z",
    status: "past",
    members: members(
      "exec-2022-2023",
      [
        { name: "Femi Arowolo", position: "President", accent: "ink", displayOrder: 1 },
        { name: "Nkechi Obi", position: "Vice President", accent: "ink", displayOrder: 2 },
        { name: "Yusuf Garba", position: "General Secretary", accent: "warm", displayOrder: 3 },
        { name: "Bisi Falade", position: "Financial Secretary", accent: "warm", displayOrder: 4 },
      ],
      "2022-09-01T00:00:00.000Z",
    ),
    createdAt: "2022-09-01T00:00:00.000Z",
    updatedAt: "2023-08-31T00:00:00.000Z",
  },
];

/* ------------------------------------------------------------------ */
/*  Queries                                                             */
/* ------------------------------------------------------------------ */

export const getCurrentExecutiveTerm = (): ExecutiveTerm | undefined =>
  executiveTerms.find((t) => t.status === "current");

export const getPastExecutiveTerms = (): ExecutiveTerm[] =>
  executiveTerms
    .filter((t) => t.status === "past")
    .sort((a, b) => b.academicYear.localeCompare(a.academicYear));

/** All terms (current + past), most recent first. */
export const getAllExecutiveTerms = (): ExecutiveTerm[] =>
  [...executiveTerms].sort((a, b) => b.academicYear.localeCompare(a.academicYear));

export const getExecutiveTermByAcademicYear = (year: string) =>
  executiveTerms.find((t) => t.academicYear === year);

/** Resolve by URL slug — accepts either `2024-2025` or the legacy `2024/2025`. */
export const getExecutiveTermBySlug = (slug: string): ExecutiveTerm | undefined => {
  const normalised = slug.includes("/") ? slug : slugToAcademicYear(slug);
  return executiveTerms.find((t) => t.academicYear === normalised);
};