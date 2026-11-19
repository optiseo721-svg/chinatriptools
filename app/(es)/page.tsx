import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: {
    absolute: "China Trip Tools"
  },
  description: "Prepara tu llegada a China con una tarjeta de respaldo para el primer día.",
  alternates: {
    canonical: "/"
  }
};

export default function RootPage() {
  return (
    <main className="page-shell grid place-items-center bg-slate-50 px-4 py-12">
      <section className="card w-full max-w-xl p-8 text-center">
        <div className="flex justify-center">
          <BrandLogo compact />
        </div>
        <h1 className="mt-3 text-3xl font-black text-slate-950">Prepara tu llegada a China</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Responde unas preguntas rápidas y guarda una tarjeta de respaldo para tu primer día:
          conexión, pagos, hotel y transporte.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="button-primary" href="/es/">
            Abrir herramienta
          </Link>
        </div>
      </section>
    </main>
  );
}
