import type { MetadataRoute } from "next";

const siteUrl = "https://chinatriptools.com";
const lastModified = new Date("2026-08-31");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/es/",
    "/es/checker/",
    "/es/lista-para-viajar-a-china/",
    "/es/internet-esim-china/",
    "/es/viajar-a-china-desde-espana/",
    "/es/viajar-a-china-desde-mexico/",
    "/es/about/",
    "/es/privacy/",
    "/es/cookies/"
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path.includes("checker") ? "monthly" : "weekly",
    priority: path === "/es/" ? 1 : 0.8
  }));
}
