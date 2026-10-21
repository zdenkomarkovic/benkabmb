import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Stari URL-ovi sa benkabmb.com → novi (čuva SEO rangiranje).
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/pgs/usluge.html", destination: "/usluge", permanent: true },
      { source: "/pgs/onama.html", destination: "/o-nama", permanent: true },
      { source: "/pgs/galerija.html", destination: "/galerija", permanent: true },
      { source: "/pgs/kontakt.php", destination: "/kontakt", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
