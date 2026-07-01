"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 bg-radial-glow overflow-hidden">
      <div className="absolute inset-0 -top-10" aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="eyebrow-center mb-6">Banja Luka</div>
        <h1 className="font-display text-[clamp(3rem,9vw,6.4rem)] leading-[0.95] text-cream">
          Uspori. <br />
          <em className="not-italic font-display italic text-brassSoft font-normal">
            Odaberi
          </em>{" "}
          svoj ukus.
        </h1>
        <p className="mt-6 max-w-[480px] mx-auto text-[1.05rem] text-creamDim leading-relaxed">
          Topla čokolada koja opravdava ime, kafa iz Lavazze, koktel bar i
          tišina koja se osjeti — sve pod jednim pozlaćenim lukom u srcu
          grada.
        </p>
        <div className="mt-11 flex gap-10 flex-wrap justify-center text-[0.78rem] tracking-wide uppercase text-creamDim">
          <div>
            Radno vrijeme
            <strong className="block font-display text-[1.05rem] text-brassSoft mt-1 normal-case tracking-normal font-medium">
              08:00 &mdash; 23:00
            </strong>
          </div>
          <div>
            Ocjena gostiju
            <strong className="block font-display text-[1.05rem] text-brassSoft mt-1 normal-case tracking-normal font-medium">
              4.6 / 5
            </strong>
          </div>
          <div>
            Lokacija
            <strong className="block font-display text-[1.05rem] text-brassSoft mt-1 normal-case tracking-normal font-medium">
              Banja Luka
            </strong>
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-px h-14 bg-gradient-to-b from-brass to-transparent scroll-cue" />
    </section>
  );
}
