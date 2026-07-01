"use client";

import { useRef, useState, MouseEvent } from "react";
import { menu } from "@/lib/menu";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const foldRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const activeCategory = menu.find((m) => m.id === active)!;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = foldRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -4, ry: px * 6 });
  }

  function handleLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <section id="menu" className="py-32 bg-ink2">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="max-w-[640px] mb-14">
          <div className="eyebrow">Meni</div>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3rem)] text-cream mt-4">
            Od jutarnjeg espressa
            <br />
            do večernjeg koktela
          </h2>
          <p className="mt-4 text-creamDim leading-relaxed">
            Cijene su izražene u konvertibilnim markama (KM). Meni se
            povremeno mijenja u zavisnosti od sezone &mdash; pitajte konobara
            za trenutnu ponudu.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5" role="tablist">
          {menu.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5.5 py-2.5 border text-[0.76rem] tracking-widest uppercase transition-all ${
                active === cat.id
                  ? "bg-brass text-ink border-brass font-medium"
                  : "border-brass/25 text-creamDim hover:text-brassSoft hover:border-brassDim"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          ref={foldRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{
            transform: `perspective(1400px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transition: "transform 0.15s ease-out"
          }}
          className="relative mt-11 min-h-[420px] bg-gradient-to-br from-navy to-navy2 border border-brass/20 shadow-panel fold-divider will-change-transform"
        >
          <div className="grid md:grid-cols-2 gap-11 md:gap-0 p-7 md:p-14">
            {activeCategory.groups.map((group, gi) => (
              <div key={gi} className={gi === 0 ? "md:pr-8" : "md:pl-8"}>
                <div className="font-display italic text-[1.5rem] text-brassSoft mb-5 font-medium">
                  {group.title}
                </div>
                {group.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex items-baseline gap-2 py-2.5 border-b border-dashed border-cream/10"
                  >
                    <span className="text-[0.98rem] text-cream">
                      {item.name}
                      {item.note && (
                        <span className="block text-[0.74rem] text-creamDim mt-0.5 font-light">
                          {item.note}
                        </span>
                      )}
                    </span>
                    <span className="flex-1 dot-leader" />
                    <span className="font-display text-[0.98rem] text-brassSoft font-medium whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {activeCategory.footnote && (
            <div className="px-7 md:px-14 pb-9 pt-5 text-[0.78rem] text-creamDim border-t border-brass/10">
              {activeCategory.footnote}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
