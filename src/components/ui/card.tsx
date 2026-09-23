import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  as?: "div" | "article" | "li";
  interactive?: boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "as" | "href" | "children" | "className">;

/**
 * Card — institutional surface with a hairline border, never a heavy shadow.
 * When `href` is provided, renders as an anchor (not a button) — used for list links.
 */
export function Card({
  as = "div",
  interactive = false,
  href,
  className,
  children,
  ...rest
}: CardProps) {
  const base =
    "block border border-rule bg-paper transition-colors duration-200 ease-editorial";

  const interactiveClass = interactive
    ? "hover:border-rule-strong focus-within:border-ink"
    : "";

  const allClasses = cn(base, interactiveClass, "p-6 sm:p-7", className);

  if (href) {
    return (
      <article className={cn(allClasses, "group relative")}>
        {children}
        <Link
          href={href}
          className="absolute inset-0 z-10 focus:outline-none"
          aria-label="Read more"
          tabIndex={0}
        >
          <span className="sr-only">Read more</span>
        </Link>
      </article>
    );
  }

  const Tag = as as React.ElementType;
  return (
    <Tag className={allClasses} {...rest}>
      {children}
    </Tag>
  );
}

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export function CardHeader({ className, ...rest }: CardHeaderProps) {
  return <div className={cn("mb-4", className)} {...rest} />;
}

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export function CardTitle({ className, ...rest }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "font-serif text-[1.25rem] leading-snug tracking-[-0.012em] text-ink",
        className,
      )}
      {...rest}
    />
  );
}

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export function CardDescription({ className, ...rest }: CardDescriptionProps) {
  return (
    <p
      className={cn("font-sans text-[0.9375rem] leading-relaxed text-ink-muted", className)}
      {...rest}
    />
  );
}

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
export function CardFooter({ className, ...rest }: CardFooterProps) {
  return (
    <div
      className={cn(
        "mt-6 flex items-center justify-between border-t border-rule pt-4",
        className,
      )}
      {...rest}
    />
  );
}