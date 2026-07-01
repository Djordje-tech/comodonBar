"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Priča" },
  { href: "#menu", label: "Meni" },
  { href: "#reviews", label: "Utisci" },
  { href: "#visit", label: "Posjeta" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "py-3.5 bg-ink/95 border-b border-brass/20 backdrop-blur-md"
          : "py-5 bg-gradient-to-b from-ink/90 to-transparent"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-8 flex items-center justify-between">
        <a href="#" className="font-display text-[1.4rem] leading-none tracking-[0.08em] flex flex-col">
          COMODO
          <span className="font-body text-[0.55rem] tracking-[0.35em] text-brass mt-1 font-normal">
            Bar &amp; Kafe &middot; Est. 2025
          </span>
        </a>
        <nav className="hidden md:flex gap-10 text-[0.82rem] tracking-wide">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-creamDim hover:text-brassSoft transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-brass hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#visit"
          className="border border-brassDim px-5 py-2 text-[0.78rem] tracking-widest text-brassSoft hover:bg-brass hover:text-ink hover:border-brass transition-all"
        >
          Rezerviši sto
        </a>
      </div>
    </header>
  );
}
