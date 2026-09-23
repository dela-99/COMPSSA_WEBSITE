import type { Course } from "@/types";
import { getProgrammeById } from "./programmes";

/**
 * Courses — a representative slice.
 * Real catalogues will be imported from the academic office feed (Phase 2+).
 */
export const courses: Course[] = [
  {
    id: "cosc-101",
    code: "COSC 101",
    title: "Introduction to Computer Science",
    programmeId: "prog-bsc-cs",
    level: 100,
    semester: "first",
    creditUnits: 3,
    description:
      "Foundational concepts: problem solving, algorithmic thinking, and an overview of computing systems.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "cosc-102",
    code: "COSC 102",
    title: "Introduction to Programming",
    programmeId: "prog-bsc-cs",
    level: 100,
    semester: "second",
    creditUnits: 3,
    description: "Structured programming, control flow, data structures, and modular design.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "cosc-201",
    code: "COSC 201",
    title: "Data Structures and Algorithms",
    programmeId: "prog-bsc-cs",
    level: 200,
    semester: "first",
    creditUnits: 3,
    description: "Lists, trees, graphs, hashing, and analysis of algorithmic complexity.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "cosc-202",
    code: "COSC 202",
    title: "Computer Architecture",
    programmeId: "prog-bsc-cs",
    level: 200,
    semester: "second",
    creditUnits: 3,
    description: "Digital logic, processor design, memory, and I/O organisation.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "cosc-301",
    code: "COSC 301",
    title: "Operating Systems",
    programmeId: "prog-bsc-cs",
    level: 300,
    semester: "first",
    creditUnits: 3,
    description: "Processes, threads, scheduling, memory management, and file systems.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "cosc-302",
    code: "COSC 302",
    title: "Database Systems",
    programmeId: "prog-bsc-cs",
    level: 300,
    semester: "second",
    creditUnits: 3,
    description: "Relational model, SQL, transactions, indexing, and database design.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "cosc-401",
    code: "COSC 401",
    title: "Software Engineering",
    programmeId: "prog-bsc-cs",
    level: 400,
    semester: "first",
    creditUnits: 3,
    description: "Software lifecycle, requirements, architecture, testing, and team workflows.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "cosc-402",
    code: "COSC 402",
    title: "Final Year Project",
    programmeId: "prog-bsc-cs",
    level: 400,
    semester: "second",
    creditUnits: 6,
    description: "Capstone project under staff supervision.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "it-101",
    code: "IT 101",
    title: "Foundations of Information Technology",
    programmeId: "prog-bsc-it",
    level: 100,
    semester: "first",
    creditUnits: 3,
    description: "Introduction to IT concepts, hardware, software, and networks.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "it-201",
    code: "IT 201",
    title: "Systems Analysis and Design",
    programmeId: "prog-bsc-it",
    level: 200,
    semester: "first",
    creditUnits: 3,
    description: "Methods and tools for analysing, modelling, and designing information systems.",
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
];

export const getCourseById = (id: string) => courses.find((c) => c.id === id);

export const getCoursesByProgramme = (programmeId: string) =>
  courses.filter((c) => c.programmeId === programmeId);

export const getCoursesForPastQuestions = () =>
  courses.map((c) => {
    const programme = getProgrammeById(c.programmeId);
    return {
      ...c,
      programmeCode: programme?.code ?? "—",
      programmeName: programme?.name ?? "",
    };
  });