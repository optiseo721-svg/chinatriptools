import type { Metadata } from "next";
import Script from "next/script";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const siteUrl = "https://chinatriptools.com";
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || process.env.CLARITY_PROJECT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "China Trip Tools",
    template: "%s | China Trip Tools"
  },
  description:
    "Herramientas prácticas para preparar tu viaje a China: internet, pagos, hotel, transporte y primer día.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png"
  },
  alternates: {
    canonical: "/",
    languages: {
      es: "/es/"
    }
  },
  openGraph: {
    title: "China Trip Tools",
    description:
      "Crea un plan de respaldo para tu primer día en China antes de aterrizar.",
    url: siteUrl,
    siteName: "China Trip Tools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "China Trip Tools"
      }
    ],
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "China Trip Tools",
    url: siteUrl,
    inLanguage: "es"
  };

  return (
    <html lang="es">
      <body>
        <AnalyticsScripts gaId={gaId} clarityId={clarityId} />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
