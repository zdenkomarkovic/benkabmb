import { SMS_NUMBER } from "@/lib/site";

// Svaki deo poruke ima svoju boju – ista boja se koristi u poruci i u objašnjenju.
const PARTS = [
  {
    token: "bmb",
    title: "Šifra usluge",
    text: "Uvek na početku poruke.",
    chip: "bg-brand text-ink",
    dot: "bg-brand text-ink",
  },
  {
    token: "put",
    title: "Vrsta vozila",
    text: "put – putničko, ter – teretno, mot – motocikl.",
    chip: "bg-sky-300 text-ink",
    dot: "bg-sky-300 text-ink",
  },
  {
    token: "44",
    title: "Snaga motora u kW",
    text: "Za teretna vozila upišite nosivost umesto kW (npr. 1.5).",
    chip: "bg-emerald-300 text-ink",
    dot: "bg-emerald-300 text-ink",
  },
  {
    token: "1242",
    title: "Zapremina motora (cm³)",
    text: "Kubikaža iz saobraćajne dozvole.",
    chip: "bg-violet-300 text-ink",
    dot: "bg-violet-300 text-ink",
  },
  {
    token: "2004",
    title: "Godina proizvodnje",
    text: "Poslednji broj u poruci.",
    chip: "bg-rose-300 text-ink",
    dot: "bg-rose-300 text-ink",
  },
] as const;

export function SmsGuide() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <ol className="space-y-4">
        {PARTS.map((p, i) => (
          <li key={p.token} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-4">
            <span className={`grid size-9 shrink-0 place-items-center rounded-full text-sm font-extrabold ${p.dot}`}>
              {i + 1}
            </span>
            <p className="min-w-0">
              <span className="flex flex-wrap items-center gap-2 font-display font-extrabold">
                {p.title}
                <code className={`rounded-md px-2 py-0.5 font-mono text-sm ${p.chip}`}>{p.token}</code>
              </span>
              <span className="mt-0.5 block text-sm text-muted">{p.text}</span>
            </p>
          </li>
        ))}
      </ol>

      <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-ink p-5 shadow-2xl">
        <div className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/60">
          Poruka za <span className="font-semibold text-white">{SMS_NUMBER.display}</span>
        </div>

        <div className="mt-5 ml-auto w-fit max-w-full rounded-2xl rounded-br-sm bg-white p-4">
          <div className="flex flex-wrap items-end gap-2 font-mono text-lg font-bold">
            {PARTS.map((p, i) => (
              <span key={p.token} className="flex flex-col items-center gap-1.5">
                <span className={`grid size-5 place-items-center rounded-full font-sans text-[11px] font-extrabold ${p.dot}`}>
                  {i + 1}
                </span>
                <span className={`rounded-lg px-2.5 py-1 ${p.chip}`}>{p.token}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3 text-sm text-white/80">
          Cena registracije stiže u odgovoru. Poruka je besplatna iz svih mreža.
        </div>
      </div>
    </div>
  );
}
