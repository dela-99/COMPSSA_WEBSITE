import Link from "next/link";
import { Container, Divider } from "@/components/ui";

/**
 * AdminHeader — minimal top bar for /admin/*.
 * Auth, user menu and notifications land here in Phase 2.
 */
export function AdminHeader() {
  return (
    <header className="border-b border-rule bg-paper">
      <Container size="wide">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="font-sans text-[0.875rem] uppercase tracking-[0.14em] text-ink"
            >
              Admin
            </Link>
            <span aria-hidden className="h-4 w-px bg-rule" />
            <Link
              href="/"
              className="font-sans text-[0.8125rem] text-ink-muted hover:text-ink"
            >
              ← Public site
            </Link>
          </div>
          <nav aria-label="Admin top" className="hidden md:block">
            <ul className="flex items-center gap-5">
              <li className="font-sans text-[0.8125rem] text-ink-subtle">
                Signed in as <span className="text-ink">—</span>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
      <Divider />
    </header>
  );
}