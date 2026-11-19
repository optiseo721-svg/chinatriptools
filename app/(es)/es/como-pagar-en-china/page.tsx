import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentSection, FAQSection, Checklist, InlineToolCta } from "@/components/ArticleBlocks";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const title = "Cómo pagar en China: Alipay, WeChat Pay, tarjetas y efectivo";
const url = "https://chinatriptools.com/es/como-pagar-en-china/";
const cover = "/images/articles/como-pagar-en-china/cover-photo.png";
const sources = [
  ["Guía oficial de servicios cotidianos: pagos, tarjetas y efectivo", "https://english.www.gov.cn/2025special/bizexpatsinchina2025"],
  ["Tencent: Weixin Pay para visitantes internacionales", "https://www.tencent.com/index.php/en-us/articles/2201652.html"],
  ["Alipay: condiciones del servicio con tarjetas internacionales", "https://cschannel.alipay.com/mobile/helpDetail.htm?help_id=201602777221&keyword=3"],
  ["Guía oficial de inversión 2024: referencia sobre comisiones", "https://english.www.gov.cn/AssetsZi/Foreign_Investment_Guide_of_the_People%27s_Republic_of_China_2024.pdf"]
];
const faqs = [
  { question: "¿Necesito una cuenta bancaria china para pagar?", answer: "No necesariamente. Alipay y WeChat/Weixin Pay permiten vincular tarjetas internacionales admitidas para compras en comercios. La autorización depende de la aplicación y del banco emisor; no equivale a disponer de todas las funciones de una cuenta local." },
  { question: "¿Cómo pagar en China con Alipay?", answer: "Regístrate, añade una tarjeta admitida y completa las verificaciones solicitadas. En un comercio compatible puedes escanear su código de cobro o mostrar tu código de pago. Comprueba el importe y la tarjeta seleccionada antes de autorizar." },
  { question: "¿Cómo pagar en China con WeChat?", answer: "Activa WeChat/Weixin Pay según las instrucciones de tu cuenta y vincula una tarjeta admitida. Usa la función de escaneo o el código de pago en comercios compatibles. Una tarjeta extranjera no garantiza acceso a transferencias personales o sobres rojos." },
  { question: "¿Puedo viajar solo con una tarjeta Visa o Mastercard?", answer: "Es mejor contar con otra opción. La aceptación directa de tarjetas internacionales depende del establecimiento y del terminal. Prepara una aplicación de pago y una reserva de efectivo en RMB." },
  { question: "¿Necesito un número de teléfono chino?", answer: "La guía oficial permite registrarse con un número extranjero o chino. Conserva acceso al número registrado para recibir verificaciones. Una eSIM de solo datos no sustituye a tu línea para recibir SMS." },
  { question: "¿Alipay y WeChat Pay son gratis?", answer: "No conviene asumirlo. Pueden aplicarse comisiones de la plataforma y del banco emisor. Revisa la pantalla de confirmación y las condiciones de tu tarjeta; una promoción o exención puede depender de tu cuenta." }
];
export const metadata: Metadata = {
  title, description: "Prepara tus pagos en China: Alipay y WeChat Pay con tarjeta extranjera, comisiones, efectivo y alternativas si falla un pago.",
  alternates: { canonical: "/es/como-pagar-en-china/" },
  openGraph: { title, url, type: "article", images: [{ url: cover, width: 1536, height: 1024 }] },
  twitter: { card: "summary_large_image", title, images: [cover] }
};
export default function PaymentsPage() {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: title, mainEntityOfPage: url, image: `https://chinatriptools.com${cover}`, inLanguage: "es", author: { "@type": "Organization", name: "China Trip Tools", url: "https://chinatriptools.com/es/about/" } };
  return <div className="page-shell"><SiteHeader /><main>
    <header className="bg-white"><div className="content-wrap max-w-4xl py-10">
      <nav aria-label="Ruta de navegación" className="text-sm text-slate-600"><Link href="/es/" className="underline">Inicio</Link> / Pagos en China</nav>
      <p className="eyebrow mt-6">Dinero y preparación</p>
      <h1 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{title}</h1>
      <p className="mt-5 text-lg leading-8 text-slate-700">Prepara una aplicación de pago con una tarjeta compatible, lleva una segunda tarjeta y guarda algo de efectivo en RMB. Así tendrás una alternativa si una compra no se puede completar.</p>
      <p className="mt-4 text-sm text-slate-500">Por el equipo editorial de China Trip Tools · Guía basada en fuentes oficiales, sin pruebas propias de vinculación con tarjetas extranjeras.</p>
      <figure className="mt-7"><Image src={cover} alt="Escena de pago con un teléfono junto al terminal de una cafetería" width={1536} height={1024} priority sizes="(max-width: 896px) 100vw, 896px" className="h-auto w-full rounded-lg" /><figcaption className="mt-2 text-xs text-slate-500">Imagen de ambientación generada con IA; no documenta una transacción real.</figcaption></figure>
      <nav aria-label="Contenido" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-brand-green">{[["opciones", "Qué método elegir"], ["preparacion", "Antes de viajar"], ["comisiones", "Comisiones"], ["problemas", "Si falla un pago"], ["fuentes", "Fuentes"]].map(([id, label]) => <a key={id} href={`#${id}`} className="underline underline-offset-4">{label}</a>)}</nav>
    </div></header>
    <article className="content-wrap max-w-4xl pb-10">
      <div id="opciones" className="scroll-mt-24"><ContentSection title="Qué método de pago conviene llevar">
        <p>La guía oficial contempla aplicaciones, tarjetas y efectivo. Vincular una tarjeta a una aplicación y pagar directamente con esa tarjeta en un terminal son operaciones distintas: que una funcione no garantiza la otra. <a href={sources[0][1]} className="underline">Consulta la guía oficial.</a></p>
        <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[520px] border-collapse text-left text-sm"><caption className="sr-only">Comparación de métodos de pago para turistas</caption><thead className="bg-emerald-50"><tr>{["Método", "Cuándo resulta útil", "Qué comprobar"].map(t => <th key={t} scope="col" className="p-3">{t}</th>)}</tr></thead><tbody>{[
          ["Alipay o WeChat/Weixin Pay", "Compras en comercios compatibles con el pago mediante QR.", "Tarjeta admitida, verificación, conexión y comisión indicada."],
          ["Tarjeta internacional", "Hoteles y establecimientos con terminal compatible.", "Logotipos aceptados y condiciones del banco emisor."],
          ["Efectivo en RMB", "Alternativa cuando la aplicación o la tarjeta no funcionan.", "Billetes pequeños y cambio disponible."]
        ].map(row => <tr key={row[0]} className="border-b border-slate-200">{row.map((cell,i) => i === 0 ? <th scope="row" key={cell} className="p-3 align-top">{cell}</th> : <td key={cell} className="p-3 align-top">{cell}</td>)}</tr>)}</tbody></table></div>
      </ContentSection></div>
      <div id="preparacion" className="scroll-mt-24"><ContentSection title="Antes de viajar: prepara el acceso y una alternativa">
        <Checklist items={["Descarga la aplicación oficial y crea tu cuenta.", "Conserva acceso al número registrado y a los SMS de verificación.", "Añade una tarjeta compatible y completa las verificaciones solicitadas.", "Revisa con tu banco los pagos internacionales y sus comisiones.", "Lleva una segunda tarjeta y prepara efectivo en RMB.", "Guarda los contactos de ayuda del banco y de la aplicación."]} />
        <p className="mt-4">Una tarjeta añadida no demuestra que todas las compras vayan a funcionar. No envíes dinero a desconocidos para probarla. Completa la configuración y comprueba el resultado en tu primera compra real. Prepara también <Link href="/es/internet-esim-china/" className="underline">tu conexión a internet en China</Link>: una eSIM de datos puede dar conexión, pero no necesariamente SMS en tu número habitual.</p>
      </ContentSection></div>
      <ContentSection title="Cómo pagar con Alipay o WeChat/Weixin Pay">
        <h3 className="text-lg font-bold">Alipay</h3><p>Registra tu cuenta y busca la opción para añadir una tarjeta bancaria. Sigue las indicaciones de identidad y autorización de tu banco. En un comercio compatible, puedes escanear el código del establecimiento o mostrar tu código de pago para que lo lean. Comprueba el destinatario, el importe y la tarjeta elegida antes de confirmar.</p>
        <h3 className="mt-5 text-lg font-bold">WeChat/Weixin Pay</h3><p>Localiza la sección de servicios o cartera de tu cuenta y sigue el proceso de activación y vinculación. Los nombres y las pantallas pueden variar según el idioma, la versión y tu cuenta. Tencent confirma la posibilidad de vincular tarjetas internacionales para pagar en comercios. <a href={sources[1][1]} className="underline">Información de Tencent.</a></p>
        <p className="mt-4">No confundas el QR de un comercio con una transferencia personal. El servicio de tarjetas internacionales de Alipay está destinado a compras, no a transferencias, inversión o retirada de efectivo. No asumas que una tarjeta extranjera habilita esas funciones en otras aplicaciones. <a href={sources[2][1]} className="underline">Condiciones de Alipay.</a></p>
      </ContentSection>
      <div id="comisiones" className="scroll-mt-24"><ContentSection title="Comisiones: qué revisar antes de confirmar">
        <p>La guía oficial de 2024 describía una exención de la comisión de servicio hasta 200 RMB por operación y un 3 % sobre el importe total por encima de 200 RMB al pagar con una tarjeta internacional vinculada. Es una referencia publicada, no una garantía de las condiciones actuales de tu cuenta. <a href={sources[3][1]} className="underline">Fuente y fecha de esa referencia.</a></p>
        <p className="mt-4">La guía oficial de 2025 indica que las marcas admitidas, los límites y las tarifas varían por producto. Comprueba la comisión mostrada antes de pagar y cualquier promoción aplicable. Aparte, tu banco puede cobrar conversión de moneda o una comisión por operación internacional. Una exención de la aplicación no elimina necesariamente estos costes.</p>
      </ContentSection></div>
      <ContentSection title="Tarjetas y efectivo: prepara un respaldo">
        <p>Pregunta si el comercio acepta tu tarjeta y comprueba los logotipos del terminal. Para obtener RMB, la guía oficial recoge bancos, puntos y máquinas de cambio señalizados, además de cajeros compatibles con tarjetas internacionales. Consulta los costes de retirada y cambio con tu banco y en el cajero antes de aceptar.</p>
        <p className="mt-4">Lleva una cantidad de respaldo ajustada a tus primeras compras y busca billetes pequeños. En autobuses u otros servicios con pago en efectivo puede ser necesario el importe exacto. La opción disponible depende de la ciudad y del operador.</p>
      </ContentSection>
      <div id="problemas" className="scroll-mt-24"><ContentSection title="Si falla un pago: qué hacer a continuación">
        <dl className="space-y-5">{[
          ["No puedes vincular la tarjeta", "Comprueba los datos y la autorización del banco. Contacta con el emisor o con el soporte de la aplicación; prueba otra tarjeta admitida si dispones de ella."],
          ["El QR no admite tu tarjeta extranjera", "Pregunta por otro método de cobro comercial. Un código de transferencia personal puede no admitir el mismo servicio. Usa otra tarjeta o efectivo."],
          ["No llega el código de verificación", "Comprueba que la línea del número registrado sigue activa y puede recibir SMS. Una conexión de datos por sí sola no garantiza recibirlos."],
          ["El pago queda pendiente", "Comprueba el historial antes de repetirlo y confirma el estado con el comercio. Evita autorizar varias veces sin saber si la primera operación se cobró."],
          ["No tienes conexión o batería", "Utiliza tu tarjeta física o efectivo y recupera la conexión. No dependas de una captura de un código de pago: puede caducar."]
        ].map(([term, detail]) => <div key={term}><dt className="font-bold text-slate-950">{term}</dt><dd>{detail}</dd></div>)}</dl>
      </ContentSection></div>
      <FAQSection items={faqs} /><InlineToolCta label="payments_backup_plan" />
      <ContentSection title="Continúa preparando tu viaje"><p>Revisa la <Link href="/es/lista-para-viajar-a-china/" className="underline">lista de preparación</Link> y los <Link href="/es/visa-para-china/" className="underline">requisitos de entrada y visado</Link>. Las condiciones de pago se comprueban con la aplicación y el banco; la nacionalidad por sí sola no garantiza que una tarjeta sea admitida.</p></ContentSection>
      <div id="fuentes" className="scroll-mt-24"><ContentSection title="Fuentes y alcance de esta guía"><p>Información recopilada de documentación oficial. Las fuentes tienen fechas de publicación diferentes; consulta las condiciones vigentes en la aplicación antes de autorizar una operación.</p><ul className="mt-4 space-y-3">{sources.map(([label, href]) => <li key={href}><a href={href} className="underline underline-offset-4">{label}</a></li>)}</ul></ContentSection></div>
    </article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></main><SiteFooter /></div>;
}
