import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  /** Putanja od /public ili apsolutni URL */
  image?: string;
  /** Putanja stranice (npr. "/usluge") – koristi se za canonical */
  path?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

/**
 * Helper za Next.js Metadata. Naslov se ne dopunjava sufiksom jer je
 * seoTitle već pun naslov; root layout dodaje template samo za kratke naslove.
 */
export function buildMetadata({
  title,
  description,
  image = "/og-image.jpg",
  path = "/",
  noIndex = false,
  type = "website",
}: BuildMetadataOptions = {}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "sr_RS",
      type,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
