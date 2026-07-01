import { siteConfig } from "@/lib/site";

const reviews = [
  "Gošća izdvaja Comodo kao jedan od najljepših barova u gradu — hvali enterijer, opuštenu atmosferu i širok izbor koktela na meniju.",
  "Gost opisuje ambijent kao elegantan i prijatan, posebno ističe ponudu tople čokolade te bara mačka koji ima svoj kutak u lokalu.",
  "Recenzija hvali sofisticiran enterijer i izuzetnu uslugu, uz poseban osvrt na kolač sa toplom čokoladom koji u potpunosti opravdava svoje ime."
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="max-w-[640px] mb-8">
          <div className="eyebrow">Utisci gostiju</div>
          <div className="flex items-baseline gap-4 flex-wrap mt-3">
            <span className="font-display text-[3.2rem] text-brassSoft font-medium">
              {siteConfig.rating.value}
            </span>
            <div>
              <div className="text-brass tracking-[2px]">★★★★★</div>
              <div className="text-[0.82rem] text-creamDim">
                na osnovu {siteConfig.rating.count} recenzije na Google mapama
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-brass/20 mt-2.5">
          {reviews.map((text, i) => (
            <div key={i} className="bg-ink px-8 py-9">
              <div className="text-brass tracking-[2px] mb-4">★★★★★</div>
              <p className="text-creamDim leading-relaxed text-[0.94rem]">{text}</p>
              <div className="mt-5 flex items-center gap-2 text-[0.76rem] tracking-wide uppercase text-brassSoft before:content-[''] before:w-3.5 before:h-px before:bg-brassDim">
                Local Guide, Google recenzija
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
