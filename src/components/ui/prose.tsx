import * as React from "react";
import { cn } from "@/lib/utils";

type ProseProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Prose — long-form body copy. Editorial reading width, generous line height.
 */
export function Prose({ className, ...rest }: ProseProps) {
  return (
    <div
      className={cn(
        "prose-editorial max-w-prose",
        // Editorial body styling
        "[&_h2]:mt-10 [&_h2]:text-[1.625rem] [&_h2]:leading-snug [&_h2]:tracking-[-0.014em]",
        "[&_h3]:mt-8 [&_h3]:text-[1.25rem] [&_h3]:leading-snug",
        "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6",
        "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6",
        "[&_li]:mt-1.5",
        "[&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-ink-muted",
        "[&_code]:bg-paper-warm [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.875em]",
        className,
      )}
      {...rest}
    />
  );
}