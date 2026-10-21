import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { CALCULATOR_URL, PHONES, PRIMARY_PHONE, SERVICES, SMS_NUMBER } from "@/lib/site";
import { ButtonA, Faq, PageHero } from "@/components/ui/ui";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return buildMetadata({
    title: s.seoTitle,
    description: s.seoDescription,
    path: `/usluge/${s.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero
        title={s.h1}
        lead={s.intro}
        crumbs={[
          { name: "Početna", href: "/" },
          { name: "Usluge", href: "/usluge" },
          { name: s.title },
        ]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-paper">
              <Image src={s.image} alt={s.imageAlt} fill priority sizes="(min-width:1024px) 60vw, 100vw" className="object-cover" />
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {s.highlights.map((h) => (
                <li key={h} className="flex gap-3 rounded-2xl bg-paper p-4">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  <span className="font-semibold">{h}</span>
                </li>
              ))}
            </ul>

            {s.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="text-2xl font-extrabold sm:text-3xl">{sec.heading}</h2>
                {sec.body && <p className="mt-3 max-w-3xl text-lg text-muted">{sec.body}</p>}
                {sec.items && (
                  <ul className="mt-4 space-y-3">
                    {sec.items.map((it) => (
                      <li key={it} className="flex gap-3 text-lg">
                        <Icon name="check" className="mt-1.5 size-4 shrink-0 text-brand-dark" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Česta pitanja</h2>
              <Faq items={s.faq} />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-ink p-7 text-white">
              <h2 className="text-xl font-extrabold">Treba vam pomoć?</h2>
              <p className="mt-2 text-sm text-white/75">Pozovite nas ili svratite – Lenjinova 36, Bački Petrovac.</p>
              <ButtonA href={`tel:${PRIMARY_PHONE.tel}`} className="mt-5 w-full">
                <Icon name="phone" className="size-4" /> {PRIMARY_PHONE.display}
              </ButtonA>
              <ul className="mt-4 space-y-1 text-sm text-white/80">
                {PHONES.slice(1).map((p) => (
                  <li key={p.tel}>
                    <a href={`tel:${p.tel}`} className="hover:text-brand">
                      {p.label}: {p.display}
                    </a>
                  </li>
                ))}
              </ul>
              {s.slug === "registracija-vozila" && (
                <div className="mt-5 space-y-3 rounded-xl bg-white/10 p-4 text-sm">
                  <p>
                    SMS kalkulator: <strong className="text-brand">{SMS_NUMBER.display}</strong>
                  </p>
                  <a
                    href={CALCULATOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-brand underline"
                  >
                    Online kalkulator cene registracije <Icon name="arrow" className="size-4" />
                  </a>
                </div>
              )}
            </div>

            <nav aria-label="Ostale usluge" className="rounded-3xl border border-line p-7">
              <h2 className="font-display text-lg font-extrabold">Ostale usluge</h2>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/usluge/${o.slug}`} className="flex items-center gap-3 font-semibold hover:text-brand-dark">
                      <Icon name={o.icon} className="size-5 text-brand-dark" /> {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={faqSchema(s.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Početna", path: "/" },
          { name: "Usluge", path: "/usluge" },
          { name: s.title, path: `/usluge/${s.slug}` },
        ])}
      />
    </>
  );
}
