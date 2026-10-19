import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentSection, FAQSection, Checklist } from "@/components/ArticleBlocks";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const title = "Trenes en China: cómo comprar billetes y viajar con pasaporte";
const url = "https://chinatriptools.com/es/trenes-en-china/";
const cover = "/images/articles/trenes-en-china/cover.webp";
const sources = [
  { label: "China Railway 12306: preguntas frecuentes sobre billetes, identidad y embarque", href: "https://www.12306.cn/en/faq.html?item=2" },
  { label: "Guía oficial de Shanghái: cómo comprar boletos de tren", href: "https://spanish.shanghai.gov.cn/sp-Transportation/20250303/b64f8237bc7746da9e6d7456c2e47dcc.html" }
];
const faqs = [
  { question: "¿Puede una persona extranjera comprar un billete con pasaporte?", answer: "Sí. El pasaporte es un documento admitido para comprar en ventanilla y para registrar al pasajero en 12306. Introduce los datos tal como aparecen en el documento y lleva el mismo pasaporte al viajar." },
  { question: "¿Hay que recoger un billete de papel?", answer: "Por lo general, no: los billetes electrónicos permiten acceder con el documento usado al comprar. Si el lector no reconoce tu pasaporte, acude al control manual con tiempo suficiente." },
  { question: "¿Es lo mismo una búsqueda de trenes que una reserva confirmada?", answer: "No. La disponibilidad y el precio de la búsqueda pueden cambiar. Comprueba que el pago se ha completado y que el pedido aparece confirmado antes de organizar el resto del viaje." },
  { question: "¿Qué hago si no puedo verificar mi identidad o pagar en 12306?", answer: "Revisa que los datos del pasajero coincidan con el pasaporte. Si falla la verificación o el pago, consulta la ayuda oficial de 12306, prueba un canal de venta autorizado o acude a una ventanilla con el pasaporte." },
  { question: "¿Puedo cambiar o cancelar un billete?", answer: "Existen opciones de cambio y reembolso, pero plazos, cargos y excepciones dependen del billete y del momento de la solicitud. Consulta las condiciones vigentes de 12306 antes de confirmar una modificación." }
];

export const metadata: Metadata = {
  title,
  description: "Guía práctica para viajar en tren por China: elegir estación y servicio, comprar en 12306 con pasaporte, revisar el pedido y pasar el control de embarque.",
  alternates: { canonical: "/es/trenes-en-china/" },
  openGraph: { title, url, type: "article", images: [{ url: cover, width: 1200, height: 900 }] },
  twitter: { card: "summary_large_image", title, images: [cover] }
};

export default function TrainsInChinaPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "Article", headline: title,
    mainEntityOfPage: url, image: `https://chinatriptools.com${cover}`, inLanguage: "es",
    dateModified: "2026-10-19",
    author: { "@type": "Organization", name: "China Trip Tools", url: "https://chinatriptools.com/es/about/" }
  };

  return <div className="page-shell"><SiteHeader /><main>
    <header className="bg-white"><div className="content-wrap max-w-4xl py-10">
      <nav aria-label="Ruta de navegación" className="text-sm text-slate-600"><Link href="/es/" className="underline">Inicio</Link> / Trenes en China</nav>
      <p className="eyebrow mt-6">Transporte entre ciudades</p>
      <h1 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-slate-700">Para viajar en tren por China, empieza por elegir bien las estaciones de salida y llegada. Puedes comprar el billete en los canales oficiales de China Railway, como 12306, o en una agencia autorizada. Reserva con los datos de tu pasaporte y lleva ese mismo documento el día del viaje.</p>
      <p className="mt-4 text-sm text-slate-500">Por el equipo editorial de China Trip Tools · Revisado el 19 de octubre de 2026 · Guía basada en fuentes oficiales y fotografías y capturas aportadas para esta página.</p>
      <figure className="mt-7"><Image src={cover} alt="Tren de alta velocidad en una estación ferroviaria de China" width={1200} height={900} priority sizes="(max-width: 896px) 100vw, 896px" className="h-auto w-full rounded-lg" /><figcaption className="mt-2 text-xs text-slate-500">Estación y tren de alta velocidad en China. Imagen aportada para esta guía.</figcaption></figure>
      <nav aria-label="Contenido" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-brand-green">{[["elegir", "Elegir tren"], ["comprar", "Comprar billete"], ["estacion", "En la estación"], ["preguntas", "Preguntas"], ["fuentes", "Fuentes"]].map(([id, label]) => <a key={id} href={`#${id}`} className="underline underline-offset-4">{label}</a>)}</nav>
    </div></header>
    <article className="content-wrap max-w-4xl pb-10">
      <div id="elegir" className="scroll-mt-24"><ContentSection title="Elige el tren y comprueba ambas estaciones">
        <p>Las grandes ciudades pueden tener varias estaciones. Fíjate en el nombre completo: la estación principal, la estación Norte, Sur, Este u Oeste pueden estar muy alejadas entre sí. Compara también la hora de llegada, la duración y la clase de asiento antes de ordenar por precio.</p>
        <p className="mt-4">Los trenes de alta velocidad suelen aparecer con letras como G o D; también hay servicios convencionales y nocturnos. No elijas solo por la letra: revisa las paradas y el tiempo total de esa salida concreta. La disponibilidad y las tarifas pueden cambiar antes de pagar.</p>
        <figure className="mt-6"><div className="mx-auto max-w-[370px]"><Image src="/images/articles/trenes-en-china/search-results.jpg" alt="Ejemplo independiente de búsqueda de trenes entre Chongqing y Shenzhen: estaciones, horarios, duración, clases y disponibilidad" width={945} height={2048} sizes="(max-width: 420px) 85vw, 370px" className="h-auto w-full rounded-lg border border-slate-200" /></div><figcaption className="mx-auto mt-2 max-w-[620px] text-sm leading-6 text-slate-500">Ejemplo 1: búsqueda real de Chongqing a Shenzhen en una aplicación en chino. Sirve para leer horarios, estaciones, duración y plazas; no corresponde al pedido de la siguiente sección, no muestra tarifas actuales y no es una captura de 12306.</figcaption></figure>
      </ContentSection></div>
      <div id="comprar" className="scroll-mt-24"><ContentSection title="Cómo comprar un billete con pasaporte">
        <p><a href={sources[0].href} className="underline">China Railway</a> enumera 12306.cn, su aplicación, ventanillas y agencias autorizadas entre los canales de venta. Si usas 12306, crea la cuenta, añade al pasajero con su nombre y pasaporte tal como figuran en el documento, busca la ruta y la fecha, elige una salida y revisa los detalles antes de pagar. La <a href={sources[1].href} className="underline">guía oficial en español de Shanghái</a> describe el flujo de la aplicación.</p>
        <Checklist items={["Confirma la estación exacta de salida y la de llegada.", "Comprueba fecha, hora, número de tren y clase de asiento.", "Copia nombre y número de pasaporte sin abreviaturas ni cambios.", "Verifica el importe y espera a que el pedido indique que está confirmado."]} />
        <p className="mt-5">Una pantalla de búsqueda no garantiza plaza. Si el pago falla, consulta el estado del pedido antes de repetirlo para evitar cargos duplicados. Si reservas con una agencia, comprueba sus condiciones y posibles cargos propios; China Railway advierte que no gestiona incidencias de venta de sitios ajenos a sus canales.</p>
        <figure className="mt-6"><div className="mx-auto max-w-[370px]"><Image src="/images/articles/trenes-en-china/order-example.jpeg" alt="Ejemplo independiente de un pedido de tren de Shanghai Hongqiao a Xi'an Norte, con horario, estaciones, número de tren y acceso de control" width={1080} height={1350} sizes="(max-width: 420px) 85vw, 370px" className="h-auto w-full rounded-lg border border-slate-200" /></div><figcaption className="mx-auto mt-2 max-w-[620px] text-sm leading-6 text-slate-500">Ejemplo 2: pedido real antiguo de Shanghai Hongqiao a Xi&apos;an Norte, distinto de la búsqueda anterior. Los datos personales están ocultos. Corresponde a un viajero con documento chino; ilustra dónde comprobar tren, estaciones, horario y acceso, no el proceso de verificación con pasaporte extranjero ni las condiciones actuales.</figcaption></figure>
      </ContentSection></div>
      <div id="estacion" className="scroll-mt-24"><ContentSection title="En la estación: seguridad, control y embarque">
        <p>Acude con margen para llegar a la estación correcta, pasar el control de seguridad y encontrar la sala y el acceso indicados. Lleva el mismo pasaporte utilizado en la reserva. Para los billetes electrónicos, la documentación oficial indica que el pasajero debe conservar la información del viaje y presentar el documento válido al entrar, salir y subir al tren. Si un lector automático no acepta el pasaporte, solicita el control manual.</p>
        <p className="mt-4">El número de acceso y el andén pueden cambiar. Consulta la pantalla y los avisos de la estación el día del viaje; una captura guardada de un trayecto anterior no sustituye la información en directo.</p>
        <figure className="mt-6"><Image src="/images/articles/trenes-en-china/check-in-gate.jpg" alt="Acceso de control de billetes y torniquetes en una estación ferroviaria china" width={4000} height={3000} sizes="(max-width: 896px) 100vw, 896px" className="h-auto w-full rounded-lg" /><figcaption className="mt-2 text-sm leading-6 text-slate-500">Foto real de un acceso de control. El cartel de esta imagen es antiguo: úsalo solo para reconocer el tipo de entrada, no para confirmar un andén o una norma vigente.</figcaption></figure>
      </ContentSection></div>
      <ContentSection title="Si necesitas cambiar o cancelar el viaje"><p>Consulta primero el pedido y las condiciones que muestra el canal donde compraste el billete. Las posibilidades de cambio, los plazos y los cargos dependen del momento y del tipo de reserva. La <a href={sources[0].href} className="underline">información oficial de 12306</a> incluye reglas de cambios y reembolsos; compruébalas antes de cancelar o comprar otro billete.</p></ContentSection>
      <div id="preguntas" className="scroll-mt-24"><FAQSection items={faqs} /></div>
      <ContentSection title="Prepara el resto del trayecto"><p>Ten listo un método de pago alternativo con la <Link href="/es/como-pagar-en-china/" className="underline">guía para pagar en China</Link>. Si usarás la aplicación durante el viaje, revisa también <Link href="/es/internet-esim-china/" className="underline">internet y eSIM</Link> y la <Link href="/es/lista-para-viajar-a-china/" className="underline">lista de preparación</Link>.</p></ContentSection>
      <div id="fuentes" className="scroll-mt-24"><ContentSection title="Fuentes y alcance"><p>Esta guía no vende billetes ni sustituye las condiciones de China Railway. Las capturas muestran ejemplos reales, pero no acreditan disponibilidad, tarifas ni reglas vigentes para una compra nueva.</p><ul className="mt-4 space-y-3">{sources.map(source => <li key={source.href}><a href={source.href} className="underline underline-offset-4">{source.label}</a></li>)}</ul></ContentSection></div>
    </article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></main><SiteFooter /></div>;
}
