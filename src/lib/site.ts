/**
 * Centralized site configuration.
 * Single source of truth for department identity, contact details, and nav structure.
 */

export const siteConfig = {
  name: "Department of Computer Science",
  shortName: "Computer Science",
  institution: "University",
  tagline: "An academic department of computing.",
  description:
    "The official digital home of the Department of Computer Science — programmes, people, research, and student resources.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "cs-department@example.edu",
  phone: "+000 000 0000",
  address: ["Department of Computer Science", "Faculty of Science", "University Campus"],
  founded: "Est. 19xx",
} as const;

export type SiteConfig = typeof siteConfig;