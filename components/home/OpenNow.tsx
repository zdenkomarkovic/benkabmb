"use client";

import { useEffect, useState } from "react";
import { SCHEDULE } from "@/lib/site";
import { cn } from "@/lib/utils";

const fmt = (m: number) =>
  `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;

function status(now: Date) {
  // Radno vreme je u srpskoj vremenskoj zoni bez obzira na uređaj posetioca.
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Belgrade",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const minutes = (Number(get("hour")) % 24) * 60 + Number(get("minute"));
  const today = SCHEDULE[day];
  if (today && minutes >= today[0] && minutes < today[1]) {
    return { open: true, text: `Otvoreno do ${fmt(today[1])}` };
  }
  if (today && minutes < today[0]) {
    return { open: false, text: `Zatvoreno – otvaramo u ${fmt(today[0])}` };
  }
  for (let i = 1; i <= 7; i++) {
    const next = SCHEDULE[(day + i) % 7];
    if (next) return { open: false, text: `Zatvoreno – otvaramo ${i === 1 ? "sutra" : "narednog radnog dana"} u ${fmt(next[0])}` };
  }
  return { open: false, text: "Zatvoreno" };
}

export function OpenNow({ className }: { className?: string }) {
  const [s, setS] = useState<ReturnType<typeof status> | null>(null);

  useEffect(() => {
    setS(status(new Date()));
    const id = setInterval(() => setS(status(new Date())), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className={cn("inline-flex items-center gap-2 text-sm font-semibold", className)} aria-live="polite">
      <span
        className={cn("size-2.5 rounded-full", s?.open ? "bg-emerald-500" : "bg-slate-400")}
        aria-hidden="true"
      />
      {s ? s.text : "Pon–Pet 07–15h, Sub 08–12h"}
    </p>
  );
}
