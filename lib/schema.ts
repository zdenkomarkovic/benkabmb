import { SITE_URL } from "./constants";
import { COMPANY, PHONES, PRIMARY_PHONE, SERVICES } from "./site";

export const BUSINESS_ID = `${SITE_URL}/#business`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "InsuranceAgency", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: COMPANY.brand,
    legalName: COMPANY.legalName,
    description:
      "Tehnički pregled, registracija i osiguranje vozila (AMSO) u Bačkom Petrovcu.",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    logo: `${SITE_URL}/icon.png`,
    telephone: PRIMARY_PHONE.tel,
    email: COMPANY.email,
    foundingDate: String(COMPANY.founded),
    priceRange: "$$",
    currenciesAccepted: "RSD",
    paymentAccepted: "Cash, Credit Card, Debit Card, Invoice, Check",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.street,
      postalCode: COMPANY.postalCode,
      addressLocality: COMPANY.city,
      addressCountry: COMPANY.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.lat,
      longitude: COMPANY.geo.lng,
    },
    hasMap: COMPANY.mapsUrl,
    areaServed: { "@type": "City", name: COMPANY.city },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    contactPoint: PHONES.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.tel,
      contactType: "customer service",
      availableLanguage: ["sr"],
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${SITE_URL}/usluge/${s.slug}`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: COMPANY.brand,
    inLanguage: "sr-Latn-RS",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s: (typeof SERVICES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    description: s.seoDescription,
    url: `${SITE_URL}/usluge/${s.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "City", name: COMPANY.city },
  };
}
