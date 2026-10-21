import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { COMPANY, HOURS, PHONES } from "@/lib/site";
import { PageHero } from "@/components/ui/ui";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/contact/ContactForm";
import { OpenNow } from "@/components/home/OpenNow";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Kontakt",
  path: "/kontakt",
  description:
    "Kontakt BMB Bački Petrovac: Lenjinova 36, tel. 021 780 555, 021 782 543, 021 782 488, mob. 065 6 780 555, 063 88 77 811. Radno vreme, mapa i kontakt forma.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Kontakt"
        lead="Pozovite nas, svratite u Lenjinovu 36 ili nam pošaljite poruku – odgovaramo u najkraćem roku."
        crumbs={[{ name: "Početna", href: "/" }, { name: "Kontakt" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <address className="space-y-5 not-italic">
              <div className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-brand">
                  <Icon name="map" className="size-6" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-extrabold">Adresa</h2>
                  <p className="text-muted">
                    {COMPANY.legalName}
                    <br />
                    {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city}
                  </p>
                  <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-bold underline">
                    Otvori u Google mapama
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-brand">
                  <Icon name="phone" className="size-6" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-extrabold">Telefoni</h2>
                  <ul className="text-muted">
                    {PHONES.map((p) => (
                      <li key={p.tel}>
                        {p.label}:{" "}
                        <a href={`tel:${p.tel}`} className="font-bold text-ink hover:text-brand-dark">
                          {p.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-brand">
                  <Icon name="mail" className="size-6" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-extrabold">Email</h2>
                  <a href={`mailto:${COMPANY.email}`} className="break-all font-bold hover:text-brand-dark">
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </address>

            <div className="rounded-3xl bg-paper p-7">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-lg font-extrabold">Radno vreme</h2>
                <OpenNow />
              </div>
              <dl className="mt-4 space-y-2">
                {HOURS.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-muted">{h.days}</dt>
                    <dd className="font-bold">{h.open ? `${h.open} – ${h.close}` : "Zatvoreno"}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Pošaljite poruku</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-label="Mapa" className="h-[26rem] w-full bg-paper">
        <iframe
          title="Lokacija BMB u Bačkom Petrovcu – Lenjinova 36"
          src={COMPANY.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="size-full border-0"
          allowFullScreen
        />
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Početna", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />
    </>
  );
}
