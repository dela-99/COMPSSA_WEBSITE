import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { footerNavigation } from "@/lib/navigation";
import { Container, Divider, Eyebrow } from "@/components/ui";

/**
 * SiteFooter — editorial. Dark ink panel, restrained type.
 */
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule bg-paper-warm">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow className="text-ink-subtle">{siteConfig.name}</Eyebrow>
            <p className="mt-3 font-serif text-[1.125rem] leading-snug text-ink max-w-[36ch]">
              {siteConfig.tagline}
            </p>
            <address className="mt-6 font-sans not-italic text-[0.875rem] leading-relaxed text-ink-muted">
              {siteConfig.address.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-3 block">
                <a href={`mailto:${siteConfig.email}`} className="prose-link">
                  {siteConfig.email}
                </a>
              </span>
            </address>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <div key={group.label}>
                <Eyebrow className="text-ink-subtle">{group.label}</Eyebrow>
                <ul className="mt-3 space-y-1.5">
                  {group.children?.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-sans text-[0.875rem] text-ink-muted hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[0.8125rem] text-ink-subtle">
            © {new Date().getFullYear()} {siteConfig.institution}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/about" className="font-sans text-[0.8125rem] text-ink-subtle hover:text-ink">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-sans text-[0.8125rem] text-ink-subtle hover:text-ink">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/admin" className="font-sans text-[0.8125rem] text-ink-subtle hover:text-ink">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}