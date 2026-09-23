import type { NewsItem } from "@/types";

export const news: NewsItem[] = [
  {
    id: "news-1",
    slug: "convocation-2025",
    title: "Departmental Recognition at the 2025 Convocation",
    excerpt:
      "Three graduating students received departmental prizes for outstanding undergraduate research.",
    body: "The department congratulates the prize recipients of the 2025 convocation. Full citations and supervisor notes will be published in the departmental bulletin.",
    authorName: "Editorial Team",
    publishedAt: "2025-04-22T09:00:00.000Z",
    tag: "Achievement",
    createdAt: "2025-04-22T09:00:00.000Z",
    updatedAt: "2025-04-22T09:00:00.000Z",
  },
  {
    id: "news-2",
    slug: "research-grant-awarded",
    title: "Research Grant Awarded for Distributed Systems Project",
    excerpt:
      "A two-year research grant has been awarded to study fault tolerance in distributed ledgers.",
    authorName: "Research Office",
    publishedAt: "2025-03-10T12:00:00.000Z",
    tag: "Research",
    createdAt: "2025-03-10T12:00:00.000Z",
    updatedAt: "2025-03-10T12:00:00.000Z",
  },
  {
    id: "news-3",
    slug: "call-for-tutors",
    title: "Call for Student Tutors — 2025/2026 Session",
    excerpt:
      "Applications are open for student tutors across COSC 101, COSC 102, and COSC 201.",
    authorName: "HOD's Office",
    publishedAt: "2025-02-15T08:00:00.000Z",
    tag: "Opportunity",
    createdAt: "2025-02-15T08:00:00.000Z",
    updatedAt: "2025-02-15T08:00:00.000Z",
  },
];

export const getNewsBySlug = (slug: string) => news.find((n) => n.slug === slug);

export const getRecentNews = (limit = 3): NewsItem[] =>
  [...news]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);