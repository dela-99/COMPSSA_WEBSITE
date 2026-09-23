import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "md" | "sm";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-sans text-[0.9375rem] font-medium " +
  "leading-none transition-colors duration-200 ease-editorial " +
  "disabled:cursor-not-allowed disabled:opacity-60";

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 rounded",
  sm: "h-9 px-4 rounded text-[0.875rem]",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink-soft border border-ink",
  secondary:
    "bg-paper text-ink border border-rule-strong hover:border-ink",
  ghost:
    "bg-transparent text-ink hover:bg-paper-warm border border-transparent",
  link:
    "h-auto p-0 bg-transparent text-ink underline decoration-rule decoration-1 underline-offset-4 " +
    "hover:decoration-accent hover:text-accent rounded-none border-0",
};

/**
 * Button — polymorphic. Renders an anchor when `href` is set, else a button.
 * For external links, pass `external`.
 */
export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    props.className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, className: _c, children, ...rest } =
      props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={className}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    variant: _v,
    size: _s,
    className: _c,
    children,
    ...rest
  } = props as ButtonAsButton;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}