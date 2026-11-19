import type { Metadata } from "next";

const destination = "/es/viajar-a-china-desde-argentina/";

export const metadata: Metadata = {
  title: "Viajar a China desde Argentina",
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: destination
  }
};

export default function LegacyArgentinaTravelPage() {
  return (
    <main className="content-wrap py-16">
      <meta httpEquiv="refresh" content={`0; url=${destination}`} />
      <h1 className="text-2xl font-black text-slate-950">Página trasladada</h1>
      <p className="mt-3 leading-7 text-slate-600">
        Esta guía ahora está disponible en la ruta actualizada.
      </p>
      <a className="mt-5 inline-block font-bold text-blue-700 underline" href={destination}>
        Ir a la guía para viajar a China desde Argentina
      </a>
    </main>
  );
}
