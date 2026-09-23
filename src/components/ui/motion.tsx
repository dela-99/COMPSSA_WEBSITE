"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
};

/**
 * Reveal — lightweight, performance-first entrance animation.
 * Uses IntersectionObserver and CSS transitions with zero heavy animation dependencies.
 * Fully honors `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: MotionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If browser doesn't support IntersectionObserver, reveal immediately
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const translateClasses = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  }[direction];

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        "transition-all",
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : cn("opacity-0", translateClasses),
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * StaggerContainer — wraps children and applies staggered delay automatically
 */
export function StaggerContainer({
  children,
  className,
  staggerMs = 120,
}: {
  children: React.ReactNode;
  className?: string;
  staggerMs?: number;
}) {
  const items = React.Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, index) => (
        <Reveal key={index} delay={index * staggerMs}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
