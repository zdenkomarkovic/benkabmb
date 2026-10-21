import { buildMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/ui";

export const metadata = buildMetadata({ title: "Stranica nije pronađena", noIndex: true });

export default function NotFoundPage() {
  return (
    <section className="container-x py-28 text-center">
      <p className="font-display text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-3xl font-extrabold">Stranica nije pronađena</h1>
      <p className="mt-3 text-muted">Stranica koju tražite ne postoji ili je premeštena.</p>
      <ButtonLink href="/" className="mt-8">
        Nazad na početnu
      </ButtonLink>
    </section>
  );
}
