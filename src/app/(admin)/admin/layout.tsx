import Link from "next/link";
import { AdminHeader } from "@/components/layout/admin-header";
import {
  Container,
  Eyebrow,
} from "@/components/ui";
import { adminNavigation } from "@/lib/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminHeader />
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav aria-label="Admin sections">
              <Eyebrow>Sections</Eyebrow>
              <ul className="mt-4 space-y-1">
                {adminNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-1.5 font-sans text-[0.875rem] text-ink-muted hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="lg:col-span-9">
            {children}
          </main>
        </div>
      </Container>
    </>
  );
}