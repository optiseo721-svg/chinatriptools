import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ExternalLink, Info, Plane, ShieldCheck } from "lucide-react";
import { ArticleHero, ContentSection, FAQSection } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { TrackedLink } from "@/components/TrackedLink";

const siteUrl = "https://chinatriptools.com";
const pagePath = "/es/visa-para-china/";
const coverImage = "/images/articles/visa-para-china/visa-para-china-cover.jpg";
const reviewedAt = "2026-10-08";

const officialSources = [
  {
    label: "Administración Nacional de Inmigración: tránsito sin visa",
    href: "https://en.nia.gov.cn/n147418/n147463/c183412/content.html",
    note: "Países, puertos, zonas permitidas y condiciones del tránsito sin visa de 240 horas."
  },
  {
    label: "Embajada de China en Argentina: prórroga de la exención",
    href: "https://ar.china-embassy.gov.cn/esp/lszl/sggg/202511/t20251104_11746388.htm",
    note: "Confirma la vigencia anunciada para Argentina, España y otros países hasta el 31 de diciembre de 2026."
  },
  {
    label: "Embajada de China en España: preguntas frecuentes",
    href: "https://es.china-embassy.gov.cn/esp/lqyw/asuntosconsulares1/202401/t20240113_11223071.htm",
    note: "Explica pasaporte, motivos admitidos, documentos de apoyo y límite de estancia."
  },
  {
    label: "Embajada de China en México: requisitos de solicitud",
    href: "https://mx.china-embassy.gov.cn/esp/LSFW/consular1/202510/t20251001_11722302.htm",
    note: "Proceso local, solicitud en línea y requisitos para quienes tramitan la visa en México."
  },
  {
    label: "Centro de Visados de China en México",
    href: "https://www.visaforchina.cn/MEX3_ES/qianzhengyewu/jichuzhishi/banliliucheng",
    note: "Categorías de visa y documentos según el motivo principal del viaje."
  },
  {
    label: "Centro de Visados de China en Madrid",
    href: "https://www.visaforchina.cn/MAD4_ES/tongzhigonggao/552383899767017514.html",
    note: "Proceso actualizado de solicitud, revisión, entrega del pasaporte y recogida."
  }
];

const faqs = [
  {
    question: "¿Necesito visa para viajar a China?",
    answer:
      "Depende del pasaporte que uses, el motivo del viaje, la duración y, si pretendes usar una exención de tránsito, la ruta completa. Comprueba esos cuatro datos en una fuente oficial vigente antes de comprar o volar."
  },
  {
    question: "¿Qué hago si mi pasaporte no aparece en los ejemplos?",
    answer:
      "Los ejemplos de México, España y Argentina no son una lista completa. Comprueba tu nacionalidad y tipo de pasaporte, el motivo, la duración y la ruta en la embajada o consulado de China que corresponda y, si estudias un tránsito, en la información vigente de la Administración Nacional de Inmigración."
  },
  {
    question: "¿Los mexicanos necesitan visa para China?",
    answer:
      "Para un viaje directo de turismo a China continental, el pasaporte ordinario mexicano no está cubierto por la exención unilateral de 30 días descrita en esta guía. México sí figura entre los países que pueden usar el tránsito sin visa de 240 horas cuando la ruta continúa hacia un tercer país o región y se cumplen todas las demás condiciones."
  },
  {
    question: "¿Los españoles necesitan visado para China?",
    answer:
      "A fecha del 8 de octubre de 2026, los titulares de pasaporte ordinario español pueden acogerse a la exención anunciada para determinados viajes de hasta 30 días, como turismo, negocios, visitas, intercambios o tránsito. La política publicada está sujeta a vigencia, por lo que debes volver a verificarla antes de viajar."
  },
  {
    question: "¿Los argentinos necesitan visa para China?",
    answer:
      "A fecha del 8 de octubre de 2026, la Embajada de China en Argentina indica que los titulares de pasaporte ordinario argentino pueden entrar sin visa para determinados motivos y estancias de hasta 30 días. La prórroga publicada alcanza hasta el 31 de diciembre de 2026 y debe revisarse de nuevo antes del viaje."
  },
  {
    question: "¿Cuánto tiempo puedo estar en China sin visa?",
    answer:
      "No existe un único plazo para todos los viajeros. La exención unilateral citada permite hasta 30 días a las nacionalidades y motivos cubiertos; el tránsito sin visa de 240 horas es otra política, con ruta, puertos y zonas autorizadas específicos."
  },
  {
    question: "¿Puedo usar el tránsito de 240 horas en un viaje de ida y vuelta al mismo país?",
    answer:
      "No si la ruta solo va del país de origen a China y regresa al mismo país. Esta política exige transitar por China hacia un tercer país o región, además de cumplir los requisitos de nacionalidad, billete confirmado, puerto de entrada y zona de estancia."
  },
  {
    question: "¿Puedo trabajar o estudiar en China sin visa?",
    answer:
      "No debes usar una exención turística o de tránsito para trabajar, estudiar o realizar actividades periodísticas. Esos motivos requieren revisar y obtener previamente la visa o autorización correspondiente."
  },
  {
    question: "¿Dónde se solicita la visa china?",
    answer:
      "Empieza en la web de la embajada, consulado o Centro de Servicio para Solicitud de Visado Chino que corresponda a tu lugar de solicitud. El proceso, los documentos, las huellas, las tarifas y los plazos pueden variar según el país y el tipo de visa."
  }
];

export const metadata: Metadata = {
  title: "Visa o visado para China: requisitos y exenciones",
  description:
    "Comprueba si necesitas visa para China según tu pasaporte, motivo, duración y ruta. Revisa exenciones, tránsito y fuentes oficiales.",
  authors: [{ name: "Equipo editorial de China Trip Tools" }],
  keywords: [
    "visado China",
    "visa para China",
    "necesito visa para ir a China",
    "requisitos visa China",
    "tránsito sin visa China"
  ],
  alternates: {
    canonical: pagePath
  },
  openGraph: {
    type: "article",
    url: pagePath,
    title: "Visa o visado para China: requisitos y exenciones",
    description:
      "Distingue entre exención de visa, tránsito de 240 horas y solicitud de visado antes de viajar a China.",
    images: [
      {
        url: coverImage,
        width: 1672,
        height: 941,
        alt: "Pasaporte, itinerario y lista de comprobación antes de viajar a China"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Visa o visado para China: qué debes comprobar",
    description: "Pasaporte, motivo, duración y ruta: las cuatro claves para revisar tu entrada a China.",
    images: [coverImage]
  }
};

function SourceLinks() {
  return (
    <div className="grid gap-3">
      {officialSources.map((source) => (
        <TrackedExternalLink
          key={source.href}
          href={source.href}
          eventLabel={`visa_source:${source.label}`}
          className="group flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300"
        >
          <span>
            <span className="block font-black text-slate-900 group-hover:text-blue-700">{source.label}</span>
            <span className="mt-1 block text-sm leading-6 text-slate-600">{source.note}</span>
          </span>
          <ExternalLink className="mt-1 shrink-0 text-blue-600" size={17} aria-hidden="true" />
        </TrackedExternalLink>
      ))}
    </div>
  );
}

export default function ChinaVisaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}${pagePath}#article`,
        headline: "¿Necesitas visa o visado para China?",
        description:
          "Guía para distinguir entre exención de visa, tránsito sin visa y solicitud de visado según pasaporte, motivo, duración y ruta.",
        image: `${siteUrl}${coverImage}`,
        datePublished: reviewedAt,
        dateModified: reviewedAt,
        inLanguage: "es",
        isAccessibleForFree: true,
        mainEntityOfPage: `${siteUrl}${pagePath}`,
        author: {
          "@type": "Organization",
          name: "Equipo editorial de China Trip Tools",
          url: `${siteUrl}/es/about/`
        },
        publisher: {
          "@type": "Organization",
          name: "China Trip Tools",
          url: siteUrl
        },
        citation: officialSources.map((source) => source.href)
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "China Trip Tools", item: `${siteUrl}/es/` },
          { "@type": "ListItem", position: 2, name: "Guías", item: `${siteUrl}/es/lista-para-viajar-a-china/` },
          { "@type": "ListItem", position: 3, name: "Visa para China", item: `${siteUrl}${pagePath}` }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      }
    ]
  };

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <ArticleHero
          eyebrow="Entrada y visado"
          title="¿Necesitas visa o visado para China?"
          description="Comprueba tu pasaporte, el motivo del viaje, la duración y la ruta para distinguir entre exención, tránsito sin visa y solicitud de visado."
          ctaLabel="Preparar mi primer día en China"
          ctaEventLabel="visa_article_hero:checker"
          reviewedAt={reviewedAt}
          reviewedLabel="Revisado el 8 de octubre de 2026"
          image={{
            src: coverImage,
            alt: "Pasaporte, itinerario y lista de comprobación antes de viajar a China",
            width: 1672,
            height: 941,
            caption:
              "La respuesta depende del pasaporte que utilices, el motivo, la duración y, para el tránsito sin visa, de toda la ruta."
          }}
        />

        <article className="content-wrap max-w-4xl py-8">
          <section aria-labelledby="respuesta-rapida" className="rounded-lg border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <div className="flex gap-3">
              <Info className="mt-1 shrink-0 text-blue-700" size={22} aria-hidden="true" />
              <div>
                <h2 id="respuesta-rapida" className="text-xl font-black text-blue-950">Respuesta rápida</h2>
                <p className="mt-2 leading-7 text-blue-950">
                  No todos los viajeros necesitan visa para China, pero tampoco existe una sola regla para todos. Algunas nacionalidades pueden entrar sin visa durante un periodo limitado; otras solo pueden utilizar una exención de tránsito si continúan hacia un tercer país o región. Si tu pasaporte, motivo, estancia o ruta no encajan en una exención vigente, debes solicitar la visa correspondiente antes del viaje.
                </p>
              </div>
            </div>
          </section>

          <ContentSection title="¿Necesitas visa para viajar a China?">
            <p>
              Utiliza esta tabla como orientación inicial. La admisión final corresponde a las autoridades fronterizas y las políticas pueden cambiar.
            </p>
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <caption className="sr-only">Orientación inicial para saber si necesitas visa para China</caption>
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="px-4 py-3 font-black">Tu situación</th>
                    <th className="px-4 py-3 font-black">Resultado inicial</th>
                    <th className="px-4 py-3 font-black">Qué debes comprobar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["Tu pasaporte está cubierto por una exención vigente", "Puede que no necesites visa", "Pasaporte ordinario, motivo permitido, duración y fecha de vigencia"],
                    ["Viajas hacia un tercer país o región", "Puede que puedas usar el tránsito sin visa", "Nacionalidad, billete confirmado, puerto y zona permitida"],
                    ["Viajas directamente y tu pasaporte no está exento", "Normalmente necesitas visa", "Tipo de visa y requisitos del lugar donde presentas la solicitud"],
                    ["Vas a trabajar, estudiar, residir o informar como periodista", "Necesitas revisar una visa o autorización específica", "Categoría correcta y aprobación previa"],
                    ["Piensas quedarte más que el límite autorizado", "La exención no cubre el viaje completo", "Visa adecuada antes de salir"]
                  ].map(([situation, result, check]) => (
                    <tr key={situation}>
                      <th scope="row" className="px-4 py-3 font-bold text-slate-900">{situation}</th>
                      <td className="px-4 py-3 text-slate-700">{result}</td>
                      <td className="px-4 py-3 text-slate-700">{check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentSection>

          <ContentSection title="Comprueba cuatro datos antes de tomar una decisión">
            <ol className="grid gap-3 sm:grid-cols-2">
              {[
                ["Pasaporte", "La regla depende de la nacionalidad y del tipo de pasaporte, no solo del país donde vives o desde el que vuelas."],
                ["Motivo", "Turismo, negocios, visitas, intercambio y tránsito no se tratan igual que trabajo, estudios o residencia."],
                ["Duración", "El límite de una exención, la estancia autorizada por una visa y las 240 horas de tránsito son conceptos distintos."],
                ["Ruta", "El tránsito sin visa exige continuar hacia un tercer país o región y usar puertos y zonas autorizados."]
              ].map(([title, text], index) => (
                <li key={title} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-800">{index + 1}</span>
                    <h3 className="font-black text-slate-950">{title}</h3>
                  </div>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </li>
              ))}
            </ol>
          </ContentSection>

          <ContentSection title="Exención de visa y tránsito sin visa no son lo mismo">
            <p>
              La exención ordinaria permite entrar sin solicitar una visa cuando el pasaporte, el motivo y la estancia cumplen una política vigente. El tránsito de 240 horas es una ruta condicionada: debes pasar por China camino a un tercer país o región.
            </p>
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                <caption className="sr-only">Diferencias entre exención de visa y tránsito sin visa de 240 horas</caption>
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="px-4 py-3 font-black">Condición</th>
                    <th className="px-4 py-3 font-black">Exención de visa</th>
                    <th className="px-4 py-3 font-black">Tránsito sin visa de 240 horas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["Ir a un tercer país o región", "No siempre", "Sí"],
                    ["Puertos de entrada designados", "Depende de la política", "Sí"],
                    ["Zona de estancia limitada", "Depende de la política", "Sí"],
                    ["Billete de salida confirmado", "Recomendable y puede ser solicitado", "Es una condición esencial"],
                    ["Trabajo o estudios", "No están cubiertos", "No están cubiertos"]
                  ].map(([condition, exemption, transit]) => (
                    <tr key={condition}>
                      <th scope="row" className="px-4 py-3 font-bold text-slate-900">{condition}</th>
                      <td className="px-4 py-3 text-slate-700">{exemption}</td>
                      <td className="px-4 py-3 text-slate-700">{transit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <aside className="mt-5 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-950">
              <Plane className="mt-1 shrink-0" size={20} aria-hidden="true" />
              <p className="leading-7">
                Según la Administración Nacional de Inmigración, a fecha del 20 de agosto de 2026 la política de 240 horas cubre 57 nacionalidades, 65 puertos y zonas autorizadas de 24 divisiones provinciales. No conviertas ese resumen en una regla general: revisa la lista y el itinerario exactos en la fuente oficial.
              </p>
            </aside>
          </ContentSection>

          <ContentSection title="Ejemplos frecuentes según el pasaporte">
            <p>
              Estas tres tarjetas no son una lista completa de países hispanohablantes. Son ejemplos con guías propias que muestran por qué la respuesta cambia según el pasaporte y el itinerario.
            </p>
            <div className="grid gap-4">
              <section className="rounded-lg border border-slate-200 bg-white p-5" aria-labelledby="situacion-mexico">
                <h3 id="situacion-mexico" className="text-xl font-black text-slate-950">Pasaporte mexicano</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Para un viaje directo de turismo a China continental, el pasaporte ordinario mexicano no está incluido en la exención unilateral de 30 días descrita aquí. México sí aparece en la política de tránsito sin visa de 240 horas, pero solo cuando el itinerario continúa hacia un tercer país o región y cumple el resto de condiciones.
                </p>
                <TrackedLink
                  href="/es/viajar-a-china-desde-mexico/"
                  eventLabel="visa_country:mexico"
                  className="mt-4 inline-flex items-center gap-2 font-black text-blue-700 underline decoration-blue-300 underline-offset-4"
                >
                  Ver la guía para viajar desde México
                  <ArrowRight size={16} aria-hidden="true" />
                </TrackedLink>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-5" aria-labelledby="situacion-espana">
                <h3 id="situacion-espana" className="text-xl font-black text-slate-950">Pasaporte español</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Los titulares de pasaporte ordinario español pueden acogerse a la exención vigente para determinados viajes de hasta 30 días, incluidos turismo, negocios, visitas, intercambios y tránsito. La prórroga oficial consultada alcanza hasta el 31 de diciembre de 2026; vuelve a comprobarla antes de salir.
                </p>
                <TrackedLink
                  href="/es/viajar-a-china-desde-espana/"
                  eventLabel="visa_country:spain"
                  className="mt-4 inline-flex items-center gap-2 font-black text-blue-700 underline decoration-blue-300 underline-offset-4"
                >
                  Ver la guía para viajar desde España
                  <ArrowRight size={16} aria-hidden="true" />
                </TrackedLink>
              </section>

              <section className="rounded-lg border border-slate-200 bg-white p-5" aria-labelledby="situacion-argentina">
                <h3 id="situacion-argentina" className="text-xl font-black text-slate-950">Pasaporte argentino</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Los titulares de pasaporte ordinario argentino pueden acogerse a la exención vigente para determinados motivos y estancias de hasta 30 días. La Embajada de China en Argentina publicó una prórroga hasta el 31 de diciembre de 2026.
                </p>
                <TrackedLink
                  href="/es/viajar-a-china-desde-argentina/"
                  eventLabel="visa_country:argentina"
                  className="mt-4 inline-flex items-center gap-2 font-black text-blue-700 underline decoration-blue-300 underline-offset-4"
                >
                  Ver la guía para viajar desde Argentina
                  <ArrowRight size={16} aria-hidden="true" />
                </TrackedLink>
              </section>
            </div>
            <aside className="mt-5 rounded-lg border border-blue-200 bg-blue-50 p-5 text-blue-950">
              <h3 className="text-xl font-black">¿Tu pasaporte es de otro país?</h3>
              <p className="mt-2 leading-7">
                La guía general también te sirve. Comprueba la nacionalidad y el tipo de pasaporte, el motivo, la duración y la ruta en la representación oficial de China que corresponda a tu lugar de solicitud. Si estudias un tránsito, revisa además los puertos y las zonas permitidas por la Administración Nacional de Inmigración.
              </p>
              <p className="mt-3 font-semibold leading-7">
                El país donde vives o desde el que vuelas no sustituye la nacionalidad del pasaporte que presentarás en frontera.
              </p>
            </aside>
          </ContentSection>

          <ContentSection title="Un ejemplo de aviso oficial de exención">
            <p>
              Este aviso de la Embajada de China en Argentina confirma la prórroga hasta finales de 2026 para 45 países, entre ellos Argentina y España, y resume los motivos cubiertos y el límite de 30 días. No es una lista universal de todas las políticas de entrada.
            </p>
            <figure className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <Image
                src="/images/articles/visa-para-china/embassy-visa-free-extension-notice.png"
                alt="Aviso oficial en español sobre la prórroga de la exención de visado para determinados países hasta el 31 de diciembre de 2026"
                width={1928}
                height={1014}
                className="h-auto w-full"
                sizes="(max-width: 896px) calc(100vw - 32px), 896px"
              />
              <figcaption className="border-t border-slate-200 px-4 py-3 text-sm leading-6 text-slate-500">
                Captura del aviso publicado por la Embajada de China en Argentina el 4 de noviembre de 2025. Consulta el{` `}
                <TrackedExternalLink
                  href="https://ar.china-embassy.gov.cn/esp/lszl/sggg/202511/t20251104_11746388.htm"
                  eventLabel="visa_caption:argentina_notice"
                  className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-2"
                >
                  aviso original
                </TrackedExternalLink>
                {` `}antes de viajar.
              </figcaption>
            </figure>
          </ContentSection>

          <ContentSection title="Si necesitas visa, empieza por el motivo del viaje">
            <p>
              La categoría se elige por la actividad principal que realizarás en China. No selecciones una visa turística si el objetivo real es trabajar, estudiar o residir.
            </p>
            <ol className="mt-5 grid gap-3">
              {[
                "Consulta la embajada, el consulado o el Centro de Visados que corresponda a tu lugar de solicitud.",
                "Elige la categoría según el motivo principal y prepara los documentos indicados para ese caso.",
                "Completa la solicitud en línea y espera la revisión inicial antes de entregar el pasaporte.",
                "Sigue las instrucciones sobre huellas, documentos adicionales, entrevista, pago y recogida.",
                "Al recibir el pasaporte, revisa nombre, número, entradas, validez y duración de cada estancia."
              ].map((item, index) => (
                <li key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-800">{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5">
              No damos una cifra universal de precio o plazo porque cambian según el país, la nacionalidad, la categoría y el servicio. Comprueba siempre la información local más reciente.
            </p>
          </ContentSection>

          <section className="my-8 rounded-lg border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 shrink-0 text-blue-700" size={22} aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-black text-blue-950">Después de revisar la entrada, prepara tu primer día</h2>
                <p className="mt-2 leading-7 text-blue-950">
                  Nuestro checker no decide si necesitas visa. Sirve para organizar internet, pagos, hotel, transporte y alternativas antes de aterrizar.
                </p>
                <TrackedLink
                  className="button-primary mt-5"
                  href="/es/checker/"
                  eventLabel="visa_article:checker_cta"
                >
                  Preparar mi primer día
                  <ArrowRight size={18} aria-hidden="true" />
                </TrackedLink>
              </div>
            </div>
          </section>

          <FAQSection items={faqs} />

          <ContentSection title="Fuentes oficiales y fecha de revisión">
            <p>
              Esta guía fue revisada el 8 de octubre de 2026. Resume información pública para ayudarte a encontrar la regla aplicable, pero no sustituye una decisión consular o fronteriza. Reabre la fuente correspondiente pocos días antes del viaje.
            </p>
            <div className="mt-5">
              <SourceLinks />
            </div>
          </ContentSection>
        </article>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <SiteFooter />
    </div>
  );
}
