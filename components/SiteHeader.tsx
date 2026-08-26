import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="content-wrap flex min-h-16 items-center justify-between gap-4 py-3">
        <Link href="/es/" className="flex flex-col" aria-label="China Trip Tools home">
          <span className="text-base font-black text-slate-950">China Trip Tools</span>
          <span className="text-xs font-semibold text-slate-500">Plan de respaldo para China</span>
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-2 text-sm font-bold text-slate-700 md:flex">
          <Link className="rounded-md px-3 py-2 hover:bg-slate-100" href="/es/checker/">
            Checker
          </Link>
          <Link className="rounded-md px-3 py-2 hover:bg-slate-100" href="/es/lista-para-viajar-a-china/">
            Lista
          </Link>
          <Link className="rounded-md px-3 py-2 hover:bg-slate-100" href="/es/internet-esim-china/">
            Internet/eSIM
          </Link>
          <Link className="rounded-md px-3 py-2 hover:bg-slate-100" href="/es/viajar-a-china-desde-espana/">
            España
          </Link>
          <Link className="rounded-md px-3 py-2 hover:bg-slate-100" href="/es/viajar-a-china-desde-mexico/">
            México
          </Link>
        </nav>
        <Link className="button-primary md:hidden" href="/es/checker/">
          Start
        </Link>
      </div>
    </header>
  );
}
