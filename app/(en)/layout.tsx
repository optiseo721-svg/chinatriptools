import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import "../globals.css";

const siteUrl = "https://chinatriptools.com";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "China Trip Tools | Travel planning in English", template: "%s | China Trip Tools" },
  description: "Practical planning resources for your trip to China.",
  icons: { icon: "/icon.png", apple: "/apple-touch-icon.png" },
  openGraph: { siteName: "China Trip Tools", locale: "en_US", type: "website" }
};
export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "China Trip Tools", url: siteUrl + "/en/", inLanguage: "en" };
  return <html lang="en"><body>
    <AnalyticsScripts gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID} clarityId={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || process.env.CLARITY_PROJECT_ID} />
    <script id="website-schema-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    {children}
  </body></html>;
}
