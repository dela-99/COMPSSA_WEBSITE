import type { Staff } from "@/types";

/**
 * Staff — academic and administrative.
 * Mock data; the service layer in Phase 2 will hydrate from Supabase.
 *
 * `isHOD: true` should never be set directly on a staff record at the data layer —
 * it is derived from the active HOD term. We include one example for the snapshot.
 */
export const staff: Staff[] = [
  {
    id: "staff-001",
    name: "Dr. Adaeze Okonkwo",
    role: "Senior Lecturer",
    rank: "Senior Lecturer",
    specialization: "Distributed Systems",
    email: "adaeze.okonkwo@example.edu",
    office: "Block A, Room 207",
    bio: "Research interests include consensus protocols, fault tolerance, and edge computing.",
    isHOD: true,
    joinedYear: 2014,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "staff-002",
    name: "Prof. Yusuf Balarabe",
    role: "Professor",
    rank: "Professor",
    specialization: "Artificial Intelligence",
    email: "yusuf.balarabe@example.edu",
    office: "Block A, Room 311",
    bio: "Works on machine learning for low-resource languages and speech.",
    joinedYear: 2008,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "staff-003",
    name: "Dr. Funmi Adegoke",
    role: "Associate Professor",
    specialization: "Human-Computer Interaction",
    email: "funmi.adegoke@example.edu",
    office: "Block B, Room 104",
    bio: "Designs and evaluates interactive systems for education and civic contexts.",
    joinedYear: 2012,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "staff-004",
    name: "Mr. Chinedu Eze",
    role: "Lecturer I",
    specialization: "Computer Networks",
    email: "chinedu.eze@example.edu",
    office: "Block B, Room 211",
    bio: "Network protocols, wireless systems, and network security.",
    joinedYear: 2017,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "staff-005",
    name: "Ms. Halima Suleiman",
    role: "Lecturer II",
    specialization: "Software Engineering",
    email: "halima.suleiman@example.edu",
    office: "Block A, Room 122",
    bio: "Software architecture, DevOps, and engineering education.",
    joinedYear: 2020,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "staff-006",
    name: "Mrs. Bilkisu Lawal",
    role: "Administrative",
    specialization: "Departmental Administration",
    email: "admin@example.edu",
    office: "Block A, Reception",
    bio: "Handles student records, timetables, and departmental correspondence.",
    joinedYear: 2015,
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
];

export const getStaffById = (id: string) => staff.find((s) => s.id === id);