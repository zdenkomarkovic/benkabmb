import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { CALCULATOR_URL, COMPANY, GENERAL_FAQ, PHONES, PRIMARY_PHONE, SERVICES, SMS_EXAMPLE, SMS_NUMBER } from "@/lib/site";
import { ButtonA, ButtonLink, Faq, SectionHeading } from "@/components/ui/ui";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Gallery } from "@/components/home/Gallery";
import { SmsGuide } from "@/components/home/SmsGuide";
import { OpenNow } from "@/components/home/OpenNow";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = {
  ...buildMetadata({
    description:
      "Tehnički pregled, registracija i osiguranje vozila (AMSO) u Bačkom Petrovcu. Preuzimamo vozilo, nalepnica odmah, kartice do 12 rata. Lenjinova 36 – pozovite 021 780 555.",
  }),
  title: { absolute: "Tehnički pregled, registracija i osiguranje – Bački Petrovac | Benka BMB" },
};

const PERKS: { icon: IconName; title: string; text: string }[] = [
  { icon: "car", title: "Preuzimamo vaše vozilo", text: "Neregistrovano vozilo preuzimamo od vas i vraćamo registrovano." },
  { icon: "zap", title: "Nalepnica odmah", text: "Registracionu nalepnicu dobijate odmah po obavljenoj registraciji." },
  { icon: "card", title: "Do 12 mesečnih rata", text: "Plaćanje platnim karticama uz mogućnost otplate na rate." },
  { icon: "wallet", title: "Svi računi na jednom mestu", text: "Plaćamo sve vrste računa uz minimalnu šaltersku proviziju." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div className="fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
              <span className="size-2 rounded-full bg-brand" /> {COMPANY.tagline}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Tehnički pregled, registracija i osiguranje vozila u{" "}
              <span className="text-brand">Bačkom Petrovcu</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Ušteda vremena na jednom mestu: pregledamo, registrujemo i osiguravamo vaše vozilo. Ovlašćeni
              zastupnik AMSO osiguranja od {COMPANY.founded}. godine.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonA href={`tel:${PRIMARY_PHONE.tel}`}>
                <Icon name="phone" className="size-4" /> Pozovite {PRIMARY_PHONE.display}
              </ButtonA>
              <ButtonLink href="/usluge" variant="ghost">
                Pogledajte usluge <Icon name="arrow" className="size-4" />
              </ButtonLink>
            </div>
            <OpenNow className="mt-6 text-white/80" />
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <Image
                src="/images/gallery/sl_1.jpg"
                alt="Poslovnica Benka BMB u Lenjinovoj ulici u Bačkom Petrovcu"
                fill
                priority
                sizes="(min-width:1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white p-4 text-ink shadow-xl sm:left-auto sm:right-6 sm:max-w-xs">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand">
                <Icon name="shield" className="size-6" />
              </span>
              <p className="text-sm leading-snug">
                <strong className="block font-display text-base">Zastupnik AMSO</strong>
                Licenca za prodaju osiguranja
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Usluge"
            title="Sve što vašem vozilu treba – na jednom mestu"
            lead="Od tehničkog pregleda do osiguranja i plaćanja računa: jedna adresa, bez trčanja po gradu."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/usluge/${s.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-xl"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-ink text-brand">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-muted">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">
                    Saznajte više
                    <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PERKS */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Zašto BMB" title="Brzo, jednostavno i bez gužve" align="center" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <li key={p.title} className="rounded-3xl bg-white p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand text-ink">
                  <Icon name={p.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SMS CALCULATOR */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Besplatan SMS kalkulator"
            title="Cenu registracije saznajte jednom porukom"
            lead={`Pošaljite SMS na ${SMS_NUMBER.display} iz bilo koje mreže. Svaki deo poruke ima svoju boju, pa lako vidite šta se upisuje.`}
          />
          <div className="mt-12">
            <SmsGuide />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonA href={`sms:${SMS_NUMBER.tel}?body=${encodeURIComponent(SMS_EXAMPLE)}`} variant="dark">
              <Icon name="sms" className="size-4" /> Pošalji SMS
            </ButtonA>
            <ButtonA href={CALCULATOR_URL} target="_blank" rel="noopener noreferrer">
              <Icon name="file" className="size-4" /> Online kalkulator
            </ButtonA>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Galerija" title="Pogledajte našu stanicu" />
            <ButtonLink href="/galerija" variant="dark">
              Sve fotografije <Icon name="arrow" className="size-4" />
            </ButtonLink>
          </div>
          <div className="mt-10">
            <Gallery limit={6} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Česta pitanja" title="Odgovori na ono što nas najčešće pitaju" align="center" />
          <div className="mt-12">
            <Faq items={GENERAL_FAQ} />
          </div>
        </div>
        <JsonLd data={faqSchema(GENERAL_FAQ)} />
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Spremni da registrujete vozilo?</h2>
            <p className="mt-3 text-white/75">
              {COMPANY.street}, {COMPANY.city} · {PHONES.slice(0, 2).map((p) => p.display).join(" · ")}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonA href={`tel:${PRIMARY_PHONE.tel}`}>
              <Icon name="phone" className="size-4" /> Pozovite
            </ButtonA>
            <ButtonLink href="/kontakt" variant="ghost">
              Kontakt i lokacija
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
