import Image from "next/image";
import Link from "next/link";
import { COMPANY, HOURS, NAV, PHONES, SERVICES } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-16 text-white/80 md:pb-10">
      <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-white px-3 py-1.5">
              <Image src="/images/logo.png" alt="BMB logo" width={170} height={90} className="h-10 w-auto" />
            </span>
            <span className="font-display text-lg font-extrabold text-white">Benka BMB</span>
          </div>
          <p className="mt-4 text-sm">
            {COMPANY.legalName}. Tehnički pregled, registracija i osiguranje vozila – {COMPANY.tagline.toLowerCase()}
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">Usluge</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/usluge/${s.slug}`} className="hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">Kontakt</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p className="flex gap-2">
              <Icon name="map" className="mt-0.5 size-4 shrink-0 text-brand" />
              <a href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city}
              </a>
            </p>
            {PHONES.map((p) => (
              <p key={p.tel} className="flex gap-2">
                <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-brand" />
                <a href={`tel:${p.tel}`} className="hover:text-brand">
                  {p.display}
                </a>
              </p>
            ))}
            <p className="flex gap-2">
              <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-brand" />
              <a href={`mailto:${COMPANY.email}`} className="break-all hover:text-brand">
                {COMPANY.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">Radno vreme</h2>
          <dl className="mt-4 space-y-2 text-sm">
            {HOURS.map((h) => (
              <div key={h.days} className="flex justify-between gap-3">
                <dt>{h.days}</dt>
                <dd className="font-semibold text-white">{h.open ? `${h.open} – ${h.close}` : "Zatvoreno"}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-brand">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
        <p>
          © {COMPANY.founded}–{new Date().getFullYear()} {COMPANY.brand}. Sva prava zadržana.
        </p>
        <p>
          Izrada sajta{" "}
          <a href="https://manikamwebsolutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand">
            Manikam Web Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
