import type { GalleryItem } from "@/types";

/**
 * Gallery — light list for Phase 1.
 * Real implementation will use Supabase Storage with optimised image delivery.
 *
 * `imageUrl` uses a placeholder gradient / solid pattern (rendered by GalleryItem)
 * until images are uploaded.
 */
export const gallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Convocation 2024",
    caption: "Graduating class of 2024.",
    imageUrl: "/images/gallery/convocation-2024.jpg",
    takenAt: "2024-12-05T00:00:00.000Z",
    category: "Events",
    createdAt: "2024-12-06T00:00:00.000Z",
    updatedAt: "2024-12-06T00:00:00.000Z",
  },
  {
    id: "gal-2",
    title: "Open Day Lab Tours",
    caption: "Prospective students exploring the systems lab.",
    imageUrl: "/images/gallery/open-day.jpg",
    takenAt: "2025-05-14T00:00:00.000Z",
    category: "Events",
    createdAt: "2025-05-15T00:00:00.000Z",
    updatedAt: "2025-05-15T00:00:00.000Z",
  },
  {
    id: "gal-3",
    title: "Research Symposium",
    caption: "Posters and talks from staff and postgraduates.",
    imageUrl: "/images/gallery/symposium.jpg",
    takenAt: "2025-06-20T00:00:00.000Z",
    category: "Research",
    createdAt: "2025-06-21T00:00:00.000Z",
    updatedAt: "2025-06-21T00:00:00.000Z",
  },
  {
    id: "gal-4",
    title: "Hackathon Winners",
    caption: "Final presentations at the departmental hackathon.",
    imageUrl: "/images/gallery/hackathon.jpg",
    takenAt: "2025-03-22T00:00:00.000Z",
    category: "Students",
    createdAt: "2025-03-23T00:00:00.000Z",
    updatedAt: "2025-03-23T00:00:00.000Z",
  },
];