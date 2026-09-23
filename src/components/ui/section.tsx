import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Visual density — `default` is comfortable, `tight` reduces vertical padding. */
  spacing?: "default" | "tight" | "loose";
  /** Render a top hairline divider above the section. */
  rule?: boolean;
  /** Background variant. `default` is paper, `warm` is paper-warm. */
  tone?: "default" | "warm" | "ink";
};

/**
 * Section — top-level layout block used by every public page.
 * Centralises vertical rhythm and rule/background variants.
 */
export function Section({
  spacing = "default",
  rule = false,
  tone = "default",
  className,
  children,
  ...rest
}: SectionProps) {
  const spacingClass =
    spacing === "tight"
      ? "py-12 sm:py-16"
      : spacing === "loose"
        ? "py-24 sm:py-32"
        : "py-16 sm:py-24";

  const toneClass =
    tone === "warm"
      ? "bg-paper-warm"
      : tone === "ink"
        ? "bg-ink text-paper"
        : "bg-paper";

  return (
    <section
      className={cn(spacingClass, toneClass, rule && "border-t border-rule", className)}
      {...rest}
    >
      {children}
    </section>
  );
}