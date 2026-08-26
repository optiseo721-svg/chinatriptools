import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "China First-Day Backup Card | China Trip Tools",
  description:
    "Responde 5 preguntas rápidas y genera un plan de respaldo para tu primer día en China. Sin registro, sin datos personales.",
  alternates: {
    canonical: "/es/checker/"
  },
  keywords: ["China First-Day Backup Card", "primer día en China", "checklist China", "viajar a China"]
};

export default function CheckerPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="content-wrap py-10">
        <div className="max-w-3xl">
          <p className="eyebrow">5 quick checks. No typing needed.</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950">
            China First-Day Backup Card
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Revisa los puntos que suelen bloquear a un viajero el primer día: conexión, pagos, hotel,
            transporte y una alternativa si algo falla.
          </p>
        </div>

        <section className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm font-bold leading-6 text-amber-950">
          ⚠️ This is for reference only. Always check official Chinese embassy/immigration websites for final rules.
        </section>

        <section className="mt-4 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
          This tool is for travel preparation only. It is not legal advice. Always verify entry, transit, payment,
          and transport requirements with official sources before booking or traveling.
        </section>

        <div className="mt-8 card p-6">
          <p className="text-base font-black text-slate-950">El formulario interactivo entra en el siguiente checkpoint.</p>
          <p className="mt-2 leading-7 text-slate-600">
            Este primer paso valida la arquitectura estática, el SEO base y la presencia del aviso legal en HTML inicial.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
