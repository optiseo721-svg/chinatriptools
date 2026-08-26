import Link from "next/link";
import { Home, Wrench } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-screen flex-col">
      <SiteHeader />
      <main className="content-wrap flex flex-1 items-center py-16">
        <section className="max-w-2xl">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950">No encontramos esta página</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            El enlace puede haber cambiado. Vuelve al inicio o abre la herramienta para preparar tu primer día en China.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/es/">
              <Home aria-hidden="true" size={18} />
              Volver al inicio
            </Link>
            <Link className="button-secondary" href="/es/checker/">
              <Wrench aria-hidden="true" size={18} />
              Preparar mi viaje
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
