import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Qué cookies y almacenamiento local puede usar China Trip Tools para recordar preferencias y cargar analítica opcional.",
  alternates: {
    canonical: "/es/cookies/"
  }
};

export default function CookiesPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="content-wrap py-10">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow">Cookies</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950">Política de cookies</h1>
          <p className="mt-3 text-sm font-semibold text-slate-500">Última revisión: 27 de agosto de 2026</p>
          <div className="mt-8 grid gap-7 leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-black text-slate-950">Qué usamos</h2>
              <p className="mt-3">
                Usamos almacenamiento local para recordar si aceptaste o rechazaste las analíticas. Esta preferencia evita
                mostrarte el aviso en cada visita.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Necesarias</h2>
              <p className="mt-3">
                Las funciones necesarias mantienen el sitio usable y recuerdan tu elección de privacidad. No se usan para
                publicidad personalizada.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Analíticas opcionales</h2>
              <p className="mt-3">
                Si aceptas, podemos cargar Google Analytics 4 y Microsoft Clarity para medir visitas, clics y problemas de
                usabilidad. Si rechazas, estas herramientas no se cargan desde el sitio.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Cambiar tu elección</h2>
              <p className="mt-3">
                Puedes borrar los datos del sitio desde la configuración de tu navegador para volver a ver el aviso de
                privacidad y elegir de nuevo.
              </p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
