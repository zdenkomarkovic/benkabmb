"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container-x py-28 text-center">
      <h1 className="text-3xl font-extrabold">Došlo je do greške</h1>
      <p className="mt-3 text-muted">Nešto nije u redu. Pokušajte ponovo.</p>
      <button
        onClick={reset}
        className="mt-8 rounded-full bg-brand px-6 py-3 text-sm font-bold text-ink hover:bg-brand-dark"
      >
        Pokušaj ponovo
      </button>
    </section>
  );
}
