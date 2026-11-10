import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedLink } from "@/components/TrackedLink";
import { guideGroups } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guías para viajar a China",
  description: "Encuentra nuestras guías en español sobre visado, preparativos, pagos, internet, trenes y viajes desde distintos países.",
  alternates: { canonical: "/es/guias/" }
};

export default function GuidesPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="content-wrap py-12 md:py-16">
            <p className="eyebrow">Guías de viaje</p>
            <h1 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">Guías para viajar a China</h1>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              Busca el tema que necesitas: entrada, preparación práctica, desplazamientos o información por país de salida.
              Si tu país no aparece aquí, empieza por las guías generales y comprueba los requisitos oficiales aplicables a tu pasaporte.
            </p>
            <TrackedLink className="button-primary mt-7 inline-flex" href="/es/checker/" eventName="guides_cta_click" eventLabel="guides_checker">
              Preparar mi primer día
            </TrackedLink>
          </div>
        </section>
        <div className="content-wrap space-y-12 py-12">
          {guideGroups.map((group) => (
            <section key={group.title} aria-label={group.title}>
              <h2 className="text-2xl font-black text-slate-950">{group.title}</h2>
              <p className="mt-2 max-w-3xl leading-7 text-slate-600">{group.description}</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.guides.map((guide) => (
                  <TrackedLink key={guide.href} className="card block p-5 transition-colors hover:border-blue-300 hover:bg-blue-50" href={guide.href} eventName="guides_link_click" eventLabel={guide.href}>
                    <h3 className="text-lg font-black text-slate-950">{guide.title}</h3>
                    <p className="mt-2 leading-6 text-slate-600">{guide.description}</p>
                    <span className="mt-4 inline-block font-bold text-blue-700">Leer guía →</span>
                  </TrackedLink>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
