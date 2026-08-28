"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function TrackedDetails({
  summary,
  children,
  className,
  eventLabel
}: {
  summary: string;
  children: ReactNode;
  className?: string;
  eventLabel: string;
}) {
  return (
    <details
      className={className}
      onToggle={(event) => {
        if (event.currentTarget.open) {
          trackEvent("faq_open", { label: eventLabel });
        }
      }}
    >
      <summary className="cursor-pointer text-base font-black text-slate-950">{summary}</summary>
      {children}
    </details>
  );
}
