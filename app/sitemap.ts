import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SERVICES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: "monthly" | "yearly" = "monthly",
  ) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency, priority });

  return [
    page("", 1),
    page("/usluge", 0.9),
    ...SERVICES.map((s) => page(`/usluge/${s.slug}`, 0.8)),
    page("/o-nama", 0.6, "yearly"),
    page("/galerija", 0.5, "yearly"),
    page("/kontakt", 0.8),
  ];
}
