import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SearchResults } from "@/components/SearchResults";

export const metadata: Metadata = {
  title: "Buscar en el sitio",
  description: "Encuentra guías y herramientas para preparar tu viaje a China.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/es/buscar/" }
};

export default function SearchPage() {
  return <div className="page-shell"><SiteHeader /><main><SearchResults /></main><SiteFooter /></div>;
}
