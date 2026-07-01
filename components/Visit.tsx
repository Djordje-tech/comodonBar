import { siteConfig } from "@/lib/site";

const todayIndex = new Date().getDay(); // 0 = Sunday
// Map JS getDay() (0=Sun) to our hours array order (0=Ponedjeljak/Monday)
const todayHoursIndex = todayIndex === 0 ? 6 : todayIndex - 1;

export default function Visit() {
  return (
    <section id="visit" className="py-32 bg-ink2">
      <div className="max-w-[1180px] mx-auto px-8 grid md:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow">Radno vrijeme</div>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3rem)] text-cream mt-4">
            Kad nas naći
          </h2>
          <table className="mt-7 w-full border-collapse">
            <tbody>
              {siteConfig.hours.map((h, i) => (
                <tr
                  key={h.day}
                  className={`border-b border-cream/10 ${
                    i === todayHoursIndex ? "text-brassSoft" : ""
                  }`}
                >
                  <td className="py-3 text-[0.92rem] text-creamDim">{h.day}</td>
                  <td
                    className={`py-3 text-right font-display ${
                      i === todayHoursIndex ? "text-brassSoft" : "text-cream"
                    }`}
                  >
                    {h.open} &ndash; {h.close}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative bg-ink border border-brass/20 p-9">
          <div className="checker-arch h-2.5 -mt-9 -mx-9 mb-7" />
          <h3 className="font-display text-[1.5rem] text-cream">Comodo Bar</h3>
          <address className="not-italic mt-3.5 text-creamDim leading-loose text-[0.95rem]">
            {siteConfig.address.street}, {siteConfig.address.city}{" "}
            {siteConfig.address.postalCode}
            <br />
            Bosna i Hercegovina
            <br />
            <br />
            Dine-in &middot; KM 1&ndash;5 po osobi
          </address>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 border border-brassDim px-6 py-3 text-[0.78rem] tracking-widest uppercase text-brassSoft hover:bg-brass hover:text-ink hover:border-brass transition-all"
          >
            Otvori u Google mapama
          </a>
        </div>
      </div>
    </section>
  );
}
