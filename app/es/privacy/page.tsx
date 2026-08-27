import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo China Trip Tools maneja respuestas del checker, analítica, cookies y enlaces externos.",
  alternates: {
    canonical: "/es/privacy/"
  }
};

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="content-wrap py-10">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow">Privacidad</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-slate-950">Política de privacidad</h1>
          <p className="mt-3 text-sm font-semibold text-slate-500">Última revisión: 27 de agosto de 2026</p>
          <div className="mt-8 grid gap-7 leading-8 text-slate-600">
            <section>
              <h2 className="text-2xl font-black text-slate-950">Resumen</h2>
              <p className="mt-3">
                China Trip Tools está diseñado como un sitio estático. No usamos cuentas, inicio de sesión, base de datos
                ni guardamos las respuestas del checker en servidor.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Respuestas del checker</h2>
              <p className="mt-3">
                Las respuestas que seleccionas se procesan en tu navegador para generar la tarjeta de respaldo. No pedimos
                nombre, correo, pasaporte, número de teléfono ni ciudad escrita manualmente en V1.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Analítica</h2>
              <p className="mt-3">
                Podemos usar Google Analytics 4 y Microsoft Clarity para entender visitas, clics y uso general del sitio.
                Estas herramientas solo se cargan si aceptas las analíticas en el aviso de cookies.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Enlaces externos</h2>
              <p className="mt-3">
                El sitio enlaza a fuentes oficiales y servicios externos. Al abrir un enlace externo, se aplican las
                políticas de privacidad del sitio de destino.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Contacto</h2>
              <p className="mt-3">
                V1 todavía no incluye formulario de contacto. Cuando añadamos un canal de contacto público, esta política
                se actualizará para explicar qué datos se reciben y cómo se usan.
              </p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
