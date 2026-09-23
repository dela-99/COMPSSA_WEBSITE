import type { Metadata } from "next";
import { SectionPlaceholder, makeMetadata } from "@/components/layout/section-placeholder";

export const metadata: Metadata = makeMetadata(
  "Academics",
  "Programmes, courses, and academic resources of the Department of Computer Science.",
);

export default function AcademicsPage() {
  return (
    <SectionPlaceholder
      eyebrow="Academics"
      title="Programmes, courses, and academic resources."
      description="The Academics section catalogues what we teach and the resources we publish. The pages below are being prepared for Phase 2."
    >
      <ul className="space-y-2">
        <li>· Programmes</li>
        <li>· Courses</li>
        <li>· Academic Resources</li>
      </ul>
    </SectionPlaceholder>
  );
}