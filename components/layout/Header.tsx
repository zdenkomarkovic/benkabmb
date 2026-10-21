"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, PRIMARY_PHONE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Benka BMB – početna">
          <Image src="/images/logo.png" alt="BMB logo" width={170} height={90} priority className="h-11 w-auto" />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-base font-extrabold">Benka BMB</span>
            <span className="block text-xs text-muted">Bački Petrovac</span>
          </span>
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-paper",
                isActive(n.href) && "bg-paper text-ink",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PRIMARY_PHONE.tel}`}
            className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            <Icon name="phone" className="size-4" />
            {PRIMARY_PHONE.display}
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full hover:bg-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "x" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobilna navigacija" className="border-t border-line bg-white md:hidden">
          <ul className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-3 py-3 font-semibold hover:bg-paper",
                    isActive(n.href) && "bg-paper",
                  )}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
