import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "ghost" | "light";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand text-ink hover:bg-brand-dark shadow-[0_6px_20px_-6px_rgba(255,194,14,.7)]",
  dark: "bg-ink text-white hover:bg-ink-2",
  light: "bg-white text-ink hover:bg-paper",
  ghost: "border border-white/30 text-white hover:bg-white/10",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors";

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: { variant?: Variant } & ComponentProps<typeof Link>) {
  return <Link className={cn(BASE, VARIANTS[variant], className)} {...props} />;
}

/** Običan <a> (tel:, mailto:, spoljašnji linkovi). */
export function ButtonA({
  variant = "primary",
  className,
  ...props
}: { variant?: Variant } & ComponentProps<"a">) {
  return <a className={cn(BASE, VARIANTS[variant], className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-dark">
          {eyebrow}
        </p>
      )}
      <h2 className={cn("text-3xl font-extrabold sm:text-4xl", dark && "text-white")}>
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-4 text-lg", dark ? "text-white/75" : "text-muted")}>{lead}</p>
      )}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Putanja" className="text-sm text-white/70">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.name} className="flex items-center gap-2">
            {it.href ? (
              <Link href={it.href} className="hover:text-white">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-white">
                {it.name}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  title,
  lead,
  crumbs,
}: {
  title: string;
  lead?: string;
  crumbs: { name: string; href?: string }[];
}) {
  return (
    <section className="bg-ink pb-14 pt-10 text-white sm:pb-20 sm:pt-14">
      <div className="container-x">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-lg text-white/75">{lead}</p>}
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group p-5 sm:px-7">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-paper transition-transform group-open:rotate-180">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
