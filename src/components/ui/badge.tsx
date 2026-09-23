import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "accent" | "muted" | "ink";
};

export function Badge({ tone = "default", className, ...rest }: BadgeProps) {
  const toneClass: Record<NonNullable<BadgeProps["tone"]>, string> = {
    default: "bg-paper-warm text-ink-soft border-rule",
    accent: "bg-accent/10 text-accent-ink border-accent/30",
    muted: "bg-transparent text-ink-subtle border-rule",
    ink: "bg-ink text-paper border-ink",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-2.5 py-1 font-sans text-[0.75rem] uppercase tracking-[0.1em] rounded",
        toneClass[tone],
        className,
      )}
      {...rest}
    />
  );
}