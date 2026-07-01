export default function Footer() {
  return (
    <footer className="py-10 border-t border-brass/20">
      <div className="max-w-[1180px] mx-auto px-8 flex items-center justify-between flex-wrap gap-4">
        <div className="font-display text-[1.1rem] tracking-wide text-creamDim">
          COMODO
        </div>
        <div className="flex gap-6 text-[0.78rem] text-creamDim">
          <a href="#about" className="hover:text-brassSoft transition-colors">
            Priča
          </a>
          <a href="#menu" className="hover:text-brassSoft transition-colors">
            Meni
          </a>
          <a href="#reviews" className="hover:text-brassSoft transition-colors">
            Utisci
          </a>
          <a href="#visit" className="hover:text-brassSoft transition-colors">
            Posjeta
          </a>
        </div>
        <div className="text-[0.75rem] text-creamDim">
          &copy; {new Date().getFullYear()} Comodo Bar, Banja Luka
        </div>
      </div>
    </footer>
  );
}
