import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "China Trip Tools",
  description: "Elige el idioma para preparar tu primer día en China.",
  alternates: {
    canonical: "/"
  }
};

export default function RootPage() {
  return (
    <main className="page-shell grid place-items-center bg-slate-50 px-4 py-12">
      <section className="card w-full max-w-xl p-8 text-center">
        <p className="eyebrow">China Trip Tools</p>
        <h1 className="mt-3 text-3xl font-black text-slate-950">Prepara tu primer día en China</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          La primera versión está disponible en español. La versión en inglés se añadirá después.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="button-primary" href="/es/">
            Entrar en español
          </Link>
        </div>
      </section>
    </main>
  );
}
