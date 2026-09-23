import type { EventItem } from "@/types";

export const events: EventItem[] = [
  {
    id: "evt-1",
    slug: "open-day-2025",
    title: "Departmental Open Day",
    description:
      "An open day for prospective students, featuring lab tours, faculty talks, and a current-student panel.",
    startsAt: "2025-05-14T10:00:00.000Z",
    endsAt: "2025-05-14T16:00:00.000Z",
    location: "Department of Computer Science, Block A",
    rsvpUrl: "/contact",
    createdAt: "2025-03-01T00:00:00.000Z",
    updatedAt: "2025-03-01T00:00:00.000Z",
  },
  {
    id: "evt-2",
    slug: "research-symposium-2025",
    title: "Annual Research Symposium",
    description:
      "Posters and short talks from staff and postgraduate students across all departmental research areas.",
    startsAt: "2025-06-20T09:00:00.000Z",
    endsAt: "2025-06-20T17:00:00.000Z",
    location: "Faculty of Science Auditorium",
    createdAt: "2025-03-15T00:00:00.000Z",
    updatedAt: "2025-03-15T00:00:00.000Z",
  },
  {
    id: "evt-3",
    slug: "industry-mentorship-2025",
    title: "Industry Mentorship Briefing",
    description:
      "Briefing for the upcoming mentorship cohort, with alumni speakers from the department's industry partners.",
    startsAt: "2025-07-04T13:00:00.000Z",
    endsAt: "2025-07-04T15:00:00.000Z",
    location: "Block B, Lecture Theatre 2",
    createdAt: "2025-04-01T00:00:00.000Z",
    updatedAt: "2025-04-01T00:00:00.000Z",
  },
];

export const getUpcomingEvents = (limit = 4): EventItem[] => {
  const now = Date.now();
  return [...events]
    .filter((e) => new Date(e.startsAt).getTime() >= now)
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt))
    .slice(0, limit);
};