/**
 * Domain types — mirror the eventual PostgreSQL schema 1:1.
 *
 * These are written by hand for Phase 1. When the Supabase backend lands,
 * the data-access functions in `src/lib/services/*` will return these shapes
 * and the UI will not need to change.
 *
 * Conventions:
 *  - Dates are stored as ISO 8601 strings (`new Date().toISOString()`).
 *  - IDs are opaque strings (UUIDs in production, slug-like in mock data).
 *  - All entities use `createdAt` / `updatedAt` audit fields.
 */

export type ISODateString = string;
export type ID = string;

/* ------------------------------------------------------------------ */
/*  People                                                              */
/* ------------------------------------------------------------------ */

export type StaffRole =
  | "Professor"
  | "Associate Professor"
  | "Senior Lecturer"
  | "Lecturer I"
  | "Lecturer II"
  | "Assistant Lecturer"
  | "Visiting Lecturer"
  | "Adjunct"
  | "Administrative";

export type Staff = {
  id: ID;
  name: string;
  role: StaffRole;
  rank?: string;
  specialization?: string;
  email?: string;
  office?: string;
  bio?: string;
  photoUrl?: string;
  isHOD?: boolean;
  joinedYear?: number;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type HODTerm = {
  id: ID;
  staffId: ID;
  /** Reference to staff record for convenience — populated by the service layer. */
  staff?: Staff;
  startDate: ISODateString;
  endDate?: ISODateString;
  note?: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

/* ------------------------------------------------------------------ */
/*  Executives                                                          */
/* ------------------------------------------------------------------ */

export type ExecutiveTermStatus = "current" | "past";

export type ExecutiveTerm = {
  id: ID;
  /** Human label, e.g. "2024/2025". */
  academicYear: string;
  startDate: ISODateString;
  endDate: ISODateString;
  status: ExecutiveTermStatus;
  members: ExecutiveMember[];
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type ExecutiveMember = {
  id: ID;
  termId: ID;
  name: string;
  position: string;
  biography?: string;
  photoUrl?: string;
  displayOrder: number;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

/* ------------------------------------------------------------------ */
/*  Academics                                                           */
/* ------------------------------------------------------------------ */

export type ProgrammeLevel = "undergraduate" | "postgraduate";

export type Programme = {
  id: ID;
  code: string;
  name: string;
  level: ProgrammeLevel;
  durationYears: number;
  description: string;
  degreeAwarded?: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type CourseLevel = 100 | 200 | 300 | 400 | 500 | 600 | 700;
export type Semester = "first" | "second";

export type Course = {
  id: ID;
  code: string;
  title: string;
  programmeId: ID;
  level: CourseLevel;
  semester: Semester;
  creditUnits: number;
  description?: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type AcademicResource = {
  id: ID;
  title: string;
  description?: string;
  url: string;
  kind: "pdf" | "link" | "doc";
  courseCode?: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

/* ------------------------------------------------------------------ */
/*  Past Questions                                                      */
/* ------------------------------------------------------------------ */

export type PastQuestion = {
  id: ID;
  courseId: ID;
  courseCode: string;
  courseTitle: string;
  programmeId: ID;
  programmeCode: string;
  level: CourseLevel;
  semester: Semester;
  academicYear: string; // "2024/2025"
  description?: string;
  fileUrl: string;
  fileSizeKb?: number;
  published: boolean;
  uploadedAt: ISODateString;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

/* ------------------------------------------------------------------ */
/*  News, Events, Research, Gallery, Feedback                           */
/* ------------------------------------------------------------------ */

export type NewsItem = {
  id: ID;
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  coverImageUrl?: string;
  authorName?: string;
  publishedAt: ISODateString;
  tag?: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type EventItem = {
  id: ID;
  slug: string;
  title: string;
  description: string;
  startsAt: ISODateString;
  endsAt?: ISODateString;
  location?: string;
  coverImageUrl?: string;
  rsvpUrl?: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type ResearchArea = {
  id: ID;
  name: string;
  summary: string;
  leadIds: ID[];
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type ResearchProject = {
  id: ID;
  title: string;
  areaId: ID;
  summary: string;
  status: "ongoing" | "completed" | "proposed";
  leadIds: ID[];
  startDate?: ISODateString;
  endDate?: ISODateString;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type Publication = {
  id: ID;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type GalleryItem = {
  id: ID;
  title: string;
  caption?: string;
  imageUrl: string;
  takenAt?: ISODateString;
  category?: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

export type Feedback = {
  id: ID;
  name: string;
  email?: string;
  category: "general" | "academic" | "platform" | "other";
  message: string;
  submittedAt: ISODateString;
  resolved: boolean;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};

/* ------------------------------------------------------------------ */
/*  Auth & RBAC (planned, not wired yet)                                */
/* ------------------------------------------------------------------ */

export type Role = "admin" | "editor" | "viewer";

export type AppUser = {
  id: ID;
  email: string;
  fullName: string;
  role: Role;
  createdAt: ISODateString;
  updatedAt: ISODateString;
};