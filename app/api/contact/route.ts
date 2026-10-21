import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export const runtime = "nodejs";

// Jednostavan rate limit u memoriji (po IP): 5 poruka na 10 minuta.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Previše pokušaja. Pokušajte kasnije." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    // Popunjen honeypot: glumimo uspeh da botu ne otkrijemo razlog.
    if (body && typeof body === "object" && "website" in body && body.website) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: "Proverite unete podatke.", fields: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { MAILJET_API_KEY, MAILJET_SECRET_KEY, SITE_MAIL_SENDER, SITE_MAIL_RECEIVER } = process.env;
  if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !SITE_MAIL_SENDER || !SITE_MAIL_RECEIVER) {
    console.error("Mailjet env varijable nisu podešene.");
    return NextResponse.json({ error: "Slanje trenutno nije dostupno. Pozovite nas telefonom." }, { status: 503 });
  }

  const { name, email, topic, message } = parsed.data;

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString("base64")}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: SITE_MAIL_SENDER.trim(), Name: "Benka BMB sajt" },
          To: [{ Email: SITE_MAIL_RECEIVER.trim() }],
          ReplyTo: { Email: email, Name: name },
          Subject: `[benkabmb.com] ${topic} – ${name}`,
          TextPart: `Ime: ${name}\nEmail: ${email}\nTema: ${topic}\n\n${message}`,
          HTMLPart: `<p><b>Ime:</b> ${escapeHtml(name)}<br><b>Email:</b> ${escapeHtml(email)}<br><b>Tema:</b> ${escapeHtml(topic)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
        },
      ],
    }),
  }).catch(() => null);

  if (!res?.ok) {
    console.error("Mailjet greška", res?.status, await res?.text().catch(() => ""));
    return NextResponse.json({ error: "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
