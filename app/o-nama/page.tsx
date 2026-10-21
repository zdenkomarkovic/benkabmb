import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { CALCULATOR_URL, COMPANY, HOURS, SMS_EXAMPLE, SMS_NUMBER } from "@/lib/site";
import { ButtonLink, PageHero, SectionHeading } from "@/components/ui/ui";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "O nama",
  path: "/o-nama",
  description:
    "BMB Bački Petrovac – prva privatna firma osnovana 2001. radi unapređenja saobraćaja i bezbednosti. Ovlašćeni zastupnik AMSO osiguranja, kvalifikovano osoblje i moderna oprema.",
});

const STATS = [
  { v: String(COMPANY.founded), l: "godina osnivanja" },
  { v: "AMSO", l: "ovlašćeni zastupnik" },
  { v: "12", l: "mesečnih rata" },
  { v: "5", l: "telefonskih linija" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="O nama"
        lead="Prva privatna firma osnovana radi poboljšanja saobraćaja i bezbednosti u opštini Bački Petrovac."
        crumbs={[{ name: "Početna", href: "/" }, { name: "O nama" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg text-muted">
            <SectionHeading eyebrow="Ko smo mi" title={COMPANY.legalName} />
            <p>
              Osnovani smo {COMPANY.founded}. godine kao prva privatna firma u opštini Bački Petrovac koja se bavi
              unapređenjem saobraćajnih prilika i bezbednosti. Ovlašćeni smo zastupnik AMSO osiguranja na ovom
              području i posedujemo licencu za prodaju osiguranja.
            </p>
            <p>
              Uspeh gradimo na kvalifikovanom osoblju, modernoj opremi i velikom broju zadovoljnih klijenata.
              Naša vizija je da postanemo lider na regionalnom tržištu.
            </p>
            <h3 className="pt-2 text-2xl font-extrabold text-ink">Misija</h3>
            <p>
              Pružamo profesionalne usluge u drumskom saobraćaju uz stalno unapređenje kvaliteta – zadovoljan
              klijent je nam na prvom mestu. Ulažemo u obuku zaposlenih i tehnički razvoj.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/gallery/sl_3.jpg"
              alt="Ulaz u poslovnicu BMB u Bačkom Petrovcu"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-white">
        <dl className="container-x grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l}>
              <dt className="sr-only">{s.l}</dt>
              <dd className="font-display text-4xl font-extrabold text-brand sm:text-5xl">{s.v}</dd>
              <p className="mt-1 text-sm text-white/70">{s.l}</p>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-line p-8">
            <span className="grid size-12 place-items-center rounded-2xl bg-ink text-brand">
              <Icon name="clock" className="size-6" />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold">Radno vreme</h2>
            <dl className="mt-5 space-y-3">
              {HOURS.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 border-b border-line pb-3 last:border-0">
                  <dt className="text-muted">{h.days}</dt>
                  <dd className="font-bold">{h.open ? `${h.open} – ${h.close}` : "Zatvoreno"}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-3xl bg-brand p-8">
            <span className="grid size-12 place-items-center rounded-2xl bg-ink text-brand">
              <Icon name="sms" className="size-6" />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold">SMS kalkulator registracije</h2>
            <p className="mt-3">
              Pošaljite SMS na <strong>{SMS_NUMBER.display}</strong> (besplatno iz svih mreža) u formatu:
            </p>
            <p className="mt-3 rounded-xl bg-white/60 p-4 font-mono text-sm">bmb [tip] [kW] [cm³] [godina]</p>
            <p className="mt-3 text-sm">
              Primer: <code className="font-bold">{SMS_EXAMPLE}</code>. Tip: put – putničko, ter – teretno, mot –
              motocikl. Za teretna vozila unesite nosivost umesto kW (npr. 1.5).
            </p>
            <a href={CALCULATOR_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-bold underline">
              Ili koristite online kalkulator registracije →
            </a>
          </div>
        </div>
        <div className="container-x mt-10">
          <ButtonLink href="/kontakt" variant="dark">
            Kontaktirajte nas <Icon name="arrow" className="size-4" />
          </ButtonLink>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Početna", path: "/" },
          { name: "O nama", path: "/o-nama" },
        ])}
      />
    </>
  );
}
