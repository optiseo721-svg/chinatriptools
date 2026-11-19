"use client";

import { useSyncExternalStore } from "react";
import { searchSite } from "@/lib/site-search";

function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getQuery() {
  return new URLSearchParams(window.location.search).get("q") ?? "";
}

export function SearchResults() {
  const query = useSyncExternalStore(subscribe, getQuery, () => "");
  const results = searchSite(query);
  return <div className="content-wrap py-10 md:py-14">
    <h1 className="text-3xl font-black text-slate-950">Buscar en China Trip Tools</h1>
    <form action="/es/buscar/" method="get" role="search" className="mt-6 flex max-w-2xl gap-2">
      <input name="q" type="search" defaultValue={query} key={query} required placeholder="Visa, trenes, pagos..." aria-label="Buscar en el sitio" className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 text-slate-900" />
      <button type="submit" className="button-primary">Buscar</button>
    </form>
    {query.trim() ? <section aria-live="polite" className="mt-8 max-w-3xl">
      <p className="text-slate-600">{results.length} {results.length === 1 ? "resultado" : "resultados"} para «{query}»</p>
      {results.length ? <ul className="mt-5 space-y-3">{results.map((item) => <li key={item.href} className="card p-5"><a href={item.href} className="text-lg font-bold text-blue-700 hover:underline">{item.title}</a><p className="mt-2 text-slate-600">{item.description}</p></li>)}</ul> : <p className="mt-5 text-slate-600">No encontramos resultados. Prueba otra palabra o consulta <a href="/es/guias/" className="font-bold text-blue-700 underline">todas las guías</a>.</p>}
    </section> : <p className="mt-8 text-slate-600">Escribe un tema para encontrar guías y herramientas del sitio.</p>}
  </div>;
}
