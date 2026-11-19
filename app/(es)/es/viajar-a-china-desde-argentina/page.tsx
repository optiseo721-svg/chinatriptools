import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CalendarCheck, ExternalLink, Info, Maximize2, ShieldCheck } from "lucide-react";
import { ArticleHero, ContentSection, FAQSection } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { TrackedLink } from "@/components/TrackedLink";

const siteUrl = "https://chinatriptools.com";
const pagePath = "/es/viajar-a-china-desde-argentina/";
const coverImage = "/images/articles/viajar-a-china-desde-argentina/argentina-china-travel-prep-cover.webp";

const officialSources = [
  {
    label: "Embajada de China en Argentina: aviso sobre la exención de visado",
    href: "https://ar.china-embassy.gov.cn/esp/lszl/sggg/202511/t20251104_11746388.htm",
    note: "Vigencia, países incluidos, motivos de viaje y límite de estancia."
  },
  {
    label: "Embajada de China en Argentina: preguntas frecuentes",
    href: "https://ar.china-embassy.gov.cn/esp/lszl/sggg/202511/t20251111_11750516.htm",
    note: "Pasaporte, documentos de apoyo, cómputo de días y casos no cubiertos."
  },
  {
    label: "Embajada de China en Argentina: sección de visados",
    href: "https://ar.china-embassy.gov.cn/esp/lszl/faxz/",
    note: "Punto de entrada para trámites y avisos consulares."
  },
  {
    label: "Gobierno de China: guía de pagos para visitantes extranjeros",
    href: "https://english.www.gov.cn/news/202404/11/content_WS6617c858c6d0868f4e8e5f4d.html",
    note: "Opciones de pago móvil, tarjetas bancarias y efectivo."
  }
];

const faqs = [
  {
    question: "¿Qué necesito para viajar a China desde Argentina?",
    answer:
      "Revisa que tu pasaporte sea válido durante todo el viaje, confirma la regla de entrada que aplica a tu fecha y motivo, y guarda el itinerario, la reserva del hotel y la ruta del primer día. También conviene preparar internet móvil y al menos dos formas de pago."
  },
  {
    question: "¿Los argentinos necesitan visa para viajar a China?",
    answer:
      "Según la información publicada por la Embajada de China en Argentina y revisada el 15 de octubre de 2026, los titulares de pasaporte ordinario argentino pueden entrar sin visa por turismo, negocios, visitas, intercambios o tránsito de hasta 30 días. La vigencia anunciada llega hasta el 31 de diciembre de 2026. Verifica de nuevo la fuente oficial antes de salir, porque la regla depende del documento, el motivo y la fecha del viaje."
  },
  {
    question: "¿Qué viajes no están cubiertos por esa exención?",
    answer:
      "Las preguntas frecuentes oficiales indican que trabajo, estudios, actividades periodísticas y otros motivos no incluidos requieren revisar la visa correspondiente. Una estadía prevista de más de 30 días también debe consultarse antes del viaje."
  },
  {
    question: "¿Qué documentos conviene llevar además del pasaporte?",
    answer:
      "La fuente oficial recomienda llevar pruebas coherentes con el motivo del viaje, como pasajes de avión, reservas de alojamiento o una carta de invitación cuando corresponda. Guarda copias accesibles sin conexión."
  },
  {
    question: "¿Hay vuelos directos de Argentina a China?",
    answer:
      "Las rutas y frecuencias cambian. Revisa cada tramo de tu itinerario y no deduzcas que el código de origen y destino implica un vuelo directo. Confirma aeropuertos, terminales, equipaje y requisitos del país de escala."
  },
  {
    question: "¿Cómo conviene pagar en China?",
    answer:
      "Prepara un método principal y otro de respaldo. Alipay y WeChat Pay permiten vincular determinadas tarjetas internacionales, pero la verificación y la aceptación pueden variar. Lleva también una tarjeta física y algo de efectivo en yuanes."
  },
  {
    question: "¿Necesito internet móvil al aterrizar?",
    answer:
      "Es muy recomendable porque mapas, traducción, contacto con el hotel y pagos suelen depender de la conexión. Configura eSIM o roaming antes de volar y guarda offline la dirección del hotel y la primera ruta."
  }
];

export const metadata: Metadata = {
  title: "Viajar a China desde Argentina: visa y requisitos 2026",
  description:
    "¿Los argentinos necesitan visa para China? Requisitos de entrada, vuelos, internet, pagos y preparación del primer día.",
  authors: [{ name: "Equipo editorial de China Trip Tools" }],
  keywords: [
    "viajar a China desde Argentina",
    "visa China Argentina",
    "requisitos para viajar a China desde Argentina",
    "vuelos a China desde Argentina",
    "pasaje a China desde Argentina"
  ],
  alternates: {
    canonical: pagePath
  },
  openGraph: {
    type: "article",
    url: pagePath,
    title: "Viajar a China desde Argentina: visa y requisitos 2026",
    description:
      "Confirma si necesitas visa y prepara vuelos, internet, pagos, hotel y transporte antes de llegar a China desde Argentina.",
    images: [
      {
        url: coverImage,
        width: 1672,
        height: 941,
        alt: "Preparación de un viaje desde Argentina a China con pasaporte, itinerario, teléfono y mapa"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Viajar a China desde Argentina: visa y requisitos",
    description: "¿Los argentinos necesitan visa? Requisitos y plan para el primer día en China.",
    images: [coverImage]
  }
};

function ArticleFigure({
  src,
  alt,
  width,
  height,
  caption
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: React.ReactNode;
}) {
  return (
    <figure className="my-7 overflow-hidden rounded-lg border border-slate-200 bg-white">
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" sizes="(max-width: 896px) calc(100vw - 32px), 896px" />
      <figcaption className="border-t border-slate-200 px-4 py-3 text-sm leading-6 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function Sources() {
  return (
    <div className="grid gap-3">
      {officialSources.map((source) => (
        <TrackedExternalLink
          key={source.href}
          href={source.href}
          eventLabel={`argentina_source:${source.label}`}
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

export default function ArgentinaTravelPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${siteUrl}${pagePath}#article`,
        headline: "Viajar a China desde Argentina: visa y requisitos 2026",
        description:
          "Guía práctica para verificar requisitos y preparar vuelos, internet, pagos, hotel y transporte antes de viajar desde Argentina a China.",
        image: `${siteUrl}${coverImage}`,
        datePublished: "2026-09-13",
        dateModified: "2026-10-15",
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
          { "@type": "ListItem", position: 3, name: "Viajar a China desde Argentina", item: `${siteUrl}${pagePath}` }
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
          eyebrow="Guía para viajeros de Argentina"
          title="Viajar a China desde Argentina: ¿necesitas visa?"
          description="Para pasaporte argentino, comprueba primero si tu viaje entra en la exención vigente; después deja listos el itinerario, la conexión, los pagos, el hotel y el transporte del primer día."
          ctaLabel="Crear mi tarjeta de respaldo"
          ctaEventLabel="argentina_article_hero"
          reviewedAt="2026-10-15"
          reviewedLabel="Revisado el 15 de octubre de 2026"
          image={{
            src: coverImage,
            alt: "Preparación de un viaje desde Argentina a China con pasaporte, itinerario con escala, teléfono y mapa",
            width: 1672,
            height: 941,
            caption: "Una preparación útil no termina en el pasaporte: guarda también cada escala, el hotel, la conexión y un plan para el primer trayecto."
          }}
        />

        <article className="content-wrap max-w-4xl py-8">
          <section aria-labelledby="respuesta-rapida" className="rounded-lg border border-blue-200 bg-blue-50 p-5 sm:p-6">
            <div className="flex gap-3">
              <Info className="mt-1 shrink-0 text-blue-700" size={22} aria-hidden="true" />
              <div>
                <h2 id="respuesta-rapida" className="text-xl font-black text-blue-950">¿Los argentinos necesitan visa para China?</h2>
                <p className="mt-2 leading-7 text-blue-950">
                  Para turismo, negocios, visitas a familiares o amigos, intercambios y tránsito de hasta 30 días, los titulares de pasaporte ordinario argentino pueden entrar sin visa hasta el 31 de diciembre de 2026, según el aviso de la Embajada de China en Argentina. Para trabajo, estudios, actividades periodísticas, una estancia prevista de más de 30 días o un documento distinto del pasaporte ordinario, consulta la visa que corresponda antes de viajar.
                </p>
              </div>
            </div>
          </section>

          <ContentSection title="Qué preparar antes de viajar a China desde Argentina">
            <p>
              Una forma práctica de organizar el viaje es separar la verificación oficial de la preparación del primer día. Esta tabla resume qué revisar y qué deberías poder abrir incluso sin conexión.
            </p>
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <caption className="sr-only">Preparación recomendada antes de viajar desde Argentina a China</caption>
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="px-4 py-3 font-black">Tema</th>
                    <th className="px-4 py-3 font-black">Qué revisar</th>
                    <th className="px-4 py-3 font-black">Qué guardar offline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["Pasaporte", "Validez y datos iguales a los del pasaje", "Copia y contacto de emergencia"],
                    ["Entrada", "Exención o visa según fecha, documento y motivo", "Enlace oficial y captura"],
                    ["Vuelo", "Todos los tramos, escalas, aeropuertos y equipaje", "Itinerario y localizador"],
                    ["Internet", "eSIM, roaming o SIM compatible", "Activación y datos del proveedor"],
                    ["Pagos", "Método principal probado y alternativa", "Tarjeta física y efectivo razonable"],
                    ["Hotel", "Nombre, dirección en chino y teléfono", "Reserva y captura de la dirección"],
                    ["Transporte", "Ruta desde el aeropuerto y horario de llegada", "Mapa, punto de encuentro y plan B"]
                  ].map(([topic, check, save]) => (
                    <tr key={topic}>
                      <th scope="row" className="px-4 py-3 font-bold text-slate-900">{topic}</th>
                      <td className="px-4 py-3 text-slate-700">{check}</td>
                      <td className="px-4 py-3 text-slate-700">{save}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentSection>

          <ContentSection title="Visa para China desde Argentina: cuándo no la necesitas">
            <p>
              <strong>Revisado el 15 de octubre de 2026</strong>, la Embajada de China en Argentina informa que los titulares de pasaporte ordinario argentino pueden entrar sin visa para turismo, negocios, visitas a familiares o amigos, intercambios y tránsito, siempre que la estadía no supere los 30 días. La vigencia anunciada para Argentina es hasta las 24:00 del 31 de diciembre de 2026. No es necesario presentar una declaración previa ante la Embajada si cumples las condiciones de la exención.
            </p>
            <p className="mt-4">
              Esto no significa que todos los viajes estén cubiertos. La decisión final de entrada corresponde a las autoridades fronterizas. Trabajo, estudios, actividades periodísticas y estadías previstas de más de 30 días requieren revisar la visa correspondiente. Las preguntas frecuentes oficiales también recomiendan llevar documentos que demuestren el motivo del viaje, como pasajes, reservas de alojamiento o una invitación cuando corresponda.
            </p>
            <aside className="mt-5 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-950">
              <CalendarCheck className="mt-1 shrink-0" size={20} aria-hidden="true" />
              <p className="leading-7">
                Las políticas migratorias pueden cambiar. Vuelve a consultar la web de la Embajada de China en Argentina antes de reservar y otra vez pocos días antes de volar.
              </p>
            </aside>
            <p className="mt-5">
              Para comparar esta exención con el tránsito de 240 horas y con los casos que sí requieren visa, consulta la{` `}
              <TrackedLink
                href="/es/visa-para-china/"
                eventLabel="argentina_internal:visa_guide"
                className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-2"
              >
                guía general sobre visa para China
              </TrackedLink>
              .
            </p>
            <ArticleFigure
              src="/images/articles/viajar-a-china-desde-argentina/embassy-visa-free-extension-notice.webp"
              alt="Aviso de la Embajada de China en Argentina sobre la prórroga de la exención de visado hasta el 31 de diciembre de 2026"
              width={1928}
              height={1014}
              caption={
                <>
                  Captura del aviso publicado por la Embajada de China en Argentina el 4 de noviembre de 2025. Consulta el{` `}
                  <TrackedExternalLink
                    href="https://ar.china-embassy.gov.cn/esp/lszl/sggg/202511/t20251104_11746388.htm"
                    eventLabel="argentina_caption:visa_notice"
                    className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-2"
                  >
                    aviso original
                  </TrackedExternalLink>
                  {` `}antes de viajar.
                </>
              }
            />
          </ContentSection>

          <ContentSection title="Vuelos desde Argentina: guarda cada tramo del itinerario">
            <p>
              Un resultado que muestra Buenos Aires y una ciudad china no confirma por sí solo que el trayecto sea directo. Revisa cada tramo del pasaje: aeropuerto de salida, ciudad de escala, cambio de terminal, equipaje facturado y aeropuerto final en China.
            </p>
            <p className="mt-4">
              Guarda el código de reserva, los números de vuelo y la hora local de llegada. Si la ruta pasa por un tercer país, comprueba también sus reglas de tránsito. Para una llegada nocturna, prepara antes de salir la dirección del hotel y una alternativa al transporte público.
            </p>
          </ContentSection>

          <ContentSection title="Internet móvil: no dependas de configurarlo después de aterrizar">
            <p>
              De la conexión dependen casi todas las tareas del primer día: mapas, traducción, mensajes al hotel y pagos. Elige antes de volar entre eSIM, roaming o SIM local, verifica que tu teléfono sea compatible y guarda las instrucciones de activación.
            </p>
            <p className="mt-4">
              También conviene descargar mapas o idiomas sin conexión y guardar capturas del hotel y del primer trayecto. Revisa nuestra{` `}
              <TrackedLink
                href="/es/internet-esim-china/"
                eventLabel="argentina_internal:internet_esim"
                className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-2"
              >
                guía para preparar internet y eSIM en China
              </TrackedLink>
              .
            </p>
          </ContentSection>

          <ContentSection title="Pagos en China: prepara un método principal y un plan B">
            <p>
              La guía oficial para visitantes extranjeros presenta tres opciones: pagos móviles, tarjetas bancarias y efectivo. Alipay y WeChat Pay permiten vincular determinadas tarjetas internacionales, incluidas Visa y Mastercard, pero la configuración, la verificación y la aceptación pueden variar según la tarjeta y el comercio.
            </p>
            <p className="mt-4">
              Instala y prueba tu opción principal antes del viaje. Lleva una tarjeta física y algo de efectivo en yuanes como respaldo. No esperes a una compra importante para descubrir que falta una verificación o que el establecimiento no acepta tu método habitual.
            </p>
          </ContentSection>

          <ContentSection title="Hotel y transporte del primer día">
            <p>
              Guarda el nombre del hotel, la dirección en chino y el teléfono. Una dirección solo en español o inglés puede no alcanzar al mostrársela a un conductor o al pedir ayuda. Confirma además a qué aeropuerto y terminal llegas: una misma ciudad puede tener más de un aeropuerto y trayectos muy distintos.
            </p>
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                <caption className="sr-only">Riesgos habituales durante el primer día en China y acciones de respaldo</caption>
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="px-4 py-3 font-black">Si ocurre esto</th>
                    <th className="px-4 py-3 font-black">Haz esto primero</th>
                    <th className="px-4 py-3 font-black">Respaldo previo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["No tienes datos", "Usa el Wi-Fi del aeropuerto", "Dirección y ruta en capturas"],
                    ["Falla el pago móvil", "Prueba la tarjeta física o efectivo", "Dos métodos preparados"],
                    ["No encuentras el hotel", "Muestra la dirección en chino", "Nombre, teléfono y reserva"],
                    ["Llegas muy tarde", "Usa el plan B previsto", "Ruta y punto de encuentro guardados"]
                  ].map(([risk, action, backup]) => (
                    <tr key={risk}>
                      <th scope="row" className="px-4 py-3 font-bold text-slate-900">{risk}</th>
                      <td className="px-4 py-3 text-slate-700">{action}</td>
                      <td className="px-4 py-3 text-slate-700">{backup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentSection>

          <section className="my-8 overflow-hidden rounded-lg border border-blue-200 bg-blue-50">
            <div className="p-5 sm:p-6">
              <div className="flex gap-3">
                <ShieldCheck className="mt-1 shrink-0 text-blue-700" size={22} aria-hidden="true" />
                <div>
                  <h2 className="text-2xl font-black text-blue-950">Crea una tarjeta de respaldo para tu primer día</h2>
                  <p className="mt-2 leading-7 text-blue-950">
                    Responde unas preguntas rápidas y reúne en una sola tarjeta tus riesgos principales, la dirección del hotel, la conexión, el pago y las acciones de respaldo.
                  </p>
                  <TrackedLink
                    className="button-primary mt-5"
                    href="/es/checker/"
                    eventLabel="argentina_article:checker_cta"
                  >
                    Crear mi tarjeta de respaldo
                    <ArrowRight size={18} aria-hidden="true" />
                  </TrackedLink>
                </div>
              </div>
            </div>
            <a
              href="/images/articles/viajar-a-china-desde-argentina/checker-backup-card-result-short.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-blue-200 bg-white"
              aria-label="Abrir en tamaño completo el ejemplo de tarjeta de respaldo"
            >
              <Image
                src="/images/articles/viajar-a-china-desde-argentina/checker-backup-card-result-short.webp"
                alt="Ejemplo de tarjeta de respaldo para el primer día en China"
                width={1450}
                height={494}
                className="h-auto w-full cursor-zoom-in"
                sizes="(max-width: 896px) calc(100vw - 32px), 896px"
              />
              <span className="flex items-center justify-center gap-2 border-t border-slate-200 px-4 py-3 text-sm font-bold text-blue-700 group-hover:bg-blue-50">
                <Maximize2 size={16} aria-hidden="true" />
                Abrir ejemplo en tamaño completo
              </span>
            </a>
          </section>

          <ContentSection title="Lista final antes de salir">
            <ol className="grid gap-3 sm:grid-cols-2">
              {[
                "Reabre la fuente oficial de entrada y visa.",
                "Comprueba cada tramo y cada escala del vuelo.",
                "Activa o deja preparada tu conexión móvil.",
                "Prueba el pago principal y prepara una alternativa.",
                "Guarda hotel, teléfono y dirección en chino.",
                "Conserva offline la ruta desde el aeropuerto."
              ].map((item, index) => (
                <li key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 font-semibold text-slate-700">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-800">{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5">
              Para revisar el resto del equipaje y de la preparación, consulta también nuestra{` `}
              <TrackedLink
                href="/es/lista-para-viajar-a-china/"
                eventLabel="argentina_internal:travel_checklist"
                className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-2"
              >
                lista para viajar a China
              </TrackedLink>
              .
            </p>
          </ContentSection>

          <FAQSection items={faqs} />

          <ContentSection title="Fuentes oficiales y cómo revisamos esta guía">
            <p>
              Esta página resume información pública y organiza tareas prácticas. No sustituye una decisión de la autoridad migratoria ni una consulta consular. Contrastamos las afirmaciones de entrada con fuentes oficiales y mostramos la fecha de la última revisión para que puedas detectar cuándo volver a comprobarlas.
            </p>
            <div className="mt-5">
              <Sources />
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
