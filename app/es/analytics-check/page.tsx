import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AnalyticsCheckClient } from "./AnalyticsCheckClient";

export const metadata: Metadata = {
  title: {
    absolute: "Analytics Check | China Trip Tools"
  },
  description: "Internal analytics diagnostics for China Trip Tools.",
  robots: {
    index: false,
    follow: false
  },
  alternates: {
    canonical: "/es/analytics-check/"
  }
};

export default function AnalyticsCheckPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="content-wrap py-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Prueba interna</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950">Analytics Check</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Usa esta página para comprobar si GA4 y Microsoft Clarity se cargan después del consentimiento.
          </p>
        </div>

        <AnalyticsCheckClient />
      </main>
      <SiteFooter />
    </div>
  );
}
