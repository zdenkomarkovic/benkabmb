"use client";

import { useState } from "react";
import { CONTACT_TOPICS } from "@/lib/validations";
import { cn } from "@/lib/utils";

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "ok" }
  | { status: "error"; message: string; fields?: Record<string, string[]> };

const FIELD =
  "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-ink focus:ring-4 focus:ring-brand/30";

export function ContactForm() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setState({ status: "ok" });
      } else {
        setState({
          status: "error",
          message: data.error ?? "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite.",
          fields: data.fields,
        });
      }
    } catch {
      setState({ status: "error", message: "Nema veze sa serverom. Pokušajte ponovo ili nas pozovite." });
    }
  }

  const err = (name: string) => (state.status === "error" ? state.fields?.[name]?.[0] : undefined);

  if (state.status === "ok") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-emerald-900">
        <h3 className="font-display text-xl font-extrabold">Poruka je poslata</h3>
        <p className="mt-2">Hvala vam! Odgovorićemo vam u najkraćem roku.</p>
        <button type="button" onClick={() => setState({ status: "idle" })} className="mt-5 text-sm font-bold underline">
          Pošalji novu poruku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Ime i prezime
          <input name="name" required autoComplete="name" className={cn(FIELD, err("name") && "border-red-500")} />
          {err("name") && <span className="mt-1 block text-sm font-normal text-red-600">{err("name")}</span>}
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input name="email" type="email" required autoComplete="email" className={cn(FIELD, err("email") && "border-red-500")} />
          {err("email") && <span className="mt-1 block text-sm font-normal text-red-600">{err("email")}</span>}
        </label>
      </div>
      <label className="block text-sm font-semibold">
        Tema
        <select name="topic" required defaultValue="Pitanje" className={FIELD}>
          {CONTACT_TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold">
        Poruka
        <textarea name="message" required rows={6} className={cn(FIELD, err("message") && "border-red-500")} />
        {err("message") && <span className="mt-1 block text-sm font-normal text-red-600">{err("message")}</span>}
      </label>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={state.status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 font-bold text-ink transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {state.status === "sending" ? "Slanje…" : "Pošalji poruku"}
      </button>
    </form>
  );
}
