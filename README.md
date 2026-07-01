# Comodo Bar — sajt

Next.js 14 (App Router) + TypeScript + Tailwind CSS + interaktivna 3D scena
(react-three-fiber / three.js) za Comodo Bar, Banja Luka.

## Sadržaj

- `app/` — stranice, layout, metadata, `sitemap.ts` i `robots.ts` (automatski
  generišu `/sitemap.xml` i `/robots.txt`)
- `components/` — sekcije sajta (Header, Hero + 3D scena, About, Menu, Features,
  Reviews, Visit, Footer)
- `lib/site.ts` — svi osnovni podaci o baru (adresa, radno vrijeme, ocjena, URL)
- `lib/menu.ts` — kompletan meni (lako se ažurira, sve stavke idu odavde)
- `public/interior.jpg` — fotografija enterijera

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Prije objave — obavezno izmijeni

1. U `lib/site.ts` postavi `url` na svoj pravi domen (koristi se za SEO,
   sitemap i Open Graph slike).
2. Provjeri cijene u `lib/menu.ts` — nekoliko brojki je pročitano sa slike
   menija i vrijedi ih uporediti sa štampanim cjenovnikom.
3. Po želji dodaj broj telefona u `lib/site.ts` (`phone`).

## Deploy na Vercel

**Opcija A — Vercel CLI**

```bash
npm i -g vercel
vercel
```

Prati uputstva (poveži nalog, izaberi ime projekta) — Vercel će automatski
prepoznati Next.js i podesiti build.

**Opcija B — GitHub + Vercel Dashboard**

1. Napravi novi repozitorijum na GitHubu i pushuj ovaj folder.
2. Na [vercel.com](https://vercel.com) klikni **Add New → Project**, izaberi
   repo — Vercel automatski prepoznaje Next.js (nije potrebna dodatna
   konfiguracija).
3. Klikni **Deploy**.

Nakon deploya, sajt će imati:

- `/sitemap.xml` — generisano iz `app/sitemap.ts`
- `/robots.txt` — generisano iz `app/robots.ts`
- Open Graph i Twitter meta tagove za dijeljenje na društvenim mrežama
- JSON-LD (`BarOrPub`) strukturirane podatke za Google (adresa, radno
  vrijeme, ocjena) — pomaže pri prikazu u pretrazi

## Napomena o 3D sceni

Hero sekcija sadrži interaktivnu 3D scenu (pozlaćeni luk + lebdeći
"mjehurići") napravljenu sa `three.js` preko `@react-three/fiber` i
`@react-three/drei`. Scena reaguje na pokret miša/kursora. Ako želiš da je
isključiš ili zamijeniš, uredi `components/HeroScene.tsx` i `Hero.tsx`.
