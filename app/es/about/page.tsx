import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Sobre el proyecto",
  description:
    "China Trip Tools es un sitio independiente de preparación para viajeros que llegan a China. No es una fuente oficial ni ofrece asesoría legal.",
  alternates: {
    canonical: "/es/about/"
  }
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="content-wrap py-10">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow">China Trip Tools</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950">Sobre el proyecto</h1>
          <div className="mt-6 grid gap-5 text-lg leading-8 text-slate-600">
            <p>
              China Trip Tools ayuda a viajeros de habla hispana a preparar los puntos prácticos que suelen bloquear el
              primer día en China: internet, pagos, hotel, transporte, traducción y enlaces oficiales.
            </p>
            <p>
              El primer producto es una tarjeta de respaldo para el primer día. Respondes unas preguntas rápidas y el
              resultado se genera en tu navegador, sin registro y sin guardar tus respuestas en una base de datos.
            </p>
            <p>
              Este sitio es independiente. No somos una embajada, una autoridad migratoria, una agencia de visados ni una
              fuente oficial. La información se ofrece como ayuda de preparación y siempre debes verificar las reglas
              finales con fuentes oficiales antes de reservar o viajar.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/es/checker/">
              Preparar mi viaje
            </Link>
            <Link className="button-secondary" href="/es/lista-para-viajar-a-china/">
              Ver lista de preparación
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
