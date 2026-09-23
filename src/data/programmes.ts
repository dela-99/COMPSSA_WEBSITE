import type { Programme } from "@/types";

/**
 * Programmes — undergraduate + postgraduate offerings.
 * Mock data. Replace with `getProgrammes()` service in Phase 2.
 */
export const programmes: Programme[] = [
  {
    id: "prog-bsc-cs",
    code: "B.Sc. CS",
    name: "Bachelor of Science in Computer Science",
    level: "undergraduate",
    durationYears: 4,
    degreeAwarded: "B.Sc. (Computer Science)",
    description:
      "A four-year undergraduate programme covering theoretical foundations, software engineering, algorithms, systems, and applied computing.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "prog-bsc-it",
    code: "B.Sc. IT",
    name: "Bachelor of Science in Information Technology",
    level: "undergraduate",
    durationYears: 4,
    degreeAwarded: "B.Sc. (Information Technology)",
    description:
      "A four-year undergraduate programme emphasising information systems, networks, databases, and the design of technology solutions for organisations.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "pgd-cs",
    code: "PGD CS",
    name: "Postgraduate Diploma in Computer Science",
    level: "postgraduate",
    durationYears: 1,
    degreeAwarded: "PGD (Computer Science)",
    description:
      "A one-year postgraduate diploma intended as a bridge between undergraduate study and full master's-level research.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "msc-cs",
    code: "M.Sc. CS",
    name: "Master of Science in Computer Science",
    level: "postgraduate",
    durationYears: 2,
    degreeAwarded: "M.Sc. (Computer Science)",
    description:
      "A two-year master's programme with coursework and a research thesis, offered across the department's active research areas.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
];

export const getProgrammeById = (id: string) =>
  programmes.find((p) => p.id === id);