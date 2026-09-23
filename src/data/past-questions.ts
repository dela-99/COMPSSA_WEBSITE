import type { PastQuestion, CourseLevel, Semester } from "@/types";
import { getCourseById } from "./courses";
import { getProgrammeById } from "./programmes";

/**
 * Past question papers.
 * In Phase 2, `fileUrl` will point at Supabase Storage signed URLs.
 */
export const pastQuestions: PastQuestion[] = [
  {
    id: "pq-1",
    courseId: "cosc-101",
    courseCode: "COSC 101",
    courseTitle: "Introduction to Computer Science",
    programmeId: "prog-bsc-cs",
    programmeCode: "B.Sc. CS",
    level: 100,
    semester: "first",
    academicYear: "2023/2024",
    description: "End of semester examination.",
    fileUrl: "/files/past-questions/cosc-101-2023-2024-first.pdf",
    fileSizeKb: 412,
    published: true,
    uploadedAt: "2024-04-12T00:00:00.000Z",
    createdAt: "2024-04-12T00:00:00.000Z",
    updatedAt: "2024-04-12T00:00:00.000Z",
  },
  {
    id: "pq-2",
    courseId: "cosc-102",
    courseCode: "COSC 102",
    courseTitle: "Introduction to Programming",
    programmeId: "prog-bsc-cs",
    programmeCode: "B.Sc. CS",
    level: 100,
    semester: "second",
    academicYear: "2023/2024",
    description: "End of semester examination.",
    fileUrl: "/files/past-questions/cosc-102-2023-2024-second.pdf",
    fileSizeKb: 524,
    published: true,
    uploadedAt: "2024-09-02T00:00:00.000Z",
    createdAt: "2024-09-02T00:00:00.000Z",
    updatedAt: "2024-09-02T00:00:00.000Z",
  },
  {
    id: "pq-3",
    courseId: "cosc-201",
    courseCode: "COSC 201",
    courseTitle: "Data Structures and Algorithms",
    programmeId: "prog-bsc-cs",
    programmeCode: "B.Sc. CS",
    level: 200,
    semester: "first",
    academicYear: "2022/2023",
    description: "End of semester examination.",
    fileUrl: "/files/past-questions/cosc-201-2022-2023-first.pdf",
    fileSizeKb: 612,
    published: true,
    uploadedAt: "2023-05-10T00:00:00.000Z",
    createdAt: "2023-05-10T00:00:00.000Z",
    updatedAt: "2023-05-10T00:00:00.000Z",
  },
  {
    id: "pq-4",
    courseId: "cosc-301",
    courseCode: "COSC 301",
    courseTitle: "Operating Systems",
    programmeId: "prog-bsc-cs",
    programmeCode: "B.Sc. CS",
    level: 300,
    semester: "first",
    academicYear: "2021/2022",
    description: "End of semester examination.",
    fileUrl: "/files/past-questions/cosc-301-2021-2022-first.pdf",
    fileSizeKb: 808,
    published: true,
    uploadedAt: "2022-05-18T00:00:00.000Z",
    createdAt: "2022-05-18T00:00:00.000Z",
    updatedAt: "2022-05-18T00:00:00.000Z",
  },
  {
    id: "pq-5",
    courseId: "cosc-302",
    courseCode: "COSC 302",
    courseTitle: "Database Systems",
    programmeId: "prog-bsc-cs",
    programmeCode: "B.Sc. CS",
    level: 300,
    semester: "second",
    academicYear: "2023/2024",
    description: "End of semester examination.",
    fileUrl: "/files/past-questions/cosc-302-2023-2024-second.pdf",
    fileSizeKb: 720,
    published: true,
    uploadedAt: "2024-09-12T00:00:00.000Z",
    createdAt: "2024-09-12T00:00:00.000Z",
    updatedAt: "2024-09-12T00:00:00.000Z",
  },
  {
    id: "pq-6",
    courseId: "it-201",
    courseCode: "IT 201",
    courseTitle: "Systems Analysis and Design",
    programmeId: "prog-bsc-it",
    programmeCode: "B.Sc. IT",
    level: 200,
    semester: "first",
    academicYear: "2022/2023",
    description: "End of semester examination.",
    fileUrl: "/files/past-questions/it-201-2022-2023-first.pdf",
    fileSizeKb: 540,
    published: true,
    uploadedAt: "2023-05-22T00:00:00.000Z",
    createdAt: "2023-05-22T00:00:00.000Z",
    updatedAt: "2023-05-22T00:00:00.000Z",
  },
];

/* ------------------------------------------------------------------ */
/*  Query helpers                                                       */
/* ------------------------------------------------------------------ */

export type PastQuestionFilter = {
  query?: string;
  programmeId?: string;
  level?: CourseLevel;
  semester?: Semester;
  academicYear?: string;
  publishedOnly?: boolean;
};

export const filterPastQuestions = (
  filter: PastQuestionFilter = {},
): PastQuestion[] => {
  const { query, programmeId, level, semester, academicYear, publishedOnly = true } = filter;
  return pastQuestions.filter((pq) => {
    if (publishedOnly && !pq.published) return false;
    if (programmeId && pq.programmeId !== programmeId) return false;
    if (level !== undefined && pq.level !== level) return false;
    if (semester && pq.semester !== semester) return false;
    if (academicYear && pq.academicYear !== academicYear) return false;
    if (query) {
      const q = query.toLowerCase();
      if (
        !pq.courseCode.toLowerCase().includes(q) &&
        !pq.courseTitle.toLowerCase().includes(q)
      ) {
        return false;
      }
    }
    return true;
  });
};

export const getDistinctAcademicYears = (): string[] =>
  Array.from(new Set(pastQuestions.map((pq) => pq.academicYear))).sort((a, b) =>
    b.localeCompare(a),
  );

/** Helper: attach denormalised fields for display. */
export const hydratePastQuestion = (pq: PastQuestion) => {
  const course = getCourseById(pq.courseId);
  const programme = getProgrammeById(pq.programmeId);
  return {
    ...pq,
    course,
    programme,
  };
};