import Link from "next/link";
import { PRIMARY_PHONE } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

/** Fiksna traka za poziv na mobilnim uređajima. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden">
      <a
        href={`tel:${PRIMARY_PHONE.tel}`}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-bold text-ink"
      >
        <Icon name="phone" className="size-4" /> Pozovite
      </a>
      <Link
        href="/kontakt"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-bold text-white"
      >
        <Icon name="mail" className="size-4" /> Pošaljite poruku
      </Link>
    </div>
  );
}
