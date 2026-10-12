import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { ArticleHero, Checklist, ContentSection, FAQSection, InlineToolCta } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedExternalLink } from "@/components/TrackedExternalLink";
import { TrackedLink } from "@/components/TrackedLink";

const reviewedAt = "2026-10-12";

const officialSources = [
  {
    label: "Embajada de China en México: requisitos de visa",
    href: "https://mx.china-embassy.gov.cn/esp/LSFW/consular1/202510/t20251001_11722302.htm",
    note: "Proceso en línea, categorías, documentos básicos, plazos y requisitos adicionales por tipo de visa."
  },
  {
    label: "Administración Nacional de Inmigración: tránsito sin visa",
    href: "https://es.nia.gov.cn/n32407/n32456/c183611/content.html",
    note: "Países elegibles, incluido México, y condiciones del tránsito de hasta 240 horas hacia un tercer país o región."
  },
  {
    label: "Embajada de China en México: tarifas de visa",
    href: "https://mx.china-embassy.gov.cn/esp/LSFW/avisos/202512/t20251225_11787250.htm",
    note: "Aviso sobre la reducción temporal de tarifas, anunciada hasta el 31 de diciembre de 2026."
  }
];

const faqs = [
  {
    question: "¿Los mexicanos necesitan visa para viajar a China?",
    answer:
      "Para un viaje directo de turismo a China continental con pasaporte ordinario mexicano, revisa y tramita la visa que corresponda. México no figura en la exención unilateral de 30 días explicada en la guía general. La Embajada de China en México publica el proceso y los documentos que se aplican a cada categoría."
  },
  {
    question: "¿México puede usar el tránsito sin visa de 240 horas?",
    answer:
      "Sí, México aparece entre los países elegibles, pero no es una exención general para cualquier viaje. Debes continuar desde China hacia un tercer país o región con un billete confirmado y cumplir las condiciones de puerto, zona y actividad autorizada. Una ruta de ida y vuelta al mismo país no debe asumirse como elegible."
  },
  {
    question: "¿Cómo se solicita la visa china desde México?",
    answer:
      "La Embajada indica que la solicitud comienza en el sistema en línea del Centro de Visas: registro, formulario y carga de los documentos requeridos. Después sigue las instrucciones que muestre el sistema para tu caso y no compres servicios no reembolsables hasta confirmar el trámite."
  },
  {
    question: "¿Qué documentos básicos pide la solicitud?",
    answer:
      "La fuente consular enumera, entre otros, pasaporte con más de seis meses de validez y dos páginas en blanco, formulario en línea y foto. Para turismo, también indica itinerario, vuelos de ida y vuelta y reserva de hotel. Pueden pedir documentos adicionales según la visa y tu situación."
  },
  {
    question: "¿Cuánto tarda una visa china en México?",
    answer:
      "La Embajada señala, como referencia, cuatro días hábiles para el trámite ordinario y tres para el urgente en Ciudad de México, y recomienda solicitar con al menos un mes de anticipación. Los plazos pueden variar; confirma el plazo vigente al presentar la solicitud."
  },
  {
    question: "¿Qué preparo además de la visa?",
    answer:
      "Guarda el itinerario, las reservas, la dirección del hotel en chino, la conexión móvil y dos métodos de pago. Así podrás resolver el primer traslado sin depender de configurar todo después de aterrizar."
  }
];

export const metadata: Metadata = {
  title: "Visa para China desde México: requisitos, trámite y preparación",
  description:
    "Guía para mexicanos que viajan a China: visa para turismo, trámite en México, documentos básicos, tránsito de 240 horas y preparación del primer día.",
  authors: [{ name: "Equipo editorial de China Trip Tools" }],
  keywords: [
    "visa para China desde México",
    "visa China México",
    "mexicanos necesitan visa para China",
    "trámite visa China México",
    "requisitos para viajar a China desde México"
  ],
  alternates: {
    canonical: "/es/viajar-a-china-desde-mexico/"
  }
};

export default function MexicoPage() {
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
          eyebrow="Guía para viajeros de México"
          title="Visa para China desde México: requisitos y trámite"
          description="Qué verificar si viajas desde México a China: visa para un viaje directo, tránsito de 240 horas, documentos básicos y preparación del primer día."
          ctaLabel="Crea tu plan de respaldo"
          ctaEventLabel="mexico_hero"
          reviewedAt={reviewedAt}
          reviewedLabel="Revisado el 12 de octubre de 2026"
        />
        <article className="content-wrap py-8">
          <ContentSection title="Respuesta rápida: visa para China desde México">
            <p>
              Si viajas desde México a China continental por turismo en un itinerario directo, no des por hecho que existe una exención general de visa. Confirma primero la categoría que aplica a tu pasaporte, motivo, fechas y ruta. La Embajada de China en México publica el proceso de solicitud y los documentos de cada categoría.
            </p>
            <p className="mt-4">
              El tránsito sin visa de hasta 240 horas es un caso distinto: México está incluido entre los países elegibles, pero exige continuar desde China hacia un tercer país o región y cumplir las condiciones de entrada. Consulta la{` `}
              <TrackedLink
                href="/es/visa-para-china/"
                eventLabel="mexico_internal:visa_guide"
                className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-2"
              >
                guía general sobre visa y tránsito para China
              </TrackedLink>
              {` `}para separar ambos casos antes de comprar el vuelo.
            </p>
          </ContentSection>

          <ContentSection title="Cómo tramitar la visa china desde México">
            <ol className="grid gap-3 md:grid-cols-2">
              {[
                "Define el motivo real del viaje: turismo, negocios, estudios, trabajo, visita familiar u otro.",
                "Inicia la solicitud en línea del Centro de Visas y carga los documentos que pida el sistema.",
                "Sigue la cita o la entrega que corresponda a tu caso; no asumas que todos los solicitantes siguen el mismo paso final.",
                "Confirma el plazo y las tarifas vigentes antes de fijar vuelos u hoteles no reembolsables."
              ].map((item, index) => (
                <li key={item} className="card flex gap-3 p-4 text-slate-700">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-black text-white">{index + 1}</span>
                  <span className="font-semibold leading-6">{item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5">
              La Embajada informa que el sistema en línea está en funcionamiento desde el 30 de septiembre de 2025. Como referencia, señala cuatro días hábiles para el trámite ordinario y tres para el urgente en Ciudad de México; también recomienda iniciar con al menos un mes de anticipación. Verifica siempre el dato vigente para tu solicitud.
            </p>
          </ContentSection>

          <ContentSection title="Documentos básicos y documentos según el motivo">
            <p>
              La lista exacta cambia según la categoría. Para comenzar, la fuente consular indica pasaporte con más de seis meses de validez y dos páginas en blanco, formulario en línea y foto. Para una visa de turismo, indica además itinerario, vuelos de ida y vuelta y reserva de hotel.
            </p>
            <Checklist
              items={[
                "Pasaporte vigente y copias solicitadas.",
                "Formulario en línea completo y foto con el formato requerido.",
                "Itinerario y reservas coherentes con el motivo del viaje.",
                "Carta de invitación o documentos específicos cuando la categoría los exija.",
                "Comprobante de residencia legal si solicitas fuera de tu país de origen.",
                "Tiempo suficiente para revisar solicitudes de información adicional."
              ]}
            />
          </ContentSection>

          <ContentSection title="Tránsito de 240 horas: cuándo puede aplicar">
            <p>
              La política de tránsito sin visa no equivale a una visa turística ni elimina los requisitos para un viaje directo. La Administración Nacional de Inmigración incluye a México entre los países elegibles para una estancia de hasta 240 horas, siempre que el pasajero transite hacia un tercer país o región con fecha e itinerario determinados y entre por un puerto autorizado.
            </p>
            <p className="mt-4">
              Antes de basar un itinerario en esta opción, verifica la ruta completa, el puerto de entrada, las zonas de estancia y que tu actividad esté permitida. Trabajo, estudios y actividades periodísticas requieren la visa correspondiente.
            </p>
          </ContentSection>

          <ContentSection title="Prepara el primer día en China">
            <Checklist
              items={[
                "Guarda la dirección del hotel en chino, el teléfono y la reserva.",
                "Configura datos móviles o eSIM antes de salir de México.",
                "Prueba el método de pago principal y lleva una alternativa física.",
                "Revisa aeropuerto, terminal, escala y la ruta del primer traslado.",
                "Conserva sin conexión los billetes, reservas y enlaces oficiales.",
                "Evita organizar conexiones ajustadas durante las primeras horas de llegada."
              ]}
            />
            <p className="mt-5">
              Consulta también la{` `}
              <TrackedLink
                href="/es/internet-esim-china/"
                eventLabel="mexico_internal:internet_guide"
                className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-2"
              >
                guía de internet y eSIM en China
              </TrackedLink>
              {` `}y la{` `}
              <TrackedLink
                href="/es/lista-para-viajar-a-china/"
                eventLabel="mexico_internal:checklist"
                className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-2"
              >
                lista final antes de viajar
              </TrackedLink>
              .
            </p>
          </ContentSection>

          <InlineToolCta label="mexico_inline" />

          <ContentSection title="Fuentes oficiales para confirmar el trámite">
            <p>
              Esta guía organiza la preparación del viaje; no sustituye a la Embajada, al Centro de Visas ni a la autoridad migratoria. Revisa las fuentes oficiales antes de pagar o volar, porque los requisitos y plazos pueden cambiar.
            </p>
            <div className="mt-5 grid gap-3">
              {officialSources.map((source) => (
                <TrackedExternalLink
                  key={source.href}
                  href={source.href}
                  className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 text-slate-800 hover:border-blue-300"
                  eventLabel={`mexico_source:${source.label}`}
                >
                  <span>
                    <strong className="block">{source.label}</strong>
                    <span className="mt-1 block text-sm font-normal leading-6 text-slate-600">{source.note}</span>
                  </span>
                  <ExternalLink className="mt-1 shrink-0" size={17} aria-hidden="true" />
                </TrackedExternalLink>
              ))}
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
