import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Benka BMB – Bački Petrovac",
    short_name: "Benka BMB",
    description: "Tehnički pregled, registracija i osiguranje vozila u Bačkom Petrovcu.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1a33",
    lang: "sr-Latn-RS",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
