"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, CheckCircle2, RefreshCw, RotateCcw, Send, XCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { resetCookieChoice, saveCookieChoice, useCookieChoice } from "@/lib/cookieChoice";

type RuntimeStatus = {
  clarityType: string;
  gtagType: string;
  dataLayerLength: number;
  hasClarityScript: boolean;
  hasGtagScript: boolean;
  checkedAt: string;
};

function readRuntimeStatus(): RuntimeStatus {
  const scripts = Array.from(document.scripts).map((script) => script.src || script.id || "");

  return {
    clarityType: typeof window.clarity,
    gtagType: typeof window.gtag,
    dataLayerLength: Array.isArray(window.dataLayer) ? window.dataLayer.length : 0,
    hasClarityScript: scripts.some((src) => src.includes("clarity.ms/tag") || src === "clarity"),
    hasGtagScript: scripts.some((src) => src.includes("googletagmanager.com/gtag/js") || src === "ga4"),
    checkedAt: new Date().toLocaleTimeString("es-ES")
  };
}

function StatusRow({ label, ok, detail }: { label: string; ok: boolean; detail: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 py-3 last:border-0">
      <div>
        <p className="font-black text-slate-950">{label}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
      </div>
      {ok ? (
        <CheckCircle2 className="mt-1 shrink-0 text-brand-green" aria-hidden="true" size={22} />
      ) : (
        <XCircle className="mt-1 shrink-0 text-red-500" aria-hidden="true" size={22} />
      )}
    </div>
  );
}

function clarityDetail(status: RuntimeStatus) {
  if (status.clarityType === "function") {
    return `window.clarity = function; script detectado: ${status.hasClarityScript ? "sí" : "no"}`;
  }

  if (status.clarityType === "object") {
    return `window.clarity = object; script detectado: ${
      status.hasClarityScript ? "sí" : "no"
    }. La cola existe, pero el script externo puede estar bloqueado por red, SSL, proxy o extensión.`;
  }

  return `window.clarity = ${status.clarityType}; script detectado: ${status.hasClarityScript ? "sí" : "no"}`;
}

export function AnalyticsCheckClient() {
  const cookieChoice = useCookieChoice();
  const [status, setStatus] = useState<RuntimeStatus | null>(null);
  const [testEventSent, setTestEventSent] = useState(false);

  const refreshStatus = () => {
    setStatus(readRuntimeStatus());
  };

  useEffect(() => {
    const timeout = window.setTimeout(refreshStatus, 0);
    const interval = window.setInterval(refreshStatus, 1500);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [cookieChoice]);

  const summary = useMemo(() => {
    if (!status) {
      return "Comprobando...";
    }

    if (cookieChoice !== "accepted") {
      return "Analítica pendiente de consentimiento";
    }

    if (status.clarityType === "function" && status.gtagType === "function") {
      return "GA4 y Clarity están activos";
    }

    if (status.clarityType !== "function" && status.gtagType !== "function") {
      return "Los scripts de analítica no se han cargado";
    }

    return "La carga de analítica es parcial";
  }, [cookieChoice, status]);

  return (
    <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="card p-5">
        <div className="flex items-start gap-3">
          <Activity className="mt-1 text-brand-blue" aria-hidden="true" size={24} />
          <div>
            <p className="text-sm font-black uppercase text-brand-blue">Estado actual</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">{summary}</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Esta página sirve solo para pruebas internas. No aparece en la navegación y no debe indexarse.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {cookieChoice === "accepted" ? null : (
            <button className="button-primary" type="button" onClick={() => saveCookieChoice("accepted")}>
              Aceptar analíticas
            </button>
          )}
          {cookieChoice === "accepted" ? (
            <button
              className="button-secondary"
              type="button"
              onClick={() => {
                resetCookieChoice();
                window.location.reload();
              }}
            >
              <RotateCcw size={18} aria-hidden="true" />
              Reiniciar consentimiento
            </button>
          ) : null}
          <button className="button-secondary" type="button" onClick={refreshStatus}>
            <RefreshCw size={18} aria-hidden="true" />
            Actualizar estado
          </button>
          <button
            className="button-secondary"
            type="button"
            onClick={() => {
              trackEvent("analytics_debug_test", {
                page: "analytics-check",
                clarity_type: status?.clarityType,
                gtag_type: status?.gtagType
              });
              setTestEventSent(true);
              window.setTimeout(refreshStatus, 600);
            }}
          >
            <Send size={18} aria-hidden="true" />
            Enviar evento de prueba
          </button>
        </div>

        {testEventSent ? (
          <p className="mt-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm font-bold text-green-900">
            Evento de prueba enviado. Revisa GA4 Realtime y Clarity después de unos minutos.
          </p>
        ) : null}
        {cookieChoice === "accepted" ? (
          <p className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm font-bold text-blue-950">
            El botón Aceptar analíticas está oculto porque el consentimiento ya está aceptado en este navegador.
          </p>
        ) : null}
      </div>

      <div className="card p-5">
        <h2 className="text-xl font-black text-slate-950">Diagnóstico visible</h2>
        {status ? (
          <div className="mt-3">
            <StatusRow
              label="Consentimiento"
              ok={cookieChoice === "accepted"}
              detail={`Valor actual: ${cookieChoice}`}
            />
            <StatusRow
              label="Clarity"
              ok={status.clarityType === "function"}
              detail={clarityDetail(status)}
            />
            <StatusRow
              label="GA4"
              ok={status.gtagType === "function"}
              detail={`window.gtag = ${status.gtagType}; script detectado: ${
                status.hasGtagScript ? "sí" : "no"
              }`}
            />
            <StatusRow
              label="dataLayer"
              ok={status.dataLayerLength > 0}
              detail={`Eventos en cola o enviados: ${status.dataLayerLength}`}
            />
            <p className="mt-4 text-sm font-semibold text-slate-500">Última revisión: {status.checkedAt}</p>
          </div>
        ) : (
          <p className="mt-4 text-slate-600">Comprobando estado...</p>
        )}
      </div>
    </section>
  );
}
