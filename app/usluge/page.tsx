import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SERVICES } from "@/lib/site";
import { PageHero } from "@/components/ui/ui";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Usluge u drumskom saobraćaju",
  path: "/usluge",
  description:
    "Usluge u drumskom saobraćaju u Bačkom Petrovcu: tehnički pregled, registracija vozila, osiguranje (AMSO), šalterske usluge, zelena karta i međunarodna dokumenta.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Usluge u drumskom saobraćaju"
        lead="Tehnički pregled, registracija, osiguranje i šalterske usluge – sve što vam treba za vozilo, na jednom mestu u Bačkom Petrovcu."
        crumbs={[{ name: "Početna", href: "/" }, { name: "Usluge" }]}
      />
      <section className="py-16 sm:py-24">
        <ul className="container-x grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/usluge/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:border-brand hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] bg-paper">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="text-2xl font-extrabold">{s.title}</h2>
                  <p className="mt-2 flex-1 text-muted">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
                    Detaljnije
                    <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Početna", path: "/" },
          { name: "Usluge", path: "/usluge" },
        ])}
      />
    </>
  );
}
