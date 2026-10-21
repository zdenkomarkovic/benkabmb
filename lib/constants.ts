// Globalne konstante sajta (SEO, metadata, itd.)

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.benkabmb.com"
).replace(/\/$/, "");

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Benka BMB";

export const SITE_DESCRIPTION =
  "Tehnički pregled, registracija i osiguranje vozila (AMSO) u Bačkom Petrovcu. Sve na jednom mestu – preuzimamo vozilo, nalepnica odmah, kartice do 12 rata.";
