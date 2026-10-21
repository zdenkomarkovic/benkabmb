// Svi podaci o firmi i uslugama na jednom mestu (preuzeto sa benkabmb.com).

export const COMPANY = {
  legalName: "D.O.O. za usluge u drumskom saobraćaju BMB Bački Petrovac",
  brand: "Benka BMB",
  tagline: "Sve na jednom mestu!",
  founded: 2001,
  street: "Lenjinova 36",
  postalCode: "21470",
  city: "Bački Petrovac",
  country: "RS",
  email: "benkaBMB@neobee.net",
  geo: { lat: 45.356194, lng: 19.586744 },
  mapsUrl: "https://www.google.com/maps?q=45.356194,19.586744&z=16",
  mapsEmbed: "https://www.google.com/maps?q=45.356194,19.586744&z=16&output=embed",
} as const;

export interface Phone {
  label: string;
  display: string;
  tel: string;
}

export const PHONES: Phone[] = [
  { label: "Tel/Fax", display: "021 780 555", tel: "+38121780555" },
  { label: "Tel/Fax", display: "021 782 543", tel: "+38121782543" },
  { label: "Tel", display: "021 782 488", tel: "+38121782488" },
  { label: "Mob", display: "065 6 780 555", tel: "+381656780555" },
  { label: "Mob", display: "063 88 77 811", tel: "+381638877811" },
];

export const PRIMARY_PHONE: Phone = { label: "Tel/Fax", display: "021 780 555", tel: "+38121780555" };
export const SMS_NUMBER = { display: "069 60 30 30", tel: "+38169603030" };

/** Radno vreme. day: 0 = nedelja … 6 = subota. Vreme u minutima od ponoći. */
export const HOURS = [
  { days: "Ponedeljak – Petak", open: "07:00", close: "15:00" },
  { days: "Subota", open: "08:00", close: "12:00" },
  { days: "Nedelja", open: null, close: null },
] as const;

export const SCHEDULE: Record<number, [number, number] | null> = {
  0: null,
  1: [420, 900],
  2: [420, 900],
  3: [420, 900],
  4: [420, 900],
  5: [420, 900],
  6: [480, 720],
};

export const NAV = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge" },
  { href: "/o-nama", label: "O nama" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export interface Service {
  slug: string;
  icon: "inspect" | "file" | "shield" | "wallet" | "plus";
  title: string;
  short: string;
  /** SEO */
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  highlights: string[];
  sections: { heading: string; body?: string; items?: string[] }[];
  image: string;
  imageAlt: string;
  faq: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "tehnicki-pregled",
    icon: "inspect",
    title: "Tehnički pregled vozila",
    short:
      "Tehnički pregled putničkih, teretnih vozila i motocikala do 4 t, kao i traktora i priključnih vozila.",
    seoTitle: "Tehnički pregled vozila Bački Petrovac",
    seoDescription:
      "Tehnički pregled vozila u Bačkom Petrovcu na modernoj opremi: vozila do 4 t, motocikli, traktori i priključna vozila. Registracija i osiguranje na istom mestu. Pozovite 021 780 555.",
    h1: "Tehnički pregled vozila u Bačkom Petrovcu",
    intro:
      "Tehnički pregled obavljamo na modernoj opremi, uz kvalifikovano osoblje, u visokim standardima struke. Nakon pregleda na istom mestu možete odmah da registrujete i osigurate vozilo – bez trčanja po gradu.",
    highlights: [
      "Motorna vozila do 4 t najveće dozvoljene mase",
      "Traktori i priključna vozila za traktore – bez ograničenja",
      "Moderna oprema i iskusno osoblje",
      "Registracija, osiguranje i uplate na istom mestu",
    ],
    sections: [
      {
        heading: "Šta pregledamo",
        items: [
          "Putnička i laka teretna vozila do 4 t",
          "Motocikli",
          "Traktori i priključna vozila za traktore (bez ograničenja mase)",
        ],
      },
      {
        heading: "Atesti i ispitivanja",
        body: "U saradnji sa AMSS-CMS obavljamo ispitivanja i izdajemo atest, a po potrebi i za:",
        items: [
          "ugradnju auto-gasa (TNG/LPG)",
          "samogradnju traktorskih i auto prikolica",
          "izmene na vozilu i slične intervencije",
        ],
      },
    ],
    image: "/images/gallery/sl_5.jpg",
    imageAlt: "Tehnički pregled vozila – provera farova na stanici BMB u Bačkom Petrovcu",
    faq: [
      {
        q: "Do koje mase vozila radite tehnički pregled?",
        a: "Pregledamo motorna vozila do 4 t najveće dozvoljene mase. Traktori i priključna vozila za traktore pregledaju se bez ograničenja mase.",
      },
      {
        q: "Mogu li odmah da registrujem vozilo nakon pregleda?",
        a: "Da. Registraciju, obavezno osiguranje i plaćanje troškova obavljate na istom mestu, a registracionu nalepnicu dobijate odmah po registraciji.",
      },
      {
        q: "Kako da se raspitam o ceni?",
        a: "Pozovite nas na 021 780 555 ili iskoristite besplatan SMS kalkulator na 069 60 30 30 – cenu registracije dobijate za nekoliko trenutaka.",
      },
    ],
  },
  {
    slug: "registracija-vozila",
    icon: "file",
    title: "Registracija vozila",
    short:
      "Registracija i prenos vlasništva uz preuzimanje vozila, nalepnicu odmah i plaćanje na rate do 12 meseci.",
    seoTitle: "Registracija vozila Bački Petrovac",
    seoDescription:
      "Registracija vozila u Bačkom Petrovcu: preuzimamo neregistrovano vozilo i vraćamo ga registrovano, nalepnica odmah, kartice do 12 rata, SMS kalkulator cene. Pozovite 021 780 555.",
    h1: "Registracija vozila u Bačkom Petrovcu",
    intro:
      "Preuzimamo vaše neregistrovano vozilo i vraćamo ga registrovano. Nalepnicu izdajemo odmah po registraciji, a trošak možete da platite platnim karticama na do 12 mesečnih rata.",
    highlights: [
      "Preuzimamo neregistrovano vozilo i vraćamo ga registrovano",
      "Registraciona nalepnica odmah po registraciji",
      "Plaćanje karticama do 12 mesečnih rata",
      "Besplatan SMS kalkulator cene registracije",
    ],
    sections: [
      {
        heading: "Potrebna dokumenta",
        items: [
          "Fizička lica (motorna vozila): lična karta i saobraćajna dozvola.",
          "Pravna lica (motorna vozila): izvod iz APR-a, ovlašćenje na memorandumu za podnošenje zahteva i preuzimanje nalepnice, dokaz o uplati iz banke.",
          "Fizička lica (lizing): izvod iz APR-a lizing kuće, ovlašćenje na memorandumu i dokaz o uplati iz banke.",
          "Pravna lica (lizing): izvod iz APR-a lizing kuće i korisnika lizinga, ugovor o lizingu, ovlašćenje na memorandumu i dokaz o uplati iz banke.",
        ],
      },
      {
        heading: "Prenos vlasništva (kupoprodaja)",
        body: "Za promenu vlasnika potrebni su ugovor o kupoprodaji, plaćen porez kod poreske uprave prodavca i promena registracije u MUP-u. Pomažemo vam oko cele procedure, a po želji odlazimo u MUP umesto vas.",
      },
      {
        heading: "Propisi",
        body: "Registracija se obavlja u skladu sa pravilnikom objavljenim u „Sl. glasniku RS“, br. 69/10.",
      },
    ],
    image: "/images/gallery/sl_1.jpg",
    imageAlt: "Poslovnica BMB u Bačkom Petrovcu – registracija vozila",
    faq: [
      {
        q: "Koja dokumenta su potrebna za registraciju vozila?",
        a: "Fizička lica donose ličnu kartu i saobraćajnu dozvolu. Pravna lica donose izvod iz APR-a, ovlašćenje na memorandumu i dokaz o uplati. Za vozila na lizing spisak je malo drugačiji – pogledajte listu na ovoj stranici ili nas pozovite.",
      },
      {
        q: "Da li mogu da platim registraciju na rate?",
        a: "Da, prihvatamo platne kartice (Visa, Mastercard) uz mogućnost otplate na do 12 mesečnih rata.",
      },
      {
        q: "Da li preuzimate vozilo na registraciju?",
        a: "Da. Preuzimamo neregistrovano vozilo od klijenta i vraćamo ga registrovano, sa registracionom nalepnicom.",
      },
      {
        q: "Kako funkcioniše SMS kalkulator?",
        a: "Pošaljite SMS na 069 60 30 30 (besplatno iz svih mreža) u formatu: bmb [tip vozila] [kW ili nosivost] [zapremina motora u cm³] [godina proizvodnje]. Primer: bmb put 44 1242 2004. Tipovi: put (putničko), ter (teretno), mot (motocikl).",
      },
    ],
  },
  {
    slug: "osiguranje-vozila",
    icon: "shield",
    title: "Osiguranje vozila (AMSO)",
    short:
      "Ovlašćeni zastupnik AMSO osiguranja: obavezno osiguranje, kasko, AMS članstvo i dokumenta.",
    seoTitle: "Osiguranje vozila AMSO Bački Petrovac",
    seoDescription:
      "Osiguranje vozila u Bačkom Petrovcu – ovlašćeni zastupnik AMSO. Obavezno osiguranje uz registraciju, kasko, AMS članstvo, zelena karta. Pozovite 021 780 555.",
    h1: "Osiguranje vozila u Bačkom Petrovcu – AMSO",
    intro:
      "Mi smo ovlašćeni zastupnik AMSO osiguranja na teritoriji Bačkog Petrovca i imamo licencu za prodaju osiguranja. Obavezno osiguranje možete da zaključite zajedno sa registracijom, na jednom mestu.",
    highlights: [
      "Ovlašćeni zastupnik AMSO sa licencom za prodaju osiguranja",
      "Obavezno osiguranje uz registraciju",
      "Kasko osiguranje: nezgode, vremenske nepogode, radnje trećih lica, požar",
      "AMS članstvo i pomoć na putu",
    ],
    sections: [
      {
        heading: "Šta nudimo",
        items: [
          "AMS osiguranja (AMSO) – obavezno i kasko",
          "AMS članstvo",
          "Dokumenta – zelena karta, međunarodna vozačka dozvola, međunarodno ovlašćenje",
        ],
      },
      {
        heading: "Kasko osiguranje",
        body: "Kasko pokriva štetu nastalu usled saobraćajnih nezgoda, vremenskih nepogoda, radnji trećih lica i požara.",
      },
    ],
    image: "/images/orig/amso_usluge.jpg",
    imageAlt: "AMSO osiguranje – ovlašćeni zastupnik u Bačkom Petrovcu",
    faq: [
      {
        q: "Da li mogu da zaključim osiguranje zajedno sa registracijom?",
        a: "Da. Obavezno osiguranje mora da prati registraciju, a kod nas oba koraka obavljate na istom mestu.",
      },
      {
        q: "Šta pokriva kasko osiguranje?",
        a: "Kasko pokriva štetu od saobraćajnih nezgoda, vremenskih nepogoda, radnji trećih lica i požara.",
      },
      {
        q: "Mogu li kod vas da dobijem zelenu kartu?",
        a: "Da, izdajemo zelenu kartu (međunarodno osiguranje), kao i međunarodnu vozačku dozvolu i međunarodno ovlašćenje.",
      },
    ],
  },
  {
    slug: "salterske-usluge",
    icon: "wallet",
    title: "Šalterske usluge",
    short:
      "Plaćanje svih vrsta računa uz minimalnu proviziju – gotovinom, virmanom, čekovima ili karticama.",
    seoTitle: "Šalterske usluge i plaćanje računa Bački Petrovac",
    seoDescription:
      "Šalterske usluge u Bačkom Petrovcu: plaćanje svih vrsta računa uz minimalnu proviziju, popunjavanje uplatnica, gotovina, virman, čekovi i kartice. Lenjinova 36.",
    h1: "Šalterske usluge i plaćanje računa",
    intro:
      "Popunjavamo sve potrebne uplatnice umesto vas i plaćamo sve vrste računa uz minimalnu šaltersku proviziju – uštedite vreme i novac.",
    highlights: [
      "Plaćanje svih vrsta računa",
      "Popunjavanje uplatnica umesto vas",
      "Gotovina, virman, čekovi i kartice",
      "Fotokopiranje potrebnih dokumenata",
    ],
    sections: [
      {
        heading: "Načini plaćanja",
        items: [
          "Gotovinom na licu mesta",
          "Virmanom (bezgotovinski)",
          "Čekovima građana – odloženo 6 do 12 meseci",
          "Platnim karticama Visa i Mastercard",
        ],
      },
      {
        heading: "Dodatno",
        body: "Fotokopiramo dokumenta potrebna za registraciju i druge postupke, tako da sve završavate na jednom mestu.",
      },
    ],
    image: "/images/gallery/sl_8.jpg",
    imageAlt: "Šalter sa računarima i štampačima u poslovnici BMB",
    faq: [
      {
        q: "Koje račune mogu da platim kod vas?",
        a: "Plaćamo sve vrste računa uz minimalnu šaltersku proviziju. Uplatnice popunjavamo mi.",
      },
      {
        q: "Da li prihvatate kartice?",
        a: "Da, prihvatamo Visa i Mastercard platne kartice, a za usluge registracije i na do 12 mesečnih rata.",
      },
    ],
  },
  {
    slug: "dodatne-usluge",
    icon: "plus",
    title: "Dodatne usluge",
    short:
      "Zelena karta, međunarodna vozačka dozvola, međunarodno ovlašćenje i odlazak u MUP po vašem nalogu.",
    seoTitle: "Zelena karta, međunarodna vozačka dozvola – Bački Petrovac",
    seoDescription:
      "Zelena karta, međunarodna vozačka dozvola, međunarodno ovlašćenje, fotokopiranje i odlazak u MUP po zahtevu klijenta – BMB Bački Petrovac.",
    h1: "Dodatne usluge: zelena karta, međunarodna dokumenta, MUP",
    intro:
      "Pored registracije, tehničkog pregleda i osiguranja, obavljamo i niz dodatnih usluga koje vam štede vreme.",
    highlights: [
      "Zelena karta (međunarodno osiguranje)",
      "Međunarodna vozačka dozvola",
      "Međunarodno ovlašćenje",
      "Odlazak u MUP po zahtevu klijenta",
    ],
    sections: [
      {
        heading: "Šta još radimo",
        items: [
          "Zelena karta",
          "Međunarodne vozačke dozvole",
          "Međunarodno ovlašćenje",
          "Fotokopiranje dokumenata",
          "Odlazak u MUP po zahtevu klijenta",
          "Ispitivanje i atesti u saradnji sa AMSS-CMS",
        ],
      },
    ],
    image: "/images/gallery/sl_2.jpg",
    imageAlt: "Poslovnica BMB u Lenjinovoj ulici, Bački Petrovac",
    faq: [
      {
        q: "Idete li u MUP umesto klijenta?",
        a: "Da, na zahtev klijenta odlazimo u MUP i obavljamo potrebne radnje, uz odgovarajuće ovlašćenje.",
      },
    ],
  },
];

const regFaq = SERVICES.find((s) => s.slug === "registracija-vozila")?.faq ?? [];

export const GENERAL_FAQ = [
  {
    q: "Gde se nalazi BMB u Bačkom Petrovcu?",
    a: "Nalazimo se u Lenjinovoj ulici 36, 21470 Bački Petrovac.",
  },
  {
    q: "Kakvo je radno vreme?",
    a: "Radnim danima radimo od 07:00 do 15:00, a subotom od 08:00 do 12:00.",
  },
  ...regFaq,
];

export const CALCULATOR_URL = "https://registracija-vozila.rs/kalkulator-registracije-vozila";

export const SMS_EXAMPLE = "bmb put 44 1242 2004";

export const GALLERY = [
  { src: "/images/gallery/sl_1.jpg", alt: "Poslovnica BMB u Bačkom Petrovcu sa AMSO zastavama" },
  { src: "/images/gallery/sl_2.jpg", alt: "Ulaz i parking ispred poslovnice BMB" },
  { src: "/images/gallery/sl_3.jpg", alt: "Dvorište i parking poslovnice BMB" },
  { src: "/images/gallery/sl_4.jpg", alt: "Vozilo na stazi za tehnički pregled" },
  { src: "/images/gallery/sl_5.jpg", alt: "Kontrola farova tokom tehničkog pregleda" },
  { src: "/images/gallery/sl_6.jpg", alt: "Provera podešenosti farova na vozilu" },
  { src: "/images/gallery/sl_7.jpg", alt: "Kontrola izduvnih gasova na tehničkom pregledu" },
  { src: "/images/gallery/sl_8.jpg", alt: "Računari i štampači za izdavanje dokumentacije" },
  { src: "/images/gallery/sl_9.jpg", alt: "Objekat za tehnički pregled vozila BMB" },
];
