import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const title = "Qué ver en Shenzhen: ruta práctica y excursiones cercanas";
const url = "https://chinatriptools.com/es/que-ver-en-shenzhen/";
const imageRoot = "/images/articles/que-ver-en-shenzhen";

export const metadata: Metadata = {
  title,
  description: "Qué ver en Shenzhen en dos días: Futian, Lianhua Hill, Huaqiangbei y Nantou. Opciones para un tercer día en Dapeng, Guangzhou o Hong Kong.",
  alternates: { canonical: "/es/que-ver-en-shenzhen/" },
  openGraph: { title, description: "Una ruta flexible por Shenzhen y opciones para continuar el viaje por el sur de China.", url, type: "article", images: [`${imageRoot}/cover.jpg`] }
};

const sources = [
  { title: "Gobierno de Shenzhen: cinco rutas City Walk", url: "https://www.sz.gov.cn/en_szgov/news/latest/content/post_11574970.html" },
  { title: "Gobierno de Shenzhen: sitios históricos de Nantou y Dapeng", url: "https://www.sz.gov.cn/en_szgov/news/infocus/SZCitywalk/Explore/CitywalkRoutes/VentureSZ/content/post_11894160.html" },
  { title: "Gobierno de Shenzhen: parque Lianhua Hill", url: "https://www.sz.gov.cn/en_szgov/news/infocus/park/csgy/content/post_11190503.html" },
  { title: "MTR: destinos del tren Hong Kong–Shenzhen–Guangzhou", url: "https://www.highspeed.mtr.com.hk/en/ticket/destination.html" },
  { title: "APEC: reunión de líderes en Shenzhen, noviembre de 2026", url: "https://www.apec.org/press/news-releases/2026/1119_AELM_PR" }
];

export default function ShenzhenGuide() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    mainEntityOfPage: url,
    inLanguage: "es",
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    author: { "@type": "Organization", name: "China Trip Tools" },
    image: `${imageRoot}/cover.jpg`
  };

  return <div className="page-shell"><SiteHeader/><main>
    <header className="bg-white"><div className="content-wrap max-w-4xl py-10">
      <nav aria-label="Ruta de navegación" className="text-sm text-slate-600"><Link href="/es/" className="underline">Inicio</Link> / <Link href="/es/guias/" className="underline">Guías</Link> / Shenzhen</nav>
      <p className="eyebrow mt-6">China meridional</p>
      <h1 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-slate-700">Shenzhen recibió la reunión de líderes de APEC en noviembre de 2026. Si el interés por la ciudad te ha llevado hasta aquí, esta guía propone dos días de visitas y un tercero opcional. Es un recorrido editorial para viajeros, no una ruta oficial del evento ni el relato de un viaje realizado.</p>
      <p className="mt-4 text-sm text-slate-500">Por el equipo editorial de China Trip Tools · Revisado el 20 de noviembre de 2026</p>
      <figure className="mt-7"><Image src={`${imageRoot}/cover.jpg`} alt="Vista real del Centro Cívico y los edificios de Futian desde el parque Lianhuashan, Shenzhen" width={1600} height={1200} sizes="(max-width: 896px) 100vw, 896px" priority className="h-auto w-full rounded-lg"/><figcaption className="mt-2 text-xs leading-5 text-slate-500">Futian visto desde Lianhuashan en diciembre de 2025. Foto: <a className="underline" href="https://commons.wikimedia.org/wiki/File:Civic_Centre_and_Futian_CBD,_Shenzhen_-_20251227,_views_from_Lianhuashan_Park.jpg">Pathfinbird / Wikimedia Commons</a>, <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>; imagen redimensionada. No es una foto de APEC.</figcaption></figure>
      <nav aria-label="Contenido" className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-blue-700"><a href="#dos-dias">Dos días</a><a href="#tercer-dia">Tercer día</a><a href="#logistica">Logística</a><a href="#fuentes">Fuentes</a></nav>
    </div></header>
    <article className="content-wrap max-w-4xl space-y-12 py-10 text-slate-700">
      <section className="rounded-lg border border-blue-200 bg-blue-50 p-5"><h2 className="text-xl font-black text-blue-950">Respuesta rápida</h2><p className="mt-2 leading-7 text-blue-950">Para una primera visita, reserva un día para Futian y Huaqiangbei y otro para Nantou y el área de Shenzhen Bay o Shekou. Con un tercer día, elige una sola salida: Dapeng dentro de Shenzhen, Guangzhou en tren o Hong Kong cruzando la frontera. Confirma horarios, transportes y requisitos de entrada para tu fecha y pasaporte.</p></section>
      <section id="dos-dias" className="scroll-mt-24"><h2 className="text-2xl font-black text-slate-950">Qué ver en Shenzhen en dos días</h2>
        <h3 className="mt-5 text-xl font-bold text-slate-950">Día 1: Futian y Huaqiangbei</h3><p className="mt-2 leading-7">Empieza por Lianhua Hill Park (莲花山公园) para orientarte con una vista de Futian y el Centro Cívico. Baja después hacia la zona del Centro Cívico y dedica la tarde a Huaqiangbei (华强北). El gobierno municipal incluye estos lugares en sus rutas urbanas. Huaqiangbei es interesante incluso sin comprar electrónica: deja tiempo para explorar, pero verifica precios y garantías antes de pagar.</p>
        <figure className="mt-5"><Image src={`${imageRoot}/huaqiangbei.jpg`} alt="Fotografía de la calle peatonal Huaqiangbei en Shenzhen" width={1200} height={900} sizes="(max-width: 896px) 100vw, 896px" className="h-auto w-full rounded-lg"/><figcaption className="mt-2 text-xs leading-5 text-slate-500">Calle peatonal Huaqiangbei, fotografía de 2019: <a href="https://commons.wikimedia.org/wiki/File:Huaqiangbei_walking_street.jpg" className="underline">Mx. Granger / Wikimedia Commons</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/" className="underline">CC0</a>. La escena y los comercios pueden haber cambiado.</figcaption></figure>
        <h3 className="mt-8 text-xl font-bold text-slate-950">Día 2: Nantou y el oeste de la ciudad</h3><p className="mt-2 leading-7">Visita Nantou Ancient Town (南头古城) con calma: sus calles y espacios culturales dan un contrapunto histórico a Futian. La ruta municipal lo presenta como un lugar ligado a la historia de Shenzhen y Hong Kong. Si todavía tienes energía, continúa hacia Shenzhen Bay o Shekou; elige uno según la ubicación de tu hotel, en lugar de atravesar toda la ciudad para acumular paradas.</p>
      </section>
      <section id="tercer-dia" className="scroll-mt-24"><h2 className="text-2xl font-black text-slate-950">Un tercer día: elige una sola excursión</h2><div className="mt-5 grid gap-4 md:grid-cols-3"><div className="rounded-lg border border-slate-200 p-5"><h3 className="font-bold text-slate-950">Dapeng</h3><p className="mt-2 leading-6">Historia y costa dentro de Shenzhen. Dapeng Fortress y la península requieren más tiempo de traslado; revisa el acceso y el clima antes de salir.</p></div><div className="rounded-lg border border-slate-200 p-5"><h3 className="font-bold text-slate-950">Guangzhou</h3><p className="mt-2 leading-6">Si buscas otra ciudad de Guangdong, consulta estaciones y trenes disponibles. Evita tratar la jornada como tiempo completo de visita.</p></div><div className="rounded-lg border border-slate-200 p-5"><h3 className="font-bold text-slate-950">Hong Kong</h3><p className="mt-2 leading-6">Es un cruce de frontera, no un desplazamiento urbano. Comprueba la documentación aplicable, el paso elegido y el margen para controles en ambos sentidos.</p></div></div><p className="mt-4 leading-7">La red ferroviaria oficial de MTR conecta Hong Kong con estaciones de Shenzhen y Guangzhou, pero los trenes y tiempos concretos cambian según el servicio. <Link href="/es/trenes-en-china/" className="underline">Lee nuestra guía de trenes</Link> antes de reservar.</p></section>
      <section id="logistica" className="scroll-mt-24"><h2 className="text-2xl font-black text-slate-950">Lo que conviene preparar</h2><ul className="mt-4 list-disc space-y-3 pl-6 leading-7"><li>Comprueba tu <Link href="/es/visa-para-china/" className="underline">situación de entrada a China continental</Link>. Si incluyes Hong Kong y vuelves a Shenzhen, revisa por separado el derecho de entrada y reentrada; no presupongas que una exención cubre todo el recorrido.</li><li>Guarda nombres y direcciones en chino, la estación exacta y una alternativa si el tren o el paso fronterizo elegido no te conviene.</li><li>Prepara <Link href="/es/internet-esim-china/" className="underline">conexión móvil</Link> y <Link href="/es/como-pagar-en-china/" className="underline">métodos de pago</Link> antes de llegar. Las condiciones de uso pueden diferir entre China continental y Hong Kong.</li></ul><div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5"><h3 className="font-black text-slate-950">Crea un respaldo para tu llegada</h3><p className="mt-2 leading-7">Usa la herramienta del sitio para guardar los datos esenciales del primer día.</p><Link href="/es/checker/" className="button-primary mt-4 inline-flex">Preparar mi viaje</Link></div></section>
      <section id="fuentes" className="scroll-mt-24"><h2 className="text-2xl font-black text-slate-950">Fuentes y límites de esta guía</h2><p className="mt-3 leading-7">Las paradas y su orden son una propuesta editorial basada en lugares descritos por fuentes oficiales. No son horarios, disponibilidad ni una experiencia personal verificada. Consulta de nuevo las fuentes antes del viaje.</p><ul className="mt-4 list-disc space-y-2 pl-6 leading-7">{sources.map((source)=><li key={source.url}><a href={source.url} className="underline">{source.title}</a></li>)}</ul></section>
    </article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
  </main><SiteFooter/></div>;
}