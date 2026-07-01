import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-[1180px] mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="eyebrow">Priča</div>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3rem)] text-cream mt-4">
            Bar građen oko detalja
          </h2>
          <p className="mt-6 text-creamDim leading-loose first-letter:font-display first-letter:text-[3.4rem] first-letter:leading-[0.8] first-letter:float-left first-letter:pr-2.5 first-letter:pt-1.5 first-letter:text-brassSoft first-letter:font-medium">
            Comodo je otvoren 2025. sa jednostavnom idejom &mdash; mjesto gdje
            se dolazi da se ostane. Crni plafon s pozlaćenim lukovima, mermer
            i meko svjetlo prave ambijent u kojem jutarnja kafa isto tako
            dobro zvuči kao i večernji koktel.
          </p>
          <p className="mt-4 text-creamDim leading-loose">
            Gosti najčešće izdvajaju ponudu tople čokolade i pažljivu uslugu,
            a stalni mušterije znaju i za rezidentnog mačka koji ima svoj
            kutak u baru &mdash; neformalni maskota mjesta.
          </p>
          <div className="flex gap-11 mt-8 pt-7 border-t border-brass/20">
            <div>
              <strong className="block font-display text-[1.9rem] text-brassSoft font-medium">
                4.6
              </strong>
              <span className="text-[0.72rem] tracking-wide uppercase text-creamDim">
                Prosječna ocjena
              </span>
            </div>
            <div>
              <strong className="block font-display text-[1.9rem] text-brassSoft font-medium">
                53
              </strong>
              <span className="text-[0.72rem] tracking-wide uppercase text-creamDim">
                Recenzija
              </span>
            </div>
            <div>
              <strong className="block font-display text-[1.9rem] text-brassSoft font-medium">
                1&ndash;5 KM
              </strong>
              <span className="text-[0.72rem] tracking-wide uppercase text-creamDim">
                Prosjek po osobi
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-[460px] overflow-hidden shadow-panel">
          <Image
            src="/interior.jpg"
            alt="Enterijer bara Comodo — crni plafon sa pozlaćenim lukovima i mermerni detalji"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover saturate-[1.05] contrast-[1.03] rotate-[0.4deg] scale-[1.06]"
            priority={false}
          />
          <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(201,162,75,0.28)]" />
          <div className="absolute bottom-5 left-5 bg-ink/70 backdrop-blur-md border border-brass/25 px-4.5 py-3 text-[0.72rem] tracking-wide uppercase text-brassSoft">
            Enterijer &middot; Comodo Bar
          </div>
        </div>
      </div>
    </section>
  );
}
