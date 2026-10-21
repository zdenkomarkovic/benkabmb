import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .min(1, "Email je obavezan")
  .email("Unesite ispravnu email adresu");

export const CONTACT_TOPICS = [
  "Pitanje",
  "Poslovna ponuda",
  "Promocija",
  "Žalba",
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Unesite ime i prezime").max(100),
  email: emailSchema,
  topic: z.enum(CONTACT_TOPICS, { message: "Izaberite temu" }),
  message: z
    .string()
    .trim()
    .min(10, "Poruka mora imati najmanje 10 karaktera")
    .max(2000, "Poruka je predugačka"),
  /** Honeypot – ljudi ga ne vide; botovi ga popune. */
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
