import type { Metadata } from "next";
import { SectionPlaceholder, makeMetadata } from "@/components/layout/section-placeholder";

export const metadata: Metadata = makeMetadata(
  "Alumni",
  "Alumni of the Department of Computer Science.",
);

export default function AlumniPage() {
  return (
    <SectionPlaceholder
      eyebrow="Alumni"
      title="Alumni of the department."
      description="The Alumni section brings together graduating classes, notable alumni, and alumni events. Content for this section is being prepared for Phase 2."
    >
      <ul className="space-y-2">
        <li>· Notable alumni</li>
        <li>· Class archives</li>
        <li>· Alumni events</li>
      </ul>
    </SectionPlaceholder>
  );
}