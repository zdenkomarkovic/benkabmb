import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { PageHero } from "@/components/ui/ui";
import { Gallery } from "@/components/home/Gallery";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Galerija",
  path: "/galerija",
  description:
    "Fotografije poslovnice i stanice za tehnički pregled vozila BMB u Bačkom Petrovcu, Lenjinova 36.",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Galerija"
        lead="Pogledajte našu poslovnicu i stanicu za tehnički pregled u Lenjinovoj ulici."
        crumbs={[{ name: "Početna", href: "/" }, { name: "Galerija" }]}
      />
      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Gallery />
        </div>
      </section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Početna", path: "/" },
          { name: "Galerija", path: "/galerija" },
        ])}
      />
    </>
  );
}
