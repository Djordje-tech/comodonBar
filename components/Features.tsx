export default function Features() {
  return (
    <section aria-label="Istaknuto" className="grid md:grid-cols-2 gap-px bg-brass/20">
      <div className="bg-ink px-8 md:px-14 py-16 md:py-20">
        <div className="eyebrow">Sezonska ponuda</div>
        <h3 className="font-display text-[1.9rem] text-cream mt-3.5">
          Kuhana vina sa ukusima
        </h3>
        <p className="mt-4 text-creamDim leading-relaxed max-w-[400px]">
          Kada padne temperatura, Comodo priprema kuhano vino po vlastitom
          receptu &mdash; biraš ukus, mi ga zagrijemo. Idealno za duge zimske
          razgovore uz sto.
        </p>
      </div>
      <div className="bg-gradient-to-br from-wine to-wineDeep px-8 md:px-14 py-16 md:py-20">
        <div className="eyebrow [&::before]:bg-brassSoft text-brassSoft">
          Detalj koji gosti pamte
        </div>
        <h3 className="font-display text-[1.9rem] text-cream mt-3.5">
          Rezidentni mačak
        </h3>
        <p className="mt-4 text-[#e9cdcd] leading-relaxed max-w-[400px]">
          U baru živi mačak sa svojim kutkom &mdash; omiljen kod stalnih
          gostiju i čest razlog za povratak, prema riječima posjetilaca.
        </p>
      </div>
    </section>
  );
}
