import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { CookieConsent } from "@/components/CookieConsent";
import NotFound from "./not-found";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chinatriptools.com"),
  title: "China Trip Tools",
  description: "Herramientas prácticas para preparar tu viaje a China: internet, pagos, hotel, transporte y primer día.",
  icons: { icon: "/icon.png", apple: "/apple-touch-icon.png" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "China Trip Tools",
    description: "Crea un plan de respaldo para tu primer día en China antes de aterrizar.",
    url: "https://chinatriptools.com",
    siteName: "China Trip Tools",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "China Trip Tools" }],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "China Trip Tools",
    description: "Crea un plan de respaldo para tu primer día en China antes de aterrizar.",
    images: ["/og-image.png"]
  }
};

export default function GlobalNotFound() {
  return <html lang="es"><body>
    <AnalyticsScripts
      gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID}
      clarityId={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || process.env.CLARITY_PROJECT_ID}
    />
    <NotFound />
    <CookieConsent />
  </body></html>;
}
