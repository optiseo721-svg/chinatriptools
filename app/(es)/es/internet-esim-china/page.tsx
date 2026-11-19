import type { Metadata } from "next";
import { ArticleHero, Checklist, ContentSection, FAQSection, InlineToolCta } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedLink } from "@/components/TrackedLink";

const faqs = [
  {
    question: "¿Cómo tener internet en China como turista?",
    answer:
      "Antes de viajar, elige una eSIM, roaming internacional o una SIM local según tu teléfono, duración y presupuesto. Deja la opción elegida preparada antes del vuelo y guarda como respaldo la dirección del hotel, la primera ruta y los datos del proveedor."
  },
  {
    question: "¿Funciona una eSIM en China?",
    answer:
      "Puede funcionar si tu teléfono está desbloqueado y es compatible con eSIM, y si el plan del proveedor cubre China. Revisa la cobertura, los datos incluidos, la fecha de activación y las instrucciones del proveedor antes de comprarla."
  },
  {
    question: "¿Es mejor eSIM o roaming para viajar a China?",
    answer:
      "La eSIM suele convenir si buscas instalar un plan de datos antes de salir; el roaming puede ser más simple si ya conoces las condiciones de tu operador. No hay una opción universal: compara precio, cantidad de datos, duración, cobertura y soporte antes de decidir."
  },
  {
    question: "¿Puedo comprar una SIM local al llegar a China?",
    answer:
      "Es una alternativa posible, pero puede tomar tiempo y requerir identificación o gestiones presenciales. No la uses como único plan para los primeros minutos: llega con una conexión temporal o con capturas y datos esenciales disponibles sin conexión."
  },
  {
    question: "¿Qué hago si aterrizo en China sin datos móviles?",
    answer:
      "Conéctate al Wi-Fi del aeropuerto, abre la dirección del hotel y la primera ruta que guardaste, y confirma el transporte antes de salir. Evita depender de descargas, registros o verificaciones que no hayas completado antes del vuelo."
  },
  {
    question: "¿Qué debo guardar offline antes de viajar?",
    answer:
      "Guarda el nombre y la dirección del hotel en chino, el teléfono del alojamiento, el itinerario, la ruta desde el aeropuerto, instrucciones de activación del plan y una alternativa de pago. Descarga también los idiomas o mapas sin conexión si las aplicaciones que usas lo permiten."
  }
];

export const metadata: Metadata = {
  title: "Internet en China para turistas: eSIM, roaming y Wi-Fi",
  description:
    "Cómo preparar internet en China para turistas: compara eSIM, roaming, SIM local y Wi-Fi, y guarda un plan B antes de aterrizar.",
  authors: [{ name: "Equipo editorial de China Trip Tools" }],
  keywords: ["internet en China para turistas", "eSIM China", "internet China viajeros", "roaming en China", "SIM China turistas"],
  alternates: {
    canonical: "/es/internet-esim-china/"
  }
};

export default function InternetEsimPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <ArticleHero
          eyebrow="Internet / eSIM"
          title="Internet en China para turistas: eSIM, roaming y plan B"
          description="Prepara tu conexión antes de salir: mapas, hotel, traducción, pagos y transporte del primer día pueden depender de ella."
          ctaLabel="Comprobar mi conexión"
          ctaEventLabel="internet_esim_hero"
        />
        <article className="content-wrap max-w-4xl py-8">
          <section aria-labelledby="respuesta-rapida" className="rounded-lg border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <h2 id="respuesta-rapida" className="text-xl font-black text-blue-950">Respuesta rápida</h2>
            <p className="mt-2 leading-7 text-blue-950">
              Para tener internet en China como turista, deja preparada una eSIM o el roaming antes de embarcar. Una SIM local puede servir para estancias más largas, pero no resuelve el primer momento si todavía no sabes dónde comprarla o activarla. Lleva además un plan B: Wi-Fi del aeropuerto y capturas que puedas abrir sin datos.
            </p>
          </section>
          <ContentSection title="Por qué preparar la conexión antes de aterrizar">
            <p>
              La conexión es una dependencia práctica del primer día: consultar un mapa, mostrar la dirección del hotel, traducir, avisar de un retraso o completar un pago puede requerir datos. Prepararla antes de volar reduce las decisiones que tendrías que tomar cansado, con poco tiempo o sin entender el entorno.
            </p>
            <p className="mt-4">No necesitas contratar el plan más grande. Necesitas una opción compatible con tu teléfono, instrucciones guardadas y suficientes datos para llegar al alojamiento sin depender de configurar nada en el aeropuerto.</p>
          </ContentSection>
          <ContentSection title="eSIM, roaming, SIM local o Wi-Fi: qué opción elegir">
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                <caption className="sr-only">Comparación de opciones de internet para turistas en China</caption>
                <thead className="bg-slate-100 text-slate-900"><tr><th className="px-4 py-3 font-black">Opción</th><th className="px-4 py-3 font-black">Puede convenirte si...</th><th className="px-4 py-3 font-black">Comprueba antes</th></tr></thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["eSIM", "tu móvil admite eSIM y quieres llegar con un plan instalado", "compatibilidad, cobertura, datos, fechas y activación"],
                    ["Roaming", "prefieres usar tu número y ya conoces el coste", "precio, límite de datos, países incluidos y activación"],
                    ["SIM local", "vas a quedarte más tiempo y puedes hacer la gestión presencial", "documentación, horario, punto de venta y tiempo necesario"],
                    ["Wi-Fi", "solo necesitas una conexión puntual", "si exige registro, cobertura y seguridad"]
                  ].map(([option, use, check]) => <tr key={option}><th scope="row" className="px-4 py-3 font-bold text-slate-900">{option}</th><td className="px-4 py-3 leading-6 text-slate-700">{use}</td><td className="px-4 py-3 leading-6 text-slate-700">{check}</td></tr>)}
                </tbody>
              </table>
            </div>
          </ContentSection>
          <ContentSection title="Qué revisar antes de comprar o activar una eSIM">
            <Checklist items={[
              "Tu teléfono está desbloqueado y es compatible con eSIM.",
              "El plan especifica cobertura en China, datos incluidos y fechas correctas.",
              "Sabes si se activa al instalarla, al conectarse o en una fecha concreta.",
              "Has guardado las instrucciones de instalación y el contacto de soporte.",
              "Tienes un método de pago y acceso a tu correo antes de despegar.",
              "Conservas una alternativa de conexión o Wi-Fi para resolver incidencias."
            ]} />
          </ContentSection>
          <InlineToolCta label="internet_esim_inline" />
          <ContentSection title="Plan de llegada: qué guardar sin conexión">
            <p>
              Tu plan B no debe ser una idea general. Guarda el nombre y la dirección del hotel en chino, el teléfono del alojamiento, la ruta desde el aeropuerto, el itinerario, la activación de tu plan y un método de pago alternativo. Descarga mapas o idiomas sin conexión cuando las aplicaciones que uses lo permitan.
            </p>
          </ContentSection>
          <ContentSection title="Si aterrizas sin datos móviles">
            <p>Conéctate primero al Wi-Fi del aeropuerto y abre las capturas del hotel y de la ruta. Confirma el transporte antes de moverte y evita iniciar registros, descargas o verificaciones importantes mientras estás resolviendo la llegada.</p>
          </ContentSection>
          <ContentSection title="Conecta esta preparación con el resto de tu viaje">
            <p>La conexión móvil no sustituye la revisión de entrada, el alojamiento o los pagos. Úsala como una parte del plan del primer día y revisa también la información que corresponde a tu punto de partida.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Visa y exenciones", "/es/visa-para-china/", "Comprueba si necesitas visa, una exención o si tu escala reúne las condiciones de tránsito."],
                ["Viajar desde Argentina", "/es/viajar-a-china-desde-argentina/", "Prepara entrada, vuelo, hotel, pagos y conexión desde Argentina."],
                ["Viajar desde México", "/es/viajar-a-china-desde-mexico/", "Revisa el trámite, los documentos y la preparación práctica desde México."],
                ["Lista para viajar a China", "/es/lista-para-viajar-a-china/", "Consulta una lista final para no dejar la llegada en manos de una sola aplicación."]
              ].map(([title, href, description]) => <TrackedLink key={href} href={href} eventLabel={`internet_internal:${href}`} className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50"><span className="block font-black text-slate-900">{title}</span><span className="mt-1 block text-sm leading-6 text-slate-600">{description}</span></TrackedLink>)}
            </div>
          </ContentSection>
          <FAQSection items={faqs} />
        </article>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteFooter />
    </div>
  );
}
