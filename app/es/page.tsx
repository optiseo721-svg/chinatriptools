import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, Plane, ShieldCheck, Smartphone } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    absolute: "China Trip Tools | Plan de respaldo para tu primer día en China"
  },
  description:
    "Crea una tarjeta de respaldo para tu primer día en China. Revisa internet, pagos, hotel, transporte y enlaces oficiales antes de aterrizar.",
  alternates: {
    canonical: "/es/"
  },
  keywords: ["viajar a China", "preparar viaje a China", "primer día en China", "China Trip Tools"]
};

export default function SpanishHomePage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <section className="bg-white">
          <div className="content-wrap grid gap-8 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16">
            <div>
              <p className="eyebrow">China Trip Tools / ES</p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                Crea tu plan de respaldo para el primer día en China en 5 minutos.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Responde unas preguntas rápidas y recibe una tarjeta para guardar antes de aterrizar: datos móviles,
                pagos, hotel, transporte y enlaces oficiales.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary" href="/es/checker/">
                  <ClipboardCheck aria-hidden="true" size={18} />
                  Crear mi plan
                </Link>
                <Link className="button-secondary" href="/es/lista-para-viajar-a-china/">
                  Ver lista de preparación
                </Link>
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-500">
                Esta herramienta es solo para preparar tu viaje. No ofrece asesoría legal.
              </p>
            </div>

            <div className="card p-5">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-bold text-slate-500">Vista previa</p>
                  <p className="text-xl font-black text-slate-950">Tarjeta de respaldo del primer día</p>
                </div>
                <ShieldCheck className="text-brand-green" aria-hidden="true" />
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  ["Datos móviles", "¿Tendrás conexión al aterrizar?", Smartphone],
                  ["Pagos", "¿Probaste Alipay o WeChat Pay?", ClipboardCheck],
                  ["Hotel", "¿Guardaste la dirección en chino?", ShieldCheck],
                  ["Primer trayecto", "¿Sabes cómo llegar al hotel?", Plane]
                ].map(([title, body, Icon]) => (
                  <div key={title as string} className="rounded-lg border border-slate-200 p-4">
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 text-brand-blue" size={18} aria-hidden="true" />
                      <div>
                        <p className="font-black text-slate-950">{title as string}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{body as string}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-wrap py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Estado del viaje", "Crítico, requiere acción o listo, sin puntuaciones confusas."],
              ["3 acciones principales", "Solo las acciones más importantes para evitar bloqueo al llegar."],
              ["Copia offline", "Una tarjeta clara para copiar, guardar o capturar en el móvil."]
            ].map(([title, body]) => (
              <article key={title} className="card p-5">
                <h2 className="text-lg font-black text-slate-950">{title}</h2>
                <p className="mt-2 leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
