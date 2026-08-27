"use client";

import { useState } from "react";
import Link from "next/link";
import { Settings } from "lucide-react";
import { saveCookieChoice, useCookieChoice } from "@/lib/cookieChoice";

export function CookieConsent() {
  const choice = useCookieChoice();
  const [showSettings, setShowSettings] = useState(false);

  if (choice !== "unset") {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-[0_-8px_32px_rgba(15,23,42,0.12)] backdrop-blur">
      <div className="mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-black uppercase text-brand-blue">Opciones de privacidad</p>
          <h2 className="mt-1 text-2xl font-black text-slate-950">Usamos cookies y almacenamiento local</h2>
          <p className="mt-2 max-w-3xl leading-7 text-slate-600">
            China Trip Tools usa funciones necesarias para que el sitio funcione. Con tu permiso, las herramientas de
            analítica nos ayudan a entender qué páginas y botones se usan para mejorar el MVP.
          </p>
          {showSettings ? (
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
              <p>
                Necesarias: siempre activas para recordar tu elección de privacidad. Analíticas: opcionales, solo se
                cargan si aceptas. No usamos cuentas, base de datos ni guardamos las respuestas del checker en servidor.
              </p>
              <p className="mt-2">
                Lee más en <Link className="font-bold text-brand-blue" href="/es/privacy/">Privacidad</Link> y{" "}
                <Link className="font-bold text-brand-blue" href="/es/cookies/">Cookies</Link>.
              </p>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
          <button className="button-primary" type="button" onClick={() => saveCookieChoice("accepted")}>
            Aceptar analíticas
          </button>
          <button className="button-secondary" type="button" onClick={() => saveCookieChoice("rejected")}>
            Rechazar opcionales
          </button>
          <button
            className="button-secondary"
            type="button"
            aria-expanded={showSettings}
            onClick={() => setShowSettings((current) => !current)}
          >
            <Settings aria-hidden="true" size={18} />
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
}
