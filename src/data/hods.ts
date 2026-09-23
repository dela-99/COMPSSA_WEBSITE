import type { HODTerm } from "@/types";
import { staff, getStaffById } from "./staff";

/**
 * HOD history — chronological list of heads of department.
 * The most recent open-ended term (`endDate` undefined) is the **current** HOD.
 */
export const hodTerms: HODTerm[] = [
  {
    id: "hod-2024-current",
    staffId: "staff-001",
    startDate: "2024-09-01T00:00:00.000Z",
    note: "Currently serving as Head of Department.",
    staff: getStaffById("staff-001"),
    createdAt: "2024-09-01T00:00:00.000Z",
    updatedAt: "2025-01-01T00:00:00.000Z",
  },
  {
    id: "hod-2020-2024",
    staffId: "staff-002",
    startDate: "2020-09-01T00:00:00.000Z",
    endDate: "2024-08-31T00:00:00.000Z",
    staff: getStaffById("staff-002"),
    createdAt: "2020-09-01T00:00:00.000Z",
    updatedAt: "2024-08-31T00:00:00.000Z",
  },
  {
    id: "hod-2016-2020",
    staffId: "staff-003",
    startDate: "2016-09-01T00:00:00.000Z",
    endDate: "2020-08-31T00:00:00.000Z",
    staff: getStaffById("staff-003"),
    createdAt: "2016-09-01T00:00:00.000Z",
    updatedAt: "2020-08-31T00:00:00.000Z",
  },
];

export const getCurrentHOD = (): HODTerm | undefined => {
  const sorted = [...hodTerms].sort((a, b) => b.startDate.localeCompare(a.startDate));
  return sorted.find((t) => !t.endDate);
};

/** Returns the HOD terms ordered most-recent first. */
export const getHODHistory = (): HODTerm[] =>
  [...hodTerms].sort((a, b) => b.startDate.localeCompare(a.startDate));

/** Re-export for convenience. */
export { staff };