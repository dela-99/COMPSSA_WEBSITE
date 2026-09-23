import type { Metadata } from "next";
import { SectionPlaceholder, makeMetadata } from "@/components/layout/section-placeholder";

export const metadata: Metadata = makeMetadata(
  "People",
  "HOD, lecturers, staff, and the student executive council.",
);

export default function PeoplePage() {
  return (
    <SectionPlaceholder
      eyebrow="People"
      title="The people of the department."
      description="HOD, lecturers and staff, and the student executive council. Browse the current term, or browse previous academic years."
    >
      <ul className="space-y-2">
        <li>· HOD</li>
        <li>· Lecturers and Staff</li>
        <li>· Current Executives</li>
        <li>· Executive History</li>
      </ul>
    </SectionPlaceholder>
  );
}