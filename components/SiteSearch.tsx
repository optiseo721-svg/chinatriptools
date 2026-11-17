"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";

export function SiteSearch({ mobile = false }: { mobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <div className={open ? (mobile ? "absolute right-16 z-40 md:hidden" : "absolute right-0 z-40 hidden rounded-full bg-white pl-3 md:block") : (mobile ? "md:hidden" : "hidden md:block")}>
      {!open ? (
        <button type="button" onClick={() => setOpen(true)} aria-label="Buscar en el sitio" className="flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200">
          <Search aria-hidden="true" className="size-5" strokeWidth={2.5} />
        </button>
      ) : (
        <form action="/es/buscar/" method="get" role="search" className="flex w-[min(34rem,70vw)] items-center gap-2 rounded-full bg-slate-100 px-4 py-2 max-md:w-[min(18rem,calc(100vw-7rem))]">
          <button type="submit" aria-label="Enviar búsqueda" className="text-slate-700"><Search aria-hidden="true" className="size-5" /></button>
          <input ref={inputRef} name="q" type="search" required placeholder="Busca guías y herramientas..." aria-label="Buscar en el sitio" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }} className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500" />
          <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar búsqueda" className="text-slate-600"><X aria-hidden="true" className="size-5" /></button>
        </form>
      )}
    </div>
  );
}
