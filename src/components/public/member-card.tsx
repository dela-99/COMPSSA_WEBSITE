import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type AccentTone = "ink" | "accent" | "warm";

export type MemberCardProps = {
  name: string;
  position: string;
  biography?: string;
  photoUrl?: string;
  accent?: AccentTone;
  className?: string;
};

/**
 * MemberCard — single source of truth for rendering an executive member
 * on the public website. Used by both the current council and history pages.
 *
 * Visual: a hairline bordered surface, a square avatar (photo when supplied,
 * typographic initials otherwise), then position + name + optional bio.
 *
 * Sizes responsively — the avatar scales down on small screens.
 */
export function MemberCard({
  name,
  position,
  biography,
  photoUrl,
  accent = "ink",
  className,
}: MemberCardProps) {
  const initials = getInitials(name);

  return (
    <article
      className={cn(
        "group flex h-full flex-col border border-rule bg-paper p-6 transition-colors duration-200 ease-editorial hover:border-rule-strong",
        className,
      )}
    >
      <div className="flex items-start gap-5">
        <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
          {photoUrl ? (
            <AvatarImage src={photoUrl} alt={name} />
          ) : null}
          <AvatarFallback
            aria-hidden
            className={cn(
              "font-serif text-[1.125rem] sm:text-[1.375rem] tracking-[-0.012em]",
              accent === "ink" && "bg-ink text-paper",
              accent === "accent" && "bg-accent text-paper",
              accent === "warm" && "bg-paper-warm text-ink",
            )}
          >
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1 pt-1">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.14em] text-ink-subtle">
            {position}
          </p>
          <h3 className="mt-1.5 font-serif text-[1.125rem] sm:text-[1.25rem] leading-snug tracking-[-0.012em] text-ink text-balance">
            {name}
          </h3>
        </div>
      </div>

      {biography && (
        <p className="mt-5 font-sans text-[0.9375rem] leading-relaxed text-ink-muted text-pretty">
          {biography}
        </p>
      )}
    </article>
  );
}

/** Two-letter initials from a full name: "Tobi Akinwale" → "TA". */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "—";
  if (parts.length === 1) {
    const first = parts[0]!;
    return first.slice(0, 2).toUpperCase();
  }
  const a = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (a + last).toUpperCase();
}