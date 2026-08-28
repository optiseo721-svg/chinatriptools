"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function TrackedExternalLink({
  href,
  children,
  className,
  eventName = "official_link_click",
  eventLabel
}: {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventLabel: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent(eventName, { label: eventLabel, href })}
    >
      {children}
    </a>
  );
}
