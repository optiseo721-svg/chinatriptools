"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  children,
  className,
  eventName = "seo_cta_click",
  eventLabel
}: {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventLabel: string;
}) {
  return (
    <Link className={className} href={href} onClick={() => trackEvent(eventName, { label: eventLabel, href })}>
      {children}
    </Link>
  );
}
