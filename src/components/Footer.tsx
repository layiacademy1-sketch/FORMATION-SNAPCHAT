export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex-shrink-0">
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            FORMATION <span className="text-snapchat">SNAPCHAT</span>
          </span>
        </div>
        
        <div className="text-white/40 text-sm font-bold uppercase tracking-widest text-center md:text-right">
          © 2026 FORMATION SNAPCHAT • TOUS DROITS RÉSERVÉS
        </div>
      </div>
    </footer>
  );
}
