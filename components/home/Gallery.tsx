"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export function Gallery({ limit }: { limit?: number }) {
  const items = limit ? GALLERY.slice(0, limit) : GALLERY;
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? undefined : items[active];
  const closeRef = useRef<HTMLButtonElement>(null);

  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, step]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map((g, i) => (
          <li key={g.src}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-paper"
              aria-label={`Uvećaj fotografiju: ${g.alt}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width:1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Pregled fotografije"
          className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Zatvori"
          >
            <Icon name="x" className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 rotate-180 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Prethodna fotografija"
          >
            <Icon name="arrow" className="size-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Sledeća fotografija"
          >
            <Icon name="arrow" className="size-6" />
          </button>
          <figure className="relative h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} fill sizes="90vw" className="object-contain" priority />
            <figcaption className="absolute inset-x-0 -bottom-9 text-center text-sm text-white/80">
              {current.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
